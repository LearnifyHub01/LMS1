// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { FaQuoteLeft } from "react-icons/fa";
// import { motion } from "framer-motion";
// import img1 from "../../../public/assests/review1.jpg";
// import img2 from "../../../public/assests/review2.jpg";
// import img3 from "../../../public/assests/review3.jpg";
// import img4 from "../../../public/assests/review4.jpg";
// import img5 from "../../../public/assests/review5.jpg";
// import worldMap from "../../../public/assests/map.jpg"; 

// interface Review {
//   name: string;
//   avatar: any;
//   profession: string;
//   comment: string;
// }

// export const reviews: Review[] = [
//   {
//     name: "Isabella Laurent",
//     avatar: img1,
//     profession: "Computer Science Student",
//     comment:
//       "LearnifyHub has been a game-changer for me! The interactive courses and easy-to-follow structure make learning super efficient.",
//   },
//   {
//     name: "Elena Rodríguez",
//     avatar: img2,
//     profession: "Business Management Student",
//     comment:
//       "I love the user-friendly interface and the well-structured lessons. It makes studying online feel smooth and enjoyable!",
//   },
//   {
//     name: "Matteo Russo",
//     avatar: img3,
//     profession: "Engineering Student",
//     comment:
//       "The best part about LearnifyHub is the practical approach! The real-world examples and projects have helped me grasp concepts quickly.",
//   },
//   {
//     name: "Liam Andersen",
//     avatar: img4,
//     profession: "Data Science Student",
//     comment:
//       "Great selection of courses with up-to-date content! The quizzes and assignments really test my knowledge and keep me engaged.",
//   },
//   {
//     name: "Sofia Müller",
//     avatar: img5,
//     profession: "Psychology Student",
//     comment:
//       "The best LMS I’ve used so far! The progress tracking and instructor support make learning easy and fun. Highly recommended!",
//   },
// ];

// const Reviews: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsVisible(false);
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
//         setIsVisible(true);
//       }, 500);
//     }, 6000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="text-black bg-black">
//       <div className="w-full">
//         {/* Existing Review Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold font-poppins mb-4">
//             What Our <span className="text-green-500">Students</span> Are Saying
//           </h2>
//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl font-poppins mx-auto">
//             Discover how LearnifyHub empowers professionals and students alike
//             to achieve their goals
//           </p>
//         </div>

//         <div
//           className="relative text-white min-h-screen flex items-center justify-center"
//           style={{
//             backgroundImage: "url('/assests/review.jpg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundAttachment: "fixed",
//           }}
//         >
//           <div className="absolute inset-0 bg-black/70"></div>

//           <div className="w-full relative z-10">
//             <div className="relative">
//               <div className="flex flex-col items-center justify-center py-16">
//                 <div className="text-green-500 text-8xl mb-8 opacity-70">
//                   <FaQuoteLeft />
//                 </div>

//                 <motion.div
//                   key={currentIndex}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{
//                     opacity: isVisible ? 1 : 0,
//                     y: isVisible ? 0 : 20,
//                   }}
//                   transition={{ duration: 0.8 }}
//                   className="max-w-3xl mx-auto text-center"
//                 >
//                   <p className="text-white shadow-xl font-poppins font-light text-xl md:text-2xl lg:text-3xl mb-10 leading-relaxed">
//                     {reviews[currentIndex].comment}
//                   </p>

//                   <div className="flex flex-col items-center">
//                     <motion.div
//                       key={currentIndex}
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ duration: 0.6 }}
//                       className="relative h-32 w-32 rounded-full overflow-hidden mb-4 shadow-lg"
//                     >
//                       <Image
//                         src={reviews[currentIndex].avatar}
//                         alt={`${reviews[currentIndex].name}'s avatar`}
//                         width={128}
//                         height={128}
//                         priority={true}
//                         placeholder="blur"
//                       />
//                     </motion.div>

//                     <h3 className="font-bold text-xl shadow-xl font-josefin text-white mb-1">
//                       {reviews[currentIndex].name}
//                     </h3>
//                     <p className="text-white/70 font-josefin text-sm">
//                       {reviews[currentIndex].profession}
//                     </p>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* New Section for World Map */}
//         <div className="w-full py-16 bg-gray-100">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold font-poppins mb-4">
//               Our <span className="text-green-500">Global</span> Reach
//             </h2>
//             <p className="text-lg md:text-xl text-gray-600 max-w-3xl font-poppins mx-auto">
//               LearnifyHub is trusted by students and professionals across the
//               globe. Join a thriving community of learners from every corner of
//               the world!
//             </p>
//           </div>

