// import React, { useState, useEffect } from 'react';
// import {
//   BookOpen,
//   Clock,
//   Award,
//   BarChart2,
//   PlayCircle,
//   ChevronRight
// } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useGetEnrolledCourseQuery } from '@/redux/features/courses/coursesApi';

// interface Course {
//   _id: string;
//   name: string;
//   publisher: {
//     name: string;
//     email: string;
//     avatar: string;
//   };
//   thumbnail: {
//     url: string;
//     public_id: string;
//   };
//   category: string;
//   courseData: { length: number };
//   completedLessons?: number;
//   duration: string;
//   lastAccessed?: string;
//   certificationAvailable?: boolean;
// }

// const calculateOverallProgress = (courses: Course[]): number => {
//   const totalLessons = courses.reduce((total, course) => total + (course.courseData?.length || 0), 0);
//   const completedLessons = courses.reduce((total, course) => total + (course.completedLessons || 0), 0);
//   return totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
// };

// const LearningDashboard: React.FC = () => {
//   const [activeView, setActiveView] = useState<'overview' | 'courses' | 'achievements'>('overview');
//   const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

//   const { data, isLoading, error } = useGetEnrolledCourseQuery(undefined);
//   const enrolledCourses: Course[] = data?.courses || [];
//   const overallProgress = calculateOverallProgress(enrolledCourses);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.5 }
//     }
//   };

//   if (isLoading) return (
//     <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#383838] flex items-center justify-center">
//       <div className="text-center">
//         <div className="animate-pulse w-16 h-16 mx-auto bg-blue-500 rounded-full mb-4"></div>
//         <p className="text-gray-600 dark:text-gray-300">Loading your dashboard...</p>
//       </div>
//     </div>
//   );

