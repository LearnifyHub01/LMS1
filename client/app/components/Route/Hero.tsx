// "use client";
// import Image from "next/image";
// import React, { FC, useState } from "react";
// import { FaSearch, FaBook } from "react-icons/fa";
// import Image1 from "../../../public/assests/f993a37eb635feef43e96323100d5fa5.png";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";

// type Props = {};

// const ScrollingText: FC<{
//   text: string;
//   direction: "left" | "right";
//   top: number;
// }> = ({ text, direction, top }) => {
//   const fullText = `${text} ${text} ${text} ${text}`;
//   const variants = {
//     animate: {
//       x: direction === "left" ? ["0%", "-40%"] : ["-40%", "0%"],
//       transition: {
//         x: {
//           repeat: Infinity,
//           repeatType: "loop",
//           duration: 80,
//           ease: "linear",
//         },
//       },
//     },
//   };

//   return (
//     <div className="absolute left-0 w-full z-0 overflow-hidden" style={{ top: `${top}px` }}>
//       <motion.div
//         variants={variants}
//         animate="animate"
//         initial={{ x: direction === "left" ? "0%" : "-50%" }}
//         className="inline-block whitespace-nowrap"
//       >
//         <span className="select-none whitespace-nowrap text-[15vmax] font-black uppercase leading-[0.75] text-slate-400 opacity-30">
//           {fullText}
//         </span>
//       </motion.div>
//     </div>
//   );
// };

// const Hero: FC<Props> = () => {
//   const [search, setSearch] = useState("");
//   const router = useRouter();

//   const handleSearch = (e?: React.FormEvent) => {
//     if (e) e.preventDefault(); // Prevent form submission reload
//     if (search === "") {
//       console.log("Search is empty, no redirect.");
//       return;
//     }
//     console.log("Redirecting to:", `/courses?title=${search}`);
//     router.push(`/courses?title=${search}`);
//   };

//   return (
//     <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-between bg-[#DDE6ED] dark:bg-[#27374D] relative overflow-hidden">
//       <ScrollingText text="grow daily" direction="left" top={0} />
//       <ScrollingText text="Stay Focused" direction="right" top={150} />
//       <ScrollingText text="Master Skills" direction="left" top={300} />
//       <ScrollingText text="Unlock Potential" direction="right" top={450} />

//       <div className="image-container z-10">
//         <Image
//           src={Image1}
//           alt="Hero Image"
//           className="object-cover select-none w-full h-full rounded-full"
//           layout="intrinsic"
//           priority
//         />
//       </div>

//       <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center px-6 lg:px-12 text-center lg:text-left space-y-8 z-10">
//         <h1 className="text-4xl select-none lg:text-5xl font-thin text-gray-800 dark:text-white relative">
//           Welcome to <span className="relative">LearnifyHub</span>
//         </h1>
//         <p className="lg:text-xl text-gray-600 dark:text-white">
//           Elevate your skills, master your goals - start learning now.
//         </p>

//         <form onSubmit={handleSearch} className="flex w-full items-center max-w-lg">
//           <label htmlFor="search" className="sr-only">
//             Search
//           </label>
//           <div className="relative w-full">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//               <FaBook className="w-5 h-6 text-gray-500 dark:text-gray-400" />
//             </div>
//             <input
//               type="text"
//               id="search"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//               style={{ width: "400px" }}
//               placeholder="Search Courses..."
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="ml-2 mr-16 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700"
//           >
//             <FaSearch className="w-4 h-4" />
//             <span className="sr-only">Search</span>
//           </button>
//         </form>

//         <div className="text-center lg:text-left">
//           <h5 className="text-lg text-gray-700 dark:text-gray-300">
//             500k+ people already trust us.{" "}
//             <a href="/courses" className="text-blue-600 underline hover:text-blue-800 transition-colors">
//               View Courses
//             </a>
//           </h5>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
// // // // // // // // // // // "use client";
// // // // // // // // // // // import Image from "next/image";
// // // // // // // // // // // import React, { FC, useState } from "react";
// // // // // // // // // // // import { FaSearch, FaBook } from "react-icons/fa";
// // // // // // // // // // // import Image1 from "../../../public/assests/f993a37eb635feef43e96323100d5fa5.png";
// // // // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // // // import { useRouter } from "next/navigation";

// // // // // // // // // // // type Props = {};

// // // // // // // // // // // const ScrollingText: FC<{
// // // // // // // // // // //   text: string;
// // // // // // // // // // //   direction: "left" | "right";
// // // // // // // // // // //   top: number;
// // // // // // // // // // // }> = ({ text, direction, top }) => {
// // // // // // // // // // //   const fullText = `${text} ${text} ${text} ${text}`;
// // // // // // // // // // //   const variants = {
// // // // // // // // // // //     animate: {
// // // // // // // // // // //       x: direction === "left" ? ["0%", "-40%"] : ["-40%", "0%"],
// // // // // // // // // // //       transition: {
// // // // // // // // // // //         x: {
// // // // // // // // // // //           repeat: Infinity,
// // // // // // // // // // //           repeatType: "loop",
// // // // // // // // // // //           duration: 80,
// // // // // // // // // // //           ease: "linear",
// // // // // // // // // // //         },
// // // // // // // // // // //       },
// // // // // // // // // // //     },
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div
// // // // // // // // // // //       className="absolute left-0 w-full z-0 overflow-hidden"
// // // // // // // // // // //       style={{ top: `${top}px` }}
// // // // // // // // // // //     >
// // // // // // // // // // //       <motion.div
// // // // // // // // // // //         variants={variants}
// // // // // // // // // // //         animate="animate"
// // // // // // // // // // //         initial={{ x: direction === "left" ? "0%" : "-50%" }}
// // // // // // // // // // //         className="inline-block whitespace-nowrap"
// // // // // // // // // // //       >
// // // // // // // // // // //         <span className="select-none whitespace-nowrap text-[15vmax] font-black uppercase leading-[0.75] text-slate-400 opacity-30">
// // // // // // // // // // //           {fullText}
// // // // // // // // // // //         </span>
// // // // // // // // // // //       </motion.div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // const Hero: FC<Props> = () => {
// // // // // // // // // // //   const [search, setSearch] = useState("");
// // // // // // // // // // //   const router = useRouter();

// // // // // // // // // // //   const handleSearch = (e: React.FormEvent) => {
// // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // //     if (search.trim() === "") {
// // // // // // // // // // //       return;
// // // // // // // // // // //     } else {
// // // // // // // // // // //       router.push(`/courses?title=${encodeURIComponent(search)}`);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-between bg-[#DDE6ED] dark:bg-[#27374D] relative overflow-hidden">
// // // // // // // // // // //       {/* Scrolling Text Layers */}
// // // // // // // // // // //       <ScrollingText text="grow daily" direction="left" top={0} />
// // // // // // // // // // //       <ScrollingText text="Stay Focused" direction="right" top={150} />
// // // // // // // // // // //       <ScrollingText text="Master Skills" direction="left" top={300} />
// // // // // // // // // // //       <ScrollingText text="Unlock Potential" direction="right" top={450} />

// // // // // // // // // // //       {/* Left Side - Image */}
// // // // // // // // // // //       <div className="image-container z-10">
// // // // // // // // // // //         <Image
// // // // // // // // // // //           src={Image1}
// // // // // // // // // // //           alt="Hero Image"
// // // // // // // // // // //           className="object-cover select-none w-full h-full rounded-full"
// // // // // // // // // // //           layout="intrinsic"
// // // // // // // // // // //           priority
// // // // // // // // // // //         />
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Right Side - Text & Form */}
// // // // // // // // // // //       <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center px-6 lg:px-12 text-center lg:text-left space-y-8 z-10">
// // // // // // // // // // //         {/* Heading Section */}
// // // // // // // // // // //         <h1 className="text-4xl select-none lg:text-5xl font-thin text-gray-800 dark:text-white relative">
// // // // // // // // // // //           Welcome to <span className="relative">LearnifyHub</span>
// // // // // // // // // // //         </h1>

// // // // // // // // // // //         {/* Subheading */}
// // // // // // // // // // //         <p className="lg:text-xl text-gray-600 dark:text-white">
// // // // // // // // // // //           Elevate your skills, master your goals - start learning now.
// // // // // // // // // // //         </p>

// // // // // // // // // // //         {/* Search Bar */}
// // // // // // // // // // //         <form className="flex w-full items-center max-w-lg" onSubmit={handleSearch}>
// // // // // // // // // // //           <label htmlFor="search" className="sr-only">
// // // // // // // // // // //             Search
// // // // // // // // // // //           </label>
// // // // // // // // // // //           <div className="relative w-full">
// // // // // // // // // // //             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
// // // // // // // // // // //               <FaBook className="w-5 h-6 text-gray-500 dark:text-gray-400" />
// // // // // // // // // // //             </div>
// // // // // // // // // // //             <input
// // // // // // // // // // //               type="text"
// // // // // // // // // // //               id="search"
// // // // // // // // // // //               value={search}
// // // // // // // // // // //               onChange={(e) => setSearch(e.target.value)}
// // // // // // // // // // //               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
// // // // // // // // // // //               style={{ width: "400px" }}
// // // // // // // // // // //               placeholder="Search Courses..."
// // // // // // // // // // //             />
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <button
// // // // // // // // // // //             type="submit"
// // // // // // // // // // //             className="ml-2 mr-16 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
// // // // // // // // // // //           >
// // // // // // // // // // //             <FaSearch className="w-4 h-4" />
// // // // // // // // // // //             <span className="sr-only">Search</span>
// // // // // // // // // // //           </button>
// // // // // // // // // // //         </form>

// // // // // // // // // // //         {/* Trust Statement */}
// // // // // // // // // // //         <div className="text-center lg:text-left">
// // // // // // // // // // //           <h5 className="text-lg text-gray-700 dark:text-gray-300">
// // // // // // // // // // //             500k+ people already trust us.{" "}
// // // // // // // // // // //             <a
// // // // // // // // // // //               href="/courses"
// // // // // // // // // // //               className="text-blue-600 underline hover:text-blue-800 transition-colors"
// // // // // // // // // // //             >
// // // // // // // // // // //               View Courses
// // // // // // // // // // //             </a>
// // // // // // // // // // //           </h5>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Hero;

// // // // // "use client";
// // // // // import React, { FC, useState } from "react";
// // // // // import { FaSearch, FaBook } from "react-icons/fa";
// // // // // import { useRouter } from "next/navigation";

// // // // // type Props = {};

// // // // // const Hero: FC<Props> = () => {
// // // // //   const [search, setSearch] = useState("");
// // // // //   const router = useRouter();

// // // // //   const handleSearch = (e: React.FormEvent) => {
// // // // //     e.preventDefault();
// // // // //     if (search.trim() === "") {
// // // // //       return;
// // // // //     } else {
// // // // //       router.push(`/courses?title=${encodeURIComponent(search)}`);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-between bg-[#DDE6ED] dark:bg-[#27374D] relative overflow-hidden">
// // // // //       {/* Background Video */}
// // // // //       <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
// // // // //         <video
// // // // //           className="w-full h-full object-cover"
// // // // //           autoPlay
// // // // //           loop
// // // // //           preload="auto"
// // // // //           muted
// // // // //           playsInline
// // // // //           src="assests/1113140_Opening_Educational_3840x2160.mp4"
// // // // //         />
// // // // //       </div>

// // // // //       {/* Overlay to improve text readability */}
// // // // //       <div className="absolute inset-0 bg-black/40 z-1"></div>

// // // // //       {/* Content Container */}
// // // // //       <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
// // // // //         {/* Right Side - Text & Form */}
// // // // //         <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left space-y-8">
// // // // //           {/* Heading Section */}
// // // // //           <h1 className="text-3xl select-none md:text-4xl lg:text-5xl font-thin text-white">
// // // // //             Welcome to <span className="relative">LearnifyHub</span>
// // // // //           </h1>

// // // // //           {/* Subheading */}
// // // // //           <p className="text-base md:text-lg lg:text-xl text-white">
// // // // //             Elevate your skills, master your goals - start learning now.
// // // // //           </p>

// // // // //           {/* Search Bar */}
// // // // //           <form className="flex w-full items-center max-w-lg" onSubmit={handleSearch}>
// // // // //             <label htmlFor="search" className="sr-only">
// // // // //               Search
// // // // //             </label>
// // // // //             <div className="relative w-full">
// // // // //               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
// // // // //                 <FaBook className="w-5 h-6 text-gray-300" />
// // // // //               </div>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 id="search"
// // // // //                 value={search}
// // // // //                 onChange={(e) => setSearch(e.target.value)}
// // // // //                 className="bg-white/20 border border-white/30 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 backdrop-blur-sm placeholder-gray-300"
// // // // //                 placeholder="Search Courses..."
// // // // //               />
// // // // //             </div>
// // // // //             <button
// // // // //               type="submit"
// // // // //               className="ml-2 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
// // // // //             >
// // // // //               <FaSearch className="w-4 h-4" />
// // // // //               <span className="sr-only">Search</span>
// // // // //             </button>
// // // // //           </form>

// // // // //           {/* Trust Statement */}
// // // // //           <div className="text-center lg:text-left">
// // // // //             <h5 className="text-base md:text-lg text-white">
// // // // //               500k+ people already trust us.{" "}
// // // // //               <a
// // // // //                 href="/courses"
// // // // //                 className="text-blue-300 underline hover:text-blue-200 transition-colors"
// // // // //               >
// // // // //                 View Courses
// // // // //               </a>
// // // // //             </h5>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Hero;

// // // // // // "use client";
// // // // // // import React, { FC, useState, useEffect } from "react";
// // // // // // import Link from "next/link";
// // // // // // import { useSelector } from "react-redux";
// // // // // // import Image from "next/image";
// // // // // // import { FaSearch, FaBook } from "react-icons/fa";
// // // // // // import { HiOutlineMenuAlt3 } from "react-icons/hi";
// // // // // // import { useRouter } from "next/navigation";
// // // // // // import { ThemeSwitcher } from "../../utils/ThemeSwitcher";
// // // // // // import NavItems from "../../utils/NavItems";
// // // // // // import CustomModel from "../../utils/CustomModel";
// // // // // // import Login from "./../Auth/Login";
// // // // // // import SignUp from "./../Auth/SignUp";
// // // // // // import Verification from "./../Auth/Verification";
// // // // // // import TeachModal from "../../utils/TechModel";
// // // // // // import { useSession } from "next-auth/react";

