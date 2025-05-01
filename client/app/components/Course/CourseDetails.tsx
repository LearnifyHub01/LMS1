// // // import CoursePlayer from "@/app/utils/CoursePlayer";
// // // import Ratings from "@/app/utils/Ratings";
// // // import { Rating } from "@mui/material";
// // // import Link from "next/link";
// // // import React, { useState } from "react";
// // // import {
// // //   IoCheckmarkDone,
// // //   IoCloseCircle,
// // //   IoCloseOutline,
// // // } from "react-icons/io5";
// // // import { useSelector } from "react-redux";
// // // import CourseContentList from "./CourseContentList";
// // // import imagethumbnail from "../../../public/assests/charlesdeluvio-Lks7vei-eAg-unsplash.jpg";
// // // import axios from "axios";
// // // import toast from "react-hot-toast";

// // // type Props = {
// // //   data: any;
// // // };

// // // const loadRazorpayScript = async () => {
// // //   return new Promise((resolve) => {
// // //     if (document.getElementById("razorpay-script")) {
// // //       resolve(true);
// // //       return;
// // //     }
// // //     const script = document.createElement("script");
// // //     script.src = "https://checkout.razorpay.com/v1/checkout.js";
// // //     script.id = "razorpay-script";
// // //     script.onload = () => resolve(true);
// // //     script.onerror = () => resolve(false);
// // //     document.body.appendChild(script);
// // //   });
// // // };

// // // function CourseDetails({ data }: Props) {
// // //   const [open, setOpen] = useState(false);
// // //   const { user } = useSelector((state: any) => state.auth);
// // //   const discountPercentage =
// // //     ((data?.estimatedPrice - data.price) / data?.estimatedPrice) * 100;

// // //   const discountPercentagePrice = discountPercentage.toFixed(0);

// // //   const isPurchased =
// // //     user && user?.courses?.find((item: any) => item._id === data._id);
// // //   const courseId = data._id;

// // //   const handleOrder = async (amount: number) => {
// // //     const scriptLoaded = await loadRazorpayScript();

// // //     if (!scriptLoaded) {
// // //       console.error("❌ Razorpay SDK failed to load");
// // //       alert("Razorpay SDK failed to load. Please refresh and try again.");
// // //       return;
// // //     }

// // //     try {
// // //       const response = await axios.post(
// // //         "http://localhost:8080/api/v1/make-payment",
// // //         { amount }
// // //       );

// // //       if (!response.data || !response.data.order_id) {
// // //         alert("Failed to get order ID from server.");
// // //         return;
// // //       }

// // //       const { order_id } = response.data;

// // //       if (typeof window !== "undefined" && window.Razorpay) {
// // //         const options = {
// // //           key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
// // //           amount: amount * 100,
// // //           currency: "INR",
// // //           name: "LearnifyHub",
// // //           description: "Purchase Course",
// // //           order_id,
// // //           handler: async function (response: any) {
// // //             const paymentData = {
// // //               courseId,
// // //               payment_Info: {
// // //                 id: response.razorpay_payment_id,
// // //                 order_id: response.razorpay_order_id,
// // //                 signature: response.razorpay_signature,
// // //               },
// // //             };

// // //             const verifyPayment = await axios.post(
// // //               "http://localhost:8080/api/v1/create-order",
// // //               paymentData,
// // //               { withCredentials: true }
// // //             );
// // //             console.log("verify payment", verifyPayment);
// // //             if (verifyPayment.data.success) {
// // //               toast.success(verifyPayment.data.message);
// // //               window.location.reload();
// // //             } else {
// // //               alert(" Payment Verification Failed.");
// // //             }
// // //           },
// // //           prefill: {
// // //             email: user?.email || "user@example.com",
// // //           },
// // //           theme: { color: "#528FF0" },
// // //         };

// // //         const razorpay = new window.Razorpay(options);
// // //         razorpay.open();
// // //       } else {
// // //         console.error(" Razorpay SDK not loaded");
// // //         alert("Razorpay SDK not loaded. Please refresh and try again.");
// // //       }
// // //     } catch (error) {
// // //       console.error(" Payment initiation error:", error);
// // //       alert("Something went wrong while processing your payment.");
// // //     }
// // //   };

