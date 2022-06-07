import React from 'react'
import Project from '../../../components/main/project'

export default function project() {
    const project = [
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/img/icons/puzzle.png",
            title: "ART C",
            subTitle:"Content management",
            text: "The project aims to develop content and games in line with the most suitable learning approaches for children.",
            href:"https://argun.mn/36"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/img/icons/puzzle.png",
            title: "ART E",
            subTitle:"Education is a power",
            text: "We are confident that the virtual school model we are developing will take the digital transition in the education sector to the next level",
            href:"https://argun.mn/37"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/img/icons/performance.png",
            title: "ART M",
            subTitle:"Meta marketing solution",
            text: "Meta marketing Platform we are developing - AR Mongolia can be used in all kinds of industries and create significant value.",
            href:"https://argun.mn/38"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/img/icons/puzzle.png",
            title: "AR NFT LAND",
            subTitle:"Evolution of reality",
            text: "Our developing ARNFT Land project assumes all the 7 main components of a meta version ecosystem and has an independent infrastructure.",
            href:"https://argun.mn/39"
        }
    ]
    return (
        <section className="services-section pt-50 pb-100" id="ourprojects">
            <div className="container">
                <h2 className="title-decoration-lines-left-red">Our Projects</h2>
                <p className="text-justify">We are developing creative and interactive content for all children and youth across
                    the globe called “ART C” a comprehensive marketing platform called “ART M”, a virtual educational
                    project “ART E” addition, Metaverse project called ARNFT LAND to increase the value of digital assets
                    and build global virtual infrastructure or digital economy.
                </p>
                <p className="text-justify"></p>
                <div className="row">
                    {
                        project.map(
                            (element, index) => {
                                return (
                                    <Project key={index} image={element.image} title={element.title} subTitle={element.subTitle} text={element.text} href={element.href} />
                                )
                            }
                        )
                    }

                </div>
            </div>
        </section>


    )
}
