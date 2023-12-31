import React from 'react';
import SectionTitle from '../../pages/Shared/SectionTitle';
import DataTable from 'react-data-table-component';
import useCourses from '../../hooks/useCourses';
import Table from './Table';
import useAuth from '../../hooks/useAuth';
import LoadingSpinner from '../../pages/Shared/LoadingSpinner';

const ManageCourse = () => {
      const {user,loading}=useAuth();

      const [courses,refetch] = useCourses()
      

      if(loading){
            return <LoadingSpinner/>
      }

      console.log(courses);
      

      return (
            <div>
                  <SectionTitle heading={'manage courses'}></SectionTitle>
                 

                  <div className=' '>
                       <Table courses={courses} refetch={refetch}></Table>
                  </div>


            </div>
      );
};

export default ManageCourse;