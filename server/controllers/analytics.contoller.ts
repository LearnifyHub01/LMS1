import ErrorHandler from "../utils/ErrorHandler";
import { Request, Response, NextFunction } from "express";
import { CatchAsyncError } from "./../middleware/catchAsyncErrors";
import { generateAnalyticsData } from "../utils/analytics.generator";
import userModel from "../models/user.model";
import CourseModel from "../models/course.model";
import OrderModel from "../models/order.model";

export const getUsersAnalytics = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req?.user?._id
      if (!userId || typeof userId !== "string") {
        return next(new ErrorHandler("User not authenticated or invalid user ID", 401));
      }
      const users = await generateAnalyticsData(OrderModel, userId);
      res.status(200).json({
        success: true,
        users,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

export const getCoursesAnalytics = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req?.user?._id
      if (!userId || typeof userId !== "string") {
        return next(new ErrorHandler("User not authenticated or invalid user ID", 401));
      }
      const courses =await generateAnalyticsData(OrderModel, userId);
      res.status(200).json({
        success: true,
        courses,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

export const getOrdersAnalytics = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req?.user?._id
      if (!userId || typeof userId !== "string") {
        return next(new ErrorHandler("User not authenticated or invalid user ID", 401));
      }
      const orders = await generateAnalyticsData(OrderModel, userId);
      res.status(200).json({
        success: true,
        orders,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

export const getRevenueAnalytics = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req?.user?._id;
      if (!userId || typeof userId !== "string") {
        return next(new ErrorHandler("User not authenticated or invalid user ID", 401));
      }
      const revenue = await generateAnalyticsData(OrderModel, userId, "revenue");
      res.status(200).json({
        success: true,
        revenue,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);


export const getCourseData = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req?.user?._id
            const courses = await CourseModel.find({publisher:userId})
            const courseIds = courses.map(course => course._id);
            const orders = await OrderModel.find({
                courseId: { $in: courseIds }
              })
              let amount = 0
              orders.forEach((order)=>{
                const orderId = order.courseId.toString()
              
                courses.forEach((course)=>{
                    if(course._id.toString() === orderId){
                       amount += course.price 
                    }
                })
            })
            const user = await userModel.find({
                courses: { $in: courseIds }
            });

            const courseCount = courses.length;
            res.status(200).json(
                {
                    courses,
                    orders,
                    amount,
                    user
                }
            )
        } catch (error:any) {
            return next(new ErrorHandler(error.message, 500));
        }
    }
)
