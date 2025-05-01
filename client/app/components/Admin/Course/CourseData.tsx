// import { styles } from "@/app/styles/style";
// import React, { FC } from "react";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import toast from "react-hot-toast";

// type Props = {
//   benefits: { title: string }[];
//   setBenefits: (benefits: { title: string }[]) => void;
//   prerequisites: { title: string }[];
//   setPrerequisites: (prerequisites: { title: string }[]) => void;
//   active: number;
//   setActive: (active: number) => void;
// };

// const CourseData: FC<Props> = ({
//   benefits,
//   active,
//   setActive,
//   setBenefits,
//   setPrerequisites,
//   prerequisites,
// }) => {
//   const handleBenefitChnage = (index: any, value: any) => {
//     const updateBenefits = [...benefits];
//     updateBenefits[index].title = value;
//     setBenefits(updateBenefits);
//   };
//   const handleAddBenefits = () => {
//     setBenefits([...benefits, { title: "" }]);
//   };

//   const handlePrerequisitesChnage = (index: any, value: any) => {
//     const updatePrerequisites = [...prerequisites];
//     updatePrerequisites[index].title = value;
//     setPrerequisites(updatePrerequisites);
//   };
//   const handleAddprerequisites = () => {
//     setPrerequisites([...prerequisites, { title: "" }]);
//   };

//   const prevButton = () => {
//     setActive(active - 1);
//   }; 

//   const handleOptions =()=>{
//     if (benefits[benefits.length-1]?.title!=='' && prerequisites[prerequisites.length]?.title!=='') {
//         setActive(active + 1);
//     } else {
//         toast.error('Please fill all fields for go to next')
//     }
    
//   }
//   return (
//     <div className="w-[100%] p-3 ml-2">
//       <div>
//         <label className={`${styles.label} text-[20px]`} htmlFor="email">
//           What are the benefits for students in this course?
//         </label>
//         <br />
//         {benefits.map((benefit: any, index: number) => (
//           <input
//             type="text"
//             key={index}
//             name="benifits"
//             placeholder="You will be able to build a full stack LMS platform..."
//             required
//             className={`${styles.input} my-2`}
//             value={benefit.title}
//             onChange={(e) => handleBenefitChnage(index, e.target.value)}
//           />
//         ))}
//         <AddCircleOutlineIcon
//           className="text-black dark:text-white" 
//           style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }}
        
//           onClick={handleAddBenefits}
//         />
//       </div>
//       <div>
//         <label className={`${styles.label} text-[20px]`} htmlFor="email">
//           What are the prerequisites for starting this course?
//         </label>
//         <br />
//         {prerequisites.map((prerequisites: any, index: number) => (
//           <input
//             type="text"
//             key={index}
//             name="prerequisites"
//             placeholder="You need basic knowledge of MERN stack"
//             required
//             className={`${styles.input} my-2`}
//             value={prerequisites.title}
//             onChange={(e) => handlePrerequisitesChnage(index, e.target.value)}
//           />
//         ))}
//         <AddCircleOutlineIcon
//         className="text-black dark:text-white" 
//           style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }}
//           onClick={handleAddprerequisites}
//         />
//       </div>
//       <div className="w-full flex items-center justify-between">
//         <button
//           className="w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
//           onClick={() => prevButton()}
//         >
//           prev
//         </button>
//         <button   className="w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
//           onClick={() => handleOptions()}>
//             Next
//         </button>
        
//       </div>
//     </div>
//   );
// };

// export default CourseData;
import React, { FC, useState } from "react";
import {
  MdAddCircleOutline,
  MdArrowForward,
  MdArrowBack,
  MdSchool,
  MdChecklist,
  MdWarning,
  MdClose,
  MdCheck,
} from "react-icons/md";

type Props = {
  benefits: { title: string }[];
  setBenefits: (benefits: { title: string }[]) => void;
  prerequisites: { title: string }[];
  setPrerequisites: (prerequisites: { title: string }[]) => void;
  active: number;
  setActive: (active: number) => void;
};

