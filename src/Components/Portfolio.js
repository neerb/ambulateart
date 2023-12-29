import React, { Component } from "react";
import Fade from "react-reveal";
import "./Portfolio.css";
import "./Contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { TypeAnimation } from "react-type-animation";



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
          <div className="bolt-wrapper">
            <div className="bolt" style={{ transform: "rotateZ(" + (Math.random() * 25) + "deg)" }} />
            <div className="bolt" style={{ transform: "rotateZ(" + (Math.random() * 25) + "deg)" }} />
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

          <div className="bolt-wrapper">
            <div className="bolt" style={{ transform: "rotateZ(" + (Math.random() * 25) + "deg)" }} />
            <div className="bolt" style={{ transform: "rotateZ(" + (Math.random() * 25) + "deg)" }} />
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
            <div className='port-header'>
              <span className="header-spanelement">{"<"}</span>
              <span className="header-spancompo">{"My"}</span>
              <span className="header-spanprops">{" projects"}</span>
              <span className="header-spanslash">{"/"}</span>
              <span className="header-spanelement">{">"}</span>

              <div className="legend-wrapper">
                <div className="icon-legend">
                  <FontAwesomeIcon icon={faCaretDown} />
                  {" LEGEND "}
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>

                <div className="legend-items">
                  <div className="icon-legend-item">
                    <h1 className="legend-btn-title">
                      {"DEMO: "}
                    </h1>
                    <span className="legend-icon-span">
                      <div className="icon-legend-btn">
                        <FontAwesomeIcon icon={faLaptop} />
                      </div>
                    </span>
                  </div>
                  <div className="icon-legend-item">
                    <h1 className="legend-btn-title">
                      {"SOURCE: "}
                    </h1>                    <span className="legend-icon-span">
                      <div className="icon-legend-btn">
                        <FontAwesomeIcon icon={faGithub} />
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          <div className="projects-wrapper">
            <div className="project-list">
              <SoftwareProjectCard projectData={this.props.data.software[0]} />
              <SoftwareProjectCard projectData={this.props.data.software[2]} right={true} />
              <SoftwareProjectCard projectData={this.props.data.software[4]} />
              <SoftwareProjectCard projectData={this.props.data.software[6]} right={true} />
            </div>

            <div className="project-list">
              <SoftwareProjectCard projectData={this.props.data.software[1]} />
              <SoftwareProjectCard projectData={this.props.data.software[3]} right={true} />
              <SoftwareProjectCard projectData={this.props.data.software[5]} />
              <SoftwareProjectCard projectData={this.props.data.software[7]} right={true} />
            </div>
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
