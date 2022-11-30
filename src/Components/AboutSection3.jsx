import React from 'react'
import "../Styles/AboutSection3.scss"
import client1 from "../images/client1.png"
import client2 from "../images/client2.png"
import client3 from "../images/client3.png"
import client4 from "../images/client4.png"
import client5 from "../images/client5.png"
const AboutSection3 = () => {
    return (
        <div className='container third-about-section'>
            <h1>Some of our clients</h1>
            <div className="client-row">
                <img src={client1} alt="" className="client-img" />
                <img src={client2} alt="" className="client-img" />
                <img src={client3} alt="" className="client-img" />
                <img src={client4} alt="" className="client-img" />
                <img src={client5} alt="" className="client-img" />
            </div>
        </div>
    )
}

export default AboutSection3
