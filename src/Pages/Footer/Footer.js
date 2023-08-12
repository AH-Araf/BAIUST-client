import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer mt-16'>
            <div className='footer-container p-5'>
            <p><small>All copyright reserved </small>
            @ BAIUST
            </p>
            <p>
                
                <small>E-mail: bdvacancies@gmail.com</small><br />
                <small>Mobile: 01312-010261</small>
            </p>
            </div>

            <div className='p-5'>
               
                <Link to=''>Facebook</Link>
                <Link to=''>Linkedin</Link>
            </div>
        </div>
    );
};

export default Footer;