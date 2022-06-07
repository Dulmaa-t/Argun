import React from 'react'

export default function News(props) {
    return (

<div className="col-lg-4 col-md-6">
<div className="blog-item">
    <div className="blog-image">
        <a href="/3i">
            <img src={props.image} alt="image" />
        </a>
    </div>
    <div className="single-blog-item jQueryEqualHeight3">
        <div className="blog-content">
            <h3>
                <a href={props.href}> {props.title} </a>
            </h3>
            <p>{props.text}</p>
            <div className="blog-btn"> <a href={props.href} className="default-btn blog-btn-one"> Read more
                <span></span></a>
            </div>
        </div>
    </div>
</div>
</div>

    )
}