// // // // // // import logo from "../../../public/assests/logo-removebg-preview.png";
// // // // // // import avatar from "../../public/assests/download5.png";
// // // // // // import { useSocialAuthMutation } from "@/redux/features/auth/authApi";

// // // // // // type Props = {
// // // // // //   open: boolean;
// // // // // //   setOpen: (open: boolean) => void;
// // // // // //   activeItem: number;
// // // // // //   route: string;
// // // // // //   setRoute: (route: string) => void;
// // // // // // };

// // // // // // const Hero: FC<Props> = (activeItem, setOpen, route, open, setRoute) => {
// // // // // //   const [active, setActive] = useState<boolean>(false);
// // // // // //   const [openSidebar, setOpenSidebar] = useState<boolean>(false);
// // // // // //   const [teachModalOpen, setTeachModalOpen] = useState<boolean>(false);
// // // // // //   const { user } = useSelector((state: any) => state.auth);
// // // // // //   const { data } = useSession();
// // // // // //   const [socialAuth, { isSuccess }] = useSocialAuthMutation();

// // // // // //   const storeUser = useSelector((state: any) => state.user.user);
// // // // // //   const router = useRouter();

// // // // // //   useEffect(() => {
// // // // // //     const handleScroll = () => {
// // // // // //       setActive(window.scrollY > 85);
// // // // // //     };
// // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // // //   }, []);

// // // // // //   // const handleSearch = (e: React.FormEvent) => {
// // // // // //   //   e.preventDefault();
// // // // // //   //   if (search.trim() === "") {
// // // // // //   //     return;
// // // // // //   //   } else {
// // // // // //   //     router.push(`/courses?title=${encodeURIComponent(search)}`);
// // // // // //   //   }
// // // // // //   // };

// // // // // //   const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
// // // // // //     if ((e.target as HTMLElement).id === "screen") {
// // // // // //       setOpenSidebar(!openSidebar);
// // // // // //     }
// // // // // //   };
// // // // // //   useEffect(() => {
// // // // // //     if (!user && data) {
// // // // // //       socialAuth({
// // // // // //         email: data?.user?.email,
// // // // // //         name: data?.user?.name,
// // // // // //         avatar: data?.user?.image,
// // // // // //       });
// // // // // //     }
// // // // // //     if (isSuccess) {
// // // // // //       toast.success("Login Successfully");
// // // // // //     }
// // // // // //   }, [data, user, socialAuth, isSuccess]);

// // // // // //   useEffect(() => {
// // // // // //     const handleScroll = () => {
// // // // // //       setActive(window.scrollY > 85);
// // // // // //     };
// // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // // //   }, []);

// // // // // //   useEffect(() => {
// // // // // //     const handleResize = () => {
// // // // // //       if (window.innerWidth > 800 && openSidebar) {
// // // // // //         setOpenSidebar(false);
// // // // // //       }
// // // // // //     };
// // // // // //     window.addEventListener("resize", handleResize);
// // // // // //     return () => window.removeEventListener("resize", handleResize);
// // // // // //   }, [openSidebar]);

// // // // // //   const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
// // // // // //     if ((e.target as HTMLElement).id === "screen") {
// // // // // //       setOpenSidebar(!openSidebar);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleUserIconClick = () => {
// // // // // //     setOpenSidebar(false);
// // // // // //     setOpen(true);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="relative w-full h-screen">
// // // // // //       {/* Background Video */}
// // // // // //       <div className="absolute inset-0 overflow-hidden">
// // // // // //         <video
// // // // // //           className="w-full h-full object-cover"
// // // // // //           autoPlay
// // // // // //           loop
// // // // // //           preload="auto"
// // // // // //           muted
// // // // // //           playsInline
// // // // // //           src="assests/1113140_Opening_Educational_3840x2160.mp4"
// // // // // //         />
// // // // // //         <div className="absolute inset-0 bg-black/40"></div>
// // // // // //       </div>

// // // // // //       {/* Header */}
// // // // // //       <header className="relative z-50 w-full">
// // // // // //         <div
// // // // // //           className={`${
// // // // // //             active
// // // // // //               ? "dark:bg-opacity-90 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-16 z-[80]"
// // // // // //               : "w-full h-16 z-[80]"
// // // // // //           }`}
// // // // // //         >
// // // // // //           <div className="w-[95%] 800px:w-[90%] mx-auto h-full">
// // // // // //             <div className="w-full h-16 flex items-center justify-between">
// // // // // //               {/* Logo and Teach button section */}
// // // // // //               <div className="flex items-center space-x-6">
// // // // // //                 <Link href="/" className="flex items-center space-x-2">
// // // // // //                   <Image
// // // // // //                     src={logo}
// // // // // //                     alt="Logo"
// // // // // //                     width={70}
// // // // // //                     height={70}
// // // // // //                     className="object-contain"
// // // // // //                   />
// // // // // //                 </Link>
// // // // // //                 {user && (
// // // // // //                 <button
// // // // // //                   onClick={() => setTeachModalOpen(true)}
// // // // // //                   className="hidden 800px:flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
// // // // // //                 >
// // // // // //                   {user.role === "admin" ? "Instructor" : "Teach With LeanifuHub"}
// // // // // //                 </button>
// // // // // //               )}
// // // // // //               </div>

// // // // // //               {/* Navigation and user actions */}
// // // // // //               <div className="flex items-center space-x-4">
// // // // // //                 <NavItems
// // // // // //                   activeItem={0}
// // // // // //                   isMobile={false}
// // // // // //                   user={null}
// // // // // //                   setOpen={setOpen}
// // // // // //                   openSidebar={openSidebar}
// // // // // //                   setOpenSidebar={setOpenSidebar}
// // // // // //                 />

// // // // // //                 <ThemeSwitcher />

// // // // // //                 {/* Mobile menu toggle */}
// // // // // //                 <button
// // // // // //                   className="800px:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
// // // // // //                   onClick={() => setOpenSidebar(!openSidebar)}
// // // // // //                 >
// // // // // //                   <HiOutlineMenuAlt3
// // // // // //                     size={24}
// // // // // //                     className="text-gray-700 dark:text-gray-200"
// // // // // //                   />
// // // // // //                 </button>

// // // // // //                 {/* Login button */}
// // // // // //                 <button
// // // // // //                   onClick={() => {
// // // // // //                     setOpen(true);
// // // // // //                     setRoute("Login");
// // // // // //                   }}
// // // // // //                   className="hidden 800px:block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors shadow-sm"
// // // // // //                 >
// // // // // //                   Login
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Mobile sidebar */}
// // // // // //           {openSidebar && (
// // // // // //             <div
// // // // // //               className="fixed w-full h-screen top-0 left-0 z-[99999] bg-black bg-opacity-50 backdrop-blur-sm"
// // // // // //               onClick={handleClose}
// // // // // //               id="screen"
// // // // // //             >
// // // // // //               <div className="w-64 fixed h-screen top-0 right-0 z-[999999999] bg-white dark:bg-gray-900 overflow-y-auto shadow-xl transition-all duration-300 ease-in-out">
// // // // // //                 <div className="p-4 border-b border-gray-200 dark:border-gray-700">
// // // // // //                   <div className="flex justify-between items-center">
// // // // // //                     <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Menu</h2>
// // // // // //                     <button
// // // // // //                       onClick={() => setOpenSidebar(false)}
// // // // // //                       className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
// // // // // //                     >
// // // // // //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
// // // // // //                         <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
// // // // // //                       </svg>
// // // // // //                     </button>
// // // // // //                   </div>
// // // // // //                 </div>

// // // // // //                 <div className="py-2">
// // // // // //                   <NavItems
// // // // // //                     activeItem={0}
// // // // // //                     isMobile={true}
// // // // // //                     user={null}
// // // // // //                     setOpen={setOpen}
// // // // // //                     openSidebar={openSidebar}
// // // // // //                     setOpenSidebar={setOpenSidebar}
// // // // // //                   />
// // // // // //                 </div>

// // // // // //                 <div className="p-4 border-t border-gray-200 dark:border-gray-700">
// // // // // //                   <button
// // // // // //                     onClick={() => {
// // // // // //                       setOpen(true);
// // // // // //                       setRoute("Login");
// // // // // //                       setOpenSidebar(false);
// // // // // //                     }}
// // // // // //                     className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
// // // // // //                   >
// // // // // //                     Login
// // // // // //                   </button>
// // // // // //                 </div>

// // // // // //                 <div className="p-4 mt-auto border-t border-gray-200 dark:border-gray-700">
// // // // // //                   <p className="text-sm text-gray-500 dark:text-gray-400">
// // // // // //                     © {new Date().getFullYear()} LearnifyHub. All rights reserved.
// // // // // //                   </p>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </header>

// // // // // //       {/* Hero Content */}
// // // // // //       <div className="relative z-40 flex items-center justify-center h-[calc(100%-4rem)] px-6 lg:px-12">
// // // // // //         <div className="max-w-4xl w-full text-center">
// // // // // //           {/* Heading Section */}
// // // // // //           <h1 className="text-3xl select-none md:text-4xl lg:text-5xl font-thin text-white">
// // // // // //             Welcome to <span className="relative">LearnifyHub</span>
// // // // // //           </h1>

// // // // // //           {/* Subheading */}
// // // // // //           <p className="text-base md:text-lg lg:text-xl text-white mt-4">
// // // // // //             Elevate your skills, master your goals - start learning now.
// // // // // //           </p>

// // // // // //           {/* Search Bar */}
// // // // // //           <form
// // // // // //             className="flex w-full max-w-lg mx-auto items-center mt-6"
// // // // // //             onSubmit={handleSearch}
// // // // // //           >
// // // // // //             <label htmlFor="search" className="sr-only">
// // // // // //               Search
// // // // // //             </label>
// // // // // //             <div className="relative w-full">
// // // // // //               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
// // // // // //                 <FaBook className="w-5 h-6 text-gray-300" />
// // // // // //               </div>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 id="search"
// // // // // //                 value={search}
// // // // // //                 onChange={(e) => setSearch(e.target.value)}
// // // // // //                 className="bg-white/20 border border-white/30 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 backdrop-blur-sm placeholder-gray-300"
// // // // // //                 placeholder="Search Courses..."
// // // // // //               />
// // // // // //             </div>
// // // // // //             <button
// // // // // //               type="submit"
// // // // // //               className="ml-2 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
// // // // // //             >
// // // // // //               <FaSearch className="w-4 h-4" />
// // // // // //               <span className="sr-only">Search</span>
// // // // // //             </button>
// // // // // //           </form>

// // // // // //           {/* Trust Statement */}
// // // // // //           <div className="mt-6">
// // // // // //             <h5 className="text-base md:text-lg text-white">
// // // // // //               500k+ people already trust us.{" "}
// // // // // //               <a
// // // // // //                 href="/courses"
// // // // // //                 className="text-blue-300 underline hover:text-blue-200 transition-colors"
// // // // // //               >
// // // // // //                 View Courses
// // // // // //               </a>
// // // // // //             </h5>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Auth Modals */}
// // // // // //       {route === "Login" && open && (
// // // // // //         <CustomModel
// // // // // //           open={open}
// // // // // //           setOpen={setOpen}
// // // // // //           setRoute={setRoute}
// // // // // //           activeItem={0}
// // // // // //           component={Login}
// // // // // //         />
// // // // // //       )}
// // // // // //       {route === "Sign-Up" && open && (
// // // // // //         <CustomModel
// // // // // //           open={open}
// // // // // //           setOpen={setOpen}
// // // // // //           setRoute={setRoute}
// // // // // //           activeItem={0}
// // // // // //           component={SignUp}
// // // // // //         />
// // // // // //       )}
// // // // // //       {route === "Verification" && open && (
// // // // // //         <CustomModel
// // // // // //           open={open}
// // // // // //           setOpen={setOpen}
// // // // // //           setRoute={setRoute}
// // // // // //           activeItem={0}
// // // // // //           component={Verification}
// // // // // //         />
// // // // // //       )}

// // // // // //       {/* Teach Modal */}
// // // // // //       <TeachModal
// // // // // //         open={teachModalOpen}
// // // // // //         setOpen={setTeachModalOpen}
// // // // // //         setRoute={setRoute}
// // // // // //       />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Hero;
// // // // // "use client";
// // // // // import React, { FC, useState, useEffect } from "react";
// // // // // import Link from "next/link";
// // // // // import { useSelector } from "react-redux";
// // // // // import Image from "next/image";
// // // // // import { FaSearch, FaBook } from "react-icons/fa";
// // // // // import { HiOutlineMenuAlt3 } from "react-icons/hi";
// // // // // import { useRouter } from "next/navigation";
// // // // // import { ThemeSwitcher } from "../../utils/ThemeSwitcher";
// // // // // import NavItems from "../../utils/NavItems";
// // // // // import CustomModel from "../../utils/CustomModel";
// // // // // import Login from "./../Auth/Login";
// // // // // import SignUp from "./../Auth/SignUp";
// // // // // import Verification from "./../Auth/Verification";
// // // // // import TeachModal from "../../utils/TechModel";
// // // // // import { useSession } from "next-auth/react";
// // // // // import logo from "../../../public/assests/logo-removebg-preview.png";
// // // // // import avatar from "../../../public/assests/download5.png";
// // // // // import { useSocialAuthMutation } from "@/redux/features/auth/authApi";
// // // // // import toast from "react-hot-toast";

// // // // // type Props = {
// // // // //   open: boolean;
// // // // //   setOpen: (open: boolean) => void;
// // // // //   activeItem: number;
// // // // //   route: string;
// // // // //   setRoute: (route: string) => void;
// // // // // };

// // // // // const Hero: FC<Props> = ({ activeItem, setOpen, route, open, setRoute }) => {
// // // // //   const [active, setActive] = useState<boolean>(false);
// // // // //   const [openSidebar, setOpenSidebar] = useState<boolean>(false);
// // // // //   const [teachModalOpen, setTeachModalOpen] = useState<boolean>(false);
// // // // //   const [search, setSearch] = useState<string>(""); // Added missing search state
// // // // //   const { user } = useSelector((state: any) => state.auth);
// // // // //   const { data } = useSession();
// // // // //   const [socialAuth, { isSuccess }] = useSocialAuthMutation();
// // // // //   const router = useRouter();

// // // // //   useEffect(() => {
// // // // //     if (!user && data) {
// // // // //       socialAuth({
// // // // //         email: data?.user?.email,
// // // // //         name: data?.user?.name,
// // // // //         avatar: data?.user?.image,
// // // // //       });
// // // // //     }
// // // // //     if (isSuccess) {
// // // // //       toast.success("Login Successfully");
// // // // //     }
// // // // //   }, [data, user, socialAuth, isSuccess]);

// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       setActive(window.scrollY > 85);
// // // // //     };
// // // // //     window.addEventListener("scroll", handleScroll);
// // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     const handleResize = () => {
// // // // //       if (window.innerWidth > 800 && openSidebar) {
// // // // //         setOpenSidebar(false);
// // // // //       }
// // // // //     };
// // // // //     window.addEventListener("resize", handleResize);
// // // // //     return () => window.removeEventListener("resize", handleResize);
// // // // //   }, [openSidebar]);

// // // // //   const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
// // // // //     if ((e.target as HTMLElement).id === "screen") {
// // // // //       setOpenSidebar(!openSidebar);
// // // // //     }
// // // // //   };

// // // // //   const handleSearch = (e: React.FormEvent) => {
// // // // //     e.preventDefault();
// // // // //     if (search.trim() === "") {
// // // // //       return;
// // // // //     } else {
// // // // //       router.push(`/courses?title=${encodeURIComponent(search)}`);
// // // // //     }
// // // // //   };

// // // // //   const handleUserIconClick = () => {
// // // // //     setOpenSidebar(false);
// // // // //     setOpen(true);
// // // // //   };

// // // // //   return (
// // // // //     <div className="relative w-full h-screen">
// // // // //       {/* Background Video */}
// // // // //       <div className="absolute inset-0 overflow-hidden">
// // // // //         <video
// // // // //           className="w-full h-full object-cover"
// // // // //           autoPlay
// // // // //           loop
// // // // //           preload="auto"
// // // // //           muted
// // // // //           playsInline
// // // // //           src="assests/1113140_Opening_Educational_3840x2160.mp4"
// // // // //         />
// // // // //         <div className="absolute inset-0 bg-black/40"></div>
// // // // //       </div>

// // // // //       {/* Header */}
// // // // //       <div className="relative w-full">
// // // // //         <div
// // // // //           className={`${
// // // // //             active
// // // // //               ? "dark:bg-opacity-90 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-16 z-[80]"
// // // // //               : "w-full h-16 z-[80]"
// // // // //           }`}
// // // // //         >
// // // // //           <div className="w-[95%] 800px:w-[90%] mx-auto h-full">
// // // // //             <div className="w-full h-16 flex items-center justify-between">
// // // // //               {/* Logo and Teach button section */}
// // // // //               <div className="flex items-center space-x-6">
// // // // //                 <Link href="/" className="flex items-center space-x-2">
// // // // //                   <Image
// // // // //                     src={logo}
// // // // //                     alt="Logo"
// // // // //                     width={70}
// // // // //                     height={70}
// // // // //                     className="object-contain"
// // // // //                   />
// // // // //                 </Link>
// // // // //                 {user && (
// // // // //                   <button
// // // // //                     onClick={() => setTeachModalOpen(true)}
// // // // //                     className="hidden 800px:flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
// // // // //                   >
// // // // //                     {user.role === "admin" ? "Instructor" : "Teach With LearnifyHub"}
// // // // //                   </button>
// // // // //                 )}
// // // // //               </div>

// // // // //               {/* Navigation and user actions */}
// // // // //               <div className="flex items-center space-x-4">
// // // // //                 <NavItems
// // // // //                   activeItem={activeItem}
// // // // //                   isMobile={false}
// // // // //                   user={user}
// // // // //                   setOpen={setOpen}
// // // // //                   openSidebar={openSidebar}
// // // // //                   setOpenSidebar={setOpenSidebar}
// // // // //                 />

// // // // //                 <ThemeSwitcher />

// // // // //                 {/* Mobile menu toggle */}
// // // // //                 <button
// // // // //                   className="800px:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
// // // // //                   onClick={() => setOpenSidebar(!openSidebar)}
// // // // //                 >
// // // // //                   <HiOutlineMenuAlt3
// // // // //                     size={24}
// // // // //                     className="text-gray-700 dark:text-gray-200"
// // // // //                   />
// // // // //                 </button>

// // // // //                 {/* User profile or login button */}
// // // // //                 {user ? (
// // // // //                   <Link
// // // // //                     href="/profile"
// // // // //                     className="hidden 800px:block ml-2"
// // // // //                   >
// // // // //                     <div className="relative group">
// // // // //                       <Image
// // // // //                         src={user?.avatar?.url || avatar}
// // // // //                         alt="Profile"
// // // // //                         height={36}
// // // // //                         width={36}
// // // // //                         className={`w-9 h-9 rounded-full object-cover transition-all duration-300 ${
// // // // //                           activeItem === 5
// // // // //                             ? "ring-2 ring-blue-500 ring-offset-2"
// // // // //                             : "hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-600 hover:ring-offset-2"
// // // // //                         }`}
// // // // //                       />
// // // // //                       <span className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></span>
// // // // //                     </div>
// // // // //                   </Link>
// // // // //                 ) : (
// // // // //                   <button
// // // // //                     onClick={handleUserIconClick}
// // // // //                     className="hidden 800px:block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors shadow-sm"
// // // // //                   >
// // // // //                     Login
// // // // //                   </button>
// // // // //                 )}
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Mobile sidebar */}
// // // // //           {openSidebar && (
// // // // //             <div
// // // // //               className="fixed w-full h-screen top-0 left-0 z-[99999] bg-black bg-opacity-50 backdrop-blur-sm"
// // // // //               onClick={handleClose}
// // // // //               id="screen"
// // // // //             >
// // // // //               <div className="w-64 fixed h-screen top-0 right-0 z-[999999999] bg-white dark:bg-gray-900 overflow-y-auto shadow-xl transition-all duration-300 ease-in-out">
// // // // //                 <div className="p-4 border-b border-gray-200 dark:border-gray-700">
// // // // //                   <div className="flex justify-between items-center">
// // // // //                     <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Menu</h2>
// // // // //                     <button
// // // // //                       onClick={() => setOpenSidebar(false)}
// // // // //                       className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
// // // // //                     >
// // // // //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
// // // // //                         <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
// // // // //                       </svg>
// // // // //                     </button>
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 <div className="py-2">
// // // // //                   <NavItems
// // // // //                     activeItem={activeItem}
// // // // //                     isMobile={true}
// // // // //                     user={user}
// // // // //                     setOpen={setOpen}
// // // // //                     openSidebar={openSidebar}
// // // // //                     setOpenSidebar={setOpenSidebar}
// // // // //                   />
// // // // //                 </div>

// // // // //                 {!user && (
// // // // //                   <div className="p-4 border-t border-gray-200 dark:border-gray-700">
// // // // //                     <button
// // // // //                       onClick={handleUserIconClick}
// // // // //                       className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
// // // // //                     >
// // // // //                       Login
// // // // //                     </button>
// // // // //                   </div>
// // // // //                 )}

// // // // //                 <div className="p-4 mt-auto border-t border-gray-200 dark:border-gray-700">
// // // // //                   <p className="text-sm text-gray-500 dark:text-gray-400">
// // // // //                     © {new Date().getFullYear()} LearnifyHub. All rights reserved.
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>

// // // // //         {/* Auth modals */}
// // // // //         {route === "Login" && open && (
// // // // //           <CustomModel
// // // // //             open={open}
// // // // //             setOpen={setOpen}
// // // // //             setRoute={setRoute}
// // // // //             activeItem={activeItem}
// // // // //             component={Login}
// // // // //           />
// // // // //         )}
// // // // //         {route === "Sign-Up" && open && (
// // // // //           <CustomModel
// // // // //             open={open}
// // // // //             setOpen={setOpen}
// // // // //             setRoute={setRoute}
// // // // //             activeItem={activeItem}
// // // // //             component={SignUp}
// // // // //           />
// // // // //         )}
// // // // //         {route === "Verification" && open && (
// // // // //           <CustomModel
// // // // //             open={open}
// // // // //             setOpen={setOpen}
// // // // //             setRoute={setRoute}
// // // // //             activeItem={activeItem}
// // // // //             component={Verification}
// // // // //           />
// // // // //         )}
// // // // //         <TeachModal
// // // // //           open={teachModalOpen}
// // // // //           setOpen={setTeachModalOpen}
// // // // //           setRoute={setRoute}
// // // // //         />
// // // // //       </div>

// // // // //       {/* Hero Content */}
// // // // //       <div className="relative z-40 flex items-center justify-center h-[calc(100%-4rem)] px-6 lg:px-12">
// // // // //         <div className="max-w-4xl w-full text-center">
// // // // //           <h1 className="text-3xl select-none md:text-4xl lg:text-5xl font-thin text-white">
// // // // //             Welcome to <span className="relative">LearnifyHub</span>
// // // // //           </h1>
// // // // //           <p className="text-base md:text-lg lg:text-xl text-white mt-4">
// // // // //             Elevate your skills, master your goals - start learning now.
// // // // //           </p>
// // // // //           <form
// // // // //             className="flex w-full max-w-lg mx-auto items-center mt-6"
// // // // //             onSubmit={handleSearch}
// // // // //           >
// // // // //             <label htmlFor="search" className="sr-only">
// // // // //               Search
// // // // //             </label>
// // // // //             <div className="relative w-full">
// // // // //               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
// // // // //                 <FaBook className="w-5 h-6 text-gray-300" />
// // // // //               </div>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 id="search"
// // // // //                 value={search}
// // // // //                 onChange={(e) => setSearch(e.target.value)}
// // // // //                 className="bg-white/20 border border-white/30 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 backdrop-blur-sm placeholder-gray-300"
// // // // //                 placeholder="Search Courses..."
// // // // //               />
// // // // //             </div>
// // // // //             <button
// // // // //               type="submit"
// // // // //               className="ml-2 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
// // // // //             >
// // // // //               <FaSearch className="w-4 h-4" />
// // // // //               <span className="sr-only">Search</span>
// // // // //             </button>
// // // // //           </form>
// // // // //           <div className="mt-6">
// // // // //             <h5 className="text-base md:text-lg text-white">
// // // // //               500k+ people already trust us.{" "}
// // // // //               <a
// // // // //                 href="/courses"
// // // // //                 className="text-blue-300 underline hover:text-blue-200 transition-colors"
// // // // //               >
// // // // //                 View Courses
// // // // //               </a>
// // // // //             </h5>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Hero;
// // // // "use client";
// // // // import React, { FC, useState, useEffect } from "react";
// // // // import Link from "next/link";
// // // // import { useSelector } from "react-redux";
// // // // import Image from "next/image";
// // // // import { FaSearch, FaBook } from "react-icons/fa";
// // // // import { HiOutlineMenuAlt3 } from "react-icons/hi";
// // // // import { useRouter } from "next/navigation";
// // // // import { ThemeSwitcher } from "../../utils/ThemeSwitcher";
// // // // import NavItems from "../../utils/NavItems";
// // // // import CustomModel from "../../utils/CustomModel";
// // // // import Login from "./../Auth/Login";
// // // // import SignUp from "./../Auth/SignUp";
// // // // import Verification from "./../Auth/Verification";
// // // // import TeachModal from "../../utils/TechModel";
// // // // import { useSession } from "next-auth/react";
// // // // import logo from "../../../public/assests/logo-removebg-preview.png";
// // // // import avatar from "../../../public/assests/download5.png";
// // // // import { useSocialAuthMutation } from "@/redux/features/auth/authApi";
// // // // import toast from "react-hot-toast";

// // // // type Props = {
// // // //   open: boolean;
// // // //   setOpen: (open: boolean) => void;
// // // //   activeItem: number;
// // // //   route: string;
// // // //   setRoute: (route: string) => void;
// // // // };

// // // // const Hero: FC<Props> = ({ activeItem, setOpen, route, open, setRoute }) => {
// // // //   const [active, setActive] = useState<boolean>(false);
// // // //   const [openSidebar, setOpenSidebar] = useState<boolean>(false);
// // // //   const [teachModalOpen, setTeachModalOpen] = useState<boolean>(false);
// // // //   const [search, setSearch] = useState<string>("");
// // // //   const { user } = useSelector((state: any) => state.auth);
// // // //   const { data } = useSession();
// // // //   const [socialAuth, { isSuccess }] = useSocialAuthMutation();
// // // //   const router = useRouter();

// // // //   useEffect(() => {
// // // //     if (!user && data) {
// // // //       socialAuth({
// // // //         email: data?.user?.email,
// // // //         name: data?.user?.name,
// // // //         avatar: data?.user?.image,
// // // //       });
// // // //     }
// // // //     if (isSuccess) {
// // // //       toast.success("Login Successfully");
// // // //     }
// // // //   }, [data, user, socialAuth, isSuccess]);

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       setActive(window.scrollY > 85);
// // // //     };
// // // //     window.addEventListener("scroll", handleScroll);
// // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     const handleResize = () => {
// // // //       if (window.innerWidth > 800 && openSidebar) {
// // // //         setOpenSidebar(false);
// // // //       }
// // // //     };
// // // //     window.addEventListener("resize", handleResize);
// // // //     return () => window.removeEventListener("resize", handleResize);
// // // //   }, [openSidebar]);

// // // //   const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
// // // //     if ((e.target as HTMLElement).id === "screen") {
// // // //       setOpenSidebar(!openSidebar);
// // // //     }
// // // //   };

// // // //   const handleSearch = (e: React.FormEvent) => {
// // // //     e.preventDefault();
// // // //     if (search.trim() === "") {
// // // //       return;
// // // //     } else {
// // // //       router.push(`/courses?title=${encodeURIComponent(search)}`);
// // // //     }
// // // //   };

// // // //   const handleLoginClick = () => {
// // // //     setOpen(true);
// // // //     setRoute("Login"); // Set the route to "Login" to trigger the login modal
// // // //     setOpenSidebar(false);
// // // //   };

// // // //   return (
// // // //     <div className="relative w-full h-screen">
// // // //       {/* Background Video */}
// // // //       <div className="absolute inset-0 overflow-hidden">
// // // //         <video
// // // //           className="w-full h-full object-cover"
// // // //           autoPlay
// // // //           loop
// // // //           preload="auto"
// // // //           muted
// // // //           playsInline
// // // //           src="assests/1113140_Opening_Educational_3840x2160.mp4"
// // // //         />
// // // //         <div className="absolute inset-0 bg-black/40"></div>
// // // //       </div>

