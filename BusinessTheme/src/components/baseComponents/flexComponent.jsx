import React, {Component} from 'react'
import '../../style/explore.scss'
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class flexComponent extends Component {
    render() {
        return (
            <div className="col-md-6">
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
                <div className="d-flex">
                    <div className="p-3 align-self-start">
                        <FontAwesomeIcon className="fas fa-2x" icon={faCheck}/>
                    </div>
                    <div className="p-3 align-self-end">
                        {this.props.subtextOne}  
                    </div>
                </div>
                <div className="d-flex">
                    <div className="p-3 align-self-start">
                        <FontAwesomeIcon className="fas fa-2x" icon={faCheck}/>
                    </div>
                    <div className="p-3 align-self-end">
                        {this.props.subtextTwo}
                    </div>
                </div>
            </div> 
        )
    }
}