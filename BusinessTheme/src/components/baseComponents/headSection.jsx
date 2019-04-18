import React, {Component} from 'react'

export default class HeadSection extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col text-center py-5">
                    <h1 className="display-4">{this.props.title}</h1>
                    <h2 className="lead p-2">{this.props.subtitle}</h2> 
                    <a href="#" className="btn btn-outline-light">Find Out More</a>
                </div>
            </div>
        </div>
        )
    }
}