// // import { useActivationMutation } from "@/redux/features/auth/authApi";
// // import React, { FC, useState, useRef, useEffect } from "react";
// // import { toast } from "react-hot-toast";
// // import { VscWorkspaceTrusted } from "react-icons/vsc";
// // import { useSelector } from "react-redux";
// // import { FaSpinner } from "react-icons/fa"

// // // Props type definition
// // type Props = {
// //   setRoute: (route: string) => void;
// // };

// // // Type definition for the OTP verification number
// // type VerifyNumber = {
// //   "0": string;
// //   "1": string;
// //   "2": string;
// //   "3": string;
// // };

// // // Functional component for the verification screen
// // const Verification: FC<Props> = ({ setRoute }) => {
// //   const { token } = useSelector((state: any) => state.auth);
// //   const [activation, { isSuccess, error }] = useActivationMutation();
// //      const [isLoading,setIsLoading] = useState(false)

// //   const [invalidError, setInvalidError] = useState<boolean>(false);

// //   useEffect(() => {
// //     if (isSuccess) {
// //       toast.success("Account Activated Successfully");
// //       setRoute("Login");
// //     }
// //     if (error) {
// //       if ("data" in error) {
// //         const errorData = error as any;
// //         toast.error(errorData.data.message);
// //         setInvalidError(true);
// //       } else {
// //         console.log("An error occurred:", error);
// //       }
// //     }
// //   }, [isSuccess, error]);

// //   const inputRefs = [
// //     useRef<HTMLInputElement>(null),
// //     useRef<HTMLInputElement>(null),
// //     useRef<HTMLInputElement>(null),
// //     useRef<HTMLInputElement>(null),
// //   ];

// //   const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
// //     0: "",
// //     1: "",
// //     2: "",
// //     3: "",
// //   });

// //   const VerificationHandler = async () => {
// //     const verificationNumber = Object.values(verifyNumber).join("");
// //     if (verificationNumber.length !== 4) {
// //       setInvalidError(true);
// //       return;
// //     }try {
// //       await activation({
// //         activation_token: token,
// //         activation_code: verificationNumber,
// //       });
// //     } catch (error) {
// //       console.error("verification failed",error)
// //     }finally{
// //       setIsLoading(false)
// //     }
   
// //   };

// //   const handleInputChange = (index: number, value: string) => {
// //     if (!/^[0-9]?$/.test(value)) return; // Only allow single numeric input

// //     setInvalidError(false); // Reset the error when the user types

// //     const newVerifyNumber = { ...verifyNumber, [index]: value };
// //     setVerifyNumber(newVerifyNumber);

// //     // Move focus to the next input field if current one is filled
// //     if (value && index < 3) {
// //       inputRefs[index + 1].current?.focus();
// //     }
// //   };

// //   const handleBackspace = (index: number, value: string) => {
// //     if (value === "") {
// //       // Only move focus to previous input if the current one is empty
// //       if (index > 0) {
// //         inputRefs[index - 1].current?.focus();
// //       }
// //     }
// //   };

// //   const isOtpComplete = Object.values(verifyNumber).every((digit) => digit !== "");

// //   return (
// //     <div className="verification-container">
// //       <h1 className="text-2xl font-semibold text-center">Verify your Account</h1>

// //       <div className="w-full flex items-center justify-center mt-4">
// //         <div className="w-[80px] h-[80px] rounded-full bg-[#497DF2] flex items-center justify-center">
// //           <VscWorkspaceTrusted size={40} color="white" />
// //         </div>
// //       </div>

// //       <div className="code-inputs-container flex justify-center gap-4 mt-6">
// //         {Object.keys(verifyNumber).map((key, index) => (
// //           <input
// //             type="text"
// //             key={key}
// //             ref={inputRefs[index]}
// //             className={`verification-input ${
// //               invalidError ? "shake border-red-500" : "border-gray-400 dark:text-white"
// //             }`}
// //             maxLength={1}
// //             value={verifyNumber[key as keyof VerifyNumber]}
// //             onChange={(e) => handleInputChange(index, e.target.value)}
// //             onKeyDown={(e) => e.key === "Backspace" && handleBackspace(index, verifyNumber[key as keyof VerifyNumber])}
// //           />
// //         ))}
// //       </div>

