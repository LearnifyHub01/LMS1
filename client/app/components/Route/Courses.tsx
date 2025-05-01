// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import CourseCard from "../Course/CourseCard";
// // // // // // import { useGetUsersCoursesQuery } from "@/redux/features/courses/coursesApi";
// // // // // // import Link from "next/link";

// // // // // // const Courses = () => {
// // // // // //   const { data, isLoading } = useGetUsersCoursesQuery({});
// // // // // //   const [courses, setCourses] = useState<any[]>([]);

// // // // // //   useEffect(() => {
// // // // // //     if (data?.courses) {
// // // // // //       setCourses(data.courses);
// // // // // //     }
// // // // // //   }, [data]);

// // // // // //   return (
// // // // // //     <div className="bg-[#DDE6ED] dark:bg-[#27374D] min-h-screen py-1">
// // // // // //       <div className="w-[90%] 800px:w-[80%] mx-auto">
// // // // // //         {/* Header */}
// // // // // //         <h1 className="text-center font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white text-black 800px:!leading-[60px] font-[700] tracking-tight">
// // // // // //           Expand Your Career{" "}
// // // // // //           <span className="text-gradient">
// // // // // //             Opportunity <br />
// // // // // //           </span>
// // // // // //           with our courses
// // // // // //         </h1>

// // // // // //         {isLoading ? (
// // // // // //           <div className="flex justify-center items-center h-[50vh]">
// // // // // //             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#526D82]"></div>
// // // // // //           </div>
// // // // // //         ) : (
// // // // // //           <>
// // // // // //             <div className="h-[40px]" />
// // // // // //             <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12">
// // // // // //               {courses.length > 0 ? (
// // // // // //                 courses.slice(0, 6).map((item: any, index: number) => (
// // // // // //                   <CourseCard item={item} key={index} />
// // // // // //                 ))
// // // // // //               ) : (
// // // // // //                 <p className="text-center col-span-full text-gray-600 dark:text-gray-300">
// // // // // //                   No courses available at the moment.
// // // // // //                 </p>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           </>
// // // // // //         )}

// // // // // //         {courses.length > 6 && (
// // // // // //           <div className="flex justify-center mt-6">
// // // // // //             <Link
// // // // // //               href="/courses"
// // // // // //               className="text-[clamp(1rem,1.5vw,2rem)] px-[clamp(1rem,2vw,3rem)] py-[clamp(0.5rem,1vw,2rem)] bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200"
// // // // // //             >
// // // // // //               Explore More
// // // // // //             </Link>
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Courses;

// // // // // import React, { useState, useEffect } from "react";
// // // // // import CourseCard from "../Course/CourseCard";
// // // // // import { useGetUsersCoursesQuery } from "@/redux/features/courses/coursesApi";
// // // // // import Link from "next/link";

// // // // // const Courses = () => {
// // // // //   const { data, isLoading } = useGetUsersCoursesQuery({});
// // // // //   const [courses, setCourses] = useState<any[]>([]);

// // // // //   useEffect(() => {
// // // // //     if (data?.courses) {
// // // // //       setCourses(data.courses);
// // // // //     }
// // // // //   }, [data]);

// // // // //   return (
// // // // //     <div className="bg-[#white] dark:bg-gray-800 min-h-screen py-1">
// // // // //       <div className="w-[90%] 800px:w-[80%] mx-auto">
// // // // //         {/* Header */}
// // // // //         <h1 className="text-center font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white text-black 800px:!leading-[60px] font-[700] tracking-tight">
// // // // //           Expand Your Career{" "}
// // // // //           <span className="text-gradient">
// // // // //             Opportunity <br />
// // // // //           </span>
// // // // //           with our courses
// // // // //         </h1>

// // // // //         {isLoading ? (
// // // // //           <div className="flex justify-center items-center h-[50vh]">
// // // // //             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#526D82]"></div>
// // // // //           </div>
// // // // //         ) : (
// // // // //           <>
// // // // //             <div className="h-[40px]" />
// // // // //             <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12">
// // // // //               {courses.length > 0 ? (
// // // // //                 courses.slice(0, 6).map((item: any, index: number) => (
// // // // //                   <CourseCard item={item} key={index} />
// // // // //                 ))
// // // // //               ) : (
// // // // //                 <p className="text-center col-span-full text-gray-600 dark:text-gray-300">
// // // // //                   No courses available at the moment.
// // // // //                 </p>
// // // // //               )}
// // // // //             </div>
// // // // //           </>
// // // // //         )}

