import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import PopularInstructorsCard from './PopularInstructorsCard';
import useInstructors from '../../../hooks/useInstructors';

const FeaturedInstructors = () => {
      const [instructors]= useInstructors()
      
      
      return (
            <div className='my-container px-10 mt-24 mb-16'>
                  <div className=' text-center mb-20'>
                        <h1 className=' text-4xl font-bold text-gray-700'>Meet Our <span className=' text-blue-600'>Professional</span> Teachers</h1>
                        <p className=' text-gray-500 mt-4 text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>

                  <div className=' grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                              instructors.slice(0,6).map(instructor => <PopularInstructorsCard key={instructor._id} instructor={instructor}></PopularInstructorsCard>)
                        }
                  </div>

            </div>
      );
};

export default FeaturedInstructors;