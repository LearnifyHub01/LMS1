// // import React from "react";
// // import Link from "next/link";
// // import { X, Instagram, LinkedIn, YouTube, Facebook } from "@mui/icons-material";
// // import FitbitIcon from '@mui/icons-material/Fitbit';
// // type Props = {};

// // const Footer: React.FC<Props> = () => {
// //   return (
// //     <footer className="w-full bg-gray-100 dark:bg-gray-900 transition-colors duration-400">
// //       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
// //           {/* 1st Column - Logo Section (Moved to Left) */}
// //           <div className="text-left flex flex-col items-start justify-start">
// //             <Link
// //               href="/"
// //               className="inline-block mb-6 transition-transform duration-300 hover:scale-105"
// //             >
// //               <div className="flex items-center space-x-2">
// //                 <span className="w-12 h-12 bg-indigo-500 dark:bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
// //                   <FitbitIcon/>
// //                 </span>
// //                 <span className="text-2xl font-bold text-gray-900 dark:text-white hidden sm:inline">
// //                   LearnifyHub
// //                 </span>
// //               </div>
// //             </Link>
// //           </div>

// //           {/* 2nd Column - About */}
// //           <div className="text-left">
// //             <h4 className="text-lg text-gray-900 dark:text-gray-100 font-medium mb-7">
// //               About
// //             </h4>
// //             <ul className="text-sm transition-all duration-500">
// //               <li className="mb-6">
// //                 <Link
// //                   href="/about"
// //                   className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
// //                 >
// //                   Our Story
// //                 </Link>
// //               </li>
// //               <li className="mb-6">
// //                 <Link
// //                   href="/policy"
// //                   className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
// //                 >
// //                   Privacy Policy
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   href="/faq"
// //                   className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
// //                 >
// //                   FAQ
// //                 </Link>
// //               </li>
// //             </ul>
// //           </div>

// //           {/* 3rd Column - Quick Links */}
// //           <div className="text-left">
// //             <h4 className="text-lg text-gray-900 dark:text-gray-100 font-medium mb-7">
// //               Quick Links
// //             </h4>
// //             <ul className="text-sm transition-all duration-500">
// //               <li className="mb-6">
// //                 <Link
// //                   href="/courses"
// //                   className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
// //                 >
// //                   Courses
// //                 </Link>
// //               </li>
// //               <li className="mb-6">
// //                 <Link
// //                   href="/profile"
// //                   className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
// //                 >
// //                   My Account
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   href="/courses-dashboard"
// //                   className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
// //                 >
// //                   Courses Dashboard
// //                 </Link>
// //               </li>
// //             </ul>
// //           </div>

// //           {/* 4th Column - Contact Us */}
// //           <div className="text-left">
// //             <h4 className="text-lg text-gray-900 dark:text-gray-100 font-medium mb-7">
// //               Contact Us
// //             </h4>
// //             <div className="text-sm text-gray-600 dark:text-gray-400">
// //               <p className="mb-4">Email: learnifyhubplatform@gmail.com</p>
// //               <p className="mb-4">Phone: +1 (123) 456-7890</p>
// //               <a
// //                 href="mailto:learnifyhubplatform@gmail.com?subject=Query%20About%20Learnify%20LMS&body=Hello%20Learnify%20Team,%0D%0A%0D%0AI%20have%20a%20question%20about%20your%20LMS%20platform.%20Could%20you%20please%20assist%20me%20with%20[insert%20your%20query%20here]?%0D%0A%0D%0AThanks,%0D%0A[Your%20Name]"
// //                 className="inline-block py-2.5 px-5 bg-blue-500 dark:bg-blue-600 rounded-full text-xs text-white transition-all duration-500 hover:bg-blue-600 dark:hover:bg-blue-700"
// //               >
// //                 Get in touch
// //               </a>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Enhanced Bottom Section */}
// //         <div className="py-7 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center">
// //           <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">
// //             © LearnifyHub {new Date().getFullYear()}, All rights reserved.
// //           </p>
// //           <div className="flex justify-center space-x-4">
// //             <a
// //               href="https://twitter.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="w-9 h-9 rounded-full bg-gray-600 dark:bg-gray-700 flex justify-center items-center hover:bg-black dark:hover:bg-black transition-colors duration-300"
// //             >
// //               <X className="text-white" />
// //             </a>
// //             <a
// //               href="https://facebook.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="w-9 h-9 rounded-full bg-gray-600 dark:bg-gray-700 flex justify-center items-center hover:bg-[#316FF6] dark:hover:bg-[#316FF6] transition-colors duration-300"
// //             >
// //               <Facebook className="text-white" />
// //             </a>
// //             <a
// //               href="https://instagram.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="w-9 h-9 rounded-full bg-gray-600 dark:bg-gray-700 flex justify-center items-center hover:hover:bg-pink-600 dark:hover:bg-pink-600 transition-colors duration-300"
// //             >
// //               <Instagram className="text-white" />
// //             </a>
// //             <a
// //               href="https://linkedin.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="w-9 h-9 rounded-full bg-gray-600 dark:bg-gray-700 flex justify-center items-center hover:bg-[#0077B5] dark:hover:bg-[#0077B5] transition-colors duration-300"
// //             >
// //               <LinkedIn className="text-white" />
// //             </a>
// //             <a
// //               href="https://youtube.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="w-9 h-9 rounded-full bg-gray-600 dark:bg-gray-700 flex justify-center items-center hover:bg-[#FF0000] dark:hover:bg-[#FF0000] transition-colors duration-300"
// //             >
// //               <YouTube className="text-white" />
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;

