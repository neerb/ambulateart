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
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <div id="portfolio">
        <Fade left duration={1000} distance="40px">
          <h1 className='test'>Software Projects. All websites are fully mobile responsive, try them out.</h1>


        </Fade>
      </div >
    );

  }
}

export default Portfolio;
