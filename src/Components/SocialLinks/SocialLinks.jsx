import React from 'react'
import './SocialLinks.css'
// import { Link } from 'react-router-dom'
import facebook_icon from '../Assets/facebook_circle_logo.png'
import github_icon from '../Assets/github_icon.png'
import google_icon from '../Assets/google_icon.png'
import dropdown from '../Assets/dropdown_circle_icon.png'

const Social_icons = (props) => {
    return (
        <div className='social-links'>
                <img onClick={props.loginWithGoogle} src={google_icon} className='google_icon' alt="" />
                <img onClick={props.loginWithFacebook}src={facebook_icon} className='facebook_icon' alt="" />
                <img src={github_icon} className='github_icon' alt="" />
                <img src={dropdown} className='dropdown' alt="" />
        </div>
    )
}

export default Social_icons
