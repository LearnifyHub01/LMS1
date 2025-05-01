// import React, { FC, useState } from "react";
// import {
//   FiChevronDown,
//   FiChevronUp,
//   FiVideo,
//   FiClock
// } from "react-icons/fi";
// import { motion } from "framer-motion";

// type Props = {
//   data: any;
//   activeVideo?: number;
//   setActiveVideo?: (index: number) => void;
//   isDemo?: boolean;
// };

// const CourseContentList: FC<Props> = (props) => {
//   const [visibleSections, setVisibleSections] = useState<Set<string>>(
//     new Set<string>()
//   );

//   // Find unique video sections
//   const videoSections: string[] = [
//     ...new Set<string>(props.data?.map((item: any) => item.videoSection) || []),
//   ];

//   let totalCount: number = 0;

//   const toggleSection = (section: string) => {
//     const newVisibleSections = new Set(visibleSections);
//     if (newVisibleSections.has(section)) {
//       newVisibleSections.delete(section);
//     } else {
//       newVisibleSections.add(section);
//     }
//     setVisibleSections(newVisibleSections);
//   };

//   // Calculate total number of videos and total duration
//   const totalVideos = props.data?.length || 0;
//   const totalDuration = props.data?.reduce(
//     (total: number, item: any) => total + (Number(item.videoLength) || 0),
//     0
//   );
//   const totalHours = Math.floor(totalDuration / 3600);
//   const totalMinutes = Math.floor((totalDuration % 3600) / 60);

//   return (
//     <div className={`w-full ${!props.isDemo && "min-h-screen"}`}>
//       {/* Summary stats */}
//       {!props.isDemo && (
//         <div className="mb-6 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg flex flex-wrap gap-4">
//           <div className="flex items-center">
//             <FiVideo className="text-indigo-600 dark:text-indigo-400 mr-2" />
//             <span className="text-gray-700 dark:text-gray-300">
//               {totalVideos} lessons
//             </span>
//           </div>
//           <div className="flex items-center">
//             <FiClock className="text-indigo-600 dark:text-indigo-400 mr-2" />
//             <span className="text-gray-700 dark:text-gray-300">
//               {totalHours > 0 ? `${totalHours} hours ` : ""}
//               {totalMinutes} minutes total
//             </span>
//           </div>
//         </div>
//       )}

//       {/* Sections */}
//       <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700">
//         {videoSections.map((section: string, sectionIndex: number) => {
//           const isSectionVisible = visibleSections.has(section);

//           // Filter section by videos
//           const sectionVideos: any[] = props.data.filter(
//             (item: any) => item.videoSection === section
//           );

//           const sectionVideoCount: number = sectionVideos.length;
//           const sectionVideoLength: number = sectionVideos.reduce(
//             (totalLength: number, item: any) =>
//               totalLength + (Number(item.videoLength) || 0),
//             0
//           );

//           const sectionStartIndex: number = totalCount;
//           totalCount += sectionVideoCount;

//           // Calculate time format
//           const sectionHours = Math.floor(sectionVideoLength / 3600);
//           const sectionMinutes = Math.floor((sectionVideoLength % 3600) / 60);
//           const timeString = sectionHours > 0
//             ? `${sectionHours} hours ${sectionMinutes} minutes`
//             : `${sectionMinutes} minutes`;

//           return (
//             <div key={section} className="bg-white dark:bg-gray-800">
//               <div
//                 className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
//                 onClick={() => toggleSection(section)}
//               >
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                       {section}
//                     </h3>
//                     <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
//                       {sectionVideoCount} lessons • {timeString}
//                     </p>
//                   </div>
//                   <div className="text-gray-500 dark:text-gray-400">
//                     {isSectionVisible ? (
//                       <FiChevronUp size={20} />
//                     ) : (
//                       <FiChevronDown size={20} />
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Animated content */}
//               {isSectionVisible && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="divide-y divide-gray-100 dark:divide-gray-700"
//                 >
//                   {sectionVideos.map((item: any, index: number) => {
//                     const videoIndex: number = sectionStartIndex + index;
//                     const videoLength = Number(item.videoLength);
//                     const videoHours = Math.floor(videoLength / 3600);
//                     const videoMinutes = Math.floor((videoLength % 3600) / 60);
//                     const videoSeconds = videoLength % 60;

