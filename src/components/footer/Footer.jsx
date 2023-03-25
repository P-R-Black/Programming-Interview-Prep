import React from 'react'
import './footer.css';

import { BsGithub } from 'react-icons/bs';
import {  FaPython} from 'react-icons/fa';
import {  SiDjango } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { DiJavascript1 } from 'react-icons/di';
import { DiReact } from 'react-icons/di';



export const Footer = () => {
  const d = new Date()
  let year = d.getFullYear()

console.log(year)

  return (
    <footer className='container footer_container'>
        <div className="designed_by">
            <h3 className="designer">Paul Ramone Designs</h3>
            <h4 className="prorgrams"><span><FaPython/></span><span><SiDjango/></span><span><AiFillHtml5/></span><span><DiCss3/></span><span><DiJavascript1/></span><span><DiReact/></span></h4>
        </div>
        <div className="github">
            <a href="https://github.com/P-R-Black/Programming-Interview-Prep" target="_blank"><h3 className="github_logo"><BsGithub/><span>Github</span></h3></a>
        </div>
        <div className="website_rights">
            <h3 className="rights">&copy; {year} All Rights Reserved</h3>
        </div>
    </footer>
    
  )
}
