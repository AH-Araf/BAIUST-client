import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AppliedCard = () => {
    const x = useLoaderData();
    return (
        <div className='card-container'>
            
            <div className='card-details'>
                <i><p className='card-title2'>Bangladesh Army International University of Science and Technology (BAIUST)</p></i>
                <p className='card-title2'>{x.appliedOn} Card</p>
                <div className='card-student-details'>
                    <div>
                        <img src={x.imageApplicant} alt="" />
                        <small>Name: {x.name}</small>
                    </div>
                    <div>
                        <small>ID: {x.ID}</small> <br />
                        <small>Level-{x.Level}, Term-{x.Term}</small><br />
                        <small>Phone: {x.pNumber}</small><br />
                        <small>Gender: {x.Gender}</small> <br />
                        <small>Blood group: {x.BloodGroup}</small>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AppliedCard;