//                     const formattedDuration = videoHours > 0
//                       ? `${videoHours}:${videoMinutes.toString().padStart(2, '0')}:${videoSeconds.toString().padStart(2, '0')}`
//                       : `${videoMinutes}:${videoSeconds.toString().padStart(2, '0')}`;

//                     return (
//                       <div
//                         key={item._id}
//                         className={`
//                           pl-6 pr-4 py-3 flex items-center justify-between
//                           ${videoIndex === props.activeVideo ? "bg-indigo-50 dark:bg-indigo-900/20" : ""}
//                           ${!props.isDemo && "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"}
//                           transition-colors
//                         `}
//                         onClick={() =>
//                           props.isDemo ? null : props?.setActiveVideo?.(videoIndex)
//                         }
//                       >
//                         <div className="flex items-start flex-1 min-w-0">
//                           <FiVideo
//                             size={16}
//                             className="mt-1 mr-3 text-indigo-500 dark:text-indigo-400 flex-shrink-0"
//                           />
//                           <div className="min-w-0">
//                             <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
//                               {item.title}
//                             </h4>
//                             <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
//                               {videoIndex === props.activeVideo && !props.isDemo && (
//                                 <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 mr-2">
//                                   Current
//                                 </span>
//                               )}
//                               Lesson {index + 1}
//                             </p>
//                           </div>
//                         </div>
//                         <div className="flex items-center ml-4">
//                           <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
//                             <FiClock className="mr-1" size={12} />
//                             {formattedDuration}
//                           </span>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </motion.div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CourseContentList;
// import React, { FC, useState } from "react";
// import {
//   FiChevronDown,
//   FiChevronUp,
//   FiVideo,
//   FiClock,
//   FiCheck,
// } from "react-icons/fi";
// import { motion } from "framer-motion";

// type Props = {
//   data: any;
//   activeVideo?: number;
//   setActiveVideo?: (index: number) => void;
//   isDemo?: boolean;
// };

// const CourseContentList: FC<Props> = (props) => {
//   const [visibleSections, setVisibleSections] = useState<Set<string>>(
//     new Set<string>()
//   );

//   // Find unique video sections
//   const videoSections: string[] = [
//     ...new Set<string>(props.data?.map((item: any) => item.videoSection) || []),
//   ];

//   let totalCount: number = 0;

//   const toggleSection = (section: string) => {
//     const newVisibleSections = new Set(visibleSections);
//     if (newVisibleSections.has(section)) {
//       newVisibleSections.delete(section);
//     } else {
//       newVisibleSections.add(section);
//     }
//     setVisibleSections(newVisibleSections);
//   };

//   // Calculate total number of videos and total duration
//   const totalVideos = props.data?.length || 0;
//   const totalDuration = props.data?.reduce(
//     (total: number, item: any) => total + (Number(item.videoLength) || 0),
//     0
//   );
//   const totalHours = Math.floor(totalDuration / 3600);
//   const totalMinutes = Math.floor((totalDuration % 3600) / 60);

//   return (
//     <div className="mt-6 w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
//       {/* Summary stats */}
//       {!props.isDemo && (
//         <div className="p-4 bg-gradient-to-r from-blue-900 to-blue-200 text-white rounded-t-lg">
//           <h2 className="text-xl font-bold mb-2">Course Content</h2>
//           <div className="flex flex-wrap gap-4 text-sm">
//             <div className="flex items-center">
//               <FiVideo className="mr-2" />
//               <span>{totalVideos} lessons</span>
//             </div>
//             <div className="flex items-center">
//               <FiClock className="mr-2" />
//               <span>
//                 {totalHours > 0 ? `${totalHours}h ` : ""}
//                 {totalMinutes}m total
//               </span>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Sections */}
//       <div className="divide-y divide-gray-200 dark:divide-gray-700 max-h-[500px] overflow-y-auto">
//         {videoSections.map((section: string, sectionIndex: number) => {
//           const isSectionVisible = visibleSections.has(section);

