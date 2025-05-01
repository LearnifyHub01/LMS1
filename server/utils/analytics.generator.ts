// import { Document,Model } from "mongoose";
// interface MonthData{
//     month:string,
//     count:string
// }

// export async function generateLast12MonthsData<T extends Document>(
//     model:Model<T>
// ):Promise<{last12Months:MonthData[]}>{
//     const last12Months:MonthData[]=[]
//     const currentDate=new Date()
//     currentDate.setDate(currentDate.getDate()+1)

//     for(let i = 11 ; i>=0;i--){
//         const endDate=new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate()-i*28)
//         const startDate = new Date(endDate.getFullYear(),endDate.getMonth(),endDate.getDate()-28)
        
//         const monthYear = endDate.toLocaleString('default',{day:'numeric',month:'short',year:'numeric'})
//         const count:any = await model.countDocuments({
//             createdAt:{
//                 $gte:startDate,
//                 $lt:endDate
//             },
//         })
//         last12Months.push({month:monthYear,count})
//     }
// return {last12Months}
// }


// import { Document, Model } from "mongoose";

// interface MonthData {
//   month: string;
//   count: number;
// }

// interface AnalyticsData {
//   last12Months: MonthData[];
//   last7Days: MonthData[];
//   last30Days: MonthData[];
//   allTime: number;
// }

// export async function generateAnalyticsData<T extends Document>(
//   model: Model<T>
// ): Promise<AnalyticsData> {
//   const last12Months: MonthData[] = [];
//   const last7Days: MonthData[] = [];
//   const last30Days: MonthData[] = [];
//   const currentDate = new Date();
//   // Set to start of next day to include today fully
//   currentDate.setHours(0, 0, 0, 0);
//   currentDate.setDate(currentDate.getDate() + 1);

//   // Generate Last 12 Months Data (chronological: oldest to newest)
//   for (let i = 11; i >= 0; i--) {
//     const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
//     const startDate = new Date(endDate.getFullYear(), endDate.getMonth(), 1);
//     endDate.setMonth(endDate.getMonth() + 1); // First day of next month

//     const monthYear = startDate.toLocaleString("default", {
//       month: "long",
//       year: "numeric",
//     });

//     const count = await model.countDocuments({
//       createdAt: {
//         $gte: startDate,
//         $lt: endDate,
//       },
//     });
//     last12Months.push({ month: monthYear, count });
//   }
//   // Sort last12Months chronologically (already in order due to loop, but ensuring)
//   last12Months.sort((a, b) => {
//     const dateA = new Date(a.month);
//     const dateB = new Date(b.month);
//     return dateA.getTime() - dateB.getTime();
//   });

//   // Generate Last 30 Days Data (chronological: oldest to newest)
//   for (let i = 29; i >= 0; i--) {
//     const endDate = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth(),
//       currentDate.getDate() - i
//     );
//     const startDate = new Date(
//       endDate.getFullYear(),
//       endDate.getMonth(),
//       endDate.getDate() - 1
//     );

//     const day = startDate.toLocaleString("default", {
//       day: "numeric",
//       month: "short",
//       year: "numeric",
//     });
//     const count = await model.countDocuments({
//       createdAt: {
//         $gte: startDate,
//         $lt: endDate,
//       },
//     });
//     last30Days.push({ month: day, count });
//   }
//   // Sort last30Days chronologically
//   last30Days.sort((a, b) => {
//     const dateA = new Date(a.month);
//     const dateB = new Date(b.month);
//     return dateA.getTime() - dateB.getTime();
//   });

//   // Generate Last 7 Days Data (chronological: oldest to newest)
//   for (let i = 6; i >= 0; i--) {
//     const endDate = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth(),
//       currentDate.getDate() - i
//     );
//     const startDate = new Date(
//       endDate.getFullYear(),
//       endDate.getMonth(),
//       endDate.getDate() - 1
//     );

//     const day = startDate.toLocaleString("default", {
//       day: "numeric",
//       month: "short",
//       year: "numeric",
//     });
//     const count = await model.countDocuments({
//       createdAt: {
//         $gte: startDate,
//         $lt: endDate,
//       },
//     });
//     last7Days.push({ month: day, count });
//   }
//   // Sort last7Days chronologically
//   last7Days.sort((a, b) => {
//     const dateA = new Date(a.month);
//     const dateB = new Date(b.month);
//     return dateA.getTime() - dateB.getTime();
//   });

//   // Generate All Time Data
//   const allTime = await model.countDocuments({});

//   return {
//     last12Months,
//     last7Days,
//     last30Days,
//     allTime,
//   };
// }



// import { Document, Model } from "mongoose";
// import CourseModel from "../models/course.model"; // Adjust import as needed
// import OrderModel from "../models/order.model"; // Adjust import as needed

// interface MonthData {
//   month: string;
//   count: number;
// }

// interface AnalyticsData {
//   last12Months: MonthData[];
//   last7Days: MonthData[];
//   last30Days: MonthData[];
//   allTime: number;
// }