// {courses.length > 6 && (
//   <div className="flex justify-center mt-6">
//     <Link
//       href="/courses"
//       className="text-[clamp(1rem,1.5vw,2rem)] px-[clamp(1rem,2vw,3rem)] py-[clamp(0.5rem,1vw,2rem)] bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200"
//     >
//       Explore More
//     </Link>
//   </div>
// )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Courses;
// // // import { HiCheck } from "react-icons/hi";
// // // import React, { useState, useEffect } from "react";
// // // import { HiAcademicCap } from "react-icons/hi";
// // // import { MdOutlineExplore } from "react-icons/md";
// // // import CourseCard from "../Course/CourseCard";
// // // import { useGetUsersCoursesQuery } from "@/redux/features/courses/coursesApi";
// // // import Link from "next/link";
// // // import img from "../../../public/assests/about5.jpeg";
// // // import Image from "next/image";
// // // import { LiaArrowCircleRightSolid } from "react-icons/lia";

// // // const Courses = () => {
// // //   const { data, isLoading } = useGetUsersCoursesQuery({});
// // //   const [courses, setCourses] = useState<any[]>([]);

// // //   useEffect(() => {
// // //     if (data?.courses) {
// // //       setCourses(data.courses);
// // //     }
// // //   }, [data]);

// // //   return (
// // //     <div className="bg-white dark:bg-gray-100">
// // //       {/* White Upper Section */}
// // //       <div className="relative bg-white dark:bg-gray-100 py-20 px-4 md:px-8 lg:px-16"></div>

// // //       {/* Black Lower Section */}
// // //       <div className="relative bg-black text-white py-16 px-4 md:px-8 lg:px-16">
// // //       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 py-16 px-4 md:px-8 lg:px-16">
// // //           {/* Left Side - Heading */}
// // //           <div className="space-y-4 pr-8">
// // //             <h1 className="text-xl -ml-2 md:text-5xl lg:text-6xl font-bold text-white">
// // //               Seamless
// // //               <span className="block text-white mt-2">Education</span>
// // //               <span className="block text-white mt-2">Experience</span>
// // //             </h1>
// // //           </div>

// // //           {/* Right Side - Key Points */}
// // //           <div className="space-y-6">
// // //             <div className="flex items-center text-xl md:text-2xl">
// // //               <HiCheck className="text-green-500 mr-4 text-3xl" />
// // //               <span>Expert-led courses for all levels.</span>
// // //             </div>
// // //             <div className="flex items-center text-xl md:text-2xl">
// // //               <HiCheck className="text-green-500 mr-4 text-3xl" />
// // //               <span>Curated paths for rapid growth.</span>
// // //             </div>
// // //             <div className="flex items-center text-xl md:text-2xl">
// // //               <HiCheck className="text-green-500 mr-4 text-3xl" />
// // //               <span>Hands-on projects with real impact.</span>
// // //             </div>
// // //             <div className="flex items-center text-xl md:text-2xl">
// // //               <HiCheck className="text-green-500 mr-4 text-3xl" />
// // //               <span>Certificates that prove your skills.</span>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Courses Section */}
// // //         <div className="max-w-7xl mx-auto">
// // //           {isLoading ? (
// // //             <div className="flex justify-center items-center h-[50vh]">
// // //               <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
// // //             </div>
// // //           ) : (
// // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //               {courses.length > 0 ? (
// // //                 courses.slice(0, 6).map((item: any, index: number) => (
// // //                   <div key={index} className="w-full">
// // //                     <CourseCard item={item} />
// // //                   </div>
// // //                 ))
// // //               ) : (
// // //                 <p className="text-center col-span-full text-gray-300 text-xl">
// // //                   No courses available at the moment.
// // //                 </p>
// // //               )}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Courses;
// // import { HiCheck } from "react-icons/hi";
// // import React, { useState, useEffect } from "react";
// // import { useGetUsersCoursesQuery } from "@/redux/features/courses/coursesApi";
// // import CourseCard from "../Course/CourseCard";

