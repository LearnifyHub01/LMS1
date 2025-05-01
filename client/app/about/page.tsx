"use client";
import React, { FC, useState } from "react";
import Heading from "@/app/utils/Heading";
import Header from "../profile/Header1";
import About from "../components/About/About";
import Footer from "../components/Footer";

type Props = {};

const Page: FC<Props> = () => {
  // Corrected component name to start with uppercase
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(5);
  const [route, setRoute] = useState("Login");


  return (
    <div>
        <Heading
          title={`LeanifyHub - About`} 
          description="It is a good platform"
          keywords="programming,MERN"
        />
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        <About/>
        <Footer/>
    </div>
  );
};

export default Page;
