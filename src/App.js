import React, { Component } from "react";
// import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useCallback } from "react";

function App() {
  const [resumeData, setResumeData] = useState(null);
  const abtRef = useRef();

  const getResumeData = () => {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        setResumeData(data);
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  let moving = true;

  setInterval(() => {
    moving = false;
  }, 2000)

  function scrollTo(section) {
    if (section.current && !moving) {
      section.current.scrollIntoView();
      moving = true;
    }
  }

  useEffect(() => {
    getResumeData();
  }, [])

  if (resumeData !== null) {
    return (
      <div className="App" id='app' >
        <Navigation />
        <Header data={resumeData.main} id="home" />
        <div ref={abtRef}>
          <About goToSectionRef={abtRef} scrollTo={scrollTo} data={resumeData.main} skills={resumeData.resume} id="about" />
        </div>
        <Portfolio data={resumeData.portfolio} id='portfolio' />
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main} />
      </div >
    );
  }
  else {
    return null;
  }
}

export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.myRef = React.createRef();
//     this.state = { scrollTop: 0 }

//     this.state = {
//       foo: "bar",
//       resumeData: {}
//     };

//     // ReactGA.initialize("UA-110570651-1");
//     // ReactGA.pageview(window.location.pathname);
//   }

//   getResumeData() {
//     $.ajax({
//       url: "./resumeData.json",
//       dataType: "json",
//       cache: false,
//       success: function (data) {
//         this.setState({ resumeData: data });
//       }.bind(this),
//       error: function (xhr, status, err) {
//         console.log(err);
//         alert(err);
//       }
//     });
//   }

//   componentDidMount() {
//     this.getResumeData();
//   }

//   handleScroll = () => {
//     const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
//     const scrollTop = this.myRef.current.scrollTop
//     console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`)
//     this.setState({
//       scrollTop: scrollTop
//     })
//   }

//   render() {
//     return (
//       <div className="App" ref={this.myRef} onScroll={this.handleScroll}>
//         <Navigation />
//         <Header data={this.state.resumeData.main} id="home" />
//         <About data={this.state.resumeData.main} skills={this.state.resumeData.resume} id="about" />
//         <Portfolio data={this.state.resumeData.portfolio} id='portfolio' />
//         <Contact data={this.state.resumeData.main} />
//         <Footer data={this.state.resumeData.main} />
//       </div>
//     );
//   }
// }

// export default App;
