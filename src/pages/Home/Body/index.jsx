
import Team from './Team'
import Cards from './Cards'
import Project from './Project'
import News from './News'
import Footer from '../Footer'

export default function Index() {

  return (
    <div className="page-title-area" id="redslider">
      <div class="d-table">
        <div class="d-table-cell">
        <div class="container">
          <div class="page-title-content text-left">
            <h2 class="text-uppercase wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>Building the worldwide</h2>
            <h2 class="text-uppercase wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}><b>VIRTUAL INFRASTRUCTURE</b></h2>
            <ul class="wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>
              <li><a href="https://argun.mn/ourprojects"><span>Learn More<span></span></span></a></li>
            </ul>
          </div>
          </div>
        </div>
      </div>
      <section className="services-section pt-50 pb-20" id="aboutus">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-decoration-lines-left-red">About us</h2>
              <p className="text-justify">Argun Group is an industry-leading technology company with many years of
                experience in developing smart solutions to support business operations based on immersive
                AR&amp;MR technology and providing content management services.
              </p>
              <p className="text-justify">We take advantage of technology to deliver the most effective, creative, and
                intriguing content to our customers while offering our partners opportunities to express
                themselves, increase their value and accelerate the development of the industry, and provide
                them with all the resources to implement it.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Cards />
      <section className="services-section pt-50 pb-20">
        <div className="container">
          <h2 className="title-decoration-lines-left-red">Numbers</h2>
          <div className="row">
            <div className="col-md-6 ">
              <div className="row">
                <div className="col-md-6 col-sm-12 text-center">
                  <a className="textImg" href="#">
                    <div id="particles-js"><canvas className="particles-js-canvas-el" width="720" height="720"
                      style={{width:"100%", height: "100%" }}></canvas></div><span
                        className="counter counter-number" style={{textAlign:"center"}}>9</span>
                  </a>
                </div>
                <div className="col-md-6">
                  <div className="year-exp mt-4 wow fadeInUp">
                    <h3 className="text-uppercase">Years of experience</h3>
                    <p className="text-gray-500"></p>
                    <p className="text-justify"><span style={{color: "#3f3f3f"}}><span
                      id="redactor-inline-breakpoint"></span>We have created&nbsp;</span></p>
                    <p><span style={{color: "#3f3f3f"}}>the best AR&nbsp;ecosystem&nbsp;</span></p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="number-lists">
                <h2 data-text="Application"><span className="counter-number">92</span></h2>
                <h2 data-text="Products"><span className="counter-number">30</span></h2>
                <h2 data-text="AR experience"><span className="counter-number">1200</span><span>+</span></h2>
                <h2 data-text="Employees"><span className="counter-number">47</span></h2>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className="services-section pt-50 pb-20" id="aboutus">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-decoration-lines-left-red">Eco system</h2>
              <p className="text-justify">Our AR ecosystem is the most unique and advanced.</p>
              <p className="text-justify">We are creating SUPERB AR content based on our 9 years of experience, and we
                will be one of the top players in this AR Market.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-50 pb-20">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="ecosystem">
                <ul className="eco-left-menu">
                  <li>
                    <div className="our-projects-btn-left">
                      <a href="#0" className="eco-link" data-id="1"><span>3D Design team</span></a>
                    </div>
                  </li>
                  <li>
                    <div className="our-projects-btn-left">
                      <a href="#0" className="eco-link" data-id="2"><span>Digital Art team</span></a>
                    </div>
                  </li>
                  <li>
                    <div className="our-projects-btn-left">
                      <a href="#0" className="eco-link" data-id="3"><span>Graphic Design team</span></a>
                    </div>
                  </li>
                  <li>
                    <div className="our-projects-btn-left">
                      <a href="#0" className="eco-link" data-id="4"><span>Product development</span></a>
                    </div>
                  </li>
                </ul>
                <ul className="eco-right-menu">
                  <li>
                    <div className="our-projects-btn-right">
                      <a href="#0" className="eco-link" data-id="5"><span>Multimedia team</span></a>
                    </div>
                  </li>
                  <li>
                    <div className="our-projects-btn-right">
                      <a href="#0" className="eco-link" data-id="6"><span>Filter Development team</span></a>
                    </div>
                  </li>
                  <li>
                    <div className="our-projects-btn-right">
                      <a href="#0" className="eco-link" data-id="7"><span>AR Developer team</span></a>
                    </div>
                  </li>
                  <li>
                    <div className="our-projects-btn-right">
                      <a href="#0" className="eco-link" data-id="8"><span>IT Engineer team</span></a>
                    </div>
                  </li>
                </ul>
                <svg className="ecosystem-progress" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -38 179.52 180" style={{marginTop: "-120px", marginBottom:"-200px"}}>
                  <title>eco system</title>
                  <circle id="circle1" cx="89.76" cy="37.47" r="38" fill="#bdbfc1"
                    data-svg-origin="89.76000213623047 37.470001220703125"
                    transform="matrix(1.1598,0,0,1.15976,-14.34365,-5.98621)"
                    style={{transformOrigin: "0px 0px", opacity: "0.4201"}}></circle>
                  <circle id="circle2" cx="89.76" cy="37.47" r="38" fill="#bdbfc1"
                    data-svg-origin="89.76000213623047 37.470001220703125"
                    transform="matrix(0.6721,0,0,0.672093,29.4323,12.28668)"
                    style={{transformOrigin:"0px 0px",opacity: "0.664"}}></circle>
                  <circle id="circle3" cx="89.76" cy="37.47" r="38" fill="#bdbfc1"
                    data-svg-origin="89.76000213623047 37.470001220703125"
                    transform="matrix(0.0733,0,0,0.073315,83.18059,34.72289)"
                    style={{transformOrigin: "0px 0px", opacity: "0.9633"}}></circle>
                  <circle id="circle4" cx="89.76" cy="37.47" r="38" fill="#bdbfc1"
                    data-svg-origin="89.76000213623047 37.470001220703125"
                    transform="matrix(1.9561,0,0,1.956093,-85.81954,-35.82481)"
                    style={{transformOrigin: "0px 0px", opacity:" 0.022"}}></circle>
                  <circle id="circle5" cx="89.76" cy="37.47" r="38" fill="#bdbfc1"
                    data-svg-origin="89.76000213623047 37.470001220703125"
                    transform="matrix(1.8018,0,0,1.80176,-71.96957,-30.04195)"
                    style={{transformOrigin: "0px 0px", opacity: "0.0991"}}></circle>
                  <circle id="circle6" cx="89.76" cy="37.47" r="38" fill="#bdbfc1"
                    data-svg-origin="89.76000213623047 37.470001220703125"
                    transform="matrix(1.5363,0,0,1.536316,-48.13829,-20.09576)"
                    style={{transformOrigin: "0px 0px", opacity: "0.2318"}}></circle>
                  <circle className="circle" cx="89.76" cy="37.47" r="27.88"></circle>
                  <circle className="circle" cx="89.76" cy="37.47" r="27.88"></circle>
                  <polyline className="path2" points="178.81 25.22 157.14 25.22 155.41 23.48 121.93 23.48">
                  </polyline>
                  <polyline className="path2 line6" points="178.81 25.22 157.14 25.22 155.41 23.48 121.93 23.48">
                  </polyline>
                  <path className="cls-3 dot6" d="M387.45,267.64a.71.71,0,1,0-.71-.71A.71.71,0,0,0,387.45,267.64Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <polyline className="path2" points="178.81 49.72 157.14 49.72 155.41 51.46 121.93 51.46">
                  </polyline>
                  <polyline className="path2 line7" points="178.81 49.72 157.14 49.72 155.41 51.46 121.93 51.46">
                  </polyline>
                  <path className="cls-3 dot7" d="M387.45,292.15a.72.72,0,1,0-.71-.72A.71.71,0,0,0,387.45,292.15Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <polyline className="path2" points="178.81 0.71 157.14 0.71 152.57 5.28 102.31 5.28"></polyline>
                  <polyline className="path2 line5" points="178.81 0.71 157.14 0.71 152.57 5.28 102.31 5.28">
                  </polyline>
                  <path className="cls-3 dot5" d="M387.45,243.14a.72.72,0,1,0-.71-.71A.71.71,0,0,0,387.45,243.14Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <polyline className="path2" points="178.81 74.23 157.14 74.23 152.57 69.66 102.31 69.66">
                  </polyline>
                  <polyline className="path2 line8" points="178.81 74.23 157.14 74.23 152.57 69.66 102.31 69.66">
                  </polyline>
                  <path className="cls-3 dot8" d="M387.45,316.65a.71.71,0,1,0-.71-.71A.71.71,0,0,0,387.45,316.65Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <polyline className="path2" points="0.71 25.22 22.38 25.22 24.11 23.48 57.59 23.48"></polyline>
                  <polyline className="path2 line2" points="0.71 25.22 22.38 25.22 24.11 23.48 57.59 23.48">
                  </polyline>
                  <path className="cls-3 dot2" d="M209.36,267.64a.71.71,0,1,0,0-1.42.71.71,0,1,0,0,1.42Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <polyline className="path2" points="0.71 49.72 22.38 49.72 24.11 51.46 57.59 51.46"></polyline>
                  <polyline className="path2 line3" points="0.71 49.72 22.38 49.72 24.11 51.46 57.59 51.46">
                  </polyline>
                  <path className="cls-3 dot3" d="M209.36,292.15a.72.72,0,1,0-.72-.72A.72.72,0,0,0,209.36,292.15Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <polyline className="path2" points="0.71 0.71 22.38 0.71 26.95 5.28 77.21 5.28"></polyline>
                  <polyline className="path2 line1" points="0.71 0.71 22.38 0.71 26.95 5.28 77.21 5.28">
                  </polyline>
                  <path className="cls-3 dot1" d="M209.36,243.14a.72.72,0,0,0,0-1.43.72.72,0,1,0,0,1.43Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <polyline className="path2" points="0.71 74.23 22.38 74.23 26.95 69.66 77.21 69.66"></polyline>
                  <polyline className="path2 line4" points="0.71 74.23 22.38 74.23 26.95 69.66 77.21 69.66">
                  </polyline>
                  <path className="cls-3 dot4" d="M209.36,316.65a.71.71,0,1,0,0-1.42.71.71,0,1,0,0,1.42Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <path className="cls-4" d="M287.33,311.3a33.79,33.79,0,0,1-14.42-9.66"
                    transform="translate(-208.64 -241.71)"></path>
                  <path className="cls-3 arc4"
                    d="M294.4,314.48A35.32,35.32,0,0,1,276.27,307l2.14-2.14a32.43,32.43,0,0,0,16,6.63Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <polyline className="cls-5" points="64.19 61.42 64.26 59.93 65.75 60"></polyline>
                  <path className="cls-4" d="M309.47,247.06a33.77,33.77,0,0,1,14.43,9.66"
                    transform="translate(-208.64 -241.71)"></path>
                  <path className="cls-3 arc5"
                    d="M302.4,243.88a35.41,35.41,0,0,1,18.13,7.52l-2.13,2.13a32.36,32.36,0,0,0-16-6.62Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <polyline className="cls-5" points="115.32 13.52 115.26 15.01 113.77 14.94"></polyline>
                  <path className="cls-4" d="M330.52,290.25a33.77,33.77,0,0,1-9.66,14.43"
                    transform="translate(-208.64 -241.71)"></path>
                  <path className="cls-3 arc7"
                    d="M333.7,283.18a35.32,35.32,0,0,1-7.51,18.13l-2.14-2.13a32.37,32.37,0,0,0,6.63-16Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <polyline className="cls-5" points="113.71 63.03 112.22 62.97 112.29 61.48"></polyline>
                  <path className="cls-4 l2" d="M266.28,268.11a33.89,33.89,0,0,1,9.66-14.43"
                    transform="translate(-208.64 -241.71)"></path>
                  <path className="cls-3 arc2"
                    d="M263.11,275.18a35.32,35.32,0,0,1,7.51-18.13l2.13,2.14a32.32,32.32,0,0,0-6.62,16Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <polyline className="cls-5 l2" points="65.81 11.9 67.3 11.97 67.23 13.46"></polyline>
                  <path className="cls-3 arc8"
                    d="M320.53,307a35.31,35.31,0,0,1-18.13,7.51v-3a32.38,32.38,0,0,0,16-6.63Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <path className="cls-4" d="M283.52,248.64a33.83,33.83,0,0,1,17-3.37"
                    transform="translate(-208.64 -241.71)"></path>
                  <path className="cls-4 l1" d="M283.52,248.64a33.83,33.83,0,0,1,17-3.37"
                    transform="translate(-208.64 -241.71)"></path>
                  <path className="cls-3 arc1"
                    d="M276.27,251.39a35.45,35.45,0,0,1,18.13-7.5v3a32.37,32.37,0,0,0-16,6.62Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <polyline className="cls-5" points="90.9 2.46 91.91 3.56 90.81 4.56"></polyline>
                  <polyline className="cls-5 l1" points="90.9 2.46 91.91 3.56 90.81 4.56"></polyline>
                  <path className="cls-4" d="M328.94,264.3a33.82,33.82,0,0,1,3.38,17"
                    transform="translate(-208.64 -241.71)"></path>
                  <path className="cls-3 arc6"
                    d="M326.19,257.05a35.34,35.34,0,0,1,7.51,18.13h-3a32.3,32.3,0,0,0-6.63-16Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <polyline className="cls-5" points="124.77 38.61 123.67 39.62 122.67 38.52"></polyline>
                  <path className="cls-4" d="M267.86,294.07a34,34,0,0,1-3.37-17"
                    transform="translate(-208.64 -241.71)"></path>
                  <path className="cls-3 arc3"
                    d="M270.62,301.31a35.31,35.31,0,0,1-7.51-18.13h3a32.41,32.41,0,0,0,6.62,16Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <polyline className="cls-5" points="54.75 36.33 55.85 35.32 56.85 36.42"></polyline>
                  <line className="cls-6" x1="89.76" y1="69.21" x2="89.76" y2="73.85"></line>
                  <polygon className="cls-7"
                    points="72.17 41.06 72.17 41.95 68.45 41.95 68.45 37.16 72.08 37.16 72.08 38.05 69.56 38.05 69.56 39.09 71.78 39.09 71.78 39.95 69.56 39.95 69.56 41.06 72.17 41.06">
                  </polygon>
                  <path className="cls-7"
                    d="M284,283.75a2.81,2.81,0,0,1-1.33-.32,2.46,2.46,0,0,1-.93-.88,2.43,2.43,0,0,1-.34-1.28,2.4,2.4,0,0,1,.34-1.28,2.46,2.46,0,0,1,.93-.88,2.81,2.81,0,0,1,1.33-.32,2.75,2.75,0,0,1,1.13.22,2.33,2.33,0,0,1,.85.63l-.72.66a1.5,1.5,0,0,0-1.2-.56,1.63,1.63,0,0,0-.8.19,1.36,1.36,0,0,0-.54.55,1.66,1.66,0,0,0,0,1.58,1.36,1.36,0,0,0,.54.55,1.63,1.63,0,0,0,.8.19,1.53,1.53,0,0,0,1.2-.56l.72.65a2.33,2.33,0,0,1-.85.64A2.78,2.78,0,0,1,284,283.75Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <path className="cls-7"
                    d="M288.92,283.75a2.79,2.79,0,0,1-1.34-.32,2.45,2.45,0,0,1,0-4.32,3,3,0,0,1,2.68,0,2.44,2.44,0,0,1,.94.89,2.54,2.54,0,0,1,0,2.54,2.44,2.44,0,0,1-.94.89,2.79,2.79,0,0,1-1.34.32Zm0-.95a1.54,1.54,0,0,0,.77-.19,1.36,1.36,0,0,0,.54-.55,1.74,1.74,0,0,0,0-1.58,1.36,1.36,0,0,0-.54-.55,1.66,1.66,0,0,0-1.54,0,1.4,1.4,0,0,0-.53.55,1.66,1.66,0,0,0,0,1.58,1.4,1.4,0,0,0,.53.55A1.54,1.54,0,0,0,288.92,282.8Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <path className="cls-7"
                    d="M294,283.75a3.66,3.66,0,0,1-1.1-.16,2.46,2.46,0,0,1-.86-.4l.38-.83a2.62,2.62,0,0,0,.73.36,2.85,2.85,0,0,0,.85.14,1.39,1.39,0,0,0,.7-.14.44.44,0,0,0,.23-.37.37.37,0,0,0-.14-.29,1.2,1.2,0,0,0-.34-.18,4.75,4.75,0,0,0-.56-.15,7.45,7.45,0,0,1-.9-.26,1.56,1.56,0,0,1-.6-.42,1.12,1.12,0,0,1-.25-.77,1.23,1.23,0,0,1,.23-.75A1.44,1.44,0,0,1,293,279a2.79,2.79,0,0,1,1.11-.2,3.89,3.89,0,0,1,.9.11,2.49,2.49,0,0,1,.76.32l-.34.84a2.67,2.67,0,0,0-1.33-.38,1.26,1.26,0,0,0-.69.15.47.47,0,0,0-.22.4.4.4,0,0,0,.26.37,4.23,4.23,0,0,0,.78.23,7.45,7.45,0,0,1,.9.26,1.65,1.65,0,0,1,.6.41,1.09,1.09,0,0,1,.25.76,1.3,1.3,0,0,1-.23.75,1.47,1.47,0,0,1-.69.54A2.82,2.82,0,0,1,294,283.75Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <polygon className="cls-7"
                    points="90.3 40.26 90.3 41.95 89.19 41.95 89.19 40.24 87.34 37.16 88.52 37.16 89.8 39.29 91.08 37.16 92.17 37.16 90.3 40.26">
                  </polygon>
                  <path className="cls-7"
                    d="M302.75,283.75a3.66,3.66,0,0,1-1.1-.16,2.4,2.4,0,0,1-.85-.4l.37-.83a2.55,2.55,0,0,0,.74.36,2.75,2.75,0,0,0,.85.14,1.37,1.37,0,0,0,.69-.14.42.42,0,0,0,.23-.37.36.36,0,0,0-.13-.29,1.27,1.27,0,0,0-.35-.18,3.87,3.87,0,0,0-.56-.15,8,8,0,0,1-.9-.26,1.56,1.56,0,0,1-.6-.42,1.17,1.17,0,0,1-.25-.77,1.3,1.3,0,0,1,.23-.75,1.49,1.49,0,0,1,.68-.54,2.82,2.82,0,0,1,1.11-.2,3.82,3.82,0,0,1,.9.11,2.55,2.55,0,0,1,.77.32l-.34.84a2.72,2.72,0,0,0-1.33-.38,1.26,1.26,0,0,0-.69.15.45.45,0,0,0-.22.4.39.39,0,0,0,.25.37,4.38,4.38,0,0,0,.79.23,7.79,7.79,0,0,1,.89.26,1.5,1.5,0,0,1,.6.41,1.09,1.09,0,0,1,.25.76,1.23,1.23,0,0,1-.23.75,1.49,1.49,0,0,1-.68.54A2.88,2.88,0,0,1,302.75,283.75Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <polygon className="cls-7"
                    points="97.82 38.06 96.29 38.06 96.29 37.16 100.47 37.16 100.47 38.06 98.93 38.06 98.93 41.95 97.82 41.95 97.82 38.06">
                  </polygon>
                  <polygon className="cls-7"
                    points="104.78 41.06 104.78 41.95 101.06 41.95 101.06 37.16 104.69 37.16 104.69 38.05 102.17 38.05 102.17 39.09 104.39 39.09 104.39 39.95 102.17 39.95 102.17 41.06 104.78 41.06">
                  </polygon>
                  <polygon className="cls-7"
                    points="110.02 41.95 110.02 39.08 108.61 41.45 108.11 41.45 106.7 39.14 106.7 41.95 105.66 41.95 105.66 37.16 106.58 37.16 108.37 40.14 110.14 37.16 111.05 37.16 111.06 41.95 110.02 41.95">
                  </polygon>
                  <path className="cls-8"
                    d="M279.31,276.79h-1.39l-.27.65h-.54l1.26-2.79h.5l1.26,2.79h-.54l-.28-.65Zm-.17-.4-.52-1.22-.53,1.22Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <path className="cls-8"
                    d="M282.31,277.44l-.57-.82H281v.81h-.51v-2.79h1.14a1.54,1.54,0,0,1,.63.12.94.94,0,0,1,.56.87,1,1,0,0,1-.16.55.88.88,0,0,1-.44.33l.64.92Zm0-1.8a.5.5,0,0,0-.17-.41.84.84,0,0,0-.51-.14H281v1.11h.61a.84.84,0,0,0,.51-.14A.51.51,0,0,0,282.29,275.64Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <path className="cls-8"
                    d="M286.58,277.48l-.35-.34a1.36,1.36,0,0,1-.94.34,1.27,1.27,0,0,1-.52-.1.88.88,0,0,1-.36-.26.61.61,0,0,1-.13-.39.72.72,0,0,1,.15-.45,1.74,1.74,0,0,1,.49-.39,1.24,1.24,0,0,1-.24-.31.82.82,0,0,1-.07-.3.61.61,0,0,1,.22-.48.92.92,0,0,1,.59-.18.81.81,0,0,1,.54.17.53.53,0,0,1,.2.44.59.59,0,0,1-.13.39,1.45,1.45,0,0,1-.43.33l.6.58a2.37,2.37,0,0,0,.15-.47l.4.13a1.75,1.75,0,0,1-.25.64l.35.33-.27.32Zm-1.16-2.5a.37.37,0,0,0-.26.08.26.26,0,0,0-.09.21.31.31,0,0,0,.05.18.91.91,0,0,0,.2.23,1.32,1.32,0,0,0,.33-.22.33.33,0,0,0,.09-.22.26.26,0,0,0-.08-.19.36.36,0,0,0-.24-.07Zm-.09,2.09a.91.91,0,0,0,.6-.21l-.73-.7a1.11,1.11,0,0,0-.34.25.45.45,0,0,0-.1.27.33.33,0,0,0,.16.28A.64.64,0,0,0,285.33,277.07Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <polygon className="cls-8"
                    points="82.31 35.73 82.3 33.88 81.39 35.41 81.16 35.41 80.24 33.91 80.24 35.73 79.75 35.73 79.75 32.94 80.18 32.94 81.28 34.79 82.37 32.94 82.79 32.94 82.8 35.73 82.31 35.73">
                  </polygon>
                  <path className="cls-8"
                    d="M294,277.44l-.56-.82h-.74v.81h-.52v-2.79h1.15a1.54,1.54,0,0,1,.63.12.94.94,0,0,1,.41.35,1,1,0,0,1,.14.52,1,1,0,0,1-.15.55.88.88,0,0,1-.44.33l.64.92Zm0-1.8a.53.53,0,0,0-.17-.41.85.85,0,0,0-.52-.14h-.6v1.11h.6a.85.85,0,0,0,.52-.14A.54.54,0,0,0,294,275.64Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <path className="cls-8"
                    d="M297.06,277.48a2.11,2.11,0,0,1-.62-.09,1.35,1.35,0,0,1-.48-.25l.18-.4a1.4,1.4,0,0,0,.42.22,1.47,1.47,0,0,0,.5.09.9.9,0,0,0,.46-.1.33.33,0,0,0,.16-.26.25.25,0,0,0-.09-.2.66.66,0,0,0-.22-.12l-.35-.1a3.86,3.86,0,0,1-.52-.15.88.88,0,0,1-.34-.24.65.65,0,0,1-.14-.43.68.68,0,0,1,.13-.42.8.8,0,0,1,.37-.3,1.46,1.46,0,0,1,.62-.12,2.08,2.08,0,0,1,.5.07,1.3,1.3,0,0,1,.43.18l-.16.4a1.88,1.88,0,0,0-.39-.16,1.31,1.31,0,0,0-.38-.06.82.82,0,0,0-.46.11.32.32,0,0,0-.15.27.25.25,0,0,0,.09.2.66.66,0,0,0,.22.12l.35.1a3,3,0,0,1,.51.14.84.84,0,0,1,.34.24.61.61,0,0,1,.15.43.8.8,0,0,1-.13.42.91.91,0,0,1-.38.3A1.64,1.64,0,0,1,297.06,277.48Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <path className="cls-8"
                    d="M300,277.48a1.52,1.52,0,0,1-.77-.19,1.33,1.33,0,0,1-.54-.51,1.4,1.4,0,0,1-.19-.73,1.43,1.43,0,0,1,.19-.74,1.33,1.33,0,0,1,.54-.51,1.63,1.63,0,0,1,.77-.19,1.66,1.66,0,0,1,.77.19,1.37,1.37,0,0,1,.53.51,1.45,1.45,0,0,1,0,1.47,1.37,1.37,0,0,1-.53.51,1.54,1.54,0,0,1-.77.19Zm0-.46a1.06,1.06,0,0,0,.5-.12.91.91,0,0,0,.35-.35,1,1,0,0,0,0-1,1,1,0,0,0-.35-.35,1.06,1.06,0,0,0-.5-.12,1,1,0,0,0-.5.12.91.91,0,0,0-.35.35,1,1,0,0,0-.13.51,1,1,0,0,0,.13.5.84.84,0,0,0,.35.35A1,1,0,0,0,300,277Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <polygon className="cls-8"
                    points="93.4 32.94 93.92 32.94 93.92 35.29 95.38 35.29 95.38 35.73 93.4 35.73 93.4 32.94">
                  </polygon>
                  <path className="cls-8"
                    d="M305.59,277.48a1.19,1.19,0,0,1-.9-.33,1.23,1.23,0,0,1-.33-.93v-1.57h.52v1.56c0,.54.24.81.71.81s.7-.27.7-.81v-1.56h.51v1.57a1.22,1.22,0,0,1-.32.93A1.18,1.18,0,0,1,305.59,277.48Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <polygon className="cls-8"
                    points="99.39 33.38 98.47 33.38 98.47 32.94 100.83 32.94 100.83 33.38 99.91 33.38 99.91 35.73 99.39 35.73 99.39 33.38">
                  </polygon>
                  <rect className="cls-9" x="101.22" y="32.94" width="0.52" height="2.78"></rect>
                  <path className="cls-8"
                    d="M312.44,277.48a1.52,1.52,0,0,1-.77-.19,1.33,1.33,0,0,1-.54-.51,1.4,1.4,0,0,1-.19-.73,1.43,1.43,0,0,1,.19-.74,1.33,1.33,0,0,1,.54-.51,1.63,1.63,0,0,1,.77-.19,1.66,1.66,0,0,1,.77.19,1.37,1.37,0,0,1,.53.51,1.45,1.45,0,0,1,0,1.47,1.37,1.37,0,0,1-.53.51,1.54,1.54,0,0,1-.77.19Zm0-.46a1.06,1.06,0,0,0,.5-.12.91.91,0,0,0,.35-.35,1,1,0,0,0,0-1,1,1,0,0,0-.35-.35,1.06,1.06,0,0,0-.5-.12,1,1,0,0,0-.5.12.91.91,0,0,0-.35.35,1,1,0,0,0-.13.51,1,1,0,0,0,.13.5.84.84,0,0,0,.35.35A1,1,0,0,0,312.44,277Z"
                    transform="translate(-208.64 -241.71)"></path>
                  <polygon className="cls-8"
                    points="108.31 32.94 108.31 35.73 107.89 35.73 106.35 33.84 106.35 35.73 105.84 35.73 105.84 32.94 106.27 32.94 107.8 34.83 107.8 32.94 108.31 32.94">
                  </polygon>
                  <path className="cls-8"
                    d="M318.57,277.48a2.11,2.11,0,0,1-.62-.09,1.35,1.35,0,0,1-.48-.25l.18-.4a1.19,1.19,0,0,0,.42.22,1.47,1.47,0,0,0,.5.09.9.9,0,0,0,.46-.1.33.33,0,0,0,.16-.26.25.25,0,0,0-.09-.2.66.66,0,0,0-.22-.12l-.35-.1a3.86,3.86,0,0,1-.52-.15.88.88,0,0,1-.34-.24.65.65,0,0,1-.14-.43.68.68,0,0,1,.13-.42.8.8,0,0,1,.37-.3,1.46,1.46,0,0,1,.62-.12,2.08,2.08,0,0,1,.5.07,1.3,1.3,0,0,1,.43.18l-.16.4a1.88,1.88,0,0,0-.39-.16,1.31,1.31,0,0,0-.38-.06.8.8,0,0,0-.46.11.32.32,0,0,0-.15.27.25.25,0,0,0,.09.2.66.66,0,0,0,.22.12l.35.1a3,3,0,0,1,.51.14.84.84,0,0,1,.34.24.6.6,0,0,1,.14.43.79.79,0,0,1-.12.42.91.91,0,0,1-.38.3A1.64,1.64,0,0,1,318.57,277.48Z"
                    transform="translate(-208.64 -241.71)"></path>
                </svg>
                <div className="circle-ripple circle-ripple--animation"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Project />
      <section className="hire-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="hire-content wow fadeInLeft" >
                <h2 className="title-decoration-lines-left-red">Scope of business activity</h2>
                <ul className="fa-ul timeline3">
                  <li><span className="fa-li"><i className="fa  fa-1x"></i></span>One team</li>
                  <li><span className="fa-li"><i className="fa  fa-1x"></i></span>One development</li>
                  <li><span className="fa-li"><i className="fa  fa-1x"></i></span>One database</li>
                  <li><span className="fa-li"><i className="fa  fa-1x"></i></span>Smart solutionv</li>
                  <li><span className="fa-li"><i className="fa  fa-1x"></i></span>Multiple income model</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="wow fadeInRight zoom text-center" >
                <img src="/static/images/chart.png" className="imgFluid wow rotateIn"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-50 pb-20">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hire-content wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                <h2 className="title-decoration-lines-left-red">Our History</h2>
                <ul className="timeline">
                  <li data-year="2014" data-text="Developed by AR"></li>
                  <li data-year="2018" data-text="ART E project"></li>
                  <li data-year="2020" data-text="ART C project"></li>
                  <li data-year="2021" data-text="AR Mongolia platform"></li>
                  <li data-year="2022" data-text="AR NFT project"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>
      <Team />
      <News />
      <Footer />
    </div>

  )
}
