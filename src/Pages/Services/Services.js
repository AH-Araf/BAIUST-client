import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Services.css'
import SService from './SService';

const Services = () => {
    const jobs = useLoaderData();
    const [searchTerm, setSerachTerm] = useState('')

    return (
        <div>

            <div className='s-box-div'>
            <input 
            className='search-box'
            type="text" 
            placeholder='Search' 
            onChange={event =>{
                setSerachTerm(event.target.value)
                }}
                />
            </div>


            <div className='display-flex m-3 all-jobs'>
            
                {

                    jobs.filter((val)=>{
                        if(searchTerm == ""){
                            return val
                        } else if (val.Title.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                    }).map(a => <SService
                    key={a._id}
                    a={a}
                    >    
                    </SService>)
                }
                
            </div>
        </div>
    );
};

export default Services;