// export async function generateAnalyticsData<T extends Document>(
//   model: Model<T>,
//   userId: string // Added userId parameter
// ): Promise<AnalyticsData> {
//   const last12Months: MonthData[] = [];
//   const last7Days: MonthData[] = [];
//   const last30Days: MonthData[] = [];
//   const currentDate = new Date();
//   // Set to start of next day to include today fully
//   currentDate.setHours(0, 0, 0, 0);
//   currentDate.setDate(currentDate.getDate() + 1);

//   // Get courses published by the teacher
//   const courses = await CourseModel.find({ publisher: userId });
//   const courseIds = courses.map(course => course._id);

//   // Generate Last 12 Months Data (chronological: oldest to newest)
//   for (let i = 11; i >= 0; i--) {
//     const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
//     const startDate = new Date(endDate.getFullYear(), endDate.getMonth(), 1);
//     endDate.setMonth(endDate.getMonth() + 1); // First day of next month

//     const monthYear = startDate.toLocaleString("default", {
//       month: "long",
//       year: "numeric",
//     });

//     const count = await OrderModel.countDocuments({
//       courseId: { $in: courseIds },
//       createdAt: {
//         $gte: startDate,
//         $lt: endDate,
//       },
//     });
//     last12Months.push({ month: monthYear, count });
//   }
//   // Sort last12Months chronologically
//   last12Months.sort((a, b) => {
//     const dateA = new Date(a.month);
//     const dateB = new Date(b.month);
//     return dateA.getTime() - dateB.getTime();
//   });

//   // Generate Last 30 Days Data (chronological: oldest to newest)
//   for (let i = 29; i >= 0; i--) {
//     const endDate = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth(),
//       currentDate.getDate() - i
//     );
//     const startDate = new Date(
//       endDate.getFullYear(),
//       endDate.getMonth(),
//       endDate.getDate() - 1
//     );

//     const day = startDate.toLocaleString("default", {
//       day: "numeric",
//       month: "short",
//       year: "numeric",
//     });
//     const count = await OrderModel.countDocuments({
//       courseId: { $in: courseIds },
//       createdAt: {
//         $gte: startDate,
//         $lt: endDate,
//       },
//     });
//     last30Days.push({ month: day, count });
//   }
//   // Sort last30Days chronologically
//   last30Days.sort((a, b) => {
//     const dateA = new Date(a.month);
//     const dateB = new Date(b.month);
//     return dateA.getTime() - dateB.getTime();
//   });

//   // Generate Last 7 Days Data (chronological: oldest to newest)
//   for (let i = 6; i >= 0; i--) {
//     const endDate = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth(),
//       currentDate.getDate() - i
//     );
//     const startDate = new Date(
//       endDate.getFullYear(),
//       endDate.getMonth(),
//       endDate.getDate() - 1
//     );

//     const day = startDate.toLocaleString("default", {
//       day: "numeric",
//       month: "short",
//       year: "numeric",
//     });
//     const count = await OrderModel.countDocuments({
//       courseId: { $in: courseIds },
//       createdAt: {
//         $gte: startDate,
//         $lt: endDate,
//       },
//     });
//     last7Days.push({ month: day, count });
//   }
//   // Sort last7Days chronologically
//   last7Days.sort((a, b) => {
//     const dateA = new Date(a.month);
//     const dateB = new Date(b.month);
//     return dateA.getTime() - dateB.getTime();
//   });

//   // Generate All Time Data for the teacher's courses
//   const allTime = await OrderModel.countDocuments({
//     courseId: { $in: courseIds },
//   });

//   return {
//     last12Months,
//     last7Days,
//     last30Days,
//     allTime,
//   };
// }


import { Document, Model } from "mongoose";
import CourseModel from "../models/course.model"; // Adjust import as needed
import OrderModel from "../models/order.model"; // Adjust import as needed

interface MonthData {
  month: string;
  count?: number; // For order counts
  revenue?: number; // For revenue
}

interface AnalyticsData {
  last12Months: MonthData[];
  last7Days: MonthData[];
  last30Days: MonthData[];
  allTime: MonthData[]; // Changed to MonthData array for month-wise data
}

