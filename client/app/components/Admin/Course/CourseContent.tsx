// // import { styles } from "@/app/styles/style";
// // import React, { FC, useState } from "react";
// // import toast from "react-hot-toast";
// // import { AiOutlineDelete, AiOutlinePlusCircle } from "react-icons/ai";
// // import { BiSolidPencil } from "react-icons/bi";
// // import { BsLink45Deg } from "react-icons/bs";
// // import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// // type Props = {
// //   active: number;
// //   setActive: (active: number) => void;
// //   courseContentData: any;
// //   setCourseContentData: (courseContentData: any) => void;
// //   handleSubmit: any;
// // };

// // const CourseContent: FC<Props> = ({
// //   active,
// //   setActive,
// //   setCourseContentData,
// //   courseContentData = [],
// //   handleSubmit: handleCourseSubmit,
// // }) => {
// //   const [isCollapsed, setIsCollapsed] = useState(
// //     Array(courseContentData.length || 0).fill(false)
// //   );
// //   const [activeSection, setActiveSection] = useState(1);

// //   const handleSubmit = (e: any) => {
// //     e.preventDefault();
// //   };

// //   const handleCollapsToggle = (index: number) => {
// //     const updatedCollasped = [...isCollapsed];
// //     updatedCollasped[index] = !updatedCollasped[index];
// //     setIsCollapsed(updatedCollasped);
// //   };

// //   const handleRemoveLink = (index: number, linkIndex: number) => {
// //     const updatedData = [...courseContentData];
// //     updatedData[index].links.splice(linkIndex, 1);
// //     setCourseContentData(updatedData);
// //   };

// //   const handleAddLink = (index: number) => {
// //     const updatedData = [...courseContentData];
// //     updatedData[index].links.push({ title: "", url: "" });
// //     setCourseContentData(updatedData);
// //   };

// //   const addNewSection = () => {
// //     if (
// //       courseContentData.length > 0 &&
// //       (courseContentData[courseContentData.length - 1].title === "" ||
// //         courseContentData[courseContentData.length - 1].description === "" ||
// //         courseContentData[courseContentData.length - 1].videoUrl === "" ||
// //         courseContentData[courseContentData.length - 1].links[0].title === "" ||
// //         courseContentData[courseContentData.length - 1].links[0].url === "")
// //     ) {
// //       toast.error("Please fill all the fields first");
// //     } else {
// //       setActiveSection(activeSection + 1);
// //       const newContent = {
// //         videoUrl: "",
// //         title: "",
// //         description: "",
// //         videoSection: `Untitled Section ${activeSection + 1}`,
// //         links: [{ title: "", url: "" }],
// //       };
// //       setCourseContentData([...courseContentData, newContent]);
// //       setIsCollapsed([...isCollapsed, false]);
// //     }
// //   };

// //   const addNewContent = (index: number) => {
// //     const sectionItems = courseContentData[index];
// //     if (
// //       sectionItems.title === "" ||
// //       sectionItems.description === "" ||
// //       sectionItems.videoUrl === "" ||
// //       sectionItems.links[0].url === ""
// //     ) {
// //       toast.error("Please fill all the fields in the current content first");
// //       return;
// //     }

// //     const newContent = {
// //       videoUrl: "",
// //       title: "",
// //       description: "",
// //       videoSection: sectionItems.videoSection, // Use same section title
// //       links: [{ title: "", url: "" }],
// //     };

// //     const updatedData = [...courseContentData];
// //     updatedData.splice(index + 1, 0, newContent); // Insert after current index
// //     setCourseContentData(updatedData);
// //     setIsCollapsed([...isCollapsed.slice(0, index + 1), false, ...isCollapsed.slice(index + 1)]);
// //   };

// //   const prevButton = () => {
// //     setActive(active - 1);
// //   };

// //   const handleOptions = () => {
// //     if (
// //       courseContentData.length > 0 &&
// //       (courseContentData[courseContentData.length - 1].title === "" ||
// //         courseContentData[courseContentData.length - 1].description === "" ||
// //         courseContentData[courseContentData.length - 1].videoUrl === "" ||
// //         courseContentData[courseContentData.length - 1].links[0].title === "" ||
// //         courseContentData[courseContentData.length - 1].links[0].url === "")
// //     ) {
// //       toast.error("Section can't be empty");
// //     } else {
// //       setActive(active + 1);
// //       handleCourseSubmit();
// //     }
// //   };

