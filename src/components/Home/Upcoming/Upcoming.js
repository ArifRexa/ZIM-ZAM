import React from 'react';
import { Button } from 'react-bootstrap';
import './Upcoming.css'

const Upcoming = () => {
    return (
        <div className='upcoming'>
           <div className='flex'>
           <div>
                <h2>Upcoming collection</h2>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco ommodo consequat. Duis aute irure dolor in reprehenderit.
                </p>
                <Button>See More</Button>
            </div>
           </div>
        </div>
    );
};

export default Upcoming;