//           <div className="flex justify-center">
//             <div
//               className="relative w-full max-w-6xl"
//             >
//               <Image
//                 src={worldMap}
//                 alt="World map showing LearnifyHub's global user base"
//                 width={1200}
//                 height={100}
//                 priority={true}
//                 placeholder="blur"
//                 className="rounded-lg shadow-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reviews;
// // // import React, { useState, useEffect } from "react";
// // // import Image from "next/image";
// // // import { FaQuoteLeft } from "react-icons/fa";
// // // import { motion } from "framer-motion";
// // // import img1 from "../../../public/assests/review1.jpg";
// // // import img2 from "../../../public/assests/review2.jpg";
// // // import img3 from "../../../public/assests/review3.jpg";
// // // import img4 from "../../../public/assests/review4.jpg";
// // // import img5 from "../../../public/assests/review5.jpg";
// // // import worldMap from "../../../public/assests/map.jpg";

// // // interface Review {
// // //   name: string;
// // //   avatar: any;
// // //   profession: string;
// // //   comment: string;
// // // }

// // // export const reviews: Review[] = [
// // //   {
// // //     name: "Isabella Laurent",
// // //     avatar: img1,
// // //     profession: "Computer Science Student",
// // //     comment:
// // //       "LearnifyHub has been a game-changer for me! The interactive courses and easy-to-follow structure make learning super efficient.",
// // //   },
// // //   {
// // //     name: "Elena Rodríguez",
// // //     avatar: img2,
// // //     profession: "Business Management Student",
// // //     comment:
// // //       "I love the user-friendly interface and the well-structured lessons. It makes studying online feel smooth and enjoyable!",
// // //   },
// // //   {
// // //     name: "Matteo Russo",
// // //     avatar: img3,
// // //     profession: "Engineering Student",
// // //     comment:
// // //       "The best part about LearnifyHub is the practical approach! The real-world examples and projects have helped me grasp concepts quickly.",
// // //   },
// // //   {
// // //     name: "Liam Andersen",
// // //     avatar: img4,
// // //     profession: "Data Science Student",
// // //     comment:
// // //       "Great selection of courses with up-to-date content! The quizzes and assignments really test my knowledge and keep me engaged.",
// // //   },
// // //   {
// // //     name: "Sofia Müller",
// // //     avatar: img5,
// // //     profession: "Psychology Student",
// // //     comment:
// // //       "The best LMS I’ve used so far! The progress tracking and instructor support make learning easy and fun. Highly recommended!",
// // //   },
// // // ];

// // // const Reviews: React.FC = () => {
// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //   const [isVisible, setIsVisible] = useState(true);

// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setIsVisible(false);
// // //       setTimeout(() => {
// // //         setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
// // //         setIsVisible(true);
// // //       }, 500);
// // //     }, 6000);

// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   return (
// // //     <div className="text-black bg-black">
// // //       <div className="w-full">
// // //         {/* Review Section with Background Image */}
// // //         <div
// // //           className="relative text-white min-h-screen flex items-center justify-center"
// // //           style={{
// // //             backgroundImage: "url('/assests/review.jpg')",
// // //             backgroundSize: "cover",
// // //             backgroundPosition: "center",
// // //             backgroundAttachment: "fixed",
// // //           }}
// // //         >
// // //           <div className="absolute inset-0 bg-black/70"></div>

// // //           <div className="w-full relative z-10">
// // //             <div className="relative">
// // //               <div className="flex flex-col items-center justify-center py-16">
// // //                 {/* Moved Header and Subtext Inside */}
// // //                 <div className="text-center mb-12">
// // //                   <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold font-poppins mb-4">
// // //                     What Our <span className="text-green-500">Students</span>{" "}
// // //                     Are Saying
// // //                   </h2>
// // //                   <p className="text-lg md:text-xl text-gray-300 max-w-3xl font-poppins mx-auto">
// // //                     Discover how LearnifyHub empowers professionals and students
// // //                     alike to achieve their goals
// // //                   </p>
// // //                 </div>

// // //                 <div className="text-green-500 text-8xl mb-8 opacity-70">
// // //                   <FaQuoteLeft />
// // //                 </div>

