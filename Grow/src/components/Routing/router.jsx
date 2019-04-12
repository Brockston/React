import React from "react";
import { Route } from "react-router-dom";
import Create from '../create'
import Explore  from '../explore'
import Header from "./header";
import labView from '../lapView'
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
        {/* <Route exact path="/" component={labView} />
        <Route exact path="/Home" component={Home} />
        <Route path="/Explore" component={Explore} />
        <Route exact path="/Create" component={Create} />
        <Route  path="/Share" component={Share} /> */}
        <Footer/>
      </React.Fragment>
    );
  }
}

export default ReactRouter;