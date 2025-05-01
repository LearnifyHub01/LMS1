import React, { FC, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai";
import { FaSpinner } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import {toast} from 'react-hot-toast'
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

type Props = {
  setRoute: (route: string) => void;
  setOpen: (open: boolean) => void;
};

const schema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login: FC<Props> = ({ setRoute, setOpen }) => {
  const [show, setShow] = useState(false);
  const [login, { isSuccess, error }] = useLoginMutation();
  const [fadeIn, setFadeIn] = useState(false);
  const [isLoading,setIsLoading] = useState(false)

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      setIsLoading(true);
      try {
        await login({ email, password }).unwrap();
      } catch (error) {
        console.error("Login failed", error);
      } finally {
        setIsLoading(false); // Stop loading spinner
      }
    },
  });

  useEffect(() => {
    setFadeIn(true);

    if (isSuccess) {
      toast.success("Login Successfully");
      setOpen(false);
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div
      className={`w-full transition-opacity duration-1000 transform ${
        fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
        Log in
      </h1>
      <p className="text-center mb-2 text-gray-500 dark:text-gray-400">
        Continue your learning journey
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          value={values.email}
          placeholder="Email"
          className={`w-full mt-4 py-2 border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none dark:focus:border-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100 ${
            errors.email && touched.email && "border-red-500"
          }`}
          onChange={handleChange}
          required
        />

        {errors.email && touched.email && (
          <span className="text-red-500 pt-2 block">{errors.email}</span>
        )}
        <div className="w-full mt-5 relative mb-9">
          <input
            type={!show ? "password" : "text"}
            id="password"
            value={values.password}
            placeholder="Password"
            className={`w-full mt-3 py-2 border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none dark:focus:border-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200 ${
              errors.password && touched.password && "border-red-500"
            }`}
            onChange={handleChange}
            required
          />

          {!show ? (
            <AiOutlineEyeInvisible
              className="absolute bottom-2.5 right-3 z-1 cursor-pointer text-gray-700 dark:text-gray-300"
              size={20}
              onClick={() => setShow(true)}
            />
          ) : (
            <AiOutlineEye
              className="absolute bottom-2.5 right-3 z-1 cursor-pointer text-gray-700 dark:text-gray-300"
              size={20}
              onClick={() => setShow(false)}
            />
          )}
          {errors.password && touched.password && (
            <span className="text-red-500 absolute pt-1 block">
              {errors.password}
            </span>
          )}
        </div>
        <button
  type="submit"
  className="w-full px-4 py-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition flex justify-center items-center"
  disabled={isLoading} // Prevent multiple clicks
>
  {isLoading ? (
    <FaSpinner className="animate-spin text-white" size={20} />
  ) : (
    "Log in"
  )}
</button>
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <span
            className="text-[#2190ff] pl-1 cursor-pointer"
            onClick={() => setRoute("Sign-Up")}
          >
            Sign up
          </span>
        </p>
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <span
            className="text-[#2190ff] pl-1 cursor-pointer"
            onClick={() => redirect("/forgotemail")}
          >
            forgot password
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
          By signing up to create an account, I accept the Company's
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
    </div>
  );
};

export default Login;
// import React, { FC, useState, useEffect } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import {
//   AiOutlineEye,
//   AiOutlineEyeInvisible,
//   AiFillGithub,
// } from "react-icons/ai";
// import { FaSpinner } from "react-icons/fa"
// import { FcGoogle } from "react-icons/fc";
// import { useLoginMutation } from "@/redux/features/auth/authApi";
// import toast from "react-hot-toast";
// import { signIn } from "next-auth/react";
// import { redirect } from "next/navigation";

// type Props = {
//   setRoute: (route: string) => void;
//   setOpen: (open: boolean) => void;
// };

// const schema = Yup.object({
//   email: Yup.string()
//     .email("Invalid email format")
//     .required("Email is required"),
//   password: Yup.string().required("Password is required"),
// });

// const Login: FC<Props> = ({ setRoute, setOpen }) => {
//   const [show, setShow] = useState(false);
//   const [login, { isSuccess, error }] = useLoginMutation();
//   const [fadeIn, setFadeIn] = useState(false);
//   const [isLoading, setIsLoading] = useState(false)

//   const formik = useFormik({
//     initialValues: { email: "", password: "" },
//     validationSchema: schema,
//     onSubmit: async ({ email, password }) => {
//       setIsLoading(true);
//       try {
//         await login({ email, password }).unwrap();
//       } catch (error) {
//         console.error("Login failed", error);
//       } finally {
//         setIsLoading(false); // Stop loading spinner
//       }
//     },
//   });

//   useEffect(() => {
//     setFadeIn(true);

//     if (isSuccess) {
//       toast.success("Login Successfully");
//       setOpen(false);
//     }
//     if (error) {
//       if ("data" in error) {
//         const errorData = error as any;
//         toast.error(errorData.data.message);
//       }
//     }
//   }, [isSuccess, error]);

//   const { errors, touched, values, handleChange, handleSubmit } = formik;

//   return (
//     <div
//       className={`w-full max-w-md mx-auto p-6 rounded-lg  bg-white dark:bg-gray-800 transition-all duration-500 ${
//         fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//       }`}
//     >
//       <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
//         Welcome Back
//       </h1>
//       <p className="text-center mb-6 text-gray-600 dark:text-gray-300">
//         Continue your learning journey
//       </p>
      
//       <form onSubmit={handleSubmit} className="space-y-5">
//         <div className="relative">
//           <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={values.email}
//             placeholder="your@email.com"
//             className={`w-full px-4 py-3 rounded-md border ${
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

//         <div className="relative">
//           <div className="flex justify-between">
//             <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">
//               Password
//             </label>
//             <span
//               className="text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 cursor-pointer"
//               onClick={() => redirect("/forgotemail")}
//             >
//               Forgot password?
//             </span>
//           </div>
//           <div className="relative">
//             <input
//               type={!show ? "password" : "text"}
//               id="password"
//               value={values.password}
//               placeholder="••••••••"
//               className={`w-full px-4 py-3 rounded-md border ${
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
//                 size={20}
//                 onClick={() => setShow(true)}
//               />
//             ) : (
//               <AiOutlineEye
//                 className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
//                 size={20}
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

//         <button
//           type="submit"
//           className="w-full px-4 py-3 mt-6 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 flex justify-center items-center disabled:bg-blue-400 disabled:cursor-not-allowed"
//           disabled={isLoading}
//         >
//           {isLoading ? (
//             <FaSpinner className="animate-spin mr-2" size={18} />
//           ) : null}
//           {isLoading ? "Logging in..." : "Log in"}
//         </button>

//         <div className="flex items-center my-6">
//           <hr className="flex-1 border-gray-300 dark:border-gray-600" />
//           <span className="px-4 text-sm text-gray-500 dark:text-gray-400 font-medium">
//             OR CONTINUE WITH
//           </span>
//           <hr className="flex-1 border-gray-300 dark:border-gray-600" />
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <button
//             type="button"
//             onClick={() => signIn("google")}
//             className="flex items-center justify-center py-2.5 px-4 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
//           >
//             <FcGoogle size={20} className="mr-2" />
//             <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Google</span>
//           </button>
//           <button
//             type="button"
//             onClick={() => signIn("github")}
//             className="flex items-center justify-center py-2.5 px-4 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
//           >
//             <AiFillGithub size={20} className="mr-2 text-gray-900 dark:text-white" />
//             <span className="text-sm font-medium text-gray-700 dark:text-gray-300">GitHub</span>
//           </button>
//         </div>
//       </form>

//       <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
//         Don't have an account?{" "}
//         <span
//           className="text-blue-600 dark:text-blue-400 font-medium cursor-pointer hover:underline"
//           onClick={() => setRoute("Sign-Up")}
//         >
//           Sign up
//         </span>
//       </p>

//       <p className="mt-6 text-xs text-center text-gray-500 dark:text-gray-400">
//         By signing in, you agree to our{" "}
//         <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
//           Terms of Use
//         </a>{" "}
//         and{" "}
//         <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
//           Privacy Policy
//         </a>
//       </p>
//     </div>
//   );
// };

// export default Login;