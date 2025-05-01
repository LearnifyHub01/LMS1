import ErrorHandler from "../utils/ErrorHandler";
import { Request, Response, NextFunction } from "express";
import { CatchAsyncError } from "./../middleware/catchAsyncErrors";
import cloudinary from "cloudinary";
import {
  createCourse,
  getAllCoursesService,
  getVideoLength,
} from "../services/course.service";
import CourseModel from "../models/course.model";
import { redis } from "../utils/redis";
import mongoose from "mongoose";
import ejs from "ejs";
import path from "path";
import sendMail from "../utils/sendMail";
import NotificationModel from "../models/notification.model";
import { getAllUsersService } from "../services/user.service";
import axios from "axios";
import { io } from "../server";
import userModel from "../models/user.model";


//upload course
export const uploadCourse = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const thumbnail = data.thumbnail;
      const userId = req.user?._id
      if (thumbnail) {
        const myCloud = await cloudinary.v2.uploader.upload(thumbnail, {
          folder: "courses",
        });

        data.thumbnail = {
          public_id: myCloud.public_id,
          url: myCloud.url,
        };
      }
      data.publisher=[userId]
      createCourse(data, res, next);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

interface VideoData {
  videoUrl: string;
  videoLength: number;
  [key: string]: any;
}

//edit course

export const editCourse = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const thumbnail = data.thumbnail;
      const courseId = req.params.id;
      const courseData = (await CourseModel.findById(courseId)) as any;
      if (thumbnail && !thumbnail.startsWith("http")) {
        await cloudinary.v2.uploader.destroy(courseData.thumbnail);
        const myCloud = await cloudinary.v2.uploader.upload(thumbnail, {
          folder: "courses",
        });
        data.thumbnail = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      if (thumbnail.startsWith("https")) {
        data.thumbnail = {
          public_id: courseData?.thumbnail.public_id,
          url: courseData?.thumbnail.url,
        };
      }
      const updatedCourseData = await Promise.all(
        data.courseData.map(async (video: VideoData) => {
          const videoId = video.videoUrl;
          const length = await getVideoLength(videoId);
          return { ...video, videoLength: length };
        })
      );
      data.courseData = updatedCourseData;
      const course = await CourseModel.findByIdAndUpdate(
        courseId,
        {
          $set: data,
        },
        { new: true }
      );
      const rediseCourse = await CourseModel.find().select(
        "-courseData.videoUrl -courseData.suggestion -courseData.questions -courseData.links"
      );
      const updateCourse = await CourseModel.findById(courseId).select(
        "-courseData.videoUrl -courseData.suggestion -courseData.questions -courseData.links"
      );
      await redis.set("allCourses", JSON.stringify(rediseCourse));
      await redis.del(courseId);
      await redis.set(courseId, JSON.stringify(updateCourse), "EX", 604800);
      res.status(201).json({
        success: true,
        course,
      });
    } catch (error: any) {
      console.log(error);
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

//get single course

export const getSingleCourse = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const courseId = req.params.id;

      // Check if course data exists in Redis cache
      // const isCacheExist = await redis.get(courseId);
      // if (isCacheExist) {
      //   const course = JSON.parse(isCacheExist);
      //   console.log('Course from Redis:', course);

      //   return res.status(200).json({
      //     success: true,
      //     course,
      //   });
      // }

      // Fetch course from database and ensure the publisher is populated
      const course = await CourseModel.findById(courseId)
        .select("-courseData.videoUrl -courseData.suggestion -courseData.questions -courseData.links")
        .populate({
          path: "publisher",
          model: "user",
          select: "name email avatar",
        })
        console.log(course)

      if (!course) {
        return next(new ErrorHandler("Course not found", 404));
      }

      //console.log('Course from Database:', course);

      // Store the plain object in Redis to preserve full publisher details
      //await redis.set(courseId, JSON.stringify(course), "EX", 604800); // Cache for 7 days

      return res.status(200).json({
        success: true,
        course,
      });

    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);


//get all course - without purchasing

export const getAllCourses = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
        const courses = await CourseModel.find()
          .select(
            "-courseData.videoUrl -courseData.suggestion -courseData.questions -courseData.links"
          )
          .populate({
            path: "publisher",
            model: "user",
            select: "name email avatar",
          });
          console.log(courses)
        res.status(200).json({
          success: true,
          courses,
        });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

//get course content - only for valid user

