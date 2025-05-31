import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import Count from './Count';

const Hero = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.7)), url('https://img.freepik.com/free-photo/people-creating-new-project_23-2147656719.jpg?uid=R168131156&semt=ais_items_boosted&w=740')",
      }}
    >
      <div>
        <h1 className="mb-5 text-5xl font-bold">Find Your Dream Job Today!</h1>
        <p className="mb-5">
          Connecting Talent with Opportunity: Your Gateway to Career Success
        </p>
        <div className="join">
          <div className="text-base-content">
            <label className="p-2 bg-base-100 join-item">
              <input
                className="lg:pr-50"
                type="email"
                placeholder="Search Your Job"
                required
              />
            </label>
          </div>
          <button className="btn -mt-2 bg-[#309689] text-white join-item">
            <IoIosSearch className="mt-1" size={15} /> Search Job
          </button>
        </div>
        <div className="mt-8">
          <Count />
        </div>
      </div>
    </div>
  );
};

export default Hero;
