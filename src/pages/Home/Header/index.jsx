import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Index() {
    const headerMenu = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "About us",
            href: "#aboutus"
        },
        {
            title: "Our projects ",
            href: "#ourprojects"
        },
        {
            title: "News",
            href: "/news/"
        },
        {
            title: "Contact",
            href: "/contact/"
        },
    ]

    return (
        <div class="navbar-area">
            <div class="techmax-responsive-nav">
                <div class="container">
                    <div class="techmax-responsive-menu">
                        <div class="logo">
                            <a href="#" class="logo-link">
                                <img src="/static/img/logo.png" class="white-logo" style={{ width: "120px" }} alt="logo" />
                                <img src="/static/img/logo-red.png" class="black-logo" style={{ width: "120px", display: "none" }}
                                    alt="logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="techmax-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="index.html">
                            <img src="/static/img/logo-red.png" class="black-logo" style={{ width: "120px", display: "none" }}
                                alt="logo" />
                            <img src="/static/img/logo.png" class="white-logo" style={{ width: "120px" }} alt="logo" />
                        </a>
                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent" style={{ display: "block" }}>
                            <ul class="navbar-nav navbar-right">
                                {
                                    headerMenu.map(
                                        (element, index) => {
                                            return <li key={index}>
                                                <NavLink
                                                    to={element.href}
                                                // onMouseOver={() => handleClick(element.title)}
                                                >
                                                    {element.title}
                                                </NavLink>
                                            </li>
                                        }
                                    )
                                }


                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