// import React, { useState } from "react";
// import Link from "next/link";
// import { FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaFacebook, FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { HiChip } from "react-icons/hi";

// const Footer: React.FC = () => {
//   const [openSection, setOpenSection] = useState<string | null>(null);

//   const toggleSection = (section: string) => {
//     if (openSection === section) {
//       setOpenSection(null);
//     } else {
//       setOpenSection(section);
//     }
//   };

//   return (
//     <footer className="w-full bg-black text-white">
//       <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
//         {/* Main Footer Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
//           {/* 1st Column - Logo Section */}
//           <div className="text-left flex flex-col items-start justify-start">
//             <Link href="/" className="inline-block mb-6 transition-transform duration-300 hover:scale-105">
//               <div className="flex items-center space-x-2">
//                 <span className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
//                   <HiChip className="w-6 h-6" />
//                 </span>
//                 <span className="text-2xl font-bold text-white font-poppins hidden sm:inline">
//                   LearnifyHub
//                 </span>
//               </div>
//             </Link>
//             <p className="text-gray-400 mt-4 text-sm max-w-xs">
//               Revolutionizing online education with expert-led courses, interactive learning experiences, and career-defining insights.
//             </p>
//           </div>

//           {/* 2nd Column - About */}
//           <div className="text-left">
//             <div 
//               className="flex justify-between items-center cursor-pointer sm:cursor-default mb-6"
//               onClick={() => toggleSection('about')}
//             >
//               <h4 className="text-lg text-white font-medium font-poppins">
//                 About
//               </h4>
//               <div className="sm:hidden">
//                 {openSection === 'about' ? <FaChevronUp /> : <FaChevronDown />}
//               </div>
//             </div>
//             <div className={`overflow-hidden transition-all duration-300 ${
//               openSection === 'about' || window.innerWidth >= 640 
//                 ? 'max-h-64' 
//                 : 'max-h-0 sm:max-h-64'
//             }`}>
//               <ul className="text-sm space-y-4">
//                 <li>
//                   <Link
//                     href="/about"
//                     className="text-gray-400 hover:text-green-500 transition-colors duration-300"
//                   >
//                     Our Story
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/teachers"
//                     className="text-gray-400 hover:text-green-500 transition-colors duration-300"
//                   >
//                     Our Teachers
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/policy"
//                     className="text-gray-400 hover:text-green-500 transition-colors duration-300"
//                   >
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/faq"
//                     className="text-gray-400 hover:text-green-500 transition-colors duration-300"
//                   >
//                     FAQ
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* 3rd Column - Quick Links */}
//           <div className="text-left">
//             <div 
//               className="flex justify-between items-center cursor-pointer sm:cursor-default mb-6"
//               onClick={() => toggleSection('learning')}
//             >
//               <h4 className="text-lg text-white font-medium font-poppins">
//                 Learning
//               </h4>
//               <div className="sm:hidden">
//                 {openSection === 'learning' ? <FaChevronUp /> : <FaChevronDown />}
//               </div>
//             </div>
//             <div className={`overflow-hidden transition-all duration-300 ${
//               openSection === 'learning' || window.innerWidth >= 640 
//                 ? 'max-h-64' 
//                 : 'max-h-0 sm:max-h-64'
//             }`}>
//               <ul className="text-sm space-y-4">
//                 <li>
//                   <Link
//                     href="/courses"
//                     className="text-gray-400 hover:text-green-500 transition-colors duration-300"
//                   >
//                     Explore Courses
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/profile"
//                     className="text-gray-400 hover:text-green-500 transition-colors duration-300"
//                   >
//                     My Account
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/courses-dashboard"
//                     className="text-gray-400 hover:text-green-500 transition-colors duration-300"
//                   >
//                     Learning Dashboard
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/certificates"
//                     className="text-gray-400 hover:text-green-500 transition-colors duration-300"
//                   >
//                     Certificates
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* 4th Column - Contact Us (keeping existing functionality as requested) */}
//           <div className="text-left">
//             <div 
//               className="flex justify-between items-center cursor-pointer sm:cursor-default mb-6"
//               onClick={() => toggleSection('connect')}
//             >
//               <h4 className="text-lg text-white font-medium font-poppins">
//                 Connect With Us
//               </h4>
//               <div className="sm:hidden">
//                 {openSection === 'connect' ? <FaChevronUp /> : <FaChevronDown />}
//               </div>
//             </div>
//             <div className={`overflow-hidden transition-all duration-300 ${
//               openSection === 'connect' || window.innerWidth >= 640 
//                 ? 'max-h-64' 
//                 : 'max-h-0 sm:max-h-64'
//             }`}>
//               <div className="text-sm text-gray-400 space-y-4">
//                 <p>Email: learnifyhub@education.com</p>
//                 <p>Phone: +1 (123) 456-7890</p>
//                 <button className="mt-2 px-6 py-2 bg-[#323232] hover:bg-green-500 text-white font-medium rounded-lg transition-all duration-300 font-poppins text-sm">
//                   Get in touch
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Bottom Section */}
//         <div className="py-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
//           <p className="text-sm text-gray-400 mb-4 sm:mb-0 font-poppins">
//             © LearnifyHub {new Date().getFullYear()}, All rights reserved.
//           </p>
//           <div className="flex justify-center space-x-4">
//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg-[#323232] flex justify-center items-center hover:bg-green-500 transition-colors duration-300"
//             >
//               <FaTwitter className="text-white w-5 h-5" />
//             </a>
//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg-[#323232] flex justify-center items-center hover:bg-green-500 transition-colors duration-300"
//             >
//               <FaFacebook className="text-white w-5 h-5" />
//             </a>
//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg-[#323232] flex justify-center items-center hover:bg-green-500 transition-colors duration-300"
//             >
//               <FaInstagram className="text-white w-5 h-5" />
//             </a>
//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg-[#323232] flex justify-center items-center hover:bg-green-500 transition-colors duration-300"
//             >
//               <FaLinkedinIn className="text-white w-5 h-5" />
//             </a>
//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg-[#323232] flex justify-center items-center hover:bg-green-500 transition-colors duration-300"
//             >
//               <FaYoutube className="text-white w-5 h-5" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaFacebook, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { HiChip } from "react-icons/hi";

