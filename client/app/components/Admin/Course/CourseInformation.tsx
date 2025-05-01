// import React, { FC, useState } from "react";
// import { styles } from "@/app/styles/style";
// type Props = {
//   courseInfo: any;
//   setCourseInfo: (courseInfo: any) => void;
//   active: number;
//   setActive: (active: number) => void;
// };
// const CourseInformation: FC<Props> = ({
//   courseInfo,
//   setCourseInfo,
//   active,
//   setActive,
// }) => {
//   const [dragging, setDragging] = useState(false);

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     setActive(active + 1);
//   };

//   const handleFileChange = (e: any) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e: any) => {
//         if (reader.readyState === 2) {
//           setCourseInfo({ ...courseInfo, thumbnail: reader.result });
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };
//   const handleDragOver = (e: any) => {
//     e.preventDefault();
//     setDragging(true);
//   };

//   const handleDragLeave = (e: any) => {
//     e.preventDefault();
//     setDragging(false);
//   };

//   const handleDrop = (e: any) => {
//     e.preventDefault();
//     setDragging(false);

//     const file = e.dataTransfer.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setCourseInfo({ ...courseInfo, thumbnail: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };
//   return (
//     <div className="w-[100%] p-3 ml-2">
//       <form onSubmit={handleSubmit} className={`${styles.label}`}>
//         <div>
//           <label htmlFor="" className={`${styles.label}`}>
//             Course Name
//           </label>
//           <input
//             type="name"
//             name=""
//             required
//             value={courseInfo.name}
//             onChange={(e: any) =>
//               setCourseInfo({ ...courseInfo, name: e.target.value })
//             }
//             id="name"
//             placeholder="MERN stack LMS platform with next 13"
//             className={`${styles.input}`}
//           />
//         </div>
//         <br />
//         <div className="mb-5">
//           <label htmlFor="" className={`${styles.label}`}>
//             Course Description
//           </label>
//           <textarea
//             name=""
//             id=""
//             cols={30}
//             rows={5}
//             placeholder="Write Course Description..."
//             className={`${styles.input} !h-auto !py-2 placeholder-gray-400 dark:placeholder-gray-500`}
//             value={courseInfo.description}
//             onChange={(e) =>
//               setCourseInfo({ ...courseInfo, description: e.target.value })
//             }
//           />
//         </div>
//         <br />
//         <div className="flex items-center space-x-4">
//           <div className="inline-flex items-center">
//             <span className="mr-2 text-sm text-gray-600 dark:text-gray-400">
//               Category:
//             </span>
//             <select className="text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
//               <option value="" hidden>
//                 Select a category
//               </option>
//               <option value="web-development">Web Development</option>
//               <option value="app-development">App Development</option>
//               <option value="design">Design</option>
//               <option value="data-science">Data Science</option>
//               <option value="ai-ml">AI/ML</option>
//             </select>
//           </div>
//         </div>
//         <br />
//         <div className="w-full flex justify-between">
//           <div className="w-[45%]">
//             <label htmlFor="" className={`${styles.label}`}>
//               Course Price
//             </label>
//             <input
//               type="number"
//               name=""
//               required
//               value={courseInfo.price}
//               onChange={(e: any) =>
//                 setCourseInfo({ ...courseInfo, price: e.target.value })
//               }
//               id="price"
//               placeholder="29"
//               className={`${styles.input}`}
//             ></input>
//           </div>
//           <div className="w-[50%]">
//             <label htmlFor="" className={`${styles.label} w-[50%]`}>
//               Estimated Price (optional)
//             </label>
//             <input
//               type="number"
//               name=""
//               value={courseInfo.estimatedPrice}
//               onChange={(e: any) =>
//                 setCourseInfo({ ...courseInfo, estimatedPrice: e.target.value })
//               }
//               id="estimatedPrice"
//               placeholder="79"
//               className={`${styles.input}`}
//             />
//           </div>
//         </div>
//         <br />
//         <div>
//           <label htmlFor="email" className={`${styles.label}`}>
//             Course Tags
//           </label>
//           <input
//             type="text"
//             name=""
//             required
//             value={courseInfo.tags}
//             onChange={(e: any) =>
//               setCourseInfo({ ...courseInfo, tags: e.target.value })
//             }
//             id="tags"
//             placeholder="MERN,Next 13,socket.io,tailwind css,LMS"
//             className={`${styles.input}`}
//           />
//         </div>
//         <br />
//         <div className="w-full flex justify-between">
//           <div className="w-[45%]">
//             <label htmlFor="" className={`${styles.label}`}>
//               Course Level
//             </label>
//             <input
//               type="text"
//               name=""
//               required
//               value={courseInfo.level}
//               onChange={(e: any) =>
//                 setCourseInfo({ ...courseInfo, level: e.target.value })
//               }
//               id="level"
//               placeholder="Beginner/Intermediate/Expert"
//               className={`${styles.input}`}
//             ></input>
//           </div>
//           <div className="w-[50%]">
//             <label htmlFor="" className={`${styles.label} w-[50%]`}>
//               Demo Url
//             </label>
//             <input
//               type="text"
//               name=""
//               required
//               value={courseInfo.demoUrl}
//               onChange={(e: any) =>
//                 setCourseInfo({ ...courseInfo, demoUrl: e.target.value })
//               }
//               id="demoUrl"
//               placeholder="ofj344"
//               className={`${styles.input}`}
//             />
//           </div>
//         </div>
//         <br />
//         <div className="w-full">
//           <input
//             type="file"
//             accept="image/*"
//             id="file"
//             className="hidden"
//             onChange={handleFileChange}
//           />
//           <label
//             htmlFor="file"
//             className={`w-full min-h-[10vh] p-3 border flex items-center justify-center black:border-white black:border-white  ${
//               dragging ? "bg-blue-500" : "bg-transparent"
//             }`}
//             onDragOver={handleDragOver}
//             onDragLeave={handleDragLeave}
//             onDrop={handleDrop}
//           >
//             {courseInfo.thumbnail ? (
//               <img
//                 src={courseInfo.thumbnail}
//                 alt=""
//                 className="max-h-full w-full object-cover"
//               />
//             ) : (
//               <span className="text-black dark:text-white">
//                 Drag and drop your thumbnail hear or click to browser
//               </span>
//             )}
//           </label>
//         </div>
//         <br />
//         <div className="w-full flex items-center justify-end">
//           <input
//             type="submit"
//             value="Next"
//             className="w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
//           />
//         </div>
//       </form>
//       <br />
//     </div>
//   );
// };

