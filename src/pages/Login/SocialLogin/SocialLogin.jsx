import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useUrl from '../../../hooks/UseUrl';
const SocialLogin = () => {
      const [url]= useUrl()
      const { googleSignIn } = useContext(AuthContext);
      const navigate= useNavigate();
      const location = useLocation();
      const [error,setError]=useState('')

      const from= location.state?.from?.pathname || '/';


      const handlegooglesignIn = () => {
            setError('');
            googleSignIn()
            .then(result=>{
                  const user = result.user;
                  const createUser={
                        name:user.displayName,
                        photo:user.photoURL,
                        email:user.email
                  }
                  // console.log(result.user);
                  LoadData(createUser);
                 
            }).catch(error=>setError(error.message))
       }
       const LoadData=(user)=>{
            axios.post(`${url}/users`,user)
            .then(res=>{
                  // console.log(res);
                  navigate(from,{replace:true})
            })
       }
      return (
            <div className=' flex gap-4'>
                  {
                        error&&<p>{error}</p>
                  }
                  
                  <button onClick={handlegooglesignIn} className="btn btn-circle btn-outline">
                        <FcGoogle size={40} />
                  </button>
                  
            </div>
      );
};

export default SocialLogin;