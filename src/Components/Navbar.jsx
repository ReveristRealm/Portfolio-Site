import logo from "../assets/PokeHolder.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className=" mb-5 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center text-5xl bg-gradient-to-r from-purple-500 via slate-500 to-[#1BFFFF] bg-clip-text text-transparent">
        <div>DJ </div>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-5xl">
        <a href="https://github.com/ReveristRealm">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/danieljac/">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}
