import React from 'react';
import SectionTitle from '../../../pages/Shared/SectionTitle';
import { useForm } from 'react-hook-form';
import useUrl from '../../../hooks/UseUrl';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';


const ApplyForContribute = () => {
      const [url] = useUrl()
      const { user } = useAuth()

      const { handleSubmit, register } = useForm();

      const handleApplication = data => {
            try {
                  axios.post(`${url}/applyContributor`, data)
                        .then(res => {
                              console.log(res);
                              if (!res.data.error) {
                                    Swal.fire({
                                          position: 'top-end',
                                          icon: 'success',
                                          title: `${res.data.data.message}`,
                                          showConfirmButton: false,
                                          timer: 1500
                                    })
                              }else{
                                    Swal.fire({
                                          position: 'top-end',
                                          icon: 'error',
                                          title: `${res.data.message}`,
                                          showConfirmButton: false,
                                          timer: 1500
                                    })
                              }
                        }).catch(err => {
                              console.log(err);
                        })
            }
            catch (err) { console.log(err) };
      }

      return (
            <div>
                  <SectionTitle heading={'Apply to Become a contributor'}></SectionTitle>
                  <form onSubmit={handleSubmit(handleApplication)} className=' w-[70%] mb-20 mx-auto'>

                        <div className=' grid grid-cols-1 md:grid-cols-2 gap-5'>
                              <div className="mb-4">
                                    <label htmlFor="name" className="block text-white font-bold mb-1">
                                          Name *
                                    </label>
                                    <input
                                          type="text"
                                          id="name"
                                          defaultValue={user?.displayName}
                                          name="name"
                                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                                          {...register('name')}
                                          required
                                    />

                              </div>
                              <div className="mb-4">
                                    <label htmlFor="email" className="block text-white font-bold mb-1">
                                          Email *
                                    </label>
                                    <input
                                          type="email"
                                          defaultValue={user?.email}
                                          readOnly
                                          id="email"
                                          name="email"
                                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                                          {...register('email')}
                                          required
                                    />

                              </div>
                              <div className="mb-4">
                                    <label htmlFor="phone" className="block text-white  font-bold mb-1">
                                          Phone Number *
                                    </label>
                                    <input
                                          type="text"
                                          id="phone"
                                          name="phone"
                                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                                          {...register('phone')}
                                          required
                                    />

                              </div>
                              <div className="mb-4">
                                    <label htmlFor="skills" className="block text-white  font-bold mb-1">
                                          Skills *
                                    </label>
                                    <input
                                          type="text"
                                          id="skills"
                                          name="skills"
                                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                                          {...register('skills')}
                                          required
                                    />

                              </div>
                        </div>
                        <div className="mb-4">
                              <label htmlFor="bio" className="block text-white text-gray-700 font-bold mb-1">
                                    Your Bio  *
                              </label>
                              <textarea
                                    type="text"
                                    id="bio"
                                    name="bio"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    {...register('bio')}
                                    required
                              />

                        </div>

                        <div>
                              <button className=' primary-btn'>Submit</button>
                        </div>



                  </form>
            </div>
      );
};

export default ApplyForContribute;