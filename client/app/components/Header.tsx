

import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import NavItems from "../utils/NavItems";
import { ThemeSwitcher } from "../utils/ThemeSwitcher";
import CustomModel from "../utils/CustomModel";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Verification from "./Auth/Verification";
import TeachModal from "../utils/TechModel";
import { useSelector } from "react-redux";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useSession } from "next-auth/react";
import { useSocialAuthMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";
import avatar from "../../public/assests/download5.png";
import Image from "next/image";
import logo from "../../public/assests/logo-removebg-preview.png"

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  route: string;
  setRoute: (route: string) => void;
}

const Header: FC<Props> = ({ activeItem, setOpen, route, open, setRoute }) => {
  const [active, setActive] = useState<boolean>(false);
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [teachModalOpen, setTeachModalOpen] = useState<boolean>(false);
  const { user } = useSelector((state: any) => state.auth);
  const { data } = useSession();
  const [socialAuth, { isSuccess }] = useSocialAuthMutation();

  const storeUser = useSelector((state: any) => state.user.user);

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

  const handleUserIconClick = () => {
    setOpenSidebar(false);
    setOpen(true);
  };

  return (
    <header className="w-full bg-transparent z-50 top-0">
      <div
        className={`${
          active
            ? "dark:bg-opacity-90 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-16 z-[80] border-b border-gray-200 dark:border-gray-700 shadow-lg transition duration-300"
            : "w-full border-b border-gray-200 dark:border-gray-700 h-16 z-[80]"
        }`}
      >
        <div className="w-[95%] 800px:w-[90%] mx-auto h-full">
          <div className="w-full h-16 flex items-center justify-between">
            {/* Logo and Teach button section */}
            <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="flex items-center space-x-2"
            >
              <Image 
                src={logo} 
                alt="Logo" 
                width={70} 
                height={70} 
                className="object-contain" 
              />
              {/* <span className="text-xl font-semibold text-gray-800 dark:text-white">LearnifyHub</span> */}
            </Link>

              {user && (
                <button
                  onClick={() => setTeachModalOpen(true)}
                  className="hidden 800px:flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  {user.role === "admin" ? "Instructor" : "Teach With LeanifuHub"}
                </button>
              )}
            </div>

            {/* Navigation and user actions */}
            <div className="flex items-center space-x-4">
              <NavItems
                activeItem={activeItem}
                isMobile={false}
                user={user}
                setOpen={setOpen}
                openSidebar={openSidebar}
                setOpenSidebar={setOpenSidebar}
              />
              
              <ThemeSwitcher />
              
              {/* Mobile menu toggle */}
              <button 
                className="800px:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setOpenSidebar(!openSidebar)}
              >
                <HiOutlineMenuAlt3
                  size={24}
                  className="text-gray-700 dark:text-gray-200"
                />
              </button>
              
              {/* User profile or login button */}
              {user ? (
                <Link 
                  href="/profile"
                  className="hidden 800px:block ml-2"
                >
                  <div className="relative group">
                    <Image
                      src={storeUser?.avatar?.url || avatar}
                      alt="Profile"
                      height={400}
                      width={400}
                      className={`w-9 h-9 rounded-full object-cover transition-all duration-300 ${
                        activeItem === 5 
                          ? "ring-2 ring-blue-500 ring-offset-2" 
                          : "hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-600 hover:ring-offset-2"
                      }`}
                    />
                    <span className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></span>
                  </div>
                </Link>
              ) : (
                <button 
                  onClick={handleUserIconClick}
                  className="hidden 800px:block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors shadow-sm"
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
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Menu</h2>
                  <button 
                    onClick={() => setOpenSidebar(false)}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
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
                    onClick={handleUserIconClick}
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
                  >
                    Login
                  </button>
                </div>
              )}
              
              <div className="p-4 mt-auto border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  © {new Date().getFullYear()} LearnifyHub. All rights reserved.
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
    </header>
  );
};

export default Header;


// import React, { FC, useState, useEffect } from "react";

// import React, { FC, useState, useEffect, useRef } from "react";

// import Link from "next/link";
// import NavItems from "../utils/NavItems";
// import { ThemeSwitcher } from "../utils/ThemeSwitcher";
// import CustomModel from "../utils/CustomModel";
// import Login from "./Auth/Login";
// import SignUp from "./Auth/SignUp";
// import Verification from "./Auth/Verification";
// import TeachModal from "../utils/TechModel";
// import { useSelector } from "react-redux";

// import { HiOutlineMenuAlt3 } from "react-icons/hi";

// import { HiOutlineMenuAlt3, HiOutlineAcademicCap } from "react-icons/hi";
// import { FiChevronDown, FiBook, FiUsers, FiGrid, FiHelpCircle } from "react-icons/fi";

