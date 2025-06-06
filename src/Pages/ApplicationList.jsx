import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';

const ApplicationList = ({ myApplicationPromise }) => {
    const applications = use(myApplicationPromise)
    console.log(applications);
    return (
        <div>
            <h3>Jobs Applied:{applications.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((appliction,index)=><JobApplicationRow appliction={appliction} key={appliction._id} index={index}></JobApplicationRow>)
                        }
                    
                        
                        
                    
                       
                        
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ApplicationList;