//           // Filter section by videos
//           const sectionVideos: any[] = props.data.filter(
//             (item: any) => item.videoSection === section
//           );

//           const sectionVideoCount: number = sectionVideos.length;
//           const sectionVideoLength: number = sectionVideos.reduce(
//             (totalLength: number, item: any) =>
//               totalLength + (Number(item.videoLength) || 0),
//             0
//           );

//           const sectionStartIndex: number = totalCount;
//           totalCount += sectionVideoCount;

//           // Calculate time format
//           const sectionHours = Math.floor(sectionVideoLength / 3600);
//           const sectionMinutes = Math.floor((sectionVideoLength % 3600) / 60);
//           const timeString =
//             sectionHours > 0
//               ? `${sectionHours}h ${sectionMinutes}m`
//               : `${sectionMinutes}m`;

//           return (
//             <div key={section} className="bg-white dark:bg-gray-800">
//               <div
//                 className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
//                 onClick={() => toggleSection(section)}
//               >
//                 <div className="flex justify-between items-center">
//                   <div className="flex-1">
//                     <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
//                       <span className="w-8 h-8 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full mr-3 text-sm font-bold">
//                         {sectionIndex + 1}
//                       </span>
//                       {section}
//                     </h3>
//                     <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 pl-11">
//                       {sectionVideoCount} lessons • {timeString}
//                     </p>
//                   </div>
//                   <div className="flex items-center justify-center w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-500 dark:text-gray-400">
//                     {isSectionVisible ? (
//                       <FiChevronUp size={18} />
//                     ) : (
//                       <FiChevronDown size={18} />
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Animated content */}
//               {isSectionVisible && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="border-t border-gray-100 dark:border-gray-700"
//                 >
//                   {sectionVideos.map((item: any, index: number) => {
//                     const videoIndex: number = sectionStartIndex + index;
//                     const videoLength = Number(item.videoLength);
//                     const videoHours = Math.floor(videoLength / 3600);
//                     const videoMinutes = Math.floor((videoLength % 3600) / 60);
//                     const videoSeconds = videoLength % 60;

//                     const formattedDuration =
//                       videoHours > 0
//                         ? `${videoHours}:${videoMinutes
//                             .toString()
//                             .padStart(2, "0")}:${videoSeconds
//                             .toString()
//                             .padStart(2, "0")}`
//                         : `${videoMinutes}:${videoSeconds
//                             .toString()
//                             .padStart(2, "0")}`;

//                     const isActive = videoIndex === props.activeVideo;
//                     const isWatched = videoIndex < (props.activeVideo || 0);

//                     return (
//                       <div
//                         key={item._id}
//                         className={`
//                           pl-6 pr-4 py-3 flex items-center
//                           ${
//                             isActive
//                               ? "bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-600"
//                               : ""
//                           }
//                           ${
//                             !props.isDemo &&
//                             "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
//                           }
//                           transition-colors
//                         `}
//                         onClick={() =>
//                           props.isDemo
//                             ? null
//                             : props?.setActiveVideo?.(videoIndex)
//                         }
//                       >
//                         <div className="flex items-start flex-1 min-w-0">
//                           <div className="mt-1 mr-3 flex-shrink-0">
//                             {isWatched ? (
//                               <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
//                                 <FiCheck
//                                   className="text-green-600 dark:text-green-400"
//                                   size={14}
//                                 />
//                               </div>
//                             ) : (
//                               <div
//                                 className={`w-6 h-6 rounded-full flex items-center justify-center ${
//                                   isActive
//                                     ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
//                                     : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
//                                 }`}
//                               >
//                                 <FiVideo size={14} />
//                               </div>
//                             )}
//                           </div>
//                           <div className="min-w-0 flex-1">
//                             <h4
//                               className={`text-sm font-medium ${
//                                 isActive
//                                   ? "text-indigo-700 dark:text-indigo-300"
//                                   : "text-gray-900 dark:text-white"
//                               } line-clamp-2`}
//                             >
//                               {item.title}
//                             </h4>
//                             <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-1">
//                               <span className="inline-flex items-center">
//                                 <FiClock className="mr-1" size={12} />
//                                 {formattedDuration}
//                               </span>
//                               {videoIndex === props.activeVideo &&
//                                 !props.isDemo && (
//                                   <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
//                                     Current
//                                   </span>
//                                 )}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </motion.div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CourseContentList;
// import React, { FC, useState } from "react";
// import {
//   FiChevronDown,
//   FiChevronUp,
//   FiVideo,
//   FiClock,
//   FiCheck,
// } from "react-icons/fi";
// import { motion } from "framer-motion";
// import { useUpdateVideoProgressMutation } from "@/redux/features/progress/progressApi";

