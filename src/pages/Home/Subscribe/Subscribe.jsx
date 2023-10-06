import React from 'react';

const Subscribe = () => {
      return (
            <div className='relative bg-blue-500 py-16 '>
                  <div>
                        <h1 className='text-4xl font-bold text-white text-center'>Subscribe to Stay Updated</h1>
                        <h1 className='text-4xl font-bold text-white text-center'>With Our Latest Projects</h1>
                        <p className='text-center text-white my-8'>Be the first to know about our new open-source projects and updates.</p>
                  </div>
                  <div className='absolute top-0 bg-indigo-700 h-[60px] w-[60px] md:h-[100px] md:w-[100px] rounded-ee-full' />
                  <div className='absolute right-0 top-0 bg-indigo-700 h-[60px] w-[60px] md:h-[100px] md:w-[100px]  rounded-bl-full' />

                  <div className='flex justify-center items-center'>
                        <input className='px-10 w-1/3 border-0 py-3 rounded-l-md' type="text" placeholder='Enter Your Email' />
                        <button className='bg-indigo-700 py-3 px-5 text-white font-semibold hover:bg-indigo-900 rounded-r-md'>Subscribe</button>
                  </div>
            </div>

      );
};

export default Subscribe;