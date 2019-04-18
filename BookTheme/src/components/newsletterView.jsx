import React, {Component} from 'react'
import {TextField} from './baseComponents/textfield'
import '../style/newsletter.scss'

export default class NewsletterView extends Component {
    render() {
        return(   
            <div className="bg-dark text-white py-5" id="newsletterSection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <TextField
                                type="text"
                                className="form-control form-control-lg mb-resp"
                                placeholder="Enter Name"
                            />
                        </div>
                        <div className="col-md-4">
                        <TextField
                                type="email"
                                className="form-control form-control-lg mb-resp"
                                placeholder="Enter Email"
                            />
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-lg btn-block text-white">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}