// // // //       {/* Header */}
// // // //       <div className="relative w-full">
// // // //         <div
// // // //           className={`${
// // // //             active
// // // //               ? "dark:bg-opacity-90 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-16 z-[80]"
// // // //               : "w-full h-16 z-[80]"
// // // //           }`}
// // // //         >
// // // //           <div className="w-[95%] 800px:w-[90%] mx-auto h-full">
// // // //             <div className="w-full h-16 flex items-center justify-between">
// // // //               {/* Logo and Teach button section */}
// // // //               <div className="flex items-center space-x-6">
// // // //                 <Link href="/" className="flex items-center space-x-2">
// // // //                   <Image
// // // //                     src={logo}
// // // //                     alt="Logo"
// // // //                     width={70}
// // // //                     height={70}
// // // //                     className="object-contain"
// // // //                   />
// // // //                 </Link>
// // // //                 {user && (
// // // //                   <button
// // // //                     onClick={() => setTeachModalOpen(true)}
// // // //                     className="hidden 800px:flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
// // // //                   >
// // // //                     {user.role === "admin" ? "Instructor" : "Teach With LearnifyHub"}
// // // //                   </button>
// // // //                 )}
// // // //               </div>

// // // //               {/* Navigation and user actions */}
// // // //               <div className="flex items-center space-x-4">
// // // //                 <NavItems
// // // //                   activeItem={activeItem}
// // // //                   isMobile={false}
// // // //                   user={user}
// // // //                   setOpen={setOpen}
// // // //                   openSidebar={openSidebar}
// // // //                   setOpenSidebar={setOpenSidebar}
// // // //                 />

// // // //                 <ThemeSwitcher />

// // // //                 {/* Mobile menu toggle */}
// // // //                 <button
// // // //                   className="800px:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
// // // //                   onClick={() => setOpenSidebar(!openSidebar)}
// // // //                 >
// // // //                   <HiOutlineMenuAlt3
// // // //                     size={24}
// // // //                     className="text-gray-700 dark:text-gray-200"
// // // //                   />
// // // //                 </button>

// // // //                 {/* User profile or login button */}
// // // //                 {user ? (
// // // //                   <Link
// // // //                     href="/profile"
// // // //                     className="hidden 800px:block ml-2"
// // // //                   >
// // // //                     <div className="relative group">
// // // //                       <Image
// // // //                         src={user?.avatar?.url || avatar}
// // // //                         alt="Profile"
// // // //                         height={36}
// // // //                         width={36}
// // // //                         className={`w-9 h-9 rounded-full object-cover transition-all duration-300 ${
// // // //                           activeItem === 5
// // // //                             ? "ring-2 ring-blue-500 ring-offset-2"
// // // //                             : "hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-600 hover:ring-offset-2"
// // // //                         }`}
// // // //                       />
// // // //                       <span className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></span>
// // // //                     </div>
// // // //                   </Link>
// // // //                 ) : (
// // // //                   <button
// // // //                     onClick={handleLoginClick} // Updated to use handleLoginClick
// // // //                     className="hidden 800px:block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors shadow-sm"
// // // //                   >
// // // //                     Login
// // // //                   </button>
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Mobile sidebar */}
// // // //           {openSidebar && (
// // // //             <div
// // // //               className="fixed w-full h-screen top-0 left-0 z-[99999] bg-black bg-opacity-50 backdrop-blur-sm"
// // // //               onClick={handleClose}
// // // //               id="screen"
// // // //             >
// // // //               <div className="w-64 fixed h-screen top-0 right-0 z-[999999999] bg-white dark:bg-gray-900 overflow-y-auto shadow-xl transition-all duration-300 ease-in-out">
// // // //                 <div className="p-4 border-b border-gray-200 dark:border-gray-700">
// // // //                   <div className="flex justify-between items-center">
// // // //                     <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Menu</h2>
// // // //                     <button
// // // //                       onClick={() => setOpenSidebar(false)}
// // // //                       className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
// // // //                     >
// // // //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
// // // //                         <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
// // // //                       </svg>
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>

// // // //                 <div className="py-2">
// // // //                   <NavItems
// // // //                     activeItem={activeItem}
// // // //                     isMobile={true}
// // // //                     user={user}
// // // //                     setOpen={setOpen}
// // // //                     openSidebar={openSidebar}
// // // //                     setOpenSidebar={setOpenSidebar}
// // // //                   />
// // // //                 </div>

// // // //                 {!user && (
// // // //                   <div className="p-4 border-t border-gray-200 dark:border-gray-700">
// // // //                     <button
// // // //                       onClick={handleLoginClick} // Updated to use handleLoginClick
// // // //                       className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
// // // //                     >
// // // //                       Login
// // // //                     </button>
// // // //                   </div>
// // // //                 )}

// // // //                 <div className="p-4 mt-auto border-t border-gray-200 dark:border-gray-700">
// // // //                   <p className="text-sm text-gray-500 dark:text-gray-400">
// // // //                     © {new Date().getFullYear()} LearnifyHub. All rights reserved.
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         {/* Auth modals */}
// // // //         {route === "Login" && open && (
// // // //           <CustomModel
// // // //             open={open}
// // // //             setOpen={setOpen}
// // // //             setRoute={setRoute}
// // // //             activeItem={activeItem}
// // // //             component={Login}
// // // //           />
// // // //         )}
// // // //         {route === "Sign-Up" && open && (
// // // //           <CustomModel
// // // //             open={open}
// // // //             setOpen={setOpen}
// // // //             setRoute={setRoute}
// // // //             activeItem={activeItem}
// // // //             component={SignUp}
// // // //           />
// // // //         )}
// // // //         {route === "Verification" && open && (
// // // //           <CustomModel
// // // //             open={open}
// // // //             setOpen={setOpen}
// // // //             setRoute={setRoute}
// // // //             activeItem={activeItem}
// // // //             component={Verification}
// // // //           />
// // // //         )}
// // // //         <TeachModal
// // // //           open={teachModalOpen}
// // // //           setOpen={setTeachModalOpen}
// // // //           setRoute={setRoute}
// // // //         />
// // // //       </div>

// // // //       {/* Hero Content */}
// // // //       <div className="relative z-40 flex items-center justify-center h-[calc(100%-4rem)] px-6 lg:px-12">
// // // //         <div className="max-w-4xl w-full text-center">
// // // //           <h1 className="text-3xl select-none md:text-4xl lg:text-5xl font-thin text-white">
// // // //             Welcome to <span className="relative">LearnifyHub</span>
// // // //           </h1>
// // // //           <p className="text-base md:text-lg lg:text-xl text-white mt-4">
// // // //             Elevate your skills, master your goals - start learning now.
// // // //           </p>
// // // //           <form
// // // //             className="flex w-full max-w-lg mx-auto items-center mt-6"
// // // //             onSubmit={handleSearch}
// // // //           >
// // // //             <label htmlFor="search" className="sr-only">
// // // //               Search
// // // //             </label>
// // // //             <div className="relative w-full">
// // // //               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
// // // //                 <FaBook className="w-5 h-6 text-gray-300" />
// // // //               </div>
// // // //               <input
// // // //                 type="text"
// // // //                 id="search"
// // // //                 value={search}
// // // //                 onChange={(e) => setSearch(e.target.value)}
// // // //                 className="bg-white/20 border border-white/30 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 backdrop-blur-sm placeholder-gray-300"
// // // //                 placeholder="Search Courses..."
// // // //               />
// // // //             </div>
// // // //             <button
// // // //               type="submit"
// // // //               className="ml-2 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
// // // //             >
// // // //               <FaSearch className="w-4 h-4" />
// // // //               <span className="sr-only">Search</span>
// // // //             </button>
// // // //           </form>
// // // //           <div className="mt-6">
// // // //             <h5 className="text-base md:text-lg text-white">
// // // //               500k+ people already trust us.{" "}
// // // //               <a
// // // //                 href="/courses"
// // // //                 className="text-blue-300 underline hover:text-blue-200 transition-colors"
// // // //               >
// // // //                 View Courses
// // // //               </a>
// // // //             </h5>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Hero;
// // // "use client";
// // // import React, { FC, useState, useEffect } from "react";
// // // import Link from "next/link";
// // // import { useSelector } from "react-redux";
// // // import Image from "next/image";
// // // import { FaSearch, FaBook } from "react-icons/fa";
// // // import { HiOutlineMenuAlt3 } from "react-icons/hi";
// // // import { useRouter } from "next/navigation";
// // // import { ThemeSwitcher } from "../../utils/ThemeSwitcher";
// // // import NavItems from "../../utils/NavItems";
// // // import CustomModel from "../../utils/CustomModel";
// // // import Login from "./../Auth/Login";
// // // import SignUp from "./../Auth/SignUp";
// // // import Verification from "./../Auth/Verification";
// // // import TeachModal from "../../utils/TechModel";
// // // import { useSession } from "next-auth/react";
// // // import logo from "../../../public/assests/logo-removebg-preview.png";
// // // import avatar from "../../../public/assests/download5.png";
// // // import { useSocialAuthMutation } from "@/redux/features/auth/authApi";
// // // import toast from "react-hot-toast";

// // // export const NavItemsData = [
// // //   { name: "Home", url: "/" },
// // //   { name: "Courses", url: "/courses" },
// // //   { name: "About", url: "/about" },
// // //   { name: "Policy", url: "/policy" },
// // //   { name: "FAQ", url: "/faq" },
// // // ];

// // // type Props = {
// // //   activeItem?: number;
// // // };

// // // const Hero: FC<Props> = ({ activeItem = 0 }) => {
// // //   const [active, setActive] = useState<boolean>(false);
// // //   const [openSidebar, setOpenSidebar] = useState<boolean>(false);
// // //   const [teachModalOpen, setTeachModalOpen] = useState<boolean>(false);
// // //   const [search, setSearch] = useState<string>("");
// // //   const [open, setOpen] = useState<boolean>(false);
// // //   const [route, setRoute] = useState<string>("");
// // //   const { user } = useSelector((state: any) => state.auth);
// // //   const { data } = useSession();
// // //   const [socialAuth, { isSuccess }] = useSocialAuthMutation();
// // //   const router = useRouter();

// // //   useEffect(() => {
// // //     if (!user && data) {
// // //       socialAuth({
// // //         email: data?.user?.email,
// // //         name: data?.user?.name,
// // //         avatar: data?.user?.image,
// // //       });
// // //     }
// // //     if (isSuccess) {
// // //       toast.success("Login Successfully");
// // //     }
// // //   }, [data, user, socialAuth, isSuccess]);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setActive(window.scrollY > 85);
// // //     };
// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   useEffect(() => {
// // //     const handleResize = () => {
// // //       if (window.innerWidth > 800 && openSidebar) {
// // //         setOpenSidebar(false);
// // //       }
// // //     };
// // //     window.addEventListener("resize", handleResize);
// // //     return () => window.removeEventListener("resize", handleResize);
// // //   }, [openSidebar]);

// // //   const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
// // //     if ((e.target as HTMLElement).id === "screen") {
// // //       setOpenSidebar(!openSidebar);
// // //     }
// // //   };

// // //   const handleSearch = (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     if (search.trim() === "") {
// // //       return;
// // //     } else {
// // //       router.push(`/courses?title=${encodeURIComponent(search)}`);
// // //     }
// // //   };

// // //   const handleLoginClick = () => {
// // //     setOpen(true);
// // //     setRoute("Login");
// // //     setOpenSidebar(false);
// // //   };

// // //   return (
// // //     <div className="relative w-full h-screen">
// // //       {/* Background Video */}
// // //       <div className="absolute inset-0 overflow-hidden">
// // //         <video
// // //           className="w-full h-full object-cover"
// // //           autoPlay
// // //           loop
// // //           preload="auto"
// // //           muted
// // //           playsInline
// // //           src="assests/vecteezy_beautiful-asian-woman-female-student-meeting-team-for-work_17515817.mp4"
// // //         />
// // //         <div className="absolute inset-0 bg-black/40"></div>
// // //       </div>

// // //       {/* Header */}
// // //       <div className="relative w-full">
// // //         <div
// // //           className={`${
// // //             active
// // //               ? "fixed top-0 left-0 w-full h-16 z-[80]"
// // //               : "w-full h-16 z-[80]"
// // //           }`}
// // //         >
// // //           <div className="w-[95%] 800px:w-[90%] mx-auto h-full">
// // //             <div className="w-full h-16 flex items-center justify-between">
// // //               {/* Logo and Teach button section */}
// // //               <div className="flex items-center space-x-6">
// // //                 <Link href="/" className="flex items-center space-x-2">
// // //                   <Image
// // //                     src={logo}
// // //                     alt="Logo"
// // //                     width={70}
// // //                     height={70}
// // //                     className="object-contain"
// // //                   />
// // //                 </Link>
// // //                 {user && (
// // //                   <button
// // //                     onClick={() => setTeachModalOpen(true)}
// // //                     className="hidden 800px:flex items-center px-4 py-2 border border-white text-white rounded-md hover:bg-white/10 transition-colors text-sm font-medium backdrop-blur-sm"
// // //                   >
// // //                     {user.role === "admin"
// // //                       ? "Instructor"
// // //                       : "Teach With LearnifyHub"}
// // //                   </button>
// // //                 )}
// // //               <ThemeSwitcher />

// // //               </div>

// // //               {/* Navigation and user actions */}
// // //               <div className="flex items-center space-x-4">
// // //                 {user ? (
// // //                   <div className="hidden 800px:flex space-x-8">
// // //                     {NavItemsData.map((i, index) => (
// // //                       <Link href={i.url} key={index} passHref>
// // //                         <span
// // //                           className={`group relative flex items-center transition-all cursor-pointer text-[18px] font-Poppins font-[400] ${
// // //                             activeItem === index
// // //                               ? "text-red-600"
// // //                               : "text-white"
// // //                           }`}
// // //                         >
// // //                           <span className="relative group-hover:text-[#4CBB17]">
// // //                             <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 mr-1">
// // //                               [
// // //                             </span>
// // //                             <span className="group-hover:text-[#2bd576] transition-all duration-300">
// // //                               {i.name}
// // //                             </span>
// // //                             <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 ml-1">
// // //                               ]
// // //                             </span>
// // //                           </span>
// // //                         </span>
// // //                       </Link>
// // //                     ))}
// // //                   </div>
// // //                 ) : (
// // //                   <div className="hidden 800px:flex space-x-8">
// // //                     {NavItemsData.map((i, index) => (
// // //                       <Link href={i.url} key={index} passHref>
// // //                         <span
// // //                           className={`group relative flex items-center transition-all cursor-pointer text-[18px] font-Poppins font-[400] ${
// // //                             activeItem === index
// // //                               ? "dark:text-[#37a39a] text-[crimson]"
// // //                               : "dark:text-white text-black"
// // //                           }`}
// // //                         >
// // //                           <span className="relative group-hover:text-[#4CBB17]">
// // //                             <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 mr-1">
// // //                               [
// // //                             </span>
// // //                             <span className="group-hover:text-[#2bd576] transition-all duration-300">
// // //                               {i.name}
// // //                             </span>
// // //                             <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 ml-1">
// // //                               ]
// // //                             </span>
// // //                           </span>
// // //                         </span>
// // //                       </Link>
// // //                     ))}
// // //                   </div>
// // //                 )}

