import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleService = () => {
    const a = useLoaderData();
    const {job, description, jobDescription, skill, category, types, _id, image, deadline } = a;
    
    return (
        <div className='service-container'>
        <div >   
            <img className='company-image1'  src={image} alt="" />  <br />    
            <h4 className="title">Job Title: {job}</h4>
            <p><span className='title2'>About Company:</span> <span>{description}</span></p> 
            <p className='pt-5'><span className='title2'>Job Description:</span> <span>{jobDescription}</span></p>  
        </div> 
        
            <div className='job-single-category2'>
                <div className='job-single-category3'>
            <p><span className='title2'>Job Category:</span> <span className='title3'>{category}</span></p>  
            <p><span className='title2'>Job Type:</span> <span className='title3'>{types}</span></p>  
            <p><span className='title2'>Skills:</span> <span className='title3'>{skill}</span></p>
            <p><span className='title2'>Deadline:</span> <span className='title3'>{deadline}</span></p> 
            
             
                </div>
                <Link to={`/apply/${_id}`}><button className='btn btn-outline mt-10 mb-20'>Register Now</button></Link>
            </div>
            
        </div>
    );
};

export default SingleService;