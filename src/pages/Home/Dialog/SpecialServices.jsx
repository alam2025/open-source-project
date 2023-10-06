import React from 'react';


import udemy from '../../../../src/assets/logos/udemy.png'
import coursera from '../../../../src/assets/logos/coursera.png'
import kadenza from '../../../../src/assets/logos/kadenze.png'
import kan_academy from '../../../../src/assets/logos/khan_academy.png'

const SpecialServices = () => {
      
      return (
            <div className='my-container mt-16 border-t border-gray-500 border-b grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4  px-4'>
                  <div className=' flex items-center gap-3'>
                        <div className=' p-4  rounded-full'>
                              <img src={udemy} alt="" />
                        </div>
                        
                  </div>
                  <div  className=' flex items-center gap-3'>
                        <div className=' p-4  rounded-full'>
                              <img src={kan_academy} alt="" />

                        </div>
                        
                  </div>
                  <div  className=' flex items-center gap-3'>
                       <div className=' p-4  rounded-full'>
                        <img src={coursera} alt="" />
                        </div>
                        
                  </div>
                  <div  className=' flex items-center gap-3'>
                        <div className=' p-4 rounded-full'>
                              <img src={kadenza} alt="" />
                        </div>
                        
                  </div>
            </div>
      );
};

export default SpecialServices;