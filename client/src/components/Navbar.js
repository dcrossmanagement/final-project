import React from "react"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div id="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/characters">About</Link></li>
                <li><Link to="/locations">CFTC COT Data</Link></li>
                <li><Link to="/episodes">Market Monitor</Link></li>
            </ul>
        </div>
    )
}

export default Navbar