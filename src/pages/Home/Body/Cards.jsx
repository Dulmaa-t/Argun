import React from 'react'
import Card from '../../../components/main/card'

export default function Cards() {
  const Cards = [
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },

      image: "/static/img/icons/hand.png",
      title: "Ethical business",
      text: "Our core principles and value are ethical business activity"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },

      image: "/static/img/icons/handshake.png",
      title: "Human capital",
      text: "The foundation for our future goals is the shared value created by our company's employees.&nbsp;"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },

      image: "/static/img/icons/lightbulb.png",
      title: "Smart solutions",
      text: "By implementing smart solutions, we are enriching customers' lives enhancing the immersive experience"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },

      image: "/static/img/icons/creativity.png",
      title: "Creative contents",
      text: "We are striving for better designs and quality products, as well as essential and entertaining content."
    }
  ]
  return (
    <section className="services-section pt-50 pb-20">
      <div className="container">
        <h2 className="title-decoration-lines-left-red">Our Value</h2>
        <div className="row">
          {
            Cards.map(
              (element, index) => {
                return (
                  <Card key={index} image={element.image} title={element.title} text={element.text} />
                )
              }
            )
          }
        </div>
      </div>
    </section>
  )
}