// import { useSession } from "next-auth/react";
// import { useSocialAuthMutation } from "@/redux/features/auth/authApi";
// import toast from "react-hot-toast";
// import avatar from "../../public/assests/download5.png";
// import Image from "next/image";

// import logo from "../../public/assests/logo-removebg-preview.png"


// interface Props {
//   open: boolean;
//   setOpen: (open: boolean) => void;
//   activeItem: number;
//   route: string;
//   setRoute: (route: string) => void;
// }

// const Header: FC<Props> = ({ activeItem, setOpen, route, open, setRoute }) => {
//   const [active, setActive] = useState<boolean>(false);
//   const [openSidebar, setOpenSidebar] = useState<boolean>(false);
//   const [teachModalOpen, setTeachModalOpen] = useState<boolean>(false);

//   const { user } = useSelector((state: any) => state.auth);
//   const { data } = useSession();
//   const [socialAuth, { isSuccess }] = useSocialAuthMutation();

//   const [showCoursesFlyout, setShowCoursesFlyout] = useState<boolean>(false);
//   const { user } = useSelector((state: any) => state.auth);
//   const { data } = useSession();
//   const [socialAuth, { isSuccess }] = useSocialAuthMutation();
//   const flyoutRef = useRef<HTMLDivElement>(null);


//   const storeUser = useSelector((state: any) => state.user.user);

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

//       setActive(window.scrollY > 20);

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

//   return (
//     <header 
//       className={`fixed top-5 left-0 right-0 z-50 w-full transition-all duration-300 ${
//         active 
//           ? 'bg-white/20 dark:bg-gray-900/20 backdrop-blur-md shadow-md' 
//           : 'bg-transparent'
//       }`}
//     >
//       <div className="w-[95%] 800px:w-[90%] mx-auto h-16 flex items-center justify-between">
//         <div className="flex items-center space-x-6">
//           <Link href="/" className="flex items-center space-x-2">
//             <Image 
//               src={logo} 
//               alt="Logo" 
//               width={70} 
//               height={70} 
//               className="object-contain brightness-0 invert" 
//             />
//           </Link>

//           {user && (
//             <button
//               onClick={() => setTeachModalOpen(true)}
//               className="hidden 800px:flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-md hover:bg-white/30 transition-colors text-sm font-medium"
//             >
//               {user.role === "admin" ? "Instructor" : "Teach With LearnifyHub"}
//             </button>
//           )}
//         </div>

//         <div className="flex items-center space-x-4">
//           <NavItems
//             activeItem={activeItem}
//             isMobile={false}
//             user={user}
//             setOpen={setOpen}
//             openSidebar={openSidebar}
//             setOpenSidebar={setOpenSidebar}
//             className="text-white"
//           />
          
//           <ThemeSwitcher />
          
//           <button 
//             className="800px:hidden p-2 rounded-full hover:bg-white/20 transition-colors"
//             onClick={() => setOpenSidebar(!openSidebar)}
//           >
//             <HiOutlineMenuAlt3
//               size={24}
//               className="text-white"
//             />
//           </button>
          
