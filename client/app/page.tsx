// "use client";
// import React, { FC, useState } from "react";
// import Heading from "./utils/Heading";
// import Header from "./components/Header";
// import Hero from "./components/Route/Hero";
// import Courses from "./components/Route/Courses";
// import Reviews from "./components/Route/Reviews";
// import Footer from "./components/Footer";
// import Comparison from "./components/Route/Comparison";
// import Chatbot from "./components/Route/Chatbot";
// import Teachers from "./components/Route/Teachers";
// import Start from "./components/Route/Start";

// interface Props {}

// const Page: FC<Props> = (props) => {
//   const [open, setOpen] = useState(false);
//   const [activeItem, setActiveItem] = useState(0);
//   const [route, setRoute] = useState("Login");

//   return (
//     <div>
//       <Heading
//         title="LearnifyHub"
//         description="it is a good platform"
//         keywords="programming,MERN"
//       />
//       {/* <Header
//         open={open}
//         setOpen={setOpen}
//         activeItem={activeItem}
//         setRoute={setRoute}
//         route={route}
//       /> */}
//       <Start/>
//       <Hero />
//       <Courses />
//       {/* <Teachers/> */}
//       {/* <Comparison/> */}
//       {/* <Chatbot/> */}
//       {/* <Reviews /> */}
//       <Footer />
//     </div>
//   );
// };

// export default Page;
"use client";
import React, { FC, useState,useEffect } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
import Courses from "./components/Route/Courses";
import Reviews from "./components/Route/Reviews";
import Footer from "./components/Footer";
import Comparison from "./components/Route/Comparison";
import Chatbot from "./components/Route/Chatbot";
import Teachers from "./components/Route/Teachers";
import Start from "./components/Route/Spalshscreen";
import Countdown from "./components/Route/Countdown";
import Learn from "./components/Route/Learn";
import { useSelector } from "react-redux";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");
  const [showSplashScreen, setShowSplashScreen] = useState(false);
  const user = useSelector((state:any) => state?.auth?.user);
  useEffect(() => {
    if (!user) {
      setShowSplashScreen(true); // Show splash only if user is not logged in
    }
  }, [user]);

  const handleSplashComplete = () => {
    setShowSplashScreen(false); // Hide splash screen after completion
  };

  return (
    <div>
      <Heading
        title="LearnifyHub"
        description="it is a good platform"
        keywords="programming,MERN"
      />

      {showSplashScreen ? (
        <Start onComplete={handleSplashComplete} />
      ) : (
        <>
          {/* <Countdown /> */}

          {/* <Header
            open={open}
            setOpen={setOpen}
            activeItem={activeItem}
            setRoute={setRoute}
            route={route}
          /> */}
          <Hero />
          <Courses />
          <Teachers />
          <Comparison />
          {/* <Chatbot/> */}
          <Reviews />
          <Learn/>
          <Footer />
        </>
      )}
    </div>
  );
};
export default Page;