// // //                 {/* Mobile menu toggle */}
// // //                 <button
// // //                   className="800px:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
// // //                   onClick={() => setOpenSidebar(!openSidebar)}
// // //                 >
// // //                   <HiOutlineMenuAlt3
// // //                     size={24}
// // //                     className="text-gray-700 dark:text-gray-200"
// // //                   />
// // //                 </button>

// // //                 {/* User profile or login button */}
// // //                 {user ? (
// // //                   <Link href="/profile" className="hidden 800px:block ml-2">
// // //                     <div className="relative group">
// // //                       <Image
// // //                         src={user?.avatar?.url || avatar}
// // //                         alt="Profile"
// // //                         height={36}
// // //                         width={36}
// // //                         className={`w-9 h-9 rounded-full object-cover transition-all duration-300 ${
// // //                           activeItem === 5
// // //                             ? "ring-2 ring-blue-500 ring-offset-2"
// // //                             : "hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-600 hover:ring-offset-2"
// // //                         }`}
// // //                       />
// // //                       <span className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></span>
// // //                     </div>
// // //                   </Link>
// // //                 ) : (
// // //                   <button
// // //                     onClick={handleLoginClick}
// // //                     className="hidden 800px:block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors shadow-sm"
// // //                   >
// // //                     Login
// // //                   </button>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Mobile sidebar */}
// // //           {openSidebar && (
// // //             <div
// // //               className="fixed w-full h-screen top-0 left-0 z-[99999] bg-black bg-opacity-50 backdrop-blur-sm"
// // //               onClick={handleClose}
// // //               id="screen"
// // //             >
// // //               <div className="w-64 fixed h-screen top-0 right-0 z-[999999999] bg-white dark:bg-gray-900 overflow-y-auto shadow-xl transition-all duration-300 ease-in-out">
// // //                 <div className="p-4 border-b border-gray-200 dark:border-gray-700">
// // //                   <div className="flex justify-between items-center">
// // //                     <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
// // //                       Menu
// // //                     </h2>
// // //                     <button
// // //                       onClick={() => setOpenSidebar(false)}
// // //                       className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
// // //                     >
// // //                       <svg
// // //                         xmlns="http://www.w3.org/2000/svg"
// // //                         className="h-5 w-5 text-gray-500 dark:text-gray-400"
// // //                         viewBox="0 0 20 20"
// // //                         fill="currentColor"
// // //                       >
// // //                         <path
// // //                           fillRule="evenodd"
// // //                           d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
// // //                           clipRule="evenodd"
// // //                         />
// // //                       </svg>
// // //                     </button>
// // //                   </div>
// // //                 </div>

// // //                 <div className="py-2">
// // //                   <NavItems
// // //                     activeItem={activeItem}
// // //                     isMobile={true}
// // //                     user={user}
// // //                     setOpen={setOpen}
// // //                     openSidebar={openSidebar}
// // //                     setOpenSidebar={setOpenSidebar}
// // //                   />
// // //                 </div>

// // //                 {!user && (
// // //                   <div className="p-4 border-t border-gray-200 dark:border-gray-700">
// // //                     <button
// // //                       onClick={handleLoginClick}
// // //                       className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
// // //                     >
// // //                       Login
// // //                     </button>
// // //                   </div>
// // //                 )}

// // //                 <div className="p-4 mt-auto border-t border-gray-200 dark:border-gray-700">
// // //                   <p className="text-sm text-gray-500 dark:text-gray-400">
// // //                     © {new Date().getFullYear()} LearnifyHub. All rights
// // //                     reserved.
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Auth modals */}
// // //         {route === "Login" && open && (
// // //           <CustomModel
// // //             open={open}
// // //             setOpen={setOpen}
// // //             setRoute={setRoute}
// // //             activeItem={activeItem}
// // //             component={Login}
// // //           />
// // //         )}
// // //         {route === "Sign-Up" && open && (
// // //           <CustomModel
// // //             open={open}
// // //             setOpen={setOpen}
// // //             setRoute={setRoute}
// // //             activeItem={activeItem}
// // //             component={SignUp}
// // //           />
// // //         )}
// // //         {route === "Verification" && open && (
// // //           <CustomModel
// // //             open={open}
// // //             setOpen={setOpen}
// // //             setRoute={setRoute}
// // //             activeItem={activeItem}
// // //             component={Verification}
// // //           />
// // //         )}
// // //         <TeachModal
// // //           open={teachModalOpen}
// // //           setOpen={setTeachModalOpen}
// // //           setRoute={setRoute}
// // //         />
// // //       </div>

// // //       {/* Hero Content */}
// // //       <div className="relative z-40 flex items-center justify-center h-[calc(100%-4rem)] px-6 lg:px-12">
// // //         <div className="max-w-4xl w-full text-center">
// // //           <h1 className="text-3xl select-none md:text-4xl lg:text-5xl font-thin text-white">
// // //             Welcome to <span className="relative">LearnifyHub</span>
// // //           </h1>
// // //           <p className="text-base md:text-lg lg:text-xl text-white mt-4">
// // //             Elevate your skills, master your goals - start learning now.
// // //           </p>
// // //           <form
// // //             className="flex w-full max-w-lg mx-auto items-center mt-6"
// // //             onSubmit={handleSearch}
// // //           >
// // //             <label htmlFor="search" className="sr-only">
// // //               Search
// // //             </label>
// // //             <div className="relative w-full">
// // //               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
// // //                 <FaBook className="w-5 h-6 text-gray-300" />
// // //               </div>
// // //               <input
// // //                 type="text"
// // //                 id="search"
// // //                 value={search}
// // //                 onChange={(e) => setSearch(e.target.value)}
// // //                 className="bg-white/20 border border-white/30 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 backdrop-blur-sm placeholder-gray-300"
// // //                 placeholder="Search Courses..."
// // //               />
// // //             </div>
// // //             <button
// // //               type="submit"
// // //               className="ml-2 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
// // //             >
// // //               <FaSearch className="w-4 h-4" />
// // //               <span className="sr-only">Search</span>
// // //             </button>
// // //           </form>
// // //           <div className="mt-6">
// // //             <h5 className="text-base md:text-lg text-white">
// // //               500k+ people already trust us.{" "}
// // //               <a
// // //                 href="/courses"
// // //                 className="text-blue-300 underline hover:text-blue-200 transition-colors"
// // //               >
// // //                 View Courses
// // //               </a>
// // //             </h5>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Hero;
// // "use client";
// // import React, { FC, useState, useEffect, useRef } from "react";
// // import Link from "next/link";
// // import { useSelector } from "react-redux";
// // import Image from "next/image";
// // import { FaSearch, FaBook } from "react-icons/fa";
// // import { HiOutlineMenuAlt3 } from "react-icons/hi";
// // import { useRouter } from "next/navigation";
// // import { ThemeSwitcher } from "../../utils/ThemeSwitcher";
// // import NavItems from "../../utils/NavItems";
// // import CustomModel from "../../utils/CustomModel";
// // import Login from "./../Auth/Login";
// // import SignUp from "./../Auth/SignUp";
// // import Verification from "./../Auth/Verification";
// // import TeachModal from "../../utils/TechModel";
// // import { useSession } from "next-auth/react";
// // import logo from "../../../public/assests/logo-removebg-preview.png";
// // import avatar from "../../../public/assests/download5.png";
// // import { useSocialAuthMutation } from "@/redux/features/auth/authApi";
// // import toast from "react-hot-toast";

// // export const NavItemsData = [
// //   { name: "Home", url: "/" },
// //   { name: "Courses", url: "/courses" },
// //   { name: "About", url: "/about" },
// //   { name: "Policy", url: "/policy" },
// //   { name: "FAQ", url: "/faq" },
// // ];

// // type Props = {
// //   activeItem?: number;
// // };

// // const Hero: FC<Props> = ({ activeItem = 0 }) => {
// //   const [active, setActive] = useState<boolean>(false);
// //   const [openSidebar, setOpenSidebar] = useState<boolean>(false);
// //   const [teachModalOpen, setTeachModalOpen] = useState<boolean>(false);
// //   const [search, setSearch] = useState<string>("");
// //   const [open, setOpen] = useState<boolean>(false);
// //   const [route, setRoute] = useState<string>("");
// //   const { user } = useSelector((state: any) => state.auth);
// //   const { data } = useSession();
// //   const [socialAuth, { isSuccess }] = useSocialAuthMutation();
// //   const router = useRouter();

// //   // Video sequencing state
// //   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
// //   const videoRef = useRef<HTMLVideoElement>(null);

// //   // Video sources array
// //   const videoSources = [
// //     "/assests/7033436-uhd_2160_3840_24fps.mp4",
// //     "/assests/4495966-uhd_3840_2160_25fps (1).mp4",
// //     "/assests/4498849-uhd_3840_2160_25fps.mp4",

// //   ];

// //   useEffect(() => {
// //     if (!user && data) {
// //       socialAuth({
// //         email: data?.user?.email,
// //         name: data?.user?.name,
// //         avatar: data?.user?.image,
// //       });
// //     }
// //     if (isSuccess) {
// //       toast.success("Login Successfully");
// //     }
// //   }, [data, user, socialAuth, isSuccess]);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setActive(window.scrollY > 85);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth > 800 && openSidebar) {
// //         setOpenSidebar(false);
// //       }
// //     };
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, [openSidebar]);

// //   // Video sequencing effect
// //   useEffect(() => {
// //     const handleVideoEnd = () => {
// //       // Move to the next video when current video ends
// //       if (currentVideoIndex < videoSources.length - 1) {
// //         setCurrentVideoIndex(prev => prev + 1);
// //       }
// //     };

// //     const currentVideo = videoRef.current;
// //     if (currentVideo) {
// //       currentVideo.addEventListener('ended', handleVideoEnd);

// //       return () => {
// //         currentVideo.removeEventListener('ended', handleVideoEnd);
// //       };
// //     }
// //   }, [currentVideoIndex, videoSources]);

// //   const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
// //     if ((e.target as HTMLElement).id === "screen") {
// //       setOpenSidebar(!openSidebar);
// //     }
// //   };

// //   const handleSearch = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (search.trim() === "") {
// //       return;
// //     } else {
// //       router.push(`/courses?title=${encodeURIComponent(search)}`);
// //     }
// //   };

// //   const handleLoginClick = () => {
// //     setOpen(true);
// //     setRoute("Login");
// //     setOpenSidebar(false);
// //   };

// //   return (
// //     <div className="relative w-full h-screen">
// //       {/* Background Video with Sequencing */}
// //       <div className="absolute inset-0 overflow-hidden">
// //         <video
// //           ref={videoRef}
// //           key={currentVideoIndex}
// //           className="w-full h-full object-cover"
// //           autoPlay
// //           playsInline
// //           muted
// //           src={videoSources[currentVideoIndex]}
// //         />
// //         <div className="absolute inset-0 bg-black/40"></div>
// //       </div>

// //       {/* Header */}
// //       <div className="relative w-full">
// //         <div
// //           className={`${
// //             active
// //               ? "fixed top-0 left-0 w-full h-16 z-[80]"
// //               : "w-full h-16 z-[80]"
// //           }`}
// //         >
// //           <div className="w-[95%] 800px:w-[90%] mx-auto h-full">
// //             <div className="w-full h-16 flex items-center justify-between">
// //               {/* Logo and Teach button section */}
// //               <div className="flex items-center space-x-6">
// //                 <Link href="/" className="flex items-center space-x-2">
// //                   <Image
// //                     src={logo}
// //                     alt="Logo"
// //                     width={70}
// //                     height={70}
// //                     className="object-contain"
// //                   />
// //                 </Link>
// //                 {user && (
// //                   <button
// //                     onClick={() => setTeachModalOpen(true)}
// //                     className="hidden 800px:flex items-center px-4 py-2 border border-white text-white rounded-md hover:bg-white/10 transition-colors text-sm font-medium backdrop-blur-sm"
// //                   >
// //                     {user.role === "admin"
// //                       ? "Instructor"
// //                       : "Teach With LearnifyHub"}
// //                   </button>
// //                 )}
// //                 <ThemeSwitcher />
// //               </div>

// //               {/* Navigation and user actions */}
// //               <div className="flex items-center space-x-4">
// //                 {user ? (
// //                   <div className="hidden 800px:flex space-x-8">
// //                     {NavItemsData.map((i, index) => (
// //                       <Link href={i.url} key={index} passHref>
// //                         <span
// //                           className={`group relative flex items-center transition-all cursor-pointer text-[18px] font-Poppins font-[400] ${
// //                             activeItem === index
// //                               ? "text-red-600"
// //                               : "text-white"
// //                           }`}
// //                         >
// //                           <span className="relative group-hover:text-[#4CBB17]">
// //                             <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 mr-1">
// //                               [
// //                             </span>
// //                             <span className="group-hover:text-[#2bd576] transition-all duration-300">
// //                               {i.name}
// //                             </span>
// //                             <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 ml-1">
// //                               ]
// //                             </span>
// //                           </span>
// //                         </span>
// //                       </Link>
// //                     ))}
// //                   </div>
// //                 ) : (
// //                   <div className="hidden 800px:flex space-x-8">
// //                     {NavItemsData.map((i, index) => (
// //                       <Link href={i.url} key={index} passHref>
// //                         <span
// //                           className={`group relative flex items-center transition-all cursor-pointer text-[18px] font-Poppins font-[400] ${
// //                             activeItem === index
// //                               ? "dark:text-[#37a39a] text-[crimson]"
// //                               : "dark:text-white text-black"
// //                           }`}
// //                         >
// //                           <span className="relative group-hover:text-[#4CBB17]">
// //                             <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 mr-1">
// //                               [
// //                             </span>
// //                             <span className="group-hover:text-[#2bd576] transition-all duration-300">
// //                               {i.name}
// //                             </span>
// //                             <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 ml-1">
// //                               ]
// //                             </span>
// //                           </span>
// //                         </span>
// //                       </Link>
// //                     ))}
// //                   </div>
// //                 )}

