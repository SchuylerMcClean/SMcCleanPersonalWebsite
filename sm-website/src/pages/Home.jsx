import { useState } from "react";
import profilePic from "/schuyprofilepic.jpg";
import forestPic from "/forestPic.jpg";

function Home() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }}
      >
        <div className="home-about-box">
          <h1>Hi, I'm Schuyler!</h1>
          <p className="home-about-text">
            I am a first year student at the University of Guelph, in the
            Honours Computer Science program. Click below to learn more about
            me.
          </p>
          <a href="/about" style={{ textDecoration: "underline" }}>
            Click here to learn more -&#62;
          </a>
        </div>
        <div>
          <img src={profilePic} className="logo react" alt="React logo" />
        </div>
      </div>
      <div className="home-forest-box">
        <img className="home-forest-pic" src={forestPic} />
      </div>
      <div className="home-white-box">
        <h1>Experience and Resume</h1>
        <p>
          I have formal education in Python, Java, and C, as well as personal
          experience in JavaScript, CSS, SQL, and Rust.
        </p>
        <a
          href="/about"
          className="home-white-box-items"
          style={{ textDecoration: "underline", color: "#284b19" }}
        >
          Click here to learn more -&#62;
        </a>
      </div>
    </>
  );
}

export default Home;
