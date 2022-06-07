import React from 'react'

export default function Footer() {

    return (
        <div>
            <section className="footer-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget mr-20">
                                <div className="footer-heading">
                                    <h3>About Us</h3>
                                </div>
                                <p>Please visit to the following links if you want to join and learn more about us</p>
                                <ul className="footer-social">
                                    <li>
                                        <a href="https://www.facebook.com/ARMongolia" target="_blank"> <i
                                            className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/Argun_Official?fbclid=IwAR3-hmJgu81KX4PIU4uhapS-xYZtl-70ne8lhAEHLuHaDavdIfDSVyUwy14"
                                            target="_blank"> <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/_u/argunofficial" target="_blank"> <i
                                            className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/argun-group-151446233/" target="_blank"> <i
                                            className="fab fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                                <p style={{marginTop:"40px !important"}}><strong>Argun Introduction</strong></p>

                                <div className="banner-btn">
                                    <a href="https://argun.mn/files/ARGUN-Introduction-web.pdf" target="_blank"
                                        className="btn btn-light">
                                        <i className="fa fa-download"></i> Download
                                    </a>
                                </div>

                                <div className="our-projects-btn">     // default-btn-one download-btn
                                    <a href="#0" className="services-link"><span>Download</span></a>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="footer-heading">
                                    <h3>Mongolia office</h3>
                                </div>
                                <p>902, A block, Union Building, Sun Road, Unesco street, 1st khoroo, Sukhbaatar district,
                                    Ulaanbaatar Mongolia.</p>
                                <p>
                                    <strong>Email: </strong>contact@argun.mn<br /><strong>Phone: </strong>+976 - 7733 4477
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="footer-heading">
                                    <h3>Singapore office</h3>
                                </div>
                                <p>463 Crawford Lane #02-09 Crawford Court Singapore 190463</p>
                            </div>
                            <div className="single-footer-widget mt-5">
                                <div className="footer-heading">
                                    <h3>China office</h3>
                                </div>
                                <p>1011, International Sun street 30, Jia Yuan 18, Nan Lang, Dun San Huan, Chao Yan district,
                                    Beijing China.</p>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p className="text-white text-right" style={{marginTop:"40px !important"}}>© 2022 Argun group</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
