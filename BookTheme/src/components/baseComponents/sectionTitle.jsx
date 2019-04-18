import React from 'react' 

export default function Section({Title, subTitle}) {
    return (
        <div className="text-center">
            <h3 className="display-2 text-info">{Title}</h3>
            <p className="text-lead">{subTitle}</p>
        </div>
    )
}