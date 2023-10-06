import { useQuery } from "@tanstack/react-query"

const useCompanyCourse=()=>{
     const {data:companyCourses=[],isLoading:isCompanyLoading}=useQuery({
      queryKey:['useCompany'],
      queryFn:async()=>{
            const res=await fetch('/companyCourses.json')
            return res.json()
      }
     }) 
     return [companyCourses,isCompanyLoading];
}

export default useCompanyCourse;