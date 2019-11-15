import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'

export default function Nav(){
    return (
        <nav>
            <h3 className="headline">Conflict Styles</h3>
            <ul className="nav-links">

                <Link to="/quiz">
                <li className = "nav-list">Quiz</li>
                </Link>

                <Link to="/styles">
                <li className ="nav-list">Styles</li>
                </Link>

                <Link to="/">
                <li className ="nav-list">Home</li>
                </Link>


            </ul>
        </nav>
    )
}