export const getCourseByUser = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userCourseList = req.user?.courses
      //console.log('userCourse',userCourseList);
      const courseId = req.params.id;
      //console.log(userCourseList)
      const courseExist = userCourseList?.find(
        (course: any) => course === courseId
      );
      if (!courseExist) {
        return next(
          new ErrorHandler("you are not eligible to access this course", 400)
        );
      }
      const course = await CourseModel.findById(courseId);
      const content = course?.courseData;
      res.status(200).json({
        success: true,
        content,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

export const getEnrolledCourse = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req?.user?._id;
      if (!userId) {
        return next(new ErrorHandler("User not authenticated", 401));
      }

      const user = await userModel
        .findById(userId)
        .populate({
          path: "courses", // Populate the course data
          model: "Course",
          populate: {
            path: "publisher", // Nested population for publisher
            model: "user", // Must match the User model name
            select: "name email avatar", // Optional: limit fields
          },
        });

      if (!user) {
        return next(new ErrorHandler("User not found", 404));
      }
      res.status(200).json({
        success: true,
        courses: user.courses,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

//add question in course

interface IAddQuestionData {
  question: string;
  courseId: string;
  contentId: string;
}

export const addQuestion = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { question, courseId, contentId }: IAddQuestionData = req.body;
      const course = await CourseModel.findById(courseId);
      if (!mongoose.Types.ObjectId.isValid(courseId)) {
        return next(new ErrorHandler("invalid content id", 400));
      }

      const courseContent = course?.courseData?.find((item: any) =>
        item._id.equals(contentId)
      );

      if (!courseContent) {
        return next(new ErrorHandler("invalid content id", 400));
      }

      //create a new que object

      const newQuestion: any = {
        user: req.user,
        question,
        questionReplies: [],
      };

      //add this que to course content
      courseContent.questions.push(newQuestion);
      //console.log(course?.publisher[0])
      if (!course?.publisher || !course?.publisher[0]) {
        return next(new ErrorHandler("No publisher found for this course", 400));
      }
      await NotificationModel.create({
        userId: course?.publisher[0],
        title: "New Question Recieved",
        message: `You have a new question in ${courseContent?.title}`,
      });

      await course?.save();

      res.status(200).json({
        success: true,
        course,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

//add answer in course que.

interface IAddAnswerData {
  answer: string;
  courseId: string;
  contentId: string;
  questionId: string;
}

export const addAnswer = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { answer, courseId, contentId, questionId }: IAddAnswerData =
        req.body;
      const course = await CourseModel.findById(courseId);
      if (!mongoose.Types.ObjectId.isValid(courseId)) {
        return next(new ErrorHandler("invalid content id", 400));
      }
      const content = course?.courseData?.find((item: any) =>
        item._id.equals(contentId)
      );
      if (!content) {
        return next(new ErrorHandler("invalid content id", 400));
      }
      const question = content?.questions?.find((item: any) =>
        item._id.equals(questionId)
      );
      if (!question) {
        return next(new ErrorHandler("invalid question id", 400));
      }
      const newAnswer: any = {
        user: req.user,
        answer,
      };
      question.questionReplies.push(newAnswer);
      await course?.save();

      res.status(200).json({
        success: true,
        course,
      });

      if (req?.user?._id === question.user?._id) {
        //create notification
        await NotificationModel.create({
          userId: course?.publisher[0],
          title: "New Question Reply Received",
          message: `You have a new question reply in ${content.title}`,
        });
      } else {
        const data = {
          name: question.user.name,
          title: content.title,
        };
        const html = await ejs.renderFile(
          path.join(__dirname, "../mails/question-reply.ejs"),
          data
        );

        try {
          await sendMail({
            email: question.user.email,
            subject: "Question-reply",
            templet: "question-reply.ejs",
            data,
          });
        } catch (error: any) {
          return next(new ErrorHandler(error.message, 500));
        }
      }
      res.status(200).json({
        success: true,
        course,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

//get user course

export const getUserCourse = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user?._id;
      const user = await userModel
        .findById(userId)
        .select('_id name email role courses') 
        .populate({
          path: 'courses', 
          populate: {
            path: 'publisher',
            model: 'User',     
            select: 'name email avatar' 
          }
        });

      if (!user) {
        return next(new ErrorHandler("User not found", 404));
      }

      res.status(200).json({
        success: true,
        user,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);
//add review in course

interface IReviewData {
  review: string;
  rating: number;
  userId: string;
}

export const addReview = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userCourseList = req?.user?.courses;
      const courseId = req.params.id;

      const courseExist = userCourseList?.some(
        (course: any) => course._id === courseId.toString()
      );

      if (!courseExist) {
        new ErrorHandler("you are not eligible to access this course", 400);
      }

      const course = await CourseModel.findById(courseId);
      const { review, rating } = req.body as IReviewData;
      console.log(req.body)

      const reviewData: any = {
        user: req.user,
        comment: review,
        rating,
      };
      course?.reviews?.push(reviewData);

      let avg = 0;

      course?.reviews?.forEach((rev: any) => {
        avg += rev.rating;
      });

      if (course) {
        course.ratings = avg / course.reviews.length;
      }

      await course?.save();
      await redis.set(courseId, JSON.stringify(course), "EX", 604800);


      // const notification = {
      //   title: "New Review Received",
      //   message: `${req.user?.name} has given a review in ${course?.name}`,
      // };

      //create notification
      await NotificationModel.create({
        userId: course?.publisher[0],
        title: "New Review Added",
        message: `You have a new Review in ${course?.name}`,
      });
      res.status(200).json({
        success: true,
        course,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

//add reply in review

interface IAddReviewData {
  comment: string;
  courseId: string;
  reviewId: string;
}

export const addReplyToReview = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { comment, courseId, reviewId } = req.body;

      const course = await CourseModel.findById(courseId);

      if (!course) {
        return next(new ErrorHandler("course not found", 400));
      }

      const review = course?.reviews?.find(
        (rev: any) => rev._id.toString() === reviewId
      );
      if (!review) {
        return next(new ErrorHandler("review not found", 400));
      }

      const replyData: any = {
        user: req.user,
        comment,
      };
      if (!review.commentReplies) {
        review.commentReplies = [];
      }
      review.commentReplies.push(replyData);

      await course?.save();
      res.status(200).json({
        success: true,
        course,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

//get all courses   --- only admin
export const getAllCoursesForAdmin = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      getAllCoursesService(req, res);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

// export const deleteCourse = CatchAsyncError(
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const { id } = req.params;
//       const course = await CourseModel.findById(id);
//       if (!course) {
//         return next(new ErrorHandler("course  not exists", 400));
//       }
//       await course.deleteOne({ id });
//       await redis.del(id);
//       res.status(200).json({
//         success: true,
//         message: "Course Deleted Successfully",
//       });
//     } catch (error: any) {
//       return next(new ErrorHandler(error.message, 400));
//     }
//   }
// );

export const generateVideoUrl = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { videoId } = req.body;

      const response = await axios.post(
        `https://dev.vdocipher.com/api/videos/${videoId}/otp`,
        { ttl: 3600 },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Apisecret cEmYiqunTqQaaTqcJjcaAzNhQC7dZAVjugJpzuF6kP7IMNYGrLUH3aLTKxwFLkl9`,
          },
        }
      );
      const videoData = response.data;
      const length = videoData.length;

      res.json(response.data);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

//delete course
export const deleteCourse = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const courseId = req.params.id;

      if (!mongoose.Types.ObjectId.isValid(courseId)) {
        return next(new ErrorHandler("Invalid course ID format", 400));
      }

      const course = await CourseModel.findById(courseId);
      if (!course) {
        return next(new ErrorHandler("Course does not exist", 404));
      }

      await CourseModel.findByIdAndDelete(courseId);
      const rediseCourse = await CourseModel.find().select(
        "-courseData.videoUrl -courseData.suggestion -courseData.questions -courseData.links"
      );
      await redis.set("allCourses", JSON.stringify(rediseCourse));
      await redis.del(courseId);

      res.status(200).json({
        success: true,
        message: "Course deleted successfully",
      });
    } catch (error: any) {
      console.error("Delete course error:", error);
      return next(
        new ErrorHandler(error.message || "Failed to delete course", 500)
      );
    }
  }
);

// Search courses by title
export const searchCourses = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { title } = req.query; // Query param from frontend remains 'title'
      console.log("Received search title:", title);
      if (!title || typeof title !== "string") {
        return next(new ErrorHandler("Title query parameter is required", 400));
      }
      const cacheKey = `search:courses:${title.toLowerCase()}`;
      const cachedCourses = await redis.get(cacheKey);
      if (cachedCourses) {
        const courses = JSON.parse(cachedCourses);
        console.log("Returning cached courses:", courses);
        return res.status(200).json({ success: true, courses });
      }
      console.log("Querying DB with name:", title);
      const courses = await CourseModel.find({
        name: { $regex: title, $options: "i" }, // Changed 'title' to 'name'
      })
        .select("-courseData.videoUrl -courseData.suggestion -courseData.questions -courseData.links")
        .populate({ path: "publisher", model: "user", select: "name email avatar" });
      console.log("Database query result:", courses);
      if (!courses || courses.length === 0) {
        console.log("No courses found for name:", title);
        return res.status(200).json({
          success: true,
          courses: [],
          message: "No courses found matching the search query",
        });
      }
      await redis.set(cacheKey, JSON.stringify(courses), "EX", 3600);
      console.log("Caching courses:", courses);
      res.status(200).json({ success: true, courses });
    } catch (error: any) {
      console.error("Search Error:", error);
      return next(new ErrorHandler(error.message, 500));
    }
  }
);
