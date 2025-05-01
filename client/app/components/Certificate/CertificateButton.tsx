// "use client";
// import React from "react";
// import { generateCertificate } from "./CertificateGenerator";

// interface CertificateButtonProps {
//   studentName: string;
//   courseName: string;
// }

// const CertificateButton: React.FC<CertificateButtonProps> = ({
//   studentName,
//   courseName,
// }) => {
//   const handleDownload = () => {
//     generateCertificate({
//       studentName,
//       courseName,
//       completionDate: new Date().toLocaleDateString(),
//     });
//   };

//   return (
//     <button
//       onClick={handleDownload}
//       className="bg-green-600 hover:bg-green-800 text-white mt-6 px-4 py-2 rounded-xl text-sm"
//     >
//       Download Certificate
//     </button>
//   );
// };

// export default CertificateButton;
"use client";
import React from "react";
import { generateCertificate } from "./CertificateGenerator";
import axios from "axios";
import { useGetOverallProgressQuery } from '@/redux/features/progress/progressApi';

// Type definition for the progress response
interface Progress {
  courseId: string;
  certificateDownloaded: boolean;
}

interface ProgressData {
  progressData: Progress[];
}

interface CertificateButtonProps {
  studentName: string;
  courseName: string;
  disabled?: boolean;
  courseId?: string;
  userId?: string;
}

const CertificateButton: React.FC<CertificateButtonProps> = ({
  studentName,
  courseName,
  disabled,
  courseId,
}) => {
  // Type the `prog` variable correctly as `ProgressData`
  const { data: prog } = useGetOverallProgressQuery() as { data: ProgressData | undefined };

  const handleDownload = async () => {
    await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URI}/certificate`,
      { courseId },
      {
        withCredentials: true,
      }
    );
    if (!disabled) {
      generateCertificate({
        studentName,
        courseName,
        completionDate: new Date().toLocaleDateString(),
      });
    }
  };

  // Safely access progressData
  const course = prog?.progressData?.find((c) => c.courseId === courseId);
  console.log(course);
  const isCompleted = course ? course.certificateDownloaded : false; // Set this based on the `course` data
  //disabled = isCompleted 
  return (
    <button
      onClick={handleDownload}
      disabled={disabled}
      className={`mt-6 px-4 py-2 uppercase rounded-xl text-sm text-white font-semibold transition-all duration-300 ${
        disabled
          ? "bg-gray-400 cursor-not-allowed opacity-50"
          : "bg-green-600 hover:bg-green-800 active:bg-green-900"
      }`}
    >
      Get Certificate
    </button>
  );
};

export default CertificateButton;
