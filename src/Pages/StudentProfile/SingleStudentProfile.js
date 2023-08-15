import React from 'react';
import bg from "../assets/Images/bg.jpg"

const SingleStudentProfile = ({x,handleDelete}) => {
    const {sName, email, PNumber,ID, Level, Term, Nationality, Gender, Religion, BloodGroup, uImage, _id, Department } = x;
   
    return (
        // <div><h1>Single</h1></div> // grid grid-cols-3
        <div className='background-img'>
        
             
                <img className='student-profile-image'  src={uImage} alt="" />  <br />     
         

            <div className='text'>
                <u><h2 className='mb-4'>Student Information</h2></u>
                <p><span className='title5'>Name:</span> <span className='title4'>{sName}</span></p>
                <p><span className='title5'>ID:</span> <span className='title4'>{ID}</span></p>  
                <span>Level: {Level}</span> - <span>Term: {Term}</span>
                <p><span className='title5'>Department:</span> <span className='title4'>{Department}</span></p> 
                <p><span className='title5'>Email:</span> <span className='title4'>{email}</span></p>  
                <p><span className='title5'>Phone Number:</span> <span className='title4'>{PNumber}</span></p>  
                <p><span className='title5'>Nationality:</span> <span className='title4'>{Nationality}</span></p>  
                <p><span className='title5'>Gender:</span> <span className='title4'>{Gender}</span></p> 
                <p><span className='title5'>Relagion:</span> <span className='title4'>{Religion}</span></p> 
                <p><span className='title5'>BloodGroup:</span> <span className='title4'>{BloodGroup}</span></p> 
            </div>

            <div className='btn-delete'>
                <button onClick={() => handleDelete(_id)} className='btn btn-error  mt-5 mb-5 d-button'>Delete & Update A New Profile</button>
            </div>
            
        </div>
    );
};

export default SingleStudentProfile;