import React from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';


const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = useAuth()
    console.log(user, jobId);
    const handelApply = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkInd = form.linkInd.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkInd, github, resume);
        const application = {
            jobId,
            application: user.email,
            linkInd,
            github,
            resume
        }
        axios.post('http://localhost:3000/applications', application)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Your Application is successfully submitted",
                        text: "We will contact you soon",
                        icon: "success",
                        draggable: true
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div className='mt-16'>
            <h1 className='text-3xl font-bold text-center'>Apply for this Job:<Link to={`/jobs/${jobId}`}>Job details</Link></h1>
            <form onSubmit={handelApply}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs mx-auto border p-4">


                    <label className="label">LinkInd Link</label>
                    <input name='linkInd' type="url" className="input" placeholder="LinkInd Profile Link" />

                    <label className="label">Git Hub Link</label>
                    <input name='github' type="url" className="input" placeholder="Git hub Profile link" />

                    <label className="label">Resume Link</label>
                    <input name='resume' type="url" className="input" placeholder="Resume Profile Link" />
                    <input type="submit" className='btn' value="Apply" />
                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;