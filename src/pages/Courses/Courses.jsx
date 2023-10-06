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
      const [selectedCategory, setSelectedCategory] = useState([]);

      const [courses] = useCourses()
      const { data: categories = [] ,refetch} = useQuery({
            queryKey: ['category'],
            queryFn: async () => {
                  const res = await fetch('/category.json');
                  return res.json()
            }
      })
      

      const handleTap = (category) => {
            setSelectedCategory(category)
      }
      
      return (
            <div>
                  <Helmet><title>Home | Projects</title></Helmet>
                  <SectionBanner title={'Projects'} route={'Home | Projects'}></SectionBanner>

                  <SectionTitle heading={'Choose Your Project'} subHeading={''}></SectionTitle>

                  <div className=' my-container mb-24'>
                  


                  </div>
            </div>
      );
};

export default Courses;