const Footer: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen size detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* 1st Column - Logo Section */}
          <div className="text-left flex flex-col items-start justify-start">
            <Link href="/" className="inline-block mb-6 transition-transform duration-300 hover:scale-105">
              <div className="flex items-center space-x-2">
                <span className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  <HiChip className="w-6 h-6" />
                </span>
                <span className="text-2xl font-bold text-white font-poppins hidden sm:inline">
                  LearnifyHub
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mt-4 text-sm max-w-xs">
              Revolutionizing online education with expert-led courses, interactive learning experiences, and career-defining insights.
            </p>
          </div>

          {/* 2nd Column - About */}
          <div className="text-left">
            <div 
              className="flex justify-between items-center cursor-pointer sm:cursor-default mb-6"
              onClick={() => toggleSection('about')}
            >
              <h4 className="text-lg text-white font-medium font-poppins">
                About
              </h4>
              <div className="sm:hidden">
                {openSection === 'about' ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${
              openSection === 'about' || !isMobile 
                ? 'max-h-64' 
                : 'max-h-0'
            }`}>
              <ul className="text-sm space-y-4">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/teachers" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                    Our Teachers
                  </Link>
                </li>
                <li>
                  <Link href="/policy" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 3rd Column - Quick Links */}
          <div className="text-left">
            <div 
              className="flex justify-between items-center cursor-pointer sm:cursor-default mb-6"
              onClick={() => toggleSection('learning')}
            >
              <h4 className="text-lg text-white font-medium font-poppins">
                Learning
              </h4>
              <div className="sm:hidden">
                {openSection === 'learning' ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${
              openSection === 'learning' || !isMobile 
                ? 'max-h-64' 
                : 'max-h-0'
            }`}>
              <ul className="text-sm space-y-4">
                <li>
                  <Link href="/courses" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                    Explore Courses
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                    My Account
                  </Link>
                </li>
                <li>
                  <Link href="/courses-dashboard" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                    Learning Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/certificates" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                    Certificates
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 4th Column - Contact Us */}
          <div className="text-left">
            <div 
              className="flex justify-between items-center cursor-pointer sm:cursor-default mb-6"
              onClick={() => toggleSection('connect')}
            >
              <h4 className="text-lg text-white font-medium font-poppins">
                Connect With Us
              </h4>
              <div className="sm:hidden">
                {openSection === 'connect' ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${
              openSection === 'connect' || !isMobile 
                ? 'max-h-64' 
                : 'max-h-0'
            }`}>
              <div className="text-sm text-gray-400 space-y-4">
                <p>Email: learnifyhub@education.com</p>
                <p>Phone: +1 (123) 456-7890</p>
                <button className="mt-2 px-6 py-2 bg-[#323232] hover:bg-green-500 text-white font-medium rounded-lg transition-all duration-300 font-poppins text-sm">
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="py-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 sm:mb-0 font-poppins">
            © LearnifyHub {new Date().getFullYear()}, All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#323232] flex justify-center items-center hover:bg-green-500 transition-colors duration-300">
              <FaTwitter className="text-white w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#323232] flex justify-center items-center hover:bg-green-500 transition-colors duration-300">
              <FaFacebook className="text-white w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#323232] flex justify-center items-center hover:bg-green-500 transition-colors duration-300">
              <FaInstagram className="text-white w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#323232] flex justify-center items-center hover:bg-green-500 transition-colors duration-300">
              <FaLinkedinIn className="text-white w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#323232] flex justify-center items-center hover:bg-green-500 transition-colors duration-300">
              <FaYoutube className="text-white w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;