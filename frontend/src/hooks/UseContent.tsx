import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"


const UseContent = () => {
    const[contents,setcontents]=useState([])
    function refresh(){
     const res=axios.get(`${BACKEND_URL}`+"/content/get",{headers: {token: sessionStorage.getItem("token"),}}).then((res)=>{setcontents(res.data.content)})
    }
    useEffect(() => {
        refresh();
        let interval=setInterval(() => {
             refresh();
        }, 10*1000);
        return()=>{
            clearInterval(interval)
        }
    }, [])
    
    return contents
}

export default UseContent
