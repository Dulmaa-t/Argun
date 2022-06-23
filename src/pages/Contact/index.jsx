import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify';

import Header from './Header'
import Footer from './Footer'

import axios from 'axios';

export default function Contact() {

    /** Формын датануудыг хадгалах state */
    const [formData, setFormData] = useState({})

    /** Формын дагуу майл явуулах */
    const onSubmit = (e) => {
        e.preventDefault()

        if (formData.name && formData.email && formData.feedback) {
            axios.post(
                process.env.REACT_APP_SERVER_URL + "/send-email/",
                {
                    name: formData.name,
                    email: formData.email,
                    feedback: formData.feedback,
                }
            ).then(
                () => {
                    toast.success("Амжилттай илгээлээ", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            )
                .catch(
                    () => {
                        toast.error("Хүсэлт илгээхэд алдаа гарлаа", {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                )
        }
    }

    /** input ийн өөрчлөлтийг state -д хадгалах */
    const handleChange = (event, field) => {
        const value = event.target.value
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    return (
        <>
            <div class="preloader" style="display: none;">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="lds-spinner">
                            <div></div><div></div><div></div>
                            <div></div><div></div><div></div>
                            <div></div><div></div><div></div>
                            <div></div><div></div><div></div>
                        </div>
                    </div>
                </div>
            </div>
          
            <Header />

                    <div class="contact-section section-padding" style="margin-top:50px">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4 col-md-12">
                                    <div class="contact-information-box-3">
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="single-contact-info-box">
                                                    <div class="contact-info">
                                                        <h6>Address:</h6>
                                                        <p>9 Floor, Union Building, Block A Sun Road 62, UNESCO Street, Sukhbaatar District, Ulaanbaatar, Mongolia</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="single-contact-info-box">
                                                    <div class="contact-info">
                                                        <h6>Phone:</h6>
                                                        <p>+976 - 7733-4477</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="single-contact-info-box">
                                                    <div class="contact-info">
                                                        <h6>Email:</h6>
                                                        <p>contact@argun.mn</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-8 col-md-12">
                                    <div class="contact-form contact-form-3 onSubmit={onSubmit} noValidate={true}">
                                        <p class="form-message"></p>
                                        <form id="contact-form" class="form" action="/contact" method="POST" novalidate="novalidate">
                                            <div class="row">
                                                <div class="col-lg-6 col-md-12">
                                                    <div class="form-group">
                                                        <input type="text" onChange={(e) => handleChange(e, "name")} name="name" id="name" class="form-control" required="" placeholder="Your Name"/> </div>
                                                </div>
                                                <div class="col-lg-6 col-md-12">
                                                    <div class="form-group">
                                                        <input type="email" onChange={(e) => handleChange(e, "email")} name="email" id="email" class="form-control" required="" placeholder="Your Email"/> </div>
                                                </div>
                                                <div class="col-lg-6 col-md-12">
                                                    <div class="form-group">
                                                        <input type="text" onChange={(e) => handleChange(e, "phone")} name="phone" id="phone" required="" class="form-control" placeholder="Your Phone"/> </div>
                                                </div>
                                                <div class="col-lg-6 col-md-12">
                                                    <div class="form-group">
                                                        <input type="text" onChange={(e) => handleChange(e, "subject")} name="subject" id="subject" class="form-control" required="" placeholder="Your Subject"/> </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12">
                                                    <div class="form-group">
                                                        <textarea name="feedback"  onChange={(e) => handleChange(e, "feedback")} class="form-control" id="feedback" cols="30" rows="6" required="" placeholder="Your Message"></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12">
                                                    <div><div class="grecaptcha-badge" data-style="bottomright" style="width: 256px; height: 60px; display: block; transition: right 0.3s ease 0s; position: fixed; bottom: 14px; right: -186px; box-shadow: gray 0px 0px 5px; border-radius: 2px; overflow: hidden;"><div class="grecaptcha-logo"><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lc9pTQfAAAAAC34vqyqTUdDzkbhHDD9w3dbDS6P&amp;co=aHR0cHM6Ly9hcmd1bi5tbjo0NDM.&amp;hl=en&amp;v=0aeEuuJmrVqDrEL39Fsg5-UJ&amp;size=invisible&amp;sa=submit&amp;cb=x1jyy41ddhmm" width="256" height="60" role="presentation" name="a-9mb4moef5vb5" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><div class="grecaptcha-error"></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div><button type="submit" class="default-btn g-recaptcha" data-sitekey="6Lc9pTQfAAAAAC34vqyqTUdDzkbhHDD9w3dbDS6P" data-callback="onSubmit" data-action="submit">Send Message <span></span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div class="map-area">
                        <div class="map-content">
                            <div class="map-canvas">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.4047709150877!2d106.92805041564101!3d47.9092049792059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x77463c74fd79b253!2sArgun%20Group!5e0!3m2!1smn!2smn!4v1648293332056!5m2!1smn!2smn" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                
                    <Footer />

                    <div class="go-top">
                        <i class="fas fa-chevron-up"></i>
                        <i class="fas fa-chevron-up"></i>
                    </div>
                </>
                )
}
