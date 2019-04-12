import React, {Component} from 'react'
import Logo from '../../Images/logo_business.png'
import '../../style/header.scss'
import { Link, animateScroll as scroll } from "react-scroll";

export default class Header extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
    render() {
        return (
          <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={Logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="homeSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="exploreSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="createSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Create
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="shareSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Share
              </Link>
            </li>
          </ul>
        </div>
      </nav>
        )
    }
}