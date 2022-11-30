import React from 'react'
import "../Styles/Section1.scss"
import { AiOutlineLine } from 'react-icons/ai';

const Section1 = () => {
    return (
        <div className='container first-section'>
            <div className="left-first-section">
                <h1>Find the <br />best <span>talent</span></h1>
            </div>
            <div className="right-first-section">
                <AiOutlineLine />
                <p>Finding the right people and building high performing teams can be hard. Most companies aren't tapping into the abundance of global talent. We're about to change that.</p>
            </div>

        </div>
    )
}

export default Section1
