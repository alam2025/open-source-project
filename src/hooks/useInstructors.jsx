import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth";
import useUrl from "./UseUrl";

const useInstructors=()=>{
      const [url]= useUrl();
      const {loading,user}=useAuth()
      const {data: instructors=[], refetch,isLoading: instructorloading}= useQuery({
            queryKey:['instructors'],
            enabled:!loading ,
            queryFn:async()=>{
                  const res= await fetch(`${url}/instructors`);
                  return res.json()
            }
      })
      return [instructors, refetch,instructorloading];
}

export default useInstructors;