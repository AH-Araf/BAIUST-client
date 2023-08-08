import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import FinalApply from './FinalApply';

const Apply = () => {
    const a = useLoaderData();
    const {job, description, jobDescription, skill, category, types, _id, image, email, deadline } = a;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imageHostKey = `771e92fe5bf3b4553445891d6b44f4a1`;

    //
    const {user} = useContext(AuthContext);

    const [apply, setApply] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/studentProfileEmail?stuUserEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setApply(data))
    }, [user?.email])
    
    return (
        <div className='grid grid-cols-2 email-job'>
            {/* Job Info */}
        <div className='job-single-categoryS'>   
        <img className='company-image'  src={image} alt="" />  <br />    
            <h4 className="title">Job Title: {job}</h4>
            <div>
            <p><span className='title2'>Job Category:</span> <span className='title3'>{category}</span></p>  
            <p><span className='title2'>Job Type:</span> <span className='title3'>{types}</span></p>  
            <p><span className='title2'>Skills:</span> <span className='title3'>{skill}</span></p> 
            <p><span className='title2'>Deadline:</span> <span className='title3'>{deadline}</span></p>
             
            </div>
            <p className='mt-4'><span className='title2'>About Company:</span> {description}</p>
            <p className='mt-4'><span className='title2'>About Job:</span> {jobDescription}</p>
            
        </div>  

        {/*  */}
        <div>
        {
              apply.length===0?
              <>
                  <h2 className='no-job'>First create Job-Profile, then apply.</h2>
              </>
              :
                <>

                

                {
                apply.map(x => <FinalApply
                    key={x._id}
                    x={x}
                    
                >
                    </FinalApply>)
            }
                            </>
                        
                    }  
                    </div>
            
        </div>
    );
};

export default Apply;