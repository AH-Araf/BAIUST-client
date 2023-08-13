import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FinalApply = ({x}) => {
    const {sName, email, PNumber, ID, Level, Term, Gender,BloodGroup, uImage, stuUserEmail} =x;
    

    const a = useLoaderData();
    const {Title, description, adminEmail, types, _id, image } = a;


    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imageHostKey = `771e92fe5bf3b4553445891d6b44f4a1`;

    const handleApply = data => {
                const addDetails = {
                            name: sName, 
                            applicantEmail: email,
                            pNumber: PNumber,
                            ID: ID,
                            Level : Level,
                            Term: Term,
                            Gender:  Gender,
                            BloodGroup: BloodGroup,
                            serviceImage: image,
                            imageApplicant: uImage,
                            adminEmail: adminEmail,
                            appliedOn: Title,
                            sTypes: types,
                            sId: _id,
                            stuUserEmail: stuUserEmail
                }

                
                fetch('http://localhost:5000/apply', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                    },
                    body: JSON.stringify(addDetails)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    alert(`Applied Successfully`);
                     navigate('/')
                })
        
    }

    return (
        <div>
            <div className='formApply'>
            <h2 className="apply-header-txt">Apply Now</h2>
            <div className=''>
           
            
            <form onSubmit={handleSubmit(handleApply)}>
           
                    <div className=''>

                    <div className=''>   
                    <img className='student-u-img'  src={uImage} alt="" />  <br /> 
             
                    <div>
                        
                <u><h2 className='mb-2 title2'>Student Information</h2></u>
                <p><span className='title2'>Name:</span> <span>{sName}</span></p>
                <p><span className='title2'>ID:</span> <span>{ID}</span></p>  
                <span> <span className='title2'>Level: </span>{Level}</span> - <span> <span className='title2'>Term: </span>{Term}</span>
                <p><span className='title2'>Email:</span> <span>{email}</span></p>  
                <p><span className='title2'>Phone Number:</span> <span>{PNumber}</span></p>  
                <p><span className='title2'>Gender:</span> <span>{Gender}</span></p> 
                <p><span className='title2'>BloodGroup:</span> <span>{BloodGroup}</span></p> 
            </div>
            
            <div>
            
            
            </div>   
        </div> 
        
            </div>
     
               
                <input className='btn  w-full btn-abc mt-4' value="Apply Now" type="submit" />
            </form>
        </div>
        </div>
           
            
        </div>
    );
};

export default FinalApply;