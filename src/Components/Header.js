import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import './Header.css'
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import HeaderBg from "./HeaderBG/HeaderBg";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const linkedin = this.props.data.linkedin;
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

        {/* <ParticlesBg className="" type="cobweb" color={["daa520"]} num='50' bg={{ position: "absolute", zIndex: 0, left: 0, top: 0 }} /> */}
        <div className="header-bg">
          <HeaderBg />
        </div>


        <nav id="nav-wrap">

          <Fade>
          </Fade>
        </nav>

        <div className="header-wrapper">
          {/* <h2 style={{ fontSize: 30 }} class='header-label'>Portfolio:</h2> */}
          <h1 className="header-name shineeffect">{name}</h1>
          <Fade bottom duration={1200}>
            <TypeAnimation
              sequence={["> I am a Web Developer", 1500, "> I am a UI/UX Designer", 1500, "> I am a Software Engineer", 1500, "> I am a Full-Stack Developer", 1500, , '> I am an Ambulator', 1500]}
              className='header-desc'
              repeat={Infinity}
            />
            {/* <h3>{description}.</h3> */}
          </Fade>
          <hr className="header-bar" />
          <Fade bottom duration={2000}>
            <div className="header-buttons">
              <a target='_blank' href={github} className="header-button aim-btn">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a target='_blank' href={linkedin} className="header-button aim-btn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              {/* <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i> Page 
                </a> */}
            </div>
          </Fade>
        </div>

        <div className='scrolldown'>
          <a className="scrolldown-button" href="#about">
            <FontAwesomeIcon icon={faCircleChevronDown} />
          </a>
        </div>
      </header >
    );
  }
}

export default Header;
