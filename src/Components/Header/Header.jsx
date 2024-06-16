import Button from "./Button.jsx";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <ul>
        <Button>About Me</Button>
        <li>Skills</li>
        <li>Projects</li>
        <li>Networking</li>
        <li>Extra</li>
      </ul>
    </header>
  );
}
