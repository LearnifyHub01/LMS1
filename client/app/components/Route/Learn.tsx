import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import img1 from "../../../public/assests/learn1.jpg";
import img2 from "../../../public/assests/learn2.jpg";
import img3 from "../../../public/assests/learn3.jpg";

type Props = {};

const Learn = (props: Props) => {
  return (
    <div className="bg-white mb-10">
      <div
        className="relative w-full min-h-screen flex items-center justify-center py-16"
        style={{
          backgroundImage: "url('/assests/about1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-white leading-tight">
              <span className="text-green-500">LEARN, GROW,</span> AND <br />
              <span className="text-green-500">SUCCEED</span> TOGETHER.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-poppins mx-auto mt-4">
              LearnifyHub is not just a platform; it’s a thriving community of
              educators and learners, all here to support each other’s growth.
              We provide the resources and guidance you need to thrive, ensuring
              you never feel alone on your journey
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative bg-white/90 rounded-lg shadow-lg overflow-hidden backdrop-blur-sm"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={img1}
                  alt="Learning Hub"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  className="rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold font-poppins text-black mb-2">
                  Learn, Practice, Succeed!
                </h3>
                <p className="text-gray-600 font-poppins">
                  Access high-quality courses, practical guides, and expert
                  insights to enhance your skills.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-white/90 rounded-lg shadow-lg overflow-hidden backdrop-blur-sm"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={img2}
                  alt="24/7 Support"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  className="rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold font-poppins text-black mb-2">
                  Support at Your Fingertips!
                </h3>
                <p className="text-gray-600 font-poppins">
                  Get instant assistance and quick solutions whenever you need
                  help on your learning journey.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative bg-white/90 rounded-lg shadow-lg overflow-hidden backdrop-blur-sm"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={img3}
                  alt="A Vibrant Community"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  className="rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold font-poppins text-black mb-2">
                  Join a Thriving Learning Community!
                </h3>
                <p className="text-gray-600 font-poppins">
                  Connect with passionate learners and educators, sharing
                  knowledge and growing together.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
