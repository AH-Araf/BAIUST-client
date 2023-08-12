import React from 'react';
import { Link } from 'react-router-dom';

const AdminSCategory = ({x}) => {
    return (
        <div className='applicantOnAdmin'>
            <img src={x.imageApplicant} alt="" />
            <p>{x.name}</p>
            <small>ID- {x.ID}</small><br />
            <small>Level-{x.Level}, Term-{x.Term}</small> <br />
            <Link to={`/applicant/${x._id}`}><button className='btn-applicant'>View Applicant Full Details</button></Link>
        </div>
    );
};

export default AdminSCategory;