import aboutImg from "../assets/PokeHolder.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="borber-b border-neutral-900 pb-4">
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
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              To go more in-depth about me, I am on the executive board of a
              club at Queens College, Code For All, as a Tech workshop
              developer. I host events teaching students about various topics in
              CS and provide the latest updates reguarding internship
              oppurtunities. I also like to code on my freetime and constantly
              like to improve my skills in Computer Science. I like to also
              attend networking events to meet new people in the industry and
              see different companies and how they utilize technologies. Outside
              of academia, some of my hobbies are playing tennis, snowboarding,
              and traveling.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
