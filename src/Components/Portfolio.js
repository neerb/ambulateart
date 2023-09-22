import React, { Component } from "react";
import Fade from "react-reveal";
import "./Portfolio.css";

let id = 0;

function SoftwareProjectCard(props) {
  return (
    <div className='project-card'>
      <h1>
        {props.projectData.title}
      </h1>
      <div className="main-card">

      </div>

      <div className="stack-card-overlay">

      </div>
      {/* <img className="project-card-image" src={"ambulateart/images/softwarepics/pokedexex.png"}>
      </img> */}
    </div>
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
            <SoftwareProjectCard projectData={this.props.data.software[0]}/>
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
