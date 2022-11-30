import React from 'react'
import "../Styles/AboutSection2.scss"
import DirectorCard from './DirectorCard'
import director1Image from "../images/director1.jpg"
import director2Image from "../images/director2.jpg"
import director3Image from "../images/director3.jpg"
import director4Image from "../images/director4.jpg"
import director5Image from "../images/director5.jpg"
import director6Image from "../images/director6.jpg"


const AboutSection2 = () => {
    const directors = [
        {
            id: 1,
            name: "Nikita Marks",
            designation: "Founder & CEO",
            message: "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
            image: director1Image
        },
        {
            id: 2,
            name: "Christian Duncan",
            designation: "Co-Founder & CEO",
            message: "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
            image: director2Image
        },
        {
            id: 3,
            name: "Cruz Hamer",
            designation: "Co-Founder & CTO",
            message: "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
            image: director3Image
        },
        {
            id: 4,
            name: "Drake Heaton",
            designation: "Business Development Lead",
            message: "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
            image: director4Image
        },
        {
            id: 5,
            name: "Griffin Wise",
            designation: "Lead Marketing",
            message: "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
            image: director5Image
        },
        {
            id: 6,
            name: "Aden Allan",
            designation: "Head of Talent",
            message: "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
            image: director6Image
        },
    ]
    return (
        <div className='container second-about-section'>
            <h1>Meet the directors</h1>
            <div className="director-row">
                {
                    directors.map((director) => (
                        <DirectorCard
                            key={director.id}
                            name={director.name}
                            designation={director.designation}
                            image={director.image}
                            message={director.message}
                        />

                    ))
                }
            </div>
        </div>
    )
}

export default AboutSection2
