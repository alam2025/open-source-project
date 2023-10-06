import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
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
            <div className={` hover:bg-violet-500 hover:text-white  rounded-md border p-4  flex flex-col  ${(isSelected) && 'hidden'}`}>
                  <div className=' overflow-hidden'>
                        <img className='w-[60px] h-[40px] transition duration-1000 hover:transform hover:scale-110 rounded-md' src={image} alt={name} />

                  </div>
                  <h3 className=' text-2xl text-indigo-800  my-2 font-semibold'>{name}</h3>
                  <h3 className=' mb-3 text-2xl font-bold text-green-500'>${price}</h3>
                  <hr />
                  <div className=' pt-6 mb-3 flex justify-between gap-4'>
                        <div className=' flex gap-4'>
                              <MdEventAvailable size={30} />
                              <p className='text-xl'>{available_seats} seats</p>
                        </div>
                        <div className='flex gap-4'>
                              {/* <PiStudentBold/> */}
                              <MdAssignmentInd size={30}/>
                              <p className='text-xl'>{enroll_student || 0} student</p>
                        </div>
                        

                        
                       

                  </div>
                  <button disabled={isAdmin === true || isSelected || itInstructor === true || available_seats === 0} onClick={() => handleAddCart(course)} className={`mt-auto w-1/2 btn btn-outline btn-success border-black `}>ADD TO CART</button>

                  
            </div>
      );
};

export default CourseCard;