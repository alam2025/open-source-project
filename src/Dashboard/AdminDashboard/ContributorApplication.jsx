import React from 'react';
import useContributors from '../../hooks/GetContrubutors';
import ContributorsTable from './ContributorsTable';

const ContributorApplication = () => {

      const [contributors] = useContributors()
 const filterContributors = contributors.filter(c=>c.role == 'user');
     
      return (
            <div>
                  <h1 className=' text-2xl font-semibold text-white my-10 text-center'>Contributor Candidates</h1>
                  <div>
                        <div className="overflow-x-auto w-[80%] mx-auto ">
                              <table className="table text-white table-zebra">
                                    {/* head */}
                                    <thead>
                                          <tr className=' text-white font-semibold text-lg'>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Skills</th>
                                                <th>Bio</th>
                                                <th>Actions</th>
                                                
                                          </tr>
                                    </thead>
                                    <tbody>
                                   
                                          {
                                                filterContributors?.map((contributor,index)=><ContributorsTable key={contributor._id} contributor={contributor} index={index}/>)
                                          }
                                         
                                    </tbody>
                              </table>
                        </div>
                  </div>
            </div>
      );
};

export default ContributorApplication;