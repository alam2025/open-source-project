import React, { useState } from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-router-dom';
const PopularInstructorsCard = ({ instructor }) => {
      const [hovered, setHovered] = useState(false);
      const { name, photo, expertise, email, facebook } = instructor;
console.log(instructor);
      const handleHover = () => {
            setHovered(!hovered);
      };
      // const socialInfoStyle = {
      //       transform: hovered ? 'translateY(0)' : 'translateY(100%)',
      //       transition: 'transform 1s ease-in-out',
      // };
      return (
            <div
                  className=' p-4  rounded-xl mx-auto shadow-xl border flex justify-center flex-col items-center bg-white'
            >
                  <img className=' mt-4 w-[120px] h-[120px] rounded-full' src={photo} alt="" />
                  <div className=' text-center mt-4 '>
                        <h3 className=' font-semibold'>{name}</h3>
                        <p className='mt-3'>{'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' } </p>
                  </div>
            </div>
      );
};

export default PopularInstructorsCard;