// // //   console.log(data.demoUrl);
// // //   return (
// // //     <div>
// // //       <div className="w-[90%] 800px:w-[90%] m-auto py-5">
// // //         <div className="w-full flex flex-col-reverse 800px:flex-row">
// // //           <div className="w-full 800px:[65%] 800px:pr-5">
// // //             <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
// // //               {data.name}
// // //             </h1>
// // //             <div className="flex items-center justify-between pt-3">
// // //               <div className="flex items-center">
// // //                 <Ratings rating={data.ratings} />
// // //                 <h5 className="text-black dark:text-white">
// // //                   {data.reviews?.length} Reviews
// // //                 </h5>
// // //               </div>
// // //               <h5 className="text-black dark:text-white">
// // //                 {data.purchased} Students
// // //               </h5>
// // //             </div>
// // //             <br />
// // //             <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
// // //               What will you learn from this Course?
// // //             </h1>
// // //             <div>
// // //               {data.benefits?.map((item: any, index: number) => (
// // //                 <div
// // //                   className="w-full flex 800px:items-center py-2"
// // //                   key={index}
// // //                 >
// // //                   <div className="w-[15px] mr-1">
// // //                     <IoCheckmarkDone
// // //                       size={20}
// // //                       className="text-black dark:text-white"
// // //                     />
// // //                   </div>
// // //                   <p className="pl-2 text-black dark:text-white">
// // //                     {item.title}
// // //                   </p>
// // //                 </div>
// // //               ))}
// // //               <br />
// // //               <br />
// // //             </div>
// // //             <h1 className="text-black dark:text-white text-[25px] font-Poppins font-[600]">
// // //               What the prerequisites for the starting this course?
// // //             </h1>
// // //             {data.prerequisites?.map((item: any, index: number) => (
// // //               <div className="w-full flex 800px:items-center py-2" key={index}>
// // //                 <div className="w-[15px] mr-1">
// // //                   <IoCheckmarkDone
// // //                     size={20}
// // //                     className="text-black dark:text-white"
// // //                   />
// // //                 </div>
// // //                 <p className="pl-2 text-black dark:text-white">{item.title}</p>
// // //               </div>
// // //             ))}
// // //             <br />
// // //             <br />
// // //             <h1 className="text-black dark:text-white text-[25px] font-Poppins font-[600]">
// // //               Course Overview
// // //             </h1>
// // //             <CourseContentList data={data?.courseData} isDemo={true} />
// // //             <br />
// // //             <br />
// // //             <h1 className="text-black dark:text-white text-[25px] font-Poppins font-[600]">
// // //               Course Details
// // //             </h1>
// // //             <p className="text-black dark:text-white text-[18px] mt-[20px] whitespace-pre-line  w-full overflow-hidden ">
// // //               {data.description}
// // //             </p>
// // //             <br />
// // //             <br />
// // //             <div className="w-full">
// // //               <div className="800px:flex items-center">
// // //                 <Ratings rating={data?.ratings} />
// // //                 <div className="mb-2 800px:mb-[unset]">
// // //                   <h5 className="text-black dark:text-white text-[18px] font-Poppins">
// // //                     {Number.isInteger(data?.ratings)
// // //                       ? data?.ratings.toFixed(1)
// // //                       : data?.ratings.toFixed(1)}{" "}
// // //                     Course Rating • {data?.reviews?.length} Reviews
// // //                   </h5>
// // //                 </div>
// // //                 <br />
// // //                 {(data?.reviews && [...data.reviews].reverse()).map(
// // //                   (item: any, index: number) => (
// // //                     <div className="w-full pb-4" key={index}>
// // //                       <div className="flex">
// // //                         <div className="w-[50px] h-[50px]">
// // //                           <div className="w-[50px] h-[50px] bg-slate-600 flex rounded-[50px] items-center justify-center cursor-pointer">
// // //                             <h1 className="text-black dark:text-white uppercase text-[18px] ">
// // //                               {item.user.name.slice(0, 2)}
// // //                             </h1>
// // //                           </div>
// // //                         </div>
// // //                         <div className="hidden 800px:block pl-2">
// // //                           <div className="flex items-center">
// // //                             <h5 className="text-black dark:text-white p2-2 text-[18px]">
// // //                               {item.user.name}
// // //                               <Ratings rating={item.rating} />
// // //                             </h5>
// // //                           </div>
// // //                           <p className="text-black dark:text-white">
// // //                             {item.comment}
// // //                           </p>
// // //                           {/* <small className="text-black dark:text-white">
// // //                             {item.createdAt} •
// // //                           </small> */}
// // //                         </div>
// // //                         <div className="pl-2 flex 800px:hidden items-center">
// // //                           <h5 className="text-black dark:text-white text-[18px]"></h5>
// // //                           <Ratings rating={item.rating} />
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   )
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //           <div className="w-full 800px:w-[35%] relative">
// // //             <div className="top=[100px] w-full">
// // //               <CoursePlayer
// // //                 videoUrl={data.demoUrl}
// // //                 title={data?.title}
// // //                 //thumnail={data?.thumbnail?.url || "imagethumbnail"}
// // //               />
// // //               {isPurchased ? null : (
// // //                 <div className="flex items-center">
// // //                   <h1 className="text-black dark:text-white pt-5 text-[25px] ">
// // //                     {data.price === 0 ? "FREE" : data.price + "₹"}
// // //                   </h1>
// // //                   <h5 className="text-black dark:text-white pl-3 text-[20px] mt-2 line-through opacity-80 ">
// // //                     {data.estimatedPrice} ₹
// // //                   </h5>
// // //                   <h4 className="text-black dark:text-white pl-5 pt-4 text-[22px] ">
// // //                     {discountPercentagePrice} % OFF
// // //                   </h4>
// // //                 </div>
// // //               )}
// // //               <div className="flex items-center">
// // //                 {!user ? (
// // //                   <div className="space-y-2">
// // //                     <div className="text-gray-600 font-medium">
// // //                       Please Login to View and Purchase Full Course
// // //                     </div>
// // //                   </div>
// // //                 ) : (
// // //                   <>
// // //                     {isPurchased || data.price === 0 ? (
// // //                       <Link
// // //                         className="inline-block px-5 py-2 mt-4 bg-green-500 text-white rounded-md font-medium hover:bg-green-600"
// // //                         href={`/course-access/${data._id}`}
// // //                       >
// // //                         Enter to Course
// // //                       </Link>
// // //                     ) : (
// // //                       <div
// // //                         className="inline-block px-3 mt-2 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-700 cursor-pointer"
// // //                         onClick={() => handleOrder(data.price)}
// // //                       >
// // //                         Buy Now {data.price} ₹
// // //                       </div>
// // //                     )}
// // //                   </>
// // //                 )}
// // //               </div>
// // //             </div>
// // //             <br />
// // //             <p className="pb-1 text-black dark:text-white">
// // //               Full lifetime access
// // //             </p>
// // //             <p className="pb-1 text-black dark:text-white">
// // //               Source code included
// // //             </p>
// // //             <p className="pb-1 text-black dark:text-white">
// // //               Certificate of complition
// // //             </p>
// // //             <p className="pb-1 text-black dark:text-white">Premium Support</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       {open && (
// // //         <div className="w-full h-screen bg-[#00000036] fixed top-0 left-0 z-50 flex items-center justify-center">
// // //           <div className="w-[500px] min-h-[500px] bg-white rounded-lg shadow p-3">
// // //             <div className="w-full flex justify-end">
// // //               <IoCloseOutline
// // //                 size={40}
// // //                 className="text-black cursor-pointer"
// // //                 onClick={() => setOpen(false)}
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default CourseDetails;

// // //------------------------------------------------------------------------------------------------------//

// import { useState } from "react";
// import { useSelector } from "react-redux";
// import Link from "next/link";
// import axios from "axios";
// import toast from "react-hot-toast";
// import CoursePlayer from "@/app/utils/CoursePlayer";
// import CourseContentList from "../../utils/CourseContentList";
// import {
//   FiCheck,
//   FiBookOpen,
//   FiUsers,
//   FiAward,
//   FiCode,
//   FiHelpCircle,
//   FiClock,
//   FiCalendar,
// } from "react-icons/fi";
// import {
//   HiOutlineCash,
//   HiOutlineClipboardCheck,
//   HiOutlineLightBulb,
//   HiOutlineAcademicCap,
// } from "react-icons/hi";
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// import { motion } from "framer-motion";
// import Ratings from "@/app/utils/Ratings";

// type Props = {
//   data: any;
// };

// const loadRazorpayScript = async () => {
//   return new Promise((resolve) => {
//     if (document.getElementById("razorpay-script")) {
//       resolve(true);
//       return;
//     }
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.id = "razorpay-script";
//     script.onload = () => resolve(true);
//     script.onerror = () => resolve(false);
//     document.body.appendChild(script);
//   });
// };

// function CourseDetails({ data }: Props) {
//   const [activeTab, setActiveTab] = useState("overview");
//   const { user } = useSelector((state: any) => state.auth);

//   const discountPercentage =
//     ((data?.estimatedPrice - data.price) / data?.estimatedPrice) * 100;
//   const discountPercentagePrice = discountPercentage.toFixed(0);

//   const isPurchased =
//     user && user?.courses?.find((item: any) => item._id === data._id);
//   const courseId = data._id;

//   const totalVideos = data?.courseData?.length || 0;
//   const totalDuration = data?.courseData?.reduce(
//     (total: number, item: any) => total + (Number(item.videoLength) || 0),
//     0
//   );
//   const totalHours = Math.floor(totalDuration / 3600);
//   const totalMinutes = Math.floor((totalDuration % 3600) / 60);
//   const estimatedHours = totalDuration / 3600;
//   const totalModules = [
//     ...new Set(data?.courseData?.map((item: any) => item.videoSection)),
//   ].length;
//   const totalLessons = totalVideos;

//   const handleOrder = async (amount: number) => {
//     const scriptLoaded = await loadRazorpayScript();

//     if (!scriptLoaded) {
//       toast.error(
//         "Payment system failed to load. Please refresh and try again."
//       );
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/v1/make-payment",
//         { amount }
//       );

//       if (!response.data || !response.data.order_id) {
//         toast.error("Failed to get order ID from server.");
//         return;
//       }

