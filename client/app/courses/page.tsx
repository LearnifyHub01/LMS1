"use client";
import React, { FC, useState } from "react";
import Heading from "@/app/utils/Heading";
import Header from "../profile/Header1";
import AllCourses from "../components/AllCourses/AllCourses";
import Footer from "../components/Footer";

type Props = {};

const Page: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(5);
  const [route, setRoute] = useState("Login");



  return (
    <div>
      <Heading
        title={`LeanifyHub - Courses`}
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
      <AllCourses />
      <Footer/>
    </div>
  );
};

export default Page;       