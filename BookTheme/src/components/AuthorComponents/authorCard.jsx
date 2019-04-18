import React from 'react'
import { AuthorImage } from './authorImg';
import '../../style/author.scss'

export default function AuthorCard({name, jobDescription, info, authorImg}) {
        return (
            <div className="col-md-3 py-5">
                <div className="card text-center border-info py-5">
                    <div className="card-body">
                    <AuthorImage 
                        src={authorImg} alt="" className="img-fluid auth-img w-50 rounded-circle" />
                        <h2 className="display-5">{name}</h2>
                        <h5 className="lead">{jobDescription}</h5>
                        <p>{info}</p>
                    </div>
                </div>
            </div>
        )
    }