//       const { order_id } = response.data;

//       if (typeof window !== "undefined" && window.Razorpay) {
//         const options = {
//           key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//           amount: amount * 100,
//           currency: "INR",
//           name: "LearnifyHub",
//           description: "Purchase Course",
//           order_id,
//           handler: async function (response: any) {
//             const paymentData = {
//               courseId,
//               payment_Info: {
//                 id: response.razorpay_payment_id,
//                 order_id: response.razorpay_order_id,
//                 signature: response.razorpay_signature,
//               },
//             };

//             const verifyPayment = await axios.post(
//               "http://localhost:8080/api/v1/create-order",
//               paymentData,
//               { withCredentials: true }
//             );

//             if (verifyPayment.data.success) {
//               toast.success(verifyPayment.data.message);
//               window.location.reload();
//             } else {
//               toast.error("Payment Verification Failed.");
//             }
//           },
//           prefill: {
//             email: user?.email || "user@example.com",
//           },
//           theme: { color: "#4F46E5" },
//         };

//         const razorpay = new window.Razorpay(options);
//         razorpay.open();
//       } else {
//         toast.error("Payment system not loaded. Please refresh and try again.");
//       }
//     } catch (error) {
//       toast.error("Something went wrong while processing your payment.");
//       console.error("Payment initiation error:", error);
//     }
//   };

//   return (
//     <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Course Header */}
//         <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8">
//           <div className="md:flex">
//             <div className="md:w-1/2 p-6">
//               <div className="flex items-center mb-3">
//                 <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
//                   Category: {data.category || "Course"}
//                 </span>
//                 <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
//                   Level: {data.level || "All Levels"}
//                 </span>
//               </div>

//               <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
//                 {data.name}
//               </h1>

//               <div className="mt-4 flex items-center space-x-4">
//                 <div className="flex items-center">
//                   <Ratings rating={data.ratings} />
//                   <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
//                     ({data.reviews?.length} reviews)
//                   </span>
//                 </div>
//                 <div className="flex items-center">
//                   <FiUsers className="text-gray-500 mr-1" />
//                   <span className="text-sm text-gray-600 dark:text-gray-300">
//                     {data.purchased} students
//                   </span>
//                 </div>
//               </div>

//               {/* Enhanced course stats */}
//               <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
//                 <div className="flex flex-col items-center p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
//                   <FiClock className="text-indigo-600 dark:text-indigo-400 mb-1" />
//                   <span className="text-lg font-semibold text-gray-900 dark:text-white">
//                     {estimatedHours.toFixed(2)} h
//                   </span>
//                   <span className="text-xs text-gray-500 dark:text-gray-400">
//                     Total Duration
//                   </span>
//                 </div>
//                 <div className="flex flex-col items-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
//                   <HiOutlineAcademicCap className="text-blue-600 dark:text-blue-400 mb-1" />
//                   <span className="text-lg font-semibold text-gray-900 dark:text-white">
//                     {totalModules}
//                   </span>
//                   <span className="text-xs text-gray-500 dark:text-gray-400">
//                     Modules
//                   </span>
//                 </div>
//                 <div className="flex flex-col items-center p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
//                   <HiOutlineLightBulb className="text-purple-600 dark:text-purple-400 mb-1" />
//                   <span className="text-lg font-semibold text-gray-900 dark:text-white">
//                     {totalLessons}
//                   </span>
//                   <span className="text-xs text-gray-500 dark:text-gray-400">
//                     Lessons
//                   </span>
//                 </div>
//                 <div className="flex flex-col items-center p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
//                   <FiCalendar className="text-green-600 dark:text-green-400 mb-1" />
//                   <span className="text-lg font-semibold text-gray-900 dark:text-white">
//                     Lifetime
//                   </span>
//                   <span className="text-xs text-gray-500 dark:text-gray-400">
//                     Access
//                   </span>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <div className="flex items-center">
//                   {!isPurchased && data.price !== 0 && (
//                     <div className="flex items-baseline">
//                       <span className="text-3xl font-extrabold text-gray-900 dark:text-white">
//                         ₹{data.price}
//                       </span>
//                       <span className="ml-2 text-xl text-gray-500 line-through">
//                         ₹{data.estimatedPrice}
//                       </span>
//                       <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
//                         {discountPercentagePrice}% OFF
//                       </span>
//                     </div>
//                   )}
//                   {data.price === 0 && (
//                     <span className="text-3xl font-extrabold text-green-600 dark:text-green-400">
//                       FREE
//                     </span>
//                   )}
//                 </div>

//                 <div className="mt-4">
//                   {!user ? (
//                     <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
//                       <p className="text-blue-800 dark:text-blue-200 font-medium">
//                         Please login to view and purchase the full course
//                       </p>
//                     </div>
//                   ) : (
//                     <>
//                       {isPurchased || data.price === 0 ? (
//                         <Link
//                           href={`/course-access/${data._id}`}
//                           className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
//                         >
//                           <FiBookOpen className="mr-2" />
//                           Continue Learning
//                         </Link>
//                       ) : (
//                         <button
//                           onClick={() => handleOrder(data.price)}
//                           className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition w-full md:w-auto justify-center"
//                         >
//                           <HiOutlineCash className="mr-2" />
//                           Start Learning for ₹ {data.price}
//                         </button>
//                       )}
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div className="md:w-1/2 p-6">
//               <div className="rounded-lg overflow-hidden shadow-lg">
//                 <CoursePlayer videoUrl={data.demoUrl} title={data?.title} />
//               </div>

//               <div className="mt-6 grid grid-cols-2 gap-4">
//                 <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
//                   <FiAward className="text-indigo-500 mr-2" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">
//                     Certificate Included
//                   </span>
//                 </div>
//                 <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
//                   <FiCode className="text-indigo-500 mr-2" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">
//                     Source Code Included
//                   </span>
//                 </div>
//                 <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
//                   <FiHelpCircle className="text-indigo-500 mr-2" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">
//                     Q&A Problem Solving
//                   </span>
//                 </div>
//                 <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
//                   <FiBookOpen className="text-indigo-500 mr-2" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">
//                     Study Materials
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Instructor Section */}
//         <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8 p-6">
//           <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
//             Instructor
//           </h2>

//           <div className="flex items-center">
//             <div className="flex-shrink-0 h-16 w-16 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center">
//               <span className="text-indigo-700 dark:text-indigo-300 text-xl font-bold">
//                 {user.name?.slice(0, 2)?.toUpperCase() || "IN"}
//               </span>
//             </div>

//             <div className="ml-4">
//               <h3 className="text-lg font-medium text-gray-900 dark:text-white">
//                 {user?.name || "Expert Instructor"}
//               </h3>
//               <p className="text-sm text-gray-500 dark:text-gray-400">
//                 Professional Educator
//               </p>
//               <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
//                 Experienced educator passionate about helping students master
//                 new skills and achieve their goals.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Course Tabs */}
//         <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
//           <div className="border-b border-gray-200 dark:border-gray-700">
//             <nav className="flex -mb-px">
//               <button
//                 onClick={() => setActiveTab("overview")}
//                 className={`px-6 py-4 text-sm font-medium ${
//                   activeTab === "overview"
//                     ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400"
//                     : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
//                 }`}
//               >
//                 Overview
//               </button>
//               <button
//                 onClick={() => setActiveTab("curriculum")}
//                 className={`px-6 py-4 text-sm font-medium ${
//                   activeTab === "curriculum"
//                     ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400"
//                     : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
//                 }`}
//               >
//                 Curriculum
//               </button>
//               <button
//                 onClick={() => setActiveTab("reviews")}
//                 className={`px-6 py-4 text-sm font-medium ${
//                   activeTab === "reviews"
//                     ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400"
//                     : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
//                 }`}
//               >
//                 Reviews
//               </button>
//             </nav>
//           </div>

