import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Header.scss"

const Header = ({ tab, setTab }) => {
    return (
        <header>
            <div className="left">
                <Link to="/" onClick={() => { setTab("/"); window.scrollTo(0, 0) }} className="logo" style={{ color: tab === "/" ? "#11ddd3" : "#fff" }}>myteam</Link>
                <ul>
                    <li><Link to="/" onClick={() => { setTab("/"); window.scrollTo(0, 0) }} style={{ color: tab === "/" ? "#11ddd3" : "#fff" }}>home</Link></li>
                    <li><Link to="/about" onClick={() => { setTab("/about"); window.scrollTo(0, 0) }} style={{ color: tab === "/about" ? "#11ddd3" : "#fff" }}>about</Link></li>
                </ul>
            </div>
            <div className="right">
                <Link to="/contact" onClick={() => { setTab("/contact"); window.scrollTo(0, 0) }} style={{ color: tab === "/contact" ? "#11ddd3" : "#fff" }} >contact us</Link>
            </div>
        </header>
    )
}

export default Header