// //   return (
// //     <div className="w-[100%] ml-2 p-2">
// //       <form onSubmit={handleSubmit}>
// //         {courseContentData.map((item: any, index: number) => {
// //           const showSectionInput =
// //             index === 0 ||
// //             item.videoSection !== courseContentData[index - 1].videoSection;
// //           return (
// //             <div
// //               key={index}
// //               className={`w-full bg-[#cdc8c818] p-4 ${
// //                 showSectionInput ? "mt-10" : "mb-0"
// //               }`}
// //             >
// //               {showSectionInput && (
// //                 <>
// //                   <div className="flex w-full items-center">
// //                     <input
// //                       type="text"
// //                       className={`text-[20px] ${
// //                         item.videoSection === "Untitled Section"
// //                           ? "w-[170px]"
// //                           : "w-min"
// //                       } font-Poppins cursor-pointer dark:text-white text-black bg-transparent outline-none`}
// //                       value={item.videoSection}
// //                       onChange={(e) => {
// //                         const updatedData = [...courseContentData];
// //                         updatedData[index].videoSection = e.target.value;
// //                         setCourseContentData(updatedData);
// //                       }}
// //                     />
// //                     <BiSolidPencil className="cursor-pointer dark:text-white text-black" />
// //                   </div>
// //                   <br />
// //                 </>
// //               )}
// //               <div className="flex w-full items-center justify-between my-0">
// //                 {isCollapsed[index] ? (
// //                   <>
// //                     {item.title ? (
// //                       <p className="font-Poppins dark:text-white text-black">
// //                         {index + 1}. {item.title}
// //                       </p>
// //                     ) : (
// //                       <></>
// //                     )}
// //                   </>
// //                 ) : (
// //                   <div></div>
// //                 )}
// //                 <div className="flex items-center">
// //                   <AiOutlineDelete
// //                     className={`dark:text-white text-[20px] mr-2 text-black ${
// //                       index > 0 ? "cursor-pointer" : "cursor-no-drop"
// //                     }`}
// //                     onClick={() => {
// //                       if (index > 0) {
// //                         const updatedData = [...courseContentData];
// //                         updatedData.splice(index, 1);
// //                         setCourseContentData(updatedData);
// //                         setIsCollapsed(isCollapsed.filter((_, i) => i !== index));
// //                       }
// //                     }}
// //                   />
// //                   <MdOutlineKeyboardArrowDown
// //                     fontSize="large"
// //                     className="dark:text-white text-black"
// //                     style={{
// //                       transform: isCollapsed[index]
// //                         ? "rotate(180deg)"
// //                         : "rotate(0deg)",
// //                     }}
// //                     onClick={() => handleCollapsToggle(index)}
// //                   />
// //                 </div>
// //               </div>
// //               {!isCollapsed[index] && (
// //                 <>
// //                   <div className="mb-3">
// //                     <label className={styles.label}>Video Title</label>
// //                     <input
// //                       type="text"
// //                       placeholder="Project Plan..."
// //                       className={styles.input}
// //                       value={item.title}
// //                       onChange={(e) => {
// //                         const updatedData = [...courseContentData];
// //                         updatedData[index].title = e.target.value;
// //                         setCourseContentData(updatedData);
// //                       }}
// //                     />
// //                   </div>

// //                   <div className="mb-3">
// //                     <label className={styles.label}>Video Url</label>
// //                     <input
// //                       type="text"
// //                       placeholder="Video URL..."
// //                       className={styles.input}
// //                       value={item.videoUrl || ""}
// //                       onChange={(e) => {
// //                         const updatedData = [...courseContentData];
// //                         updatedData[index].videoUrl = e.target.value;
// //                         setCourseContentData(updatedData);
// //                       }}
// //                     />
// //                   </div>

// //                   <div className="mb-3">
// //                     <label className={styles.label}>Video Description</label>
// //                     <textarea
// //                       rows={4}
// //                       cols={30}
// //                       placeholder="Video description..."
// //                       className={`${styles.input} !h-min py-2`}
// //                       value={item.description}
// //                       onChange={(e) => {
// //                         const updatedData = [...courseContentData];
// //                         updatedData[index].description = e.target.value;
// //                         setCourseContentData(updatedData);
// //                       }}
// //                     />
// //                   </div>