// export default CourseInformation;

//----------------------------------------------------------------------------------------------------------------//

// import React, { FC, useState } from "react";
// import {
//   MdCloudUpload,
//   MdTag,
//   MdOutlineSchool,
//   MdLink,
//   MdInfo,
//   MdDescription,
//   MdArrowForward,
//   MdCategory,
// } from "react-icons/md";
// import { FaRupeeSign } from "react-icons/fa";

// type Props = {
//   courseInfo: any;
//   setCourseInfo: (courseInfo: any) => void;
//   active: number;
//   setActive: (active: number) => void;
// };

// const CourseInformation: FC<Props> = ({
//   courseInfo,
//   setCourseInfo,
//   active,
//   setActive,
// }) => {
//   const [dragging, setDragging] = useState(false);

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     setActive(active + 1);
//   };

//   const handleFileChange = (e: any) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e: any) => {
//         if (reader.readyState === 2) {
//           setCourseInfo({ ...courseInfo, thumbnail: reader.result });
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleDragOver = (e: any) => {
//     e.preventDefault();
//     setDragging(true);
//   };

//   const handleDragLeave = (e: any) => {
//     e.preventDefault();
//     setDragging(false);
//   };

//   const handleDrop = (e: any) => {
//     e.preventDefault();
//     setDragging(false);

//     const file = e.dataTransfer.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setCourseInfo({ ...courseInfo, thumbnail: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleCategoryChange = (e: any) => {
//     setCourseInfo({ ...courseInfo, category: e.target.value });
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden p-4 sm:p-6">
//       <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 flex items-center">
//         <MdInfo className="mr-2 text-blue-500" size={24} />
//         Course Information
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-5">
//         {/* Thumbnail Upload - Prominent at top */}
//         <div className="mb-6">
//           <input
//             type="file"
//             accept="image/*"
//             id="file"
//             className="hidden"
//             onChange={handleFileChange}
//           />
//           <label
//             htmlFor="file"
//             className={`w-full h-48 sm:h-64 relative flex flex-col items-center justify-center border-2 border-dashed rounded-lg transition-all duration-200 ${
//               dragging
//                 ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
//                 : courseInfo.thumbnail
//                 ? "border-green-400 bg-green-50 dark:bg-green-900/10"
//                 : "border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
//             }`}
//             onDragOver={handleDragOver}
//             onDragLeave={handleDragLeave}
//             onDrop={handleDrop}
//           >
//             {courseInfo.thumbnail ? (
//               <div className="relative w-full h-full">
//                 <img
//                   src={courseInfo.thumbnail}
//                   alt="Course thumbnail"
//                   className="w-full h-full object-cover rounded-lg"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-lg">
//                   <div className="text-white bg-black bg-opacity-75 px-4 py-2 rounded-lg flex items-center">
//                     <MdCloudUpload className="mr-2" size={20} />
//                     Change Image
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="text-center p-4 sm:p-6">
//                 <MdCloudUpload className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-gray-400 dark:text-gray-500 mb-2" />
//                 <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                   Drag and drop your thumbnail here
//                 </p>
//                 <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
//                   or click to browse files
//                 </p>
//                 <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
//                   PNG, JPG up to 10MB
//                 </p>
//               </div>
//             )}
//           </label>
//         </div>

//         {/* Course Basic Information */}
//         <div className="space-y-4">
//           <div className="relative">
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center">
//               <MdInfo className="mr-2 text-blue-500" size={18} />
//               Course Name
//             </label>
//             <input
//               type="text"
//               required
//               value={courseInfo.name}
//               onChange={(e: any) =>
//                 setCourseInfo({ ...courseInfo, name: e.target.value })
//               }
//               placeholder="e.g., MERN Stack LMS Platform with Next.js 13"
//               className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200"
//             />
//           </div>

//           <div className="relative">
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center">
//               <MdDescription className="mr-2 text-blue-500" size={18} />
//               Course Description
//             </label>
//             <textarea
//               cols={30}
//               rows={3}
//               placeholder="Provide a compelling description of your course..."
//               className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200 resize-none"
//               value={courseInfo.description}
//               onChange={(e) =>
//                 setCourseInfo({ ...courseInfo, description: e.target.value })
//               }
//             />
//             <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//               A detailed description will help students understand what they'll
//               learn
//             </p>
//           </div>
//         </div>

//         {/* Category */}
//         <div className="relative">
//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center">
//             <MdCategory className="mr-2 text-blue-500" size={18} />
//             Category
//           </label>
//           <div className="relative">
//             <select
//               className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200 appearance-none"
//               value={courseInfo.category || ""}
//               onChange={handleCategoryChange}
//             >
//               <option value="" disabled hidden>
//                 Select a category
//               </option>
//               <option value="web-development">Web Development</option>
//               <option value="app-development">App Development</option>
//               <option value="design">Design</option>
//               <option value="data-science">Data Science</option>
//               <option value="ai-ml">AI/ML</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-400">
//               <MdArrowForward className="transform rotate-90" size={18} />
//             </div>
//           </div>
//         </div>

//         {/* Two Column Layout for Price */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//           <div className="relative">
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center">
//               <FaRupeeSign className="mr-2 text-blue-500" size={18} />
//               Course Price (INR)
//             </label>
//             <input
//               type="number"
//               required
//               value={courseInfo.price}
//               onChange={(e: any) =>
//                 setCourseInfo({ ...courseInfo, price: e.target.value })
//               }
//               placeholder="29"
//               className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200"
//             />
//           </div>

//           <div className="relative">
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center">
//               <FaRupeeSign className="mr-2 text-blue-500" size={18} />
//               Original Price (INR){" "}
//               <span className="text-gray-500 text-xs ml-1">(optional)</span>
//             </label>
//             <input
//               type="number"
//               value={courseInfo.estimatedPrice}
//               onChange={(e: any) =>
//                 setCourseInfo({ ...courseInfo, estimatedPrice: e.target.value })
//               }
//               placeholder="79"
//               className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200"
//             />
//           </div>
//         </div>

//         {/* Tags */}
//         <div className="relative">
//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center">
//             <MdTag className="mr-2 text-blue-500" size={18} />
//             Course Tags{" "}
//             <span className="text-gray-500 text-xs ml-1">
//               (comma separated)
//             </span>
//           </label>
//           <input
//             type="text"
//             required
//             value={courseInfo.tags}
//             onChange={(e: any) =>
//               setCourseInfo({ ...courseInfo, tags: e.target.value })
//             }
//             placeholder="MERN, Next.js 13, socket.io, tailwind css, LMS"
//             className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200"
//           />
//           <div className="mt-2 flex flex-wrap gap-2">
//             {courseInfo.tags &&
//               courseInfo.tags.split(",").map(
//                 (tag: string, index: number) =>
//                   tag.trim() && (
//                     <span
//                       key={index}
//                       className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
//                     >
//                       {tag.trim()}
//                     </span>
//                   )
//               )}
//           </div>
//         </div>

//         {/* Two Column Layout for Level and Demo */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//           <div className="relative">
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center">
//               <MdOutlineSchool className="mr-2 text-blue-500" size={18} />
//               Course Level
//             </label>
//             <div className="relative">
//               <select
//                 value={courseInfo.level}
//                 onChange={(e: any) =>
//                   setCourseInfo({ ...courseInfo, level: e.target.value })
//                 }
//                 className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200 appearance-none"
//               >
//                 <option value="" disabled hidden>
//                   Select a level
//                 </option>
//                 <option value="Beginner">Beginner</option>
//                 <option value="Intermediate">Intermediate</option>
//                 <option value="Expert">Expert</option>
//                 <option value="All Levels">All Levels</option>
//               </select>
//               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-400">
//                 <MdArrowForward className="transform rotate-90" size={18} />
//               </div>
//             </div>
//           </div>

//           <div className="relative">
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center">
//               <MdLink className="mr-2 text-blue-500" size={18} />
//               Demo URL
//             </label>
            // <input
            //   type="text"
            //   required
            //   value={courseInfo.demoUrl}
            //   onChange={(e: any) =>
            //     setCourseInfo({ ...courseInfo, demoUrl: e.target.value })
            //   }
            //   placeholder="https://example.com/demo"
            //   className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200"
            // />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="pt-4 sm:pt-6">
//           <button
//             type="submit"
//             className="w-full sm:w-auto flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
//           >
//             Continue to Next Step
//             <MdArrowForward className="ml-2" size={18} />
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CourseInformation;

//-------------------------------------------------------------------------------------------------------------//

import React, { FC, useState } from "react";
import {
  MdCloudUpload,
  MdTag,
  MdOutlineSchool,
  MdLink,
  MdInfo,
  MdDescription,
  MdArrowForward,
  MdCategory,
  MdCheck,
  MdClose,
} from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

type Props = {
  courseInfo: any;
  setCourseInfo: (courseInfo: any) => void;
  active: number;
  setActive: (active: number) => void;
};

const CourseInformation: FC<Props> = ({
  courseInfo,
  setCourseInfo,
  active,
  setActive,
}) => {
  const [dragging, setDragging] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!courseInfo.name?.trim()) newErrors.name = "Course name is required";
    if (!courseInfo.description?.trim()) newErrors.description = "Description is required";
    if (!courseInfo.category) newErrors.category = "Category is required";
    if (!courseInfo.price) newErrors.price = "Price is required";
    if (!courseInfo.tags?.trim()) newErrors.tags = "At least one tag is required";
    if (!courseInfo.level) newErrors.level = "Course level is required";
    if (!courseInfo.demoUrl?.trim()) newErrors.demoUrl = "Demo URL is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setActive(active + 1);
    } else {
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        element.focus();
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setCourseInfo({ ...courseInfo, thumbnail: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCourseInfo({ ...courseInfo, thumbnail: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseInfo({ ...courseInfo, category: e.target.value });
    if (errors.category) {
      const { category, ...rest } = errors;
      setErrors(rest);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    field: string
  ) => {
    setCourseInfo({ ...courseInfo, [field]: e.target.value });
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden p-4 sm:p-6 lg:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 flex items-center">
        <MdInfo className="mr-2 text-blue-500" size={28} />
        Course Information
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Thumbnail Upload - Prominent at top */}
        <div className="mb-6">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
            <MdCloudUpload className="mr-2 text-blue-500" size={18} />
            Course Thumbnail
          </label>
          <input
            type="file"
            accept="image/*"
            id="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file"
            className={`w-full h-56 sm:h-72 md:h-80 lg:h-96 relative flex flex-col items-center justify-center border-2 border-dashed rounded-lg transition-all duration-200 ${
              dragging
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                : courseInfo.thumbnail
                ? "border-green-400 bg-green-50 dark:bg-green-900/10"
                : "border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {courseInfo.thumbnail ? (
              <div className="relative w-full h-full">
                <img
                  src={courseInfo.thumbnail}
                  alt="Course thumbnail"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="w-full h-56 sm:h-72 md:h-80 lg:h-96 absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-lg">
                  <div className="text-white bg-black bg-opacity-75 px-4 py-2 rounded-lg flex items-center">
                    <MdCloudUpload className="mr-2" size={20} />
                    Change Image
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center p-4 sm:p-6">
                <MdCloudUpload className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-gray-400 dark:text-gray-500 mb-2" />
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Drag and drop your thumbnail here
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  or click to browse files
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  PNG, JPG up to 10MB
                </p>
              </div>
            )}
          </label>
        </div>

        {/* Course Basic Information */}
        <div className="space-y-5">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center" htmlFor="name">
              <MdInfo className="mr-2 text-blue-500" size={18} />
              Course Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={courseInfo.name || ""}
              onChange={(e) => handleInputChange(e, "name")}
              placeholder="e.g., MERN Stack LMS Platform with Next.js 13"
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200 ${
                errors.name ? "border-red-500 dark:border-red-500" : "border-gray-300 dark:border-gray-700"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <MdClose className="mr-1" size={16} />
                {errors.name}
              </p>
            )}
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center" htmlFor="description">
              <MdDescription className="mr-2 text-blue-500" size={18} />
              Course Description
            </label>
            <textarea
              id="description"
              cols={30}
              rows={4}
              placeholder="Provide a compelling description of your course..."
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200 resize-none ${
                errors.description ? "border-red-500 dark:border-red-500" : "border-gray-300 dark:border-gray-700"
              }`}
              value={courseInfo.description || ""}
              onChange={(e) => handleInputChange(e, "description")}
            />
            {errors.description ? (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <MdClose className="mr-1" size={16} />
                {errors.description}
              </p>
            ) : (
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                A detailed description will help students understand what they'll
                learn
              </p>
            )}
          </div>
        </div>

        {/* Category */}
        <div className="relative">
          <label className=" text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center" htmlFor="category">
            <MdCategory className="mr-2 text-blue-500" size={18} />
            Category
          </label>
          <div className="relative">
            <select
              id="category"
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200 appearance-none ${
                errors.category ? "border-red-500 dark:border-red-500" : "border-gray-300 dark:border-gray-700"
              }`}
              value={courseInfo.category || ""}
              onChange={handleCategoryChange}
            >
              <option value="" disabled hidden>
                Select a category
              </option>
              <option value="web-development">Web Development</option>
              <option value="app-development">App Development</option>
              <option value="design">Design</option>
              <option value="data-science">Data Science</option>
              <option value="ai-ml">AI/ML</option>
              <option value="blockchain">Blockchain</option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="cloud-computing">Cloud Computing</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-400">
              <MdArrowForward className="transform rotate-90" size={18} />
            </div>
            {errors.category && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <MdClose className="mr-1" size={16} />
                {errors.category}
              </p>
            )}
          </div>
        </div>

        {/* Price Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center" htmlFor="price">
              <FaRupeeSign className="mr-2 text-blue-500" size={14} />
              Course Price (INR)
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 dark:text-gray-400">
                <FaRupeeSign size={14} />
              </span>
              <input
                type="number"
                id="price"
                required
                value={courseInfo.price || ""}
                onChange={(e) => handleInputChange(e, "price")}
                placeholder="29"
                className={`w-full pl-8 pr-3 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200 ${
                  errors.price ? "border-red-500 dark:border-red-500" : "border-gray-300 dark:border-gray-700"
                }`}
              />
            </div>
            {errors.price && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <MdClose className="mr-1" size={16} />
                {errors.price}
              </p>
            )}
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center" htmlFor="estimatedPrice">
              <FaRupeeSign className="mr-2 text-blue-500" size={14} />
              Original Price (INR){" "}
              <span className="text-gray-500 text-xs ml-1">(optional)</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 dark:text-gray-400">
                <FaRupeeSign size={14} />
              </span>
              <input
                type="number"
                id="estimatedPrice"
                value={courseInfo.estimatedPrice || ""}
                onChange={(e) => handleInputChange(e, "estimatedPrice")}
                placeholder="79"
                className="w-full pl-8 pr-3 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center" htmlFor="tags">
            <MdTag className="mr-2 text-blue-500" size={18} />
            Course Tags{" "}
            <span className="text-gray-500 text-xs ml-1">
              (comma separated)
            </span>
          </label>
          <input
            type="text"
            id="tags"
            required
            value={courseInfo.tags || ""}
            onChange={(e) => handleInputChange(e, "tags")}
            placeholder="MERN, Next.js 13, socket.io, tailwind css, LMS"
            className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200 ${
              errors.tags ? "border-red-500 dark:border-red-500" : "border-gray-300 dark:border-gray-700"
            }`}
          />
          {errors.tags ? (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <MdClose className="mr-1" size={16} />
              {errors.tags}
            </p>
          ) : (
            <div className="mt-2 flex flex-wrap gap-2">
              {courseInfo.tags &&
                courseInfo.tags.split(",").map(
                  (tag: string, index: number) =>
                    tag.trim() && (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      >
                        {tag.trim()}
                      </span>
                    )
                )}
            </div>
          )}
        </div>

        {/* Level and Demo URL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="relative">
            <label className=" text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center" htmlFor="level">
              <MdOutlineSchool className="mr-2 text-blue-500" size={18} />
              Course Level
            </label>
            <div className="relative">
              <select
                id="level"
                value={courseInfo.level || ""}
                onChange={(e) => handleInputChange(e, "level")}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200 appearance-none ${
                  errors.level ? "border-red-500 dark:border-red-500" : "border-gray-300 dark:border-gray-700"
                }`}
              >
                <option value="" disabled hidden>
                  Select a level
                </option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
                <option value="All Levels">All Levels</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-400">
                <MdArrowForward className="transform rotate-90" size={18} />
              </div>
              {errors.level && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <MdClose className="mr-1" size={16} />
                  {errors.level}
                </p>
              )}
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center" htmlFor="demoUrl">
              <MdLink className="mr-2 text-blue-500" size={18} />
              Demo URL
            </label>
            <input
              type="text"
              required
              value={courseInfo.demoUrl}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, demoUrl: e.target.value })
              }
              placeholder="https://example.com/demo"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200"
            />
            {errors.demoUrl && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <MdClose className="mr-1" size={16} />
                {errors.demoUrl}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center">
            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center px-5 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-base"
            >
              Continue to Next Step
              <MdArrowForward className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CourseInformation;