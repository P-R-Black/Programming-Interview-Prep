import React, { useState } from 'react'
import './nav.css'

export const Nav = ({ getLogo, logo, refreshPage }) => {

    const [isActive, setIsActive] = useState(true)
    const [navBarOpen, setNavBarOpen] = useState(false);

    const activateLink = () => {
        setIsActive(current => !current)
    }


    return (
        <>
            <nav className="container navbar_container">
                <div className="logo_container">
                    <a href="#react"><h1 tabIndex='1' data-testid="logoTest" className="logo" onClick={refreshPage}>{logo}</h1></a>
                </div>
                <div className="title_container">
                    <h1 tabIndex='2' className="title" aria-labelledby='Interview Questions'>Interview Questions</h1>
                </div>
                <ul className="navLinks">
                    <li><a href="#react"><h3 tabIndex='3' aria-labelledby='React' data-testid="navLinkTestReact" className={isActive ? 'active' : !isActive} onClick={(event) => { getLogo(event); activateLink() }}>React</h3></a></li>
                    |
                    <li><a href="#django"><h3 tabIndex='4' aria-labelledby='Django' data-testid="navLinkTestDjango" className={isActive ? '' : 'active'} onClick={(event) => { getLogo(event); activateLink() }}>Django</h3></a></li>
                    <button className="navbar_link_dropdown mobile_display_hide" onClick={() => setNavBarOpen(prev => !prev)}>▾</button>
                </ul>
                <ul className={`nav_dropdown ${navBarOpen ? "show" : ""}`}>
                    <li onClick={() => setNavBarOpen(prev => !prev)}><a href="#html"><h3 tabIndex='5' aria-labelledby='HTML' data-testid="navLinkTestHTML" className={isActive ? '' : 'active'} onClick={(event) => { getLogo(event); activateLink() }}>HTML</h3></a></li>
                    <li onClick={() => setNavBarOpen(prev => !prev)}><a href="#css"><h3 tabIndex='6' aria-labelledby='CSS' data-testid="navLinkTestCSS" className={isActive ? '' : 'active'} onClick={(event) => { getLogo(event); activateLink() }}>CSS</h3></a></li>
                    <li onClick={() => setNavBarOpen(prev => !prev)}><a href="#javascript"><h3 tabIndex='7' aria-labelledby='JavaScript' data-testid="navLinkTestJavaScript" className={isActive ? '' : 'active'} onClick={(event) => { getLogo(event); activateLink() }}>JavaScript</h3></a></li>
                    <li onClick={() => setNavBarOpen(prev => !prev)}><a href="#full-stack"><h3 tabIndex='8' aria-labelledby='FullStack' data-testid="navLinkTestFullStack" className={isActive ? '' : 'active'} onClick={(event) => { getLogo(event); activateLink() }}>{"Full Stack"}</h3></a></li>
                </ul>
            </nav>
            <div className="mobile_title_container">
                <h1 tabIndex='2' className="mobile_title" aria-labelledby='Interview Questions'>Interview Questions</h1>
            </div>
        </>

    )
}