// // //                 <motion.div
// // //                   key={currentIndex}
// // //                   initial={{ opacity: 0, y: 20 }}
// // //                   animate={{
// // //                     opacity: isVisible ? 1 : 0,
// // //                     y: isVisible ? 0 : 20,
// // //                   }}
// // //                   transition={{ duration: 0.8 }}
// // //                   className="max-w-3xl mx-auto text-center"
// // //                 >
// // //                   <p className="text-white shadow-xl font-poppins font-light text-xl md:text-2xl lg:text-3xl mb-10 leading-relaxed">
// // //                     {reviews[currentIndex].comment}
// // //                   </p>

// // //                   <div className="flex flex-col items-center">
// // //                     <motion.div
// // //                       key={currentIndex}
// // //                       initial={{ opacity: 0, scale: 0.8 }}
// // //                       animate={{ opacity: 1, scale: 1 }}
// // //                       transition={{ duration: 0.6 }}
// // //                       className="relative h-32 w-32 rounded-full overflow-hidden mb-4 shadow-lg"
// // //                     >
// // //                       <Image
// // //                         src={reviews[currentIndex].avatar}
// // //                         alt={`${reviews[currentIndex].name}'s avatar`}
// // //                         width={128}
// // //                         height={128}
// // //                         priority={true}
// // //                         placeholder="blur"
// // //                       />
// // //                     </motion.div>

// // //                     <h3 className="font-bold text-xl shadow-xl font-josefin text-white mb-1">
// // //                       {reviews[currentIndex].name}
// // //                     </h3>
// // //                     <p className="text-white/70 font-josefin text-sm">
// // //                       {reviews[currentIndex].profession}
// // //                     </p>
// // //                   </div>
// // //                 </motion.div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* World Map Section */}
// // //         <div className="w-full py-16 bg-gray-100">
// // //           <div className="text-center mb-12">
// // //             <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold font-poppins mb-4">
// // //               Our <span className="text-green-500">Global</span> Reach
// // //             </h2>
// // //             <p className="text-lg md:text-xl text-gray-600 max-w-3xl font-poppins mx-auto">
// // //               LearnifyHub is trusted by students and professionals across the
// // //               globe. Join a thriving community of learners from every corner of
// // //               the world!
// // //             </p>
// // //           </div>

// // //           <div className="flex justify-center">
// // //             <div className="relative w-full max-w-6xl">
// // //               <Image
// // //                 src={worldMap}
// // //                 alt="World map showing LearnifyHub's global user base"
// // //                 width={1200}
// // //                 height={100}
// // //                 priority={true}
// // //                 placeholder="blur"
// // //                 className="rounded-lg shadow-lg"
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Reviews;
// // import React, { useState } from "react";
// // import Image from "next/image";
// // import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Added FaArrowLeft and FaArrowRight
// // import { motion } from "framer-motion";
// // import img1 from "../../../public/assests/review1.jpg";
// // import img2 from "../../../public/assests/review2.jpg";
// // import img3 from "../../../public/assests/review3.jpg";
// // import img4 from "../../../public/assests/review4.jpg";
// // import img5 from "../../../public/assests/review5.jpg";
// // import worldMap from "../../../public/assests/map.jpg";

// // interface Review {
// //   name: string;
// //   avatar: any;
// //   profession: string;
// //   comment: string;
// // }

// // export const reviews: Review[] = [
// //   {
// //     name: "Isabella Laurent",
// //     avatar: img1,
// //     profession: "Computer Science Student",
// //     comment:
// //       "LearnifyHub has been a game-changer for me! The interactive courses and easy-to-follow structure make learning super efficient.",
// //   },
// //   {
// //     name: "Elena Rodríguez",
// //     avatar: img2,
// //     profession: "Business Management Student",
// //     comment:
// //       "I love the user-friendly interface and the well-structured lessons. It makes studying online feel smooth and enjoyable!",
// //   },
// //   {
// //     name: "Matteo Russo",
// //     avatar: img3,
// //     profession: "Engineering Student",
// //     comment:
// //       "The best part about LearnifyHub is the practical approach! The real-world examples and projects have helped me grasp concepts quickly.",
// //   },
// //   {
// //     name: "Liam Andersen",
// //     avatar: img4,
// //     profession: "Data Science Student",
// //     comment:
// //       "Great selection of courses with up-to-date content! The quizzes and assignments really test my knowledge and keep me engaged.",
// //   },
// //   {
// //     name: "Sofia Müller",
// //     avatar: img5,
// //     profession: "Psychology Student",
// //     comment:
// //       "The best LMS I’ve used so far! The progress tracking and instructor support make learning easy and fun. Highly recommended!",
// //   },
// // ];