//           {user ? (
//             <Link 
//               href="/profile"
//               className="hidden 800px:block ml-2"
//             >
//               <div className="relative group">
//                 <Image
//                   src={storeUser?.avatar?.url || avatar}
//                   alt="Profile"
//                   height={400}
//                   width={400}
//                   className={`w-9 h-9 rounded-full object-cover transition-all duration-300 ${
//                     activeItem === 5 
//                       ? "ring-2 ring-white/50" 
//                       : "hover:ring-2 hover:ring-white/30 hover:ring-offset-2"
//                   }`}
//                 />
//                 <span className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white/20"></span>
//               </div>
//             </Link>
//           ) : (
//             <button 
//               onClick={() => {
//                 setOpenSidebar(false);
//                 setOpen(true);
//               }}
//               className="hidden 800px:block px-5 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-sm font-medium rounded-md transition-colors"
//             >
//               Login
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Modals */}

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (flyoutRef.current && !flyoutRef.current.contains(event.target as Node)) {
//         setShowCoursesFlyout(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
//     if ((e.target as HTMLElement).id === "screen") {
//       setOpenSidebar(!openSidebar);
//     }
//   };

//   const handleUserIconClick = () => {
//     setOpenSidebar(false);
//     setOpen(true);
//   };

//   const courseCategories = [
//     { name: "Programming", icon: <FiBook size={18} />, description: "Learn coding with interactive lessons", courses: ["JavaScript", "Python", "React", "Node.js"] },
//     { name: "Design", icon: <FiGrid size={18} />, description: "Master UI/UX and graphic design skills", courses: ["UI/UX Basics", "Figma Masterclass", "Web Design"] },
//     { name: "Business", icon: <FiUsers size={18} />, description: "Develop entrepreneurial and management skills", courses: ["Marketing", "Finance", "Leadership"] },
//     { name: "Personal Development", icon: <FiHelpCircle size={18} />, description: "Grow your soft skills and mindset", courses: ["Time Management", "Public Speaking"] },
//   ];

//   return (
//     <div className={`w-full sticky top-0 z-50 transition-all duration-300 ${active ? "py-2" : "py-4"}`}>
//       <div className="max-w-7xl mx-auto px-4">
//         <div 
//           className={`
//             ${active ? "bg-white/10 backdrop-blur-xl shadow-lg" : "bg-transparent backdrop-blur-sm"} 
//             w-full p-3 rounded-xl border border-white/10 dark:border-slate-800/20
//             transition-all duration-500
//           `}
//         >
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <Link
//                 href="/"
//                 className="text-xl font-bold tracking-tight font-sans text-gray-800 dark:text-white"
//               >
//                 <span className="text-blue-600 dark:text-blue-400">Learnify</span>Hub
//               </Link>
//             </div>
            
//             <div className="hidden 800px:flex items-center space-x-1">
//               <Link href="/" className={`px-3 py-2 text-sm font-medium rounded-lg ${activeItem === 0 ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-200"} hover:bg-white/10 transition-all duration-200`}>
//                 Home
//               </Link>
              
//               <div className="relative" ref={flyoutRef}>
//                 <button 
//                   onClick={() => setShowCoursesFlyout(!showCoursesFlyout)}
//                   className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-lg ${activeItem === 1 ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-200"} hover:bg-white/10 transition-all duration-200`}
//                 >
//                   <span>Courses</span>
//                   <FiChevronDown size={16} className={`transition-transform duration-200 ${showCoursesFlyout ? "rotate-180" : ""}`} />
//                 </button>
                
//                 {showCoursesFlyout && (
//                   <div className="absolute top-full left-0 mt-2 w-[600px] p-6 rounded-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-slate-700/20 shadow-xl grid grid-cols-2 gap-6 transition-all duration-200 z-50">
//                     {courseCategories.map((category, index) => (
//                       <div key={index} className="group">
//                         <div className="flex items-center space-x-2 mb-2">
//                           <div className="p-1.5 rounded-lg bg-blue-100/80 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
//                             {category.icon}
//                           </div>
//                           <h3 className="font-medium text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
//                             {category.name}
//                           </h3>
//                         </div>
//                         <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
//                           {category.description}
//                         </p>
//                         <ul className="space-y-1">
//                           {category.courses.map((course, idx) => (
//                             <li key={idx}>
//                               <Link href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
//                                 {course}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                     <div className="col-span-2 mt-4 pt-4 border-t border-gray-200 dark:border-slate-700/30">
//                       <Link href="/courses" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
//                         Browse all courses →
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//               </div>
              
//               <Link href="/about" className={`px-3 py-2 text-sm font-medium rounded-lg ${activeItem === 2 ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-200"} hover:bg-white/10 transition-all duration-200`}>
//                 About
//               </Link>
              
//               <Link href="/policy" className={`px-3 py-2 text-sm font-medium rounded-lg ${activeItem === 3 ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-200"} hover:bg-white/10 transition-all duration-200`}>
//                 Policy
//               </Link>
//             </div>
            
//             <div className="flex items-center space-x-3">
//               <ThemeSwitcher />
              
//               {user ? (
//                 <div className="flex items-center space-x-3">
//                   {user.role === "admin" || user.role !== "admin" ? (
//                     <button
//                       onClick={() => setTeachModalOpen(true)}
//                       className="hidden 800px:flex items-center space-x-1 px-4 py-2 bg-blue-600/80 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-all duration-300"
//                     >
//                       <HiOutlineAcademicCap size={18} />
//                       <span>{user.role === "admin" ? "Instructor" : "Teach With Us"}</span>
//                     </button>
//                   ) : null}
                  
//                   <Link href="/profile">
//                     <div className="relative group">
//                       <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-blue-600 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
//                       <div className="relative p-0.5 rounded-full bg-white dark:bg-slate-900">
//                         <Image
//                           src={storeUser?.avatar?.url || avatar}
//                           alt="Profile Picture"
//                           height={36}
//                           width={36}
//                           className="rounded-full object-cover w-8 h-8"
//                         />
//                       </div>
//                     </div>
//                   </Link>
//                 </div>
//               ) : (
//                 <div onClick={handleUserIconClick}>
//                   <button className="hidden 800px:flex items-center space-x-1 px-4 py-2 bg-blue-600/80 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-all duration-300">
//                     <span>Login</span>
//                   </button>
//                 </div>
//               )}
              
//               <div className="800px:hidden">
//                 <button 
//                   className={`p-2 rounded-lg ${openSidebar ? "bg-white/20" : "bg-white/10"} hover:bg-white/20 border border-white/10 dark:border-slate-700/30`}
//                   onClick={() => setOpenSidebar(!openSidebar)}
//                 >
//                   <HiOutlineMenuAlt3
//                     size={20}
//                     className="text-gray-700 dark:text-white"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       {openSidebar && (
//         <div
//           className="fixed w-full h-screen top-0 left-0 z-[99999] bg-black/20 backdrop-blur-sm"
//           onClick={handleClose}
//           id="screen"
//         >
//           <div className="w-[80%] fixed h-screen top-0 right-0 z-[999999999] bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl overflow-y-auto transition-all duration-300 ease-in-out">
//             <div className="p-6 border-b border-white/20 dark:border-slate-700/20">
//               <Link
//                 href="/"
//                 className="text-xl font-bold tracking-tight font-sans text-gray-800 dark:text-white"
//               >
//                 <span className="text-blue-600 dark:text-blue-400">Learnify</span>Hub
//               </Link>
//             </div>
            
//             <div className="p-6 space-y-6">
//               <Link href="/" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 dark:hover:bg-slate-800/30 transition-all duration-200">
//                 <span className={`text-base font-medium ${activeItem === 0 ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-200"}`}>Home</span>
//               </Link>
              
//               <div>
//                 <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 dark:hover:bg-slate-800/30 transition-all duration-200">
//                   <span className={`text-base font-medium ${activeItem === 1 ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-200"}`}>Courses</span>
//                 </div>
//                 <div className="ml-4 mt-2 space-y-4">
//                   {courseCategories.map((category, index) => (
//                     <div key={index} className="mt-3">
//                       <div className="flex items-center space-x-2 mb-2">
//                         <div className="p-1 rounded-md bg-blue-100/80 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
//                           {category.icon}
//                         </div>
//                         <h3 className="font-medium text-gray-800 dark:text-white">
//                           {category.name}
//                         </h3>
//                       </div>
//                       <ul className="space-y-1 ml-8">
//                         {category.courses.map((course, idx) => (
//                           <li key={idx}>
//                             <Link href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
//                               {course}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               <Link href="/about" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 dark:hover:bg-slate-800/30 transition-all duration-200">
//                 <span className={`text-base font-medium ${activeItem === 2 ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-200"}`}>About</span>
//               </Link>
              
//               <Link href="/policy" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 dark:hover:bg-slate-800/30 transition-all duration-200">
//                 <span className={`text-base font-medium ${activeItem === 3 ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-200"}`}>Policy</span>
//               </Link>
//             </div>
            
//             {user ? (
//               user.role === "admin" || user.role !== "admin" ? (
//                 <div className="px-6 py-3">
//                   <button
//                     onClick={() => {
//                       setOpenSidebar(false);
//                       setTeachModalOpen(true);
//                     }}
//                     className="w-full flex items-center justify-center space-x-2 py-2.5 bg-blue-600/80 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-all duration-300"
//                   >
//                     <HiOutlineAcademicCap size={18} />
//                     <span>{user.role === "admin" ? "Instructor Dashboard" : "Teach With Us"}</span>
//                   </button>
//                 </div>
//               ) : null
//             ) : (
//               <div className="px-6 py-3">
//                 <button 
//                   onClick={() => {
//                     setOpenSidebar(false);
//                     setOpen(true);
//                   }}
//                   className="w-full py-2.5 bg-blue-600/80 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-all duration-300"
//                 >
//                   Login
//                 </button>
//               </div>
//             )}
            
//             <div className="absolute bottom-8 left-0 right-0 p-4 text-center">
//               <p className="text-xs text-gray-500 dark:text-gray-400">
//                 © {new Date().getFullYear()} LearnifyHub
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {route === "Login" && open && (
//         <CustomModel
//           open={open}
//           setOpen={setOpen}
//           setRoute={setRoute}
//           activeItem={activeItem}
//           component={Login}
//         />
//       )}
//       {route === "Sign-Up" && open && (
//         <CustomModel
//           open={open}
//           setOpen={setOpen}
//           setRoute={setRoute}
//           activeItem={activeItem}
//           component={SignUp}
//         />
//       )}
//       {route === "Verification" && open && (
//         <CustomModel
//           open={open}
//           setOpen={setOpen}
//           setRoute={setRoute}
//           activeItem={activeItem}
//           component={Verification}
//         />
//       )}
//       <TeachModal
//         open={teachModalOpen}
//         setOpen={setTeachModalOpen}
//         setRoute={setRoute}
//       />

//     </header>

//     </div>

//   );
// };

// export default Header;