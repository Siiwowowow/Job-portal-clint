import React from 'react';
import { Outlet } from 'react-router';

import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Roots = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;