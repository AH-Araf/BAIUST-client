import React from 'react';
import { useLoaderData } from 'react-router-dom';
import sig from "../assets/Images/sig.png"

const SingleApplicant = () => {
    const x = useLoaderData();
    return (

        <div className='applicantOnAdminOne'>
            <div className='applicantOnAdminTwo'>
                <img src={x.imageApplicant} alt="" />
                <p>{x.name}</p>
                <p>ID- {x.ID}</p>
                <p>Level-{x.Level}, Term-{x.Term}</p> 
                <p>Phone: {x.pNumber}</p>
                <p>Email: {x.stuUserEmail}</p>
                <p>Nationality: Bangladeshi</p>
                <p>Gender: {x.Gender}</p>
                <p>Blood group: {x.BloodGroup}</p>

            </div>

            

            <div>
                <h1 className='a-card'>Authorized Card</h1>
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
                        <small className='text-small'>Signature of the Transport Co-ordinator</small>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SingleApplicant;