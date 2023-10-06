import React from 'react';
import SectionTitle from '../../pages/Shared/SectionTitle';
import useCart from '../../hooks/useCart';
import { GrTrash } from "react-icons/gr";
import useAxiosSecure from '../../hooks/useAxioseSequre';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SelectedCourses = () => {
      const [selectCourse, refetch] = useCart()
      const [axiosSecure] = useAxiosSecure();
      // console.log(selectCourse);

      const handleDelete = course => {

            axiosSecure.delete(`/selectedCourse/${course._id}`)
                  .then(res => {
                        if (res.data.deletedCount > 0) {
                              refetch();
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

      return (
            <div>
                  <SectionTitle heading={'Explore Projects'} subHeading={''}></SectionTitle>
                 
              
            </div>
      );
};

export default SelectedCourses;