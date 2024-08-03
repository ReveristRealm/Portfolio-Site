import selfie from "../assets/selfie.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500"> Me </span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={selfie} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-2xl font-light">
              To go more in-depth about me, I am on the{" "}
              <span className="bg-gradient-to-r from-purple-500 via slate-500 to-[#1BFFFF] bg-clip-text text-transparent">
                {" "}
                executive board
              </span>{" "}
              of the largest tech club at Queens College,{" "}
              <span className="bg-gradient-to-r from-purple-500 via slate-500 to-[#1BFFFF] bg-clip-text text-transparent">
                Code For All
              </span>
              , as a tech workshop developer. I host events teaching students
              about various topics in CS and provide the latest updates
              regarding tech opportunities. I also like to code on my free time
              and constantly like to improve my skills in computer science by
              taking{" "}
              <span className="bg-gradient-to-r from-purple-500 via slate-500 to-[#1BFFFF] bg-clip-text text-transparent">
                online courses
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-purple-500 via slate-500 to-[#1BFFFF] bg-clip-text text-transparent">
                building projects
              </span>
              . I like to also attend networking events to meet new people in
              the industry and see different companies and how they utilize
              technologies to stay up to date. Outside of academia, some of my
              personal hobbies are playing{" "}
              <span className="bg-gradient-to-r from-purple-500 via slate-500 to-[#1BFFFF] bg-clip-text text-transparent">
                tennis
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-purple-500 via slate-500 to-[#1BFFFF] bg-clip-text text-transparent">
                snowboarding
              </span>
              , and{" "}
              <span className="bg-gradient-to-r from-purple-500 via slate-500 to-[#1BFFFF] bg-clip-text text-transparent">
                traveling
              </span>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
