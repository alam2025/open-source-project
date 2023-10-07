import React from 'react';
import SectionBanner from '../Shared/SectionBanner';
import useInstructors from '../../hooks/useInstructors';
import InstructorCard from './InstructorCard';
import { Helmet } from 'react-helmet';


const Instructors = () => {
      const [instructors,refetch,instructorloading] = useInstructors();

      console.log(instructors);
     
      return (
            <div>
                  <Helmet>
                        <title>Home | contributors</title>
                  </Helmet>
                  <SectionBanner title={'Contributors'} route={'Home | Contributors'}></SectionBanner>
                  <div className=' my-container lg:w-[80%] grid grid-cols-1  md:grid-cols-2 mb-24  gap-10'>
                        {
                              instructors.map(instructor=><InstructorCard
                              key={instructor._id}
                              instructor={instructor}
                              isLoading={instructorloading}
                              ></InstructorCard>)
                        }

                  </div>
            </div>
      );
};

export default Instructors;