// //                   {item?.links.map((link: any, linkIndex: number) => (
// //                     <div className="mb-3 block" key={linkIndex}>
// //                       <div className="w-full flex items-center justify-between">
// //                         <label className={styles.label}>
// //                           Link {linkIndex + 1}
// //                         </label>
// //                         <AiOutlineDelete
// //                           className={`${
// //                             linkIndex === 0
// //                               ? "cursor-not-allowed"
// //                               : "cursor-pointer"
// //                           } text-black dark:text-white text-[20px]`}
// //                           onClick={() =>
// //                             linkIndex === 0
// //                               ? null
// //                               : handleRemoveLink(index, linkIndex)
// //                           }
// //                         />
// //                       </div>
// //                       <input
// //                         type="text"
// //                         placeholder="Source Code...(Link Title)"
// //                         className={styles.input}
// //                         value={link.title}
// //                         onChange={(e) => {
// //                           const updatedData = [...courseContentData];
// //                           updatedData[index].links[linkIndex].title = e.target.value;
// //                           setCourseContentData(updatedData);
// //                         }}
// //                       />
// //                       <input
// //                         type="url"
// //                         placeholder="Source Code Url...(Link URL)"
// //                         className={`${styles.input} mt-6`}
// //                         value={link.url}
// //                         onChange={(e) => {
// //                           const updatedData = [...courseContentData];
// //                           updatedData[index].links[linkIndex].url = e.target.value;
// //                           setCourseContentData(updatedData);
// //                         }}
// //                       />
// //                     </div>
// //                   ))}

// //                   <div className="inline-block mb-4">
// //                     <p
// //                       className="flex items-center text-[18px] dark:text-white cursor-pointer"
// //                       onClick={() => handleAddLink(index)}
// //                     >
// //                       <BsLink45Deg className="mr-2" /> Add Link
// //                     </p>
// //                   </div>

// //                   {/* Add New Content button for each item */}
// //                   <div>
// //                     <p
// //                       className="flex items-center text-[18px] dark:text-white cursor-pointer"
// //                       onClick={() => addNewContent(index)}
// //                     >
// //                       <AiOutlinePlusCircle className="mr-2 text-black dark:text-white" /> Add New Content
// //                     </p>
// //                   </div>
// //                 </>
// //               )}
// //             </div>
// //           );
// //         })}
// //         <br />
// //         <div
// //           className="flex items-center text-[20px] dark:text-white text-black cursor-pointer"
// //           onClick={() => addNewSection()}
// //         >
// //           <AiOutlinePlusCircle className="mr-2" />
// //           Add New Section
// //         </div>
// //       </form>
// //       <br />
// //       <div className="w-full flex items-center justify-between">
// //         <button
// //           className="w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
// //           onClick={() => prevButton()}
// //         >
// //           Prev
// //         </button>
// //         <button
// //           className="w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
// //           onClick={() => handleOptions()}
// //         >
// //           Next
// //         </button>
// //       </div>
// //       <br />
// //       <br />
// //       <br />
// //     </div>
// //   );
// // };

// // export default CourseContent;
// import React, { FC, useState } from "react";
// import toast from "react-hot-toast";
// import { AiOutlineDelete, AiOutlinePlusCircle } from "react-icons/ai";
// import { BiSolidPencil } from "react-icons/bi";
// import { BsLink45Deg } from "react-icons/bs";
// import { MdOutlineKeyboardArrowDown, MdInfo, MdClose } from "react-icons/md";
// import { styles } from "@/app/styles/style";

// type Props = {
//   active: number;
//   setActive: (active: number) => void;
//   courseContentData: any;
//   setCourseContentData: (courseContentData: any) => void;
//   handleSubmit: any;
// };

// const CourseContent: FC<Props> = ({
//   active,
//   setActive,
//   setCourseContentData,
//   courseContentData = [],
//   handleSubmit: handleCourseSubmit,
// }) => {
//   const [isCollapsed, setIsCollapsed] = useState(
//     Array(courseContentData.length || 0).fill(false)
//   );
//   const [activeSection, setActiveSection] = useState(1);

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//   };

//   const handleCollapsToggle = (index: number) => {
//     const updatedCollasped = [...isCollapsed];
//     updatedCollasped[index] = !updatedCollasped[index];
//     setIsCollapsed(updatedCollasped);
//   };

//   const handleRemoveLink = (index: number, linkIndex: number) => {
//     const updatedData = [...courseContentData];
//     updatedData[index].links.splice(linkIndex, 1);
//     setCourseContentData(updatedData);
//   };

