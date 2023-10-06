import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import PopularInstructorsCard from './PopularInstructorsCard';
import useInstructors from '../../../hooks/useInstructors';

const FeaturedInstructors = () => {
      const [instructors] = useInstructors()


      return (
            <div className='my-container px-10 mt-24 mb-16'>
                  <div className='text-center mb-20'>
                        <h1 className='text-4xl font-bold text-white'>Meet Our <span className=' text-white'>Contributing</span> Developers</h1>
                        <p className='text-white mt-4 text-xl'>Discover the talented developers behind our open-source projects, dedicated to making a positive impact through collaboration and innovation.</p>
                  </div>


                  <div className=' grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                              instructors.slice(0, 6).map(instructor => <PopularInstructorsCard key={instructor._id} instructor={instructor}></PopularInstructorsCard>)
                        }
                  </div>

            </div>
      );
};

export default FeaturedInstructors;