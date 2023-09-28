import { useState, useEffect } from 'react';
import "./Navigation.css";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { blue } from '@mui/material/colors';

function Navigation() {
    const [activeSection, setActiveSection] = useState('home');
    const [toggleMenu, setToggleMenu] = useState(false);
    const [solidBg, setSolidBg] = useState(false);

    useEffect(() => {
        const hrefPos = window.location.hash.substring(1);

        if (hrefPos === 'contact') {
            setActiveSection('contact');
        } else if (hrefPos === 'portfolio') {
            setActiveSection('portfolio');
        } else if (hrefPos === 'about') {
            setActiveSection('about');
        } else if (hrefPos === 'home') {
            setActiveSection('home');
        }


        const handleScroll = () => {
            const home = document.querySelector('#home');
            const about = document.querySelector('#about');
            const works = document.querySelector('#portfolio');
            const contact = document.querySelector('#contact');

            // console.log(resume.getBoundingClientRect().top - (window.innerHeight / 2) < 0);
            // console.log(about.getBoundingClientRect().top - (window.innerHeight / 2) < 0);
            // console.log(home.getBoundingClientRect().top - (window.innerHeight / 2) < 0);

            if (contact.getBoundingClientRect().top < window.innerHeight) {
                setActiveSection('contact');
            } else if (works.getBoundingClientRect().top - (window.innerHeight / 2) < 0) {
                setActiveSection('portfolio');
            } else if (about.getBoundingClientRect().top - (window.innerHeight / 2) < 0) {
                setActiveSection('about');
            } else if (home.getBoundingClientRect().top <= window.innerHeight) {
                setActiveSection('home');
            }

            // Works good
            // if (contact.getBoundingClientRect().top < window.innerHeight) {
            //     setActiveSection('contact');
            // } else if (works.getBoundingClientRect().top < window.innerHeight) {
            //     setActiveSection('portfolio');
            // } else if (resume.getBoundingClientRect().top < window.innerHeight) {
            //     setActiveSection('resume');
            // } else if (about.getBoundingClientRect().top < window.innerHeight) {
            //     setActiveSection('about');
            // } else if (home.getBoundingClientRect().top <= window.innerHeight) {
            //     setActiveSection('home');
            // }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="navbar-top">
            <ul className='solidbg'>
                <li className={activeSection === 'home' ? 'active' : ''}><a href="#home">Home</a></li>
                <li className={activeSection === 'about' ? 'active' : ''}><a href="#about">About</a></li>
                {/* <li className={activeSection === 'resume' ? 'active' : ''}><a href="#resume">Resume</a></li> */}
                <li className={activeSection === 'portfolio' ? 'active' : ''}><a href="#portfolio">Portfolio</a></li>
                <li className={activeSection === 'contact' ? 'active' : ''}><a href="#contact">Contact</a></li>
            </ul>


            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu className="hamburger" visibility={toggleMenu ? 'hidden' : 'visible'} color="#ffec00" fontSize={40} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay slide-bottom">
                        <AiOutlineClose fontSize={34} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        <div className="app__navbar-smallscreen_links">
                            <li className={activeSection === 'home' ? 'active' : ''} onClick={() => setToggleMenu(false)}><a href="#home">Home</a></li>
                            <li className={activeSection === 'about' ? 'active' : ''} onClick={() => setToggleMenu(false)}><a href="#about">About</a></li>
                            {/* <li className={activeSection === 'resume' ? 'active' : ''} onClick={() => setToggleMenu(false)}><a href="#resume">Resume</a></li> */}
                            <li className={activeSection === 'portfolio' ? 'active' : ''} onClick={() => setToggleMenu(false)}><a href="#portfolio">Portfolio</a></li>
                            <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => setToggleMenu(false)}><a href="#contact">Contact</a></li>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navigation;