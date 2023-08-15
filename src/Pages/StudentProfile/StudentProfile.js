import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import SingleStudentProfile from './SingleStudentProfile';
import './StudentProfile.css'
import Header from '../Header/Header';

const StudentProfile = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imageHostKey = `771e92fe5bf3b4553445891d6b44f4a1`;

    const {user} = useContext(AuthContext);
    
    const [X, setX] = useState([])
    useEffect(() => {
        fetch(`https://baiust-server-side.onrender.com/studentProfileEmail?stuUserEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setX(data))
    }, [user?.email])


    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            fetch(`https://baiust-server-side.onrender.com/studentProfileDelete/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    alert('Deleted Successfully')
                    const remaining = X.filter(odr => odr._id !== id);
                    setX(remaining);
                }
            })
        }
    }



    const handleApply = data => {
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
                const student = {
                    sName: data.name, 
                    email: data.email,
                    PNumber: data.pNumber,
                    ID: data.ID,
                    Level: data.Level,
                    Department: data.Department,
                    Term: data.Term,
                    Nationality: data.Nationality,
                    Gender: data.Gender,
                    Religion: data.Religion,
                    BloodGroup:data.BloodGroup,
                    uImage: imgData.data.url,
                    stuUserEmail: user.email,
                }
                 fetch('https://baiust-server-side.onrender.com/studentProfile', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                    },
                    body: JSON.stringify(student)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    alert(`Student Profile Created Successfully`);
                     navigate('/')
                })
            }
        })
    }
    return (
        <div className='flex justify-center items-center'>
{
  X.length===0?
  <>
      <div className=''>
            

            
            <div className='formApply'>
            <h2 className="text-3xl home-title">Create Your Student Profile</h2>
            <div className=''>
          
            
            <form onSubmit={handleSubmit(handleApply)}>
                
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Student Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Student ID</span></label>
                    <input type="number" {...register("ID", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.ID && <p className='text-red-500'>{errors.ID.message}</p>}
                </div>

                <div className='lt'>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Level</span></label>
                    <input type="number" {...register("Level", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.Level && <p className='text-red-500'>{errors.Level.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Term</span></label>
                    <input type="number" {...register("Term", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.Term && <p className='text-red-500'>{errors.Term.message}</p>}
                </div>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Department</span></label>
                    <select 
                    {...register('Department')}
                    className="select input-bordered w-full max-w-xs">
                        {<option>CSE</option>}
                        {<option>EEE</option>}
                        {<option>CE</option>}
                        {<option>BBA</option>}
                        {<option>LLB</option>}
                        {<option>ENG</option>}
                        {<option>ICT</option>}
                        {<option>ECO</option>}
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Phone Number</span></label>
                    <input type="number" {...register("pNumber", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.pNumber && <p className='text-red-500'>{errors.pNumber.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Nationality</span></label>
                    <input type="text" {...register("Nationality", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.Nationality && <p className='text-red-500'>{errors.Nationality.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Gender</span></label>
                    <input type="text" {...register("Gender", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.Gender && <p className='text-red-500'>{errors.Gender.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Religion</span></label>
                    <input type="text" {...register("Religion", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.Religion && <p className='text-red-500'>{errors.Religion.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Blood Group</span></label>
                    <input type="text" {...register("BloodGroup", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.BloodGroup && <p className='text-red-500'>{errors.BloodGroup.message}</p>}
                </div>

                {/* Image */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Your Image</span></label>
                    <input type="file" {...register("image", {
                        required: "Image is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Create" type="submit" />
            </form>
        </div>
        </div>
        

        </div>
  </>
  :
    <>
    {
                X.map(x => <SingleStudentProfile
                    key={x._id}
                    x={x}
                    handleDelete={handleDelete}
                ></SingleStudentProfile>)
            }
                </>
            
        }  
     
</div>
    );
};

export default StudentProfile;