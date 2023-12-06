import React, { Component } from "react";
import './footer.css'

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <footer className="footer-wrap">
        <div className="copyright">
          @Copyright 2023 - Nathan Breen
        </div>
      </footer>
    );
  }
}

export default Footer;
