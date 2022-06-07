import React from 'react'
import Team from '../../../components/main/team'

export default function team() {
    const team = [
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/ef54a37c94645d082a8fd6ffee05e065.jpg",
            title: "Naranjargal.N",
            text: "PMO"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/7d746105e3179fbf3c7224c326aed638.jpg",
            title: "Nomin.B",
            text: "Office happiness manager"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/7b7f27f93f609dc948a4850ae16b41a8.jpg",
            title: "Munkhdalai.B",
            text: "Investment Manager"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/ff233ab7d61fcca279175f93db0e8621.jpg",
            title: "Demid-Ochir.S",
            text: "Sales of Head"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/52f10a361f7551ca077a20ffc255ca2a.jpg",
            title: "Janchivjav.B",
            text: "Lead AR developer, ART E"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/ccb00ba2ade123e181edd99d0e890119.jpg",
            title: "Amarzaya.N",
            text: "Redactor, Copywriter"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/a65b09fb6ca7ee8b1d4395a0b86e3cef.jpg",
            title: "Barkhas.B",
            text: "Sales Rockstar"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/f1b0fcd2e960e396d5e189cf7c192993.jpg",
            title: "Jamiyannyam.A",
            text: "Content producer"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/ab94d0ec0bd0a3dfd309f8841eee0736.jpg",
            title: "Nomin.G",
            text: "Graphic Designer"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/6587f0edda7cfd79bf2f232464698c34.jpg",
            title: "Davaatseren.L",
            text: "Conversation architect"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/6817f495c7cb80a21be41c296a884745.jpg",
            title: "Budsuren.B",
            text: "Sales Rockstar"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/9e6200cb153eba01fb9f540328ebcccc.jpg",
            title: "Enkhjin.O",
            text: "Brand strategist"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/4e7db5d7e5b800adadef79a1b6722bc0.jpg",
            title: "Batzorig.N",
            text: "Founder &amp; CEO"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/56ba06ba384e8895aa3ab849205630fd.jpg",
            title: "Davaa.E",
            text: "COO"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/3c730c17b039ec9e31d4e9fd9bb7a289.jpg",
            title: "Enkhbayar.G",
            text: "Head of AR"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/461fc1d86bf597d9471a15fe29d03da8.jpg",
            title: "Dolgormaa.Ts",
            text: "Chief of Co-operation"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/80a29df3391c8f6dc7c0333a1ce0c59c.jpg",
            title: "Maibayar.Ts",
            text: "Head of Design"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/d5169d6c238de484306f14e58984fefa.jpg",
            title: "Nominzul.O",
            text: "Chief of Content development"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/d80ca346e0ae8f6b559c7cf1c8d47432.jpg",
            title: "Munkhnaran.E",
            text: "Concept artist"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/44964fc1e87cdd1ccaa3ff3d4147c9cd.jpg",
            title: "Uuganbileg.U",
            text: "Digital artist"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/478e0be5739314cbe4ed33a3cd0b7b80.jpg",
            title: "Batbayar.J",
            text: "Lead AR developer, ART M"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/24d8a6b7d0b2b1199e902cf631b1f5ea.jpg",
            title: "Tserendulam.D",
            text: "Project manager of ARNFT"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/03a9bf3a5489b3a4c7f13f7125d2a221.jpg",
            title: "Shinebayar.G",
            text: "PMetaverse artist"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/ef54a37c94645d082a8fd6ffee05e065.jpg",
            title: "Naranjargal.N",
            text: "PMO"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/ef54a37c94645d082a8fd6ffee05e065.jpg",
            title: "Naranjargal.N",
            text: "PMO"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/7d746105e3179fbf3c7224c326aed638.jpg",
            title: "Nomin.B",
            text: "Office happiness manager"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/7d746105e3179fbf3c7224c326aed638.jpg",
            title: "Munkhdalai.B",
            text: "Investment Manager"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },

            image: "/static/images/team/ff233ab7d61fcca279175f93db0e8621.jpg",
            title: " Demid-Ochir.S",
            text: "Sales of Head"
        }
    ]
    return (
        <section className="team-area pt-50 pb-20">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="title-decoration-lines-left-red">Our Teams</h2>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="testimonial-slider owl-carousel owl-theme owl-loaded owl-drag">
                            <div className="owl-stage-outer">
                                <div className="owl-stage"
                                    style={{transform: "translate3d(-3046px, 0px, 0px)", transition: "all 1s ease 0s", width: "11951px"}}>
                                    {
                                        team.map(
                                            (element, index) => {
                                                return (
                                                    <Team key={index} image={element.image} title={element.title} text={element.text} />
                                                )
                                            }
                                        )
                                    }
                                </div>
                            </div>
                            <div className="owl-nav"><button type="button" role="presentation" className="owl-prev"><i
                                className="fa fa-chevron-left"></i></button><button type="button" role="presentation"
                                    className="owl-next"><i className="fa fa-chevron-right"></i></button></div>
                            <div className="owl-dots disabled"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
