import React, { FC, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { styles } from "../../styles/style";
import { FaSpinner } from "react-icons/fa"
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

type Props = {
  setRoute: (route: string) => void;
};

const schema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignUp: FC<Props> = ({ setRoute }) => {
  const [show, setShow] = useState(false);
  const [register, { data, error, isSuccess }] = useRegisterMutation();
  const [fadeIn, setFadeIn] = useState(false);
    const [isLoading,setIsLoading] = useState(false)

  useEffect(() => {
    setFadeIn(true);

    if (isSuccess) {
      const message = data?.message || "Registration Successful";
      toast.success(message);
      setRoute("Verification");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ name, email, password }) => {
      const data = { name, email, password };
      try {
        setIsLoading(true)
        await register(data);
      } catch (error) {
        console.error("Signup failed", error);
      }finally{
        setIsLoading(false)
      }
      
      
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div
      className={`w-full transition-opacity duration-1000 transform ${
        fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <h1 className={`${styles.title}`}>Sign up</h1>
      <p className="text-center text-gray-500 dark:text-gray-400">
        start your learning with <b>LearnifyHub</b>
      </p>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-3">
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            placeholder="Name"
            className={`w-full mt-4 -mb-3 py-2 dark:focus:border-blue-500 focus:border-blue-500 border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-0 dark:bg-gray-700 dark:text-gray-100 ${
              errors.name && touched.name && "border-red-500"
            }`}
            onChange={handleChange}
            required
          />
          {errors.name && touched.name && (
            <span className="text-red-500 pt-2 block">{errors.name}</span>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            placeholder="Email"
            className={`w-full mt-4 dark:focus:border-blue-500 focus:border-blue-500 -mb-3 py-2 border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-0 dark:bg-gray-700 dark:text-gray-100 ${
              errors.email && touched.email && "border-red-500"
            }`}
            onChange={handleChange}
            required
          />
          {errors.email && touched.email && (
            <span className="text-red-500 pt-2 block">{errors.email}</span>
          )}
        </div>

        {/* Password Field */}
        <div className="w-full relative mb-9">
          <input
            type={!show ? "password" : "text"}
            id="password"
            name="password"
            value={values.password}
            placeholder="Password"
            className={`w-full mt-4 -mb-3 dark:focus:border-blue-500 focus:border-blue-500 py-2 border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-0 dark:bg-gray-700 dark:text-gray-100 ${
              errors.password && touched.password && "border-red-500"
            }`}
            onChange={handleChange}
            required
          />
          {!show ? (
            <AiOutlineEyeInvisible
              className="absolute bottom-2.5 right-3 z-1 cursor-pointer dark:text-white"
              size={20}
              onClick={() => setShow(true)}
            />
          ) : (
            <AiOutlineEye
              className="absolute bottom-2.5 right-3 z-1 cursor-pointer dark:text-white"
              size={20}
              onClick={() => setShow(false)}
            />
          )}
          {errors.password && touched.password && (
            <span className="text-red-500 absolute pt-2 block">
              {errors.password}
            </span>
          )}
        </div>

        {/* Submit Button */}
       <button
         type="submit"
         className="w-full px-4 py-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition flex justify-center items-center"
         disabled={isLoading} // Prevent multiple clicks
       >
         {isLoading ? (
           <FaSpinner className="animate-spin text-white" size={20} />
         ) : (
           "Sign up"
         )}
       </button>
        <br />
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          already have an account?{" "}
          <span
            className="text-[#2190ff] pl-1 cursor-pointer"
            onClick={() => setRoute("Login")}
          >
            Log in
          </span>
        </p>
        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300 dark:border-gray-600" />
          <span className="px-2 text-sm text-gray-500 dark:text-gray-400">
            or
          </span>
          <hr className="flex-1 border-gray-300 dark:border-gray-600" />
        </div>
        <div className="flex items-center justify-center my-3">
          <FcGoogle
            size={30}
            className="cursor-pointer mr-1"
            onClick={() => signIn("google")}
          />
          <AiFillGithub
            size={30}
            className="cursor-pointer ml-1"
            onClick={() => signIn("github")}
          />
        </div>
        <p className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
          By signing up to create an account I accept Company's
          <a href="#" className="text-blue-600">
            {" "}
            Terms of Use
          </a>{" "}
          and
          <a href="#" className="text-blue-600">
            {" "}
            Privacy Policy
          </a>
          .
        </p>
      </form>
      <br />
    </div>
  );
};

export default SignUp;

// import React, { FC, useState, useEffect } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import {
//   AiOutlineEye,
//   AiOutlineEyeInvisible,
//   AiFillGithub,
// } from "react-icons/ai";
// import { FcGoogle } from "react-icons/fc";
// import { FaSpinner } from "react-icons/fa"
// import { useRegisterMutation } from "@/redux/features/auth/authApi";
// import { toast } from "react-hot-toast";
// import { signIn } from "next-auth/react";

// type Props = {
//   setRoute: (route: string) => void;
// };

// const schema = Yup.object({
//   name: Yup.string().required("Please enter your name"),
//   email: Yup.string()
//     .email("Invalid email format")
//     .required("Email is required"),
//   password: Yup.string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required"),
// });

// const SignUp: FC<Props> = ({ setRoute }) => {
//   const [show, setShow] = useState(false);
//   const [register, { data, error, isSuccess }] = useRegisterMutation();
//   const [fadeIn, setFadeIn] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setFadeIn(true);

//     if (isSuccess) {
//       const message = data?.message || "Registration Successful";
//       toast.success(message);
//       setRoute("Verification");
//     }
//     if (error) {
//       if ("data" in error) {
//         const errorData = error as any;
//         toast.error(errorData.data.message);
//       }
//     }
//   }, [isSuccess, error]);

//   const formik = useFormik({
//     initialValues: { name: "", email: "", password: "" },
//     validationSchema: schema,
//     onSubmit: async ({ name, email, password }) => {
//       const data = { name, email, password };
//       try {
//         setIsLoading(true)
//         await register(data);
//       } catch (error) {
//         console.error("Signup failed", error);
//       } finally {
//         setIsLoading(false)
//       }
//     },
//   });

//   const { errors, touched, values, handleChange, handleSubmit } = formik;

//   return (
//     <div
//       className={`w-full max-w-sm mx-auto p-4 rounded-lg bg-white dark:bg-gray-800 transition-all duration-500 ${
//         fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//       }`}
//     >
//       <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-1">
//         Create Account
//       </h1>
//       <p className="text-center mb-4 text-sm text-gray-600 dark:text-gray-300">
//         Start your learning with <b>LearnifyHub</b>
//       </p>
      
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Name Field */}
//         <div className="relative">
//           <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">
//             Full Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={values.name}
//             placeholder="John Doe"
//             className={`w-full px-3 py-2 rounded-md border ${
//               errors.name && touched.name 
//                 ? "border-red-500 dark:border-red-500" 
//                 : "border-gray-300 dark:border-gray-600"
//             } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-gray-900`}
//             onChange={handleChange}
//             required
//           />
//           {errors.name && touched.name && (
//             <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>
//           )}
//         </div>

//         {/* Email Field */}
//         <div className="relative">
//           <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">
//             Email Address
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={values.email}
//             placeholder="your@email.com"
//             className={`w-full px-3 py-2 rounded-md border ${
//               errors.email && touched.email 
//                 ? "border-red-500 dark:border-red-500" 
//                 : "border-gray-300 dark:border-gray-600"
//             } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-gray-900`}
//             onChange={handleChange}
//             required
//           />
//           {errors.email && touched.email && (
//             <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>
//           )}
//         </div>

//         {/* Password Field */}
//         <div className="relative">
//           <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">
//             Password
//           </label>
//           <div className="relative">
//             <input
//               type={!show ? "password" : "text"}
//               id="password"
//               name="password"
//               value={values.password}
//               placeholder="••••••••"
//               className={`w-full px-3 py-2 rounded-md border ${
//                 errors.password && touched.password 
//                   ? "border-red-500 dark:border-red-500" 
//                   : "border-gray-300 dark:border-gray-600"
//               } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-gray-900 pr-10`}
//               onChange={handleChange}
//               required
//             />
//             {!show ? (
//               <AiOutlineEyeInvisible
//                 className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
//                 size={18}
//                 onClick={() => setShow(true)}
//               />
//             ) : (
//               <AiOutlineEye
//                 className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
//                 size={18}
//                 onClick={() => setShow(false)}
//               />
//             )}
//           </div>
//           {errors.password && touched.password && (
//             <span className="text-red-500 text-xs mt-1 block">
//               {errors.password}
//             </span>
//           )}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full px-3 py-2 mt-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 flex justify-center items-center disabled:bg-blue-400 disabled:cursor-not-allowed"
//           disabled={isLoading}
//         >
//           {isLoading ? (
//             <FaSpinner className="animate-spin mr-2" size={16} />
//           ) : null}
//           {isLoading ? "Creating account..." : "Sign up"}
//         </button>

//         <p className="text-center text-xs text-gray-600 dark:text-gray-400">
//           Already have an account?{" "}
//           <span
//             className="text-blue-600 dark:text-blue-400 font-medium cursor-pointer hover:underline"
//             onClick={() => setRoute("Login")}
//           >
//             Log in
//           </span>
//         </p>

//         <div className="flex items-center my-4">
//           <hr className="flex-1 border-gray-300 dark:border-gray-600" />
//           <span className="px-2 text-xs text-gray-500 dark:text-gray-400 font-medium">
//             OR CONTINUE WITH
//           </span>
//           <hr className="flex-1 border-gray-300 dark:border-gray-600" />
//         </div>

//         <div className="grid grid-cols-2 gap-2">
//           <button
//             type="button"
//             onClick={() => signIn("google")}
//             className="flex items-center justify-center py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
//           >
//             <FcGoogle size={16} className="mr-1" />
//             <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Google</span>
//           </button>
//           <button
//             type="button"
//             onClick={() => signIn("github")}
//             className="flex items-center justify-center py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
//           >
//             <AiFillGithub size={16} className="mr-1 text-gray-900 dark:text-white" />
//             <span className="text-xs font-medium text-gray-700 dark:text-gray-300">GitHub</span>
//           </button>
//         </div>

//         <p className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
//           By signing up to create an account I accept Company's{" "}
//           <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
//             Terms of Use
//           </a>{" "}
//           and{" "}
//           <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
//             Privacy Policy
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default SignUp;