import { Link } from "@mui/material";
import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FaRegCopy } from "react-icons/fa6";
import "./Contact.css"
import $ from 'jquery';

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

    function copyEmail() {
      /* Copy the text inside the text field */
      navigator.clipboard.writeText(email).then(function () {
        // alert("Copied to clipboard successfully!");
        $("#email").addClass("copiedText");
        document.getElementById("email").innerText = "Copied!";

        setTimeout(function () {
          $("#email").removeClass("copiedText");
          document.getElementById("email").innerText = email;
        }, 2000).then(() => {
        });
      }, function (error) {
        // alert("ERROR:\n" + error);
      });
    }

    return (
      <section id="contact">
        {/* <div className="contact-outer1">
          <div className="contact-outer-wrap">
            <div className="top-plane"></div>
            <div className="bottom-plane"></div>
          </div>
        </div> */}


        <div className="app_contact">
          <div className="bar-wrapper">
            <div className="contact-bar barc1"></div>
            <div className="contact-bar barc2"></div>
            <div className="contact-bar barc3"></div>
            <div className="contact-bar barc4"></div>
            <div className="contact-bar barc5"></div>
          </div>
          <div className="contact-outer">
            <div className="contact-outer-wrap">
              <div className="top-plane"></div>
              <div className="bottom-plane"></div>
            </div>

            <div className="pos-abs-wrap">
              <div className="contact-info-wrap">

                <div className="contact-info">
                  <div className="bolt-wrapper">
                    <div className="bolt" style={{ margin: "auto" }} />
                  </div>

                  <h2>
                    Contact & Links
                  </h2>

                  <div className="bolt-wrapper">
                    <div className="bolt" style={{ margin: "auto" }} />
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
                  <div className="contact-info" style={{ margin: "0 20px" }}>
                    <div className="bolt-wrapper">
                      <div className="bolt" style={{ margin: "auto" }} />

                    </div>

                    <div className="contact-info-inside">
                      <h3>
                        Nathan Breen
                      </h3>
                    </div>
                    <div className="bolt-wrapper">
                      <div className="bolt" style={{ margin: "auto" }} />

                    </div>
                  </div>

                  <div className="contact-info" style={{ margin: "0 20px" }}>
                    <div className="bolt-wrapper">
                      <div className="bolt" />
                      <div className="bolt" />
                    </div>

                    <div className="email-copy">
                      <h3 id="email">
                        natbreenx@gmail.com
                      </h3>

                      <button onClick={copyEmail} className="contact-info email-copy-btn">
                        <FaRegCopy />
                      </button>
                    </div>
                    <div className="bolt-wrapper">
                      <div className="bolt" />
                      <div className="bolt" />
                    </div>
                  </div>

                  <div className="contact-info" style={{ margin: "0 20px" }}>
                    <div className="bolt-wrapper">
                      <div className="bolt" />
                      <div className="bolt" />
                    </div>

                    <div className="contact-info-inside">

                      <div className="header-buttons">
                        <div className="contact-info" style={{ margin: "0 20px" }}>
                          <a target='_blank' href={github} className="header-button aim-btn">
                            <FontAwesomeIcon icon={faGithub} />
                          </a>
                        </div>
                        <div className="contact-info" style={{ margin: "0 20px" }}>
                          <a target='_blank' href={linkedin} className="header-button aim-btn">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="bolt-wrapper">
                      <div className="bolt" />
                      <div className="bolt" />
                    </div>
                  </div>
                </div>

              </div>
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
        </div>
      </section >
    );
  }
}

export default Contact;