// type Props = {
//   data: any;
//   activeVideo?: number;
//   setActiveVideo?: (index: number) => void;
//   isDemo?: boolean;
//   onReadyStatusChange?: (allReady: boolean) => void;
// };

// const CourseContentList: FC<Props> = (props) => {
//   const [visibleSections, setVisibleSections] = useState<Set<string>>(
//     new Set<string>()
//   );
//   const [readyVideos, setReadyVideos] = useState<Set<number>>(new Set<number>());
//   const [updateVideoProgress, { isLoading: isUpdating }] = useUpdateVideoProgressMutation();

//   const videoSections: string[] = [
//     ...new Set<string>(props.data?.map((item: any) => item.videoSection) || []),
//   ];

//   let totalCount: number = 0;

//   const toggleSection = (section: string) => {
//     const newVisibleSections = new Set(visibleSections);
//     if (newVisibleSections.has(section)) {
//       newVisibleSections.delete(section);
//     } else {
//       newVisibleSections.add(section);
//     }
//     setVisibleSections(newVisibleSections);
//   };

//   const toggleReady = (videoIndex: number) => {
//     const newReadyVideos = new Set(readyVideos);
//     if (newReadyVideos.has(videoIndex)) {
//       newReadyVideos.delete(videoIndex);
//     } else {
//       newReadyVideos.add(videoIndex);
//     }
//     setReadyVideos(newReadyVideos);

//     const totalVideos = props.data?.length || 0;
//     const allReady = newReadyVideos.size === totalVideos;
//     props.onReadyStatusChange?.(allReady);
//   };

//   const totalVideos = props.data?.length || 0;
//   const totalDuration = props.data?.reduce(
//     (total: number, item: any) => total + (Number(item.videoLength) || 0),
//     0
//   );
//   const totalHours = Math.floor(totalDuration / 3600);
//   const totalMinutes = Math.floor((totalDuration % 3600) / 60);

//   return (
//     <div className="mt-6 w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
//       {!props.isDemo && (
//         <div className="p-4 bg-gradient-to-r from-blue-900 to-blue-200 text-white rounded-t-lg">
//           <h2 className="text-xl font-bold mb-2">Course Content</h2>
//           <div className="flex flex-wrap gap-4 text-sm">
//             <div className="flex items-center">
//               <FiVideo className="mr-2" />
//               <span>{totalVideos} lessons</span>
//             </div>
//             <div className="flex items-center">
//               <FiClock className="mr-2" />
//               <span>
//                 {totalHours > 0 ? `${totalHours}h ` : ""}
//                 {totalMinutes}m total
//               </span>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="divide-y divide-gray-200 dark:divide-gray-700 max-h-[500px] overflow-y-auto">
//         {videoSections.map((section: string, sectionIndex: number) => {
//           const isSectionVisible = visibleSections.has(section);
//           const sectionVideos: any[] = props.data.filter(
//             (item: any) => item.videoSection === section
//           );
//           const sectionVideoCount: number = sectionVideos.length;
//           const sectionVideoLength: number = sectionVideos.reduce(
//             (totalLength: number, item: any) =>
//               totalLength + (Number(item.videoLength) || 0),
//             0
//           );

//           const sectionStartIndex: number = totalCount;
//           totalCount += sectionVideoCount;

//           const sectionHours = Math.floor(sectionVideoLength / 3600);
//           const sectionMinutes = Math.floor((sectionVideoLength % 3600) / 60);
//           const timeString =
//             sectionHours > 0
//               ? `${sectionHours}h ${sectionMinutes}m`
//               : `${sectionMinutes}m`;

