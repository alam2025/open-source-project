import React from 'react';

const Subscribe = () => {
      return (
            <div className=' relative bg-emerald-600 my-container rounded-md py-16 mb-24'>
                  <div className=' '>
                        <h1 className=' text-4xl font-bold text-white text-center'>Subscribe For Get Update</h1>
                        <h1 className=' text-4xl font-bold text-white text-center'>Every New Course</h1>
                        <p className=' text-center text-white my-8'>Language Learning School is a global training provider based across the UK </p>
                  </div>
                  <div className=' absolute top-0 bg-violet-700 h-[60px] w-[60px] md:h-[100px] md:w-[100px] rounded-ee-full' />
                  <div className=' absolute right-0 bottom-0 bg-violet-700 h-[60px] w-[60px] md:h-[100px] md:w-[100px]  rounded-ss-full' />

                  <div className=' flex justify-center items-center'>
                        <input className=' px-10 w-1/3 border-0  py-3 rounded-l-md' type="text" placeholder='Enter Your Email' />
                        <button className=' bg-violet-700  py-3 px-5 text-white font-semibold hover:bg-violet-900 rounded-e-md'>Subscribe</button>
                       
                  </div>


            </div>
      );
};

export default Subscribe;