import React from 'react'
import '../../style/subscribe.scss'

export default function Card({dark, subTitle, Title, TitleText}) {
        return(
            <div className="col-md-3">
                <div className={"card text-center border-info mb-resp section" + (dark ? " section-dark" : "")}>
                    <div className="card-body">
                        <h3 className={"text-info" + (TitleText ? "text-light" : "")}>{Title}</h3>
                        <p className="text-lead">{subTitle}</p>
                    </div>
                </div>
            </div>
        )
    }
