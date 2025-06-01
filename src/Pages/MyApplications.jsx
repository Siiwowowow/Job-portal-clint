import React, { Suspense } from 'react';
import ApplicationState from './ApplicationState';
import ApplicationList from './ApplicationList';
import useAuth from '../Hooks/useAuth';
import { myApplicationPromise } from '../Api/ApplicationApi';

const MyApplications = () => {
    const { user } = useAuth();
    return (
        <div>
            <ApplicationState></ApplicationState>
            <Suspense fallback={'loading application'}><ApplicationList myApplicationPromise={myApplicationPromise(user.email)}></ApplicationList></Suspense>
        </div>
    );
};

export default MyApplications;