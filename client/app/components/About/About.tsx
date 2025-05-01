import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TbBulb } from "react-icons/tb";
import { FiBookOpen } from "react-icons/fi";
import { TiGroupOutline } from "react-icons/ti";
import { BsStars } from "react-icons/bs";
import { TbFlag } from "react-icons/tb";
import { IoArrowForward } from "react-icons/io5";
import { PiStudentDuotone } from "react-icons/pi";
import image1 from "../../../public/assests/about1.jpg";
import image2 from "../../../public/assests/about2.png";
import image3 from "../../../public/assests/about3.webp";
import image4 from "../../../public/assests/about4.webp";
import image5 from "../../../public/assests/about5.jpeg";

type Props = {};

const About = (props: Props) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };


  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#383838] text-gray-800 dark:text-gray-200 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#FAF9F6] dark:bg-[#383838] py-16 md:py-24 border-b border-gray-200 dark:border-gray-700 overflow-x-hidden">
        <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
          <div className="absolute inset-y-0 left-0 w-[33%] bg-gray-200 dark:bg-gray-700 transform -skew-x-12 origin-left"></div>
          <div className="absolute inset-y-0 right-0 w-[33%] bg-gray-200 dark:bg-gray-700 transform skew-x-12 origin-right"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-gray-900 dark:text-white"
            >
              About{" "}
              <span className="text-blue-600 dark:text-blue-400">
                LearnifyHub
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-6 text-gray-700 dark:text-gray-300"
            >
              Transforming education by connecting teachers and learners through innovative technology.
            </motion.p>
            <motion.a
              href="/courses"
              variants={scaleIn}
              className="inline-block bg-blue-600 text-white font-medium py-3 px-8 rounded-md shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-300"
            >
              Explore Our Courses
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Pioneering educational excellence through innovative technology and dedicated expertise since 2023.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <div className="relative overflow-hidden rounded-lg shadow-xl w-full">
                <Image
                  src={image1}
                  alt="LearnifyHub Journey"
                  className="w-full object-cover h-80 md:h-96 transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="space-y-4"
            >
              <motion.p
                variants={fadeInRight}
                className="text-gray-700 dark:text-gray-300 text-lg"
              >
                Established in 2023, LearnifyHub emerged as a visionary platform designed to revolutionize digital education by connecting world-class educators with eager learners globally.
              </motion.p>
              <motion.p
                variants={fadeInRight}
                className="text-gray-700 dark:text-gray-300 text-lg"
              >
                Our commitment is to deliver exceptional learning experiences, empowering educators to share their expertise and enabling students to achieve their professional and personal goals.
              </motion.p>
              <motion.div variants={fadeInRight} className="pt-2">
                <a
                  href="/mission"
                  className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline"
                >
                  Discover Our Vision
                  <IoArrowForward className="ml-2" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white dark:bg-[#2D2D2D] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: <FiBookOpen className="w-10 h-10" />,
                title: "Accessibility",
                desc: "Providing equitable education opportunities worldwide.",
              },
              {
                icon: <TbBulb className="w-10 h-10" />,
                title: "Innovation",
                desc: "Advancing learning through cutting-edge technology.",
              },
              {
                icon: <TiGroupOutline className="w-10 h-10" />,
                title: "Community",
                desc: "Building a collaborative educational ecosystem.",
              },
              {
                icon: <BsStars className="w-10 h-10" />,
                title: "Excellence",
                desc: "Upholding the highest standards in education.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-[#FAF9F6] dark:bg-[#2A2A2A] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-700 group hover:border-blue-200 dark:hover:border-blue-700"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="text-blue-600 dark:text-blue-400 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors duration-300">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 md:py-16 bg-[#FAF9F6] dark:bg-[#383838]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Our Mission
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Committed to breaking down educational barriers and fostering global knowledge accessibility.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="space-y-4 order-2 md:order-1"
            >
              <motion.p
                variants={fadeInLeft}
                className="text-gray-700 dark:text-gray-300 text-lg"
              >
                At LearnifyHub, we strive to create an inclusive educational ecosystem where quality learning transcends geographical and socioeconomic boundaries.
              </motion.p>
              <motion.p
                variants={fadeInLeft}
                className="text-gray-700 dark:text-gray-300 text-lg"
              >
                Our mission drives us to innovate continuously, ensuring that every individual has access to transformative educational resources and opportunities.
              </motion.p>
              <motion.div variants={fadeInLeft} className="pt-2">
                <a
                  href="/mission"
                  className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline"
                >
                  Explore Our Commitment
                  <IoArrowForward className="ml-2" />
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="order-1 md:order-2"
            >
              <div className="relative overflow-hidden rounded-lg shadow-xl w-full">
                <Image
                  src={image2}
                  alt="Educational Mission"
                  className="w-full object-cover h-80 md:h-96 transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-12 md:py-16 bg-white dark:bg-[#2D2D2D]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Our Team
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              A dedicated collective of professionals shaping the future of education through expertise and innovation.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="order-2 md:order-1"
            >
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="space-y-4">
                  <div className="h-[48%] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={image3}
                      alt="Team collaboration"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="h-[48%] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={image4}
                      alt="Digital classroom"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="h-[99.5%] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={image5}
                    alt="Educators working together"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="space-y-4 order-1 md:order-2"
            >
              <motion.p
                variants={fadeInRight}
                className="text-gray-700 dark:text-gray-300 text-lg"
              >
                Our team comprises experienced educators, cutting-edge technologists, and visionary learning designers united by a passion for educational excellence.
              </motion.p>
              <motion.p
                variants={fadeInRight}
                className="text-gray-700 dark:text-gray-300 text-lg"
              >
                We work collaboratively to develop innovative solutions that enhance learning outcomes and empower both educators and students worldwide.
              </motion.p>
              <motion.div variants={fadeInRight} className="pt-2">
                <a
                  href="/our-team"
                  className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline"
                >
                  Meet Our Experts
                  <IoArrowForward className="ml-2" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-12 md:py-16 bg-[#FAF9F6] dark:bg-[#383838]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Our Milestones
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Key achievements marking our journey in transforming global education.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto w-full">
            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700"></div>
              <div className="flex justify-between items-center relative">
                {[
                  {
                    year: "2023",
                    event: "LearnifyHub Founded",
                    icon: <TbFlag className="w-8 h-8" />,
                  },
                  {
                    year: "2024",
                    event: "Launched 100+ Courses",
                    icon: <FiBookOpen className="w-8 h-8" />,
                  },
                  {
                    year: "2025",
                    event: "Reached 10K Students",
                    icon: <PiStudentDuotone className="w-8 h-8" />,
                  },
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="w-1/3 px-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center z-10 mb-3 shadow-lg">
                        <div className="text-white">{milestone.icon}</div>
                      </div>
                      <div className="text-center">
                        <div className="bg-white dark:bg-[#2D2D2D] p-5 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl">
                          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                            {milestone.year}
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300 font-medium">
                            {milestone.event}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden relative">
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700"></div>
              <div className="space-y-8">
                {[
                  {
                    year: "2023",
                    event: "LearnifyHub Founded",
                    icon: <TbFlag className="w-5 h-5" />,
                  },
                  {
                    year: "2024",
                    event: "Launched 100+ Courses",
                    icon: <FiBookOpen className="w-5 h-5" />,
                  },
                  {
                    year: "2025",
                    event: "Reached 10K Students",
                    icon: <PiStudentDuotone className="w-5 h-5" />,
                  },
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInLeft}
                    className="flex items-start"
                  >
                    <div className="w-9 h-9 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center z-10 mt-1 mr-5 shadow-md">
                      <div className="text-white">{milestone.icon}</div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white dark:bg-[#2D2D2D] p-3 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                          {milestone.year}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          {milestone.event}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#2D2D2D] dark:bg-[#1A1A1A] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Embark on Your Educational Journey
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-gray-300"
            >
              Join a global community of learners and educators dedicated to excellence and innovation in education.
            </motion.p>
            <motion.div
              variants={staggerChildren}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                variants={scaleIn}
                href="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md shadow-md transition duration-300"
              >
                Begin Your Journey
              </motion.a>
              <motion.a
                variants={scaleIn}
                href="/teachers"
                className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-8 rounded-md shadow-md transition duration-300"
              >
                Teach With Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;