// //                 {/* Mobile menu toggle */}
// //                 <button
// //                   className="800px:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
// //                   onClick={() => setOpenSidebar(!openSidebar)}
// //                 >
// //                   <HiOutlineMenuAlt3
// //                     size={24}
// //                     className="text-gray-700 dark:text-gray-200"
// //                   />
// //                 </button>

// //                 {/* User profile or login button */}
// //                 {user ? (
// //                   <Link href="/profile" className="hidden 800px:block ml-2">
// //                     <div className="relative group">
// //                       <Image
// //                         src={user?.avatar?.url || avatar}
// //                         alt="Profile"
// //                         height={36}
// //                         width={36}
// //                         className={`w-9 h-9 rounded-full object-cover transition-all duration-300 ${
// //                           activeItem === 5
// //                             ? "ring-2 ring-blue-500 ring-offset-2"
// //                             : "hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-600 hover:ring-offset-2"
// //                         }`}
// //                       />
// //                       <span className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></span>
// //                     </div>
// //                   </Link>
// //                 ) : (
// //                   <button
// //                     onClick={handleLoginClick}
// //                     className="hidden 800px:block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors shadow-sm"
// //                   >
// //                     Login
// //                   </button>
// //                 )}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Mobile sidebar */}
// //           {openSidebar && (
// //             <div
// //               className="fixed w-full h-screen top-0 left-0 z-[99999] bg-black bg-opacity-50 backdrop-blur-sm"
// //               onClick={handleClose}
// //               id="screen"
// //             >
// //               <div className="w-64 fixed h-screen top-0 right-0 z-[999999999] bg-white dark:bg-gray-900 overflow-y-auto shadow-xl transition-all duration-300 ease-in-out">
// //                 <div className="p-4 border-b border-gray-200 dark:border-gray-700">
// //                   <div className="flex justify-between items-center">
// //                     <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
// //                       Menu
// //                     </h2>
// //                     <button
// //                       onClick={() => setOpenSidebar(false)}
// //                       className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
// //                     >
// //                       <svg
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         className="h-5 w-5 text-gray-500 dark:text-gray-400"
// //                         viewBox="0 0 20 20"
// //                         fill="currentColor"
// //                       >
// //                         <path
// //                           fillRule="evenodd"
// //                           d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
// //                           clipRule="evenodd"
// //                         />
// //                       </svg>
// //                     </button>
// //                   </div>
// //                 </div>

// //                 <div className="py-2">
// //                   <NavItems
// //                     activeItem={activeItem}
// //                     isMobile={true}
// //                     user={user}
// //                     setOpen={setOpen}
// //                     openSidebar={openSidebar}
// //                     setOpenSidebar={setOpenSidebar}
// //                   />
// //                 </div>

// //                 {!user && (
// //                   <div className="p-4 border-t border-gray-200 dark:border-gray-700">
// //                     <button
// //                       onClick={handleLoginClick}
// //                       className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
// //                     >
// //                       Login
// //                     </button>
// //                   </div>
// //                 )}

// //                 <div className="p-4 mt-auto border-t border-gray-200 dark:border-gray-700">
// //                   <p className="text-sm text-gray-500 dark:text-gray-400">
// //                     © {new Date().getFullYear()} LearnifyHub. All rights
// //                     reserved.
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //         </div>

// //         {/* Auth modals */}
// //         {route === "Login" && open && (
// //           <CustomModel
// //             open={open}
// //             setOpen={setOpen}
// //             setRoute={setRoute}
// //             activeItem={activeItem}
// //             component={Login}
// //           />
// //         )}
// //         {route === "Sign-Up" && open && (
// //           <CustomModel
// //             open={open}
// //             setOpen={setOpen}
// //             setRoute={setRoute}
// //             activeItem={activeItem}
// //             component={SignUp}
// //           />
// //         )}
// //         {route === "Verification" && open && (
// //           <CustomModel
// //             open={open}
// //             setOpen={setOpen}
// //             setRoute={setRoute}
// //             activeItem={activeItem}
// //             component={Verification}
// //           />
// //         )}
// //         <TeachModal
// //           open={teachModalOpen}
// //           setOpen={setTeachModalOpen}
// //           setRoute={setRoute}
// //         />
// //       </div>

// //       {/* Hero Content */}
// //       <div className="relative z-40 flex items-center justify-center h-[calc(100%-4rem)] px-6 lg:px-12">
// //         <div className="max-w-4xl w-full text-center">
// //           <h1 className="text-3xl select-none md:text-4xl lg:text-5xl font-thin text-white">
// //             Welcome to <span className="relative">LearnifyHub</span>
// //           </h1>
// //           <p className="text-base md:text-lg lg:text-xl text-white mt-4">
// //             Elevate your skills, master your goals - start learning now.
// //           </p>
// //           <form
// //             className="flex w-full max-w-lg mx-auto items-center mt-6"
// //             onSubmit={handleSearch}
// //           >
// //             <label htmlFor="search" className="sr-only">
// //               Search
// //             </label>
// //             <div className="relative w-full">
// //               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
// //                 <FaBook className="w-5 h-6 text-gray-300" />
// //               </div>
// //               <input
// //                 type="text"
// //                 id="search"
// //                 value={search}
// //                 onChange={(e) => setSearch(e.target.value)}
// //                 className="bg-white/20 border border-white/30 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 backdrop-blur-sm placeholder-gray-300"
// //                 placeholder="Search Courses..."
// //               />
// //             </div>
// //             <button
// //               type="submit"
// //               className="ml-2 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
// //             >
// //               <FaSearch className="w-4 h-4" />
// //               <span className="sr-only">Search</span>
// //             </button>
// //           </form>
// //           <div className="mt-6">
// //             <h5 className="text-base md:text-lg text-white">
// //               500k+ people already trust us.{" "}
// //               <a
// //                 href="/courses"
// //                 className="text-blue-300 underline hover:text-blue-200 transition-colors"
// //               >
// //                 View Courses
// //               </a>
// //             </h5>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hero;
// // "use client";
// // import React, { FC, useState, useEffect, useRef } from "react";
// // import Link from "next/link";
// // import { useSelector } from "react-redux";
// // import Image from "next/image";
// // import { FaSearch, FaBook } from "react-icons/fa";
// // import { HiOutlineMenuAlt3 } from "react-icons/hi";
// // import { useRouter } from "next/navigation";
// // import { ThemeSwitcher } from "../../utils/ThemeSwitcher";
// // import NavItems from "../../utils/NavItems";
// // import CustomModel from "../../utils/CustomModel";
// // import Login from "./../Auth/Login";
// // import SignUp from "./../Auth/SignUp";
// // import Verification from "./../Auth/Verification";
// // import TeachModal from "../../utils/TechModel";
// // import { useSession } from "next-auth/react";
// // import logo from "../../../public/assests/logo-removebg-preview.png";
// // import avatar from "../../../public/assests/download5.png";
// // import { useSocialAuthMutation } from "@/redux/features/auth/authApi";
// // import toast from "react-hot-toast";

// // export const NavItemsData = [
// //   { name: "Home", url: "/" },
// //   { name: "Courses", url: "/courses" },
// //   { name: "About", url: "/about" },
// //   { name: "Policy", url: "/policy" },
// //   { name: "FAQ", url: "/faq" },
// // ];

// // type Props = {
// //   activeItem?: number;
// // };

// // const Hero: FC<Props> = ({ activeItem = 0 }) => {
// //   const [active, setActive] = useState<boolean>(false);
// //   const [openSidebar, setOpenSidebar] = useState<boolean>(false);
// //   const [teachModalOpen, setTeachModalOpen] = useState<boolean>(false);
// //   const [search, setSearch] = useState<string>("");
// //   const [open, setOpen] = useState<boolean>(false);
// //   const [route, setRoute] = useState<string>("");
// //   const { user } = useSelector((state: any) => state.auth);
// //   const { data } = useSession();
// //   const [socialAuth, { isSuccess }] = useSocialAuthMutation();
// //   const router = useRouter();

// //   // Video sequencing state
// //   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
// //   const videoRef = useRef<HTMLVideoElement>(null);

// //   // Video sources array (can be expanded to more than 3 videos)
// //   const videoSources = [
// //     "/assests/1.mp4",
// //     "/assests/2.mp4",
// //     //"/assests/video3.mp4"
// //   ];

// //   useEffect(() => {
// //     if (!user && data) {
// //       socialAuth({
// //         email: data?.user?.email,
// //         name: data?.user?.name,
// //         avatar: data?.user?.image,
// //       });
// //     }
// //     if (isSuccess) {
// //       toast.success("Login Successfully");
// //     }
// //   }, [data, user, socialAuth, isSuccess]);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setActive(window.scrollY > 85);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth > 800 && openSidebar) {
// //         setOpenSidebar(false);
// //       }
// //     };
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, [openSidebar]);

// //   useEffect(() => {
// //     const handleVideoEnd = () => {
// //       // When video ends, move to next video or start from the first video
// //       setCurrentVideoIndex((prevIndex) =>
// //         prevIndex === videoSources.length - 1 ? 0 : prevIndex + 1
// //       );
// //     };

// //     const currentVideo = videoRef.current;
// //     if (currentVideo) {
// //       currentVideo.addEventListener('ended', handleVideoEnd);

// //       return () => {
// //         currentVideo.removeEventListener('ended', handleVideoEnd);
// //       };
// //     }
// //   }, [videoSources.length]);

// //   const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
// //     if ((e.target as HTMLElement).id === "screen") {
// //       setOpenSidebar(!openSidebar);
// //     }
// //   };

// //   const handleSearch = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (search.trim() === "") {
// //       return;
// //     } else {
// //       router.push(`/courses?title=${encodeURIComponent(search)}`);
// //     }
// //   };

// //   const handleLoginClick = () => {
// //     setOpen(true);
// //     setRoute("Login");
// //     setOpenSidebar(false);
// //   };

// //   return (
// //     <div className="relative w-full h-screen">
// //       {/* Background Video with Sequencing */}
// //       <div className="absolute inset-0 overflow-hidden">
// //         <video
// //           ref={videoRef}
// //           key={currentVideoIndex}
// //           className="w-full h-full object-cover"
// //           autoPlay
// //           playsInline
// //           muted
// //           src={videoSources[currentVideoIndex]}
// //         />
// //         <div className="absolute inset-0 bg-black/40"></div>

// //         {/* Video Progress Indicator */}
// //         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
// //           {videoSources.map((_, index) => (
// //             <div
// //               key={index}
// //               className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
// //                 index === currentVideoIndex
// //                   ? 'bg-white'
// //                   : 'bg-white/50 hover:bg-white/70'
// //               }`}
// //               onClick={() => setCurrentVideoIndex(index)}
// //             />
// //           ))}
// //         </div>
// //       </div>

// //       {/* Header */}
// //       <div className="relative w-full">
// //         <div
// //           className={`${
// //             active
// //               ? "fixed top-0 left-0 w-full h-16 z-[80]"
// //               : "w-full h-16 z-[80]"
// //           }`}
// //         >
// //           <div className="w-[95%] 800px:w-[90%] mx-auto h-full">
// //             <div className="w-full h-16 flex items-center justify-between">
// //               {/* Logo and Teach button section */}
// //               <div className="flex items-center space-x-6">
// //                 <Link href="/" className="flex items-center space-x-2">
// //                   <Image
// //                     src={logo}
// //                     alt="Logo"
// //                     width={70}
// //                     height={70}
// //                     className="object-contain"
// //                   />
// //                 </Link>
// //                 {user && (
// //                   <button
// //                     onClick={() => setTeachModalOpen(true)}
// //                     className="hidden 800px:flex items-center px-4 py-2 border border-white text-white rounded-md hover:bg-white/10 transition-colors text-sm font-medium backdrop-blur-sm"
// //                   >
// //                     {user.role === "admin"
// //                       ? "Instructor"
// //                       : "Teach With LearnifyHub"}
// //                   </button>
// //                 )}
// //                 <ThemeSwitcher />
// //               </div>

// //               {/* Navigation and user actions */}
// //               <div className="flex items-center space-x-4">
// //                 {user ? (
// //                   <div className="hidden 800px:flex space-x-8">
// //                     {NavItemsData.map((i, index) => (
// //                       <Link href={i.url} key={index} passHref>
// //                         <span
// //                           className={`group relative flex items-center transition-all cursor-pointer text-[18px] font-Poppins font-[400] ${
// //                             activeItem === index
// //                               ? "text-red-600"
// //                               : "text-white"
// //                           }`}
// //                         >
// //                           <span className="relative group-hover:text-[#4CBB17]">
// //                             <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 mr-1">
// //                               [
// //                             </span>
// //                             <span className="group-hover:text-[#2bd576] transition-all duration-300">
// //                               {i.name}
// //                             </span>
// //                             <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 ml-1">
// //                               ]
// //                             </span>
// //                           </span>
// //                         </span>
// //                       </Link>
// //                     ))}
// //                   </div>
// //                 ) : (
// //                   <div className="hidden 800px:flex space-x-8">
// //                     {NavItemsData.map((i, index) => (
// //                       <Link href={i.url} key={index} passHref>
// //                         <span
// //                           className={`group relative flex items-center transition-all cursor-pointer text-[18px] font-Poppins font-[400] ${
// //                             activeItem === index
// //                               ? "dark:text-[#37a39a] text-[crimson]"
// //                               : "dark:text-white text-black"
// //                           }`}
// //                         >
// //                           <span className="relative group-hover:text-[#4CBB17]">
// //                             <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 mr-1">
// //                               [
// //                             </span>
// //                             <span className="group-hover:text-[#2bd576] transition-all duration-300">
// //                               {i.name}
// //                             </span>
// //                             <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 ml-1">
// //                               ]
// //                             </span>
// //                           </span>
// //                         </span>
// //                       </Link>
// //                     ))}
// //                   </div>
// //                 )}

// //                 {/* Mobile menu toggle */}
// //                 <button
// //                   className="800px:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
// //                   onClick={() => setOpenSidebar(!openSidebar)}
// //                 >
// //                   <HiOutlineMenuAlt3
// //                     size={24}
// //                     className="text-gray-700 dark:text-gray-200"
// //                   />
// //                 </button>

