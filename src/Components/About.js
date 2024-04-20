import React, { Component, useEffect, useRef, useState } from "react";
import Fade from "react-reveal";
import "./About.css";
import Draggable from 'react-draggable';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import SkillCard from "./SkillCard/SkillCard"
import WindowsCard from "./WindowsComponentCard/WindowsCard";
import MacCard from "./MacComponentCard/MacCard";
import MusicBumper from "./MusicBumper/MusicBumper";
import cleanteeth from "../../src/audio/cleanteeth.mp3"
import tailrunner from "../../src/audio/tailrunner.mp3"

import WaveGuy from "../Components/p5art/WaveGuy"

const skillPics = [
  '/images/skillpics/javascriptskill.png',
  '/images/skillpics/cssskill.png',
  '/images/skillpics/reactskill.png',
  '/images/skillpics/gatsbyskill.png'
]

const frontEndPics = {

}

const backEndPics = {

}

const versionControlPics = {

}

// const audioLink = 'https://audio.jukehost.co.uk/TSwcmY1V3H6wLYCOzNHrgIfGMXkTXk5m';
// const audioLink = 'https://audio.jukehost.co.uk/LnFwvFwA1l75iaTZaRRaJwHLL4EPVJSa';


function About(props) {
  const sec = useRef();

  const fePics = [
    props.skills.skills[1],
    props.skills.skills[2],
    props.skills.skills[3],
    props.skills.skills[0],
    props.skills.skills[9]
  ];

  const bePics = [
    props.skills.skills[4],
    props.skills.skills[5],
    props.skills.skills[6],
    props.skills.skills[7],
    props.skills.skills[8]
  ];

  const vcPics = [
    props.skills.skills[10],
    props.skills.skills[11]
  ];

  if (props.data) {
    const name = props.data.name;
    const profilepic = "/images/" + props.data.image;
    const bio = props.data.bio;
    const email = props.data.email;
    const resumeDownload = props.data.resumedownload;

    // if (frontEndPics && backEndPics && versionControlPics) {
    return (
      // <div id="about" className='about' onTouchEnd={() => { props.scrollTo(props.goToSectionRef) }} onMouseOver={() => { props.scrollTo(props.goToSectionRef) }}>
      <div id="about" className='about'>
        <div className="page-filter"></div>
        <div className="about-bg-grid"></div>
        <div className="about-gradient-bg"></div>
        <Fade>
          <div className='about-wrapper'>
            {/* <div className='about-outer-skills'> */}
            <div className="about-header">
              <Fade>
                <h1 className="can-work-text"><span className="green-span">* </span>Some things <span className="bloo-span">about me...<span className="green-span"> *</span></span></h1>
              </Fade>
            </div>
            <div className='skill-windows'>

              {/* <Fade> */}
              <SkillCard programText="Debrief: Introduction" artComp={
                <div className='intro-wrap'>
                  <h1 className='intro-title'>Welcome</h1>
                  <p className="intro">
                    <span className="emphasis-text1">Front-end</span> focused web developer dedicated to building uniquely crafted user-interactive experiences.
                    Computer Science graduate from
                    <span className="utdorange"> The University</span><span className="utdorange"> of Texas</span><span className="utdgreen"> at Dallas</span>
                    <span className="utdgreen"> (</span>
                    <span className="utdorange italics">UTD</span>
                    <span className="utdgreen">)</span>
                    .
                    I have a <span className="italics">*zeal*</span> for exploring new programming techniques, skills, and implementations. During my academic journey and spare time over the past 7 years, I've crafted a variety of applications, from fully-responsive full-stack web pages to implementing data structures and integrating APIs for Twitter(X) and Discord bots.
                    I'm comfortable with a range of languages and frameworks, including{" "}
                    <span className="emphasis-text1">C#</span>,{" "}
                    <span className="emphasis-text2">C++</span>,{" "}
                    <span className="emphasis-text3">Java</span>,{" "}
                    <span className="emphasis-text4">JavaScript</span>,{" "} and {" "}
                    <span className="emphasis-text5">React</span>.
                    Likewise, I'm inclined towards <span className="emphasis-text5">WebGL</span> rendering and traversing in a 3D environment.
                    While I particularly enjoy front-end development, where I focus on styling/structuring with{" "}
                    <span className="emphasis-text1">CSS and HTML</span>,
                    I also find time to appreciate the intricacies of full-stack development, incorporating technologies like{" "}
                    <span className="emphasis-textw" w>MongoDB and Express.js for RESTful API services</span>.
                    Likewise, I enjoy attending hackathons, working on desktop and mobile applications, and solving coding problems.
                    Let's collaborate and create something together.
                  </p>
                  <h1 className='exit-title'>Thanks for stopping by...</h1>
                </div>
              } />


              <WindowsCard programText="C:/mySkillset-0" artComp={
                <div className='skills-text-wrapper'>
                  <h1 className='text-vt323 skills-title'>{"Technologies/Frameworks"}</h1>
                  <ul className="text-vt323 skills-text-list">
                    <li>React.js</li>
                    <li>RESTful APIs (Express.js)</li>
                    <li>JavaScript/Typescript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>JQuery</li>
                    <li>WebGL</li>
                    <li>TailwindCSS</li>
                    <li>Bootstrap</li>
                    <li>Gatsby</li>
                    <li>Vite</li>
                  </ul>
                </div>
              } />

              <div className="cool-div">
                <WindowsCard programText="C:/try-it-out.drg" artComp={
                  <div className='click-drag-wrap'>
                    <h1 className='text-vt323 click-drag-us'>{"> These windows are draggable -"}</h1>
                    <h1 className='text-vt323 click-drag-us'>{"Click and Drag us around "}<span className="happyface">{"^_^"}</span></h1>
                  </div>
                } />

                <div className="center-window">
                  <MacCard programText="X:/MusicBumper.js" underbartext="I like to visualize sound" artComp={<MusicBumper audioSource={tailrunner} />
                  } />
                </div>

              </div>

              <MacCard programText="C:/mySkillset-1" artComp={
                <div className='skills-text-wrapper-mac mac-bgc'>
                  <h1 className='skills-title-mac'>{"Programming Languages/Back-end Tech"}</h1>
                  <ul className="skills-text-list-mac">
                    <li>Java</li>
                    <li>C++</li>
                    <li>C#</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>SQL</li>
                  </ul>
                </div>
              } />

              <MacCard programText="X:/Front-End" underbartext={"(This site you're on now)"} artComp={
                <div className="multi-image-wrapper">
                  {fePics.map((skill) => {
                    return (
                      <img className='multi-image-skill-img' key={skill.name} alt='skill' src={"/images/skillpics/" + skill.src}></img>
                    )
                  })}
                </div>
              }
              />

              <WindowsCard programText="X:/Back-End" artComp={
                <div className="multi-image-wrapper">
                  {bePics.map((skill) => {
                    return (
                      <img className='multi-image-skill-img' key={skill.name} alt='skill' src={"/images/skillpics/" + skill.src}></img>
                    )
                  })}
                </div>
              }
              />

              {/* <MacCard programText="X:/WaveGuy.p5" underbartext="WebGL is incredible" artComp={
                <WaveGuy />
              } /> */}

              <SkillCard programText="Version Control Tools" artComp={
                vcPics.map((skill) => {
                  return (
                    <img className='multi-image-skill-img' key={skill.name} alt='skill' src={"/images/skillpics/" + skill.src}></img>
                  )
                })} />


              <SkillCard programText="Continue" artComp={
                <div className='continue-btn'>
                  <a className="continue-button" href="#portfolio">
                    <FontAwesomeIcon icon={faCircleChevronDown} />
                  </a>
                </div>
              } />



              {/* <div className="skills-text"> */}
              {/* <SkillTextCard programText="Skills" titleText="Programming Languages" skillsText="JavaScript, TypeScript, Java, C#, C++" /> */}
              {/* <hr></hr> */}
              {/* <SkillTextCard programText="Skills" titleText="Technologies/Frameworks" skillsText="React.js, RESTful APIs (HTTP querying), HTML, CSS, SASS, Bootstrap, JQuery, GatsbyJS, TailwindCSS, Express.js, MongoDB, SQL" /> */}
              {/* <hr></hr> */}
              {/* <SkillTextCard programText="Skills" titleText="Miscellaneous" skillsText="GitHub Version Control, Jira Software Project/Ticketing Management, Graphic Design & Photoshop, Ambulating" /> */}
              {/* <hr></hr> */}
              {/* <SkillTextCard programText="!!!" titleText="Click & Drag us" skillsText=":}" /> */}
              {/* </div> */}
              {/* <SkillTextCard programText="About Me" titleText="Who am I?" skillsText="B.S. Computer Science Graduate (The University of Texas at Dallas). My passion lies within learning new programming techniques and skills. During my studies and spare time, I have developed a wide range of applications: varying from fully-responsive full-stack web pages, data structure implementations, all they way to API integrated Twitter bots. I have experience in multiple languages & frameworks such as C#, C++, Java, JavaScript, and React. While I mainly enjoy working on front-end applications and doing styling with CSS(libraries/native) and HTML, I also enjoy the process of full-stack development by implementing back-end technologies like MongoDB and Express.js RESTful API services. Likewise, I enjoy attending hackathons, creating desktop and mobile applications, and solving coding problems." /> */}

              {/* </Fade> */}
            </div>
            {/* </div> */}
          </div>
        </Fade>
      </div >
    );
    // }
    // else return <div>bruh</div>;
  }
}

export default About;
