import { useQuery } from "@tanstack/react-query"
import useUrl from "./UseUrl"

const useContributors=()=>{
      const [url]= useUrl()
     const {data:contributors=[]}=useQuery({
      queryKey:['useCompany'],
      queryFn:async()=>{
            const res=await fetch(`${url}/contributors`)
            return res.json()
      }
     }) 
     return [contributors];
}

export default useContributors;