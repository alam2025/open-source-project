import React, { useState } from 'react';
import SectionBanner from '../Shared/SectionBanner';
import SectionTitle from '../Shared/SectionTitle';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useQuery } from '@tanstack/react-query';
import useCourses from '../../hooks/useCourses';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import { Helmet } from 'react-helmet';
const Courses = () => {
      

      const [courses] = useCourses()
 
      const filterCourse = courses?.filter(course=>course?.status == 'Active');

    

     
      
      return (
            <div>
                  <Helmet><title>Home | Projects</title></Helmet>
                  <SectionBanner title={'Projects'} route={'Home | Projects'}></SectionBanner>

                  <SectionTitle heading={'Explore Project'} subHeading={''}></SectionTitle>

                  <div className=' my-container mb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

                        {
                              filterCourse?.map((item)=><CourseCard key={item.id} course={item}></CourseCard>)
                        }
                  


                  </div>
            </div>
      );
};

export default Courses;