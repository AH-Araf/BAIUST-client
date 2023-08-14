import React from 'react';
import sig from "../assets/Images/sig.png"

const SingleAllCards = ({x}) => {
    return (
        <div className='all-card'>
            <div>

<div className='card-details'>
                <i><p className='card-title2'>Bangladesh Army International University of Science and Technology (BAIUST)</p></i>
                <p className='card-title2'>{x.appliedOn} Card</p>
                <div className='card-student-details'>
                    <div>
                        <img src={x.imageApplicant} alt="" />
                        <small>Name: {x.name}</small> <br />
                        <small>ID: {x.ID}</small> <br />
                        <small>Level-{x.Level}, Term-{x.Term}</small><br />
                    </div>
                    <div>
                        
                        
                        <small>Phone: {x.pNumber}</small><br />
                        <small>Gender: {x.Gender}</small> <br />
                        <small>Blood group: {x.BloodGroup}</small>
                        <div className='signature'><img src={sig} alt="" /></div>
                        <small className='text-small'>Signature of the {x.appliedOn} <br /> Administration</small>
                    </div>
                </div>
            </div>
</div>
        </div>
    );
};

export default SingleAllCards;