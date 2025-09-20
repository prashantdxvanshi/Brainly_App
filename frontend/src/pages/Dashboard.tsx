import { useState } from "react"
import AddContentPop from "../components/AddContentPop"
import Button from "../components/Button"
import Card from "../components/Card"
import Plusicon from "../icons/Plusicon"
import Shareicon from "../icons/Shareicon"
import Sidebar from "../components/Sidebar"
import UseContent from "../hooks/UseContent"

import axios from "axios"
import { toast } from "react-toastify"
const BACKEND_URL = import.meta.env.VITE_API_BASE_URL;



function Dashboard() {
 const[modelOpen,setmodelOpen]=useState(false)
 const contents=UseContent();
 console.log("there is contents",contents)
  return (
    <>
         <Sidebar/>
      <div className="ml-72 p-3 bg-indigo-200 min-h-screen">
      <AddContentPop open={modelOpen} onClose={()=>{setmodelOpen(false)}}/>
     <div className="flex justify-end gap-4 mt-4">
     <Button onClick={()=>{setmodelOpen(true)}} numbering="first" content="Add content" icon={<Plusicon/>}/>
     <Button onClick={async()=>{
      const res=await axios.post(`${BACKEND_URL}/content/share`,{share:true},{headers: {token: sessionStorage.getItem("token"),},})
     const shareurl=`${BACKEND_URL}/share/${res.data.hash}`
     toast.success(`this is your share url ${shareurl}`)
     }} numbering="second" content="Share Brain" icon={<Shareicon/>}/>
     </div>
      <div className="flex gap-3 flex-wrap">
        {
          contents.map(({title,link,type})=>
         <Card title={title}
           link={link} 
           type={type} />
          
          )
        }

      </div>
      </div>
       
    </>
  )
}

export default Dashboard