// //                 {/* User profile or login button */}
// //                 {user ? (
// //                   <Link href="/profile" className="hidden 800px:block ml-2">
// //                     <div className="relative group">
// //                       <Image
// //                         src={user?.avatar?.url || avatar}
// //                         alt="Profile"
// //                         height={36}
// //                         width={36}
// //                         className={`w-9 h-9 rounded-full object-cover transition-all duration-300 ${
// //                           activeItem === 5
// //                             ? "ring-2 ring-blue-500 ring-offset-2"
// //                             : "hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-600 hover:ring-offset-2"
// //                         }`}
// //                       />
// //                       <span className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></span>
// //                     </div>
// //                   </Link>
// //                 ) : (
// //                   <button
// //                     onClick={handleLoginClick}
// //                     className="hidden 800px:block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors shadow-sm"
// //                   >
// //                     Login
// //                   </button>
// //                 )}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Mobile sidebar */}
// //           {openSidebar && (
// //             <div
// //               className="fixed w-full h-screen top-0 left-0 z-[99999] bg-black bg-opacity-50 backdrop-blur-sm"
// //               onClick={handleClose}
// //               id="screen"
// //             >
// //               <div className="w-64 fixed h-screen top-0 right-0 z-[999999999] bg-white dark:bg-gray-900 overflow-y-auto shadow-xl transition-all duration-300 ease-in-out">
// //                 <div className="p-4 border-b border-gray-200 dark:border-gray-700">
// //                   <div className="flex justify-between items-center">
// //                     <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
// //                       Menu
// //                     </h2>
// //                     <button
// //                       onClick={() => setOpenSidebar(false)}
// //                       className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
// //                     >
// //                       <svg
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         className="h-5 w-5 text-gray-500 dark:text-gray-400"
// //                         viewBox="0 0 20 20"
// //                         fill="currentColor"
// //                       >
// //                         <path
// //                           fillRule="evenodd"
// //                           d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
// //                           clipRule="evenodd"
// //                         />
// //                       </svg>
// //                     </button>
// //                   </div>
// //                 </div>

// //                 <div className="py-2">
// //                   <NavItems
// //                     activeItem={activeItem}
// //                     isMobile={true}
// //                     user={user}
// //                     setOpen={setOpen}
// //                     openSidebar={openSidebar}
// //                     setOpenSidebar={setOpenSidebar}
// //                   />
// //                 </div>

// //                 {!user && (
// //                   <div className="p-4 border-t border-gray-200 dark:border-gray-700">
// //                     <button
// //                       onClick={handleLoginClick}
// //                       className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
// //                     >
// //                       Login
// //                     </button>
// //                   </div>
// //                 )}

// //                 <div className="p-4 mt-auto border-t border-gray-200 dark:border-gray-700">
// //                   <p className="text-sm text-gray-500 dark:text-gray-400">
// //                     © {new Date().getFullYear()} LearnifyHub. All rights
// //                     reserved.
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //         </div>

// //         {/* Auth modals */}
// //         {route === "Login" && open && (
// //           <CustomModel
// //             open={open}
// //             setOpen={setOpen}
// //             setRoute={setRoute}
// //             activeItem={activeItem}
// //             component={Login}
// //           />
// //         )}
// //         {route === "Sign-Up" && open && (
// //           <CustomModel
// //             open={open}
// //             setOpen={setOpen}
// //             setRoute={setRoute}
// //             activeItem={activeItem}
// //             component={SignUp}
// //           />
// //         )}
// //         {route === "Verification" && open && (
// //           <CustomModel
// //             open={open}
// //             setOpen={setOpen}
// //             setRoute={setRoute}
// //             activeItem={activeItem}
// //             component={Verification}
// //           />
// //         )}
// //         <TeachModal
// //           open={teachModalOpen}
// //           setOpen={setTeachModalOpen}
// //           setRoute={setRoute}
// //         />
// //       </div>

// //       {/* Hero Content */}
// //       <div className="relative z-40 flex items-center justify-center h-[calc(100%-4rem)] px-6 lg:px-12">
// //         <div className="max-w-4xl w-full text-center">
// //           <h1 className="text-3xl select-none md:text-4xl lg:text-5xl font-thin text-white">
// //             Welcome to <span className="relative">LearnifyHub</span>
// //           </h1>
// //           <p className="text-base md:text-lg lg:text-xl text-white mt-4">
// //             Elevate your skills, master your goals - start learning now.
// //           </p>
// //           <form
// //             className="flex w-full max-w-lg mx-auto items-center mt-6"
// //             onSubmit={handleSearch}
// //           >
// //             <label htmlFor="search" className="sr-only">
// //               Search
// //             </label>
// //             <div className="relative w-full">
// //               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
// //                 <FaBook className="w-5 h-6 text-gray-300" />
// //               </div>
// //               <input
// //                 type="text"
// //                 id="search"
// //                 value={search}
// //                 onChange={(e) => setSearch(e.target.value)}
// //                 className="bg-white/20 border border-white/30 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 backdrop-blur-sm placeholder-gray-300"
// //                 placeholder="Search Courses..."
// //               />
// //             </div>
// //             <button
// //               type="submit"
// //               className="ml-2 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
// //             >
// //               <FaSearch className="w-4 h-4" />
// //               <span className="sr-only">Search</span>
// //             </button>
// //           </form>
// //           <div className="mt-6">
// //             <h5 className="text-base md:text-lg text-white">
// //               500k+ people already trust us.{" "}
// //               <a
// //                 href="/courses"
// //                 className="text-blue-300 underline hover:text-blue-200 transition-colors"
// //               >
// //                 View Courses
// //               </a>
// //             </h5>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hero;

// "use client";
// import React, { FC, useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { useSelector } from "react-redux";
// import Image from "next/image";
// import { FaSearch, FaBook } from "react-icons/fa";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { useRouter } from "next/navigation";
// import { ThemeSwitcher } from "../../utils/ThemeSwitcher";
// import NavItems from "../../utils/NavItems";
// import CustomModel from "../../utils/CustomModel";
// import Login from "./../Auth/Login";
// import SignUp from "./../Auth/SignUp";
// import Verification from "./../Auth/Verification";
// import TeachModal from "../../utils/TechModel";
// import { useSession } from "next-auth/react";
// import logo from "../../../public/assests/logo-removebg-preview.png";
// import avatar from "../../../public/assests/download5.png";
// import { useSocialAuthMutation } from "@/redux/features/auth/authApi";
// import toast from "react-hot-toast";

// export const NavItemsData = [
//   { name: "Home", url: "/" },
//   { name: "Courses", url: "/courses" },
//   { name: "About", url: "/about" },
//   { name: "Policy", url: "/policy" },
//   { name: "FAQ", url: "/faq" },
// ];

// type Props = {
//   activeItem?: number;
// };

// const Hero: FC<Props> = ({ activeItem = 0 }) => {
//   const [active, setActive] = useState<boolean>(false);
//   const [openSidebar, setOpenSidebar] = useState<boolean>(false);
//   const [teachModalOpen, setTeachModalOpen] = useState<boolean>(false);
//   const [search, setSearch] = useState<string>("");
//   const [open, setOpen] = useState<boolean>(false);
//   const [route, setRoute] = useState<string>("");
//   const { user } = useSelector((state: any) => state.auth);
//   const { data } = useSession();
//   const [socialAuth, { isSuccess }] = useSocialAuthMutation();
//   const router = useRouter();

//   // Video sequencing state
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   // Video sources array
//   const videoSources = [
//     "/assests/1.mp4",
//     "/assests/7.mp4",
//     "/assests/3.mp4",
//     "/assests/5.mp4",
//     "/assests/6.mp4",
//   ];

//   // Handle video looping logic
//   useEffect(() => {
//     const currentVideo = videoRef.current;

//     const handleVideoEnd = () => {
//       // Move to the next video, looping back to 0 if at the end
//       setCurrentVideoIndex((prevIndex) => {
//         const nextIndex = (prevIndex + 1) % videoSources.length;
//         return nextIndex;
//       });
//     };

//     const handleLoadedData = () => {
//       if (currentVideo) {
//         currentVideo
//           .play()
//           .catch((error) => console.error("Error playing video:", error));
//       }
//     };

//     if (currentVideo) {
//       // Add event listeners
//       currentVideo.addEventListener("ended", handleVideoEnd);
//       currentVideo.addEventListener("loadeddata", handleLoadedData);

//       // Load the new source
//       currentVideo.load();

//       // Cleanup event listeners
//       return () => {
//         currentVideo.removeEventListener("ended", handleVideoEnd);
//         currentVideo.removeEventListener("loadeddata", handleLoadedData);
//       };
//     }
//   }, [currentVideoIndex, videoSources.length]);

//   // Rest of the existing useEffects
//   useEffect(() => {
//     if (!user && data) {
//       socialAuth({
//         email: data?.user?.email,
//         name: data?.user?.name,
//         avatar: data?.user?.image,
//       });
//     }
//     if (isSuccess) {
//       toast.success("Login Successfully");
//     }
//   }, [data, user, socialAuth, isSuccess]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setActive(window.scrollY > 85);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 800 && openSidebar) {
//         setOpenSidebar(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [openSidebar]);

