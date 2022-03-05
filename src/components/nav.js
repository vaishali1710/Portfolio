import React, { useState } from "react";
import "./nav.css";
import Logo from "../images/logo.png";
// import { useColorMode } from "@chakra-ui/react";
// import { motion } from 'framer-motion/dist/framer-motion';
import Home from "./home";
import Internship from "./Internship";
import Projects from "./Project";
import { BsFillSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  // const { colorMode, toggleColorMode } = useColorMode();

  const [showNav, setShowNav] = useState(false);

  return (
    <div className="mainnav">
      <img className="navlogo" src={Logo} alt="logo" />
      <div className={showNav ? "mobileNav" : "Nav"}>
        <Link className="navtext" to="/" component={Home}>
          Home
        </Link>
        <Link className="navtext" to="/Internship" component={Internship}>
          Internships
        </Link>
        <Link className="navtext" to="/Project" component={Projects}>
          Projects
        </Link>
        <a
          className="navtext"
          href="mailto:bhaveshbtp84@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Me
        </a>
      </div>
      <div className="navtoggle">
      {/*  <button className="navtheme" >
  colorMode === "light" ? <BsFillSunFill /> : <FaMoon /> 
  </button> */}
        <div className="hamburgermenu">
          <button
            style={{ fontSize: "1.3rem" }}
            onClick={() => setShowNav(!showNav)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
