import React from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../Shared/LoadingSpinner';
import { AiFillFacebook } from 'react-icons/ai';
import { BsFacebook, BsGithub } from 'react-icons/bs';

const InstructorCard = ({instructor,isLoading}) => {
      if(isLoading){
            return <LoadingSpinner></LoadingSpinner>
      }
      // console.log(instructor);
      const {name,photo,email,number_of_courses_taken,courses_taken, phoneNumber,facebook_url,github_url}= instructor
      return (
            <div className='text-black flex  border rounded-xl gap-5 bg-white'>

                  <div>
                        <img src={photo} alt={name} className=' rounded-s-xl w-[150px] h-[150px]  ' />
                  </div>
                  <div className=' '>
                        <h1 className=' text-xl font-semibold '>{name}</h1>

                        <div>
                              <p><span>Email : </span>{email}</p>
                              <p><span>Phone : </span>{phoneNumber}</p>
                              <p><span>Address : </span>{instructor?.address}</p>
                              

                        </div>

                        <div className=' flex gap-5 pt-5'>
                              <a href={facebook_url}><BsFacebook/></a>
                              <a href={github_url}><BsGithub/></a>
                        </div>
                  </div>
                  
                  
            </div>
      );
};

export default InstructorCard;