//           return (
//             <div key={section} className="bg-white dark:bg-gray-800">
//               <div
//                 className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
//                 onClick={() => toggleSection(section)}
//               >
//                 <div className="flex justify-between items-center">
//                   <div className="flex-1">
//                     <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
//                       <span className="w-8 h-8 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full mr-3 text-sm font-bold">
//                         {sectionIndex + 1}
//                       </span>
//                       {section}
//                     </h3>
//                     <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 pl-11">
//                       {sectionVideoCount} lessons • {timeString}
//                     </p>
//                   </div>
//                   <div className="flex items-center justify-center w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-500 dark:text-gray-400">
//                     {isSectionVisible ? (
//                       <FiChevronUp size={18} />
//                     ) : (
//                       <FiChevronDown size={18} />
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {isSectionVisible && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="border-t border-gray-100 dark:border-gray-700"
//                 >
//                   {sectionVideos.map((item: any, index: number) => {
//                     const videoIndex: number = sectionStartIndex + index;
//                     const videoLength = Number(item.videoLength);
//                     const videoHours = Math.floor(videoLength / 3600);
//                     const videoMinutes = Math.floor((videoLength % 3600) / 60);
//                     const videoSeconds = videoLength % 60;

//                     const formattedDuration =
//                       videoHours > 0
//                         ? `${videoHours}:${videoMinutes
//                             .toString()
//                             .padStart(2, "0")}:${videoSeconds
//                             .toString()
//                             .padStart(2, "0")}`
//                         : `${videoMinutes}:${videoSeconds
//                             .toString()
//                             .padStart(2, "0")}`;

//                     const isActive = videoIndex === props.activeVideo;
//                     const isReady = readyVideos.has(videoIndex);

//                     return (
//                       <div
//                         key={item._id}
//                         className={`
//                           pl-6 pr-4 py-3 flex items-center justify-between
//                           ${
//                             isActive
//                               ? "bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-600"
//                               : ""
//                           }
//                           ${
//                             !props.isDemo &&
//                             "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
//                           }
//                           transition-colors
//                         `}
//                         onClick={() =>
//                           props.isDemo
//                             ? null
//                             : props?.setActiveVideo?.(videoIndex)
//                         }
//                       >
//                         <div className="flex items-start flex-1 min-w-0">
//                           <div className="mt-1 mr-3 flex-shrink-0">
//                             {isReady ? (
//                               <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
//                                 <FiCheck
//                                   className="text-green-600 dark:text-green-400"
//                                   size={14}
//                                 />
//                               </div>
//                             ) : (
//                               <div
//                                 className={`w-6 h-6 rounded-full flex items-center justify-center ${
//                                   isActive
//                                     ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
//                                     : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
//                                 }`}
//                               >
//                                 <FiVideo size={14} />
//                               </div>
//                             )}
//                           </div>
//                           <div className="min-w-0 flex-1">
//                             <h4
//                               className={`text-sm font-medium ${
//                                 isActive
//                                   ? "text-indigo-700 dark:text-indigo-300"
//                                   : "text-gray-900 dark:text-white"
//                               } line-clamp-2`}
//                             >
//                               {item.title}
//                             </h4>
//                             <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-1">
//                               <span className="inline-flex items-center">
//                                 <FiClock className="mr-1" size={12} />
//                                 {formattedDuration}
//                               </span>
//                               {videoIndex === props.activeVideo &&
//                                 !props.isDemo && (
//                                   <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
//                                     Current
//                                   </span>
//                                 )}
//                             </div>
//                           </div>
//                         </div>

//                         {!props.isDemo && (
//                           <input
//                             type="checkbox"
//                             checked={isReady}
//                             onChange={(e) => {
//                               e.stopPropagation();
//                               toggleReady(videoIndex);
//                             }}
//                             className="ml-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
//                           />
//                         )}
//                       </div>
//                     );
//                   })}
//                 </motion.div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CourseContentList;
import React, { FC, useState, useEffect } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiVideo,
  FiClock,
  FiCheck,
} from "react-icons/fi";
import { motion } from "framer-motion";
import {
  useUpdateVideoProgressMutation,
  useGetUserCourseProgressQuery,
} from "@/redux/features/progress/progressApi";

