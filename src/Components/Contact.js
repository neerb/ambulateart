import { Link } from "@mui/material";
import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
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
    const linkedin = this.props.data.linkedin;

    return (
      <section id="contact">
        <div className="app_contact">
          <div className="bar-wrapper">
            <div className="contact-bar barc1"></div>
            <div className="contact-bar barc2"></div>
            <div className="contact-bar barc3"></div>
            <div className="contact-bar barc4"></div>
            <div className="contact-bar barc5"></div>
          </div>


          <Fade bottom duration={1000}>

            <div className="contact-outer">
              <div className="contact-outer-wrap">
                <div className="top-plane"></div>

                <div className="contact-info-wrap">
                  <div className="bolt-wrapper">
                    <div className="bolt" />
                    <div className="bolt" />
                  </div>

                  <div className="contact-info-inside">
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

                    <div className="header-buttons">
                      <a target='_blank' href={github} className="header-button aim-btn">
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                      <a target='_blank' href={linkedin} className="header-button aim-btn">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                    </div>
                  </div>

                  <div className="bolt-wrapper">
                    <div className="bolt" />
                    <div className="bolt" />
                  </div>
                </div>
                <div className="bottom-plane"></div>
              </div>
            </div>


            {/* <div className="contact-info-wrap">
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

              <div className="header-buttons">
                <a target='_blank' href={github} className="header-button aim-btn">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a target='_blank' href={linkedin} className="header-button aim-btn">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>

            </div> */}

            <div className="bar-wrapper col-reverse">
              <div className="contact-bar barc1"></div>
              <div className="contact-bar barc2"></div>
              <div className="contact-bar barc3"></div>
              <div className="contact-bar barc4"></div>
              <div className="contact-bar barc5"></div>
            </div>
          </Fade>
        </div>
      </section >
    );
  }
}

export default Contact;
