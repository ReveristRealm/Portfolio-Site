import { RiReactjsFill } from "react-icons/ri";
import { RiJavaFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { FaGolang } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiCsharp } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  inital: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
export default function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiJavaFill className="text-7xl text-red-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiJavascriptFill className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGolang className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiCsharp className="text-7xl text-purple-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPython className="text-7xl text-cyan-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}
