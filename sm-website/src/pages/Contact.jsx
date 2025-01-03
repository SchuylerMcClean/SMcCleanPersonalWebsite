import React from "react";

function Contact() {
  return (
    <div
      id="Contact"
      className="snow-background"
      style={{ backgroundAttachment: "fixed", justifyContent: "center" }}
    >
      <div className="background-opacity">
        <div className="contact">
          <h1>Contact Me!</h1>
        </div>

        <div className="logo-bar">
          <a>
            <img
              className="logo-bar-items"
              href="https://github.com/SchuylerMcClean"
              src="../githubLogo.svg"
              alt="Git Hub Logo"
            />
          </a>
          <a>
            <img
              className="logo-bar-items"
              href="https://www.linkedin.com/in/schuylermcclean/"
              src="../LinkedinLogo.webp"
              alt="Linkedin Logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
