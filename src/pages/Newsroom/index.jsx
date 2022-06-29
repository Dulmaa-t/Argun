import React, { useEffect, useRef, useState } from 'react'

import Header from 'pages/Home/Header'
import Footer from 'pages/Home/Footer'

export default function Newsroom() {

    return (
        <>
            <Header navLinkColor='txt-black'/>
            <section class="section-padding-equal">
                <div class="container">
                    <div class="row d-flex justify-content-center" style={{ marginTop: "200px" }}>
                        <div class="col-lg-8">
                            <div class="blog-grid"><h4 class="title">"ШИНЖЛЭХ УХААН, ТЕХНОЛОГИ, ИННОВАЦИЙГ ОРОН НУТАГТ ТҮГЭЭН ДЭЛГЭРҮҮЛЭХ АЯН" ХӨВСГӨЛ АЙМАГТ АМЖИЛТТАЙ ЗОХИОН БАЙГУУЛАГДЛАА</h4>
                                <div class="author">
                                    <div class="info">
                                        <ul class="blog-meta list-unstyled">
                                            <li>2022-04-29</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="post-thumbnail"><a href="#"><img src="/static/images/news/crop1/e2f4527de7279ce15dcbf007b59422ac.jpg" alt="" ШИНЖЛЭХ="" УХААН="" ТЕХНОЛОГИ="" ИННОВАЦИЙГ="" ОРОН="" НУТАГТ="" ТҮГЭЭН="" ДЭЛГЭРҮҮЛЭХ="" АЯН="" ХӨВСГӨЛ="" АЙМАГТ="" АМЖИЛТТАЙ="" ЗОХИОН="" БАЙГУУЛАГДЛАА="" /></a></div>
                                <p>
                                    Боловсрол, Шинжлэх Ухааны Яам, Шинжлэх Ухааны Академи, Шинжлэх Ухаан Технологийн Сангаас хамтран зохион байгуулж буй "Шинжлэх ухаан, технологи, инновацийг орон нутагт түгээн дэлгэрүүлэх аян" &nbsp нь 21 аймгийн хэмжээнд зохион байгуулагдах юм.					</p>
                                <div class="blog-btn mt-50">
                                    <a href="https://argun.mn/3i" class="default-btn blog-btn-one">Read More<span></span></a>
                                </div>
                            </div>
                            <div class="blog-grid"><h4 class="title">Маркетингийн  шинэ давлагаа эхэллээ</h4>
                                <div class="author">
                                    <div class="info">
                                        <ul class="blog-meta list-unstyled">
                                            <li>2022-04-15</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="post-thumbnail"><a href="#"><img src="/static/images/news/crop1/988fc14b92616377f5a4f0ca1d6481cc.jpg" alt="Маркетингийн  шинэ давлагаа эхэллээ" /></a></div>
                                <p>
                                    Цаасан дээр&nbsp; бичсэн энгийн хэвлэмэл тараах материал, мэндчилгээ, танилцуулга нэрийн хуудас зэргээ AR технологиор баяжуулан сонирхолтой&nbsp;контент, мэдээллүүдээр баяжуулах боломжтой.					</p>
                                <div class="blog-btn mt-50">
                                    <a href="https://argun.mn/3h" class="default-btn blog-btn-one">Read More<span></span></a>
                                </div>
                            </div>
                            <div class="blog-grid"><h4 class="title">Инновацийн шилдэг бүтээгдэхүүнээр “Боловсрол төсөл” шалгарлаа</h4>
                                <div class="author">
                                    <div class="info">
                                        <ul class="blog-meta list-unstyled">
                                            <li>2022-03-29</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="post-thumbnail"><a href="#"><img src="/static/images/news/crop1/8bd777a5eac4c4eecfb736ebe2797a58.jpg" alt="Инновацийн шилдэг бүтээгдэхүүнээр “Боловсрол төсөл” шалгарлаа" /></a></div>
                                <p>
                                    AR технологийг ашиглан хүүхэд багачуудыг шинжлэх ухаан, танин мэдэхүйд дурлуулах контентуудыг боловсролын салбарт бүтээсэн нь өрсөлдөх чадвартай, дэлхийн иргэдийг бэлтгэхэд хувь нэмрээ оруулсныг өндрөөр үнэлсэн байна.					</p>
                                <div class="blog-btn mt-50">
                                    <a href="https://argun.mn/3f" class="default-btn blog-btn-one">Read More<span></span></a>
                                </div>
                            </div>
                            <div class="blog-grid"><h4 class="title">"Аргун грүпп ХХК” болон "Монгол контент ХХК”  хамтран ажиллах санамж бичигт гарын үсэг зурлаа.</h4>
                                <div class="author">
                                    <div class="info">
                                        <ul class="blog-meta list-unstyled">
                                            <li>2022-03-29</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="post-thumbnail"><a href="#"><img src="/static/images/news/crop1/6c8b8ef96e27afac618a5f0cb66a6371.jpg" alt="" Аргун="" грүпп="" ХХК="" болон="" Монгол="" контент="" хамтран="" ажиллах="" санамж="" бичигт="" гарын="" үсэг="" зурлаа="" /></a></div>
                                <p>
                                    Хүүхэд багачуудын үзэх дуртай “Маамуу” цуврал анимейшнийг бүтээгч “Монгол контент ХХК” болон AR&amp;MR технологиор контент үйлдвэрлэгч “Аргун Грүпп ХХК” хамтран ажиллах гэрээнд гарын үсэг зурлаа.					</p>
                                <div class="blog-btn mt-50">
                                    <a href="https://argun.mn/3e" class="default-btn blog-btn-one">Read More<span></span></a>
                                </div>
                            </div>
                            <div class="blog-grid"><h4 class="title">3D эвлүүлдэг тоглоомын талаар та хэр мэдэх вэ?</h4>
                                <div class="author">
                                    <div class="info">
                                        <ul class="blog-meta list-unstyled">
                                            <li>2022-03-28</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="post-thumbnail"><a href="#"><img src="/static/images/news/crop1/2af1ae62597f9fa6799535491bc7d005.JPG" alt="3D эвлүүлдэг тоглоомын талаар та хэр мэдэх вэ?" /></a></div>
                                <p>
                                    Эвлүүлдэг тоглоом нь логик сэтгэлгээ, ой тогтоолт, анхаарал төвлөрөх, сэтгэн бодох, төсөөлөх, ажиглах, судлах, турших, өнгө дүрс ялгах зэрэг бүтээлч чадварт сургадаг.					</p>
                                <div class="blog-btn mt-50">
                                    <a href="https://argun.mn/3d" class="default-btn blog-btn-one">Read More<span></span></a>
                                </div>
                            </div>
                            <div class="blog-grid"><h4 class="title">Пипс төсөлтэй танилцацгаая</h4>
                                <div class="author">
                                    <div class="info">
                                        <ul class="blog-meta list-unstyled">
                                            <li>2022-03-28</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="post-thumbnail"><a href="#"><img src="/static/images/news/crop1/22211271b6a2a5e7ea3f503ff9db17eb.jpg" alt="Пипс төсөлтэй танилцацгаая" /></a></div>
                                <p>
                                    Пипс комикс нь шинжлэх ухааны уран зөгнөлт, танин мэдэхүйн, адал явдалт төрөлд хамаарах бөгөөд хүүхдүүдэд маш хөгжилтэй аргаар танин мэдэхүйн мэдлэг олгох зорилготой. 					</p>
                                <div class="blog-btn mt-50">
                                    <a href="https://argun.mn/3b" class="default-btn blog-btn-one">Read More<span></span></a>
                                </div>
                            </div>
                            <div class="blog-grid"><h4 class="title">Анхны виртуал монгол гэрт тавтай морил</h4>
                                <div class="author">
                                    <div class="info">
                                        <ul class="blog-meta list-unstyled">
                                            <li>2022-03-26</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="post-thumbnail"><a href="#"><img src="/static/images/news/crop1/3cef049ccd74abdc62724164d6513216.jpg" alt="Анхны виртуал монгол гэрт тавтай морил" /></a></div>
                                <p>
                                    “Аргун Групп” ХХК нь 2021 онд Монголын Олимпын Үндэсний Хороотой хамтран “Tokyo 2020” зуны Олимпын их наадамд зориулж “Mongolia House” аппликейшныг бүтээв. 					</p>
                                <div class="blog-btn mt-50">
                                    <a href="https://argun.mn/35" class="default-btn blog-btn-one">Read More<span></span></a>
                                </div>
                            </div>
                            <div class="blog-grid"><h4 class="title">AR&amp;MR технологийг боловсролын салбарт нэвтрүүлж эхэллээ</h4>
                                <div class="author">
                                    <div class="info">
                                        <ul class="blog-meta list-unstyled">
                                            <li>2022-03-26</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="post-thumbnail"><a href="#"><img src="/static/images/news/crop1/f131c3c05002bb86e1e86172f7711a8b.jpg" alt="AR&amp;MR технологийг боловсролын салбарт нэвтрүүлж эхэллээ" /></a></div>
                                <p>
                                    Монгол улсын боловсролын салбарт технологийн дэмжлэг үзүүлж сургалтын хэрэглэгдэхүүний дутагдлыг 20 хувиар бууруулах зорилт тавин ажиллаж байна.</p>
                                <div class="blog-btn mt-50">
                                    <a href="https://argun.mn/34" class="default-btn blog-btn-one">Read More<span></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}
