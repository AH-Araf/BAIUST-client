import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import SingleApplied from './SingleApplied';

const Applied = () => {
    const {user} = useContext(AuthContext);
    // console.log(a);
    const [A, setA] = useState([])
    useEffect(() => {
        fetch(`https://baiust-server-side.onrender.com/applyEmail?stuUserEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setA(data))
    }, [user?.email])
    return (
        <div>
        {
          A.length===0?
          <>
              <h2 className='no-service'>You have not applied any services yet.</h2>
          </>
          :
            <>
            {
                        A.map(x => <SingleApplied
                            key={x._id}
                            x={x}
                        ></SingleApplied>)
                    }
                        </>
                    
                }  
    </div>
    );
};

export default Applied;