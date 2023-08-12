import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleService = () => {
    const a = useLoaderData();
    
    
    return (
        <div className='service-container'>
        <div className='serviceImg'><img src={a.image} alt="" />  </div>   
                        <u><h4 className="title">{a.Title}</h4></u> 
        
                        <div>
                            <p><span className='title2'>Description:</span> <span className='title3'>{a.description}</span></p>
                            <p><span className='title2'>Service Type:</span> <span className='title3'>{a.types}</span></p>  
                            <p><span className='title2'>Fee:</span> <span className='title3'>{a.Fee}/- Taka</span></p>  
                            <p><span className='title2'>Deadline:</span> <span className='title3'>{a.Deadline}</span></p> 
                            <p><span className='title2'>Semester:</span> <span className='title3'>{a.Semester}</span></p> 
                            <p><span className='title2'>Details:</span> <span className='title3'>{a.Details}</span></p> 
                            </div>
                <Link to={`/apply/${a._id}`}><button className='btn btn-outline mt-10 mb-20'>Register Now</button></Link>
            
            
        </div>
    );
};

export default SingleService;