import React from 'react'
import "../Styles/Footer.scss"
import { GrFacebook } from "react-icons/gr"
import { BsPinterest, BsTwitter } from "react-icons/bs"
import { Link } from 'react-router-dom'
const Section4 = ({ tab, setTab }) => {
    return (
        <footer className='footer'>
            <div className="upper-footer">
                <h1>Ready to get started?</h1>
                <Link to="/contact" onClick={() => { setTab("/contact"); window.scrollTo(0, 0) }} style={{ color: tab === "/contact" ? "#000" : "#000" }}>contact us</Link>
            </div>
            <div className="lower-footer container">
                <div className="left-footer">
                    <div>
                        <Link to="/" className="logo" onClick={() => { setTab("/"); window.scrollTo(0, 0) }} style={{ color: tab === "/" ? "#11ddd3" : "#fff" }}>myteam</Link>
                        <ul>
                            <li><Link to="/" onClick={() => { setTab("/"); window.scrollTo(0, 0) }} style={{ color: tab === "/" ? "#11ddd3" : "#fff" }}>home</Link></li>
                            <li><Link to="/about" onClick={() => { setTab("/about"); window.scrollTo(0, 0) }} style={{ color: tab === "/about" ? "#11ddd3" : "#fff" }}>about</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p>987 Hillcrest Lane <br />
                            Irvine, CA <br />
                            California 92714 <br />
                            Call Us : 949-833-7432

                        </p>
                    </div>
                </div>
                <div className="right-footer">
                    <div className='social-icons'>
                        <a href="/" target={"blank"}><GrFacebook /></a>
                        <a href="/" target={"blank"}><BsPinterest /></a>
                        <a href="/" target={"blank"}><BsTwitter /></a>
                    </div>
                    <p>Copyright 2022. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Section4
