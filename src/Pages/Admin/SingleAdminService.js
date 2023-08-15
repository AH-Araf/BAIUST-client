import React, { useEffect, useState } from 'react';
import AdminSCategory from './AdminSCategory';
import './AdminService.css'
import { Link } from 'react-router-dom';

const SingleAdminService = ({x,handleDelete}) => {
    const {Title, description, Details, Fee, Semester, Deadline, types, image, adminEmail, _id, sVacancy  } = x;

    const [apply, setApply] = useState([])
    useEffect(() => {
        fetch(`https://baiust-server-side.onrender.com/serviceId?sId=${_id}`)
            .then(res => res.json())
            .then(data => setApply(data))
    }, [_id])
    
    let V = parseInt(sVacancy);

    return (
        <div className='serviceAndApplicant grid grid-cols-1 sm:grid-cols-2'>
            
            <div>
                <img src={image} alt="" />
                
                <p><span className='title2'>Service:</span> {Title}</p>
                <p><span className='title2'>Semester:</span> {Semester}</p>
                <p><span className='title2'>Fee:</span> {Fee}</p>
                <p><span className='title2'>Deadline:</span> {Deadline}</p>
                <p><span className='title2'>Total: </span>{V} </p>
                <p><span className='title2'>Applied: </span>{apply.length} </p>
                <p><span className='title2'>Vacancy: </span>{V-apply.length} </p>
                <button onClick={() => handleDelete(_id)} className='btn btn-outline btn-error mt-3 mb-3 d-button'>Delete this Post</button> <br />
                
            </div>

            
            <div className='overflow-y-auto overflow-height'>
                        {
                            apply.map(x => <AdminSCategory
                                key={x._id}
                                x={x}
                            >  
                            
                            </AdminSCategory>)
                        }
            </div>
            
        </div>
    );
};

export default SingleAdminService;