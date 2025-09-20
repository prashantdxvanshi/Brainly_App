import { useEffect, useState } from "react"

import axios from "axios"
const BACKEND_URL = import.meta.env.VITE_API_BASE_URL;


const UseContent = () => {
    const[contents,setcontents]=useState([])
    async function refresh(){
    await axios.get(`${BACKEND_URL}`+"/content/get",{headers: {token: sessionStorage.getItem("token"),}}).then((res)=>{setcontents(res.data.content)})
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
