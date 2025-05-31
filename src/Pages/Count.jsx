import React from 'react';
import CountUp from 'react-countup';
import { IoIosPeople } from 'react-icons/io';
import { PiBuildingApartmentBold } from 'react-icons/pi';
import { TbShoppingBagSearch } from 'react-icons/tb';

const Count = () => {
    return (
        <div className='flex justify-center gap-5 mt-20'>
            <div className='flex justify-center items-center gap-2'>
                <div className='bg-[#309689] p-3 rounded-full'>
                <TbShoppingBagSearch size={15}/>
                </div>
                <div className='text-white font-bold'>
                <CountUp end={5800} start={500}></CountUp>
                    <p className='text-xs'>Jobs</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <div className='bg-[#309689] p-3 rounded-full'>
                <IoIosPeople size={15} />
                </div>
                <div className='text-white font-bold'>
                <CountUp end={1800} start={500}></CountUp>
                    <p className='text-xs'>Candidates</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <div className='bg-[#309689] p-3 rounded-full'>
                <PiBuildingApartmentBold  size={15}/>

                </div>
                <div className='text-white font-bold'>
                    <CountUp end={10800} start={500}>18,400</CountUp>
                    <p className='text-xs'>Companies</p>
                </div>
            </div>
        </div>
    );
};

export default Count;