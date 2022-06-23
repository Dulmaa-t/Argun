import React, { useEffect, useRef, useState } from 'react'

export default function Newsroom() {

    return (
        <>
            <div className="contact-btn">
                <div className="contact-btn-txt">ХОЛБОО БАРИХ</div>
            </div>
            <div className="contact-modal background-section" style={{ padding: "1rem", overflowY: "auto" }}>
                <div className="dsn-container contact-inner section-margin">
                    <div className="section-title">
                        <span className="tag-heading background-section color-heading">Холбоотой байх</span>
                        <h2 className="heading-h2">Танд юугаар туслах вэ?</h2>
                    </div>


                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-box d-flex flex-column">
                                <h4 className="title-block p-relative mb-30 text-uppercase border-section-bottom"
                                    style={{ fontSize: "20px" }}>Танд туслахдаа үргэлж таатай байх болно.
                                </h4>
                                <form id="ar-contact-form" className="form w-100" onSubmit={onSubmit}
                                    data-toggle="validator" noValidate={true}>
                                    <div className="messages"></div>
                                    <div className="input__wrap controls">
                                        <div className="form-group">
                                            <div className="entry-box">
                                                <label>Таны нэр *</label>
                                                <input id="name" onChange={(e) => handleChange(e, "name")} type="text" name="name" placeholder="Нэрээ бичнэ үү"
                                                    required="required" data-error="Нэрээ бичих шаардлагатай." />
                                            </div>
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        <div className="form-group">
                                            <div className="entry-box">
                                                <label>Таны цахим шуудан *</label>
                                                <input id="email" type="email" name="email" onChange={(e) => handleChange(e, "email")}
                                                    placeholder="Цахим шуудан хаягаа бичнэ үү" required="required"
                                                    data-error="Цахим шуудан хаяг бичих шаардлагатай." />
                                            </div>
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        <div className="form-group">
                                            <div className="entry-box">
                                                <label>Тайлбар</label>
                                                <textarea id="feedback" className="form-control" name="feedback" onChange={(e) => handleChange(e, "feedback")}
                                                    placeholder="Асуух зүйлээ бичнэ үү" required="required"
                                                    data-error="Бидэнд мессеж үлдээгээрэй."></textarea>
                                            </div>
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        <div className="text-right">
                                            <div className="image-zoom w-auto d-inline-block move-circle">
                                                <input type="submit" id='submit' value="Илгээх" className="v-light disabled" />
                                                    <div className="icon-circle"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="contact-content d-flex flex-column p-relative background-main box-padding h-100">
                                <h4 className="title-block2 p-relative mb-30 text-uppercase border-section-bottom">Холбоо барих
                                </h4>

                                <div className="content-bottom">
                                    <div className="item">
                                        <h5 className="sm-title-block mb-15">Хаяг</h5>
                                        <p>Монгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, Юнескогийн гудамж,
                                            Нарны зам, Юнион бюлдинг, А блок, 9 давхар, 902 тоот.</p>
                                    </div>

                                    <div className="item">
                                        <h5 className="sm-title-block mb-15">Цахим шуудан</h5>
                                        <a href="mailto:info@argun.mn">info@argun.mn</a>
                                    </div>

                                    <div className="item">
                                        <h5 className="sm-title-block mb-15">Утас</h5>
                                        <a href="tel:(+976) - 7733-4477">(+976) - 7733-4477</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
