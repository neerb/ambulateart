import React, { Component, useState } from "react";
import Fade from "react-reveal";
import "./About.css";
import Draggable from 'react-draggable';

const skillPics = [
  'ambulateart/images/skillpics/javascriptskill.png',
  'ambulateart/images/skillpics/cssskill.png',
  'ambulateart/images/skillpics/reactskill.png',
  'ambulateart/images/skillpics/gatsbyskill.png'
]
let skillPos = 0;

function SkillCard(props) {
  let minimizedStylesHandle = 'handle box-shadow';
  let maximizedStylesHandle = 'handle';
  let skillCardNoShadow = 'skills-image-window';
  let skillCardShadow = 'skills-image-window box-shadow';

  const [minimized, setMinimized] = useState(false);

  function handleMinimize(e) {
    setMinimized(!minimized);
  }

  return (
    // <div className="skill-img-label">
    <Draggable
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      scale={1}>
      <div className={minimized ? skillCardNoShadow : skillCardShadow}>
        <div className={minimized ? minimizedStylesHandle : maximizedStylesHandle}>
          <button className='minimize-btn' style={{ backgroundColor: minimized ? "green" : "red" }} onClick={handleMinimize}></button>
          <div className='program-title'>
            <div className='program-line'></div>
            <h1 className='skills-text-title'>{props.skill.name}</h1>
            <div className='program-line'></div>
          </div>
        </div>
        <div className='image-skill-wrapper' style={{ visibility: minimized ? 'hidden' : 'visible' }}>
          <img className='image-skill' alt='skill' src={"ambulateart/images/skillpics/" + props.skill.src}></img>
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
      skill: skillPics[skillPos]
    }
  }

  componentDidMount() {
    this.setState({
      skill: skillPics[skillPos++]
    });

    const intervalId = setInterval(() => {
      if (skillPos >= skillPics.length)
        skillPos = 0;
      this.setState({
        skill: skillPics[skillPos++]
      });
    }, 2500);


    return () => clearInterval(intervalId);
  }

  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "ambulateart/images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    const skills = this.props.skills.skills.map((skills) => {
      return (
        <SkillCard skill={skills}></SkillCard>
      );
    });

    return (
      <div id="about" className='about'>
        <Fade>
          <div className='about-wrapper'>
            <Fade top>
              <div className="can-work">
                <h1 className="can-work-text">I work <span>with...</span></h1>
              </div>
            </Fade>
            {/* <div className='about-outer-skills'> */}
            <div className='skill-windows'>
              <Fade left>
                <div className="skills-list-windows">{skills}</div>
              </Fade>

              <Fade right>
                <div className="skills-text">
                  <SkillTextCard programText="Skills" titleText="Programming Languages" skillsText="JavaScript, TypeScript, Java, C#, C++" />
                  <hr></hr>
                  <SkillTextCard programText="Skills" titleText="Technologies/Frameworks" skillsText="React.js, RESTful APIs (HTTP querying), HTML, CSS, SASS, Bootstrap, JQuery, GatsbyJS, TailwindCSS, MongoDB, SQL" />
                  <hr></hr>
                  <SkillTextCard programText="Skills" titleText="Miscellaneous" skillsText="GitHub Version Control, Jira Software Project/Ticketing Management, Graphic Design & Photoshop, Ambulating" />
                  <hr></hr>
                  <SkillTextCard programText="!!!" titleText="Click & Drag us" skillsText=":}" />
                </div>
              </Fade>
            </div>
          </div>
          {/* </div> */}
        </Fade>
      </div>
    );
  }
}

export default About;
