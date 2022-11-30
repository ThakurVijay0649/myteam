import React from 'react'
import "../Styles/Section2.scss"
import { AiOutlineLine } from 'react-icons/ai';
import image1 from "../images/image1.svg"
import image2 from "../images/image2.svg"
import image3 from "../images/image3.svg"


const Section2 = () => {
    return (
        <div className='container second-section'>
            <div className="left-second-section">
                <AiOutlineLine />
                <h1>Build & manage <br /> distributed teams <br /> like no one else.
                </h1>
            </div>
            <div className="right-second-section">
                <div className="box">
                    <img src={image1} alt="" />
                    <div>
                        <h2>Experienced Individuals
                        </h2>
                        <p>Our network is made up of highly experienced professionals who are passionate about what they do.
                        </p>
                    </div>
                </div>
                <div className="box">
                    <img src={image2} alt="" />
                    <div>
                        <h2>Easy to Implement
                        </h2>
                        <p>Our processes have been refined over years of implementation meaning our teams always deliver.
                        </p>
                    </div>
                </div>
                <div className="box">
                    <img src={image3} alt="" />
                    <div>
                        <h2>Enhanced Productivity
                        </h2>
                        <p>Our customized platform with in-built analytics helps you manage your distributed teams.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2
