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
            <Navbar color="transparent" light expand="md">
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
                  <Nav className="ml-auto mr-4" navbar>
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
                        to="newsletterSection"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                        Newsletter
                      </Link>
                    </NavItem>
                    <NavItem className="mr-2">
                      <Link
                        activeClass="active"
                        to="authorSection"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                      Authors
                    </Link>
                  </NavItem>
                  <NavItem className="mr-2">
                        <Link
                      activeClass="active"
                      to="contactSection"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Contact
                    </Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        )
    }
}