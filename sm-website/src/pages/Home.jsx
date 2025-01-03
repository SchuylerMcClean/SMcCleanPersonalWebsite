import { useState } from "react";
import profilePic from "/schuyprofilepic.jpg";
import resumePic from "/tempResume.png";

function Home() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="home-forest-background"
        style={{
          backgroundAttachment: "fixed",
          justifyContent: "center",
        }}
      >
        <div className="background-opacity">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <div style={{ height: "75px" }} />
              <h1>Hi, I'm Schuyler!</h1>
              <div style={{ height: "50px" }} />
              <div>
                <img src={profilePic} className="profile-picture" />
              </div>
              <div style={{ height: "50px" }} />
              <div className="home-about-box">
                <p className="home-about-text">
                  I'm a software developer from Toronto, passionate about
                  problem solving and learning new technologies. I am currently
                  pursuing a Bachelor's degree in Computer Science at the
                  University of Guelph, eager to gain further knowledge and
                  industry experience in co-op and internship positions.
                </p>
                <a
                  className="link"
                  href="/about"
                  style={{ textDecoration: "underline" }}
                >
                  Click here to learn more -&#62;
                </a>
                <div style={{ height: "50px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
