import { useUpdateUserRoleMutation } from "@/redux/features/user/userApi";
import React, { FC, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  user: any;
};

const Teacher: FC<Props> = ({ user }) => {
  const [role, setRole] = useState(user.role);
  const [open, setOpen] = useState(false);
  const [updateUserRole, { isLoading }] = useUpdateUserRoleMutation();

  // State for questions and answers
  const [answers, setAnswers] = useState({
    teachingYears: "",
    favoriteTopic: "",
    rewardingMoment: "",
    engagementStrategy: "",
    experienceLevel: "", // Dropdown selection
  });

  // Check if all questions are answered
  const allQuestionsAnswered =
    answers.teachingYears.trim() &&
    answers.favoriteTopic.trim() &&
    answers.rewardingMoment.trim() &&
    answers.engagementStrategy.trim() &&
    answers.experienceLevel;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleUpdate = async () => {
    try {
      await updateUserRole({
        userId: user._id,
        role: "admin",
      }).unwrap();
      setRole("admin");
      setOpen(false);
      toast.success("Role upgraded to Admin successfully!", {
        duration: 4000,
        position: "top-right",
        style: {
          background: "#10B981",
          color: "#fff",
          padding: "10px 16px",
          borderRadius: "8px",
        },
      });
    } catch (err) {
      console.error("Failed to update role:", err);
      toast.error("Failed to upgrade role. Try again!", {
        duration: 4000,
        position: "top-right",
        style: {
          background: "#EF4444",
          color: "#fff",
          padding: "10px 16px",
          borderRadius: "8px",
        },
      });
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12">
      {/* Toaster Component */}
      <Toaster />

      {/* Card Container */}
      <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Teacher Questionnaire
        </h3>

        {/* Questions with Input Fields */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="text-gray-600 font-medium block mb-1">
              How many years have you been teaching?
            </label>
            <input
              type="text"
              name="teachingYears"
              value={answers.teachingYears}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 5 years"
            />
          </div>
          <div>
            <label className="text-gray-600 font-medium block mb-1">
              What’s your favorite topic to teach?
            </label>
            <input
              type="text"
              name="favoriteTopic"
              value={answers.favoriteTopic}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Mathematics"
            />
          </div>
          <div>
            <label className="text-gray-600 font-medium block mb-1">
              What’s the most rewarding part of your teaching career?
            </label>
            <input
              type="text"
              name="rewardingMoment"
              value={answers.rewardingMoment}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Seeing students succeed"
            />
          </div>
          <div>
            <label className="text-gray-600 font-medium block mb-1">
              How do you keep your courses engaging?
            </label>
            <input
              type="text"
              name="engagementStrategy"
              value={answers.engagementStrategy}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Interactive quizzes"
            />
          </div>
          <div>
            <label className="text-gray-600 font-medium block mb-1">
              What’s your experience level?
            </label>
            <select
              name="experienceLevel"
              value={answers.experienceLevel}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select an option</option>
              <option value="beginner">Beginner (0-2 years)</option>
              <option value="intermediate">Intermediate (2-5 years)</option>
              <option value="expert">Expert (5+ years)</option>
            </select>
          </div>
        </div>

        {/* Role Status and Button */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600">
              Current Role:{" "}
              <span className="font-semibold text-blue-600 capitalize">
                {role}
              </span>
            </p>
          </div>
          {role !== "admin" && (
            <button
              onClick={() => setOpen(true)}
              disabled={!allQuestionsAnswered}
              className={`px-4 py-2 rounded-lg font-medium text-white transition-colors duration-200 ${
                allQuestionsAnswered
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Change Role to Admin
            </button>
          )}
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Confirm Role Change
            </h4>
            <p className="text-gray-600 mb-5">
              Are you sure you want to upgrade your role to Admin? This will
              grant additional privileges.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setOpen(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleRoleUpdate}
                disabled={isLoading}
                className={`bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Updating..." : "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Teacher;


// import React, { FC,useState } from "react";
// import img from "../../../public/assests/teacher12.webp";
// import Image from "next/image";
// import {
//   FaChalkboardTeacher,
//   FaGraduationCap,
//   FaMoneyBillWave,
// } from "react-icons/fa";
// import { useUpdateUserRoleMutation } from "@/redux/features/user/userApi";
// import toast, { Toaster } from "react-hot-toast";


// type Props = {
//   user: any;
// };

// const Teacher: FC<Props> = ({ user }) => {
//   const [role, setRole] = useState(user.role);
//   const [open, setOpen] = useState(false);
//   const [updateUserRole, { isLoading }] = useUpdateUserRoleMutation();
//   const [answers, setAnswers] = useState({
//     teachingYears: "",
//     favoriteTopic: "",
//     rewardingMoment: "",
//     engagementStrategy: "",
//     experienceLevel: "", 
//   });

//   const allQuestionsAnswered =
//   answers.teachingYears.trim() &&
//   answers.favoriteTopic.trim() &&
//   answers.rewardingMoment.trim() &&
//   answers.engagementStrategy.trim() &&
//   answers.experienceLevel;


//   const handleRoleUpdate = async () => {
//     try {
//       await updateUserRole({
//         userId: user._id,
//         role: "admin",
//       }).unwrap();
//       setRole("admin");
//       setOpen(false);
//       toast.success("Role upgraded to Admin successfully!", {
//         duration: 4000,
//         position: "top-right",
//         style: {
//           background: "#10B981",
//           color: "#fff",
//           padding: "10px 16px",
//           borderRadius: "8px",
//         },
//       });
//     } catch (err) {
//       console.error("Failed to update role:", err);
//       toast.error("Failed to upgrade role. Try again!", {
//         duration: 4000,
//         position: "top-right",
//         style: {
//           background: "#EF4444",
//           color: "#fff",
//           padding: "10px 16px",
//           borderRadius: "8px",
//         },
//       });
//     }
//   };


//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* First section with image and heading */}
//       <section className="max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16 flex flex-col md:flex-row items-center gap-6 md:gap-8">
//         {/* Image */}
//         <div className="w-full md:w-1/2 px-2 mt-6 md:mt-0">
//           <Image
//             src={img}
//             alt="Instructor teaching"
//             className="w-full h-auto rounded-lg shadow-md object-cover"
//             style={{
//               maxHeight: "clamp(250px, 45vw, 450px)",
//               width: "100%",
//             }}
//           />
//         </div>
//         <div className="w-full md:w-5/12 mt-8 md:mt-1 px-2 md:ml-2 font-poppins text-center md:text-left">
//           <h1
//             style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
//             className="font-bold text-black leading-tight flex flex-col md:flex-row justify-center md:justify-start items-center md:items-baseline"
//           >
//             <span className="mr-0 md:mr-2">Join Our Team of Educators</span>
//           </h1>
//           <p
//             style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.125rem)" }}
//             className="text-gray-600 leading-relaxed"
//           >
//             Become an Instructor and Make a Meaningful Impact
//           </p>
//           <button
//             className="mt-10 md:mt-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors duration-300"
//             style={{
//               padding:
//                 "clamp(0.5rem, 1.5vw, 0.875rem) clamp(1rem, 2.5vw, 1.5rem)",
//               fontSize: "clamp(0.875rem, 2vw, 1rem)",
//             }}
//           >
//             Become a Teacher
//           </button>
//         </div>
//       </section>

//       {/* Why Start Today Section */}
//       <section className="bg-white py-12 md:py-16">
//         <div className="container mx-auto px-4 md:px-6 max-w-7xl">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//               Why Start Today?
//             </h2>
//             <div className="w-20 h-1 bg-green-600 mx-auto mb-4"></div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="bg-[#FAF9F6] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group hover:border-green-200">
//               <div className="flex items-center justify-center mb-4">
//                 <div className="text-green-600 p-3 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors duration-300">
//                   <FaChalkboardTeacher className="w-10 h-10" />
//                 </div>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
//                 Share Your Knowledge
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Create and publish courses your way, maintaining full control
//                 over your content and teaching style.
//               </p>
//             </div>

//             <div className="bg-[#FAF9F6] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group hover:border-green-200">
//               <div className="flex items-center justify-center mb-4">
//                 <div className="text-green-600 p-3 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors duration-300">
//                   <FaGraduationCap className="w-10 h-10" />
//                 </div>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
//                 Empower Learners
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Inspire students by sharing your expertise, helping them develop
//                 new skills and advance their careers.
//               </p>
//             </div>

//             <div className="bg-[#FAF9F6] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group hover:border-green-200">
//               <div className="flex items-center justify-center mb-4">
//                 <div className="text-green-600 p-3 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors duration-300">
//                   <FaMoneyBillWave className="w-10 h-10" />
//                 </div>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
//                 Earn and Grow
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Build your reputation, connect with a global audience, and earn
//                 income with every paid enrollment.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How to Get Started Section */}
//       <section className="bg-white py-12 md:py-16">
//         <div className="max-w-7xl mx-auto px-4 md:px-6">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//               How to Get Started
//             </h2>
//             <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
//           </div>

//           {/* Steps Section */}
//           <div className="space-y-10">
//             {/* Step 1 */}
//             <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 bg-white p-6 md:p-8">
//               <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left">
//                 <h3
//                   className="text-xl font-extrabold md:text-2xl font-cookie text-gray-900 mb-3"
//                   style={{ fontSize: "clamp(1.25rem, 3vw, 1.5rem)" }}
//                 >
//                   Step 1: Build Your Course Structure
//                 </h3>
//                 <p
//                   className="text-gray-600 leading-relaxed"
//                   style={{ fontSize: "clamp(0.9rem, 2vw, 1.125rem)" }}
//                 >
//                   Begin with your expertise and passion, then identify a high-potential topic using our Marketplace Insights tool. Your unique teaching approach and perspective are what make the difference.
//                 </p>
//               </div>
//               <div className="w-full md:w-1/2 order-1 md:order-2">
//                 <video
//                   controls
//                   controlsList="nodownload"
//                   className="w-full h-auto rounded-lg shadow-md object-cover"
//                   autoPlay
//                   muted
//                   style={{
//                     maxHeight: "clamp(450px, 30vw, 300px)",
//                   }}
//                 >
//                   <source src="/assests/step1.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//             </div>

//             {/* Step 2 */}
//             <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 bg-white p-6 md:p-8 shadow-lg border border-gray-100 rounded-lg">
//               <div className="w-full md:w-1/2 order-2 md:order-2 text-center md:text-left">
//                 <h3
//                   className="text-xl font-bold md:text-2xl text-gray-900 mb-3"
//                   style={{ fontSize: "clamp(1.25rem, 3vw, 1.5rem)" }}
//                 >
//                   Step 2: Start Recording
//                 </h3>
//                 <p
//                   className="text-gray-600 leading-relaxed"
//                   style={{ fontSize: "clamp(0.9rem, 2vw, 1.125rem)" }}
//                 >
//                   Begin recording high-quality video lessons using simple tools. Keep content engaging and informative.
//                 </p>
//               </div>
//               <div className="w-full md:w-1/2 order-1 md:order-1">
//               <video
//                   controls
//                   controlsList="nodownload"
//                   className="w-full h-auto rounded-lg shadow-md object-cover"
//                   autoPlay
//                   muted
//                   style={{
//                     maxHeight: "clamp(450px, 30vw, 300px)",
//                   }}
//                 >
//                   <source src="/assests/step2.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//             </div>

//             {/* Step 3 */}
//             <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 bg-white p-6 md:p-8 shadow-lg border border-gray-100 rounded-lg">
//               <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left">
//                 <h3
//                   className="text-xl md:text-2xl font-semibold text-gray-900 mb-3"
//                   style={{ fontSize: "clamp(1.25rem, 3vw, 1.5rem)" }}
//                 >
//                   Step 3: Upload Video
//                 </h3>
//                 <p
//                   className="text-gray-600 leading-relaxed"
//                   style={{ fontSize: "clamp(0.9rem, 2vw, 1.125rem)" }}
//                 >
//                   Upload your videos to the platform and organize them into courses. Optimize for best viewing experience.
//                 </p>
//               </div>
//               <div className="w-full md:w-1/2 order-1 md:order-2">
//               <video
//                   controls
//                   controlsList="nodownload"
//                   className="w-full h-auto rounded-lg shadow-md object-cover"
//                   autoPlay
//                   muted
//                   style={{
//                     maxHeight: "clamp(450px, 30vw, 300px)",
//                   }}
//                 >
//                   <source src="/assests/step3.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="flex items-center justify-between">
//           <div>
//             <p className="text-gray-600">
//               Current Role:{" "}
//               <span className="font-semibold text-blue-600 capitalize">
//                 {role}
//               </span>
//             </p>
//           </div>
//           {role !== "admin" && (
//             <button
//               onClick={() => setOpen(true)}
//               disabled={!allQuestionsAnswered}
//               className={`px-4 py-2 rounded-lg font-medium text-white transition-colors duration-200 ${
//                 allQuestionsAnswered
//                   ? "bg-blue-500 hover:bg-blue-600"
//                   : "bg-gray-400 cursor-not-allowed"
//               }`}
//             >
//               Change Role to Admin
//             </button>
//           )}
//         </div>

//       {open && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg">
//             <h4 className="text-lg font-semibold text-gray-800 mb-3">
//               Confirm Role Change
//             </h4>
//             <p className="text-gray-600 mb-5">
//               Are you sure you want to upgrade your role to Admin? This will
//               grant additional privileges.
//             </p>
//             <div className="flex justify-end space-x-3">
//               <button
//                 onClick={() => setOpen(false)}
//                 className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleRoleUpdate}
//                 disabled={isLoading}
//                 className={`bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 ${
//                   isLoading ? "opacity-50 cursor-not-allowed" : ""
//                 }`}
//               >
//                 {isLoading ? "Updating..." : "Confirm"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Teacher;