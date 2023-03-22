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

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const softwares = this.props.data.software.map(function (software) {
      let softwareImage = "ambulateart/images/softwarepics/" + software.image;
      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Card sx={{}}>
              <CardMedia
                sx={{ height: 400 }}
                image={softwareImage}
                title={software.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {software.title}
                </Typography>
                <Typography gutterBottom variant="h5" color="text.secondary" component="div">
                  Technologies Implemented:
                  {software.technologies}
                </Typography>
                <Typography variant="h4">
                  {software.desc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="large" onClick={() => { window.open(software.link, '') }}>Link</Button>
              </CardActions>
            </Card>
          </div>
        </div>
      );
    });

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "ambulateart/images/artportfolio/" + projects.src;
      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <h1>Software Projects. All websites are fully mobile responsive, try them out.</h1>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {softwares}
            </Masonry>
          </ResponsiveMasonry>

          <h1>Graphic Designs.</h1>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {projects}
            </Masonry>
          </ResponsiveMasonry>


          {/*
          <div className="row">
            {/*<PhotoAlbum layout="rows" photos={photos} />;}
            <div className="twelve columns collapsed">
              <h1>Graphic Designs.</h1>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>

              <h1>Software Projects.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
    */}
        </Fade>
      </section >
    );

  }
}

export default Portfolio;
