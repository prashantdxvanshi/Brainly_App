import Input from "./Input";
import Crossicon from "../icons/Crossicon";
import Button from "./Button";
import { useRef, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { toast } from "react-toastify";

enum contentType{
  YouTube = "youtube",
  Twitter = "twitter"
}
const AddContentPop =({ open, onClose }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, settype] = useState(contentType.YouTube);
  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    console.log(title,link)
    const res = await axios.post(`${BACKEND_URL}` + "/content/add", {
      title:title,
      link:link,
      type
    },
  {
    headers: {
            
            token: sessionStorage.getItem("token"),
          },

  });
    onClose();
  
    toast.success(res.data.message);
  }
  return (
    <div>
      {open && (
        <div>
          <div className="w-screen h-screen fixed top-0 left-0 bg-slate-500 opacity-70 flex justify-center"></div>
          <div className="w-screen h-screen fixed top-0 left-0 items-center  flex justify-center">
            <div className="flex flex-col justify-center fixed opacity-100 p-4 ">
            <span className="bg-white  rounded-2xl p-4">
              <div className="flex justify-end ">
                <button onClick={onClose} className="cursor-pointer">
                    <Crossicon />
                </button>
              </div>
              <Input ref={titleRef} placeholder={"Title"}/>
              <Input ref={linkRef} placeholder={"Link"}/>
              <div className="flex gap-4 p-3">
               
                <Button onClick={()=>{settype(contentType.YouTube)}} content="YouTube" numbering={type===contentType.YouTube?"first":"second"}/>
                <Button onClick={()=>{settype(contentType.Twitter)}} content="Twitter" numbering={type===contentType.Twitter?"first":"second"}/>
              </div>
               <div className="flex justify-center">
                <Button onClick={addContent} numbering="first" content="Submit" />
               </div>
            </span>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddContentPop;
