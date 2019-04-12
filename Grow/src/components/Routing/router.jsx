import React from "react";
import Create from '../create'
import Explore  from '../explore'
import Header from "./header";
import Share from '../share'
import Home from '../home'
import Footer from '../baseComponents/Footer'
import '../../index.css'


class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Home id="homeSection"/>
        <Explore id="exploreSection"/>
        <Create 
        id="createSection"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut sunt necessitatibus minima aliquam quisquam dolorum."
        />
        <Share id="shareSection"/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default ReactRouter;