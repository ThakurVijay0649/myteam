import React from 'react'
import { AiOutlineLine } from 'react-icons/ai'
import "../Styles/AboutSection1.scss"

const AboutSection1 = () => {
    return (
        <div className='container first-about-section'>
            <div className="left-first-about-section">
                <h1>About</h1>
            </div>
            <div className="right-first-about-section">
                <AiOutlineLine />
                <p>We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
            </div>

        </div>
    )
}

export default AboutSection1
