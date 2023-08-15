import React from 'react';
import { Link } from 'react-router-dom';

const SingleApplied = ({x}) => {
    const {Department, name,applicantEmail,pNumber,ID,Level,Term,Gender,BloodGroup,serviceImage,imageApplicant,appliedOn,sTypes,stuUserEmail, _id} = x;
    return (
        <div className='applied-container'>
            <div className='applied-single'>
                <img src={serviceImage} alt="" />
                <p><span className='title2'>Service Title:</span> {appliedOn}</p> 
                <p><span className='title2'>Service Type:</span> {sTypes}</p> 
                <Link to={`/appliedCard/${x._id}`}><button className='btn btn-outline mt-5'>View Card</button></Link>
            </div>

            <div className='applied-single1'>
            <img src={imageApplicant} alt="" />
                <p>{name}</p>
                <p>{ID}</p>
                <p>{Department}</p>
                <p>Level-{Level}, Term-{Term}</p>
                <p>{pNumber}</p> 
                <p>{Gender}</p>
            </div>
        </div>
    );
};

export default SingleApplied;