export async function generateAnalyticsData<T extends Document>(
  model: Model<T>,
  userId: string,
  type: "count" | "revenue" = "count"
): Promise<AnalyticsData> {
  const last12Months: MonthData[] = [];
  const last7Days: MonthData[] = [];
  const last30Days: MonthData[] = [];
  const allTime: MonthData[] = [];
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  currentDate.setDate(currentDate.getDate() + 1);

  // Get courses published by the teacher
  const courses = await CourseModel.find({ publisher: userId });
  const courseIds = courses.map((course: any) => course._id);
  // Create a map of courseId to price for revenue calculations
  const coursePriceMap = new Map(courses.map((course: any) => [course._id.toString(), course.price]));

  // Generate Last 12 Months Data
  for (let i = 11; i >= 0; i--) {
    const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
    const startDate = new Date(endDate.getFullYear(), endDate.getMonth(), 1);
    endDate.setMonth(endDate.getMonth() + 1);

    const monthYear = startDate.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });

    if (type === "count") {
      const count = await OrderModel.countDocuments({
        courseId: { $in: courseIds },
        createdAt: {
          $gte: startDate,
          $lt: endDate,
        },
      });
      last12Months.push({ month: monthYear, count });
    } else {
      const orders = await OrderModel.find({
        courseId: { $in: courseIds },
        createdAt: {
          $gte: startDate,
          $lt: endDate,
        },
      });
      const revenue = orders.reduce((sum: any, order: any) => {
        const price = coursePriceMap.get(order.courseId.toString()) || 0;
        return sum + price;
      }, 0);
      last12Months.push({ month: monthYear, revenue });
    }
  }
  last12Months.sort((a, b) => {
    const dateA = new Date(a.month);
    const dateB = new Date(b.month);
    return dateA.getTime() - dateB.getTime();
  });

  // Generate Last 30 Days Data
  for (let i = 29; i >= 0; i--) {
    const endDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - i
    );
    const startDate = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate() - 1
    );

    const day = startDate.toLocaleString("default", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    if (type === "count") {
      const count = await OrderModel.countDocuments({
        courseId: { $in: courseIds },
        createdAt: {
          $gte: startDate,
          $lt: endDate,
        },
      });
      last30Days.push({ month: day, count });
    } else {
      const orders = await OrderModel.find({
        courseId: { $in: courseIds },
        createdAt: {
          $gte: startDate,
          $lt: endDate,
        },
      });
      const revenue = orders.reduce((sum: any, order: any) => {
        const price = coursePriceMap.get(order.courseId.toString()) || 0;
        return sum + price;
      }, 0);
      last30Days.push({ month: day, revenue });
    }
  }
  last30Days.sort((a, b) => {
    const dateA = new Date(a.month);
    const dateB = new Date(b.month);
    return dateA.getTime() - dateB.getTime();
  });

  // Generate Last 7 Days Data
  for (let i = 6; i >= 0; i--) {
    const endDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - i
    );
    const startDate = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate() - 1
    );

    const day = startDate.toLocaleString("default", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    if (type === "count") {
      const count = await OrderModel.countDocuments({
        courseId: { $in: courseIds },
        createdAt: {
          $gte: startDate,
          $lt: endDate,
        },
      });
      last7Days.push({ month: day, count });
    } else {
      const orders = await OrderModel.find({
        courseId: { $in: courseIds },
        createdAt: {
          $gte: startDate,
          $lt: endDate,
        },
      });
      const revenue = orders.reduce((sum: any, order: any) => {
        const price = coursePriceMap.get(order.courseId.toString()) || 0;
        return sum + price;
      }, 0);
      last7Days.push({ month: day, revenue });
    }
  }
  last7Days.sort((a, b) => {
    const dateA = new Date(a.month);
    const dateB = new Date(b.month);
    return dateA.getTime() - dateB.getTime();
  });

  // Generate All Time Month-Wise Data
  // Find earliest and latest order dates
  const earliestOrder = await OrderModel.findOne({
    courseId: { $in: courseIds },
  }).sort({ createdAt: 1 });
  const latestOrder = await OrderModel.findOne({
    courseId: { $in: courseIds },
  }).sort({ createdAt: -1 });

  if (earliestOrder && latestOrder) {
    const earliestDate = new Date(earliestOrder.createdAt);
    const latestDate = new Date(latestOrder.createdAt);
    // Set to start of the earliest month
    const startMonth = new Date(earliestDate.getFullYear(), earliestDate.getMonth(), 1);
    // Set to end of the latest month
    const endMonth = new Date(latestDate.getFullYear(), latestDate.getMonth() + 1, 1);

    // Iterate through all months from startMonth to endMonth
    let currentMonth = startMonth;
    while (currentMonth < endMonth) {
      const monthStart = new Date(currentMonth);
      const monthEnd = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);

      const monthYear = monthStart.toLocaleString("default", {
        month: "long",
        year: "numeric",
      });

      if (type === "count") {
        const count = await OrderModel.countDocuments({
          courseId: { $in: courseIds },
          createdAt: {
            $gte: monthStart,
            $lt: monthEnd,
          },
        });
        allTime.push({ month: monthYear, count });
      } else {
        const orders = await OrderModel.find({
          courseId: { $in: courseIds },
          createdAt: {
            $gte: monthStart,
            $lt: monthEnd,
          },
        });
        const revenue = orders.reduce((sum: any, order: any) => {
          const price = coursePriceMap.get(order.courseId.toString()) || 0;
          return sum + price;
        }, 0);
        allTime.push({ month: monthYear, revenue });
      }

      currentMonth.setMonth(currentMonth.getMonth() + 1);
    }
  }
  allTime.sort((a, b) => {
    const dateA = new Date(a.month);
    const dateB = new Date(b.month);
    return dateA.getTime() - dateB.getTime();
  });

  return {
    last12Months,
    last7Days,
    last30Days,
    allTime,
  };
}