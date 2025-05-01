import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import faqImage from "../../../public/assests/faq.webp"; // Add a relevant FAQ image

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What makes LearnifyHub unique?",
    answer:
      "Our LMS offers an intuitive interface, advanced analytics, and interactive tools to enhance your learning experience.",
  },
  {
    question: "How do I enroll in a course?",
    answer:
      "Simply sign up, explore our course catalog, select 'Enroll,' and complete the payment for premium courses.",
  },
  {
    question: "Can instructors create their own courses?",
    answer:
      "Yes, anyone can join as an instructor and use our easy-to-use course builder with multimedia and analytics support.",
  },
  {
    question: "Is the platform mobile-friendly?",
    answer:
      "Absolutely, LearnifyHub is fully responsive, with a mobile app in development for on-the-go learning.",
  },
  {
    question: "How secure is my data?",
    answer:
      "We prioritize your security with top-tier encryption and compliance with global privacy standards.",
  },
  {
    question: "Are certificates provided?",
    answer:
      "Yes, you’ll earn verifiable digital certificates upon course completion.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Our self-paced courses come with lifetime access, so you can learn whenever suits you best.",
  },
  {
    question: "What support is available for learners?",
    answer:
      "We offer 24/7 support, community forums, and live Q&A sessions with instructors.",
  },
];

const FAQSection = ({ items }: { items: FAQItem[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          className="bg-white dark:bg-[#2A2A2A] rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left px-6 py-4 flex items-center justify-between bg-white dark:bg-[#2A2A2A] hover:bg-gray-50 dark:hover:bg-[#333333] transition-colors duration-300 rounded-lg focus:outline-none"
          >
            <div className="flex items-center space-x-3">
              <FaQuestionCircle className="text-blue-600 dark:text-blue-400 w-6 h-6 flex-shrink-0" />
              <span
                className={`text-lg font-semibold transition-colors duration-300 ${
                  activeIndex === index
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                {item.question}
              </span>
            </div>
            <span className="text-blue-600 dark:text-blue-400 transition-transform duration-300">
              {activeIndex === index ? (
                <FaMinus className="w-5 h-5" />
              ) : (
                <FaPlus className="w-5 h-5" />
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              activeIndex === index ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="px-6 py-4 bg-gray-50 dark:bg-[#333333] text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
              <p className="text-base leading-relaxed">{item.answer}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Motion variants from About page
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

const FAQ = () => {
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
              Frequently Asked{" "}
              <span className="text-blue-600 dark:text-blue-400">Questions</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-6 text-gray-700 dark:text-gray-300"
            >
              Find answers to common questions about LearnifyHub.
            </motion.p>
            <motion.a
              href="#faqs"
              variants={scaleIn}
              className="inline-block bg-blue-600 text-white font-medium py-3 px-8 rounded-md shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-300"
            >
              Explore FAQs
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section with Image */}
      <section id="faqs" className="py-12 md:py-16 bg-white dark:bg-[#2D2D2D]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Your Questions Answered
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about using LearnifyHub.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="order-2 md:order-1"
            >
              <FAQSection items={faqData} />
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
                  src={faqImage}
                  alt="FAQ Illustration"
                  className="w-full object-cover h-80 md:h-[600px] transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              </div>
            </motion.div>
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
              Still Have Questions?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-gray-300"
            >
              Our team is here to help you get started with LearnifyHub.
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
                Get Started
              </motion.a>
              <motion.a
                variants={scaleIn}
                href="mailto:support@learnifyhub.com?subject=FAQ%20Inquiry"
                className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-8 rounded-md shadow-md transition duration-300"
              >
                Contact Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;