type Props = {
  data: any; // Array of video objects: [{ _id, title, videoSection, videoLength }, ...]
  activeVideo?: number;
  setActiveVideo?: (index: number) => void;
  isDemo?: boolean;
  onReadyStatusChange?: (allReady: boolean) => void;
  courseId?: string; // String representation of ObjectId
};

const CourseContentList: FC<Props> = ({ data, activeVideo, setActiveVideo, isDemo, onReadyStatusChange, courseId }) => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set<string>());
  const [readyVideos, setReadyVideos] = useState<Set<number>>(new Set<number>());
  const [updateVideoProgress, { isLoading: isUpdating }] = useUpdateVideoProgressMutation();

  // Fetch user progress for the course
  const { data: progressData, isLoading: isProgressLoading } = useGetUserCourseProgressQuery(courseId, {
    skip: !courseId || isDemo, // Skip if no courseId or in demo mode
  });

  const videoSections: string[] = [
    ...new Set<string>(data?.map((item: any) => item.videoSection) || []),
  ];

  // Initialize readyVideos based on progress data from the API response
  useEffect(() => {
    if (progressData?.progress?.videos && data) {
      const newReadyVideos = new Set<number>();
      const videoProgressMap = new Map(
        progressData.progress.videos.map((v: any) => [v.videoId, v.isCompleted])
      );

      data.forEach((item: any, index: number) => {
        const isCompleted = videoProgressMap.get(item._id);
        if (isCompleted) {
          newReadyVideos.add(index);
        }
      });
      setReadyVideos(newReadyVideos);
    }
  }, [progressData, data]);

  let totalCount: number = 0;

  const toggleSection = (section: string) => {
    const newVisibleSections = new Set(visibleSections);
    if (newVisibleSections.has(section)) {
      newVisibleSections.delete(section);
    } else {
      newVisibleSections.add(section);
    }
    setVisibleSections(newVisibleSections);
  };

  const toggleReady = (videoIndex: number) => {
    const newReadyVideos = new Set(readyVideos);
    const isNowReady = !newReadyVideos.has(videoIndex); // Determine new state before updating
    if (newReadyVideos.has(videoIndex)) {
      newReadyVideos.delete(videoIndex);
    } else {
      newReadyVideos.add(videoIndex);
    }
    setReadyVideos(newReadyVideos);

    const totalVideos = data?.length || 0;
    const allReady = newReadyVideos.size === totalVideos;
    onReadyStatusChange?.(allReady);

    // Call handleVideoProgressUpdate with the new isCompleted state
    if (courseId) {
      handleVideoProgressUpdate(videoIndex, isNowReady);
    }
  };

  const handleVideoProgressUpdate = async (videoIndex: number, isCompleted: boolean) => {
    const videoId = data[videoIndex]._id; // Using data[videoIndex]._id for videoId

    try {
      await updateVideoProgress({
        courseId,
        videoId,
        isCompleted,
      }).unwrap();
      console.log("Video progress updated successfully");
    } catch (error) {
      console.error("Failed to update video progress:", error);
    }
  };

  const totalVideos = data?.length || 0;
  const totalDuration = data?.reduce(
    (total: number, item: any) => total + (Number(item.videoLength) || 0),
    0
  );
  const totalHours = Math.floor(totalDuration / 3600);
  const totalMinutes = Math.floor((totalDuration % 3600) / 60);

  if (isProgressLoading && !isDemo) {
    return <div>Loading progress...</div>;
  }

  return (
    <div className="mt-6 w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
      {!isDemo && (
        <div className="p-4 bg-gradient-to-r from-blue-900 to-blue-200 text-white rounded-t-lg">
          <h2 className="text-xl font-bold mb-2">Course Content</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center">
              <FiVideo className="mr-2" />
              <span>{totalVideos} lessons</span>
            </div>
            <div className="flex items-center">
              <FiClock className="mr-2" />
              <span>
                {totalHours > 0 ? `${totalHours}h ` : ""}
                {totalMinutes}m total
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="divide-y divide-gray-200 dark:divide-gray-700 max-h-[500px] overflow-y-auto">
        {videoSections.map((section: string, sectionIndex: number) => {
          const isSectionVisible = visibleSections.has(section);
          const sectionVideos: any[] = data.filter(
            (item: any) => item.videoSection === section
          );
          const sectionVideoCount: number = sectionVideos.length;
          const sectionVideoLength: number = sectionVideos.reduce(
            (totalLength: number, item: any) =>
              totalLength + (Number(item.videoLength) || 0),
            0
          );

          const sectionStartIndex: number = totalCount;
          totalCount += sectionVideoCount;

          const sectionHours = Math.floor(sectionVideoLength / 3600);
          const sectionMinutes = Math.floor((sectionVideoLength % 3600) / 60);
          const timeString =
            sectionHours > 0
              ? `${sectionHours}h ${sectionMinutes}m`
              : `${sectionMinutes}m`;

          return (
            <div key={section} className="bg-white dark:bg-gray-800">
              <div
                className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                onClick={() => toggleSection(section)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                      <span className="w-8 h-8 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full mr-3 text-sm font-bold">
                        {sectionIndex + 1}
                      </span>
                      {section}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 pl-11">
                      {sectionVideoCount} lessons • {timeString}
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-500 dark:text-gray-400">
                    {isSectionVisible ? (
                      <FiChevronUp size={18} />
                    ) : (
                      <FiChevronDown size={18} />
                    )}
                  </div>
                </div>
              </div>

              {isSectionVisible && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-100 dark:border-gray-700"
                >
                  {sectionVideos.map((item: any, index: number) => {
                    const videoIndex: number = sectionStartIndex + index;
                    const videoLength = Number(item.videoLength);
                    const videoHours = Math.floor(videoLength / 3600);
                    const videoMinutes = Math.floor((videoLength % 3600) / 60);
                    const videoSeconds = videoLength % 60;

                    const formattedDuration =
                      videoHours > 0
                        ? `${videoHours}:${videoMinutes
                            .toString()
                            .padStart(2, "0")}:${videoSeconds
                            .toString()
                            .padStart(2, "0")}`
                        : `${videoMinutes}:${videoSeconds
                            .toString()
                            .padStart(2, "0")}`;

                    const isActive = videoIndex === activeVideo;
                    const isReady = readyVideos.has(videoIndex);

                    return (
                      <div
                        key={item._id}
                        className={`
                          pl-6 pr-4 py-3 flex items-center justify-between
                          ${
                            isActive
                              ? "bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-600"
                              : ""
                          }
                          ${
                            !isDemo &&
                            "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                          }
                          transition-colors
                        `}
                        onClick={() =>
                          isDemo
                            ? null
                            : setActiveVideo?.(videoIndex)
                        }
                      >
                        <div className="flex items-start flex-1 min-w-0">
                          <div className="mt-1 mr-3 flex-shrink-0">
                            {isReady ? (
                              <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                <FiCheck
                                  className="text-green-600 dark:text-green-400"
                                  size={14}
                                />
                              </div>
                            ) : (
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                  isActive
                                    ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                                    : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                                }`}
                              >
                                <FiVideo size={14} />
                              </div>
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4
                              className={`text-sm font-medium ${
                                isActive
                                  ? "text-indigo-700 dark:text-indigo-300"
                                  : "text-gray-900 dark:text-white"
                              } line-clamp-2`}
                            >
                              {item.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-1">
                              <span className="inline-flex items-center">
                                <FiClock className="mr-1" size={12} />
                                {formattedDuration}
                              </span>
                              {videoIndex === activeVideo &&
                                !isDemo && (
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                                    Current
                                  </span>
                                )}
                            </div>
                          </div>
                        </div>

                        {!isDemo && (
                          <input
                            type="checkbox"
                            checked={isReady}
                            onChange={(e) => {
                              e.stopPropagation();
                              toggleReady(videoIndex);
                            }}
                            className="ml-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            disabled={isUpdating}
                          />
                        )}
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseContentList;