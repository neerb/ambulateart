import React, { Component, useState } from "react";
import Fade from "react-reveal";
import "./About.css";
import Draggable from 'react-draggable';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import SkillCard from "./SkillCard/SkillCard"
import WindowsCard from "./WindowsComponentCard/WindowsCard";
import MacCard from "./MacComponentCard/MacCard";

const skillPics = [
  'ambulateart/images/skillpics/javascriptskill.png',
  'ambulateart/images/skillpics/cssskill.png',
  'ambulateart/images/skillpics/reactskill.png',
  'ambulateart/images/skillpics/gatsbyskill.png'
]

const frontEndPics = {

}

const backEndPics = {

}

const versionControlPics = {

}


// single image skillcard
function ContinueSkillCard(props) {
  let minimizedStylesHandle = 'continue-handle box-shadow';
  let maximizedStylesHandle = 'continue-handle';
  let skillCardNoShadow = 'continue-image-window';
  let skillCardShadow = 'continue-image-window box-shadow';

  const [minimized, setMinimized] = useState(false);

  function handleMinimize(e) {
    setMinimized(!minimized);
  }

  return (
    // <div className="skill-img-label">
    <Draggable
      handle=".continue-handle"
      defaultPosition={{ x: 0, y: 0 }}
      scale={1}>
      <div className={minimized ? skillCardNoShadow : skillCardShadow}>
        <div className={minimized ? minimizedStylesHandle : maximizedStylesHandle}>
          <button className='minimize-btn' style={{ backgroundColor: minimized ? "green" : "red" }} onClick={handleMinimize}></button>
          <div className='program-title'>
            <div className='program-line'></div>
            <h1 className='skills-text-title'>Continue</h1>
            <div className='program-line'></div>
          </div>
        </div>
        <div className='continue-btn' style={{ visibility: minimized ? 'hidden' : 'visible' }}>
          <a className="continue-button" href="#portfolio">
            <FontAwesomeIcon icon={faCircleChevronDown} />
          </a>
        </div>
      </div>
    </Draggable>
    // </div>
  );
}

function SkillTextCard(props) {
  let minimizedStylesHandle = 'text-handle box-shadow';
  let maximizedStylesHandle = 'text-handle';
  let skillCardNoShadow = 'skills-text-bubble';
  let skillCardShadow = 'skills-text-bubble box-shadow';
  const [minimized, setMinimized] = useState(false);

  function handleMinimize(e) {
    setMinimized(!minimized);
  }

  return (
    <Draggable
      handle=".text-handle"
      defaultPosition={{ x: 0, y: 0 }}
      scale={1}>
      <div className={minimized ? skillCardNoShadow : skillCardShadow}>
        <div className={minimized ? minimizedStylesHandle : maximizedStylesHandle}>
          <button className='minimize-btn' onClick={handleMinimize} style={{ backgroundColor: minimized ? "gold" : "red" }}></button>
          <div className='program-title'>
            <div className='program-line'></div>
            <h1 className='skills-text-title'>{props.programText}</h1>
            <div className='program-line'></div>
          </div>
        </div>
        <div className='skills-text-wrapper' style={{ visibility: minimized ? 'hidden' : 'visible' }}>
          <h1 className='skills-text-bubble-text'>{props.titleText}</h1>
          <p>{props.skillsText}</p>
        </div>
      </div>
    </Draggable>
  );
}

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      frontEndPics: []
    }
  }

  componentDidMount() {
    console.log(this.state.frontEndPics);
  }

  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "ambulateart/images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    this.state = {
      frontEndPics: [
        this.props.skills.skills[1],
        this.props.skills.skills[2],
        this.props.skills.skills[3],
        this.props.skills.skills[0],
        this.props.skills.skills[9]
      ],
      backEndPics: [
        this.props.skills.skills[4],
        this.props.skills.skills[5],
        this.props.skills.skills[6],
        this.props.skills.skills[7],
        this.props.skills.skills[8]
      ],

      versionControlPics: [
        this.props.skills.skills[10],
        this.props.skills.skills[11]
      ]
    }

    console.log(this.state.frontEndPics);

    // const skills = this.props.skills.skills.map((skills) => {
    //   return (
    //     <SkillPicCard skill={skills}></SkillCard>
    //   );
    // });

    return (
      <div id="about" className='about'>
        <div className={"page-filter"}></div>
        <Fade>
          <div className='about-wrapper'>
            <div className="can-work">
              <Fade left>
                <h1 className="can-work-text">Some things <span>about me...</span></h1>
              </Fade>
            </div>
            {/* <div className='about-outer-skills'> */}
            <div className='skill-windows'>
              <Fade left>
                {/* <div className="skills-list-windows">{skills}</div> */}
              </Fade>

              {/* <Fade> */}
              <SkillCard programText="Debrief: Introduction" artComp={
                <div className=''>
                  <h1 className=''>{"ayeeeeee"}</h1>
                  <p>{""}</p>
                </div>
              } />

              <MacCard programText="apple" artComp={
                <div className=''>
                  <h1 className=''>{"ayeeeeee"}</h1>
                  <p>{""}</p>
                </div>
              } />

              <MacCard programText="Front-End" underbartext={"(I used these to make this site you're on now.)"} artComp={
                <div className="multi-image-wrapper">
                  {this.state.frontEndPics.map((skill) => {
                    return (
                      <img className='multi-image-skill-img' key={skill.name} alt='skill' src={"ambulateart/images/skillpics/" + skill.src}></img>
                    )
                  })}
                </div>
              }
              />

              <WindowsCard programText="X:/Back-End and Programming Languages" artComp={
                <div className="multi-image-wrapper">
                  {this.state.backEndPics.map((skill) => {
                    return (
                      <img className='multi-image-skill-img' key={skill.name} alt='skill' src={"ambulateart/images/skillpics/" + skill.src}></img>
                    )
                  })}
                </div>
              }
              />

              <SkillCard programText="Version Control Tools" artComp={
                this.state.versionControlPics.map((skill) => {
                  return (
                    <img className='multi-image-skill-img' key={skill.name} alt='skill' src={"ambulateart/images/skillpics/" + skill.src}></img>
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
              {/* <SkillTextCard programText="Skills" titleText="Technologies/Frameworks" skillsText="React.js, RESTful APIs (HTTP querying), HTML, CSS, SASS, Bootstrap, JQuery, GatsbyJS, TailwindCSS, MongoDB, SQL" /> */}
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
  }
}

export default About;
