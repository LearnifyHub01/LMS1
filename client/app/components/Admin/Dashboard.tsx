// import React, { useEffect, useState } from 'react';
// import Header from './Header';
// import { motion } from 'framer-motion';
// import { FaBook, FaUsers, FaShoppingCart, FaDollarSign } from 'react-icons/fa';
// import { BiRupee } from 'react-icons/bi';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import {useGetAnalyticsQuery,
//   useGetOrderAnalyticsQuery,
//   useGetUserAnalyticsQuery,
//   useGetCourseAnalyticsQuery
// } from '@/redux/features/analytics/analyticsApi'
// function Dashboard() {
//   const {data:analytics} = useGetAnalyticsQuery(undefined)
//   console.log(analytics?.user?.length)
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const fetchAnalytics = async () => {
//       try {
//         const [coursesRes, ordersRes, usersRes] = await Promise.all([
//           fetch("http://localhost:8080/api/v1/get-courses-analytics"),
//           fetch("http://localhost:8080/api/v1/get-orders-analytics"),
//           fetch("http://localhost:8080/api/v1/get-users-analytics"),
//         ]);

//         const coursesData = await coursesRes.json();
//         const ordersData = await ordersRes.json();
//         const usersData = await usersRes.json();

//         const combinedData = coursesData.courses.last12Months.map((item:any, index:any) => ({
//           month: item.month,
//           Courses: item.count,
//           Orders: ordersData.orders.last12Months[index].count,
//           Users: usersData.users.last12Months[index].count,
//         }));

//         setData(combinedData);
//       } catch (err) {
//         console.error("Failed to fetch analytics data", err);
//       }
//     };

//     fetchAnalytics();
//   }, []);
//   const stats = [
//     {
//       title: 'Total Courses',
//       value: analytics?.courses?.length,
//       icon: <FaBook className="text-blue-500 dark:text-blue-400 text-3xl" />,
//      // description: 'Increased by 5% last day',
//     },
//     {
//       title: 'Total Students',
//       value: analytics?.user?.length,
//       icon: <FaUsers className="text-green-500 dark:text-green-400 text-3xl" />,
//       //description: 'Increased by 5% last day',
//     },
//     {
//       title: 'Total Orders',
//       value: analytics?.orders?.length,
//       icon: <FaShoppingCart className="text-yellow-500 dark:text-yellow-400 text-3xl" />,
//      // description: 'Increased by 5% last day',
//     },
//     {
//       title: 'Total Revenue',
//       value: analytics?.amount,
//       icon: <BiRupee className="text-purple-500 dark:text-purple-400 text-3xl" />,
//       //description: 'Increased by 5% last day',
//     },
//   ];

//   const boxVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.2,
//         duration: 0.5,
//         type: 'spring',
//       },
//     }),
//   };

//   return (
//     <div>
//       <Header title="Dashboard" subtitle="" />
//       <div className="w-full max-w-7xl mx-auto px-4">
//         <div className="flex flex-wrap justify-between gap-4">
//           {stats.map((stat, i) => (
//             <motion.div
//               key={stat.title}
//               className="flex items-center gap-4 p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 w-full sm:w-[48%] lg:w-[23%] hover:shadow-md"
//               custom={i}
//               initial="hidden"
//               animate="visible"
//               variants={boxVariants}
//             >
//               <div>{stat.icon}</div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                   {stat.title}
//                 </p>
//                 <p className="text-xl font-bold">{stat.value}</p>
                
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//       <div className="w-full h-[400px] bg-white rounded-2xl shadow-lg p-4">
//       <h2 className="text-xl font-semibold text-gray-800 mb-4">Analytics Overview (Last 12 Months)</h2>
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="month" tick={{ fontSize: 12 }} />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="Courses" stroke="#6366f1" strokeWidth={2} activeDot={{ r: 6 }} />
//           <Line type="monotone" dataKey="Orders" stroke="#10b981" strokeWidth={2} activeDot={{ r: 6 }} />
//           <Line type="monotone" dataKey="Users" stroke="#f97316" strokeWidth={2} activeDot={{ r: 6 }} />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//     </div>
//   );
// }

// export default Dashboard;
// // import React from 'react';
// // import Header from './Header';
// // import { motion } from 'framer-motion';
// // import { FaBook, FaUsers, FaShoppingCart, FaDollarSign } from 'react-icons/fa';

// // function Dashboard() {
// //   const stats = [
// //     {
// //       title: 'Total Courses',
// //       value: 24,
// //       icon: <FaBook className="text-blue-500 dark:text-blue-400 text-2xl" />,
// //       description: 'Increased by 5% last day',
// //       trendColor: 'text-green-500 dark:text-green-400',
// //       bgColor: 'bg-blue-50 dark:bg-blue-900/20',
// //       iconBg: 'bg-blue-100 dark:bg-blue-800/30',
// //     },
// //     {
// //       title: 'Total Students',
// //       value: 340,
// //       icon: <FaUsers className="text-green-500 dark:text-green-400 text-2xl" />,
// //       description: 'Increased by 5% last day',
// //       trendColor: 'text-green-500 dark:text-green-400',
// //       bgColor: 'bg-green-50 dark:bg-green-900/20',
// //       iconBg: 'bg-green-100 dark:bg-green-800/30',
// //     },
// //     {
// //       title: 'Total Orders',
// //       value: 56,
// //       icon: <FaShoppingCart className="text-yellow-500 dark:text-yellow-400 text-2xl" />,
// //       description: 'Increased by 5% last day',
// //       trendColor: 'text-green-500 dark:text-green-400',
// //       bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
// //       iconBg: 'bg-yellow-100 dark:bg-yellow-800/30',
// //     },
// //     {
// //       title: 'Total Revenue',
// //       value: '$4,320',
// //       icon: <FaDollarSign className="text-purple-500 dark:text-purple-400 text-2xl" />,
// //       description: 'Increased by 5% last day',
// //       trendColor: 'text-green-500 dark:text-green-400',
// //       bgColor: 'bg-purple-50 dark:bg-purple-900/20',
// //       iconBg: 'bg-purple-100 dark:bg-purple-800/30',
// //     },
// //   ];

// //   const boxVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: (i:any) => ({
// //       opacity: 1,
// //       y: 0,
// //       transition: {
// //         delay: i * 0.1,
// //         duration: 0.5,
// //         type: 'spring',
// //       },
// //     }),
// //   };

// //   return (
// //     <div className="min-h-screen transition-colors  duration-200">
// //       <Header title="Dashboard" subtitle="" />
// //       <div className="w-full max-w-7xl mx-auto px-4 py-6">
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// //           {stats.map((stat, i) => (
// //             <motion.div
// //               key={stat.title}
// //               className={`flex items-center gap-3 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 ${stat.bgColor} backdrop-blur-sm transition-all duration-200 hover:shadow-md`}
// //               custom={i}
// //               initial="hidden"
// //               animate="visible"
// //               variants={boxVariants}
// //               whileHover={{ scale: 1.02 }}
// //             >
// //               <div className={`${stat.iconBg} p-2 rounded-lg flex items-center justify-center shrink-0`}>
// //                 {stat.icon}
// //               </div>
// //               <div className="min-w-0 flex-1">
// //                 <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 truncate">
// //                   {stat.title}
// //                 </p>
// //                 <p className="text-lg font-bold text-gray-800 dark:text-gray-100">{stat.value}</p>
// //                 <p className="text-xs flex items-center gap-1 mt-1">
// //                   <span className={stat.trendColor}>↑ 5%</span> 
// //                   <span className="text-gray-500 dark:text-gray-400 truncate">last day</span>
// //                 </p>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Dashboard;


// import React from 'react';
// import Header from './Header';
// import { motion } from 'framer-motion';
// import { FaBook, FaUsers, FaShoppingCart } from 'react-icons/fa';
// import { BiRupee } from 'react-icons/bi';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   useGetAnalyticsQuery,
//   useGetOrderAnalyticsQuery,
// } from '@/redux/features/analytics/analyticsApi';

// function Dashboard() {
//   const { data: analytics } = useGetAnalyticsQuery(undefined);
//   const { data: orderAnalytics } = useGetOrderAnalyticsQuery(undefined);

//   const orders = orderAnalytics?.orders?.last12Months || [];

  // const stats = [
  //   {
  //     title: 'Total Courses',
  //     value: analytics?.courses?.length || 0,
  //     icon: <FaBook className="text-blue-500 text-3xl" />,
  //   },
  //   {
  //     title: 'Total Students',
  //     value: analytics?.user?.length || 0,
  //     icon: <FaUsers className="text-green-500 text-3xl" />,
  //   },
  //   {
  //     title: 'Total Orders',
  //     value: analytics?.orders?.length || 0,
  //     icon: <FaShoppingCart className="text-yellow-500 text-3xl" />,
  //   },
  //   {
  //     title: 'Total Revenue',
  //     value: analytics?.amount || 0,
  //     icon: <BiRupee className="text-purple-500 text-3xl" />,
  //   },
  // ];

//   const boxVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.2,
//         duration: 0.5,
//         type: 'spring',
//       },
//     }),
//   };

//   return (
//     <div>
//       <Header title="Dashboard" subtitle="" />
//       <div className="w-full max-w-7xl mx-auto px-4">
//         <div className="flex flex-wrap justify-between gap-4">
//           {stats.map((stat, i) => (
//             <motion.div
//               key={stat.title}
//               className="flex items-center gap-4 p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 w-full sm:w-[48%] lg:w-[23%] hover:shadow-md"
//               custom={i}
//               initial="hidden"
//               animate="visible"
//               variants={boxVariants}
//             >
//               <div>{stat.icon}</div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                   {stat.title}
//                 </p>
//                 <p className="text-xl font-bold">{stat.value}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Only Orders Graph */}
//       <div className="w-full h-[400px] bg-white rounded-2xl shadow-lg p-4 mt-10">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">
//           Orders Overview (Last 12 Months)
//         </h2>
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={orders} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="month" tick={{ fontSize: 12 }} />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="count" stroke="#10b981" strokeWidth={2} activeDot={{ r: 6 }} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

// import React, { useState } from 'react';
// import Header from './Header';
// import { motion } from 'framer-motion';
// import { FaBook, FaUsers, FaShoppingCart } from 'react-icons/fa';
// import { BiRupee } from 'react-icons/bi';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts';
// import {
//   useGetAnalyticsQuery,
//   useGetOrderAnalyticsQuery,
// } from '@/redux/features/analytics/analyticsApi';

// function Dashboard() {
//   const { data: analytics } = useGetAnalyticsQuery(undefined);
//   const { data: orderAnalytics } = useGetOrderAnalyticsQuery(undefined);

//   // Extract analytics data for orders
//   const ordersLast12Months = orderAnalytics?.orders?.last12Months || [];
//   const ordersLast30Days = orderAnalytics?.orders?.last30Days || [];
//   const ordersLast7Days = orderAnalytics?.orders?.last7Days || [];

//   // State to manage selected filter
//   const [selectedFilter, setSelectedFilter] = useState<'last12Months' | 'last30Days' | 'last7Days'>('last12Months');

//   // Determine data to display based on selected filter
//   const chartData = selectedFilter === 'last12Months'
//     ? ordersLast12Months
//     : selectedFilter === 'last30Days'
//     ? ordersLast30Days
//     : ordersLast7Days;

//   // Stats for the dashboard
  // const stats = [
  //   {
  //     title: 'Total Courses',
  //     value: analytics?.courses?.length || 0,
  //     icon: <FaBook className="text-blue-500 text-3xl" />,
  //   },
  //   {
  //     title: 'Total Students',
  //     value: analytics?.user?.length || 0,
  //     icon: <FaUsers className="text-green-500 text-3xl" />,
  //   },
  //   {
  //     title: 'Total Orders',
  //     value: analytics?.orders?.length || 0,
  //     icon: <FaShoppingCart className="text-yellow-500 text-3xl" />,
  //   },
  //   {
  //     title: 'Total Revenue',
  //     value: analytics?.amount || 0,
  //     icon: <BiRupee className="text-purple-500 text-3xl" />,
  //   },
  // ];
//   // Animation variants for stat boxes
//   const boxVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.2,
//         duration: 0.5,
//         type: 'spring',
//       },
//     }),
//   };

//   // Custom tick formatter for X-axis
//   const formatXAxis = (tick: string) => {
//     const date = new Date(tick);
//     if (selectedFilter === 'last12Months') {
//       // Show "Month Year" for monthly data
//       return date.toLocaleString('default', { month: 'short', year: 'numeric' });
//     }
//     // Show "Day Month" for daily data
//     return date.toLocaleString('default', { day: 'numeric', month: 'short' });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
//       <div className="w-full max-w-7xl mx-auto px-4 py-6 overflow-y-auto h-screen">
//         <Header title="Dashboard" subtitle="" />
//         {/* Stats Section */}
//         <div className="flex flex-wrap justify-between gap-4">
//           {stats.map((stat, i) => (
//             <motion.div
//               key={stat.title}
//               className="flex items-center gap-4 p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 w-full sm:w-[48%] lg:w-[23%] hover:shadow-md"
//               custom={i}
//               initial="hidden"
//               animate="visible"
//               variants={boxVariants}
//             >
//               <div>{stat.icon}</div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                   {stat.title}
//                 </p>
//                 <p className="text-xl font-bold">{stat.value}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Orders Graph with Filter Buttons */}
//         <div className="w-full h-[500px] bg-white rounded-2xl shadow-lg p-4 mt-10">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold text-gray-800">
//               Orders Overview ({selectedFilter === 'last12Months' ? 'Last 12 Months' : selectedFilter === 'last30Days' ? 'Last 30 Days' : 'Last 7 Days'})
//             </h2>
//             <div className="flex gap-2">
//               <button
//                 onClick={() => setSelectedFilter('last12Months')}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                   selectedFilter === 'last12Months'
//                     ? 'bg-blue-500 text-white'
//                     : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                 }`}
//               >
//                 12 Months
//               </button>
//               <button
//                 onClick={() => setSelectedFilter('last30Days')}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                   selectedFilter === 'last30Days'
//                     ? 'bg-blue-500 text-white'
//                     : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                 }`}
//               >
//                 30 Days
//               </button>
//               <button
//                 onClick={() => setSelectedFilter('last7Days')}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                   selectedFilter === 'last7Days'
//                     ? 'bg-blue-500 text-white'
//                     : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                 }`}
//               >
//                 7 Days
//               </button>
//             </div>
//           </div>
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart
//               data={chartData}
//               margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
//             >
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis
//                 dataKey="month"
//                 tickFormatter={formatXAxis}
//                 tick={{ fontSize: 12 }}
//               />
//               <YAxis />
//               <Tooltip
//                 labelFormatter={(value) =>
//                   new Date(value).toLocaleString('default', {
//                     day: 'numeric',
//                     month: 'long',
//                     year: 'numeric',
//                   })
//                 }
//               />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="count"
//                 stroke="#10b981"
//                 strokeWidth={2}
//                 activeDot={{ r: 6 }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Spacer to ensure enough content for scrolling */}
//         <div className="h-[200px]"></div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
import React, { useState } from 'react';
import Header from './Header';
import { motion } from 'framer-motion';
import { FaBook, FaUsers, FaShoppingCart, FaChartLine, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { BiRupee } from 'react-icons/bi';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import {
  useGetAnalyticsQuery,
  useGetOrderAnalyticsQuery,
  useGetRevenueAnalyticsQuery,
} from '@/redux/features/analytics/analyticsApi';

// Define types
interface MonthData {
  month: string;
  count?: number;
  revenue?: number;
}

type FilterType = 'last12Months' | 'last30Days' | 'last7Days' | 'allTime';

interface AnalyticsGraphProps {
  title: string;
  data: {
    last12Months: MonthData[];
    last30Days: MonthData[];
    last7Days: MonthData[];
    allTime: MonthData[];
  };
  dataKey: 'count' | 'revenue';
  lineColor: string;
  formatter: (value: number) => [string, string];
  filter: FilterType;
}

// Reusable graph component
const AnalyticsGraph: React.FC<AnalyticsGraphProps> = ({
  title,
  data,
  dataKey,
  lineColor,
  formatter,
  filter,
}) => {
  const chartData = filter === 'last12Months'
    ? data.last12Months
    : filter === 'last30Days'
    ? data.last30Days
    : filter === 'last7Days'
    ? data.last7Days
    : data.allTime;

  const formatXAxis = (tick: string) => {
    const date = new Date(tick);
    return filter === 'last12Months' || filter === 'allTime'
      ? date.toLocaleString('default', { month: 'short', year: 'numeric' })
      : date.toLocaleString('default', { day: 'numeric', month: 'short' });
  };

  const formatYAxis = (value: number) => Math.round(value);

  return (
    <div className="w-full h-[400px] bg-white dark:bg-gray-800 rounded-2xl  p-5">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-blue-400 rounded-full"></div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            {title}
          </h2>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-600" vertical={false} />
          <XAxis
            dataKey="month"
            tickFormatter={formatXAxis}
            tick={{ fontSize: 12, fill: 'currentColor' }}
            stroke="#9ca3af"
            className="dark:text-gray-400"
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: 'currentColor' }}
            stroke="#9ca3af"
            className="dark:text-gray-400"
            tickFormatter={formatYAxis}
            domain={['dataMin', 'dataMax']}
            allowDecimals={false}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderColor: '#e5e7eb',
              color: '#1f2937',
              borderRadius: '0.5rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            }}
            labelStyle={{ color: '#1f2937', fontWeight: 'bold', marginBottom: '5px' }}
            itemStyle={{ color: '#1f2937', padding: '4px 0' }}
            labelFormatter={(value) =>
              new Date(value).toLocaleString('default', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })
            }
            formatter={formatter}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={lineColor}
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 8, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

function Dashboard() {
  const { data: analytics } = useGetAnalyticsQuery(undefined);
  const { data: orderAnalytics } = useGetOrderAnalyticsQuery(undefined);
  const { data: revenueAnalytics } = useGetRevenueAnalyticsQuery(undefined);
  const [activeFilter, setActiveFilter] = useState<FilterType>('last12Months');

  // Extract analytics data
  const ordersData = {
    last12Months: orderAnalytics?.orders?.last12Months || [],
    last30Days: orderAnalytics?.orders?.last30Days || [],
    last7Days: orderAnalytics?.orders?.last7Days || [],
    allTime: orderAnalytics?.orders?.allTime || [],
  };

  const revenueData = {
    last12Months: revenueAnalytics?.revenue?.last12Months || [],
    last30Days: revenueAnalytics?.revenue?.last30Days || [],
    last7Days: revenueAnalytics?.revenue?.last7Days || [],
    allTime: revenueAnalytics?.revenue?.allTime || [],
  };

  // Stats for the dashboard with 1D increase data
  const stats = [
    {
      title: 'Total Courses',
      value: analytics?.courses?.length || 0,
      icon: <FaBook className="text-blue-500 text-3xl" />,
      bgGradient: 'from-blue-500/20 to-blue-400/10',
      iconBg: 'bg-blue-100 dark:bg-blue-900/30',
      increase: 3, // Example 1D increase value
      isPositive: true
    },
    {
      title: 'Total Students',
      value: analytics?.user?.length || 0,
      icon: <FaUsers className="text-green-500 text-3xl" />,
      bgGradient: 'from-green-500/20 to-green-400/10',
      iconBg: 'bg-green-100 dark:bg-green-900/30',
      increase: 12, // Example 1D increase value
      isPositive: true
    },
    {
      title: 'Total Orders',
      value: analytics?.orders?.length || 0,
      icon: <FaShoppingCart className="text-yellow-500 text-3xl" />,
      bgGradient: 'from-yellow-500/20 to-yellow-400/10',
      iconBg: 'bg-yellow-100 dark:bg-yellow-900/30',
      increase: 7, // Example 1D increase value
      isPositive: true
    },
    {
      title: 'Total Revenue',
      value: analytics?.amount || 0,
      icon: <BiRupee className="text-purple-500 text-3xl" />,
      bgGradient: 'from-purple-500/20 to-purple-400/10',
      iconBg: 'bg-purple-100 dark:bg-purple-900/30',
      increase: 2100, // Example 1D increase value
      isPositive: true
    },
  ];

  // Animation variants for stat boxes
  const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, type: 'spring', stiffness: 100 },
    }),
  };

  // Filter options
  const filterOptions: { value: FilterType; label: string }[] = [
    { value: 'last7Days', label: '7 Days' },
    { value: 'last30Days', label: '30 Days' },
    { value: 'last12Months', label: '12 Months' },
    { value: 'allTime', label: 'All Time' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-7xl mx-auto px-6 py-8 overflow-y-auto h-screen">
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              className={`p-6 rounded-2xl shadow-sm bg-gradient-to-br ${stat.bgGradient} text-gray-700 dark:text-gray-100 hover:shadow-md transition-all duration-300`}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={boxVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${stat.iconBg}`}>{stat.icon}</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
                  <p className="text-2xl font-bold mt-1">
                    {stat.title === 'Total Revenue' ? `₹${stat.value}` : stat.value}
                  </p>
                  
                  {/* 1D Increase Indicator */}
                  <div className="flex items-center mt-2">
                    <div className={`flex items-center ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.isPositive ? (
                        <FaArrowUp className="mr-1 text-xs" />
                      ) : (
                        <FaArrowDown className="mr-1 text-xs" />
                      )}
                      <span className="text-sm font-medium">
                        {stat.title === 'Total Revenue' ? `₹${stat.increase}` : stat.increase}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">1D</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Common Filter Section */}
        <div className="flex justify-center mt-10 mb-6">
          <div className="bg-white dark:bg-gray-800 p-1.5 rounded-xl shadow-md inline-flex">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setActiveFilter(option.value)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === option.value
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Period Label */}
        <div className="flex items-center justify-center mb-6">
          <FaChartLine className="text-blue-500 mr-2" />
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Showing data for: 
            <span className="ml-1 text-blue-600 dark:text-blue-400 font-semibold">
              {activeFilter === 'last12Months' ? 'Last 12 Months' : activeFilter === 'last30Days' ? 'Last 30 Days' : activeFilter === 'last7Days' ? 'Last 7 Days' : 'All Time'}
            </span>
          </h3>
        </div>

        {/* Graphs Section - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg">
            <AnalyticsGraph
              title="Orders Overview"
              data={ordersData}
              dataKey="count"
              lineColor="#10b981"
              formatter={(value) => [Math.round(Number(value)).toString(), 'Orders']}
              filter={activeFilter}
            />
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg">
            <AnalyticsGraph
              title="Revenue Overview"
              data={revenueData}
              dataKey="revenue"
              lineColor="#f59e0b"
              formatter={(value) => [`₹${Math.round(Number(value))}`, 'Revenue']}
              filter={activeFilter}
            />
          </div>
        </div>

        {/* Spacer for scrolling */}
        <div className="h-[100px]"></div>
      </div>
    </div>
  );
}

export default Dashboard;