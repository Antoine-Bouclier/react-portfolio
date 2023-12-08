import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/antoine-bouclier-4b206112a/" target='_blank' rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Antoine-Bouclier" target='_blank' rel="noopener noreferrer"><FaGithub/></a>
        <a href="https://linkedin.com" target='_blank' rel="noopener noreferrer"><FiDribbble/></a>

    </div>
  )
}

export default HeaderSocials