import React, { useState } from 'react'
import './nav.css'

export const Nav = ({ getLogo, logo}) => {

  const [isActive, setIsActive] = useState(true)

  const activateLink = () => {
      setIsActive(current => !current)
  }
  
  

  return (
    <>
        <nav className="container navbar_container">
            <div className="logo_container">
                <a href="#react"><h1 tabIndex='1' data-testid="logoTest" className="logo">{logo}</h1></a>
            </div>
            <div className="title_container">
                <h1 tabIndex='2' className="title" aria-labelledby='Interview Questions'>Interview Questions</h1>
            </div>
            <div className="navLinks">
                <a href="#react"><h3 tabIndex='3' aria-labelledby='React' data-testid="navLinkTestReact" className={isActive ? 'active' : !isActive} onClick={(event) => {getLogo(event);activateLink()}}>React</h3></a>
                |
                <a href="#django"><h3 tabIndex='4' aria-labelledby='Django' data-testid="navLinkTestDjango" className={isActive ? '' : 'active'} onClick={(event) => {getLogo(event);activateLink()}}>Django</h3></a>
            </div>
        </nav>
        <div className="mobile_title_container">
            <h1 tabIndex='2' className="mobile_title" aria-labelledby='Interview Questions'>Interview Questions</h1>
        </div>
    </>
    
  )
}
