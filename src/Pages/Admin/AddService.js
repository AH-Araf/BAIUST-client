import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';




// Add Services
const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imageHostKey = `771e92fe5bf3b4553445891d6b44f4a1`;

    const {user} = useContext(AuthContext);
    
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/email?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [user?.email])
    // console.log(user.email);


    //
    const handleAddJob = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);
                const doctor = {
                    job: data.job, 
                    description: data.description,
                    jobDescription: data.jobDescription,
                    skill: data.skill, 
                    category: data.category,
                    deadline: data.deadline,
                    types: data.types,
                    image: imgData.data.url,
                    email: user.email,
                }

              
                fetch('http://localhost:5000/services', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    alert(`Service added successfully`);
                    
                     navigate('/')
                })
            }
        })
    }



    return (
        <div>
            <div className=''>
            <h2 className="text-4xl home-title">Add New Service</h2>
            <div className=''>
            
            <form onSubmit={handleSubmit(handleAddJob)}>
                
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Job Title</span></label>
                    <input type="text" {...register("job", {
                        required: "Job Title is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.job && <p className='text-red-500'>{errors.job.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Company Description</span></label>
                    <input type="text" {...register("description", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Job Description</span></label>
                    <input type="text" {...register("jobDescription", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.jobDescription && <p className='text-red-500'>{errors.jobDescription.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Skills required</span></label>
                    <input type="text" {...register("skill", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.skill && <p className='text-red-500'>{errors.skill.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Application Deadline</span></label>
                    <input placeholder="Ex- 10 January 2024" type="text" {...register("deadline", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.deadline && <p className='text-red-500'>{errors.deadline.message}</p>}
                </div>
                

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Job Category</span></label>
                    <select 
                    {...register('category')}
                    className="select input-bordered w-full max-w-xs">
                        {<option>Organization</option>}
                        {<option>IT-Support</option>}
                        {<option>Government</option>}
                        {<option>Semi-Government</option>}
                        {<option>NGO</option>}   
                        {<option>Private-Firm</option>}
                        {<option>Agencies</option>}  
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Job Types</span></label>
                    <select 
                    {...register('types')}
                    className="select input-bordered w-full max-w-xs">
                        {<option>Remote</option>}
                        {<option>On-site</option>}
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Company's Logo or Image</span></label>
                    <input type="file" {...register("image", {
                        required: "Image is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Add Job" type="submit" />
            </form>
        </div>
        </div>
        </div>
    );
};

export default AddService;