// // const Courses = () => {
// //   const { data, isLoading } = useGetUsersCoursesQuery({});
// //   const [courses, setCourses] = useState<any[]>([]);

// //   useEffect(() => {
// //     if (data?.courses) {
// //       setCourses(data.courses);
// //     }
// //   }, [data]);

// //   return (
// //     <div className="bg-white dark:bg-gray-100">
// //       {/* Upper Section (Spacing Placeholder) */}
// // <div className="py-20 px-4 md:px-8 lg:px-16"></div>

// //       {/* Main Section - Black Background */}
// // <div className="bg-black text-white py-16 px-4 md:px-8 lg:px-16">
// //         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8">
// //           {/* Left - Heading */}
// //           <div className="lg:w-1/2 space-y-4">
// //             <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
// //               Seamless <br />
// //               <span className="text-white">Education</span> <br />
// //               <span className="text-white">Experience</span>
// //             </h1>
// //           </div>

// //           {/* Right - Key Points */}
// //           <div className="lg:w-1/2 space-y-5">
// //             {[
// //               "Expert-led courses for all levels.",
// //               "Curated paths for rapid growth.",
// //               "Hands-on projects with real impact.",
// //               "Certificates that prove your skills.",
// //             ].map((text, index) => (
// //               <div key={index} className="flex items-center text-lg md:text-xl">
// //                 <HiCheck className="text-green-500 mr-4 text-3xl" />
// //                 <span>{text}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Courses Section */}
// //         <div className="max-w-7xl mx-auto mt-36">
// //           {isLoading ? (
// //             <div className="flex justify-center items-center h-[50vh]">
// //               <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
// //             </div>
// //           ) : (
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //               {courses.length > 0 ? (
// //                 courses.slice(0, 6).map((item: any, index: number) => (
// //                   <CourseCard key={index} item={item} />
// //                 ))
// //               ) : (
// //                 <p className="text-center col-span-full text-gray-300 text-xl">
// //                   No courses available at the moment.
// //                 </p>
// //               )}
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Courses;
// import { HiCheck } from "react-icons/hi";
// import React, { useState, useEffect } from "react";
// import { useGetUsersCoursesQuery } from "@/redux/features/courses/coursesApi";
// import CourseCard from "../Course/CourseCard";

// const Courses = () => {
//   const { data, isLoading } = useGetUsersCoursesQuery({});
//   const [courses, setCourses] = useState<any[]>([]);

//   useEffect(() => {
//     if (data?.courses) {
//       setCourses(data.courses);
//     }
//   }, [data]);

//   return (
//     <>
//       <div className="py-20 px-4 md:px-8 lg:px-16"></div>

//       <div className="bg-white dark:bg-gray-100">
//         {/* Main Section */}
//         <div className="bg-black text-white py-16 px-4 md:px-8 lg:px-16">
//           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:gap-x-12">
//             {/* Left - Heading */}
//             <div className="lg:w-5/12 space-y-4 mt-14 ml-4 font-poppins">
//               <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight">
//                 Creative
//                 <span className="block text-white mt-3">Learning </span>
//                 <span className="block text-white mt-3">Made Easy</span>
//               </h1>
//             </div>

