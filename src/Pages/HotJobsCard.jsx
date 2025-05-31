import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const HotJobsCard = ({ job }) => {
    const { title, location,salaryRange,_id,requirements, description, company_logo, company } = job
    return (
        <div className="card bg-base-100  shadow-sm">
            <div className='flex items-center'>
                <figure>
                    <img
                    className='w-14'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h3 className='text-2xl font-bold'>{company}</h3>
                    <p className='text-xs flex items-center'><IoLocationOutline />{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Salary: {salaryRange.min}-{salaryRange.max}{salaryRange.currency}</p>
                <p>{description}</p>
                <div className="card-actions">
                    {
                        requirements.map((req,index)=><div className="badge badge-outline" key={index}>{req}</div>)
                    }
                    
                    
                </div>
                <Link to={`/jobs/${_id}`} className='btn btn-primary'>Job Details</Link>
            </div>
        </div>
    );
};

export default HotJobsCard;