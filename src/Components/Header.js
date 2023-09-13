import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import './Header.css'
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <ParticlesBg className="particles" type="cobweb" color={["daa520"]} num='50' bg={{ position: "absolute", zIndex: 0, left: 0, top: 0 }} />
        <nav id="nav-wrap">

          <Fade>
          </Fade>
        </nav>

        <div className="header-wrapper">
          <h2 style={{ fontSize: 30 }} class='header-label'>Portfolio:</h2>
          <h1 className="header-name shineeffect">{name}</h1>
          <Fade bottom duration={1200}>
            <TypeAnimation
              sequence={["> I am a UI Developer", 1500, "> I am a UX Designer", 1500, "> I am a Software Engineer", 1500, '> I am an Ambulator', 1500]}
              className='header-desc'
              repeat={Infinity}
            />
            {/* <h3>{description}.</h3> */}
          </Fade>
          <hr className="header-bar" />
          <Fade bottom duration={2000}>
            <div className="header-buttons">
              <a href={github} className="header-button">
                <i className="fa-brands fa-github" />
                {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
              </a>
              <a href={project} className="header-button">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
              </a>
              {/* <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i> Page 
                </a> */}
            </div>
          </Fade>
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
