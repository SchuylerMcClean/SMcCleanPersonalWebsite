import React from "react";
import UofGPic from "/UofGCS.png";

function About() {
  return (
    <div
      id="About"
      className="about-mountain-background"
      style={{
        backgroundAttachment: "fixed",
        justifyContent: "center",
      }}
    >
      <div className="background-opacity">
        <div style={{ justifyContent: "center" }}>
          <div style={{ height: "80px" }}></div>
          <h2>Who Am I?</h2>
          <div className="about-text-box">
            Hi, I'm Schuyler McClean - a Computer Science student passionate
            about learning new technologies and solving challenging problems.
            Currently, I'm in my first year of my Honours Computer Science
            degree with a minor in Mathematics, building a strong foundation in
            programming and software development.
          </div>
          <div>
            <img src={UofGPic} style={{ height: "120px" }} />
          </div>
          <div className="about-text-box">
            I developed a passion for computer science in highschool - in my
            Grade 11 Computer Science class. This is where I learned Python, and
            additionally, the PyGame library. Since that first class, I was
            fascinated about programming and eager to learn further. The
            following year, I learned Java. Over the next couple years, I
            entered university and developed my skills, learning more languages
            and frameworks along the way!
          </div>
        </div>
        <div className="logo-bar">
          <div>
            <img
              className="logo-bar-items"
              src="../pythonLogo.webp"
              alt="Python Logo"
            />
          </div>
          <div>
            <img
              className="logo-bar-items"
              src="../javascriptLogo.svg"
              alt="JavaScript Logo"
            />
          </div>
          <div>
            <img className="logo-bar-items" src="../cLogo.png" alt="C Logo" />
          </div>
          <div>
            <img
              className="logo-bar-items"
              src="../javaLogo.svg"
              alt="Java Logo"
            />
          </div>
          <div>
            <img
              className="logo-bar-items"
              src="../cssLogo.png"
              alt="CSS Logo"
            />
          </div>
          <div>
            <img
              className="logo-bar-items"
              src="../rustLogo.png"
              alt="Rust Logo"
            />
          </div>
          <div>
            <img
              className="logo-bar-items"
              src="../htmlLogo.webp"
              alt="HTML Logo"
            />
          </div>
          <div>
            <img
              className="logo-bar-items"
              src="../sqlLogo.png"
              alt="SQL Logo"
            />
          </div>
        </div>
        <div className="about-text-box">
          Prior to pursuing computer science, I gained valuable teamwork and
          time management skills during my time in kitchen staff and cashier
          positions where I thrived in a fast-paced environment, balancing
          multiple responsibilities seamlessly. Now, I'm channeling these skills
          into developing software and learning new technologies - both in
          university and on my own!
        </div>
        <div>
          <a
            className="link"
            href="/download"
            style={{ textDecoration: "underline" }}
          >
            View my resume! -&#62;
          </a>
        </div>
        <div style={{ height: "70px" }} />
      </div>
    </div>
  );
}

export default About;
