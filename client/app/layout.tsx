// // 'use client'
// //  import "./globals.css";
// //  import {Poppins} from "next/font/google";
// //  import {Josefin_Sans} from "next/font/google";
// //  import { ThemeProvider } from "./utils/theme-provider";
// //  import { Toaster } from "react-hot-toast";
// //  import { Providers } from "./Providers";
// //  import {SessionProvider} from "next-auth/react"
// //  import Loader from "./components/Loader/Loader"
// // import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
// // import { SocketProvider } from '@/context/SocketProvider';

// // const poppins = Poppins({
// //   subsets: ["latin", "latin-ext"],  
// //   variable: "--font-poppins",
// //   weight: ["400", "500","600", "700"],  
// // });

// // const josefin = Josefin_Sans({
// //   subsets: ["latin", "latin-ext"],  
// //   variable: "--font-josefin-sans",
// //   weight: ["400", "500","600", "700"],  
// // });

// // export default function RootLayout({
// //   children,
// // }: Readonly<{
// //   children: React.ReactNode;
// // }>) {
// //   return (
// //     <html lang="en">
// //       <body
// //         className={`${poppins.variable} ${josefin.variable} !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300` }>
// //         <Providers>
// //           <SessionProvider>
// //         <ThemeProvider attribute='class' defaultTheme="system" enableSystem>
// //           <SocketProvider>

      
// //          <Custom>
// //           {children}
// //          </Custom>

// //           <Toaster position="top-center" reverseOrder={false}/>
// //           </SocketProvider>
// //         </ThemeProvider>
// //         </SessionProvider>
// //         </Providers>
// //       </body>
// //     </html>
// //   );
// // }

// // const Custom : React.FC<{children : React.ReactNode}> = ({children})=>{
// //   const { isLoading, data: user } = useLoadUserQuery({});

// //   return isLoading ? (
// //     <Loader />
// //   ) : (
// //     <SocketProvider user={session?.user}>{children}</SocketProvider>
// //   );
// // }

// "use client";
// import "./globals.css";
// import { Poppins } from "next/font/google";
// import { Josefin_Sans } from "next/font/google";
// import { ThemeProvider } from "./utils/theme-provider";
// import { Toaster } from "react-hot-toast";
// import { Providers } from "./Providers";
// import { SessionProvider } from "next-auth/react";
// import Loader from "./components/Loader/Loader";
// import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
// import { SocketProvider } from "@/context/SocketProvider";
// import { RootState } from "@/redux/store";
// import { useSelector } from "react-redux";


// const poppins = Poppins({
//   subsets: ["latin", "latin-ext"],
//   variable: "--font-poppins",
//   weight: ["400", "500", "600", "700"],
// });

// const josefin = Josefin_Sans({
//   subsets: ["latin", "latin-ext"],
//   variable: "--font-josefin-sans",
//   weight: ["400", "500", "600", "700"],
// });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${poppins.variable} ${josefin.variable} !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}
//       >

//         <Providers>
//           <SessionProvider>
//             <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//               <Custom>{children}</Custom>
//               <Toaster position="top-center" reverseOrder={false} />
//             </ThemeProvider>
//           </SessionProvider>
//         </Providers>
//       </body>
//     </html>
//   );
// }

// const Custom: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const { isLoading } = useLoadUserQuery({});
//   const user = useSelector((state: RootState) => state.auth.user);

//   return isLoading ? (
//     <Loader />
//   ) : (
//     <SocketProvider user={user}>{children}</SocketProvider> // ✅ Pass `user`, not `session?.user`
//   );
// };
"use client";
import "./globals.css";
import { Poppins, Josefin_Sans, Montserrat, Anton, Oswald, Raleway, Manrope, Barlow_Condensed, Exo_2, Dancing_Script, Pacifico, Great_Vibes, Satisfy, Allura, Cookie } from "next/font/google";
import { ThemeProvider } from "./utils/theme-provider";
import { Toaster } from "react-hot-toast";
import { Providers } from "./Providers";
import { SessionProvider } from "next-auth/react";
import Loader from "./components/Loader/Loader";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { SocketProvider } from "@/context/SocketProvider";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const josefin = Josefin_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-josefin-sans",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
});

const oswald = Oswald({
  subsets: ["latin", "latin-ext"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

const raleway = Raleway({
  subsets: ["latin", "latin-ext"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  weight: ["400", "500", "600", "700"],
});

const exo = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo-2",
  weight: ["400", "500", "600", "700"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  weight: ["400", "500", "600", "700"],
});

const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: "400",
});

const greatvibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  weight: "400",
});

const satisfy = Satisfy({
  subsets: ["latin"],
  variable: "--font-satisfy",
  weight: "400",
});

const allura = Allura({
  subsets: ["latin"],
  variable: "--font-allura",
  weight: "400",
});

const cookie = Cookie({
  subsets: ["latin"],
  variable: "--font-cookie",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${poppins.variable} ${josefin.variable} ${montserrat.variable} ${anton.variable} ${oswald.variable} ${raleway.variable} ${manrope.variable} ${barlow.variable} ${exo.variable} ${dancing.variable} ${pacifico.variable} ${greatvibes.variable} ${satisfy.variable} ${allura.variable} ${cookie.variable} 
          !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300
        `}
      >
        <Providers>
          <SessionProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Custom>{children}</Custom>
              <Toaster position="top-center" reverseOrder={false} />
            </ThemeProvider>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}

const Custom: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading } = useLoadUserQuery({});
  const user = useSelector((state: RootState) => state.auth.user);

  return isLoading ? (
    <Loader />
  ) : (
    <SocketProvider user={user}>{children}</SocketProvider>
  );
};
