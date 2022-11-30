import React from 'react'
import "../Styles/Section3.scss"
import quote from "../images/quote.svg"
import user1 from "../images/user1.jpg"
import user2 from "../images/user2.jpg"
import user3 from "../images/user3.jpg"

const Section3 = () => {
    return (
        <div className='container third-section'>
            <h1>Delivering real results for top companies. Some of our <span>success stories.</span></h1>
            <div className="testimonial-row">
                <div className="testimonial-col">
                    <img src={quote} alt="" />
                    <p>“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                    <h3>Kady Baker</h3>
                    <p className="designation">Product Manager of Bookmark</p>
                    <img src={user1} className="user-img" alt="" />
                </div>
                <div className="testimonial-col">
                    <img src={quote} alt="" />
                    <p>“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                    <h3>Aiysha Reese</h3>
                    <p className="designation">Founder of Manage</p>
                    <img src={user2} className="user-img" alt="" />
                </div>
                <div className="testimonial-col">
                    <img src={quote} alt="" />
                    <p>“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                    <h3>Arthur Clarke</h3>
                    <p className="designation">Co-founder of MyPhysio</p>
                    <img src={user3} className="user-img" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Section3
