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
            href: "/#aboutus/"
        },
        {
            title: "Our projects ",
            href: "/#ourprojects/"
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
        <div className="navbar-area">
            <div className="techmax-responsive-nav">
                <div className="container">
                    <div className="techmax-responsive-menu">
                        <div className="logo">
                            <a href="#" className="logo-link">
                                <img src="/static/img/logo.png" className="white-logo" style={{ width: "120px" }} alt="logo" />
                                <img src="/static/img/logo-red.png" className="black-logo" style={{ width: "120px", display: "none" }}
                                    alt="logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="techmax-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <a className="navbar-brand" href="index.html">
                            <img src="/static/img/logo-red.png" className="black-logo" style={{ width: "120px", display: "none" }}
                                alt="logo" />
                            <img src="/static/img/logo.png" className="white-logo" style={{ width: "120px" }} alt="logo" />
                        </a>
                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent" style={{ display: "block" }}>
                            <ul className="navbar-nav navbar-right">
                                {
                                    headerMenu.map(
                                        (element, index) => {
                                            return <li key={index}>
                                                <NavLink to={element.href}>
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
 /**  <li class="nav-item">
        <a href="/" class="page-scroll nav-link">Home</a>
      </li>
      <li class="nav-item">
        <a href="#aboutus" class="page-scroll nav-link">About Us</a>
      </li>
      <li class="nav-item">
        <a href="#ourprojects" class="page-scroll nav-link">Our Projects</a>
      </li>
      <li class="nav-item">
        <a href="/newsroom" class="page-scroll nav-link">Newsroom</a>
      </li>
      <li class="nav-item">
        <a href="/contact" class="page-scroll nav-link">Contact</a>
      </li> 
 */