//           <div className="p-6">
//             {activeTab === "overview" && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//                   What You Will Learn
//                 </h2>
//                 <div className="grid md:grid-cols-2 gap-4 mb-8">
//                   {data.benefits?.map((item: any, index: number) => (
//                     <div
//                       key={index}
//                       className="flex items-start p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
//                     >
//                       <FiCheck className="mt-1 text-green-500 flex-shrink-0" />
//                       <p className="ml-3 text-gray-700 dark:text-gray-300">
//                         {item.title}
//                       </p>
//                     </div>
//                   ))}
//                 </div>

//                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//                   Prerequisites
//                 </h2>
//                 <div className="grid md:grid-cols-2 gap-4 mb-8">
//                   {data.prerequisites?.map((item: any, index: number) => (
//                     <div
//                       key={index}
//                       className="flex items-start p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
//                     >
//                       <FiCheck className="mt-1 text-blue-500 flex-shrink-0" />
//                       <p className="ml-3 text-gray-700 dark:text-gray-300">
//                         {item.title}
//                       </p>
//                     </div>
//                   ))}
//                 </div>

//                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//                   Course Description
//                 </h2>
//                 <div className="prose prose-indigo max-w-none dark:prose-invert">
//                   <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
//                     {data.description}
//                   </p>
//                 </div>
//               </motion.div>
//             )}

//             {activeTab === "curriculum" && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//                   Course Content
//                 </h2>

//                 <div className="mb-6 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4 flex flex-wrap gap-4">
//                   <div className="flex items-center">
//                     <FiClock className="text-indigo-600 dark:text-indigo-400 mr-2" />
//                     <span className="text-gray-700 dark:text-gray-300">
//                       {totalMinutes} minutes
//                     </span>
//                   </div>
//                   <div className="flex items-center">
//                     <HiOutlineAcademicCap className="text-indigo-600 dark:text-indigo-400 mr-2" />
//                     <span className="text-gray-700 dark:text-gray-300">
//                       {totalModules} modules
//                     </span>
//                   </div>
//                   <div className="flex items-center">
//                     <HiOutlineLightBulb className="text-indigo-600 dark:text-indigo-400 mr-2" />
//                     <span className="text-gray-700 dark:text-gray-300">
//                       {totalLessons} lessons
//                     </span>
//                   </div>
//                 </div>

//                 <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
//                   <CourseContentList data={data?.courseData} isDemo={true} />
//                 </div>
//               </motion.div>
//             )}

//             {activeTab === "reviews" && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="flex flex-col md:flex-row md:items-center mb-6">
//                   <div className="md:mr-6 md:w-1/3 mb-4 md:mb-0 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center">
//                     <div className="text-5xl font-bold text-gray-900 dark:text-white">
//                       {Number.isInteger(data?.ratings)
//                         ? data?.ratings.toFixed(1)
//                         : data?.ratings.toFixed(1)}
//                     </div>
//                     <div className="mt-2 flex justify-center">
//                       <Ratings rating={data.ratings} />
//                     </div>
//                     <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
//                       Based on {data?.reviews?.length || 0} reviews
//                     </div>
//                   </div>

//                   <div className="flex-1 flex flex-col space-y-2 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
//                     {[5, 4, 3, 2, 1].map((star) => {
//                       const count =
//                         data?.reviews?.filter(
//                           (r: any) => Math.floor(r.rating) === star
//                         ).length || 0;
//                       const percentage = data?.reviews?.length
//                         ? (count / data.reviews.length) * 100
//                         : 0;

//                       return (
//                         <div key={star} className="flex items-center">
//                           <div className="w-10 text-sm text-gray-700 dark:text-gray-300">
//                             {star} stars
//                           </div>
//                           <div className="flex-1 h-4 mx-2 bg-gray-200 dark:bg-gray-600 rounded">
//                             <div
//                               className="h-4 bg-yellow-400 rounded"
//                               style={{ width: `${percentage}%` }}
//                             ></div>
//                           </div>
//                           <div className="w-16 text-sm text-right text-gray-700 dark:text-gray-300">
//                             {count} ({percentage.toFixed(0)}%)
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
//                   <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
//                     Student Reviews
//                   </h3>

//                   {data?.reviews && data.reviews.length > 0 ? (
//                     <div className="space-y-6">
//                       {[...data.reviews]
//                         .reverse()
//                         .map((item: any, index: number) => (
//                           <div
//                             key={index}
//                             className="flex space-x-4 pb-6 border-b border-gray-100 dark:border-gray-800 last:border-0"
//                           >
//                             <div className="flex-shrink-0">
//                               <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center">
//                                 <span className="text-indigo-700 dark:text-indigo-300 font-medium">
//                                   {item.user.name.slice(0, 2).toUpperCase()}
//                                 </span>
//                               </div>
//                             </div>

//                             <div className="flex-1">
//                               <div className="flex items-center mb-1">
//                                 <h4 className="font-medium text-gray-900 dark:text-white">
//                                   {item.user.name}
//                                 </h4>
//                                 <div className="ml-2 text-gray-500 dark:text-gray-400 text-sm">
//                                   {/* Add proper date formatting if available */}
//                                   {/* {new Date(item.createdAt).toLocaleDateString()} */}
//                                 </div>
//                               </div>

//                               <div className="mb-2">
//                                 <Ratings rating={item.rating} />
//                               </div>

//                               <p className="text-gray-700 dark:text-gray-300">
//                                 {item.comment}
//                               </p>
//                             </div>
//                           </div>
//                         ))}
//                     </div>
//                   ) : (
//                     <div className="text-center py-8">
//                       <p className="text-gray-500 dark:text-gray-400">
//                         No reviews yet. Be the first to review this course!
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CourseDetails;

// import { useState } from "react";
// import { useSelector } from "react-redux";
// import Link from "next/link";
// import axios from "axios";
// import toast from "react-hot-toast";
// import CoursePlayer from "@/app/utils/CoursePlayer";
// import CourseContentList from "../../utils/CourseContentList";
// import {
//   FiCheck,
//   FiBookOpen,
//   FiUsers,
//   FiAward,
//   FiCode,
//   FiHelpCircle,
//   FiClock,
//   FiCalendar,
//   FiShare2,
// } from "react-icons/fi";
// import {
//   HiOutlineCash,
//   HiOutlineLightBulb,
//   HiOutlineAcademicCap,
// } from "react-icons/hi";
// import { motion } from "framer-motion";
// import Ratings from "@/app/utils/Ratings";

// type Props = {
//   data: any;
// };

