import React, { Component } from "react";
import Fade from "react-reveal";
import "./Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCircleChevronDown, faLaptop } from "@fortawesome/free-solid-svg-icons";
import TimesTables from "./p5art/TimesTables";
import PerlinNoise2D from "./p5art/PerlinNoise2D";
import Unknownp5 from "./p5art/Unknownp5";
import Colorful3DAnimation from "./p5art/Colorful3DAnimation";
import Triangular3DAnimation from "./p5art/Triangular3DAnimation";
import ColorfulBouncingBalls from "./p5art/ColorfulBouncingBalls";
import ColorfulBouncingBalls3D from "./p5art/ColorfulBouncingBalls3D";
import ColorfulWaves3DAnimation from "./p5art/ColorfulWaves3DAnimation";
import ColorfulWave2DAnimation from "./p5art/ColorfulWaves2DAnimation";
import GravitySimulation2D from "./p5art/GravitySimulation2D";
import SolarSystem3DAnimation from "./p5art/SolarSystem3DAnimation";
import SolarSystem3D from "./p5art/SolarSystem3D";
import LaughingFaces from "./p5art/LaughingFaces";
import WildFaces from "./p5art/WildFaces";
import AnimatedDetailedHumanFace from "./p5art/AnimatedDetailedHumanface";
import MenacingFace from "./p5art/MenacingFace";
import Kaleidoscope2D from "./p5art/Kaleidoscope2D";
import DetailedKaleidoscope2D from "./p5art/DetailedKaleidoscope2D";
import Psychedelic3D from "./p5art/Psychedelic3D";
import AnimatedFlowerBouquet from "./p5art/AnimatedFlowerBouqet";

let id = 0;

function SoftwareProjectCard(props) {
  let reversePos = "reverse-order magnet-right";

  return (
    <Fade left>
    <div className='project-card'>
      <h1 className="project-title">
        {">"} {props.projectData.title}
      </h1>
      <div className={"project-info " + (props.right ? reversePos : null)}>
        <img src={"ambulateart/images/softwarepics/" + props.projectData.image}>
        </img>

        <div className="proj-desc-links">
          <p>
            {props.projectData.desc}
          </p>

          <div className="tech-wrapper">
            <div className="tech-stack">
              <div className="stack-title">
                  {"< Stack Used />"}
              </div>

              <div className="stack-info">
                {props.projectData.technologies.map((t) => 
                <p key={t}>
                  {t}
                </p>
                )}
              </div>
            </div>

            <div className="proj-links">
              {/* Live Demo and Source Links: */}
              <a target='_blank' href={props.projectData.demo} className="header-button">
                <FontAwesomeIcon icon={faLaptop} />
              </a>
              <a target='_blank' href={props.projectData.source} className="header-button">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="project-card-image" src={"ambulateart/images/softwarepics/pokedexex.png"}>
      </img> */}
    </div>
    </Fade>
  );
}

class Portfolio extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   frontEndProjects: [this.props.data.software[0],
    //                     this.props.data.software[1]],
    //   backEndProjects: []
    // }

  }

  componentDidMount() {

    // console.log(this.state.frontEndProjects);
  }


  render() {
    if (!this.props.data) return null;

    return (
      <div id="portfolio">
        <div className="portfolio-block">
          <Fade>
            <h1 className='port-header'>
              <span className="header-spanelement">{"<"}</span>
              <span className="header-spancompo">{"My"}</span>
              <span className="header-spanprops">{" works"}</span>
              <span className="header-spanslash">{"/"}</span>
              <span className="header-spanelement">{">"}</span>
            </h1>
          </Fade>

          <div className="projects-wrapper">
            <SoftwareProjectCard projectData={this.props.data.software[0]} />
            <SoftwareProjectCard projectData={this.props.data.software[1]} right={true} />
            <SoftwareProjectCard projectData={this.props.data.software[2]} />
            <div className='project-card'>
              <h1 className="project-title">
                {">"} Procedural Programming Art (p5.js)
              </h1>

              <div className="programming-art">
                {/* <TimesTables /> */}
                {/* <PerlinNoise2D /> */}
                {/* <Unknownp5 /> */}
                {/* <Colorful3DAnimation /> */}
                {/* <Triangular3DAnimation /> */}
                {/* <ColorfulBouncingBalls /> */}
                {/* <ColorfulBouncingBalls3D /> */}
                {/* <ColorfulWaves3DAnimation /> */}
                {/* <ColorfulWave2DAnimation /> */}
                {/* <GravitySimulation2D /> */}
                {/* <SolarSystem3DAnimation /> */}
                {/* <SolarSystem3D /> */}
                {/* <LaughingFaces /> */}
                {/* <WildFaces /> */}
                {/* <AnimatedDetailedHumanFace /> */}
                {/* <MenacingFace /> */}
                {/* <Kaleidoscope2D/> */}
                {/* <DetailedKaleidoscope2D/> */}
                {/* <Psychedelic3D/> */}
                {/* <AnimatedFlowerBouquet/> */}
              </div>
            </div>
          </div>

        </div>

        {/* <Fade left>
          <div className="front-end-projects">
            <div className="label-container">
              <p className="project-section-label-fe">Front-End Projects</p>
              <hr className="label-bar-fe"></hr>
            </div>
            <div className='projects-container'>
              <SoftwareProjectCard />
              <SoftwareProjectCard />
              <SoftwareProjectCard />
            </div>
          </div>
        </Fade>


        <Fade right>
          <div className="back-end-projects">
            <div className="label-container">
              <hr className="label-bar-be"></hr>
              <p className="project-section-label-be">Back-End Projects</p>
            </div>
            <div className='projects-container'>
              <SoftwareProjectCard />
              <SoftwareProjectCard />
              <SoftwareProjectCard />
            </div>
          </div>
        </Fade> */}
      </div >
    );

  }
}

export default Portfolio;
