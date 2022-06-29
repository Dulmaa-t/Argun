import React from 'react'

export default function Project(props) {
    return (

        <div class="col-lg-3 col-md-6 ">
            <div class="single-services-item2 wow fadeInLeft">
                <div class="services-icon-img gray-icon">
                    <img src={props.image} alt="" />
                </div>
                <h3>{props.title}</h3>
                <h5>{props.subTitle}</h5>
                <p>{props.text} </p>
                <div class="our-projects-btn">
                    <a href={props.href} class="services-link"><span>View Project</span></a>
                </div>
            </div>
        </div>

    )
}