//   const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
//     if ((e.target as HTMLElement).id === "screen") {
//       setOpenSidebar(!openSidebar);
//     }
//   };

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (search.trim() === "") {
//       return;
//     } else {
//       router.push(`/courses?title=${encodeURIComponent(search)}`);
//     }
//   };

//   const handleLoginClick = () => {
//     setOpen(true);
//     setRoute("Login");
//     setOpenSidebar(false);
//   };

//   return (
//     <div className="relative w-full h-screen">
//       {/* Background Video with Sequencing */}
//       <div className="absolute inset-0 overflow-hidden">
//         <video
//           ref={videoRef}
//           key={currentVideoIndex}
//           className="w-full h-full object-cover"
//           autoPlay
//           playsInline
//           muted
//           src={videoSources[currentVideoIndex]}
//         />
//         <div className="absolute inset-0 bg-black/40"></div>

//         {/* Video Progress Indicator */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {videoSources.map((_, index) => (
//             <div
//               key={index}
//               className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
//                 index === currentVideoIndex
//                   ? "bg-white"
//                   : "bg-white/50 hover:bg-white/70"
//               }`}
//               onClick={() => setCurrentVideoIndex(index)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Header */}
// <div className="relative w-full">
//   <div
//     className={`${
//       active
//         ? "fixed top-0 left-0 w-full h-16 z-[80]"
//         : "w-full h-16 z-[80]"
//     }`}
//   >
//     <div className="w-[95%] 800px:w-[90%] mx-auto h-full">
//       <div className="w-full h-16 flex items-center justify-between">
//         {/* Logo and Teach button section */}
//         <div className="flex items-center space-x-6">
//           <Link href="/" className="flex items-center space-x-2">
//             <Image
//               src={logo}
//               alt="Logo"
//               width={70}
//               height={70}
//               className="object-contain"
//             />
//           </Link>
//           {user && (
//             <button
//               onClick={() => setTeachModalOpen(true)}
//               className="hidden 800px:flex items-center px-4 py-2 border border-white text-white rounded-md hover:bg-white/10 transition-colors text-sm font-medium backdrop-blur-sm"
//             >
//               {user.role === "admin"
//                 ? "Instructor"
//                 : "Teach With LearnifyHub"}
//             </button>
//           )}
//           <ThemeSwitcher />
//         </div>

//         {/* Navigation and user actions */}
//         <div className="flex items-center space-x-4">
//           {user ? (
//             <div className="hidden 800px:flex space-x-8">
//               {NavItemsData.map((i, index) => (
//                 <Link href={i.url} key={index} passHref>
//                   <span
//                     className={`group relative flex items-center transition-all cursor-pointer text-[18px] font-Poppins font-[400] ${
//                       activeItem === index
//                         ? "text-red-600"
//                         : "text-white"
//                     }`}
//                   >
//                     <span className="relative group-hover:text-[#4CBB17]">
//                       <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 mr-1">
//                         [
//                       </span>
//                       <span className="group-hover:text-[#2bd576] transition-all duration-300">
//                         {i.name}
//                       </span>
//                       <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 ml-1">
//                         ]
//                       </span>
//                     </span>
//                   </span>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <div className="hidden 800px:flex space-x-8">
//               {NavItemsData.map((i, index) => (
//                 <Link href={i.url} key={index} passHref>
//                   <span
//                     className={`group relative flex items-center transition-all cursor-pointer text-[18px] font-Poppins font-[400] ${
//                       activeItem === index
//                         ? "dark:text-[#37a39a] text-[crimson]"
//                         : "dark:text-white text-black"
//                     }`}
//                   >
//                     <span className="relative group-hover:text-[#4CBB17]">
//                       <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 mr-1">
//                         [
//                       </span>
//                       <span className="group-hover:text-[#2bd576] transition-all duration-300">
//                         {i.name}
//                       </span>
//                       <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 ml-1">
//                         ]
//                       </span>
//                     </span>
//                   </span>
//                 </Link>
//               ))}
//             </div>
//           )}

//           {/* Mobile menu toggle */}
//           <button
//             className="800px:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//             onClick={() => setOpenSidebar(!openSidebar)}
//           >
//             <HiOutlineMenuAlt3
//               size={24}
//               className="text-gray-700 dark:text-gray-200"
//             />
//           </button>

//           {/* User profile or login button */}
//           {user ? (
//             <Link href="/profile" className="hidden 800px:block ml-2">
//               <div className="relative group">
//                 <Image
//                   src={user?.avatar?.url || avatar}
//                   alt="Profile"
//                   height={36}
//                   width={36}
//                   className={`w-9 h-9 rounded-full object-cover transition-all duration-300 ${
//                     activeItem === 5
//                       ? "ring-2 ring-blue-500 ring-offset-2"
//                       : "hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-600 hover:ring-offset-2"
//                   }`}
//                 />
//                 <span className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></span>
//               </div>
//             </Link>
//           ) : (
//             <button
//               onClick={handleLoginClick}
//               className="hidden 800px:block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors shadow-sm"
//             >
//               Login
//             </button>
//           )}
//         </div>
//       </div>
//     </div>

//     {/* Mobile sidebar */}
//     {openSidebar && (
//       <div
//         className="fixed w-full h-screen top-0 left-0 z-[99999] bg-black bg-opacity-50 backdrop-blur-sm"
//         onClick={handleClose}
//         id="screen"
//       >
//         <div className="w-64 fixed h-screen top-0 right-0 z-[999999999] bg-white dark:bg-gray-900 overflow-y-auto shadow-xl transition-all duration-300 ease-in-out">
//           <div className="p-4 border-b border-gray-200 dark:border-gray-700">
//             <div className="flex justify-between items-center">
//               <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
//                 Menu
//               </h2>
//               <button
//                 onClick={() => setOpenSidebar(false)}
//                 className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 text-gray-500 dark:text-gray-400"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           <div className="py-2">
//             <NavItems
//               activeItem={activeItem}
//               isMobile={true}
//               user={user}
//               setOpen={setOpen}
//               openSidebar={openSidebar}
//               setOpenSidebar={setOpenSidebar}
//             />
//           </div>

//           {!user && (
//             <div className="p-4 border-t border-gray-200 dark:border-gray-700">
//               <button
//                 onClick={handleLoginClick}
//                 className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
//               >
//                 Login
//               </button>
//             </div>
//           )}

//           <div className="p-4 mt-auto border-t border-gray-200 dark:border-gray-700">
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//               © {new Date().getFullYear()} LearnifyHub. All rights
//               reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     )}
//   </div>

//   {/* Auth modals */}
//   {route === "Login" && open && (
//     <CustomModel
//       open={open}
//       setOpen={setOpen}
//       setRoute={setRoute}
//       activeItem={activeItem}
//       component={Login}
//     />
//   )}
//   {route === "Sign-Up" && open && (
//     <CustomModel
//       open={open}
//       setOpen={setOpen}
//       setRoute={setRoute}
//       activeItem={activeItem}
//       component={SignUp}
//     />
//   )}
//   {route === "Verification" && open && (
//     <CustomModel
//       open={open}
//       setOpen={setOpen}
//       setRoute={setRoute}
//       activeItem={activeItem}
//       component={Verification}
//     />
//   )}
//   <TeachModal
//     open={teachModalOpen}
//     setOpen={setTeachModalOpen}
//     setRoute={setRoute}
//   />
// </div>

//       {/* Hero Content */}
//       <div className="relative z-40 flex items-center justify-center h-[calc(100%-4rem)] px-6 lg:px-12">
//         <div className="max-w-4xl w-full text-center">
//           <h1 className="text-3xl select-none md:text-4xl lg:text-5xl font-thin text-white">
//             Welcome to <span className="relative">LearnifyHub</span>
//           </h1>
//           <p className="text-base md:text-lg lg:text-xl text-white mt-4">
//             Elevate your skills, master your goals - start learning now.
//           </p>
//           <form
//             className="flex w-full max-w-lg mx-auto items-center mt-6"
//             onSubmit={handleSearch}
//           >
//             <label htmlFor="search" className="sr-only">
//               Search
//             </label>
//             <div className="relative w-full">
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <FaBook className="w-5 h-6 text-gray-300" />
//               </div>
//               <input
//                 type="text"
//                 id="search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="bg-white/20 border border-white/30 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 backdrop-blur-sm placeholder-gray-300"
//                 placeholder="Search Courses..."
//               />
//             </div>
//             <button
//               type="submit"
//               className="ml-2 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
//             >
//               <FaSearch className="w-4 h-4" />
//               <span className="sr-only">Search</span>
//             </button>
//           </form>
//           <div className="mt-6">
//             <h5 className="text-base md:text-lg text-white">
//               500k+ people already trust us.{" "}
//               <a
//                 href="/courses"
//                 className="text-blue-300 underline hover:text-blue-200 transition-colors"
//               >
//                 View Courses
//               </a>
//             </h5>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

//---------------------------------------------------FINAL----------------------------------------------------//
"use client";
import React, { FC, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeSwitcher } from "../../utils/ThemeSwitcher";
import NavItems from "../../utils/NavItems";
import CustomModel from "../../utils/CustomModel";
import Login from "./../Auth/Login";
import SignUp from "./../Auth/SignUp";
import Verification from "./../Auth/Verification";
import TeachModal from "../../utils/TechModel";
import { useSession } from "next-auth/react";
import logo from "../../../public/assests/logo-removebg-preview.png";
import avatar from "../../../public/assests/download5.png";
import { useSocialAuthMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";

export const NavItemsData = [
  { name: "Home", url: "/" },
  { name: "Courses", url: "/courses" },
  { name: "About", url: "/about" },
  { name: "Policy", url: "/policy" },
  { name: "FAQ", url: "/faq" },
];

// Define video content with slogans
const videoContent = [
  {
    src: "/assests/8 (1).mp4",
    title: "Transform Your Potential",
    subtitle: "Unlock New Skills with LearnifyHub",
  },
  {
    src: "/assests/6.mp4",
    title: "Skill Up, Grow Faster",
    subtitle: "Level Up with In-Demand Courses",
  },
  {
    src: "/assests/3.mp4",
    title: "Learn Anywhere, Anytime",
    subtitle: "Flexible Learning at Your Convenience",
  },
  {
    src: "/assests/4.mp4",
    title: "Expert-Led Lessons",
    subtitle: "Learn from the Best in the Industry",
  },
  {
    src: "/assests/5.mp4",
    title: "Fuel Your Ambition",
    subtitle: "Turn Dreams into Achievements",
  },
  // {
  //   src: "/assests/6.mp4",
  //   title: "Achieve More, Stress Less",
  //   subtitle: "Smart Learning for Busy Lives",
  // },
  {
    src: "/assests/7.mp4",
    title: "Upskill for Tomorrow",
    subtitle: "Stay Ahead in a Changing World",
  },
];

type Props = {
  activeItem?: number;
};

const   Hero: FC<Props> = ({ activeItem = 0 }) => {
  const [active, setActive] = useState<boolean>(false);
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [teachModalOpen, setTeachModalOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [route, setRoute] = useState<string>("");
  const { user } = useSelector((state: any) => state.auth);
  const { data } = useSession();
  const [socialAuth, { isSuccess }] = useSocialAuthMutation();
  const router = useRouter();

  // Video sequencing state
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Automatic video change interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVideoIndex(
        (prevIndex) => (prevIndex + 1) % videoContent.length
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const currentVideo = videoRef.current;

    const handleVideoEnd = () => {
      setCurrentVideoIndex(
        (prevIndex) => (prevIndex + 1) % videoContent.length
      );
    };

    const handleLoadedData = () => {
      if (currentVideo) {
        currentVideo
          .play()
          .catch((error) => console.error("Error playing video:", error));
      }
    };

    if (currentVideo) {
      currentVideo.addEventListener("ended", handleVideoEnd);
      currentVideo.addEventListener("loadeddata", handleLoadedData);

      currentVideo.load();

      return () => {
        currentVideo.removeEventListener("ended", handleVideoEnd);
        currentVideo.removeEventListener("loadeddata", handleLoadedData);
      };
    }
  }, [currentVideoIndex]);

  useEffect(() => {
    if (!user && data) {
      socialAuth({
        email: data?.user?.email,
        name: data?.user?.name,
        avatar: data?.user?.image,
      });
    }
    if (isSuccess) {
      toast.success("Login Successfully");
    }
  }, [data, user, socialAuth, isSuccess]);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 85);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800 && openSidebar) {
        setOpenSidebar(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [openSidebar]);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "screen") {
      setOpenSidebar(!openSidebar);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim() === "") {
      return;
    } else {
      router.push(`/courses?title=${encodeURIComponent(search)}`);
    }
  };

  const handleLoginClick = () => {
    setOpen(true);
    setRoute("Login");
    setOpenSidebar(false);
  };

  // Framer Motion Variants
  const videoVariants = {
    initial: { opacity: 0, scale: 1.1 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  const textVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  // Current video content
  const currentVideoContent = videoContent[currentVideoIndex];

  return (
    <div className="relative w-full h-screen">
      {/* Background Video with Sequencing and Framer Motion */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.video
            key={currentVideoIndex}
            ref={videoRef}
            // style={{ objectPosition: "center 5%" }}
            className="w-full h-full object-cover"
            variants={videoVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            autoPlay
            playsInline
            muted
            src={currentVideoContent.src}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Video Progress Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/4 flex space-x-2">
        {videoContent.map((_, index) => (
          <motion.div
            key={index}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentVideoIndex
                ? "bg-white"
                : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => setCurrentVideoIndex(index)}
          />
        ))}
      </div>
      {/* </div> */}

      {/* Rest of the existing header component remains the same... */}

      <div className="relative w-full">
        <div
          className={`${
            active
              ? "fixed top-0 left-0 w-full h-16 z-[80]"
              : "w-full h-16 z-[80]"
          }`}
        >
          <div className="w-[95%] 800px:w-[90%] mx-auto h-full">
            <div className="w-full h-16 flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={70}
                    height={70}
                    className="object-contain"
                  />
                </Link>
                {user && (
                  <button
                    onClick={() => setTeachModalOpen(true)}
                    className="hidden 800px:flex items-center px-4 py-2 border border-white text-white rounded-md hover:bg-white/10 transition-colors text-sm font-josefin font-medium backdrop-blur-sm"
                  >
                    {user.role === "admin"
                      ? "Instructor"
                      : "Teach With LearnifyHub"}
                  </button>
                )}
                {/* <ThemeSwitcher /> */}
              </div>

              <div className="flex items-center space-x-4">
                {user ? (
                  <div className="hidden 800px:flex space-x-8">
                    {NavItemsData.map((i, index) => (
                      <Link href={i.url} key={index} passHref>
                        <span
                          className={`group relative flex items-center transition-all cursor-pointer text-[18px] font-josefin font-[400] ${
                            activeItem === index ? "text-red-600" : "text-white"
                          }`}
                        >
                          <span className="relative group-hover:text-[#3b5d8e]">
                            <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 mr-1">
                              [
                            </span>
                            <span className="group-hover:text-[#3b5d8e] transition-all duration-300">
                              {i.name}
                            </span>
                            <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 ml-1">
                              ]
                            </span>
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="hidden 800px:flex space-x-8">
                    {NavItemsData.map((i, index) => (
                      <Link href={i.url} key={index} passHref>
                        <span
                          className={`group relative flex items-center transition-all cursor-pointer text-[18px] font-josefin font-[400] ${
                            activeItem === index
                              ? " text-[crimson]"
                              : "text-white"
                          }`}
                        >
                          <span className="relative group-hover:text-[#3b5d8e]">
                            <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 mr-1">
                              [
                            </span>
                            <span className="group-hover:text-[#3b5d8e] transition-all duration-300">
                              {i.name}
                            </span>
                            <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 ml-1">
                              ]
                            </span>
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Mobile menu toggle */}
                <button
                  className="800px:hidden p-2 rounded-full"
                  onClick={() => setOpenSidebar(!openSidebar)}
                >
                  <HiOutlineMenuAlt3 size={24} className="text-gray-200" />
                </button>

                {/* User profile or login button */}
                {user ? (
                  <Link href="/profile" className="hidden 800px:block ml-2">
                    <div className="relative group">
                      <Image
                        src={user?.avatar?.url || avatar}
                        alt="Profile"
                        height={36}
                        width={36}
                        className={`w-8 h-8 rounded-full object-cover transition-all duration-300 ${
                          activeItem === 5
                            ? "ring-2 ring-blue-500 ring-offset-2"
                            : "hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-600 hover:ring-offset-2"
                        }`}
                      />
                    </div>
                  </Link>
                ) : (
                  <button
                    onClick={handleLoginClick}
                    className="hidden 800px:block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium font- rounded-md transition-colors shadow-sm"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Mobile sidebar */}
          {openSidebar && (
            <div
              className="fixed w-full h-screen top-0 left-0 z-[99999] bg-black bg-opacity-50 backdrop-blur-sm"
              onClick={handleClose}
              id="screen"
            >
              <div className="w-64 fixed h-screen top-0 right-0 z-[999999999] bg-white dark:bg-gray-900 overflow-y-auto shadow-xl transition-all duration-300 ease-in-out">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Menu
                    </h2>
                    <button
                      onClick={() => setOpenSidebar(false)}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 dark:text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="py-2">
                  <NavItems
                    activeItem={activeItem}
                    isMobile={true}
                    user={user}
                    setOpen={setOpen}
                    openSidebar={openSidebar}
                    setOpenSidebar={setOpenSidebar}
                  />
                </div>

                {!user && (
                  <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={handleLoginClick}
                      className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
                    >
                      Login
                    </button>
                  </div>
                )}

                <div className="p-4 mt-auto border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} LearnifyHub. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Auth modals */}
        {route === "Login" && open && (
          <CustomModel
            open={open}
            setOpen={setOpen}
            setRoute={setRoute}
            activeItem={activeItem}
            component={Login}
          />
        )}
        {route === "Sign-Up" && open && (
          <CustomModel
            open={open}
            setOpen={setOpen}
            setRoute={setRoute}
            activeItem={activeItem}
            component={SignUp}
          />
        )}
        {route === "Verification" && open && (
          <CustomModel
            open={open}
            setOpen={setOpen}
            setRoute={setRoute}
            activeItem={activeItem}
            component={Verification}
          />
        )}
        <TeachModal
          open={teachModalOpen}
          setOpen={setTeachModalOpen}
          setRoute={setRoute}
        />
      </div>
      {/* Hero Content with Framer Motion */}
      <div className="relative z-40 flex items-center justify-center h-[calc(100%-4rem)] px-6 lg:px-12">
        <div className="max-w-4xl w-full text-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${currentVideoIndex}`}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-5xl font-dancing select-none md:text-4xl lg:text-6xl font-thin text-[#FAF9F6]"
            >
              {currentVideoContent.title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`subtitle-${currentVideoIndex}`}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="font-satisfy font-extralight md:text-lg lg:text-xl text-[#FAF9F6] mt-4"
            >
              {currentVideoContent.subtitle}
            </motion.p>
          </AnimatePresence>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex w-full max-w-lg mx-auto items-center mt-6"
            onSubmit={handleSearch}
          >
            {/* Search form remains the same */}
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <input
                type="text"
                id="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white/20 border border-white/30 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5 backdrop-blur-sm placeholder-gray-300"
                placeholder="Search Courses..."
              />
            </div>
            <button
              type="submit"
              className="ml-2 p-3 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              <FaSearch className="w-4 h-4" />
              <span className="sr-only">Search</span>
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6"
          >
            <h5 className="text-base md:text-lg text-white">
              500k+ people already trust us.{" "}
              <a
                href="/courses"
                className="text-blue-300 underline hover:text-blue-200 transition-colors"
              >
                View Courses
              </a>
            </h5>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
