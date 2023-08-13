import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import SingleAdminService from './SingleAdminService';

const Admin = () => {
    const {user, logOut} = useContext(AuthContext);
    const [A, setA] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/serviceAdminEmail?adminEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setA(data))
    }, [user?.email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            fetch(`http://localhost:5000/serviceDelete/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    alert('Deleted Successfully')
                    const remaining = A.filter(odr => odr._id !== id);
                    setA(remaining);
                }
            })
        }
    }
    return (
        <div>
            {
              A.length===0?
              <>
                  <h2 className='no-service'>You have not posted any service yet</h2>
              </>
              :
                <>
                {
                            A.map(x => <SingleAdminService
                                key={x._id}
                                x={x}
                                handleDelete={handleDelete}
                            ></SingleAdminService>)
                        }
                            </>
                        
                    }  
                    <div className=''><Link to='/allCards' className='b-btn btn btn-outline mt-5 d-button'>Get All Students Cards For Print</Link></div>
        </div>
    );
};

export default Admin;