// // const Reviews: React.FC = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [isVisible, setIsVisible] = useState(true);

// //   // Function to handle previous review
// //   const handlePrev = () => {
// //     setIsVisible(false);
// //     setTimeout(() => {
// //       setCurrentIndex((prevIndex) =>
// //         prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
// //       );
// //       setIsVisible(true);
// //     }, 500);
// //   };

// //   // Function to handle next review
// //   const handleNext = () => {
// //     setIsVisible(false);
// //     setTimeout(() => {
// //       setCurrentIndex((prevIndex) =>
// //         prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
// //       );
// //       setIsVisible(true);
// //     }, 500);
// //   };

// //   return (
// //     <div className="text-black bg-black">
// //       <div className="w-full">
// //         {/* Existing Review Section */}
// //         <div className="text-center mb-12">
// //           <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold font-poppins mb-4">
// //             What Our <span className="text-green-500">Students</span> Are Saying
// //           </h2>
// //           <p className="text-lg md:text-xl text-gray-600 max-w-3xl font-poppins mx-auto">
// //             Discover how LearnifyHub empowers professionals and students alike to
// //             achieve their goals
// //           </p>
// //         </div>

// //         <div
// //           className="relative text-white min-h-screen flex items-center justify-center"
// //           style={{
// //             backgroundImage: "url('/assests/review.jpg')",
// //             backgroundSize: "cover",
// //             backgroundPosition: "center",
// //             backgroundAttachment: "fixed",
// //           }}
// //         >
// //           <div className="absolute inset-0 bg-black/70"></div>

// //           <div className="w-full relative z-10">
// //             <div className="relative">
// //               <div className="flex flex-col items-center justify-center py-16">
// //                 <div className="text-green-500 text-8xl mb-8 opacity-70">
// //                   <FaQuoteLeft />
// //                 </div>

// //                 <div className="relative max-w-3xl mx-auto text-center">
// //                   {/* Left Arrow */}
// //                   <button
// //                     onClick={handlePrev}
// //                     className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-green-500 transition duration-300"
// //                   >
// //                     <FaArrowLeft size={30} />
// //                   </button>

// //                   {/* Review Content */}
// //                   <motion.div
// //                     key={currentIndex}
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{
// //                       opacity: isVisible ? 1 : 0,
// //                       y: isVisible ? 0 : 20,
// //                     }}
// //                     transition={{ duration: 0.8 }}
// //                     className="text-center"
// //                   >
// //                     <p className="text-white shadow-xl font-poppins font-light text-xl md:text-2xl lg:text-3xl mb-10 leading-relaxed">
// //                       {reviews[currentIndex].comment}
// //                     </p>

// //                     <div className="flex flex-col items-center">
// //                       <motion.div
// //                         key={currentIndex}
// //                         initial={{ opacity: 0, scale: 0.8 }}
// //                         animate={{ opacity: 1, scale: 1 }}
// //                         transition={{ duration: 0.6 }}
// //                         className="relative h-32 w-32 rounded-full overflow-hidden mb-4 shadow-lg"
// //                       >
// //                         <Image
// //                           src={reviews[currentIndex].avatar}
// //                           alt={`${reviews[currentIndex].name}'s avatar`}
// //                           width={128}
// //                           height={128}
// //                           priority={true}
// //                           placeholder="blur"
// //                         />
// //                       </motion.div>

// //                       <h3 className="font-bold text-xl shadow-xl font-josefin text-white mb-1">
// //                         {reviews[currentIndex].name}
// //                       </h3>
// //                       <p className="text-white/70 font-josefin text-sm">
// //                         {reviews[currentIndex].profession}
// //                       </p>
// //                     </div>
// //                   </motion.div>

// //                   {/* Right Arrow */}
// //                   <button
// //                     onClick={handleNext}
// //                     className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-green-500 transition duration-300"
// //                   >
// //                     <FaArrowRight size={30} />
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* New Section for World Map */}
// //         <div className="w-full py-16 bg-gray-100">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold font-poppins mb-4">
// //               Our <span className="text-green-500">Global</span> Reach
// //             </h2>
// //             <p className="text-lg md:text-xl text-gray-600 max-w-3xl font-poppins mx-auto">
// //               LearnifyHub is trusted by students and professionals across the
// //               globe. Join a thriving community of learners from every corner of
// //               the world!
// //             </p>
// //           </div>

