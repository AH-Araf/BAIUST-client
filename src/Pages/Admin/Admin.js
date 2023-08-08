import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <Link to='/addservice' className='btn btn-outline btn-accent'>Add Service</Link>
        </div>
    );
};

export default Admin;