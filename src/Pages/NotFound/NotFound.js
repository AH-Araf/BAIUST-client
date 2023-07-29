import React from 'react';
import './NotFound.css'
import a from '../assets/NotFoundImg/a.jpg'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='img'>
            <img src={a} alt="" />
            <p className='textNf'>Back to <Link className='nfHome' to='/'>Home</Link></p>
        </div>
    );
};

export default NotFound;