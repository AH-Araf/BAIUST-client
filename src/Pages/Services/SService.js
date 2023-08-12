import React from 'react';
import { Link } from 'react-router-dom';

const SService = ({a}) => {
    return (
        <div  className='service-container'>
                        <div className='serviceImg'><img src={a.image} alt="" />  </div>   
                        <u><h4 className="title">{a.Title}</h4></u>
                        <div>
                            
                            <p><span className='title2'>Service Type:</span> <span className='title3'>{a.types}</span></p>  
                            <p><span className='title2'>Fee:</span> <span className='title3'>{a.Fee}/- Taka</span></p>  
                            <p><span className='title2'>Deadline:</span> <span className='title3'>{a.Deadline}</span></p> 
                            <p><span className='title2'>Semester:</span> <span className='title3'>{a.Semester}</span></p> 
                          
                            </div>
            
                            <Link to={`/services/${a._id}`}><button className='btn btn-outline mt-5'>View Details</button></Link>
                    </div>
    );
};

export default SService;