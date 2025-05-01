// "use client";
// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
// import { BiMoon, BiSun } from "react-icons/bi";

// export const ThemeSwitcher = () => {
//   const [mounted, setMounted] = useState(false);
//   const {theme, setTheme} = useTheme();

//   useEffect(() => setMounted(true), []);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <>
//       <div className="flex items-center ml-2 justify-center"></div>
//       {theme === "light" ? (
//         <BiMoon
//           className="cursor-pointer"
//           fill="black"
//           size={25}
//           onClick={() => setTheme("dark")}
//         />
//       ) : (
//         <BiSun
//           className="cursor-pointer"
//           size={25}
//           fill="white"
//           onClick={() => setTheme("light")}
//         />
//       )}
//     </>
//   );
// };

// export default ThemeSwitcher;
"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";
import { FaRegMoon } from "react-icons/fa6";
import { BsMoon } from "react-icons/bs";
import { GiUbisoftSun } from "react-icons/gi";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="flex items-center px-4 py-2 border border-black dark:border-white text-black dark:text-white rounded-md hover:bg-white/10 transition-colors backdrop-blur-sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <BsMoon   size={22} className="text-black " />
      ) : (
        <GoSun    size={22} className="text-white" />
      )}
    </button>
  );
};

export default ThemeSwitcher;