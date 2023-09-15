import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import { PhotoAlbum } from "react-photo-album";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Card } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Gallery from "react-photo-gallery";
import "./Portfolio.css";

let id = 0;

function SoftwareProjectCard(props) {
  return (
    <div>

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
        <Fade left>
          <p>Front-End Projects</p>
          <div className="projects-one">
            
            <Fade left duration={500}>
              <div>
                <div className="p1-1-container">
                    <SoftwareProjectCard/>
                </div>
              </div>
            </Fade>

            <Fade left duration={750}>
              <div>
                <div className="p1-2-container">
                  <SoftwareProjectCard/>
                </div>
              </div>
            </Fade>

            <Fade left duration={1000}>
              <div>
                <div className="p1-3-container">
                    <SoftwareProjectCard/>
                </div>
              </div>
            </Fade>
          </div>
        </Fade>

        <Fade right>
          <p>Back-End Projects</p>
          <div className="projects-two">
            <div className="p2-container">

            </div>
          </div>
        </Fade>
      </div >
    );

  }
}

export default Portfolio;
