import React, {Component} from 'react'
import { TextField } from './baseComponents/textfield';
import Logo from '../Images/logo_business.png'
import '../style/contact.scss'

export default class ContactView extends Component {
    render() {
        return(
            <div id="contactSection" className="my-5">  
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className="display-5">Contact Us</h1>
                            <p className="text-lead">Please give a message on why you are contact us</p>
                            <TextField
                             type="text"
                             className="form-control form-control-lg mb-resp my-4"
                             placeholder="Name"
                            />
                            <TextField
                             type="email"
                             className="form-control form-control-lg mb-resp my-4"
                             placeholder="Email"
                            />
                            <textarea
                             type="message"
                             className="form-control form-control-lg mb-resp my-4"
                             placeholder="Message"
                            ></textarea>
                        </div>
                        <div className="col-md-2">
                        <img
                            src={Logo}
                            className="logo mx-5"
                            alt="Logo"
                            onClick={this.scrollToTop}
                        />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}