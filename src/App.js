import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/contact";
import Internship from "./components/Internship";
import Project from "./components/Project";
import "./index.css";
// import { ChakraProvider } from "@chakra-ui/react";
import Nav from "./components/nav";

export default function App() {
  return (
      <div className="App">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Internship" element={<Internship />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/" element={<Contact />} />
          </Routes>
        </Router>
      </div>
  );
}