// const loadRazorpayScript = async () => {
//   return new Promise((resolve) => {
//     if (document.getElementById("razorpay-script")) {
//       resolve(true);
//       return;
//     }
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.id = "razorpay-script";
//     script.onload = () => resolve(true);
//     script.onerror = () => resolve(false);
//     document.body.appendChild(script);
//   });
// };

// function CourseDetails({ data }: Props) {
//   const [activeTab, setActiveTab] = useState("overview");
//   const { user } = useSelector((state: any) => state.auth);

//   const discountPercentage =
//     ((data?.estimatedPrice - data.price) / data?.estimatedPrice) * 100;
//   const discountPercentagePrice = discountPercentage.toFixed(0);

//   const isPurchased =
//     user && user?.courses?.find((item: any) => item._id === data._id);
//   const courseId = data._id;

//   const totalVideos = data?.courseData?.length || 0;
//   const totalDuration = data?.courseData?.reduce(
//     (total: number, item: any) => total + (Number(item.videoLength) || 0),
//     0
//   );
//   const totalMinutes = Math.floor((totalDuration % 3600) / 60);
//   const estimatedHours = totalDuration / 3600;
//   const totalModules = [
//     ...new Set(data?.courseData?.map((item: any) => item.videoSection)),
//   ].length;
//   const totalLessons = totalVideos;

//   const handleOrder = async (amount: number) => {
//     const scriptLoaded = await loadRazorpayScript();

//     if (!scriptLoaded) {
//       toast.error(
//         "Payment system failed to load. Please refresh and try again."
//       );
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/v1/make-payment",
//         { amount }
//       );

//       if (!response.data || !response.data.order_id) {
//         toast.error("Failed to get order ID from server.");
//         return;
//       }

//       const { order_id } = response.data;

//       if (typeof window !== "undefined" && window.Razorpay) {
//         const options = {
//           key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//           amount: amount * 100,
//           currency: "INR",
//           name: "LearnifyHub",
//           description: "Purchase Course",
//           order_id,
//           handler: async function (response: any) {
//             const paymentData = {
//               courseId,
//               payment_Info: {
//                 id: response.razorpay_payment_id,
//                 order_id: response.razorpay_order_id,
//                 signature: response.razorpay_signature,
//               },
//             };

//             const verifyPayment = await axios.post(
//               "http://localhost:8080/api/v1/create-order",
//               paymentData,
//               { withCredentials: true }
//             );

//             if (verifyPayment.data.success) {
//               toast.success(verifyPayment.data.message);
//               window.location.reload();
//             } else {
//               toast.error("Payment Verification Failed.");
//             }
//           },
//           prefill: {
//             email: user?.email || "user@example.com",
//           },
//           theme: { color: "#4F46E5" },
//         };

//         const razorpay = new window.Razorpay(options);
//         razorpay.open();
//       } else {
//         toast.error("Payment system not loaded. Please refresh and try again.");
//       }
//     } catch (error) {
//       toast.error("Something went wrong while processing your payment.");
//       console.error("Payment initiation error:", error);
//     }
//   };

//   const handleShare = async () => {
//     const courseUrl = `${window.location.origin}/course/${data._id}`;
//     const shareData = {
//       title: data.name,
//       text: `Check out this amazing course: ${
//         data.name
//       }\n${data.description?.substring(0, 50)}...`,
//       url: courseUrl,
//     };

//     try {
//       if (navigator.share && navigator.canShare(shareData)) {
//         await navigator.share(shareData);
//       } else {
//         const shareText = `${shareData.title}\n${shareData.text}\n${shareData.url}`;
//         await navigator.clipboard.writeText(shareText);
//       }
//     } catch (error) {
//       toast.error("Failed to share the course");
//       console.error("Share error:", error);
//     }
//   };

//   return (
//     <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Course Header */}
//         <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8">
//           <div className="md:flex">
//             <div className="md:w-1/2 p-6">
//               <div className="flex items-center justify-between mb-3">
//                 <div className="flex items-center">
//                   <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
//                     Category: {data.category || "Course"}
//                   </span>
//                   <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
//                     Level: {data.level || "All Levels"}
//                   </span>
//                 </div>
//               </div>

//               <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
//                 {data.name}
//               </h1>

//               <div className="mt-4 flex items-center space-x-4">
//                 <div className="flex items-center">
//                   <Ratings rating={data.ratings} />
//                   <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
//                     ({data.reviews?.length} reviews)
//                   </span>
//                 </div>
//                 <div className="flex items-center">
//                   <FiUsers className="text-gray-500 mr-1" />
//                   <span className="text-sm text-gray-600 dark:text-gray-300">
//                     {data.purchased} students
//                   </span>
//                 </div>
//               </div>

//               <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
//                 <div className="flex flex-col items-center p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
//                   <FiClock className="text-indigo-600 dark:text-indigo-400 mb-1" />
//                   <span className="text-lg font-semibold text-gray-900 dark:text-white">
//                     {estimatedHours.toFixed(2)} h
//                   </span>
//                   <span className="text-xs text-gray-500 dark:text-gray-400">
//                     Total Duration
//                   </span>
//                 </div>
//                 <div className="flex flex-col items-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
//                   <HiOutlineAcademicCap className="text-blue-600 dark:text-blue-400 mb-1" />
//                   <span className="text-lg font-semibold text-gray-900 dark:text-white">
//                     {totalModules}
//                   </span>
//                   <span className="text-xs text-gray-500 dark:text-gray-400">
//                     Modules
//                   </span>
//                 </div>
//                 <div className="flex flex-col items-center p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
//                   <HiOutlineLightBulb className="text-purple-600 dark:text-purple-400 mb-1" />
//                   <span className="text-lg font-semibold text-gray-900 dark:text-white">
//                     {totalLessons}
//                   </span>
//                   <span className="text-xs text-gray-500 dark:text-gray-400">
//                     Lessons
//                   </span>
//                 </div>
//                 <div className="flex flex-col items-center p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
//                   <FiCalendar className="text-green-600 dark:text-green-400 mb-1" />
//                   <span className="text-lg font-semibold text-gray-900 dark:text-white">
//                     Lifetime
//                   </span>
//                   <span className="text-xs text-gray-500 dark:text-gray-400">
//                     Access
//                   </span>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <div className="flex items-center">
//                   {!isPurchased && data.price !== 0 && (
//                     <div className="flex items-baseline">
//                       <span className="text-3xl font-extrabold text-gray-900 dark:text-white">
//                         ₹{data.price}
//                       </span>
//                       <span className="ml-2 text-xl text-gray-500 line-through">
//                         ₹{data.estimatedPrice}
//                       </span>
//                       <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
//                         {discountPercentagePrice}% OFF
//                       </span>
//                     </div>
//                   )}
//                   {data.price === 0 && (
//                     <span className="text-3xl font-extrabold text-green-600 dark:text-green-400">
//                       FREE
//                     </span>
//                   )}
//                 </div>

