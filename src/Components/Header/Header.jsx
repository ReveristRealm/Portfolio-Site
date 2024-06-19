import Networking from "../Networking/Networking.jsx";
import Button from "./Button.jsx";
import "./Header.css";

export default function Header() {
  return (
    <>
      <header>
        <ul>
          <Button>About Me</Button>
          <Button>Skills</Button>
          <Button>Projects</Button>
          <Button>Networking</Button>
          <Button>Extra</Button>
        </ul>
      </header>

      <div className="container">
        <Networking></Networking>
      </div>
    </>
  );
}
