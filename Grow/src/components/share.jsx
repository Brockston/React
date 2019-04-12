import React, {Component} from 'react';
import shareImg from '../Images/share-section1.jpg'
import '../style/explore.scss'
import HeadSection from './baseComponents/headSection'
import FlexComponent from './baseComponents/flexComponent'
import {Image} from './baseComponents/image'

export default class Share extends Component {
    render() {
        return(
            <div id="shareSection"  className="bg-primary explore-head-section">
                <HeadSection 
                title="Share"
                subtitle="Share with the world what you was always meant to share!" 
                /> 
                <div id="explore-section" className="bg-light text-muted py-5">
                    <div className="container">
                        <div className="row">
                            <div id="explore-section" className="bg-light text-muted py-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Image src={shareImg} alt="" className="img-fluid mb-3 rounded-circle" /> 
                                        </div>
                                        <FlexComponent
                                        id="explore-section"
                                        title="Share and Discover"
                                        text="Sharing your business across the globe will increase your revenue like you have never imagine" 
                                        subtextOne="We help share your business, so you don't have to."
                                        subtextTwo="We share your business, so you can discover new possiblities across the globe."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}