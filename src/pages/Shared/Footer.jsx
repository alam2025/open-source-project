import React from 'react';
import logo from '../../assets/logo.png'

import {CiFacebook, CiInstagram, CiTwitter, CiYoutube} from 'react-icons/ci'
const Footer = () => {
      return (
            <div>
                  <div className=' mt-auto  my-container  px-10 pb-10 '>
                        <div className=' '>

                              <div className=' grid grid-cols-2 md:grid-cols-4 gap-6'>
                                    <div>
                                          <h1 className=' text-3xl font-bold '>Conditions</h1>
                                          <div className=' text-slate-400  mt-6 flex flex-col gap-2 text-lg'>
                                                <a className='hover:text-green-500' href="/">For Semester Courses</a>
                                                <a className='hover:text-green-500' href="/">For 3-week Intensive Course</a>
                                                <a className='hover:text-green-500' href="/">For Intensive Summer Courses</a>
                                                <a className='hover:text-green-500' href="/">For Individual Courses</a>
                                          </div>
                                    </div>
                                    <div>
                                          <h1 className=' text-3xl font-bold '>Menu</h1>
                                          <div className=' text-slate-400  mt-6 flex flex-col gap-2 text-lg'>
                                                <a className='hover:text-green-500' href="/">About Us</a>
                                                <a className='hover:text-green-500' href="/">Courses</a>
                                                <a className='hover:text-green-500' href="/">Language Holidays</a>
                                                <a className='hover:text-green-500' href="/">Language Corner</a>
                                                <a className='hover:text-green-500' href="/">Gallery</a>
                                                <a className='hover:text-green-500' href="/">FAQ</a>
                                          </div>
                                    </div>
                                    <div>
                                          <h1 className=' text-3xl font-bold '>Useful Info</h1>
                                          <div className=' text-slate-400  mt-6 flex flex-col gap-2 text-lg'>
                                                <a className='hover:text-green-500' href="/">Working with Us</a>
                                                <a className='hover:text-green-500' href="/">Online Placement Test</a>
                                                <a className='hover:text-green-500' href="/">Social Programme</a>
                                                <a className='hover:text-green-500' href="/">Testimonials</a>
                                                <a className='hover:text-green-500' href="/">Student Handbook</a>
                                                <a className='hover:text-green-500' href="/">Study Guide</a>
                                          </div>
                                    </div>
                                    <div>
                                          <h1 className=' text-3xl font-bold '>Social</h1>
                                          <div className='text-green-500  mt-6 flex flex-col gap-2 text-lg'>
                                                <a href="https://www.facebook.com/alam2025.bd/">Facebook</a>
                                                <a href="/">Instragram</a>
                                                <a href="/">Twitter</a>
                                          </div>
                                    </div>

                              </div>

                        </div>


                  </div>
                  <div className=' flex justify-between items-center px-10 py-2 bg-violet-600'>
                        <img  className='w-[200px] hidden md:block' src={logo} alt="" />
                        <p className='text-white'>&copy; 2023 OLLS. All rights reserved</p>
                        <div className=' flex gap-5 text-white'>
                              <CiFacebook size={30}/>
                              <CiInstagram size={30}/>
                              <CiYoutube size={30}/>
                              <CiTwitter size={30}/>
                        </div>
                  </div>
            </div>
      );
};

export default Footer;