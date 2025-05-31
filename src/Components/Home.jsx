import React, { Suspense } from 'react';
import Hero from '../Pages/Hero';
import HotJobs from '../Pages/HotJobs';
 const jobsPromise=fetch('http://localhost:3000/jobs/home')
 .then(res=>res.json())
const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Suspense fallback={'loading'}>
            <HotJobs jobsPromise={jobsPromise}></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;