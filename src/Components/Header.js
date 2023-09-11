import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import tsParticles from "tsparticles-engine";
import Fade from "react-reveal";
import AnimatedCursor from "react-animated-cursor";
//import CustomCursor from 'custom-cursor-react';
//import 'custom-cursor-react/dist/index.css';
import MouseParticles from 'react-mouse-particles';
import { useState } from "react";
import Navigation from "./Navigation";
import './Header.css'
import { TypeAnimation } from "react-type-animation";
import { lightGreen } from "@mui/material/colors";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;
    let lastSelection = document.getElementById("initial-nav");

    const onNavClick = (event) => {

      lastSelection.classList.remove(...["current"]);
      console.log(event.target);
      event.target.parentElement.classList.add("current");
    }

    return (
      /* used to be header */
      <header id="home" className="app-header">
        <ParticlesBg className="particles" type="cobweb" color={["daa520"]} num='50' bg={{ position: "absolute", zIndex: 0, left: 0 }} />
        {/* <MouseParticles g={1} num={3} color="random" cull="stats,image-wrapper" level={6} life={1.2} /> */}
        <nav id="nav-wrap">

          <Fade>
            <Navigation />


            {/* <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll current" href="#home">
                  Home
                </a>
              </li>

              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>

              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>

              <li>
                <a className="smoothscroll" href="#portfolio">
                  Works
                </a>
              </li>

              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul> */}

          </Fade>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h2 style={{ fontSize: 30 }} class=''>A Portfolio</h2>
            <h1 className="responsive-headline shineeffect">{name}</h1>
            <Fade bottom duration={1200}>
              <TypeAnimation
                sequence={["> I am a UI Developer", 1500, "> I am a UX Designer", 1500, "> I am a Software Engineer", 1500, '> I am an Ambulator', 1500]}
                className='header-desc'
                repeat={Infinity}
              />
              {/* <h3>{description}.</h3> */}
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="header-buttons">
                <a href={github} className="header-button">
                  <i className="fa fa-github"></i>
                </a>
                <a href={project} className="header-button">
                  <i className="fa fa-linkedin"></i>
                </a>
                {/* <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i> Page 
                </a> */}
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header >
    );
  }
}

export default Header;