//                 <div className="mt-4 flex flex-col sm:flex-row gap-4">
//                   {!user ? (
//                     <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
//                       <p className="text-blue-800 dark:text-blue-200 font-medium">
//                         Please login to view and purchase the full course
//                       </p>
//                     </div>
//                   ) : (
//                     <>
//                       {isPurchased || data.price === 0 ? (
//                         <Link
//                           href={`/course-access/${data._id}`}
//                           className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition w-full sm:w-auto justify-center"
//                         >
//                           <FiBookOpen className="mr-2" />
//                           Continue Learning
//                         </Link>
//                       ) : (
//                         <button
//                           onClick={() => handleOrder(data.price)}
//                           className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition w-full sm:w-auto justify-center"
//                         >
//                           <HiOutlineCash className="mr-2" />
//                           Start Learning for ₹ {data.price}
//                         </button>
//                       )}
//                     </>
//                   )}
//                   <button
//                     onClick={handleShare}
//                     className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 transition w-full sm:w-auto justify-center"
//                   >
//                     <FiShare2 className="mr-2" />
//                     Share Course
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="md:w-1/2 p-6">
//               <div className="rounded-lg overflow-hidden shadow-lg">
//                 <CoursePlayer videoUrl={data.demoUrl} title={data?.title} />
//               </div>

//               <div className="mt-6 grid grid-cols-2 gap-4">
//                 <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
//                   <FiAward className="text-indigo-500 mr-2" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">
//                     Certificate Included
//                   </span>
//                 </div>
//                 <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
//                   <FiCode className="text-indigo-500 mr-2" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">
//                     Source Code Included
//                   </span>
//                 </div>
//                 <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
//                   <FiHelpCircle className="text-indigo-500 mr-2" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">
//                     Q&A Problem Solving
//                   </span>
//                 </div>
//                 <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
//                   <FiBookOpen className="text-indigo-500 mr-2" />
//                   <span className="text-sm text-gray-700 dark:text-gray-300">
//                     Study Materials
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Instructor Section */}
//         <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8 p-6">
//           <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
//             Instructor
//           </h2>

//           <div className="flex items-center">
//             <div className="flex-shrink-0 h-16 w-16 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center">
//               <span className="text-indigo-700 dark:text-indigo-300 text-xl font-bold">
//                 {user.name?.slice(0, 2)?.toUpperCase() || "IN"}
//               </span>
//             </div>

//             <div className="ml-4">
//               <h3 className="text-lg font-medium text-gray-900 dark:text-white">
//                 {user?.name || "Expert Instructor"}
//               </h3>
//               <p className="text-sm text-gray-500 dark:text-gray-400">
//                 Professional Educator
//               </p>
//               <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
//                 Experienced educator passionate about helping students master
//                 new skills and achieve their goals.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Course Tabs */}
//         <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
//           <div className="border-b border-gray-200 dark:border-gray-700">
//             <nav className="flex -mb-px">
//               <button
//                 onClick={() => setActiveTab("overview")}
//                 className={`px-6 py-4 text-sm font-medium ${
//                   activeTab === "overview"
//                     ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400"
//                     : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
//                 }`}
//               >
//                 Overview
//               </button>
//               <button
//                 onClick={() => setActiveTab("curriculum")}
//                 className={`px-6 py-4 text-sm font-medium ${
//                   activeTab === "curriculum"
//                     ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400"
//                     : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
//                 }`}
//               >
//                 Curriculum
//               </button>
//               <button
//                 onClick={() => setActiveTab("reviews")}
//                 className={`px-6 py-4 text-sm font-medium ${
//                   activeTab === "reviews"
//                     ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400"
//                     : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
//                 }`}
//               >
//                 Reviews
//               </button>
//             </nav>
//           </div>

//           <div className="p-6">
//             {activeTab === "overview" && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//                   What You Will Learn
//                 </h2>
//                 <div className="grid md:grid-cols-2 gap-4 mb-8">
//                   {data.benefits?.map((item: any, index: number) => (
//                     <div
//                       key={index}
//                       className="flex items-start p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
//                     >
//                       <FiCheck className="mt-1 text-green-500 flex-shrink-0" />
//                       <p className="ml-3 text-gray-700 dark:text-gray-300">
//                         {item.title}
//                       </p>
//                     </div>
//                   ))}
//                 </div>

//                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//                   Prerequisites
//                 </h2>
//                 <div className="grid md:grid-cols-2 gap-4 mb-8">
//                   {data.prerequisites?.map((item: any, index: number) => (
//                     <div
//                       key={index}
//                       className="flex items-start p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
//                     >
//                       <FiCheck className="mt-1 text-blue-500 flex-shrink-0" />
//                       <p className="ml-3 text-gray-700 dark:text-gray-300">
//                         {item.title}
//                       </p>
//                     </div>
//                   ))}
//                 </div>

//                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//                   Course Description
//                 </h2>
//                 <div className="prose prose-indigo max-w-none dark:prose-invert">
//                   <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
//                     {data.description}
//                   </p>
//                 </div>
//               </motion.div>
//             )}

//             {activeTab === "curriculum" && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//                   Course Content
//                 </h2>

//                 <div className="mb-6 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4 flex flex-wrap gap-4">
//                   <div className="flex items-center">
//                     <FiClock className="text-indigo-600 dark:text-indigo-400 mr-2" />
//                     <span className="text-gray-700 dark:text-gray-300">
//                       {totalMinutes} minutes
//                     </span>
//                   </div>
//                   <div className="flex items-center">
//                     <HiOutlineAcademicCap className="text-indigo-600 dark:text-indigo-400 mr-2" />
//                     <span className="text-gray-700 dark:text-gray-300">
//                       {totalModules} modules
//                     </span>
//                   </div>
//                   <div className="flex items-center">
//                     <HiOutlineLightBulb className="text-indigo-600 dark:text-indigo-400 mr-2" />
//                     <span className="text-gray-700 dark:text-gray-300">
//                       {totalLessons} lessons
//                     </span>
//                   </div>
//                 </div>

//                 <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
//                   <CourseContentList data={data?.courseData} isDemo={true} />
//                 </div>
//               </motion.div>
//             )}

//             {activeTab === "reviews" && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="flex flex-col md:flex-row md:items-center mb-6">
//                   <div className="md:mr-6 md:w-1/3 mb-4 md:mb-0 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center">
//                     <div className="text-5xl font-bold text-gray-900 dark:text-white">
//                       {Number.isInteger(data?.ratings)
//                         ? data?.ratings.toFixed(1)
//                         : data?.ratings.toFixed(1)}
//                     </div>
//                     <div className="mt-2 flex justify-center">
//                       <Ratings rating={data.ratings} />
//                     </div>
//                     <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
//                       Based on {data?.reviews?.length || 0} reviews
//                     </div>
//                   </div>

//                   <div className="flex-1 flex flex-col space-y-2 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
//                     {[5, 4, 3, 2, 1].map((star) => {
//                       const count =
//                         data?.reviews?.filter(
//                           (r: any) => Math.floor(r.rating) === star
//                         ).length || 0;
//                       const percentage = data?.reviews?.length
//                         ? (count / data.reviews.length) * 100
//                         : 0;

//                       return (
//                         <div key={star} className="flex items-center">
//                           <div className="w-10 text-sm text-gray-700 dark:text-gray-300">
//                             {star} stars
//                           </div>
//                           <div className="flex-1 h-4 mx-2 bg-gray-200 dark:bg-gray-600 rounded">
//                             <div
//                               className="h-4 bg-yellow-400 rounded"
//                               style={{ width: `${percentage}%` }}
//                             ></div>
//                           </div>
//                           <div className="w-16 text-sm text-right text-gray-700 dark:text-gray-300">
//                             {count} ({percentage.toFixed(0)}%)
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
//                   <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
//                     Student Reviews
//                   </h3>

