import React, {Component} from 'react'
import Section from './baseComponents/sectionTitle'
import { TITLE, SUBTITLE, NAME, SUBTEXT } from './constants/aboutconstants/aboutconstants';
import Accordion from './baseComponents/accordion';

export default class AboutView extends Component {
    render() {
        return(
            <div id="aboutSection" className="bg-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Section
                                Title={TITLE}
                                subTitle={SUBTITLE}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}