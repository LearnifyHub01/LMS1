import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaShieldAlt,
  FaUserLock,
  FaCookieBite,
  FaClipboardCheck,
} from "react-icons/fa";
import { MdSecurity, MdPeopleAlt, MdGppGood } from "react-icons/md";
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoArrowForward } from "react-icons/io5";
import securityImg from "../../../public/assests/policy.webp"; 

type Props = {};

const Policy = (props: Props) => {
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

  const policyItems = [
    {
      title: "Privacy Commitment",
      icon: <FaUserLock className="text-blue-600 dark:text-blue-400 w-8 h-8" />,
      summary: "Safeguarding your personal information with utmost care.",
      details: "We collect only essential data to enhance your learning experience, ensuring transparency and control over your privacy.",
    },
    {
      title: "Terms of Use",
      icon: <MdGppGood className="text-blue-600 dark:text-blue-400 w-8 h-8" />,
      summary: "Guidelines for a seamless LearnifyHub experience.",
      details: "Our terms ensure fair use, protect intellectual property, and maintain a respectful learning environment.",
    },
    {
      title: "Cookie Usage",
      icon: <FaCookieBite className="text-blue-600 dark:text-blue-400 w-8 h-8" />,
      summary: "Enhancing functionality with cookies.",
      details: "We use cookies to personalize your experience while giving you full control over their management.",
    },
    {
      title: "Community Standards",
      icon: <MdPeopleAlt className="text-blue-600 dark:text-blue-400 w-8 h-8" />,
      summary: "Fostering a positive learning community.",
      details: "Our guidelines promote respect, collaboration, and constructive engagement among all users.",
    },
    {
      title: "Data Protection",
      icon: <MdSecurity className="text-blue-600 dark:text-blue-400 w-8 h-8" />,
      summary: "Securing your data with advanced measures.",
      details: "We employ robust encryption and security protocols to protect your information at all times.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#383838] text-gray-800 dark:text-gray-200 overflow-x-hidden">
      {/* Hero Section (No Background Image, Skew Design) */}
      <section className="relative bg-[#FAF9F6] dark:bg-[#383838] py-20 md:py-32 border-b border-gray-200 dark:border-gray-700 overflow-x-hidden">
        <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
          <div className="absolute inset-y-0 left-0 w-[33%] bg-gray-200 dark:bg-gray-700 transform -skew-x-12 origin-left"></div>
          <div className="absolute inset-y-0 right-0 w-[33%] bg-gray-200 dark:bg-gray-700 transform skew-x-12 origin-right"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="text-center text-gray-900 dark:text-white"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <FaShieldAlt className="w-20 h-20 mx-auto text-blue-600 dark:text-blue-400" />
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              LearnifyHub <span className="text-blue-600 dark:text-blue-400">Policies</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-700 dark:text-gray-300"
            >
              Ensuring trust, security, and clarity for every learner and educator on our platform.
            </motion.p>
            <motion.a
              href="#policies"
              variants={scaleIn}
              className="inline-block bg-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-300"
            >
              Explore Policies
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Policies Overview */}
      <section id="policies" className="py-16 md:py-24 bg-[#FAF9F6] dark:bg-[#383838]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Commitment to You
            </h2>
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              LearnifyHub is dedicated to creating a secure, transparent, and inclusive learning environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policyItems.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white dark:bg-[#2A2A2A] rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{item.summary}</p>
                <p className="text-gray-700 dark:text-gray-300">{item.details}</p>
                <a
                  href={`/policies/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Learn More
                  <IoArrowForward className="ml-2 w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Assurance Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#2D2D2D]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={securityImg}
                  alt="Data Security"
                  className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="space-y-6"
            >
              <motion.h2
                variants={fadeInRight}
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
              >
                Your Data, Our Priority
              </motion.h2>
              <motion.p
                variants={fadeInRight}
                className="text-lg text-gray-700 dark:text-gray-300"
              >
                At LearnifyHub, we implement state-of-the-art security measures to protect your personal and educational data, ensuring peace of mind as you learn and teach.
              </motion.p>
              <motion.ul variants={staggerChildren} className="space-y-4">
                {["End-to-end encryption", "Regular security audits", "Compliance with GDPR & CCPA"].map(
                  (item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInRight}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <FaClipboardCheck className="text-blue-600 dark:text-blue-400 w-5 h-5 mr-3" />
                      {item}
                    </motion.li>
                  )
                )}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] dark:bg-[#383838]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Policy FAQs
            </h2>
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          </motion.div>
          <div className="max-w-4xl mx-auto grid gap-8">
            {[
              {
                q: "How can I manage my privacy settings?",
                a: "Access your privacy controls in the 'Account Settings' section to customize data sharing and visibility preferences.",
              },
              {
                q: "What happens if I violate community standards?",
                a: "Violations may result in warnings, content removal, or account suspension, depending on severity, with an appeal process available.",
              },
              {
                q: "Are my course materials protected?",
                a: "Yes, all user-generated content is safeguarded by our intellectual property policies and secure storage systems.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white dark:bg-[#2A2A2A] p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br bg-[#2D2D2D] dark:bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <BiSolidMessageDetail className="w-16 h-16 mx-auto" />
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Need Clarification?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg max-w-2xl mx-auto mb-8"
            >
              Our support team is ready to assist with any policy-related inquiries or concerns.
            </motion.p>
            <motion.a
              variants={scaleIn}
              href="mailto:support@learnifyhub.com?subject=Policy%20Inquiry"
              className="inline-block bg-white text-blue-600 font-medium py-3 px-8 rounded-full shadow-lg hover:bg-blue-100 transition duration-300"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Policy;