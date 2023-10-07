import React from 'react';
import useAxiosSecure from '../../hooks/useAxioseSequre';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const ContributorsTable = ({contributor, index}) => {
      const {user}= useAuth()
      const [axiosSecure]= useAxiosSecure()

      const handleRole=async(id)=>{
           
            axiosSecure.patch(`/roleChanged/${id}/${contributor.email}`)
            .then(data=>{
                  Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Role Changed !!!.`,
                        showConfirmButton: false,
                        timer: 1500
                      })
            }).catch(err=>console.log(err))
            
      }
      
      return (
            <tr>
                  <td>{index+1}</td>
                  <td>{contributor.name}</td>
                  <td>{contributor.email}</td>
                  <td>{contributor.phone}</td>
                  <td>{contributor.skills}</td>
                  <td>{contributor.bio}</td>
                  <td className=' flex gap-3'>
                        <button onClick={()=>handleRole(contributor._id)}  className=' bg-yellow-500 text-white py-1 px-3 rounded-full'>Pending</button>
                        
                  </td>

            </tr>
      );
};

export default ContributorsTable;