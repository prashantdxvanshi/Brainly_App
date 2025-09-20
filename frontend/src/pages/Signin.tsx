
import { useRef } from "react";
import Button from "../components/Button"
import Input from "../components/Input"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const navigate=useNavigate();
  const usernameRef=useRef<HTMLInputElement>(null);
  const passwordRef=useRef<HTMLInputElement>(null);
 async function signin(){
    const username=usernameRef.current?.value;
    const password=passwordRef.current?.value;
    console.log("backend url is ",BACKEND_URL)
    const res=await axios.post(`${BACKEND_URL}/user/signin`,{username,password})
    sessionStorage.setItem("token",res.data.token)
    toast.success(res.data.message)
    navigate("/dashboard")

  }
  return (
   <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://markdivine.com/wp-content/uploads/2023/04/Gut-Brain-Axis-1568x1109.jpg')",
      }}
    >
      <div className="bg-gradient-to-t via-blue-300 border-amber-50 rounded-xl border min-w-48 p-8">
        <Input ref={usernameRef}  placeholder="Username"/>
        <Input ref={passwordRef}  placeholder="Password"/>
        <div className="flex justify-center pt-4" >
            <Button onClick={signin} loading={false} numbering="first" content="Signin" fullWidth={true}/>
        </div>

      </div>
    </div>
  )
}

export default Signin
