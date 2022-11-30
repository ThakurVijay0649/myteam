import React from 'react'
import "../Styles/Contact.scss"
import image1 from "../images/image1.svg"
import image2 from "../images/image2.svg"
import image3 from "../images/image3.svg"

const Contact = () => {
    return (
        <div className='container contact'>
            <div className="left-contact">
                <h1>Contact</h1>
                <h2>Ask us about</h2>
                <div className="ask-info">
                    <img src={image1} alt="" />
                    <p>The quality of talent network</p>
                </div>
                <div className="ask-info">
                    <img src={image2} alt="" />
                    <p>Usage and implementation of our software</p>
                </div>
                <div className="ask-info">
                    <img src={image3} alt="" />
                    <p>How we help drive innovation</p>
                </div>
            </div>
            <div className="right-contact">
                <form>
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <input type="text" placeholder='Company Name' />
                    <input type="text" placeholder='Title' />
                    <textarea cols="30" rows="4" placeholder='Message'></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