// //           <div className="flex justify-center">
// //             <div className="relative w-full max-w-6xl">
// //               <Image
// //                 src={worldMap}
// //                 alt="World map showing LearnifyHub's global user base"
// //                 width={1200}
// //                 height={100}
// //                 priority={true}
// //                 placeholder="blur"
// //                 className="rounded-lg shadow-lg"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Reviews;
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../../public/assests/review1.jpg";
import img2 from "../../../public/assests/review2.jpg";
import img3 from "../../../public/assests/review3.jpg";
import img4 from "../../../public/assests/review4.jpg";
import img5 from "../../../public/assests/review5.jpg";
import worldMap from "../../../public/assests/map.jpg";

interface Review {
  name: string;
  avatar: any;
  profession: string;
  comment: string;
}


export const reviews: Review[] = [
  {
    name: "Isabella Laurent",
    avatar: img1,
    profession: "Computer Science Student",
    comment:
      "LearnifyHub has been a game-changer for me! The interactive courses and easy-to-follow structure make learning super efficient.",
  },
  {
    name: "Elena Rodríguez",
    avatar: img2,
    profession: "Business Management Student",
    comment:
      "I love the user-friendly interface and the well-structured lessons. It makes studying online feel smooth and enjoyable!",
  },
  {
    name: "Matteo Russo",
    avatar: img3,
    profession: "Engineering Student",
    comment:
      "The best part about LearnifyHub is the practical approach! The real-world examples and projects have helped me grasp concepts quickly.",
  },
  {
    name: "Liam Andersen",
    avatar: img4,
    profession: "Data Science Student",
    comment:
      "Great selection of courses with up-to-date content! The quizzes and assignments really test my knowledge and keep me engaged.",
  },
  {
    name: "Sofia Müller",
    avatar: img5,
    profession: "Psychology Student",
    comment:
      "The best LMS I’ve used so far! The progress tracking and instructor support make learning easy and fun. Highly recommended!",
  },
];

// Animation variants for smoother transitions
const reviewVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const avatarVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-black bg-black">
      <div className="w-full">
        {/* Header Section */}
        

        {/* Review Section */}
        <div
          className="relative text-white min-h-screen flex items-center justify-center"
          style={{
            backgroundImage: "url('/assests/review.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="w-full relative z-10">
          <div className="text-center mt-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold font-poppins mb-4">
            What Our <span className="text-green-500">Students</span> Are Saying
          </h2>
          <p className="text-lg md:text-xl text-white max-w-3xl font-poppins mx-auto">
            Discover how LearnifyHub empowers professionals and students alike
            to achieve their goals
          </p>
        </div>
            <div className="flex flex-col items-center justify-center py-16">
              <div className="text-green-500 text-8xl mb-8 opacity-70">
                <FaQuoteLeft />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  variants={reviewVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="max-w-3xl mx-auto text-center"
                >
                  <p className="text-white shadow-xl font-poppins font-light text-xl md:text-2xl lg:text-3xl mb-10 leading-relaxed">
                    {reviews[currentIndex].comment}
                  </p>

                  <div className="flex flex-col items-center">
                    <motion.div
                      variants={avatarVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: 0.2,
                      }}
                      className="relative h-32 w-32 rounded-full overflow-hidden mb-4 shadow-lg"
                    >
                      <Image
                        src={reviews[currentIndex].avatar}
                        alt={`${reviews[currentIndex].name}'s avatar`}
                        width={128}
                        height={128}
                        priority={true}
                        placeholder="blur"
                      />
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="font-bold text-xl shadow-xl font-josefin text-white mb-1"
                    >
                      {reviews[currentIndex].name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-white/70 font-josefin text-sm"
                    >
                      {reviews[currentIndex].profession}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* World Map Section */}
        <div className="w-full py-16 bg-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold font-poppins mb-4">
              Our <span className="text-green-500">Global</span> Reach
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl font-poppins mx-auto">
              LearnifyHub is trusted by students and professionals across the
              globe. Join a thriving community of learners from every corner of
              the world!
            </p>
          </div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-6xl"
            >
              <Image
                src={worldMap}
                alt="World map showing LearnifyHub's global user base"
                width={1200}
                height={100}
                priority={true}
                placeholder="blur"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;