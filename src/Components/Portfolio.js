import React, { Component } from "react";
import Fade from "react-reveal";
import "./Portfolio.css";
import "./Contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCircleChevronDown, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { TypeAnimation } from "react-type-animation";
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
import Draggable from "react-draggable";
import { useState } from "react";


let colorGradients = [
  "linear-gradient(-45deg, #556b2f 50%, #502f6bc4 50%)",
  "linear-gradient(-45deg, #a9ff68 50%, #5cb270c4 50%)",
  "linear-gradient(-45deg, #ef745c 50%, #34073dc4 50%)",
  "linear-gradient(-45deg, #c27ba0 50%, #5fc52ec4 50%)",
  "linear-gradient(-45deg, #fbd07c 50%, #f7f779c4 50%)"
];

let colors = [
  "#5cb270c4", // emerald
  "#ef745cc4", // bloodred
  "#60696bc4", // grey
  "#502f6bc4", // purple
  "#4b749fc4" // slateblue
];

let id = 0;

function SoftwareProjectCard(props) {
  let reversePos = "reverse-order magnet-right";

  return (
    <div className="border-aim">
      <div className="project-card" style={{
        // background: colorGradients[Math.floor(Math.random() * 5)]
      }}>

        {/* 
        <div className="metal-foreground"></div>

        <div className="gradient-metal-bg"></div> */}

        <h1 className="project-title">
          <TypeAnimation
            sequence={["> " + props.projectData.title]}
          />
        </h1>
        <div className="inner-card-wrapper-bolts">
          <div className="bolt-wrapper" style={{ justifyContent: "center" }}>
            <div className="bolt" />
          </div>

          <div className="card-wrapper">
            <div className={"project-info " + (props.right ? reversePos : null)}>
              <img className="" src={"/images/softwarepics/" + props.projectData.image}>
              </img>

              <div className="proj-desc-links ">
                <p style={{
                  background: "linear-gradient(-45deg, #333333c4" + /*colors[Math.floor(Math.random() * 5)] + */" 50%, #000000c4 50%)",
                }}>

                  {props.projectData.desc}
                </p>
                <hr></hr>
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
                    <div className="proj-btn">
                      <a target='_blank' href={props.projectData.demo} className="proj-button border-aim-btn">
                        <FontAwesomeIcon icon={faLaptop} />
                      </a>
                    </div>

                    <div className="proj-btn">
                      <a target='_blank' href={props.projectData.source} className="proj-button border-aim-btn">
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bolt-wrapper" style={{ justifyContent: "center" }}>
            <div className="bolt" />
          </div>
        </div>
      </div>
    </div >
  );
}

class Portfolio extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
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
            <Fade left>
              <div className="project-list">
                <SoftwareProjectCard projectData={this.props.data.software[0]} />
                <SoftwareProjectCard projectData={this.props.data.software[2]} right={true} />
                <SoftwareProjectCard projectData={this.props.data.software[4]} />
                <SoftwareProjectCard projectData={this.props.data.software[6]} right={true} />
              </div>
            </Fade>

            <Fade right>
              <div className="project-list">
                <SoftwareProjectCard projectData={this.props.data.software[1]} />
                <SoftwareProjectCard projectData={this.props.data.software[3]} right={true} />
                <SoftwareProjectCard projectData={this.props.data.software[5]} />
                <SoftwareProjectCard projectData={this.props.data.software[7]} right={true} />
              </div>
            </Fade>
          </div>
        </div>

        {/* <div className="programming-art">
          <SkillCard programText="p5.js" artComp={<PerlinNoise2D />} />
          <SkillCard programText="p5.js" artComp={<SolarSystem3D />} />
        </div> */}
      </div >
    );

  }
}

export default Portfolio;
