import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../assets/Lottie/robot.json";
import "./Hero.css";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

export default function Hero() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-14 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Daniel Jackson
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-purple-500 via slate-500 to-[#1BFFFF] bg-clip-text text-5xl tracking-tight text-transparent pb-2 "
            >
              Software Engineer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-3xl"
            >
              Welcome to my site!, my name is Daniel Jackson and I currently
              attend{" "}
              <span className="bg-gradient-to-r from-purple-500 via slate-500 to-[#1BFFFF] bg-clip-text text-transparent">
                Queens College, City University of New York
              </span>
              , as a computer science major. Im working towards becoming a
              software engineer by always looking for oppurtunites to improve my
              skills in the field. What I bring to the workplace is{" "}
              <span className="bg-gradient-to-r from-purple-500 via slate-500 to-[#1BFFFF] bg-clip-text text-transparent">
                collaboration
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-purple-500 via slate-500 to-[#1BFFFF] bg-clip-text text-transparent">
                willingness to learn
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-purple-500 via slate-500 to-[#1BFFFF] bg-clip-text text-transparent">
                positive thinking
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-purple-500 via slate-500 to-[#1BFFFF] bg-clip-text text-transparent">
                professionalism
              </span>
              . I hope we can work together in the future!.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="lottie-container"
            >
              <Lottie options={defaultOptions} className="lottie-animation" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
