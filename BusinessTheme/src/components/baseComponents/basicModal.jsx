import React, {Component} from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class basicModal extends Component {
    render() {
        return (
     <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Contact Us
        </Modal.Title>
    </Modal.Header>
        <Modal.Body>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control"/>
            </div>   
            <div className="form-group">  
                <label htmlFor="email">Email</label>   
                <input type="text" className="form-control"/>  
            </div>  
            <div className="form-group"> 
                <label htmlFor="message">Message</label> 
                <textarea type="text" className="form-control"></textarea>
            </div> 
        </Modal.Body>
            <Modal.Footer>
                <Button>Save</Button>
                <Button className="bg-dark" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>                    
        )
    }
}