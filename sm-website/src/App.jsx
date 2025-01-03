import React from "react";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import EndBar from "./components/EndBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Download from "./pages/Download";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
      </div>
      <div style={{ marginTop: "50px", marginBottom: "25px" }}>
        <Routes>
          <Route path="/">
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/download" element={<Download />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
      <div>
        <EndBar />
      </div>
    </BrowserRouter>
  );
}
export default App;
