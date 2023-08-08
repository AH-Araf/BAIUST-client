import React from 'react';
import { Link } from 'react-router-dom';

const SService = ({a}) => {
    return (
        <div  className='service-container'>
                        <img className='company-image'  src={a.image} alt="" />  <br />    
                        <h4 className="title">Job Title: {a.job}</h4>
                        <div>
                            <p><span className='title2'>A:</span> <span className='title3'>{a.category}</span></p>  
                            <p><span className='title2'>Job Type:</span> <span className='title3'>{a.types}</span></p>  
                            <p><span className='title2'>Skills:</span> <span className='title3'>{a.skill}</span></p>  
                            <p><span className='title2'>Deadline:</span> <span className='title3'>{a.deadline}</span></p> 
                            </div>
            
                            <Link to={`/services/${a._id}`}><button className='btn btn-outline mt-5'>View Details</button></Link>
                    </div>
    );
};

export default SService;