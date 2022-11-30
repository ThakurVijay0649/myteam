import React, { useState } from 'react'
import "../Styles/Director.scss"
import { BiPlusMedical } from "react-icons/bi"
import { ImCross } from "react-icons/im"
import { BsTwitter, BsLinkedin } from "react-icons/bs"
const DirectorCard = ({
    name,
    designation,
    image,
    message
}) => {
    const [opacity, setOpacity] = useState(0);

    const changeOpacity = () => {
        if (opacity === 0) {
            setOpacity(1);
        } else {
            setOpacity(0);
        }
    }

    return (
        <div className='director-card'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p className="designation">{designation}</p>
            {
                opacity === 0 ? <BiPlusMedical onClick={changeOpacity} /> : <ImCross onClick={changeOpacity} />
            }
            <div className={`director-card info-card`} style={{ opacity: opacity }}>
                <h2>{name}</h2>
                <p className="para">{message}</p>
                <div className="social-icons">
                    <a href="/"><BsTwitter /></a>
                    <a href="/"><BsLinkedin /></a>
                </div>
            </div>
        </div>
    )
}

export default DirectorCard
