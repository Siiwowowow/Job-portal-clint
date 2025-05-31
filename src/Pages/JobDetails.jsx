import React from 'react';
import { Link, useLoaderData } from 'react-router';


const JobDetails = () => {
    const {title,company,company_logo,description,_id}=useLoaderData()
    
    return (
        <div>
            <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
	<img src={company_logo} alt="" className="object-cover mt-20 object-center w-full rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{title}</span>
		<h2 className="text-xl font-semibold tracking-wide">{company}</h2>
	</div>
	<p className="dark:text-gray-800">{description}</p>
    <Link to={`/jobApply/${_id}`}><div className='text-center'><button className='btn btn-primary'>apply now</button></div></Link>
</div>

        </div>
    );
};

export default JobDetails;