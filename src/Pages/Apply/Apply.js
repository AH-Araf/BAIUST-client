import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import FinalApply from './FinalApply';
import './Apply.css'

const Apply = () => {
    const a = useLoaderData();
    

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imageHostKey = `771e92fe5bf3b4553445891d6b44f4a1`;

    //
    const {user} = useContext(AuthContext);

    const [apply, setApply] = useState([])
    useEffect(() => {
        fetch(`https://baiust-server-side.onrender.com/studentProfileEmail?stuUserEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setApply(data))
    }, [user?.email])
    
    return (
        <div className='apply-con'>
            
            <div className='service-container1'>
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
            
        </div> 

        {/*  */}
        <div className='service-container2'>
        {
              apply.length===0?
              <>
                  <h2 className='no-service'>First create Student Profile, then apply.</h2>
                  <Link className='bsp' to='/studentProfile'>Click- Back to student profile</Link>
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