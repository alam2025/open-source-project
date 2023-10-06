import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import PopularClassCard from './PopularClassCard';
import useCourses from '../../../hooks/useCourses';
import CourseCard from '../../Courses/CourseCard';

const PopularClasses = () => {
      const [courses] = useCourses()



     
      const popular = courses.slice(0, 6)
      

      return (
            <div className='my-container my-20'>
                  <div className=' w-[90%] md:w-[60%] mx-auto mb-16'>
                        <h1 className=' text-4xl font-bold text-indigo-800 text-center'>Popular Courses</h1>
                        <p className='text-center my-4'>Language Learning School is a global training provider based across the UK that specialists in accredited and bespoke training course. We crush the barriers to getting a degree</p>
                  </div>

                  <div className=' justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-8'>
                        {

                              popular.map(item => <CourseCard key={item._id} course={item}></CourseCard>)
                        }
                  </div>
            </div>
      );
};

export default PopularClasses;