// import React from "react";
// import { FaChartLine, FaClock, FaUsers, FaLaptopCode, FaChartBar, FaSync, FaCheckCircle, FaTrophy } from "react-icons/fa";

// type Props = {};

// const Comparison: React.FC<Props> = (props) => {
//   const comparisonData = [
//     { 
//       label: "Content", 
//       learnifyHub: "Creator-driven, dynamic", 
//       traditional: "Predefined, static",
//       icon: <FaLaptopCode />
//     },
//     { 
//       label: "Learning Style", 
//       learnifyHub: "Interactive, peer-driven", 
//       traditional: "Passive, top-down",
//       icon: <FaUsers />
//     },
//     { 
//       label: "Engagement", 
//       learnifyHub: "95% completion rate", 
//       traditional: "20% completion rate",
//       icon: <FaCheckCircle />
//     },
//     { 
//       label: "Accessibility", 
//       learnifyHub: "Open to all, expert-led", 
//       traditional: "Limited to L&D teams",
//       icon: <FaUsers />
//     },
//     { 
//       label: "Speed", 
//       learnifyHub: "Learn in minutes", 
//       traditional: "Takes weeks",
//       icon: <FaClock />
//     },
//     { 
//       label: "Effectiveness", 
//       learnifyHub: "91% skill improvement", 
//       traditional: "Hard to measure impact",
//       icon: <FaTrophy />
//     },
//     { 
//       label: "Tracking", 
//       learnifyHub: "Real-time insights", 
//       traditional: "Limited analytics",
//       icon: <FaChartBar />
//     },
//     { 
//       label: "Adaptability", 
//       learnifyHub: "Continuously updated", 
//       traditional: "Fixed, outdated content",
//       icon: <FaSync />
//     },
//   ];

//   return (
//     <div className="bg-white text-black py-10 px-5 text-center my-16">
//       <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-8">
//         Why Choose LearnifyHub?
//       </h2>
//       <p className="text-lg md:text-xl mb-12 text-gray-600 max-w-3xl font-poppins mx-auto">
//         See how our innovative approach to learning compares to traditional learning management systems.
//       </p>

//       <div className="max-w-6xl mx-auto">
//         {/* Mobile view - cards */}
//         <div className="md:hidden space-y-6">
//           {comparisonData.map((item, index) => (
//             <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
//               <div className="bg-[#323232] text-white p-4 flex items-center justify-center gap-2">
//                 <span className="text-xl">{item.icon}</span>
//                 <h3 className="text-lg font-bold font-poppins">{item.label}</h3>
//               </div>
//               <div className="grid grid-cols-1 divide-y">
//                 <div className="p-4">
//                   <p className="text-green-500 font-semibold mb-1 text-sm">LearnifyHub</p>
//                   <p className="font-medium">{item.learnifyHub}</p>
//                 </div>
//                 <div className="p-4 bg-gray-50">
//                   <p className="text-gray-500 font-semibold mb-1 text-sm">Traditional LMS</p>
//                   <p className="font-medium text-gray-700">{item.traditional}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Desktop view - table */}
//         <div className="hidden md:block overflow-hidden rounded-xl shadow-lg">
//           {/* Header row */}
//           <div className="grid grid-cols-3 bg-white">
//             <div className="py-5 px-6 bg-[#323232] text-white font-bold text-lg"></div>
//             <div className="py-5 px-6 bg-green-500 text-white font-bold text-lg text-center font-poppins flex items-center justify-center">
//               <FaChartLine className="mr-2" /> LearnifyHub
//             </div>
//             <div className="py-5 px-6 bg-gray-200 text-gray-700 font-bold text-lg text-center font-poppins">
//               Traditional LMS
//             </div>
//           </div>

//           {/* Data rows */}
//           {comparisonData.map((item, index) => (
//             <div 
//               key={index} 
//               className={`grid grid-cols-3 border-t border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
//             >
//               <div className="py-4 px-6 flex items-center font-semibold text-gray-700 font-poppins">
//                 <span className="text-[#323232] mr-3">{item.icon}</span>
//                 {item.label}
//               </div>
//               <div className="py-4 px-6 font-medium text-center border-x border-gray-200">{item.learnifyHub}</div>
//               <div className="py-4 px-6 font-medium text-center text-gray-600">{item.traditional}</div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <div className="mt-10">
//           <button className="bg-[#323232] hover:bg-green-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 font-poppins">
//             Start Learning Today
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Comparison;
import React from "react";
import { HiCheck } from "react-icons/hi";
import { FaChartLine, FaClock, FaUsers, FaLaptopCode, FaChartBar, FaSync, FaCheckCircle, FaTrophy } from "react-icons/fa";

