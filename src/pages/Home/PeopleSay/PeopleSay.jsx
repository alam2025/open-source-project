
import React, { useRef, useState } from 'react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import client_1 from '../../../assets/clients/client-1.png'
import client_2 from '../../../assets/clients/cliwent-2.png'
import { useEffect } from 'react';
const PeopleSay = () => {
      let testimonials = [
            {
                  title: "Fantastic Learning Experience",
                  comment: "I absolutely loved the course content and the way it was presented. The instructors were knowledgeable and engaging. Highly recommended!",
                  rating: 5,
                  user_name: "John Smith",
                  role: "Software Engineer",
                  image: client_1
            },
            {
                  title: "Inspiring and Insightful",
                  comment: "This course opened my eyes to new possibilities and gave me a fresh perspective on the subject. It exceeded my expectations in every way.",
                  rating: 4,
                  user_name: "Jane Doe",
                  role: "Marketing Specialist",
                  image: client_2
            },
            {
                  title: "Great Support and Community",
                  comment: "Not only was the course material top-notch, but the community and support provided were exceptional. It felt like a collaborative learning journey.",
                  rating: 5,
                  user_name: "Alex Johnson",
                  role: "Student",
                  image: client_1
            },
            {
                  title: "Practical and Applicable",
                  comment: "The concepts taught in this course were immediately applicable to my work. I could see the results in my projects almost immediately.",
                  rating: 4,
                  user_name: "Emily Brown",
                  role: "Product Manager",
                  image: client_1
            },
            {
                  title: "Engaging and Informative",
                  comment: "I never thought learning could be so enjoyable! The interactive lessons and real-world examples kept me engaged throughout the course.",
                  rating: 5,
                  user_name: "Michael Wilson",
                  role: "Business Analyst",
                  image: client_1
            }
      ]

      const [slidesPerView, setSlidesPerView] = useState(1); // Initial value for small screens

      useEffect(() => {
            const handleResize = () => {
                  // Adjust the number of slides based on screen width
                  if (window.innerWidth >= 992) {
                        setSlidesPerView(2); // Show 2 slides on larger screens (width >= 768px)
                  } else {
                        setSlidesPerView(1); // Show 1 slide on smaller screens (width < 768px)
                  }
            };

            // Call the handleResize function on initial load and when the window is resized
            handleResize();
            window.addEventListener('resize', handleResize);

            // Cleanup the event listener when the component is unmounted
            return () => {
                  window.removeEventListener('resize', handleResize);
            };
      }, []);
      return (
            <div className='   py-16 px-[5%]'>
                  <div className='w-[90%] md:w-[60%] mx-auto'>
                        <h1 className='text-4xl font-bold text-indigo-800 text-center'>Community Feedback on Projects</h1>
                        <p className='text-center my-4'>Explore what the community is saying about our open-source projects. Join the conversation and be part of our collaborative journey in innovation.</p>
                  </div>


                  <div className=' my-16'>
                        <Swiper
                              slidesPerView={slidesPerView}
                              spaceBetween={30}


                              pagination={{
                                    clickable: true,
                              }}
                              modules={[Pagination]}
                              className="mySwiper "
                        >
                              {testimonials.map((tm, index) =>
                                    <SwiperSlide>
                                          <div className=' flex md:flex-row flex-col gap-5 justify-center items-center rounded-md shadow-md border p-4 text-center md:text-start'>
                                                <img className='w-[100px]  rounded-full h-[100px]  md:h-[320px] md:w-[200px] rounded-md bg-gray-100' src={tm.image} alt="" />
                                                <div>
                                                      <p>Rating :{tm.rating}</p>
                                                      <h1 className=' text-2xl font-bold text-indigo-900'>{tm.title}</h1>
                                                      <p className=' my-5'>{tm.comment}</p>

                                                      <div>
                                                            <h3 className=' text-xl font-semibold text-indigo-500'>{tm.user_name}</h3>
                                                            <p>{tm.role}</p>
                                                      </div>
                                                </div>

                                          </div>
                                    </SwiperSlide>
                              )
                              }


                        </Swiper>
                  </div>
            </div>
      );
};

export default PeopleSay;