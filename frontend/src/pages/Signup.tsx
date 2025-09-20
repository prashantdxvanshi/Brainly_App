import { useRef } from "react"
import Button from "../components/Button"
import Input from "../components/Input"

const BACKEND_URL = import.meta.env.VITE_API_BASE_URL;

import axios from "axios";
import {  toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Signup =() => {
  const navigate=useNavigate();
  const usernameRef=useRef<HTMLInputElement>(null);
  const passwordRef=useRef<HTMLInputElement>(null);
 async function signup(){
    const username=usernameRef.current?.value;
    const password=passwordRef.current?.value;
    
    const res=await axios.post(`${BACKEND_URL}/user/signup`,{username,password})
    navigate("/signin")
    toast.success(res.data.message)
  }
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl border min-w-48 p-8">
        <Input ref={usernameRef} placeholder="Username"/>
        <Input ref={passwordRef} placeholder="Password"/>
        <div className="flex justify-center pt-4" >
            <Button onClick={signup} loading={false} numbering="first" content="Signup" fullWidth={true}/>
        </div>

      </div>
    </div>
  )
}

export default Signup
