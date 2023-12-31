import React from 'react';
import { TfiAlignJustify, TfiMenuAlt } from "react-icons/tfi";
import { NavLink, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import logo from '../../assets/black-logo.png'
import { FaBookOpen, FaHome, FaUserShield, FaUsers } from "react-icons/fa";
import useAuth from '../../hooks/useAuth';
import useAdmin from '../../hooks/useAdmin';
import LoadingSpinner from '../../pages/Shared/LoadingSpinner';
import isInstructor from '../../hooks/isInstructor';
import addProject from './../../assets/addProject.jpg'

const Dashboard = () => {
      const { logOut, user } = useAuth()
      const navigate = useNavigate()
      const [isAdmin, isAdminLoading] = useAdmin();
      const [itInstructor] = isInstructor();

      if (isAdminLoading) {
            return <LoadingSpinner></LoadingSpinner>
      }



      return (
            <div className="drawer lg:drawer-open">
                  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                  <div style={{ backgroundImage: `url(${addProject})` }} className="drawer-content ">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="  bg-transparent  drawer-button   lg:hidden ml-4 cursor-pointer "><TfiMenuAlt className=' text-white' size={40} /></label>

                        <Outlet></Outlet>


                  </div>
                  <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content uppercase ">
                              <div>
                                    <h1 className=' text-2xl font-bold my-12'>POLY MATRIX</h1>
                              </div>

                              {/* Sidebar content here */}

                              <div className="divider"></div>
                              {/*-------- admin navbar ----------- */}
                              {
                                    (isAdmin && !itInstructor) && <>
                                          <li><NavLink to='/dashboard/adminhome'><FaHome />ADMIN HOME</NavLink></li>
                                          <li><NavLink to='/dashboard/courses'><FaBookOpen />Manage Projects</NavLink></li>
                                          <li><NavLink to='/dashboard/users'><FaUsers />Manage Users</NavLink></li>
                                          <li><NavLink to='/dashboard/application-review'><FaUsers />Contributors Application</NavLink></li>
                                    </>
                              }
                              {
                                    //-------- user navbar --------------
                                    (user && !itInstructor && !isAdmin) && <>
                                          <li><NavLink to='/dashboard/userhome'>USER HOME</NavLink></li>
                                          <li><NavLink to='/dashboard/selected-courses'>Explore Projects</NavLink></li>
                                          <li><NavLink to='/dashboard/apply-contributor'>Apply For Contribute</NavLink></li>

                                          {/* <li><NavLink to='/dashboard/enrolCoourses'>Enroll COURSES</NavLink></li>
                                          <li><NavLink to='/dashboard/paymentHistory'>PAYMENT HISTRORY</NavLink></li> */}
                                    </>
                              }

                              {/* //instructor nav  */}
                              {
                                    (itInstructor && !isAdmin) && <>
                                          <li><NavLink to='/dashboard/instructorhome'>Contributor HOME</NavLink></li>
                                          <li><NavLink to='/dashboard/addClass'>ADD Project</NavLink></li>
                                          <li><NavLink to='/dashboard/myClasses'>MY Projects</NavLink></li>
                                          
                                    </>

                              }
                              

                              <div className="divider"></div>

                              {/* ---------common navbar ------------ */}

                              <li><NavLink to='/'><FaHome />HOME</NavLink></li>
                              <li><NavLink to='/instructors'><FaUsers />Contributors</NavLink></li>
                              <li><NavLink to='/courses'><FaUsers />Projects</NavLink></li>
                              <li onClick={() => logOut().then(() => navigate('/'))}><h1 ><FaUsers />Logout</h1></li>



                        </ul>

                  </div>
            </div>
      );
};

export default Dashboard;