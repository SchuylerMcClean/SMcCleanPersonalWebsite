import React from "react";
import { saveAs } from "file-saver";

function downloadResume() {
  saveAs("McCleanSchuylerResume.pdf", "McCleanSchuylerResume.pdf");
}

function Download() {
  return (
    <div
      className="ocean-picture"
      style={{
        backgroundAttachment: "fixed",
        justifyContent: "center",
      }}
    >
      <div className="background-opacity">
        <div style={{ height: "100px" }} />
        <div className="transparent-box">
          <button onClick={downloadResume}>Download Resume</button>
        </div>
      </div>
    </div>
  );
}

export default Download;
