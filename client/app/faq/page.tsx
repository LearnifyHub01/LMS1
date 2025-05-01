"use client";
import React, { FC, useState } from "react";
import Heading from "@/app/utils/Heading";
import Header from "../profile/Header1";
import Footer from "../components/Footer";
import FAQ from "../components/Faq/faq";
type Props = {};

const Page: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(5);
  const [route, setRoute] = useState("Login");

  return (
    <div>
        <Heading
          title={`LearnifyHub - FAQ`} 
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
        <FAQ/>
        <Footer/>
    </div>
  );
};

export default Page;
