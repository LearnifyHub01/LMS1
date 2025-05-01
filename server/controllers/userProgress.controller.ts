import { Request, Response } from "express";
import UserProgressModel from "../models/userProgress.model";
import CourseModel from "../models/course.model";

// POST /api/progress/certificate
export const markCertificateDownloaded = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?._id;
    console.log(userId)
    const { courseId } = req.body;

    const userProgress = await UserProgressModel.findOne({ userId, courseId });

    if (!userProgress) {
      res.status(404).json({ message: "Progress not found" });
      return;
    }
    
    userProgress.certificateDownloaded = true;
    await userProgress.save();

    res.status(200).json({ message: "Certificate marked as downloaded" });
  } catch (error: any) {
    res.status(500).json({ message: "Error updating certificate status", error: error.message });
  }
};


export const updateVideoProgress = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.user?._id; 
        const { courseId, videoId,isCompleted } = req.body;
        console.log('run')
        let userProgress = await UserProgressModel.findOne({ userId, courseId });

        if (!userProgress) {

            userProgress = new UserProgressModel({ userId, courseId, videos: [] });
        }

        const videoIndex = userProgress.videos.findIndex(v => v.videoId.toString() === videoId);

        if (videoIndex !== -1) {

            userProgress.videos[videoIndex].isCompleted = isCompleted
        } else {

            userProgress.videos.push({
                videoId,
                isCompleted
            });
        }

        const totalVideos = (await CourseModel.findById(courseId))?.courseData.length || 0;
        const completedVideos = userProgress.videos.filter(v => v.isCompleted).length;
        userProgress.progressPercentage = totalVideos > 0 ? (completedVideos / totalVideos) * 100 : 0;
        

        await userProgress.save();

        res.status(200).json({ message: "Progress updated", progress: userProgress });
    } catch (error:any) {
        res.status(500).json({ message: "Error updating progress", error: error.message });
    }
};


export const getUserCourseProgress = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.user?._id;
        const { courseId } = req.params;

        const userProgress = await UserProgressModel.findOne({ userId, courseId }).select('videos progressPercentage');

        if (!userProgress) {
            res.status(404).json({ message: "No progress found for this course" });
            return;
        }

        res.status(200).json({ progress: userProgress });
    } catch (error:any) {
        console.log(error)
        res.status(500).json({ message: "Error fetching progress", error: error.message });
    }
};


// export const getOverallProgress = async (req: Request, res: Response): Promise<void> => {
//     try {
//       const userId = req.user?.id;

//         const progressData = await UserProgressModel.find({ userId });

//         if (!progressData.length) {
//             res.status(404).json({ message: "No progress data found" });
//             return;
//         }
//         const totalProgress = progressData.reduce((acc, course) => acc + course.progressPercentage, 0);
//         const overallProgress = totalProgress / progressData.length;

//         res.status(200).json({ overallProgress });
//     } catch (error:any) {
//         res.status(500).json({ message: "Error fetching overall progress", error: error.message });
//     }
// };

export const getOverallProgress = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.user?._id;
  
      if (!userId) {
        res.status(400).json({ message: "User ID not found" });
        return;
      }
  
      const progressData = await UserProgressModel.find({ userId });
  
      if (!progressData.length) {
        res.status(200).json({ overallProgress: 0, totalCourses: 0 });
        return;
      }
  
    //   const totalProgress = progressData.reduce((acc, course) => acc + course.progressPercentage, 0);
    //   const overallProgress = totalProgress / progressData.length;
  
      res.status(200).json({
        // overallProgress: Math.round(overallProgress),
        // totalCourses: progressData.length,
        progressData
      });
    } catch (error: any) {
      console.error("Error fetching overall progress:", error);
      res.status(500).json({ message: "Error fetching overall progress", error: error.message });
    }
  };