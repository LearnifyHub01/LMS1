// import type { Config } from "tailwindcss";

// const config:Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   darkMode:["class"],
//   theme: {
//     extend: {
  
//       fontFamily:{
//         Poppins:["var(--font-Poppins)"],
//         Josefin:["var(--font-Josefin)"],
//       },
//       backgroundImage:{
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic' : 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
        
//       },
//       screens:{
//         "1000px":"1000px",
//         "1100px":"1100px",
//         "1200px":"1200px",
//         "1300px":"1300px",
//         "1500px":"1500px",
//         "800px":"800px",
//         "500px":"500px"
//       }
//     },
//   },
//   plugins: [],
// } 

// export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        barlow: ["Barlow Condensed", "sans-serif"],
        exo: ["Exo 2", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
        pacifico: ["Pacifico", "cursive"],
        greatvibes: ["Great Vibes", "cursive"],
        satisfy: ["Satisfy", "cursive"],
        allura: ["Allura", "cursive"],
        cookie: ["Cookie", "cursive"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        "500px": "500px",
        "800px": "800px",
        "1000px": "1000px",
        "1100px": "1100px",
        "1200px": "1200px",
        "1300px": "1300px",
        "1500px": "1500px",
      },
    },
  },
  plugins: [],
};

export default config;