//   if (error) return (
//     <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#383838] flex items-center justify-center">
//       <p className="text-gray-600 dark:text-gray-300">Error loading courses. Please try again.</p>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#383838] text-gray-900 dark:text-gray-100 p-4 sm:p-6 lg:p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.header
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-8 sm:mb-12"
//         >
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//             <div>
//               <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
//                 Learning Dashboard
//               </h1>
//               <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">
//                 Track your educational journey
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {['overview', 'courses', 'achievements'].map((view) => (
//                 <motion.button
//                   key={view}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setActiveView(view as any)}
//                   className={`
//                     px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all
//                     ${activeView === view
//                       ? 'bg-blue-600 text-white shadow-lg'
//                       : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}
//                   `}
//                 >
//                   {view.charAt(0).toUpperCase() + view.slice(1)}
//                 </motion.button>
//               ))}
//             </div>
//           </div>
//         </motion.header>

//         {/* Main Content */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           className="grid gap-6 lg:grid-cols-3"
//         >
//           {/* Progress Overview */}
//           <motion.div
//             variants={itemVariants}
//             className="lg:col-span-1 bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6"
//           >
//             <div className="space-y-6">
//               <div className="relative w-40 h-40 mx-auto">
//                 <svg className="w-full h-full" viewBox="0 0 100 100">
//                   <circle
//                     cx="50"
//                     cy="50"
//                     r="45"
//                     fill="none"
//                     stroke="#e5e7eb dark:stroke-gray-600"
//                     strokeWidth="10"
//                   />
//                   <circle
//                     cx="50"
//                     cy="50"
//                     r="45"
//                     fill="none"
//                     stroke="#3b82f6"
//                     strokeWidth="10"
//                     strokeDasharray={`${overallProgress * 2.83}, 283`}
//                     transform="rotate(-90 50 50)"
//                   />
//                 </svg>
//                 <div className="absolute inset-0 flex flex-col items-center justify-center">
//                   <span className="text-3xl font-bold text-blue-600">{overallProgress}%</span>
//                   <span className="text-xs text-gray-500 dark:text-gray-400">Progress</span>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 {[
//                   { icon: BookOpen, label: "Courses", value: enrolledCourses.length },
//                   { icon: Clock, label: "Hours", value: enrolledCourses.reduce((acc, course) => acc + parseInt(course.duration) || 0, 0) },
//                   { icon: Award, label: "Certificates", value: enrolledCourses.filter(c => c.certificationAvailable).length }
//                 ].map(({ icon: Icon, label, value }) => (
//                   <div key={label} className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2">
//                       <Icon className="text-blue-500" size={18} />
//                       <span className="text-sm">{label}</span>
//                     </div>
//                     <span className="font-semibold">{value}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Course List */}
//           <motion.div
//             variants={itemVariants}
//             className="lg:col-span-2 bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6"
//           >
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//               <h2 className="text-xl sm:text-2xl font-semibold">Your Courses</h2>
//               <div className="flex flex-wrap gap-2">
//                 {['All', 'In Progress', 'Completed'].map((filter) => (
//                   <button
//                     key={filter}
//                     className="px-3 py-1 rounded-md text-sm bg-gray-100 dark:bg-gray-600 hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
//                   >
//                     {filter}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="grid gap-4 sm:grid-cols-2">
//               {enrolledCourses.map((course) => (
//                 <motion.div
//                   key={course._id}
//                   whileHover={{ scale: 1.03 }}
//                   className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md cursor-pointer"
//                   onClick={() => setSelectedCourse(course)}
//                 >
//                   <div className="relative h-40">
//                     <img
//                       src={course.thumbnail?.url || '/api/placeholder/400/200'}
//                       alt={course.name}
//                       className="w-full h-full object-cover transition-transform hover:scale-105"
//                     />
//                     <span className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
//                       {course.category}
//                     </span>
//                   </div>
//                   <div className="p-4">
//                     <h3 className="text-lg font-semibold mb-2 line-clamp-1">{course.name}</h3>
//                     <div className="flex justify-between items-center text-sm">
//                       <span className="text-gray-600 dark:text-gray-400">{course.publisher.name}</span>
//                       <div className="flex items-center space-x-1">
//                         <BarChart2 className="text-blue-500" size={14} />
//                         <span>{Math.round(((course.completedLessons || 0) / (course.courseData?.length || 1)) * 100)}%</span>
//                       </div>
//                     </div>
//                     <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
//                       <div
//                         className="bg-blue-500 h-2 rounded-full"
//                         style={{ width: `${((course.completedLessons || 0) / (course.courseData?.length || 1)) * 100}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Selected Course Details */}
//         {selectedCourse && (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mt-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6"
//           >
//             <div className="grid gap-6 lg:grid-cols-2">
//               <div className="space-y-6">
//                 <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
//                   {selectedCourse.name}
//                 </h2>
//                 <div className="space-y-3">
//                   {[
//                     { icon: BookOpen, label: "Lessons", value: `${selectedCourse.completedLessons || 0}/${selectedCourse.courseData?.length || 0}` },
//                     { icon: BarChart2, label: "Completion", value: `${Math.round(((selectedCourse.completedLessons || 0) / (selectedCourse.courseData?.length || 1)) * 100)}%` },
//                     { icon: Clock, label: "Duration", value: selectedCourse.duration }
//                   ].map(({ icon: Icon, label, value }) => (
//                     <div key={label} className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
//                       <div className="flex items-center space-x-2">
//                         <Icon className="text-blue-500" size={18} />
//                         <span className="text-sm">{label}</span>
//                       </div>
//                       <span className="font-semibold">{value}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 shadow-md hover:bg-blue-700 transition-colors"
//                 >
//                   <PlayCircle size={20} />
//                   <span className="font-semibold">Continue Learning</span>
//                   <ChevronRight size={20} />
//                 </motion.button>
//               </div>
//               <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5">
//                 <h3 className="text-lg font-semibold mb-4">Course Progress</h3>
//                 <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mb-3">
//                   <div
//                     className="bg-blue-500 h-3 rounded-full transition-all duration-500"
//                     style={{ width: `${((selectedCourse.completedLessons || 0) / (selectedCourse.courseData?.length || 1)) * 100}%` }}
//                   ></div>
//                 </div>
//                 <p className="text-center text-sm text-gray-600 dark:text-gray-400">
//                   {selectedCourse.completedLessons || 0} of {selectedCourse.courseData?.length || 0} lessons completed
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LearningDashboard;

// import React, { useState, useEffect } from 'react';
// import {
//   BookOpen,
//   Clock,
//   Award,
//   BarChart2,
//   PlayCircle,
//   ChevronRight
// } from 'lucide-react';
// import { motion, progress } from 'framer-motion';
// import { useGetEnrolledCourseQuery } from '@/redux/features/courses/coursesApi';
// import {useGetOverallProgressQuery} from '@/redux/features/progress/progressApi'

// interface Course {
//   _id: string;
//   name: string;
//   publisher: {
//     name: string;
//     email: string;
//     avatar: string;
//   };
//   thumbnail: {
//     url: string;
//     public_id: string;
//   };
//   category: string;
//   courseData: { length: number };
//   completedLessons?: number;
//   duration: string;
//   lastAccessed?: string;
//   certificationAvailable?: boolean;
// }

// const calculateOverallProgress = (progressData:any ,enrolledCourses:Course[])=> {
//   const totalCourse = enrolledCourses?.length
//   const progressPercentage =progressData?.progressData.reduce((sum:any, course:any) => sum + course.progressPercentage, 0) /totalCourse

//  return progressPercentage
// };

// const LearningDashboard: React.FC = () => {
//   const [activeView, setActiveView] = useState<'overview' | 'courses' | 'achievements'>('overview');
//   const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

//   // Fetch enrolled courses data
//   const { data, isLoading, error } = useGetEnrolledCourseQuery(undefined); // You can modify query params as needed
//   const enrolledCourses: Course[] = data?.courses || []; // Ensure this comes from the API response
//   const {data:progressData} = useGetOverallProgressQuery(undefined)
//   const overallProgress = calculateOverallProgress(progressData,enrolledCourses);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.5 }
//     }
//   };

//   if (isLoading) return (
//     <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#383838] flex items-center justify-center">
//       <div className="text-center">
//         <div className="animate-pulse w-16 h-16 mx-auto bg-blue-500 rounded-full mb-4"></div>
//         <p className="text-gray-600 dark:text-gray-300">Loading your dashboard...</p>
//       </div>
//     </div>
//   );

//   if (error) return (
//     <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#383838] flex items-center justify-center">
//       <p className="text-gray-600 dark:text-gray-300">Error loading courses. Please try again.</p>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#383838] text-gray-900 dark:text-gray-100 p-4 sm:p-6 lg:p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.header
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-8 sm:mb-12"
//         >
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//             <div>
//               <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
//                 Learning Dashboard
//               </h1>
//               <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">
//                 Track your educational journey
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {['overview', 'courses', 'achievements'].map((view) => (
//                 <motion.button
//                   key={view}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setActiveView(view as any)}
//                   className={`
//                     px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all
//                     ${activeView === view
//                       ? 'bg-blue-600 text-white shadow-lg'
//                       : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
//                 >
//                   {view.charAt(0).toUpperCase() + view.slice(1)}
//                 </motion.button>
//               ))}
//             </div>
//           </div>
//         </motion.header>

//         {/* Main Content */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           className="grid gap-6 lg:grid-cols-3"
//         >
//           {/* Progress Overview */}
//           <motion.div
//             variants={itemVariants}
//             className="lg:col-span-1 bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6"
//           >
//             <div className="space-y-6">
//               <div className="relative w-40 h-40 mx-auto">
//                 <svg className="w-full h-full" viewBox="0 0 100 100">
//                   <circle
//                     cx="50"
//                     cy="50"
//                     r="45"
//                     fill="none"
//                     stroke="#e5e7eb dark:stroke-gray-600"
//                     strokeWidth="10"
//                   />
//                   <circle
//                     cx="50"
//                     cy="50"
//                     r="45"
//                     fill="none"
//                     stroke="#3b82f6"
//                     strokeWidth="10"
//                     strokeDasharray={`${Number(overallProgress) * 2.83}, 283`}
//                     transform="rotate(-90 50 50)"
//                   />
//                 </svg>
//                 <div className="absolute inset-0 flex flex-col items-center justify-center">
//                   <span className="text-3xl font-bold text-blue-600">{Number(overallProgress)}%</span>
//                   <span className="text-xs text-gray-500 dark:text-gray-400">Progress</span>
//                 </div>
//               </div>

// <div className="space-y-4">
//   {[
//     { icon: BookOpen, label: "Courses", value: enrolledCourses.length },
//     { icon: Clock, label: "Hours", value: enrolledCourses.reduce((acc, course) => acc + parseInt(course.duration) || 0, 0) },
//     { icon: Award, label: "Certificates", value: enrolledCourses.filter(c => c.certificationAvailable).length }
//   ].map(({ icon: Icon, label, value }) => (
//     <div key={label} className="flex items-center justify-between">
//       <div className="flex items-center space-x-2">
//         <Icon className="text-blue-500" size={18} />
//         <span className="text-sm">{label}</span>
//       </div>
//       <span className="font-semibold">{value}</span>
//     </div>
//   ))}
// </div>
//             </div>
//           </motion.div>

//           {/* Course List */}
//           <motion.div
//             variants={itemVariants}
//             className="lg:col-span-2 bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6"
//           >
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//               <h2 className="text-xl sm:text-2xl font-semibold">Your Courses</h2>
//               <div className="flex flex-wrap gap-2">
//                 {['All', 'In Progress', 'Completed'].map((filter) => (
//                   <button
//                     key={filter}
//                     className="px-3 py-1 rounded-md text-sm bg-gray-100 dark:bg-gray-600 hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
//                   >
//                     {filter}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="grid gap-4 sm:grid-cols-2">
//               {enrolledCourses.map((course) => (
//                 <motion.div
//                   key={course._id}
//                   whileHover={{ scale: 1.03 }}
//                   className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md cursor-pointer"
//                   onClick={() => setSelectedCourse(course)}
//                 >
//                   <div className="relative h-40">
//                     <img
//                       src={course.thumbnail?.url || '/api/placeholder/400/200'}
//                       alt={course.name}
//                       className="w-full h-full object-cover transition-transform hover:scale-105"
//                     />
//                     <span className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
//                       {course.category}
//                     </span>
//                   </div>
//                   <div className="p-4">
//                     <h3 className="text-lg font-semibold mb-2 line-clamp-1">{course.name}</h3>
//                     <div className="flex justify-between items-center text-sm">
//                       <span className="text-gray-600 dark:text-gray-400">{course.publisher.name}</span>
//                       <div className="flex items-center space-x-1">
//                         <BarChart2 className="text-blue-500" size={14} />
//                       </div>
//                     </div>
//                     <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
//                       <div
//                         className="bg-blue-500 h-2 rounded-full"
//                         style={{ width: `${((course.completedLessons || 0) / (course.courseData?.length || 1)) * 100}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Selected Course Details */}
// {selectedCourse &&
//   progressData?.find((course:any)=>course.courseId === selectedCourse._id)
// (

//   <motion.div
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     className="mt-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6"
//   >
//     <div className="grid gap-6 lg:grid-cols-2">
//       <div className="space-y-6">
//         <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
//           {selectedCourse.name}
//         </h2>
//         <div className="space-y-3">
//           {[
//             { icon: BookOpen, label: "Lessons", value: `${selectedCourse.completedLessons || 0}/${selectedCourse.courseData?.length || 0}` },
//             { icon: BarChart2, label: "Completion", value: `${Math.round(((selectedCourse.completedLessons || 0) / (selectedCourse.courseData?.length || 1)) * 100)}%` },
//             { icon: Clock, label: "Duration", value: selectedCourse.duration }
//           ].map(({ icon: Icon, label, value }) => (
//             <div key={label} className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
//               <div className="flex items-center space-x-2">
//                 <Icon className="text-blue-500" size={18} />
//                 <span className="text-sm">{label}</span>
//               </div>
//               <span className="font-semibold">{value}</span>
//             </div>
//           ))}
//         </div>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 shadow-md hover:bg-blue-700 transition-colors"
//         >
//           <PlayCircle size={20} />
//           <span className="font-semibold">Continue Learning</span>
//           <ChevronRight size={20} />
//         </motion.button>
//       </div>
//       <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5">
//         <h3 className="text-lg font-semibold mb-4">Course Progress</h3>
//         <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mb-3">
//           <div
//             className="bg-blue-500 h-3 rounded-full transition-all duration-500"
//             style={{ width: `${((selectedCourse.completedLessons || 0) / (selectedCourse.courseData?.length || 1)) * 100}%` }}
//           ></div>
//         </div>
//         <p className="text-center text-sm text-gray-600 dark:text-gray-400">
//           {selectedCourse.completedLessons || 0} of {selectedCourse.courseData?.length || 0} lessons completed
//         </p>
//       </div>
//     </div>
//   </motion.div>
// )}
//       </div>
//     </div>
//   );
// };

// export default LearningDashboard;

// import React, { useState, useEffect } from 'react';
// import {
//   BookOpen,
//   Clock,
//   Award,
//   BarChart2,
//   PlayCircle,
//   ChevronRight
// } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useGetEnrolledCourseQuery } from '@/redux/features/courses/coursesApi';
// import { useGetOverallProgressQuery } from '@/redux/features/progress/progressApi';

// const calculateOverallProgress = (progressData:any, enrolledCourses:any) => {
//   const totalCourse = enrolledCourses?.length;
//   const progressPercentage =
//     progressData?.progressData.reduce((sum:any, course:any) => sum + course.progressPercentage, 0) / totalCourse;

//   return progressPercentage;
// };

// const LearningDashboard = () => {
//   const [activeView, setActiveView] = useState('overview');
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   // Fetch enrolled courses data
//   const { data, isLoading, error } = useGetEnrolledCourseQuery(undefined);
//   const enrolledCourses = data?.courses || [];
//   const { data: progressData } = useGetOverallProgressQuery();
//   const overallProgress = calculateOverallProgress(progressData, enrolledCourses);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.5 }
//     }
//   };

//   if (isLoading) return (
//     <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#383838] flex items-center justify-center">
//       <div className="text-center">
//         <div className="animate-pulse w-16 h-16 mx-auto bg-blue-500 rounded-full mb-4"></div>
//         <p className="text-gray-600 dark:text-gray-300">Loading your dashboard...</p>
//       </div>
//     </div>
//   );

//   if (error) return (
//     <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#383838] flex items-center justify-center">
//       <p className="text-gray-600 dark:text-gray-300">Error loading courses. Please try again.</p>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#383838] text-gray-900 dark:text-gray-100 p-4 sm:p-6 lg:p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.header
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-8 sm:mb-12"
//         >
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//             <div>
//               <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
//                 Learning Dashboard
//               </h1>
//               <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">
//                 Track your educational journey
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {['overview', 'courses', 'achievements'].map((view) => (
//                 <motion.button
//                   key={view}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setActiveView(view)}
//                   className={`
//                     px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all
//                     ${activeView === view
//                       ? 'bg-blue-600 text-white shadow-lg'
//                       : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
//                 >
//                   {view.charAt(0).toUpperCase() + view.slice(1)}
//                 </motion.button>
//               ))}
//             </div>
//           </div>
//         </motion.header>

//         {/* Main Content */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           className="grid gap-6 lg:grid-cols-3"
//         >
//           {/* Progress Overview */}
//           <motion.div
//             variants={itemVariants}
//             className="lg:col-span-1 bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6"
//           >
//             <div className="space-y-6">
//               <div className="relative w-40 h-40 mx-auto">
//                 <svg className="w-full h-full" viewBox="0 0 100 100">
//                   <circle
//                     cx="50"
//                     cy="50"
//                     r="45"
//                     fill="none"
//                     stroke="#e5e7eb dark:stroke-gray-600"
//                     strokeWidth="10"
//                   />
//                   <circle
//                     cx="50"
//                     cy="50"
//                     r="45"
//                     fill="none"
//                     stroke="#3b82f6"
//                     strokeWidth="10"
//                     strokeDasharray={`${Number(overallProgress) * 2.83}, 283`}
//                     transform="rotate(-90 50 50)"
//                   />
//                 </svg>
//                 <div className="absolute inset-0 flex flex-col items-center justify-center">
//                   <span className="text-3xl font-bold text-blue-600">{Number(overallProgress)}%</span>
//                   <span className="text-xs text-gray-500 dark:text-gray-400">Progress</span>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 {[
//                   { icon: BookOpen, label: "Courses", value: enrolledCourses.length },
//                   { icon: Clock, label: "Hours", value: enrolledCourses.reduce((acc:any, course:any) => acc + parseInt(course.duration) || 0, 0) },
//                   { icon: Award, label: "Certificates", value: enrolledCourses.filter(c => c.certificationAvailable).length }
//                 ].map(({ icon: Icon, label, value }) => (
//                   <div key={label} className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2">
//                       <Icon className="text-blue-500" size={18} />
//                       <span className="text-sm">{label}</span>
//                     </div>
//                     <span className="font-semibold">{value}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Course List */}
//           <motion.div
//             variants={itemVariants}
//             className="lg:col-span-2 bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6"
//           >
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//               <h2 className="text-xl sm:text-2xl font-semibold">Your Courses</h2>
//               <div className="flex flex-wrap gap-2">
//                 {['All', 'In Progress', 'Completed'].map((filter) => (
//                   <button
//                     key={filter}
//                     className="px-3 py-1 rounded-md text-sm bg-gray-100 dark:bg-gray-600 hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
//                   >
//                     {filter}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="grid gap-4 sm:grid-cols-2">
//               {enrolledCourses.map((course:any) => (
//                 <motion.div
//                   key={course._id}
//                   whileHover={{ scale: 1.03 }}
//                   className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md cursor-pointer"
//                   onClick={() => setSelectedCourse(course)}
//                 >
//                   <div className="relative h-40">
//                     <img
//                       src={course.thumbnail?.url || '/api/placeholder/400/200'}
//                       alt={course.name}
//                       className="w-full h-full object-cover transition-transform hover:scale-105"
//                     />
//                     <span className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
//                       {course.category}
//                     </span>
//                   </div>
//                   <div className="p-4">
//                     <h3 className="text-lg font-semibold mb-2 line-clamp-1">{course.name}</h3>
//                     <div className="flex justify-between items-center text-sm">
//                       <span className="text-gray-600 dark:text-gray-400">{course.publisher.name}</span>
//                       <div className="flex items-center space-x-1">
//                         <BarChart2 className="text-blue-500" size={14} />
//                       </div>
//                     </div>
//                     <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
//                       <div
//                         className="bg-blue-500 h-2 rounded-full"
//                         style={{ width: `${((course.completedLessons || 0) / (course.courseData?.length || 1)) * 100}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Selected Course Details */}
// {selectedCourse &&
//   progressData?.find((course:any) => course.courseId === selectedCourse._id) && (
//     <motion.div
//       className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
//       onClick={() => setSelectedCourse(null)}
//     >
//       <motion.div
//         className="bg-white dark:bg-gray-800 p-8 rounded-xl w-full max-w-lg"
//         variants={itemVariants}
//       >
//         <h3 className="text-xl font-semibold mb-4">{selectedCourse.name}</h3>
//         <p className="text-sm mb-4">{selectedCourse.description}</p>
//         <div className="space-y-4">
//           <div className="flex justify-between">
//             <span className="text-sm text-gray-600 dark:text-gray-400">Course Duration</span>
//             <span className="text-sm">{selectedCourse.duration} hrs</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-sm text-gray-600 dark:text-gray-400">Lessons</span>
//             <span className="text-sm">{selectedCourse.courseData.length} lessons</span>
//           </div>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="mt-6 px-6 py-2 text-white bg-blue-600 rounded-lg"
//           >
//             Continue Learning
//           </motion.button>
//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }
//       </div>
//     </div>
//   );
// };

// export default LearningDashboard;

// import React, { useState, useEffect } from 'react';
// import {
//   BookOpen,
//   Clock,
//   Award,
//   BarChart2,
//   ChevronRight,
//   PlayCircle
// } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useGetEnrolledCourseQuery } from '@/redux/features/courses/coursesApi';
// import { useGetOverallProgressQuery } from '@/redux/features/progress/progressApi';
// import Link from "next/link";

// // Define interfaces for your data structures
// interface Course {
//   _id: string;
//   name: string;
//   description?: string;
//   thumbnail?: { url: string };
//   category: string;
//   publisher: { name: string };
//   duration: string;
//   certificationAvailable: boolean;
//   courseData: any[]; // Contains lesson data
//   completedLessons?: number;
// }

// interface ProgressData {
//   courseId: string;
//   progressPercentage: number;
//   videos: { videoId: string; isCompleted: boolean }[];  // Added videos array
// }

// interface EnrolledCoursesResponse {
//   courses: Course[];
// }

// interface ProgressResponse {
//   progressData: ProgressData[];
// }

// // Type for the selected course state
// type SelectedCourse = Course | null;
// type Progress = Course & { progressPercentage?: number } | null;

// const calculateOverallProgress = (
//   progressData: ProgressResponse | undefined,
//   enrolledCourses: Course[] | undefined
// ): number => {
//   const totalCourses = enrolledCourses?.length || 0;
//   if (!totalCourses || !progressData) return 0;

//   const progressPercentage =
//     progressData?.progressData?.reduce((sum: number, course: ProgressData) =>
//       sum + course.progressPercentage, 0) / totalCourses;

//   return Math.round(progressPercentage) || 0;
// };

// const LearningDashboard: React.FC = () => {
//   const [activeView, setActiveView] = useState<'overview' | 'courses' | 'achievements'>('overview');
//   const [selectedCourse, setSelectedCourse] = useState<SelectedCourse>(null);
//   const [progress, setProgress] = useState<Progress>(null);

//   // Fetch enrolled courses data
//   const {
//     data,
//     isLoading,
//     error
//   } = useGetEnrolledCourseQuery(undefined) as {
//     data: EnrolledCoursesResponse | undefined;
//     isLoading: boolean;
//     error: any;
//   };

//   const enrolledCourses = data?.courses || [];
//   const { data: progressData } = useGetOverallProgressQuery() as {
//     data: ProgressResponse | undefined
//   };

//   const overallProgress = calculateOverallProgress(progressData, enrolledCourses);

//   // Update progress when a course is selected
//   useEffect(() => {
//     if (selectedCourse && progressData?.progressData) {
//       const courseProgress = enrolledCourses.find(course => course._id === selectedCourse._id);
//       if (courseProgress) {
//         const progressEntry = progressData.progressData.find(p => p.courseId === courseProgress._id);
//         setProgress({
//           ...courseProgress,
//           progressPercentage: progressEntry?.progressPercentage || 0
//         });
//       } else {
//         setProgress(null);
//       }
//     } else {
//       setProgress(null);
//     }
//   }, [selectedCourse, progressData, enrolledCourses]);

//   // Count completed videos for the selected course
//   const countCompletedVideos = (courseId: string): number => {
//     const progressEntry = progressData?.progressData.find(p => p.courseId === courseId);

//     if (progressEntry) {
//       return progressEntry.videos.filter(video => video.isCompleted).length;  // Count videos with isCompleted = true
//     }

//     return 0;  // Return 0 if no progress entry is found
//   };

//   const countComplatedDuration = (courseId: string) => {
//     let duration = 0;

//     const progressEntry = progressData?.progressData.find(p => p.courseId === courseId);
//     const course = enrolledCourses?.find((c: Course) => c._id === courseId);
//     const videos = course?.courseData;
//     console.log(videos)
//     if (!videos || !progressEntry) return 0;

//     for (const video of videos) {
//       const progressVideo = progressEntry.videos.find((v:any )=> v.videoId === video._id);
//       if (progressVideo?.isCompleted) {
//         duration += video.videoLength || 0;
//       }
//     }

//     return duration;
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.5 }
//     }
//   };

//   if (isLoading) return (
//     <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#383838] flex items-center justify-center">
//       <div className="text-center">
//         <div className="animate-pulse w-16 h-16 mx-auto bg-blue-500 rounded-full mb-4"></div>
//         <p className="text-gray-600 dark:text-gray-300">Loading your dashboard...</p>
//       </div>
//     </div>
//   );

//   if (error) return (
//     <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#383838] flex items-center justify-center">
//       <p className="text-gray-600 dark:text-gray-300">Error loading courses. Please try again.</p>
//     </div>
//   );

//   const handleContinueLearning = () => {
//     if (selectedCourse) {
//       <Link href={`/course-access/${selectedCourse._id}`}/>;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#383838] text-gray-900 dark:text-gray-100 p-4 sm:p-6 lg:p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.header
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-8 sm:mb-12"
//         >
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//             <div>
//               <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
//                 Learning Dashboard
//               </h1>
//               <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">
//                 Track your educational journey
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {(['overview', 'courses', 'achievements'] as const).map((view) => (
//                 <motion.button
//                   key={view}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setActiveView(view)}
//                   className={`
//                     px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all
//                     ${activeView === view
//                       ? 'bg-blue-600 text-white shadow-lg'
//                       : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
//                 >
//                   {view.charAt(0).toUpperCase() + view.slice(1)}
//                 </motion.button>
//               ))}
//             </div>
//           </div>
//         </motion.header>

//         {/* Main Content */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           className="grid gap-6 lg:grid-cols-3"
//         >
//           {/* Progress Overview */}
//           <motion.div
//             variants={itemVariants}
//             className="lg:col-span-1 bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6"
//           >
//             <div className="space-y-6">
//               <div className="relative w-40 h-40 mx-auto">
//                 <svg className="w-full h-full" viewBox="0 0 100 100">
//                   <circle
//                     cx="50"
//                     cy="50"
//                     r="45"
//                     fill="none"
//                     stroke="#e5e7eb dark:stroke-gray-600"
//                     strokeWidth="10"
//                   />
//                   <circle
//                     cx="50"
//                     cy="50"
//                     r="45"
//                     fill="none"
//                     stroke="#3b82f6"
//                     strokeWidth="10"
//                     strokeDasharray={`${overallProgress * 2.83}, 283`}
//                     transform="rotate(-90 50 50)"
//                   />
//                 </svg>
//                 <div className="absolute inset-0 flex flex-col items-center justify-center">
//                   <span className="text-3xl font-bold text-blue-600">{overallProgress}%</span>
//                   <span className="text-xs text-gray-500 dark:text-gray-400">Progress</span>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 {[
//                   { icon: BookOpen, label: "Courses", value: enrolledCourses.length },
//                   {
//                     icon: Clock,
//                     label: "Hours",
//                     value: enrolledCourses.reduce((acc, course) =>
//                       acc + (parseInt(course.duration) || 0), 0)
//                   },
//                   {
//                     icon: Award,
//                     label: "Certificates",
//                     value: enrolledCourses.filter(c => c.certificationAvailable).length
//                   }
//                 ].map(({ icon: Icon, label, value }) => (
//                   <div key={label} className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2">
//                       <Icon className="text-blue-500" size={18} />
//                       <span className="text-sm">{label}</span>
//                     </div>
//                     <span className="font-semibold">{value}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Course List */}
//           <motion.div
//             variants={itemVariants}
//             className="lg:col-span-2 bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6"
//           >
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//               <h2 className="text-xl sm:text-2xl font-semibold">Your Courses</h2>
//               <div className="flex flex-wrap gap-2">
//                 {['All', 'In Progress', 'Completed'].map((filter) => (
//                   <button
//                     key={filter}
//                     className="px-3 py-1 rounded-md text-sm bg-gray-100 dark:bg-gray-600 hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
//                   >
//                     {filter}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="grid gap-4 sm:grid-cols-2">
//               {enrolledCourses.map((course) => (
//                 <motion.div
//                   key={course._id}
//                   whileHover={{ scale: 1.03 }}
//                   className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md cursor-pointer"
//                   onClick={() => setSelectedCourse(course)}
//                 >
//                   <div className="relative h-40">
//                     <img
//                       src={course.thumbnail?.url || '/api/placeholder/400/200'}
//                       alt={course.name}
//                       className="w-full h-full object-cover transition-transform hover:scale-105"
//                     />
//                     <span className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
//                       {course.category}
//                     </span>
//                   </div>
//                   <div className="p-4">
//                     <h3 className="text-lg font-semibold mb-2 line-clamp-1">{course.name}</h3>
//                     <div className="flex justify-between items-center text-sm">
//                       <span className="text-gray-600 dark:text-gray-400">{course.publisher.name}</span>
//                       <div className="flex items-center space-x-1">
//                         <BarChart2 className="text-blue-500" size={14} />
//                       </div>
//                     </div>
//                     <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
//                       <div
//                         className="bg-blue-500 h-2 rounded-full"
//                         style={{ width: `${progressData?.progressData?.find(p => p.courseId === course._id)?.progressPercentage || 0}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Selected Course Details */}
//         {selectedCourse && (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mt-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6"
//           >
//             <div className="grid gap-6 lg:grid-cols-2">
//               <div className="space-y-6">
//                 <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
//                   {selectedCourse.name}
//                 </h2>
//                 <div className="space-y-3">
//                   {[
//                     { icon: BookOpen, label: "Lessons", value: selectedCourse.courseData.length },
//                     { icon: Clock, label: "Duration", value: countComplatedDuration(selectedCourse._id)},
//                     {
//                       icon: Award,
//                       label: "Completed Videos",
//                       value: countCompletedVideos(selectedCourse._id)
//                     },
//                     {
//                       icon: BarChart2,
//                       label: "Progress",
//                       value: `${progress?.progressPercentage || 0}%`
//                     }
//                   ].map(({ icon: Icon, label, value }) => (
//                     <div key={label} className="flex items-center justify-between">
//                       <div className="flex items-center space-x-2">
//                         <Icon className="text-blue-500" size={18} />
//                         <span className="text-sm">{label}</span>
//                       </div>
//                       <span className="font-semibold">{value}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 shadow-md hover:bg-blue-700 transition-colors"
//                 >
//                   <PlayCircle size={20} />
//                   <Link href={`/course-access/${selectedCourse._id}`}>
//                     <span className="font-semibold">Continue Learning</span>
//                   </Link>
//                   <ChevronRight size={20} />
//                 </motion.button>
//               </div>

//               <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5">
//                 <h3 className="text-lg font-semibold mb-4">Course Progress</h3>
//                 <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mb-3">
//                   <div
//                     className="bg-blue-500 h-3 rounded-full transition-all duration-500"
//                     style={{ width: `${progress?.progressPercentage || 0}%` }}
//                   ></div>
//                 </div>
//                 <p className="text-center text-sm text-gray-600 dark:text-gray-400">
//                   {progress?.progressPercentage || 0}% completed
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LearningDashboard;

// import React, { useState, useEffect } from "react";
// import { BookOpen, ChevronRight } from "lucide-react";
// import { useGetEnrolledCourseQuery } from "@/redux/features/courses/coursesApi";
// import { useGetOverallProgressQuery } from "@/redux/features/progress/progressApi";
// import Link from "next/link";
// import { duration } from "@mui/material";

// // Define interfaces for your data structures
// interface Course {
//   _id: string;
//   name: string;
//   description?: string;
//   thumbnail?: { url: string };
//   category: string;
//   publisher: { name: string };
//   duration: string;
//   certificationAvailable: boolean;
//   courseData: any[]; // Contains lesson data
//   completedLessons?: number;
// }

// interface ProgressData {
//   courseId: string;
//   progressPercentage: number;
//   videos: { videoId: string; isCompleted: boolean }[];
// }

// interface EnrolledCoursesResponse {
//   courses: Course[];
// }

// interface ProgressResponse {
//   progressData: ProgressData[];
// }

// type SelectedCourse = Course | null;
// type Progress = (Course & { progressPercentage?: number }) | null;

// const calculateOverallProgress = (
//   progressData: ProgressResponse | undefined,
//   enrolledCourses: Course[] | undefined
// ): number => {
//   const totalCourses = enrolledCourses?.length || 0;
//   if (!totalCourses || !progressData) return 0;

//   const progressPercentage =
//     progressData?.progressData?.reduce(
//       (sum: number, course: ProgressData) => sum + course.progressPercentage,
//       0
//     ) / totalCourses;

//   return Math.round(progressPercentage) || 0;
// };

// const LearningDashboard: React.FC = () => {
//   const [activeView, setActiveView] = useState<"overview" | "courses">(
//     "overview"
//   );
//   const [selectedCourse, setSelectedCourse] = useState<SelectedCourse>(null);
//   const [progress, setProgress] = useState<Progress>(null);
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [totalDuration, setTotalDuration] = useState(0);
//   // Fetch enrolled courses data
//   const { data, isLoading, error } = useGetEnrolledCourseQuery(undefined) as {
//     data: EnrolledCoursesResponse | undefined;
//     isLoading: boolean;
//     error: any;
//   };

//   const enrolledCourses = data?.courses || [];
//   const { data: progressData } = useGetOverallProgressQuery() as {
//     data: ProgressResponse | undefined;
//   };

//   const overallProgress = calculateOverallProgress(
//     progressData,
//     enrolledCourses
//   );

//   // Update progress when a course is selected
//   useEffect(() => {
//     if (selectedCourse && progressData?.progressData) {
//       const courseProgress = enrolledCourses.find(
//         (course) => course._id === selectedCourse._id
//       );
//       if (courseProgress) {
//         const progressEntry = progressData.progressData.find(
//           (p) => p.courseId === courseProgress._id
//         );
//         setProgress({
//           ...courseProgress,
//           progressPercentage: progressEntry?.progressPercentage || 0,
//         });
//       } else {
//         setProgress(null);
//       }
//     } else {
//       setProgress(null);
//     }
//   }, [selectedCourse, progressData, enrolledCourses]);

//   // Count completed videos for the selected course
//   const countCompletedVideos = (courseId: string): number => {
//     const progressEntry = progressData?.progressData.find(
//       (p) => p.courseId === courseId
//     );
//     return progressEntry
//       ? progressEntry.videos.filter((video) => video.isCompleted).length
//       : 0;
//   };

//   const countCompletedDuration = (courseId: string): string => {
//     let duration = 0;

//     const progressEntry = progressData?.progressData.find(
//       (p) => p.courseId === courseId
//     );
//     const course = enrolledCourses?.find((c: Course) => c._id === courseId);
//     const videos = course?.courseData;

//     if (!videos || !progressEntry) return "0h 0m";

//     for (const video of videos) {
//       const progressVideo = progressEntry.videos.find(
//         (v: any) => v.videoId === video._id
//       );
//       if (progressVideo?.isCompleted) {
//         duration += video.videoLength || 0;
//       }
//     }

    
//     // Convert duration from seconds to hours and minutes
//     const hours = Math.floor(duration / 3600);
//     const minutes = Math.floor((duration % 3600) / 60);

//     return `${hours}h ${minutes}m`;
//   };

//   if (isLoading)
//     return (
//       <div className="min-h-screen bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
//         <p className="text-gray-600 dark:text-gray-300">Loading dashboard...</p>
//       </div>
//     );

//   if (error)
//     return (
//       <div className="min-h-screen bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
//         <p className="text-red-500">Error loading courses. Please try again.</p>
//       </div>
//     );
//     const countTotalDuration = () => {
//       let duration = 0;
//       progressData?.progressData.forEach((progress) => {
//         progress.videos.forEach((video) => {
//           if (video.isCompleted === true) {
//             const course = enrolledCourses.find(
//               (c: Course) => c._id === progress.courseId
//             );
//             const vid = course?.courseData;
//             const progressVideo = vid?.find((v) => v._id === video.videoId);
//             duration += progressVideo.videoLength || 0;
//           }
//         });
//       });

//       setTotalDuration(duration);
//     };

//     useEffect(() => {
//       countTotalDuration();
//     }, [progressData, enrolledCourses]);
  
     
    

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 sm:p-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <header className="mb-6">
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//             <h1 className="text-2xl font-bold text-blue-600">
//               Learning Dashboard
//             </h1>
//             <div className="flex gap-2">
//               {(["overview", "courses"] as const).map((view) => (
//                 <button
//                   key={view}
//                   onClick={() => setActiveView(view)}
//                   className={`
//                     px-3 py-1 rounded text-sm font-medium
//                     ${
//                       activeView === view
//                         ? "bg-blue-600 text-white"
//                         : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
//                     }`}
//                 >
//                   {view.charAt(0).toUpperCase() + view.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </header>

//         {/* Main Content */}
//         <div className="grid gap-6 md:grid-cols-3">
//           {/* Progress Overview */}
//           <div className="md:col-span-1 bg-white dark:bg-gray-700 rounded-lg shadow p-4">
//             <div className="space-y-4">
//               <div className="relative w-32 h-32 mx-auto">
//                 <svg className="w-full h-full" viewBox="0 0 100 100">
//                   <circle
//                     cx="50"
//                     cy="50"
//                     r="45"
//                     fill="none"
//                     stroke="#e5e7eb"
//                     strokeWidth="8"
//                   />
//                   <circle
//                     cx="50"
//                     cy="50"
//                     r="45"
//                     fill="none"
//                     stroke="#3b82f6"
//                     strokeWidth="8"
//                     strokeDasharray={`${overallProgress * 2.83}, 283`}
//                     transform="rotate(-90 50 50)"
//                   />
//                 </svg>
//                 <div className="absolute inset-0 flex flex-col items-center justify-center">
//                   <span className="text-2xl font-bold text-blue-600">
//                     {overallProgress}%
//                   </span>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <div className="flex justify-between items-center border-b pb-2">
//                   <span>Courses</span>
//                   <span className="font-medium">{enrolledCourses.length}</span>
//                 </div>
//                 <div className="flex justify-between items-center border-b pb-2">
//                   <span>Total Hours</span>
//                   <span className="font-medium">{totalDuration}</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span>Certificates</span>
//                   <span className="font-medium">
//                     {
//                       enrolledCourses.filter((c) => c.certificationAvailable)
//                         .length
//                     }
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Course List */}
//           <div className="md:col-span-2 bg-white dark:bg-gray-700 rounded-lg shadow p-4">
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
//               <h2 className="text-xl font-semibold">Your Courses</h2>
//               <div className="flex gap-2 text-sm">
//                 {["All", "In Progress", "Completed"].map((filter) => (
//                   <button
//                     key={filter}
//                     onClick={() => setActiveFilter(filter)}
//                     className={`px-2 py-1 rounded ${
//                       activeFilter === filter
//                         ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
//                         : "hover:bg-gray-100 dark:hover:bg-gray-600"
//                     }`}
//                   >
//                     {filter}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="grid gap-4 sm:grid-cols-2">
//               {enrolledCourses.map((course) => {
//                 const courseProgress =
//                   progressData?.progressData?.find(
//                     (p) => p.courseId === course._id
//                   )?.progressPercentage || 0;
//                 return (
//                   <div
//                     key={course._id}
//                     className="bg-gray-50 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
//                     onClick={() => setSelectedCourse(course)}
//                   >
//                     <div className="relative h-32">
//                       <img
//                         src={
//                           course.thumbnail?.url || "/api/placeholder/400/200"
//                         }
//                         alt={course.name}
//                         className="w-full h-full object-cover"
//                       />
//                       <span className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs">
//                         {course.category}
//                       </span>
//                     </div>
//                     <div className="p-3">
//                       <h3 className="font-medium mb-1 line-clamp-1">
//                         {course.name}
//                       </h3>
//                       <div className="flex justify-between items-center text-xs text-gray-600 dark:text-gray-400">
//                         <span>{course.publisher.name}</span>
//                         <span>{courseProgress}% complete</span>
//                       </div>
//                       <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5 mt-2">
//                         <div
//                           className="bg-blue-600 h-1.5 rounded-full"
//                           style={{ width: `${courseProgress}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Selected Course Details */}
//         {selectedCourse && (
//           <div className="mt-6 bg-white dark:bg-gray-700 rounded-lg shadow p-4">
//             <div className="grid gap-4 md:grid-cols-2">
//               <div>
//                 <h2 className="text-xl font-bold text-blue-600 mb-4">
//                   {selectedCourse.name}
//                 </h2>

//                 <div className="grid grid-cols-2 gap-3 mb-4">
//                   <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
//                     <div className="text-sm text-gray-500 dark:text-gray-400">
//                       Lessons
//                     </div>
//                     <div className="font-medium">
//                       {selectedCourse.courseData.length}
//                     </div>
//                   </div>
//                   <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
//                     <div className="text-sm text-gray-500 dark:text-gray-400">
//                       Completed
//                     </div>
//                     <div className="font-medium">
//                       {countCompletedVideos(selectedCourse._id)}
//                     </div>
//                   </div>
//                   <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
//                     <div className="text-sm text-gray-500 dark:text-gray-400">
//                       Duration
//                     </div>
//                     <div className="font-medium">
//                       {countCompletedDuration(selectedCourse._id)}
//                     </div>
//                   </div>
//                   <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
//                     <div className="text-sm text-gray-500 dark:text-gray-400">
//                       Progress
//                     </div>
//                     <div className="font-medium">
//                       {progress?.progressPercentage || 0}%
//                     </div>
//                   </div>
//                 </div>
//                 <Link href={`/course-access/${selectedCourse._id}`}>
//                   <button className="w-full bg-blue-600 text-white py-2 rounded flex items-center justify-center space-x-2 hover:bg-blue-700">
//                     <span className="font-medium">Continue Learning</span>
//                     <ChevronRight size={16} />
//                   </button>
//                 </Link>
//               </div>

//               <div className="bg-gray-50 dark:bg-gray-800 rounded p-4 flex flex-col justify-center">
//                 <h3 className="text-lg font-medium mb-3">Course Progress</h3>
//                 <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2">
//                   <div
//                     className="bg-blue-600 h-2 rounded-full transition-all duration-500"
//                     style={{ width: `${progress?.progressPercentage || 0}%` }}
//                   ></div>
//                 </div>
//                 <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
//                   <span>Started</span>
//                   <span>{progress?.progressPercentage || 0}% completed</span>
//                 </div>

//                 <div className="mt-4">
//                   <BookOpen
//                     className="inline-block mr-2 text-blue-600"
//                     size={16}
//                   />
//                   <span className="text-sm">
//                     {countCompletedVideos(selectedCourse._id)} of{" "}
//                     {selectedCourse.courseData.length} lessons completed
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LearningDashboard;





import React, { useState, useEffect } from "react";
import { BookOpen, ChevronRight } from "lucide-react";
import { useGetEnrolledCourseQuery } from "@/redux/features/courses/coursesApi";
import { useGetOverallProgressQuery } from "@/redux/features/progress/progressApi";
import Link from "next/link";

// Define interfaces (unchanged)
interface Course {
  _id: string;
  name: string;
  description?: string;
  thumbnail?: { url: string };
  category: string;
  publisher: { name: string };
  duration: string;
  certificationAvailable: boolean;
  courseData: any[];
  completedLessons?: number;
}

interface ProgressData {
  courseId: string;
  progressPercentage: number;
  videos: { videoId: string; isCompleted: boolean }[];
  certificateDownloaded:Boolean
}

interface EnrolledCoursesResponse {
  courses: Course[];
}

interface ProgressResponse {
  progressData: ProgressData[];
}

type SelectedCourse = Course | null;
type Progress = (Course & { progressPercentage?: number }) | null;

const calculateOverallProgress = (
  progressData: ProgressResponse | undefined,
  enrolledCourses: Course[] | undefined
): number => {
  const totalCourses = enrolledCourses?.length || 0;
  if (!totalCourses || !progressData) return 0;

  const progressPercentage =
    progressData?.progressData?.reduce(
      (sum: number, course: ProgressData) => sum + course.progressPercentage,
      0
    ) / totalCourses;

  return Math.round(progressPercentage) || 0;
};

const LearningDashboard: React.FC = () => {
  const [activeView, setActiveView] = useState<"overview" | "courses">("overview");
  const [selectedCourse, setSelectedCourse] = useState<SelectedCourse>(null);
  const [progress, setProgress] = useState<Progress>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [totalDuration, setTotalDuration] = useState(0);
  const [certificates,setCertificates]=useState(0)
  // Fetch enrolled courses data
  const { data, isLoading, error } = useGetEnrolledCourseQuery(undefined) as {
    data: EnrolledCoursesResponse | undefined;
    isLoading: boolean;
    error: any;
  };

  const enrolledCourses = data?.courses || [];
  const { data: progressData } = useGetOverallProgressQuery() as {
    data: ProgressResponse | undefined;
  };

  const overallProgress = calculateOverallProgress(progressData, enrolledCourses);

  // Count total duration for all completed videos
  const countTotalDuration = () => {
    let duration = 0;
    let count = 0
    if (progressData?.progressData && enrolledCourses) {
      progressData.progressData.forEach((progress) => {
        if(progress.certificateDownloaded){
          count += 1
        }
        progress.videos.forEach((video) => {
          if (video.isCompleted) {
            const course = enrolledCourses.find((c: Course) => c._id === progress.courseId);
            const vid = course?.courseData;
            const progressVideo = vid?.find((v) => v._id === video.videoId);
            duration += progressVideo?.videoLength || 0;
          }
        });
      });
    }
    setTotalDuration(duration);
    setCertificates(count)
  };


  // Run countTotalDuration when progressData or enrolledCourses change
  useEffect(() => {
    countTotalDuration();
  }, [progressData, enrolledCourses]);

  // Update progress when a course is selected
  useEffect(() => {
    if (selectedCourse && progressData?.progressData) {
      const courseProgress = enrolledCourses.find(
        (course) => course._id === selectedCourse._id
      );
      if (courseProgress) {
        const progressEntry = progressData.progressData.find(
          (p) => p.courseId === courseProgress._id
        );
        setProgress({
          ...courseProgress,
          progressPercentage: progressEntry?.progressPercentage || 0,
        });
      } else {
        setProgress(null);
      }
    } else {
      setProgress(null);
    }
  }, [selectedCourse, progressData, enrolledCourses]);

  // Count completed videos for the selected course
  const countCompletedVideos = (courseId: string): number => {
    const progressEntry = progressData?.progressData.find((p) => p.courseId === courseId);
    return progressEntry ? progressEntry.videos.filter((video) => video.isCompleted).length : 0;
  };

  // Count completed duration for the selected course
  const countCompletedDuration = (courseId: string): string => {
    let duration = 0;

    const progressEntry = progressData?.progressData.find((p) => p.courseId === courseId);
    const course = enrolledCourses?.find((c: Course) => c._id === courseId);
    const videos = course?.courseData;

    if (!videos || !progressEntry) return "0h 0m";

    for (const video of videos) {
      const progressVideo = progressEntry.videos.find((v: any) => v.videoId === video._id);
      if (progressVideo?.isCompleted) {
        duration += video.videoLength || 0;
      }
    }

    // Convert duration from seconds to hours and minutes
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);

    return `${hours}h ${minutes}m`;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-300">Loading dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
        <p className="text-red-500">Error loading courses. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-2xl font-bold text-blue-600">Learning Dashboard</h1>
            <div className="flex gap-2">
              {(["overview", "courses"] as const).map((view) => (
                <button
                  key={view}
                  onClick={() => setActiveView(view)}
                  className={`
                    px-3 py-1 rounded text-sm font-medium
                    ${
                      activeView === view
                        ? "bg-blue-600 text-white"
                        : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                    }`}
                >
                  {view.charAt(0).toUpperCase() + view.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Progress Overview */}
          <div className="md:col-span-1 bg-white dark:bg-gray-700 rounded-lg shadow p-4">
            <div className="space-y-4">
              <div className="relative w-32 h-32 mx-auto">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    strokeDasharray={`${overallProgress * 2.83}, 283`}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">{overallProgress}%</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Courses</span>
                  <span className="font-medium">{enrolledCourses.length}</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Total Hours</span>
                  <span className="font-medium">
                    {Math.floor(totalDuration / 3600)}h {Math.floor((totalDuration % 3600) / 60)}m
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Certificates</span>
                  <span className="font-medium">
                    {certificates}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Course List */}
          <div className="md:col-span-2 bg-white dark:bg-gray-700 rounded-lg shadow p-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <h2 className="text-xl font-semibold">Your Courses</h2>
              <div className="flex gap-2 text-sm">
                {["All", "In Progress", "Completed"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-2 py-1 rounded ${
                      activeFilter === filter
                        ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                        : "hover:bg-gray-100 dark:hover:bg-gray-600"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {enrolledCourses.map((course) => {
                const courseProgress =
                  progressData?.progressData?.find((p) => p.courseId === course._id)?.progressPercentage || 0;
                return (
                  <div
                    key={course._id}
                    className="bg-gray-50 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setSelectedCourse(course)}
                  >
                    <div className="relative h-32">
                      <img
                        src={course.thumbnail?.url || "/api/placeholder/400/200"}
                        alt={course.name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                        {course.category}
                      </span>
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium mb-1 line-clamp-1">{course.name}</h3>
                      <div className="flex justify-between items-center text-xs text-gray-600 dark:text-gray-400">
                        <span>{course.publisher.name}</span>
                        <span>{courseProgress}% complete</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-blue-600 h-1.5 rounded-full"
                          style={{ width: `${courseProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected Course Details */}
        {selectedCourse && (
          <div className="mt-6 bg-white dark:bg-gray-700 rounded-lg shadow p-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-bold text-blue-600 mb-4">{selectedCourse.name}</h2>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Lessons</div>
                    <div className="font-medium">{selectedCourse.courseData.length}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Completed</div>
                    <div className="font-medium">{countCompletedVideos(selectedCourse._id)}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Duration</div>
                    <div className="font-medium">{countCompletedDuration(selectedCourse._id)}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Progress</div>
                    <div className="font-medium">{progress?.progressPercentage || 0}%</div>
                  </div>
                </div>
                <Link href={`/course-access/${selectedCourse._id}`}>
                  <button className="w-full bg-blue-600 text-white py-2 rounded flex items-center justify-center space-x-2 hover:bg-blue-700">
                    <span className="font-medium">Continue Learning</span>
                    <ChevronRight size={16} />
                  </button>
                </Link>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded p-4 flex flex-col justify-center">
                <h3 className="text-lg font-medium mb-3">Course Progress</h3>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${progress?.progressPercentage || 0}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>Started</span>
                  <span>{progress?.progressPercentage || 0}% completed</span>
                </div>

                <div className="mt-4">
                  <BookOpen className="inline-block mr-2 text-blue-600" size={16} />
                  <span className="text-sm">
                    {countCompletedVideos(selectedCourse._id)} of {selectedCourse.courseData.length} lessons completed
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningDashboard;