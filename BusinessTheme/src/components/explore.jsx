import React, {Component} from 'react'
import exploreImg from '../Images/explore-section1.jpg'
import '../style/explore.scss'
import HeadSection from './baseComponents/headSection'
import FlexComponent from './baseComponents/flexComponent'
import {Image} from './baseComponents/image'

export default class Explore extends Component {
    render() {
        return(
            <div id="exploreSection" className="explore-head-section">
                <HeadSection 
                 title="Explore"
                 subtitle="Go beyond your measures and explore what your business is about to become." 
                /> 
                <div id="explore-section" className="bg-light text-muted py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                              <Image 
                                src={exploreImg} alt="" className="img-fluid mb-3 rounded-circle" /> {/* <img src={createImg} alt="" className="img-fluid mb-3 rounded-circle"/> */}
                            </div>
                            <FlexComponent
                            id="explore-section"
                            title="Explore and Connect"
                            text="Expore the possiblities that your business will turn into once you build your social Profile" 
                            subtextOne="Exploring the possiblities with us will give your business the opportunity to grow."
                            subtextTwo="Exploring with us will show how value your business truely is."
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