//                   {data?.reviews && data.reviews.length > 0 ? (
//                     <div className="space-y-6">
//                       {[...data.reviews]
//                         .reverse()
//                         .map((item: any, index: number) => (
//                           <div
//                             key={index}
//                             className="flex space-x-4 pb-6 border-b border-gray-100 dark:border-gray-800 last:border-0"
//                           >
//                             <div className="flex-shrink-0">
//                               <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center">
//                                 <span className="text-indigo-700 dark:text-indigo-300 font-medium">
//                                   {item.user.name.slice(0, 2).toUpperCase()}
//                                 </span>
//                               </div>
//                             </div>

//                             <div className="flex-1">
//                               <div className="flex items-center mb-1">
//                                 <h4 className="font-medium text-gray-900 dark:text-white">
//                                   {item.user.name}
//                                 </h4>
//                                 <div className="ml-2 text-gray-500 dark:text-gray-400 text-sm">
//                                   {/* Add proper date formatting if available */}
//                                   {/* {new Date(item.createdAt).toLocaleDateString()} */}
//                                 </div>
//                               </div>

//                               <div className="mb-2">
//                                 <Ratings rating={item.rating} />
//                               </div>

//                               <p className="text-gray-700 dark:text-gray-300">
//                                 {item.comment}
//                               </p>
//                             </div>
//                           </div>
//                         ))}
//                     </div>
//                   ) : (
//                     <div className="text-center py-8">
//                       <p className="text-gray-500 dark:text-gray-400">
//                         No reviews yet. Be the first to review this course!
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CourseDetails;
import { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import axios from "axios";
import defaultImage from "@/public/assests/download5.png"
import toast from "react-hot-toast";
import CoursePlayer from "@/app/utils/CoursePlayer";
import CourseContentList from "../../utils/CourseContentList";
import {
  FiCheck,
  FiBookOpen,
  FiUsers,
  FiAward,
  FiCode,
  FiHelpCircle,
  FiClock,
  FiCalendar,
  FiShare2,
} from "react-icons/fi";
import {
  HiOutlineCash,
  HiOutlineLightBulb,
  HiOutlineAcademicCap,
} from "react-icons/hi";
import { motion } from "framer-motion";
import Ratings from "@/app/utils/Ratings";
import Image from 'next/image'
import socketInstance from "@/app/utils/socket";
type Props = {
  data: any;
};

const loadRazorpayScript = async () => {
  return new Promise((resolve) => {
    if (document.getElementById("razorpay-script")) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.id = "razorpay-script";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

function CourseDetails({ data }: Props) {
  const [activeTab, setActiveTab] = useState("overview");
  const { user } = useSelector((state: any) => state.auth);

  const discountPercentage =
    ((data?.estimatedPrice - data.price) / data?.estimatedPrice) * 100;
  const discountPercentagePrice = discountPercentage.toFixed(0);

  const isPurchased =user && user?.courses?.find((item: any) => item === data._id);
  console.log(isPurchased)
  const courseId = data._id;

  const totalVideos = data?.courseData?.length || 0;
  const totalDuration = data?.courseData?.reduce(
    (total: number, item: any) => total + (Number(item.videoLength) || 0),
    0
  );
  const estimatedHours = totalDuration / 3600;
  const formattedDuration =
    totalDuration < 3600
      ? `${Math.round(totalDuration / 60)} min`
      : `${Math.floor(estimatedHours)}.${Math.round((totalDuration % 3600) / 60)} hrs`;
  
  //console.log(formattedDuration);


  //const totalHours = Math.floor(totalDuration / 3600);
  const totalMinutes = Math.floor((totalDuration % 3600) / 60);
  const totalModules = [
    ...new Set(data?.courseData?.map((item: any) => item.videoSection)),
  ].length;
  const totalLessons = totalVideos;

  const handleOrder = async (amount: number) => {
    const scriptLoaded = await loadRazorpayScript();

    if (!scriptLoaded) {
      toast.error(
        "Payment system failed to load. Please refresh and try again."
      );
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/make-payment",
        { amount }
      );

      if (!response.data || !response.data.order_id) {
        toast.error("Failed to get order ID from server.");
        return;
      }

      const { order_id } = response.data;

      if (typeof window !== "undefined" && window.Razorpay) {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: amount * 100,
          currency: "INR",
          name: "LearnifyHub",
          description: "Purchase Course",
          order_id,
          handler: async function (response: any) {
            const paymentData = {
              courseId,
              payment_Info: {
                id: response.razorpay_payment_id,
                order_id: response.razorpay_order_id,
                signature: response.razorpay_signature,
              },
            };

            const verifyPayment = await axios.post(
              "http://localhost:8080/api/v1/create-order",
              paymentData,
              { withCredentials: true }
            );
          
            if (verifyPayment.data.success) {
              toast.success(verifyPayment.data.message);
              window.location.reload();
              socketInstance.emit("notification",{
                title:"New Order",
                message:`you have a new order from ${data.course.name }`,
                userId:user._id
              })
              
            } else {
              toast.error("Payment Verification Failed.");
            }
          },
          prefill: {
            email: user?.email || "user@example.com",
          },
          theme: { color: "#4F46E5" },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } else {
        toast.error("Payment system not loaded. Please refresh and try again.");
      }
    } catch (error) {
      toast.error("Something went wrong while processing your payment.");
      console.error("Payment initiation error:", error);
    }
  };
  //console.log('data is ', data)
  // const handleShare = async () => {
  //   const courseUrl = `${window.location.origin}/course/${data._id}`;
  //   const shareData = {
  //     title: data.name,
  //     text: `Check out this amazing course: ${data.name}`,
  //     url: courseUrl,
  //   };

  //   try {
  //     if (navigator.share && navigator.canShare(shareData)) {
  //       await navigator.share(shareData);
  //     } else {
  //       await navigator.clipboard.writeText(courseUrl);
  //       toast.success("Course link copied to clipboard!");
  //     }
  //   } catch (error) {
  //     toast.error("Failed to share the course");
  //     console.error("Share error:", error);
  //   }
  // };
  const handleShare = async () => {
    const courseUrl = `${window.location.origin}/course/${data._id}`;
    const shareData = {
      title: data.name,
      text: `Check out this amazing course: ${
        data.name
      }\n${data.description?.substring(0, 50)}...`,
      url: courseUrl,
    };

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        const shareText = `${shareData.title}\n${shareData.text}\n${shareData.url}`;
        await navigator.clipboard.writeText(shareText);
        // toast.success("Course details copied to clipboard!");
      }
    } catch (error) {
      toast.error("Failed to share the course");
      console.error("Share error:", error);
    }
  };
console.log(data)
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Course Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/2 p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                    Category: {data.category || "Course"}
                  </span>
                  <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    Level: {data.level || "All Levels"}
                  </span>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                {data.name}
              </h1>

              <div className="mt-4 flex items-center space-x-4">
                <div className="flex items-center">
                  <Ratings rating={data.ratings} />
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                    ({data.reviews?.length} reviews)
                  </span>
                </div>
                <div className="flex items-center">
                  <FiUsers className="text-gray-500 mr-1" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {data.purchased} students
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                  <FiClock className="text-indigo-600 dark:text-indigo-400 mb-1" />
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {formattedDuration}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Total Duration
                  </span>
                </div>
                <div className="flex flex-col items-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <HiOutlineAcademicCap className="text-blue-600 dark:text-blue-400 mb-1" />
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {totalModules}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Modules
                  </span>
                </div>
                <div className="flex flex-col items-center p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                  <HiOutlineLightBulb className="text-purple-600 dark:text-purple-400 mb-1" />
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {totalLessons}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Lessons
                  </span>
                </div>
                <div className="flex flex-col items-center p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <FiCalendar className="text-green-600 dark:text-green-400 mb-1" />
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    Lifetime
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Access
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center">
                  {!isPurchased && data.price !== 0 && (
                    <div className="flex items-baseline">
                      <span className="text-3xl font-extrabold text-gray-900 dark:text-white">
                        ₹{data.price}
                      </span>
                      <span className="ml-2 text-xl text-gray-500 line-through">
                        ₹{data.estimatedPrice}
                      </span>
                      <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                        {discountPercentagePrice}% OFF
                      </span>
                    </div>
                  )}
                  {data.price === 0 && (
                    <span className="text-3xl font-extrabold text-green-600 dark:text-green-400">
                      FREE
                    </span>
                  )}
                </div>

                <div className="mt-4 flex flex-col sm:flex-row gap-4">
                  {!user ? (
                    <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                      <p className="text-blue-800 dark:text-blue-200 font-medium">
                        Please login to view and purchase the full course
                      </p>
                    </div>
                  ) : (
                    <>
                      {isPurchased || data.price === 0 ? (
                        <Link
                          href={`/course-access/${data._id}`}
                          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition w-full sm:w-auto justify-center"
                        >
                          <FiBookOpen className="mr-2" />
                          Continue Learning
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleOrder(data.price)}
                          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition w-full sm:w-auto justify-center"
                        >
                          <HiOutlineCash className="mr-2" />
                          Start Learning for ₹ {data.price}
                        </button>
                      )}
                    </>
                  )}
                  <button
                    onClick={handleShare}
                    className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 transition w-full sm:w-auto justify-center"
                  >
                    <FiShare2 className="mr-2" />
                    Share Course
                  </button>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 p-6">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <CoursePlayer videoUrl={data.demoUrl} title={data?.title} />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <FiAward className="text-indigo-500 mr-2" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Certificate Included
                  </span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <FiCode className="text-indigo-500 mr-2" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Source Code Included
                  </span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <FiHelpCircle className="text-indigo-500 mr-2" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Q&A Problem Solving
                  </span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <FiBookOpen className="text-indigo-500 mr-2" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Study Materials
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructor Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8 p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Instructor
          </h2>

          <div className="flex items-center">
            <div className="flex-shrink-0 h-16 w-16 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center">
              {/* <span className="text-indigo-700 dark:text-indigo-300 text-xl font-bold">
                
              </span> */}
               <Image
                   src={data.publisher[0]?.avatar?.url || defaultImage }
                   width={500}
                    height={500}
                  alt="Picture of the author"
      className="rounded-full"
    />
            </div>

            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {data.publisher[0]?.name || "Expert Instructor"}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Professional Educator
              </p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                Experienced educator passionate about helping students master
                new skills and achieve their goals.
              </p>
            </div>
          </div>
        </div>

        {/* Course Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === "overview"
                    ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === "curriculum"
                    ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                Curriculum
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === "reviews"
                    ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                Reviews
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  What You Will Learn
                </h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {data.benefits?.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <FiCheck className="mt-1 text-green-500 flex-shrink-0" />
                      <p className="ml-3 text-gray-700 dark:text-gray-300">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Prerequisites
                </h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {data.prerequisites?.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <FiCheck className="mt-1 text-blue-500 flex-shrink-0" />
                      <p className="ml-3 text-gray-700 dark:text-gray-300">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Course Description
                </h2>
                <div className="prose prose-indigo max-w-none dark:prose-invert">
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                    {data.description}
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === "curriculum" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Course Content
                </h2>

                <div className="mb-6 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4 flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <FiClock className="text-indigo-600 dark:text-indigo-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {totalMinutes} minutes
                    </span>
                  </div>
                  <div className="flex items-center">
                    <HiOutlineAcademicCap className="text-indigo-600 dark:text-indigo-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {totalModules} modules
                    </span>
                  </div>
                  <div className="flex items-center">
                    <HiOutlineLightBulb className="text-indigo-600 dark:text-indigo-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {totalLessons} lessons
                    </span>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                  <CourseContentList data={data?.courseData} isDemo={true} />
                </div>
              </motion.div>
            )}

            {activeTab === "reviews" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row md:items-center mb-6">
                  <div className="md:mr-6 md:w-1/3 mb-4 md:mb-0 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center">
                    <div className="text-5xl font-bold text-gray-900 dark:text-white">
                      {Number.isInteger(data?.ratings)
                        ? data?.ratings.toFixed(1)
                        : data?.ratings.toFixed(1)}
                    </div>
                    <div className="mt-2 flex justify-center">
                      <Ratings rating={data.ratings} />
                    </div>
                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Based on {data?.reviews?.length || 0} reviews
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col space-y-2 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    {[5, 4, 3, 2, 1].map((star) => {
                      const count =
                        data?.reviews?.filter(
                          (r: any) => Math.floor(r.rating) === star
                        ).length || 0;
                      const percentage = data?.reviews?.length
                        ? (count / data.reviews.length) * 100
                        : 0;

                      return (
                        <div key={star} className="flex items-center">
                          <div className="w-10 text-sm text-gray-700 dark:text-gray-300">
                            {star} stars
                          </div>
                          <div className="flex-1 h-4 mx-2 bg-gray-200 dark:bg-gray-600 rounded">
                            <div
                              className="h-4 bg-yellow-400 rounded"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <div className="w-16 text-sm text-right text-gray-700 dark:text-gray-300">
                            {count} ({percentage.toFixed(0)}%)
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Student Reviews
                  </h3>

                  {data?.reviews && data.reviews.length > 0 ? (
                    <div className="space-y-6">
                      {[...data.reviews]
                        .reverse()
                        .map((item: any, index: number) => (
                          <div
                            key={index}
                            className="flex space-x-4 pb-6 border-b border-gray-100 dark:border-gray-800 last:border-0"
                          >
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center">
                                <span className="text-indigo-700 dark:text-indigo-300 font-medium">
                                  {item.user.name.slice(0, 2).toUpperCase()}
                                </span>
                              </div>
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center mb-1">
                                <h4 className="font-medium text-gray-900 dark:text-white">
                                  {item.user.name}
                                </h4>
                                <div className="ml-2 text-gray-500 dark:text-gray-400 text-sm">
                                  {/* Add proper date formatting if available */}
                                  {/* {new Date(item.createdAt).toLocaleDateString()} */}
                                </div>
                              </div>

                              <div className="mb-2">
                                <Ratings rating={item.rating} />
                              </div>

                              <p className="text-gray-700 dark:text-gray-300">
                                {item.comment}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500 dark:text-gray-400">
                        No reviews yet. Be the first to review this course!
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
