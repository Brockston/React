import React, {Component} from 'react'
import {HOME_TITLE, HOME_SUBTITLE} from '../constants/homeconstants/homeconstants'
import BookImg from '../../Images/book.png'
import '../../style/home.scss'



export default class HomeView extends Component {
    render() {
        return (
            <div id="homeSection" className="showcase">
                <div className="primary-overlay text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1 className="display-2 mt-5 pt-5">{HOME_TITLE}</h1>
                                <p className="lead">{HOME_SUBTITLE}</p>
                                <a href="#homeSection" className="btn btn-outline-secondary btn-lg text-white">Read More
                                </a>
                            </div>
                            <div className="col-lg-6">
                                <img src={BookImg} alt="" className="img-fluid d-none d-lg-block"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}