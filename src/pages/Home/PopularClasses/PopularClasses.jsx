import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import PopularClassCard from './PopularClassCard';
import useCourses from '../../../hooks/useCourses';
import CourseCard from '../../Courses/CourseCard';

const PopularClasses = () => {
      const [courses] = useCourses()

      const filterCourse = courses?.filter(course=>course?.status == 'Active');




      const popular = filterCourse.slice(0, 6)
     


      return (
            <div className='my-container my-20'>
                  <div className='w-[90%] md:w-[60%] mx-auto mb-16'>
                        <h1 className='text-4xl font-bold text-white text-center'>Popular Open-Source Projects</h1>
                        <p className='text-center text-white my-4'>
                              Explore these popular open-source projects that contribute to the global developer community. These projects are collaborative, free to use, and offer a wealth of learning opportunities for developers around the world.
                        </p>
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