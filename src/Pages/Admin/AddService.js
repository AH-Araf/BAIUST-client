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
                    Title: data.Title, 
                    description: data.description,
                    Details: data.Details,
                    Fee: data.Fee,
                    Semester: data.Semester,
                    Deadline: data.Deadline,
                    types: data.types,
                    image: imgData.data.url,
                    adminEmail: user.email,
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
        <div className='flex justify-center items-center'>
            <div >
            <h2 className="text-4xl home-title">Add New Service</h2>
            <div className=''>
            
            <form onSubmit={handleSubmit(handleAddJob)}>
                
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Title</span></label>
                    <input type="text" {...register("Title", {
                        required: "Title Title is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.Title && <p className='text-red-500'>{errors.Title.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Description</span></label>
                    <input type="text" {...register("description", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                </div>
                
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Service Details</span></label>
                    <input  type="text" {...register("Details", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.Details && <p className='text-red-500'>{errors.Details.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Service Fee</span></label>
                    <input  type="number" {...register("Fee", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.Fee && <p className='text-red-500'>{errors.Fee.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Semester</span></label>
                    <input placeholder="Ex: Spring- 2024" type="text" {...register("Semester", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.Semester && <p className='text-red-500'>{errors.Semester.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Deadline</span></label>
                    <input placeholder="Ex: 10 January 2024" type="text" {...register("Deadline", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.Deadline && <p className='text-red-500'>{errors.Deadline.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Service Types</span></label>
                    <select 
                    {...register('types')}
                    className="select input-bordered w-full max-w-xs">
                        {<option>Online</option>}
                        {<option>On-campus</option>}
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Company's Logo or Image</span></label>
                    <input type="file" {...register("image", {
                        required: "Image is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Add" type="submit" />
            </form>
        </div>
        </div>
        </div>
    );
};

export default AddService;