//   const handleAddLink = (index: number) => {
//     const updatedData = [...courseContentData];
//     updatedData[index].links.push({ title: "", url: "" });
//     setCourseContentData(updatedData);
//   };

//   const addNewSection = () => {
//     if (
//       courseContentData.length > 0 &&
//       (courseContentData[courseContentData.length - 1].title === "" ||
//         courseContentData[courseContentData.length - 1].description === "" ||
//         courseContentData[courseContentData.length - 1].videoUrl === "" ||
//         courseContentData[courseContentData.length - 1].links[0].title === "" ||
//         courseContentData[courseContentData.length - 1].links[0].url === "")
//     ) {
//       toast.error("Please fill all the fields first");
//     } else {
//       setActiveSection(activeSection + 1);
//       const newContent = {
//         videoUrl: "",
//         title: "",
//         description: "",
//         videoSection: `Untitled Section ${activeSection + 1}`,
//         links: [{ title: "", url: "" }],
//       };
//       setCourseContentData([...courseContentData, newContent]);
//       setIsCollapsed([...isCollapsed, false]);
//     }
//   };

//   const addNewContent = (index: number) => {
//     const sectionItems = courseContentData[index];
//     if (
//       sectionItems.title === "" ||
//       sectionItems.description === "" ||
//       sectionItems.videoUrl === "" ||
//       sectionItems.links[0].url === ""
//     ) {
//       toast.error("Please fill all the fields in the current content first");
//       return;
//     }

//     const newContent = {
//       videoUrl: "",
//       title: "",
//       description: "",
//       videoSection: sectionItems.videoSection,
//       links: [{ title: "", url: "" }],
//     };

//     const updatedData = [...courseContentData];
//     updatedData.splice(index + 1, 0, newContent);
//     setCourseContentData(updatedData);
//     setIsCollapsed([...isCollapsed.slice(0, index + 1), false, ...isCollapsed.slice(index + 1)]);
//   };

//   const prevButton = () => {
//     setActive(active - 1);
//   };

//   const handleOptions = () => {
//     if (
//       courseContentData.length > 0 &&
//       (courseContentData[courseContentData.length - 1].title === "" ||
//         courseContentData[courseContentData.length - 1].description === "" ||
//         courseContentData[courseContentData.length - 1].videoUrl === "" ||
//         courseContentData[courseContentData.length - 1].links[0].title === "" ||
//         courseContentData[courseContentData.length - 1].links[0].url === "")
//     ) {
//       toast.error("Section can't be empty");
//     } else {
//       setActive(active + 1);
//       handleCourseSubmit();
//     }
//   };

