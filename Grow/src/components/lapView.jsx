import React, {Component} from 'react'
import Home from './home'
import Explore from './explore'
import Create from './create'
import Share from './share'
import Header from "../components/Routing/header";
import Footer from '../components/baseComponents/Footer'

export default class lapView extends Component {
    render() {
        return (
             <div>
                 <Header/>
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
            </div>
        )
    }
}