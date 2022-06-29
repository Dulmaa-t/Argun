import React from 'react'

export default function Card(props) {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="single-services-item  wow fadeInUp" >
                <div className="services-icon-img">
                    <img src={props.image} alt="" />
                </div>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>

    )
}
