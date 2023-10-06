import React, { useState } from 'react';
import useCompanyCourse from '../../hooks/UseCompanyCourse';
import web from '../../assets/courselogo/webdevelop.png';
import data_science from '../../assets/courselogo/data science.jpeg';
import graphices from '../../assets/courselogo/graphices.jpeg';
import ai from '../../assets/courselogo/AI.png';
import photography from '../../assets/courselogo/photography.png';
import bussiness from '../../assets/courselogo/business management.jpeg';
import spanish from '../../assets/courselogo/spanish language.png';
import machine from '../../assets/courselogo/machine learning.jpeg';
import { Link } from 'react-router-dom';

const CompanyCourses = () => {
      const [show, setShow] = useState(false)

      let courseCompany = [
            {
                  title: "Introduction to Web Development",
                  course_number: 20,
                  course_logo: web
            },
            {
                  title: "Data Science Fundamentals",
                  course_number: 27,
                  course_logo: data_science
            },
            {
                  title: "Graphic Design Essentials",
                  course_number: 40,
                  course_logo: graphices
            },
            {
                  title: "Introduction to Artificial Intelligence",
                  course_number: 15,
                  course_logo: ai
            },
            {
                  title: "Photography for Beginners",
                  course_number: 60,
                  course_logo: photography
            },
            {
                  title: "Mobile App Development with React Native",
                  course_number: 57,
                  course_logo: bussiness
            },
            {
                  title: "Business Management and Leadership",
                  course_number: 28,
                  course_logo: bussiness
            },
            {
                  title: "Spanish Language and Culture",
                  course_number: 27,
                  course_logo: spanish
            },
            {
                  title: "Machine Learning in Python",
                  course_number: 43,
                  course_logo: machine
            },
            {
                  title: "Introduction to Finance and Investing",
                  course_number: 35,
                  course_logo: bussiness
            },
            {
                  title: "Digital Marketing Strategy",
                  course_number: 87,
                  course_logo: ai
            },
            {
                  title: "Android App Development with Kotlin",
                  course_number: 23,
                  course_logo: photography
            },
            {
                  title: "Introduction to Psychology",
                  course_number: 34,
                  course_logo: photography
            },
            {
                  title: "Advanced Excel Techniques",
                  course_number: 32,
                  course_logo: photography
            },
            {
                  title: "Environmental Science and Sustainability",
                  course_number: 33,
                  course_logo: photography
            },
            {
                  title: "Creative Writing Workshop",
                  course_number: 34,
                  course_logo: photography
            },
            {
                  title: "Introduction to Cybersecurity",
                  course_number: 55,
                  course_logo: photography
            },
            {
                  title: "Modern Art History",
                  course_number: 12,
                  course_logo: photography
            },
            {
                  title: "Business Ethics and Corporate Social Responsibility",
                  course_number: 45,
                  course_logo: photography
            },
            {
                  title: "Game Development with Unity",
                  course_number: 32,
                  course_logo: photography
            }
      ]

      show ? courseCompany : courseCompany = courseCompany.slice(0, 9)
 

      return (
            <div className='   py-16 px-[5%]'>
                  <div className='w-[90%] md:w-[60%] mx-auto'>
                        <h1 className='text-4xl font-bold text-white text-center'>Explore Open Source Projects</h1>
                        <p className='text-center my-4 text-white'>Discover a vast array of open-source projects from our global community. We are dedicated to promoting collaboration and innovation through open-source contributions.</p>
                  </div>

                  <div className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-16'>
                        {
                              courseCompany.map((course, index) =>
                                    <div className=' flex gap-4 items-center bg-white p-3 rounded-md shadow-md' key={index}>
                                          <img className=' w-[60px] h-[60px]' src={course.course_logo} alt="" />
                                          <div>
                                                <h1 className=' text-xl font-semibold'>{course.title}</h1>
                                                <p className=' font-semibold'>{course.course_number} Courses</p>
                                          </div>
                                    </div>
                              )
                        }
                  </div>

                  <div className='flex justify-center items-center'>
                        <Link to='/projects'>
                              <button className='btn bg-violet-600 px-8 py-3 text-white mt-8 hover:bg-violet-800'>Explore All Projects</button>
                        </Link>
                  </div>

            </div>
      );
};

export default CompanyCourses;