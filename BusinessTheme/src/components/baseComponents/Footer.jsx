import React, {Component} from 'react'
import { Button } from 'react-bootstrap'
import BasicModal from '../baseComponents/basicModal'

export default class Footer extends Component {
    constructor(...args) {
        super(...args);
    
        this.state = { modalShow: false };
      }
    
    
    render () {
        let modalClose = () => this.setState({ modalShow: false });
        return (
            <div>
                <footer id="main-footer" className="bg-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center py-4 text-light">
                                <h3>Grow Your Business</h3>
                                <p>Copyright &copy; {new Date().getFullYear()}</p>
                                <buttonToolbar>
                                    <Button
                                    className="bg-primary"
                                    onClick={() => this.setState({ modalShow: true })}>Contact Us</Button>
                                    <BasicModal
                                    show={this.state.modalShow}
                                    onHide={modalClose}
                                    />
                                </buttonToolbar>
                            </div>
                        </div>
                    </div>
                </footer>
               
            </div>
        )
    }
}