type Props = {};

const Comparison: React.FC<Props> = (props) => {
  const comparisonData = [
    { 
      label: "Content", 
      learnifyHub: "Creator-driven, dynamic", 
      traditional: "Predefined, static",
      icon: <FaLaptopCode />
    },
    { 
      label: "Learning Style", 
      learnifyHub: "Interactive, peer-driven", 
      traditional: "Passive, top-down",
      icon: <FaUsers />
    },
    { 
      label: "Engagement", 
      learnifyHub: "95% completion rate", 
      traditional: "20% completion rate",
      icon: <FaCheckCircle />
    },
    { 
      label: "Accessibility", 
      learnifyHub: "Open to all, expert-led", 
      traditional: "Limited to L&D teams",
      icon: <FaUsers />
    },
    { 
      label: "Speed", 
      learnifyHub: "Learn in minutes", 
      traditional: "Takes weeks",
      icon: <FaClock />
    },
    { 
      label: "Effectiveness", 
      learnifyHub: "91% skill improvement", 
      traditional: "Hard to measure impact",
      icon: <FaTrophy />
    },
    { 
      label: "Tracking", 
      learnifyHub: "Real-time insights", 
      traditional: "Limited analytics",
      icon: <FaChartBar />
    },
    { 
      label: "Adaptability", 
      learnifyHub: "Continuously updated", 
      traditional: "Fixed, outdated content",
      icon: <FaSync />
    },
  ];

  return (
    <div className="bg-black text-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4">
            Why Choose <span className="text-green-500">LearnifyHub</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl font-poppins mx-auto">
            See how our innovative approach compares to traditional learning management systems
          </p>
        </div>

        {/* Mobile View - Accordion-style Cards */}
        <div className="md:hidden space-y-4">
          {comparisonData.map((item, index) => (
            <div key={index} className="bg-[#323232] rounded-lg overflow-hidden shadow-lg">
              <div className="p-4 flex items-center gap-3">
                <span className="text-green-500 text-xl">{item.icon}</span>
                <h3 className="text-xl font-bold font-poppins">{item.label}</h3>
              </div>
              <div className="grid grid-cols-1 gap-1">
                <div className="bg-[#232323] p-4">
                  <div className="flex items-center mb-2">
                    <HiCheck className="text-green-500 mr-2" />
                    <p className="text-green-500 font-semibold text-sm">LearnifyHub</p>
                  </div>
                  <p className="font-medium text-white pl-6">{item.learnifyHub}</p>
                </div>
                <div className="bg-[#1A1A1A] p-4">
                  <p className="text-gray-400 font-semibold text-sm mb-2">Traditional LMS</p>
                  <p className="font-medium text-gray-300 pl-6">{item.traditional}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Table */}
        <div className="hidden md:block overflow-hidden rounded-lg shadow-2xl">
          {/* Header Row */}
          <div className="grid grid-cols-3">
            <div className="py-6 px-6 bg-[#323232] font-bold text-xl"></div>
            <div className="py-6 px-6 bg-green-600 text-white font-bold text-xl text-center font-poppins flex items-center justify-center">
              <FaChartLine className="mr-2" /> LearnifyHub
            </div>
            <div className="py-6 px-6 bg-[#222222] text-gray-300 font-bold text-xl text-center font-poppins">
              Traditional LMS
            </div>
          </div>
          
          {/* Data Rows */}
          {comparisonData.map((item, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-3 border-t border-[#444444] ${index % 2 === 0 ? 'bg-[#323232]' : 'bg-[#2a2a2a]'}`}
            >
              <div className="py-5 px-6 flex items-center font-semibold text-white font-poppins">
                <span className="text-green-500 mr-3 text-lg">{item.icon}</span>
                {item.label}
              </div>
              <div className="py-5 px-6 font-medium font-poppins text-center border-x border-[#444444] text-white">{item.learnifyHub}</div>
              <div className="py-5 px-6 font-medium font-poppins text-center text-gray-300">{item.traditional}</div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-3 px-8 py-4 bg-[#323232] hover:bg-green-500 text-white font-bold rounded-lg transition-all duration-300 font-poppins text-lg">
            Start Learning Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comparison;