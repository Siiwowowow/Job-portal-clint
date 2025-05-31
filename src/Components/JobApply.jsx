import React from 'react';
import { useParams } from 'react-router';


const JobApply = () => {
    const {id:jobId}=useParams();
    
    return (
        <div className='mt-16'>
            <h1 className='text-3xl font-bold text-center'>Apply for Job ID: {jobId}</h1>
            <form>
                input
            </form>
        </div>
    );
};

export default JobApply;