// //       {/* Error Message */}
// //       {invalidError && !isOtpComplete && (
// //         <p className="text-red-500 text-center mt-4">Please enter a valid 4-digit OTP.</p>
// //       )}

// //       <div className="flex items-center justify-center mt-6">
// //         <button
// //          type="submit"
// //          className="w-full px-4 py-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition flex justify-center items-center"
// //          disabled={isLoading} // Prevent multiple clicks
// //        >
// //          {isLoading ? (
// //            <FaSpinner className="animate-spin text-white" size={20} />
// //          ) : (
// //            "Verify OTP"
// //          )}
// //        </button>
// //       </div>

// //       <br />
// //       <h5 className="text-center pt-2 text-[16px]">
// //         Go back to Sign in?{" "}
// //         <span
// //           className="pl-1 text-[#2190ff] cursor-pointer"
// //           onClick={() => setRoute("Login")}
// //         >
// //           Sign in
// //         </span>
// //       </h5>
// //     </div>
// //   );
// // };

// // export default Verification;

// import { useActivationMutation } from "@/redux/features/auth/authApi";
// import React, { FC, useState, useRef, useEffect } from "react";
// import { toast } from "react-hot-toast";
// import { VscWorkspaceTrusted } from "react-icons/vsc";
// import { useSelector } from "react-redux";

// // Props type definition
// type Props = {
//   setRoute: (route: string) => void;
// };

// // Type definition for the OTP verification number
// type VerifyNumber = {
//   "0": string;
//   "1": string;
//   "2": string;
//   "3": string;
// };

// // Functional component for the verification screen
// const Verification: FC<Props> = ({ setRoute }) => {
//   const { token } = useSelector((state: any) => state.auth);
//   const [activation, { isSuccess, error }] = useActivationMutation();

//   const [invalidError, setInvalidError] = useState<boolean>(false);

//   useEffect(() => {
//     if (isSuccess) {
//       toast.success("Account Activated Successfully");
//       setRoute("Login");
//     }
//     if (error) {
//       if ("data" in error) {
//         const errorData = error as any;
//         toast.error(errorData.data.message);
//         setInvalidError(true);
//       } else {
//         console.log("An error occured:", error);
//       }
//     }
//   }, [isSuccess, error]);

//   const inputRefs = [
//     useRef<HTMLInputElement>(null),
//     useRef<HTMLInputElement>(null),
//     useRef<HTMLInputElement>(null),
//     useRef<HTMLInputElement>(null),
//   ];

//   const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
//     0: "",
//     1: "",
//     2: "",
//     3: "",
//   });

//   const VerificationHandler = async () => {
//     const verificationNumber = Object.values(verifyNumber).join("");
//     if (verificationNumber.length !== 4) {
//       setInvalidError(true);
//       return;
//     }
//     await activation({
//       activation_token: token,
//       activation_code: verificationNumber,
//     });
//   };

//   const handleInputChange = (index: number, value: string) => {
//     setInvalidError(false); // Reset the error when the user types
//     const newVerifynumber = { ...verifyNumber, [index]: value };
//     setVerifyNumber(newVerifynumber);
    
//     if (value === "" && index > 0) {
//       inputRefs[index - 1].current?.focus();
//     } else if (value.length === 1 && index < 3) {
//       inputRefs[index + 1].current?.focus();
//     }
//   };

//   const isOtpComplete = Object.values(verifyNumber).every((digit) => digit !== "");

//   return (
//     <div className="verification-container">
//       <h1 className="text-2xl font-semibold text-center">Verify your Account</h1>

//       <div className="w-full flex items-center justify-center mt-4">
//         <div className="w-[80px] h-[80px] rounded-full bg-[#497DF2] flex items-center justify-center">
//           <VscWorkspaceTrusted size={40} color="white" />
//         </div>
//       </div>

//       <div className="code-inputs-container flex justify-center gap-4 mt-6">
//         {Object.keys(verifyNumber).map((key, index) => (
//           <input
//             type="text"
//             key={key}
//             ref={inputRefs[index]}
//             className={`verification-input ${
//               invalidError ? "shake border-red-500" : "border-gray-400  dark:text-white"
//             }`}
//             maxLength={1}
//             value={verifyNumber[key as keyof VerifyNumber]}
//             onChange={(e) => handleInputChange(index, e.target.value)}
//           />
//         ))}
//       </div>

