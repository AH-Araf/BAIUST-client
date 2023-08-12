import React, { useEffect, useState } from 'react';
import AdminSCategory from './AdminSCategory';
import './AdminService.css'

const SingleAdminService = ({x,handleDelete}) => {
    const {Title, description, Details, Fee, Semester, Deadline, types, image, adminEmail, _id  } = x;

    const [apply, setApply] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/serviceId?sId=${_id}`)
            .then(res => res.json())
            .then(data => setApply(data))
    }, [_id])

    return (
        <div className='serviceAndApplicant grid grid-cols-1 sm:grid-cols-2'>
            <div>
                <img src={image} alt="" />
                <p><span className='title2'>Service:</span> {Title}</p>
                <p><span className='title2'>Semester:</span> {Semester}</p>
                <p><span className='title2'>Fee:</span> {Fee}</p>
                <p><span className='title2'>Deadline:</span> {Deadline}</p>
                <button onClick={() => handleDelete(_id)} className='btn btn-outline btn-error mt-5 d-button'>Delete this Post</button>
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