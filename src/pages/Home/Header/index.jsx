import React, { useEffect } from 'react'

export default function Index() {
  const headerMenu = [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "News",
      href: "/news/"
    },
    {
      title: "Video",
      href: "/video/"
    },
    {
      title: "Podcast",
      href: "/podcast/"
    },
  ]

  const { configs } = useConfig()

  useEffect(
    () =>
    {
      if (configs.SITE_BANNER_IMAGE)
      {
        /** Header ийн арын  зургийг сольж байна */
        document.getElementById("headerImage").style.backgroundImage = `url(${process.env.REACT_APP_SERVER_URL + configs.SITE_BANNER_IMAGE})`
      }
    },
    [configs]
  )

  return (
    <div class="navbar-area">
    <div class="techmax-responsive-nav">
        <div class="container">
            <div class="techmax-responsive-menu">
                <div class="logo">
                    <a href="#" class="logo-link">
                        <img src="/assets/img/logo.png" class="white-logo" style={{width: "120px"}} alt="logo"/>
                        <img src="/assets/img/logo-red.png" class="black-logo" style={{width: "120px", display: "none"}}
                            alt="logo"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="techmax-nav">
        <div class="container">
            <nav class="navbar navbar-expand-md navbar-light">
                <a class="navbar-brand" href="index.html">
                    <img src="assets/img/logo-red.png" class="black-logo" style={{width: "120px", display: none}}
                        alt="logo"/>
                    <img src="assets/img/logo.png" class="white-logo" style={{width:"120px"}} alt="logo"/>
                </a>
                <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent" style={{display: block}}>
                    <ul class="navbar-nav navbar-right">
                        <li class="nav-item">
                            <a href="index.html" class="page-scroll nav-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="#aboutus" class="page-scroll nav-link">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a href="#ourprojects" class="page-scroll nav-link">Our Projects</a>
                        </li>
                        <li class="nav-item">
                            <a href="newsroom.html" class="page-scroll nav-link">Newsroom</a>
                        </li>
                        <li class="nav-item">
                            <a href="contact.html" class="page-scroll nav-link">Contact</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    </div>
</div>
  )
}