//       {/* Error Message */}
//       {invalidError && !isOtpComplete && (
//         <p className="text-red-500 text-center mt-4">
//           Please complete all the fields.
//         </p>
//       )}

//       <div className="flex items-center justify-center mt-6">
//         <button
//           onClick={VerificationHandler}
//           className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//         >
//           Verify OTP
//         </button>
//       </div>

//       <br />
//       <h5 className="text-center pt-2 text-[16px]">
//         Go back to Sign in?{" "}
//         <span
//           className="pl-1 text-[#2190ff] cursor-pointer"
//           onClick={() => setRoute("Login")}
//         >
//           Sign in
//         </span>
//       </h5>
//     </div>
//   );
// };

// export default Verification

import { useActivationMutation } from "@/redux/features/auth/authApi";
import React, { FC, useState, useRef, useEffect } from "react";
import { toast } from "react-hot-toast";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { useSelector } from "react-redux";

// Props type definition
type Props = {
  setRoute: (route: string) => void;
};

// Type definition for the OTP verification number
type VerifyNumber = {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
};

// Functional component for the verification screen
const Verification: FC<Props> = ({ setRoute }) => {
  const { token } = useSelector((state: any) => state.auth);
  const [activation, { isSuccess, error }] = useActivationMutation();
  const [invalidError, setInvalidError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
    
    if (isSuccess) {
      toast.success("Account Activated Successfully");
      setRoute("Login");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
        setInvalidError(true);
      } else {
        console.log("An error occured:", error);
      }
    }
  }, [isSuccess, error]);

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
    0: "",
    1: "",
    2: "",
    3: "",
  });

  const VerificationHandler = async () => {
    setIsLoading(true);
    
    try {
      const verificationNumber = Object.values(verifyNumber).join("");
      if (verificationNumber.length !== 4) {
        setInvalidError(true);
        return;
      }
      
      await activation({
        activation_token: token,
        activation_code: verificationNumber,
      });
    } catch (error) {
      console.error("Verification failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (index: number, value: string) => {
    // Only allow digits
    if (value && !/^\d+$/.test(value)) return;
    
    setInvalidError(false); // Reset the error when the user types
    const newVerifynumber = { ...verifyNumber, [index]: value };
    setVerifyNumber(newVerifynumber);
    
    if (value === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    } else if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  // Handle keydown for backspace navigation
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && index > 0 && verifyNumber[index as keyof VerifyNumber] === '') {
      inputRefs[index - 1].current?.focus();
    }
  };

  const isOtpComplete = Object.values(verifyNumber).every((digit) => digit !== "");

  return (
    <div className={`w-full max-w-md mx-auto p-6 rounded-lg  bg-white dark:bg-gray-800 transition-all duration-500 ${
      fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`}>
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
        Verify Your Account
      </h1>
      
      <p className="text-center mb-6 text-gray-600 dark:text-gray-300">
        Enter the verification code we sent to your email
      </p>

      <div className="w-full flex items-center justify-center mt-6 mb-8">
        <div className="w-[80px] h-[80px] rounded-full bg-blue-600 flex items-center justify-center shadow-md">
          <VscWorkspaceTrusted size={40} className="text-white" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="flex justify-center gap-3 w-full">
          {Object.keys(verifyNumber).map((key, index) => (
            <input
              type="text"
              key={key}
              ref={inputRefs[index]}
              className={`w-14 h-14 text-center text-2xl font-semibold rounded-md border ${
                invalidError 
                  ? "border-red-500 dark:border-red-500 animate-shake" 
                  : "border-gray-300 dark:border-gray-600"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-gray-900`}
              maxLength={1}
              value={verifyNumber[key as keyof VerifyNumber]}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              autoFocus={index === 0}
            />
          ))}
        </div>

        {invalidError && (
          <p className="text-red-500 text-sm mt-2">
            {!isOtpComplete ? "Please enter all four digits" : "Invalid verification code"}
          </p>
        )}

        <button
          onClick={VerificationHandler}
          disabled={!isOtpComplete || isLoading}
          className="w-full px-4 py-3 mt-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {isLoading ? "Verifying..." : "Verify Account"}
        </button>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          Didn't receive a code?{" "}
          <button 
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Resend Code
          </button>
        </p>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Return to{" "}
          <span
            className="text-blue-600 dark:text-blue-400 font-medium cursor-pointer hover:underline"
            onClick={() => setRoute("Login")}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Verification;