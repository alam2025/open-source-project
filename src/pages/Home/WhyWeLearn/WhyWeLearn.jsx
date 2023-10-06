import React from 'react';
import learn from '../../../../public/learn.json'
import Lottie from 'react-lottie';
import { MdOutlineAssignmentTurnedIn } from 'react-icons/md'
const WhyWeLearn = () => {
      console.log(learn);
      const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: learn,
            rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
            }
      };
      return (
            <div className=' px-[5%] bg-slate-50 py-16 flex flex-col md:flex-row my-28 gap-12 '>
                  <div className=' w-full md:w-1/2'>
                        <Lottie options={defaultOptions}
                              height={400}
                              width={400}
                        />        </div>
                  <div className='w-full md:w-1/2'>
                        <div className='text-center'>
                              <h1 className='text-4xl font-bold text-indigo-800'>Why Learn from Open Source Projects?</h1>
                              <p className='my-10'>
                                    Open-source projects offer valuable learning experiences. They provide a global platform for collaboration, learning, and innovation. Join the community and explore diverse projects to enhance your skills and contribute to a thriving open-source ecosystem.
                              </p>
                        </div>

                        <div className=' grid grid-cols-2  gap-y-8 text-xl text-indigo-900 font-semibold'>
                              <p className='flex items-center gap-4'><MdOutlineAssignmentTurnedIn className=' text-green-600' /> World-class</p>
                              <p className='flex items-center gap-4'> <MdOutlineAssignmentTurnedIn className=' text-green-600' /> Flexible</p>
                              <p className='flex items-center gap-4'> <MdOutlineAssignmentTurnedIn className=' text-green-600' /> Affordable</p>
                              <p className='flex items-center gap-4'><MdOutlineAssignmentTurnedIn className=' text-green-600' />  Job-relevant</p>
                        </div>

                        <button className=' btn bg-violet-600 text-white mt-8 hover:bg-violet-800'>Register Now</button>

                  </div>
            </div>
      );
};

export default WhyWeLearn;