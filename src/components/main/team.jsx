import React from 'react'

export default function Team(props) {
    return (
        <div className="owl-item cloned" style={{width: "214.333px", marginRight: "20px"}}>
            <div className="single-testimonial">
                <div className="single-team-box">
                    <div className="team-image">
                        <img src={props.image} alt="team" />
                    </div>
                    <div className="team-info">
                        <h3>{props.title}</h3>
                        <span>{props.text}</span>
                    </div>
                </div>
            </div>
        </div>

    )
}
