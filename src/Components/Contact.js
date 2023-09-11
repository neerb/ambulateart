import { Link } from "@mui/material";
import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
//import PowerModeInput from "power-mode-input";
import "./Contact.css"

class Contact extends Component {
  /*
    componentDidMount() {
      PowerModeInput.make(this.inputRef.current);
    }
    */


  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const email = this.props.data.email;
    const project = this.props.data.project;
    const github = this.props.data.github;

    return (
      <section id="contact">
        <div className="app_contact">
          <Fade bottom duration={1000}>
            <h2>
              Contact & Links
            </h2>

            <h3>
              Nathan Breen
            </h3>

            <h3>
              <Link>
                natbreenx@gmail.com
              </Link>
            </h3>

            <ul className="social-links">
              <a href={github} className="button btn link-button">
                <i className="fa fa-github"></i>
              </a>
              <a href={project} className="button btn link-button">
                <i className="fa fa-linkedin"></i>
              </a>
            </ul>
          </Fade>
        </div>
      </section >
    );
  }
}

export default Contact;