//   return (
//     <div className="w-full max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden p-4 sm:p-6 lg:p-8">
//       <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 flex items-center">
//         <MdInfo className="mr-2 text-blue-500" size={28} />
//         Course Content
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {courseContentData.map((item: any, index: number) => {
//           const showSectionInput =
//             index === 0 ||
//             item.videoSection !== courseContentData[index - 1].videoSection;

//           return (
//             <div
//               key={index}
//               className={`w-full bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg ${
//                 showSectionInput ? "mt-6" : "mt-2"
//               }`}
//             >
//               {showSectionInput && (
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
//                     <MdInfo className="mr-2 text-blue-500" size={18} />
//                     Section Title
//                   </label>
//                   <div className="flex items-center">
//                     <input
//                       type="text"
//                       className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200"
//                       value={item.videoSection}
//                       onChange={(e) => {
//                         const updatedData = [...courseContentData];
//                         updatedData[index].videoSection = e.target.value;
//                         setCourseContentData(updatedData);
//                       }}
//                     />
//                     <BiSolidPencil className="ml-2 text-blue-500" size={20} />
//                   </div>
//                 </div>
//               )}

//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
//                   {item.title ? `${index + 1}. ${item.title}` : `Content ${index + 1}`}
//                 </h3>
//                 <div className="flex items-center space-x-2">
//                   <AiOutlineDelete
//                     className={`text-[20px] ${
//                       index > 0 ? "text-red-500 cursor-pointer hover:text-red-600" : "text-gray-400 cursor-not-allowed"
//                     }`}
//                     onClick={() => {
//                       if (index > 0) {
//                         const updatedData = [...courseContentData];
//                         updatedData.splice(index, 1);
//                         setCourseContentData(updatedData);
//                         setIsCollapsed(isCollapsed.filter((_, i) => i !== index));
//                       }
//                     }}
//                   />
//                   <MdOutlineKeyboardArrowDown
//                     className="text-gray-600 dark:text-gray-300 cursor-pointer"
//                     size={24}
//                     style={{
//                       transform: isCollapsed[index] ? "rotate(180deg)" : "rotate(0deg)",
//                       transition: "transform 0.2s ease",
//                     }}
//                     onClick={() => handleCollapsToggle(index)}
//                   />
//                 </div>
//               </div>

//               {!isCollapsed[index] && (
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center">
//                       <MdInfo className="mr-2 text-blue-500" size={18} />
//                       Video Title
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Project Plan..."
//                       className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200"
//                       value={item.title}
//                       onChange={(e) => {
//                         const updatedData = [...courseContentData];
//                         updatedData[index].title = e.target.value;
//                         setCourseContentData(updatedData);
//                       }}
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center">
//                       <MdInfo className="mr-2 text-blue-500" size={18} />
//                       Video URL
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Video URL..."
//                       className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200"
//                       value={item.videoUrl || ""}
//                       onChange={(e) => {
//                         const updatedData = [...courseContentData];
//                         updatedData[index].videoUrl = e.target.value;
//                         setCourseContentData(updatedData);
//                       }}
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center">
//                       <MdInfo className="mr-2 text-blue-500" size={18} />
//                       Video Description
//                     </label>
//                     <textarea
//                       rows={4}
//                       placeholder="Video description..."
//                       className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200 resize-none"
//                       value={item.description}
//                       onChange={(e) => {
//                         const updatedData = [...courseContentData];
//                         updatedData[index].description = e.target.value;
//                         setCourseContentData(updatedData);
//                       }}
//                     />
//                   </div>

//                   {item?.links.map((link: any, linkIndex: number) => (
//                     <div key={linkIndex} className="space-y-2">
//                       <div className="flex justify-between items-center">
//                         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
//                           <BsLink45Deg className="mr-2 text-blue-500" size={18} />
//                           Link {linkIndex + 1}
//                         </label>
//                         <AiOutlineDelete
//                           className={`text-[20px] ${
//                             linkIndex === 0
//                               ? "text-gray-400 cursor-not-allowed"
//                               : "text-red-500 cursor-pointer hover:text-red-600"
//                           }`}
//                           onClick={() =>
//                             linkIndex === 0 ? null : handleRemoveLink(index, linkIndex)
//                           }
//                         />
//                       </div>
//                       <input
//                         type="text"
//                         placeholder="Source Code...(Link Title)"
//                         className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200"
//                         value={link.title}
//                         onChange={(e) => {
//                           const updatedData = [...courseContentData];
//                           updatedData[index].links[linkIndex].title = e.target.value;
//                           setCourseContentData(updatedData);
//                         }}
//                       />
//                       <input
//                         type="url"
//                         placeholder="Source Code URL...(Link URL)"
//                         className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200"
//                         value={link.url}
//                         onChange={(e) => {
//                           const updatedData = [...courseContentData];
//                           updatedData[index].links[linkIndex].url = e.target.value;
//                           setCourseContentData(updatedData);
//                         }}
//                       />
//                     </div>
//                   ))}

//                   <button
//                     type="button"
//                     className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
//                     onClick={() => handleAddLink(index)}
//                   >
//                     <BsLink45Deg className="mr-2" size={18} />
//                     Add Link
//                   </button>

//                   <button
//                     type="button"
//                     className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
//                     onClick={() => addNewContent(index)}
//                   >
//                     <AiOutlinePlusCircle className="mr-2" size={18} />
//                     Add New Content
//                   </button>
//                 </div>
//               )}
//             </div>
//           );
//         })}

//         <button
//           type="button"
//           className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 mt-6"
//           onClick={() => addNewSection()}
//         >
//           <AiOutlinePlusCircle className="mr-2" size={20} />
//           Add New Section
//         </button>

//         <div className="flex flex-col sm:flex-row justify-between items-center mt-8 space-y-4 sm:space-y-0">
//           <button
//             type="button"
//             className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
//             onClick={() => prevButton()}
//           >
//             Previous Step
//           </button>
//           <button
//             type="button"
//             className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
//             onClick={() => handleOptions()}
//           >
//             Next Step
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CourseContent;

import React, { FC, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { BiSolidPencil } from "react-icons/bi";
import { BsLink45Deg } from "react-icons/bs";
import {
  MdOutlineKeyboardArrowDown,
  MdArrowForward,
  MdArrowBack,
} from "react-icons/md";

type Props = {
  active: number;
  setActive: (active: number) => void;
  courseContentData: any;
  setCourseContentData: (courseContentData: any) => void;
  handleSubmit: any;
};

const CourseContent: FC<Props> = ({
  active,
  setActive,
  setCourseContentData,
  courseContentData = [],
  handleSubmit: handleCourseSubmit,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(
    Array(courseContentData.length || 0).fill(false)
  );
  const [activeSection, setActiveSection] = useState(1);
  console.log(courseContentData)
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleCollapsToggle = (index: number) => {
    const updatedCollasped = [...isCollapsed];
    updatedCollasped[index] = !updatedCollasped[index];
    setIsCollapsed(updatedCollasped);
  };

  const handleRemoveLink = (index: number, linkIndex: number) => {
    const updatedData = [...courseContentData];
    updatedData[index].links.splice(linkIndex, 1);
    setCourseContentData(updatedData);
  };

  const handleAddLink = (index: number) => {
    const updatedData = [...courseContentData];
    updatedData[index].links.push({ title: "", url: "" });
    setCourseContentData(updatedData);
  };

  const addNewSection = () => {
    if (
      courseContentData.length > 0 &&
      (courseContentData[courseContentData.length - 1].title === "" ||
        courseContentData[courseContentData.length - 1].description === "" ||
        courseContentData[courseContentData.length - 1].videoUrl === "" ||
        courseContentData[courseContentData.length - 1].links[0].title === "" ||
        courseContentData[courseContentData.length - 1].links[0].url === "")
    ) {
      toast.error("Please fill all the fields first");
    } else {
      setActiveSection(activeSection + 1);
      const newContent = {
        videoUrl: "",
        title: "",
        description: "",
        videoSection: `Untitled Section ${activeSection + 1}`,
        links: [{ title: "", url: "" }],
      };
      setCourseContentData([...courseContentData, newContent]);
      setIsCollapsed([...isCollapsed, false]);
    }
  };

  const addNewContent = (index: number) => {
    const sectionItems = courseContentData[index];
    if (
      sectionItems.title === "" ||
      sectionItems.description === "" ||
      sectionItems.videoUrl === "" ||
      sectionItems.links[0].url === ""
    ) {
      toast.error("Please fill all the fields in the current content first");
      return;
    }

    const newContent = {
      videoUrl: "",
      title: "",
      description: "",
      videoSection: sectionItems.videoSection,
      links: [{ title: "", url: "" }],
    };

    const updatedData = [...courseContentData];
    updatedData.splice(index + 1, 0, newContent);
    setCourseContentData(updatedData);
    setIsCollapsed([
      ...isCollapsed.slice(0, index + 1),
      false,
      ...isCollapsed.slice(index + 1),
    ]);
  };

  const handleDeleteSection = (index: number) => {
    const sectionToDelete = courseContentData[index];
    const sectionItems = courseContentData.filter(
      (item: any) => item.videoSection === sectionToDelete.videoSection
    );
    if (courseContentData.length <= 1) {
      toast.error("At least one section is required");
      return;
    }

    const updatedData = courseContentData.filter(
      (item: any) => item.videoSection !== sectionToDelete.videoSection
    );
    setCourseContentData(updatedData);
    setIsCollapsed(
      isCollapsed.filter(
        (_, i) => !sectionItems.some((_: any, idx: number) => idx + index === i)
      )
    );
  };

  const handleDeleteContent = (index: number) => {
    if (courseContentData.length <= 1) {
      toast.error("At least one content item is required");
      return;
    }

    const updatedData = [...courseContentData];
    updatedData.splice(index, 1);
    setCourseContentData(updatedData);
    setIsCollapsed(isCollapsed.filter((_, i) => i !== index));
  };

  const prevButton = () => {
    setActive(active - 1);
  };

  const handleOptions = () => {
    if (
      courseContentData.length > 0 &&
      (courseContentData[courseContentData.length - 1].title === "" ||
        courseContentData[courseContentData.length - 1].description === "" ||
        courseContentData[courseContentData.length - 1].videoUrl === "" ||
        courseContentData[courseContentData.length - 1].links[0].title === "" ||
        courseContentData[courseContentData.length - 1].links[0].url === "")
    ) {
      toast.error("Section can't be empty");
    } else {
      setActive(active + 1);
      handleCourseSubmit();
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden p-4 sm:p-6 lg:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {courseContentData.map((item: any, index: number) => {
          const showSectionInput =
            index === 0 ||
            item.videoSection !== courseContentData[index - 1].videoSection;

          return (
            <div
              key={index}
              className={`${showSectionInput ? "pt-6" : "pt-2"}`}
            >
              {showSectionInput && (
                <div className="flex items-center justify-between mb-4 sm:mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white bg-transparent border-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      value={item.videoSection}
                      onChange={(e) => {
                        const updatedData = [...courseContentData];
                        updatedData[index].videoSection = e.target.value;
                        setCourseContentData(updatedData);
                      }}
                    />
                    <BiSolidPencil
                      className="ml-2 text-blue-500 cursor-pointer"
                      size={24}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => handleCollapsToggle(index)}
                      className="p-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <MdOutlineKeyboardArrowDown
                        size={24}
                        style={{
                          transform: isCollapsed[index]
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                        }}
                      />
                    </button>
                  </div>
                </div>
              )}

              {!isCollapsed[index] && (
                <div className="space-y-4 relative">
                  {showSectionInput && (
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Add videos, descriptions, and useful links for this
                      section.
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={() => handleDeleteContent(index)}
                    className="absolute top-0 right-0 p-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-200"
                    disabled={courseContentData.length <= 1}
                  >
                    <AiOutlineDelete size={20} />
                  </button>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                      Video Title
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Project Plan..."
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200"
                      value={item.title}
                      onChange={(e) => {
                        const updatedData = [...courseContentData];
                        updatedData[index].title = e.target.value;
                        setCourseContentData(updatedData);
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                      Video URL
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., https://example.com/video"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200"
                      value={item.videoUrl || ""}
                      onChange={(e) => {
                        const updatedData = [...courseContentData];
                        updatedData[index].videoUrl = e.target.value;
                        setCourseContentData(updatedData);
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                      Video Description
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe the video content..."
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200"
                      value={item.description}
                      onChange={(e) => {
                        const updatedData = [...courseContentData];
                        updatedData[index].description = e.target.value;
                        setCourseContentData(updatedData);
                      }}
                    />
                  </div>

                  {item?.links.map((link: any, linkIndex: number) => (
                    <div key={linkIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                          Link {linkIndex + 1}
                        </label>
                        {linkIndex > 0 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveLink(index, linkIndex)}
                            className="p-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-200"
                          >
                            <AiOutlineDelete size={20} />
                          </button>
                        )}
                      </div>
                      <input
                        type="text"
                        placeholder="Link Title (e.g., Source Code)"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200"
                        value={link.title}
                        onChange={(e) => {
                          const updatedData = [...courseContentData];
                          updatedData[index].links[linkIndex].title =
                            e.target.value;
                          setCourseContentData(updatedData);
                        }}
                      />
                      <input
                        type="url"
                        placeholder="Link URL (e.g., https://example.com)"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200"
                        value={link.url}
                        onChange={(e) => {
                          const updatedData = [...courseContentData];
                          updatedData[index].links[linkIndex].url =
                            e.target.value;
                          setCourseContentData(updatedData);
                        }}
                      />
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => handleAddLink(index)}
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium mt-2 transition-colors duration-200"
                  >
                    <BsLink45Deg className="mr-1" size={20} />
                    Add Another Link
                  </button>

                  <button
                    type="button"
                    onClick={() => addNewContent(index)}
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium mt-2 transition-colors duration-200"
                  >
                    <AiOutlinePlusCircle className="mr-1" size={20} />
                    Add New Content
                  </button>
                </div>
              )}

              {isCollapsed[index] && item.title && (
                <p className="text-gray-700 dark:text-gray-200 mt-2">
                  {index + 1}. {item.title}
                </p>
              )}
            </div>
          );
        })}

        <div className="pt-6">
          <button
            type="button"
            onClick={addNewSection}
            className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
          >
            <AiOutlinePlusCircle className="mr-1" size={20} />
            Add New Section
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-4 sm:space-y-0">
            <button
              type="button"
              onClick={prevButton}
              className="w-full sm:w-auto flex items-center justify-center px-5 sm:px-8 py-3 sm:py-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-base"
            >
              <MdArrowBack className="mr-2" size={20} />
              Previous Step
            </button>
            <button
              type="button"
              onClick={handleOptions}
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

export default CourseContent;