//             {/* Right - Key Points */}
//             <div className="lg:w-7/12 space-y-6">
//               {[
//                 "Expert-led courses for all levels.",
//                 "Curated paths for rapid growth.",
//                 "Hands-on projects with real impact.",
//                 "Certificates that prove your skills.",
//               ].map((text, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center text-xl font-bold font-poppins md:text-2xl lg:text-3xl mt-6"
//                 >
//                   <HiCheck className="text-green-500 mr-4 text-4xl lg:text-4xl" />
//                   <span>{text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//         {/* card */}
//           <div className="container mx-auto px-4 md:px-6 max-w-7xl mt-[15%]">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               <div className="bg-[#323232] p-6 rounded-lg flex flex-col items-center justify-center text-center">
//                 <div className="text-3xl font-bold text-green-500 mb-2">
//                   5K+
//                 </div>
//                 <div className="text-white font-poppins font-semibold text-sm uppercase tracking-wider">
//                   COURSES
//                 </div>
//               </div>
//               <div className="bg-[#1A1A1A] p-6 rounded-lg flex flex-col items-center justify-center text-center">
//                 <div className="text-3xl font-bold text-green-500 mb-2">
//                   10K+
//                 </div>
//                 <div className="text-white font-poppins font-semibold  text-sm uppercase tracking-wider">
//                   STUDENTS
//                 </div>
//               </div>
//               <div className="bg-[#1A1A1A] p-6 rounded-lg flex flex-col items-center justify-center text-center">
//                 <div className="text-3xl font-bold text-green-500 mb-2">
//                   2K+
//                 </div>
//                 <div className="text-white font-poppins font-semibold  text-sm uppercase tracking-wider">
//                   TEACHERS
//                 </div>
//               </div>
//               <div className="bg-[#1A1A1A] p-6 rounded-lg flex flex-col items-center justify-center text-center">
//                 <div className="text-3xl font-bold text-green-500 mb-2 flex items-center">
//                   4.8
//                   <span className="text-green-500 ml-2">★★★★★</span>
//                 </div>
//                 <div className="text-white font-poppins font-semibold  text-sm uppercase tracking-wider">
//                   USER RATING
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Courses Section */}
//           <div className="mt-[10%] font-bold font-poppins text-5xl text-center">Explore Inspiring Online Courses          </div>
//           <div className="max-w-7xl mx-auto mt-12">
//             {isLoading ? (
//               <div className="flex justify-center items-center h-[50vh]">
//                 <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {courses.length > 0 ? (
//                   courses
//                     .slice(0, 6)
//                     .map((item: any, index: number) => (
//                       <CourseCard key={index} item={item} />
//                     ))
//                 ) : (
//                   <p className="text-center col-span-full text-gray-300 text-xl">
//                     No courses available at the moment.
//                   </p>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Courses;

import { HiCheck, HiArrowRight } from "react-icons/hi";
import React, { useState, useEffect } from "react";
import { useGetUsersCoursesQuery } from "@/redux/features/courses/coursesApi";
import CourseCard from "../Course/CourseCard";
import Link from "next/link";

