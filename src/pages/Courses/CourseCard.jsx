import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import useEnroll from '../../hooks/useEnroll';
import useAdmin from '../../hooks/useAdmin';
import useAxiosSecure from '../../hooks/useAxioseSequre';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';
import isInstructor from '../../hooks/isInstructor';
import { MdAssignmentInd, MdEventAvailable } from 'react-icons/md';



const CourseCard = ({ course }) => {
      const [itInstructor] = isInstructor()
      const navigate = useNavigate()
      const { user } = useAuth()
      const [enrolls] = useEnroll()
      const [isAdded, setAdded] = useState(false)
      const [isAdmin] = useAdmin()
      const [axiosSecure] = useAxiosSecure()
      const [selectedCourse, refetch] = useCart();
      const [isActive, setIsActive] = useState(false)


    

      const isSelected = selectedCourse.some(select => select.courseId === course._id);



      const { name, image, instructorName, available_seats, price, enroll_student } = course;
      // console.log(course);


      const handleAddCart = course => {
            const { _id, name,
                  image, instructorName
                  , available_seats, price, email } = course;


            if (user && user?.email) {
                  const selectedCourse = {
                        courseId: _id, date: new Date(), name, image, instructorName
                        , price, email: user?.email, available_seats, instructor_email: email
                  };
                  axiosSecure.post('/selectCourse', selectedCourse)
                        .then(res => {

                              if (res.data.insertedId) {
                                    refetch()
                                    // alert('opk')

                                    Swal.fire({

                                          position: 'top-end',
                                          icon: 'success',
                                          title: 'Your work has been saved',
                                          showConfirmButton: false,
                                          timer: 1500
                                    })

                              }
                        })

            }
            else {
                  let timerInterval
                  Swal.fire({
                        title: 'Please Login!',
                        html: 'Please Wait <b></b> .',
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: () => {
                              Swal.showLoading()
                              const b = Swal.getHtmlContainer().querySelector('b')
                              timerInterval = setInterval(() => {
                                    b.textContent = Swal.getTimerLeft()
                              }, 100)
                        },
                        willClose: () => {
                              clearInterval(timerInterval)
                        }
                  }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                              console.log('I was closed by the timer')
                        }
                  })
                  navigate('/login')
            }
      }
      return (
            <a href={course?.website_link} target='_blank' className={` hover:bg-violet-500 hover:text-white  rounded-md border shadow-lg  flex flex-col  ${(isSelected) && 'hidden'}`}>
                  <div className=' overflow-hidden'>
                        <img className='w-full transition h-[250px] duration-1000 hover:transform hover:scale-110 rounded-md' src={course?.projectImage} alt={name} />

                  </div>

                  <div className=' text-white px-5 mt-4'>
                        <h1 className=' text-xl text-center  font-semibold'>{course?.projectName}</h1>
                        <p className=' my-4 text-justify'>{course.description.slice(0,250)}... <span className=' text-green-500'>More</span></p>
                  </div>
                 
                  

                  
            </a>
      );
};

export default CourseCard;