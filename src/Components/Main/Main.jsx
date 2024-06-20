import Aboutme from "../About me/Aboutme.jsx";
import Button from "../Button/Button.jsx";
import "./Main.css";

export default function Main() {
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
        <Aboutme></Aboutme>
      </div>
    </>
  );
}
