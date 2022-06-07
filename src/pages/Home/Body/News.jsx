import React from 'react'
import News from '../../../components/main/news'

export default function news() {
    const articles = [
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/news/crop1/e2f4527de7279ce15dcbf007b59422ac.jpg",
            title: "ШИНЖЛЭХ УХААН, ТЕХНОЛОГИ, ИННОВАЦИЙГ ОРОН НУТАГТ ТҮГЭЭН ДЭЛГЭРҮҮЛЭХ А…",
            text: "Боловсрол, Шинжлэх Ухааны Яам, Шинжлэх Ухааны Академи, Шинжлэх Ухаан Т…",
            href: "/3i"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/news/crop1/988fc14b92616377f5a4f0ca1d6481cc.jpg",
            title: " Маркетингийн шинэ давлагаа эхэллээ",
            text: "Цаасан дээр бичсэн энгийн хэвлэмэл тараах материал, мэндчилгээ, танил…",
            href: "/3h"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/news/crop1/8bd777a5eac4c4eecfb736ebe2797a58.jpg",
            title: " Инновацийн шилдэг бүтээгдэхүүнээр “Боловсрол төсөл” шалгарлаа",
            text: "AR технологийг ашиглан хүүхэд багачуудыг шинжлэх ухаан, танин мэдэхүйд…",
            href: "/3f"
        }
    ]
    return (
        <section className="blog-section pt-50 pb-100" id="newsroom">
            <div className="container">
                <h2 className="title-decoration-lines-left-red" style={{marginBottom:"40px"}}>News</h2>
                <div className="row">
                    {
                        News.map(
                            (element, index) => {
                                return (
                                    <News key={index} image={element.image} title={element.title} text={element.text} href={element.href} />
                                )
                            }
                        )
                    }
                </div>
            </div>
        </section>
    )
}
