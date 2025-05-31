import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobSite = () => {
    const datas=useLoaderData()
    return (
        <div className='mt-20'>
            <h1 className='text-4xl text-center font-bold'>All Jobs</h1>
            <div className='grid grid-cols-3 gap-4  p-10'>
                {
                    datas.map(data=><div className="card bg-base-100  shadow-xl hover:shadow-2xl transition-shadow duration-300">
                        <figure>
                          <img
                            src={data.company_logo}
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">
                            {data.title}
                            <div className="badge badge-secondary">NEW</div>
                          </h2>
                          <p>{data.description}</p>
                          <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                          </div>
                        </div>
                        <Link to={`/jobs/${data._id}`} className='btn btn-primary'>Apply Now</Link>
                      </div>)
                }
                
            </div>
             
        </div>
    );
};

export default JobSite;