import React from 'react';
import { useLoaderData } from 'react-router-dom';

import SingleAllCards from './SingleAllCards';

const AllCardsPrint = () => {
    const X = useLoaderData();
    return (
        <div className='all-card-one'>
            {
                X.map(x => <SingleAllCards
                key={x._id}
                x={x}
                >    

                        </SingleAllCards>)
            }
        </div>
    );
};

export default AllCardsPrint;


