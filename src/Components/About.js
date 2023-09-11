import React, { Component } from "react";
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
        <div className="skill-img-label">
          <Draggable
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            scale={1}>
            <div className='skills-text-bubble'>
              <div className='handle'>
                <button className='minimize-btn' onClick={null}></button>
                <div className='program-title'>
                  <div className='program-line'></div>
                  <h1 className='skills-text-title'>{skills.name}</h1>
                  <div className='program-line'></div>
                </div>
              </div>
              <div className='image-skill-wrapper'>
                <img className='image-skill' alt='skill' src={"ambulateart/images/skillpics/" + skills.src}></img>
              </div>
            </div>
          </Draggable>
        </div>
      );
    });

    return (
      <div id="about" className='about'>
        <Fade>
          <div className="can-work">
            <h1 className="can-work-text">I can work <span>with</span></h1>
          </div>
          <div className='about-wrapper'>
            <div className='about-outer-skills'>
              <div className='skill-windows'>
                <div className="skills-list-windows">{skills}</div>
                <div className="skills-text">
                  <Draggable
                    handle=".handle"
                    defaultPosition={{ x: 0, y: 0 }}
                    position={null}
                    grid={null}
                    scale={1}>
                    <div className='skills-text-bubble'>
                      <div className='handle'>
                        <button className='minimize-btn' onClick={null}></button>
                        <div className='program-title'>
                          <div className='program-line'></div>
                          <h1 className='skills-text-title'>Skills 1</h1>
                          <div className='program-line'></div>
                        </div>
                      </div>
                      <h1 className='skills-text-bubble-text'>Programming Languages</h1>
                      <p>JavaScript, TypeScript, Java, C#, C++</p>
                    </div>
                  </Draggable>

                  <hr></hr>
                  <Draggable
                    handle=".handle"
                    defaultPosition={{ x: 0, y: 0 }}
                    position={null}
                    grid={null}
                    scale={1}>
                    <div className='skills-text-bubble'>
                      <div className='handle'>
                        <button className='minimize-btn' onClick={null}></button>
                        <div className='program-title'>
                          <div className='program-line'></div>
                          <h1 className='skills-text-title'>Skills 2</h1>
                          <div className='program-line'></div>
                        </div>
                      </div>
                      <h1 className='skills-text-bubble-text'>Technologies/Frameworks</h1>
                      <p>React.js, RESTful APIs (HTTP querying), HTML, CSS, SASS, Bootstrap, JQuery, GatsbyJS, TailwindCSS, MongoDB, SQL</p>
                    </div>
                  </Draggable>

                  <hr></hr>

                  <Draggable
                    handle=".handle"
                    defaultPosition={{ x: 0, y: 0 }}
                    position={null}
                    grid={null}
                    scale={1}>
                    <div className='skills-text-bubble'>
                      <div className='handle'>
                        <button className='minimize-btn' onClick={null}></button>
                        <div className='program-title'>
                          <div className='program-line'></div>
                          <h1 className='skills-text-title'>Skills 3</h1>
                          <div className='program-line'></div>
                        </div>
                      </div>
                      <h1 className='skills-text-bubble-text'>Miscellaneous</h1>
                      <p>GitHub Version Control, Jira Software Project/Ticketing Management, Graphic Design & Photoshop, Ambulating</p>
                    </div>
                  </Draggable>

                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default About;
