import React from 'react';
import logo from '../../assets/logo.png'
import footerBg from '../../assets/footer.jpeg'
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from 'react-icons/ci'
const Footer = () => {
      return (
            <div style={{ backgroundImage: `url(${footerBg})` }} className=' pt-12'>

                  <div className=' flex justify-between flex-col md:flex-row items-center px-10 py-2 '>
                        <h1 className='text-white  font-bold uppercase'>polymatrix</h1>
                        {/* <img  className='w-[200px] hidden md:block' src={logo} alt="" /> */}
                        <p className='text-white'>&copy; 2023 OLLS. All rights reserved</p>
                        <div className=' flex gap-5 text-white'>
                              <CiFacebook size={30} />
                              <CiInstagram size={30} />
                              <CiYoutube size={30} />
                              <CiTwitter size={30} />
                        </div>
                  </div>
            </div>
      );
};

export default Footer;