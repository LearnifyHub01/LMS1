import Image from "next/image";
import React from "react";
import img1 from "../../../public/assests/designer.jpg";
import img2 from "../../../public/assests/it.jpeg";
import img3 from "../../../public/assests/photography1.jpg";
import img4 from "../../../public/assests/Graham_Stephan.jpg";
import img5 from "../../../public/assests/doctor.jpeg";
import img6 from "../../../public/assests/finance.jpg";
import {
  FaBriefcase,
  FaLaptopCode,
  FaPaintBrush,
  FaBullhorn,
  FaHeartbeat,
  FaLanguage,
  FaChartLine,
  FaDumbbell,
  FaMusic,
  FaShieldAlt,
  FaCamera,
  FaUtensils,
  FaWallet,
  FaFilm,
  FaMicrophoneAlt,
} from "react-icons/fa";
import { GiClothes } from "react-icons/gi";

type Props = {};

const Teachers = (props: Props) => {
  const teachers = [
    {
      name: "Will Paterson",
      profession: "Logo & Branding Specialist",
      image: img1,
    },
    {
      name: "Angela Yu",
      profession: "Full-Stack Developer & Programming Instructor",
      image: img2,
    },
    {
      name: "Erin Sullivan",
      profession: "Expedition & Travel Photographer",
      image: img3,
    },
    {
      name: "Graham Stephan",
      profession: "Real Estate Investor & Finance Content Creator",
      image: img4,
    },
    {
      name: "Dr. Mike Varshavski",
      profession: "Medical education & health tips",
      image: img5,
    },
    {
      name: "Samantha Russell",
      profession: "Marketing & Financial Analyst",
      image: img6,
    },
  ];

  const categories = [
    { name: "Business & Management", icon: <FaBriefcase /> },
    { name: "Tech & IT", icon: <FaLaptopCode /> },
    { name: "Graphic Design", icon: <FaPaintBrush /> },
    { name: "Digital Marketing", icon: <FaBullhorn /> },
    { name: "Healthcare & Medicine", icon: <FaHeartbeat /> },
    { name: "Foreign Language Learning", icon: <FaLanguage /> },
    { name: "Entrepreneurship", icon: <FaChartLine /> },
    { name: "Fitness & Nutrition", icon: <FaDumbbell /> },
    { name: "Music Production", icon: <FaMusic /> },
    { name: "Financial Modeling", icon: <FaWallet /> },
    { name: "Cybersecurity", icon: <FaShieldAlt /> },
    { name: "Photography", icon: <FaCamera /> },
    { name: "Culinary Arts", icon: <FaUtensils /> },
    { name: "Public Speaking & Communication", icon: <FaMicrophoneAlt /> },
    { name: "Film & Animation", icon: <FaFilm /> },
    { name: "Fashion Designing", icon: <GiClothes /> },
  ];

  return (
    <>
      <div className="bg-white text-black py-10 px-5 text-center mt-[8%]">
        <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
          Learn from{" "}
          <span className="text-green-500">Leading Industry Experts</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-3xl font-poppins mx-auto">
          At LearnifyHub, renowned professionals share their expertise,
          innovative techniques, and career-defining insights to help you
          succeed.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-1.5 max-w-6xl mx-auto">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="relative overflow-hidden group"
              style={{ height: "clamp(250px, 40vw, 300px)" }}
            >
              <Image
                src={teacher.image}
                alt={teacher.name}
                layout="fill"
                objectFit="cover"
                className="w-full h-full transition-all duration-300 group-hover:brightness-50"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              <div className="absolute bottom-4 left-4 transition-all duration-300 group-hover:bottom-6">
                <h3
                  className="text-white font-bold font-poppins text-left"
                  style={{
                    fontSize: "clamp(1.25rem, 2.5vw, 1.60rem)",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  {teacher.name}
                </h3>
                <p
                  className="text-white font-bold font-poppins text-left"
                  style={{
                    fontSize: "clamp(0.65rem, 2vw, 0.90rem)",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  {teacher.profession}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/*Explore*/}
        <div className="mt-[10%] mb-8">
          <h2
            className="text-3xl md:text-4xl font-bold font-poppins mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)" }}
          >
            Explore <span className="text-green-500">LearnifyHub</span>
          </h2>
          <p className="text-lg md:text-xl mb-6 text-gray-600 max-w-3xl font-poppins mx-auto">
            Browse through a variety of courses across different industries
            and skill sets, taught by top experts in their fields.
          </p>

          <div className="max-w-[96%] mt-[6%] mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-[#323232] text-white rounded-lg hover:bg-green-500 transition-all duration-200 cursor-pointer overflow-hidden group"
                  style={{ minHeight: "clamp(80px, 15vw, 120px)" }}
                >
                  <div className="flex flex-col h-full justify-center items-center p-4">
                    <div
                      className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200"
                      style={{ fontSize: "clamp(1.2rem, 3vw, 1.5rem)" }}
                    >
                      {category.icon}
                    </div>
                    <p
                      className="font-poppins font-semibold text-center line-clamp-2"
                      style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.95rem)" }}
                    >
                      {category.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teachers;
