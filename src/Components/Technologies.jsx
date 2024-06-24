import { RiReactjsFill } from "react-icons/ri";
import { RiJavaFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoGoLang } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiCsharp } from "react-icons/si";
import { SiPython } from "react-icons/si";

export default function Technologies() {
  return (
    <div className="borber-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Techonologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div classname="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavaFill className="text-7xl text-black-400" />
        </div>
        <div classname="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavascriptFill className="text-7xl text-yellow-400" />
        </div>
        <div classname="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoGoLang className="text-7xl text-cyan-400" />
        </div>
        <div classname="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCsharp className="text-7xl text-purple-700" />
        </div>
        <div classname="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </div>
        <div classname="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsFill className="text-7xl text-cyan-400" />
        </div>
        <div classname="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPython className="text-7xl text-cyan-400" />
        </div>
      </div>
    </div>
  );
}
