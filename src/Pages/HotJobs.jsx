import React, { use } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = ({jobsPromise}) => {
    const jobs=use(jobsPromise)
    return (
        <div>
            <h1 className='text-center font-bold text-3xl p-10'>Recent jobs available</h1>
            <div className='grid gird grid-cols-1 lg:grid-cols-3  gap-4'>
            {
                jobs.map(job=><HotJobsCard key={job._id} job={job}></HotJobsCard>)
            }
        </div>
        </div>
    );
};

export default HotJobs;