import React, {Component} from 'react'
import '../style/explore.scss'
import FlexComponent from './baseComponents/flexComponent'
import HeadSection from './baseComponents/headSection'
import {Image} from './baseComponents/image'
import createImg from '../Images/create-section1.jpg'

export default class Create extends Component {
    render() {
        return(
            <div id="createSection" className="bg-primary explore-head-section">
                <HeadSection 
                className="bg-primary"
                title="Create"
                subtitle="Become Creative in your business to explode your desire" 
                /> 
            <div className="py-5 explore-head-section">
                <div className="container">
                    <div className="row">
                        <FlexComponent
                        id="explore-section"
                        title="Create and Explore"
                        text="Create the future that the business has been waiting for." 
                        subtextOne="We help build your business, so you can have more time with your family"
                        subtextTwo="We help build your social profile, so you don't have to."
                        />
                    <div className="col-md-6">
                        <Image 
                        src={createImg} alt="" className="img-fluid mb-3 rounded-circle" />{/* <img src={createImg} alt="" className="img-fluid mb-3 rounded-circle"/> */}
                      </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }   
}