const Courses = () => {
  const { data, isLoading } = useGetUsersCoursesQuery({});
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    if (data?.courses) {
      setCourses(data.courses);
    }
  }, [data]);

  return (
    <>
      <div className="py-20 px-4 md:px-8 lg:px-16"></div>

      <div className="bg-white dark:bg-gray-100">
        {/* Main Section */}
        <div className="bg-black text-white py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:gap-x-12">
            {/* Left - Heading */}
            <div className="lg:w-5/12 space-y-4 mt-14 ml-4 font-poppins">
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight flex flex-wrap justify-center lg:justify-start items-center">
                <span className="mr-2">The</span>{" "}
                <span className="text-green-500"> Smarter way</span>
                <span className="text-white">you learn</span>
              </h1>
            </div>

            {/* Right - Key Points */}
            <div className="lg:w-7/12 space-y-6">
              {[
                "Expert-led courses for all levels.",
                "Curated paths for rapid growth.",
                "Hands-on projects with real impact.",
                "Certificates that prove your skills.",
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex items-center text-xl font-bold font-poppins md:text-2xl lg:text-3xl mt-6"
                >
                  <HiCheck className="text-green-500 mr-4 text-4xl lg:text-4xl" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="container mx-auto px-4 md:px-6 max-w-7xl mt-[15%]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div
                className="bg-[#323232] rounded-lg flex flex-col items-center justify-center text-center"
                style={{
                  padding: "clamp(1rem, 3vw, 2rem)",
                }}
              >
                <div
                  className="font-bold text-green-500 mb-2"
                  style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}
                >
                  5K+
                </div>
                <div
                  className="text-white font-poppins font-semibold uppercase tracking-wider"
                  style={{ fontSize: "clamp(0.75rem, 2vw, 1rem)" }}
                >
                  COURSES
                </div>
              </div>
              <div
                className="bg-[#323232] rounded-lg flex flex-col items-center justify-center text-center"
                style={{
                  padding: "clamp(1rem, 3vw, 2rem)",
                }}
              >
                <div
                  className="font-bold text-green-500 mb-2"
                  style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}
                >
                  10K+
                </div>
                <div
                  className="text-white font-poppins font-semibold uppercase tracking-wider"
                  style={{ fontSize: "clamp(0.75rem, 2vw, 1rem)" }}
                >
                  STUDENTS
                </div>
              </div>
              <div
                className="bg-[#323232] rounded-lg flex flex-col items-center justify-center text-center"
                style={{
                  padding: "clamp(1rem, 3vw, 2rem)",
                }}
              >
                <div
                  className="font-bold text-green-500 mb-2"
                  style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}
                >
                  2K+
                </div>
                <div
                  className="text-white font-poppins font-semibold uppercase tracking-wider"
                  style={{ fontSize: "clamp(0.75rem, 2vw, 1rem)" }}
                >
                  TEACHERS
                </div>
              </div>
              <div
                className="bg-[#323232] rounded-lg flex flex-col items-center justify-center text-center"
                style={{
                  padding: "clamp(1rem, 3vw, 2rem)",
                }}
              >
                <div
                  className="font-bold text-green-500 mb-2 flex items-center"
                  style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}
                >
                  4.8
                  <span className="text-green-500 ml-2">★★★★★</span>
                </div>
                <div
                  className="text-white font-poppins font-semibold uppercase tracking-wider"
                  style={{ fontSize: "clamp(0.75rem, 2vw, 1rem)" }}
                >
                  USER RATING
                </div>
              </div>
            </div>
          </div>

          {/* Explore Courses Section */}
          <div className="mt-[10%] font-bold font-poppins text-3xl md:text-4xl lg:text-5xl text-center px-4">
            <h2 className="inline-block max-w-full">
              Explore Inspiring
              <span className="block sm:inline sm:ml-2 text-green-500">
                Online Courses
              </span>
            </h2>
          </div>
          {/* 
          <div className="mt-[4%] max-w-7xl mx-auto px-4">
            <div className="relative">
              <div className="flex overflow-x-auto space-x-4 pb-4 md:flex-wrap md:justify-center md:gap-4 md:overflow-x-hidden scrollbar-hide px-8">
                {[
                  "Business & Management",
                  "Tech & IT",
                  "Graphic Design",
                  "Digital Marketing",
                  "Healthcare & Medicine",
                  "Foreign Language Learning",
                  "Entrepreneurship & Business Strategy",
                  "Fitness & Nutrition",
                  "Music Production",
                  "Financial Modeling",
                  "Cybersecurity",
                ].map((category, index) => (
                  <div
                    key={index}
                    className="min-w-[150px] md:min-w-0 bg-[#323232] text-white font-poppins font-semibold text-center py-2 px-4 rounded-lg hover:bg-green-500 transition-all duration-200 cursor-pointer"
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          {/* Courses Section */}
          <div className="max-w-7xl mx-auto mt-[9%] px-4">
            {isLoading ? (
              <div className="flex justify-center items-center h-[50vh]">
                <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <div className="relative">
                <div className="flex overflow-x-auto space-x-6 pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-x-hidden scrollbar-hide px-8">
                  {courses.length > 0 ? (
                    courses.slice(0, 6).map((item: any, index: number) => (
                      <div className="min-w-[280px] md:min-w-0" key={index}>
                        <CourseCard item={item} />
                      </div>
                    ))
                  ) : (
                    <p className="text-center col-span-full text-gray-300 text-xl">
                      No courses available at the moment.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
          {courses.length > 6 && (
            <div className="flex justify-center mt-6">
              <Link
                href="/courses"
                className="flex items-center gap-3 text-[clamp(1rem,1.5vw,2rem)] px-[clamp(1rem,2vw,3rem)] py-[clamp(0.5rem,1vw,2rem)] mt-4 bg-transparent border-2 text-white rounded-lg hover:bg-[#464545] transition-all duration-200"
              >
                Explore More Courses
                <HiArrowRight className="text-bold mt-1" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Courses;