const CourseData: FC<Props> = ({
  benefits,
  active,
  setActive,
  setBenefits,
  setPrerequisites,
  prerequisites,
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleBenefitChange = (index: number, value: string) => {
    const updatedBenefits = [...benefits];
    updatedBenefits[index].title = value;
    setBenefits(updatedBenefits);

    // Clear error if field is filled
    if (value.trim() && errors[`benefit-${index}`]) {
      const newErrors = { ...errors };
      delete newErrors[`benefit-${index}`];
      setErrors(newErrors);
    }
  };

  const handleAddBenefit = () => {
    // Only add new benefit if the last one is not empty
    if (benefits.length === 0 || benefits[benefits.length - 1].title.trim() !== "") {
      setBenefits([...benefits, { title: "" }]);
    }
  };

  const handleRemoveBenefit = (index: number) => {
    if (benefits.length > 1) {
      const updatedBenefits = [...benefits];
      updatedBenefits.splice(index, 1);
      setBenefits(updatedBenefits);
      
      // Clean up any errors for this field
      const newErrors = { ...errors };
      delete newErrors[`benefit-${index}`];
      setErrors(newErrors);
    }
  };

  const handlePrerequisiteChange = (index: number, value: string) => {
    const updatedPrerequisites = [...prerequisites];
    updatedPrerequisites[index].title = value;
    setPrerequisites(updatedPrerequisites);

    // Clear error if field is filled
    if (value.trim() && errors[`prerequisite-${index}`]) {
      const newErrors = { ...errors };
      delete newErrors[`prerequisite-${index}`];
      setErrors(newErrors);
    }
  };

  const handleAddPrerequisite = () => {
    // Only add new prerequisite if the last one is not empty
    if (prerequisites.length === 0 || prerequisites[prerequisites.length - 1].title.trim() !== "") {
      setPrerequisites([...prerequisites, { title: "" }]);
    }
  };

  const handleRemovePrerequisite = (index: number) => {
    if (prerequisites.length > 1) {
      const updatedPrerequisites = [...prerequisites];
      updatedPrerequisites.splice(index, 1);
      setPrerequisites(updatedPrerequisites);
      
      // Clean up any errors for this field
      const newErrors = { ...errors };
      delete newErrors[`prerequisite-${index}`];
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Validate benefits
    benefits.forEach((benefit, index) => {
      if (!benefit.title.trim()) {
        newErrors[`benefit-${index}`] = "Benefit cannot be empty";
      }
    });

    // Validate prerequisites
    prerequisites.forEach((prerequisite, index) => {
      if (!prerequisite.title.trim()) {
        newErrors[`prerequisite-${index}`] = "Prerequisite cannot be empty";
      }
    });

    // Ensure at least one benefit and prerequisite is provided
    if (benefits.length === 0) {
      newErrors.benefits = "At least one benefit is required";
    }

    if (prerequisites.length === 0) {
      newErrors.prerequisites = "At least one prerequisite is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const prevButton = () => {
    setActive(active - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setActive(active + 1);
    } else {
      // Find first error and scroll to it
      const firstErrorKey = Object.keys(errors)[0];
      const elementId = firstErrorKey.includes("benefit") 
        ? "benefits-section" 
        : "prerequisites-section";
      
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden p-4 sm:p-6 lg:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Benefits Section */}
        <div id="benefits-section">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 flex items-center">
            <MdSchool className="mr-2 text-blue-500" size={28} />
            Course Benefits
          </h2>
          
          <div className="space-y-4">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              What will students learn or be able to do after completing this course?
            </p>
            
            {errors.benefits && (
              <div className="p-3 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg flex items-center mt-2">
                <MdWarning className="mr-2" size={20} />
                <span>{errors.benefits}</span>
              </div>
            )}
            
            {benefits.map((benefit, index) => (
              <div key={index} className="relative">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="e.g., Build a complete LMS platform from scratch"
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200 ${
                      errors[`benefit-${index}`] ? "border-red-500 dark:border-red-500" : "border-gray-300 dark:border-gray-700"
                    }`}
                    value={benefit.title}
                    onChange={(e) => handleBenefitChange(index, e.target.value)}
                  />
                  {benefits.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveBenefit(index)}
                      className="ml-2 p-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-200"
                    >
                      <MdClose size={20} />
                    </button>
                  )}
                </div>
                {errors[`benefit-${index}`] && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <MdClose className="mr-1" size={16} />
                    {errors[`benefit-${index}`]}
                  </p>
                )}
              </div>
            ))}
            
            <button
              type="button"
              onClick={handleAddBenefit}
              className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium mt-2 transition-colors duration-200"
            >
              <MdAddCircleOutline className="mr-1" size={20} />
              Add Another Benefit
            </button>
          </div>
        </div>
        
        {/* Prerequisites Section */}
        <div id="prerequisites-section" className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 flex items-center">
            <MdChecklist className="mr-2 text-blue-500" size={28} />
            Course Prerequisites
          </h2>
          
          <div className="space-y-4">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              What knowledge, skills, or tools should students have before starting this course?
            </p>
            
            {errors.prerequisites && (
              <div className="p-3 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg flex items-center mt-2">
                <MdWarning className="mr-2" size={20} />
                <span>{errors.prerequisites}</span>
              </div>
            )}
            
            {prerequisites.map((prerequisite, index) => (
              <div key={index} className="relative">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="e.g., Basic understanding of JavaScript and React"
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200 ${
                      errors[`prerequisite-${index}`] ? "border-red-500 dark:border-red-500" : "border-gray-300 dark:border-gray-700"
                    }`}
                    value={prerequisite.title}
                    onChange={(e) => handlePrerequisiteChange(index, e.target.value)}
                  />
                  {prerequisites.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemovePrerequisite(index)}
                      className="ml-2 p-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-200"
                    >
                      <MdClose size={20} />
                    </button>
                  )}
                </div>
                {errors[`prerequisite-${index}`] && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <MdClose className="mr-1" size={16} />
                    {errors[`prerequisite-${index}`]}
                  </p>
                )}
              </div>
            ))}
            
            <button
              type="button"
              onClick={handleAddPrerequisite}
              className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium mt-2 transition-colors duration-200"
            >
              <MdAddCircleOutline className="mr-1" size={20} />
              Add Another Prerequisite
            </button>
          </div>
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

export default CourseData;