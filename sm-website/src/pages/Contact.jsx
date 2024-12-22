import React from "react";
import GitHubLogo from "/GitHubLogo.png";
import LinkedinLogo from "/LinkedinLogo.webp";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Schuyler:</h1>
      <div style={{ display: "flex" }}>
        <a href="https://github.com/SchuylerMcClean">
          <img className="contact-link-pictures" src={GitHubLogo} />
        </a>
        <a href="https://www.linkedin.com/in/schuylermcclean/">
          <img className="contact-link-pictures" src={LinkedinLogo} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
