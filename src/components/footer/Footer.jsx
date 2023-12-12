import React from 'react'
import './footer.css'
import { BsLinkedin } from "react-icons/bs"
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Antoine Bouclier</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/antoine-bouclier-4b206112a/"><BsLinkedin/></a>
        <a href="https://github.com/Antoine-Bouclier"><FaGithub/></a>
      </div>
    </footer>
  )
}

export default Footer