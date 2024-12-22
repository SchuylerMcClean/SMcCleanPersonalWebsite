import React from "react";

function About() {
  return (
    <div
      className="about"
      style={{
        alignContent: "left",
        fontFamily: "Consolas, 'Courier New', monospace",
      }}
    >
      <h1>About Me</h1>
      <h2>Who Am I?</h2>
      <div className="about-paragraph">
        Hi, I'm Schuyler! I am a 19 year-old software developer from Toronto,
        Ontario. I love programming and have experience in many different
        programming languages, both formally and self taught. At the moment, I
        am in my first year of my honours Computer Science program at the
        University of Guelph, with a minor in Mathematics.
      </div>
      <h2>My Experience:</h2>
      <li className="about-paragraph">JavaScript (React.js, Node.js)</li>
      <li className="about-paragraph">Python (Pygame)</li>
      <li className="about-paragraph">C</li>
      <li className="about-paragraph">Java (Swing)</li>
      <li className="about-paragraph">CSS</li>
      <h2>Currently Learning:</h2>
      <li className="about-paragraph">Rust</li>
      <li className="about-paragraph">SQL</li>
    </div>
  );
}

export default About;
