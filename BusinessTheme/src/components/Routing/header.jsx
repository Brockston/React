import React, {Component} from 'react'
import Logo from '../../Images/logo_business.png'
import '../../style/header.scss'
import { Link, animateScroll as scroll } from "react-scroll"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  scrollToTop = () => {
    scroll.scrollToTop();
  };
    render() {
        return (
          <div>
            <Navbar light expand="md" className="fixed-top bg-light">
              <NavbarBrand>
                <img
                  src={Logo}
                  className="nav-logo"
                  alt="Logo"
                  onClick={this.scrollToTop}
                />
              </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="mx-auto mr-4" navbar>
                    <NavItem className="mr-2">
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
                    </NavItem>
                    <NavItem className="mr-2">
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
                    </NavItem>
                    <NavItem className="mr-2">
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
                  </NavItem>
                  <NavItem className="mr-2">
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
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
      //     <nav className="nav" id="navbar">
      //   <div className="nav-content">
      //     <img
      //       src={Logo}
      //       className="nav-logo"
      //       alt="Logo"
      //       onClick={this.scrollToTop}
      //     />
      //     <ul className="nav-items">
      //       <li className="nav-item">
      //         <Link
      //           activeClass="active"
      //           to="homeSection"
      //           spy={true}
      //           smooth={true}
      //           offset={-70}
      //           duration={500}
      //         >
      //           Home
      //         </Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link
      //           activeClass="active"
      //           to="exploreSection"
      //           spy={true}
      //           smooth={true}
      //           offset={-70}
      //           duration={500}
      //         >
      //           Explore
      //         </Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link
      //           activeClass="active"
      //           to="createSection"
      //           spy={true}
      //           smooth={true}
      //           offset={-70}
      //           duration={500}
      //         >
      //           Create
      //         </Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link
      //           activeClass="active"
      //           to="shareSection"
      //           spy={true}
      //           smooth={true}
      //           offset={-70}
      //           duration={500}
      //         >
      //           Share
      //         </Link>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>
        )
    }
}