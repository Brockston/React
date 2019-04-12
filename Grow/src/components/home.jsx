import React, {Component} from 'react'
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/home.scss"
    

export default class Home extends Component {
    render() {
        return(
    <div className="home-section" id="homeSection">
        <div className="dark-overlay">
        <div className="home-inner container">
            <div className="row">
                <div className="col-lg-8 d-none d-lg-block">
                    <h1 className="display-4 background-url">Build  
                        <strong> Social Profile</strong> and gain revenue 
                        <strong> profits</strong>
                    </h1>
                    <div className="d-flex">
                      <div className="p-3 align-self-start">
                          <FontAwesomeIcon className="fas fa-2x" icon={faCheck}/>
                      </div>
                      <div className="p-3 align-self-end">
                        <h5>Learn to profit with a strong guidance having complete confidence</h5>
                      </div>
                    </div>
                  <div className="d-flex">
                      <div className="p-3 align-self-start">
                      <FontAwesomeIcon className="fas fa-2x" icon={faCheck}/>
                      </div>
                      <div className="p-3 align-self-end">
                        <h5>Take your business to the next level without having to worry</h5>
                      </div>
                    </div>
                    <div className="d-flex">
                        <div className="p-3 align-self-start">
                        <FontAwesomeIcon className="fas fa-2x" icon={faCheck}/>
                        </div>
                        <div className="p-3 align-self-end">
                           <h5>Create the business that was always intended to become</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-5">
                    <div className="card text-center card-form">
                        <div className="card-body bg-primary">
                        <h3>Sign up Today!</h3>
                        <p>Please fill out this form</p>
                        <form>
                        <div className="form-group">
                                <input type="text" className="form-control form-control-lg" placeholder="username"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control form-control-lg" placeholder="email"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control form-control-lg" placeholder="password"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control form-control-lg" placeholder="confirm Password"/>
                            </div>
                            <input type="submit" value="submit" className="btn btn-outline-light btn-block  "/>
                        </form>
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

