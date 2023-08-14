import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import i from '../assets/Images/i.png';
import facebook from '../assets/icons/facebook.png'
import github from '../assets/icons/github.png'
import linkedin from '../assets/icons/linkedin.png'
import web from '../assets/icons/web.png'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-container1'>
                
            <div>
                
                <p>E-mail: baiust@edu.bd</p>
                <p>Mobile: 01312-010261</p>
                <p>Cumilla, Cantonment</p>
            </div>

            <div className='icons'>
                <Link target='_blank' to='https://www.facebook.com/profile.php?id=100005652766637'><img src={facebook} alt="" /></Link>
                <Link target='_blank' to='https://github.com/AH-Araf'><img src={github} alt="" /></Link>
                <Link target='_blank' to='https://www.linkedin.com/in/ah-araf/'><img src={linkedin} alt="" /></Link>
                <Link target='_blank' to='https://md-arafathossain.web.app/'><img src={web} alt="" /></Link>
                
            </div>

            <div  className='footer-details'>
                    <img src={i} alt="" />
            </div>
            </div>
            <small className='f-s'>Copyright © 2023 Bangladesh Army International University of Science and Technology</small>
        </div>
    );
};

export default Footer;

