import "./Aboutme.css";

export default function Aboutme() {
  return (
    <>
      <div className="intro">
        <h1 className="intro-top">Hello there!,</h1>
        <div className="test">
          Hello, My name is <p className="inline">Daniel Jackson</p> and I am
          based in New York City.I attend Queens College, City University of New
          York, currently majoring in computer science. I have a passion for
          Software Engineering. I hope you find this site informational.
        </div>
      </div>
      <div className="pic"></div>
      <div className="skills"></div>
      <div className="experience"></div>
    </>
  );
}
