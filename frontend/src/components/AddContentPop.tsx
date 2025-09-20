import Input from "./Input";
import Crossicon from "../icons/Crossicon";
import Button from "./Button";
import { useRef, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const ContentType = {
  YouTube: "youtube",
  Twitter: "twitter",
} as const;

type ContentType = (typeof ContentType)[keyof typeof ContentType];
interface AddContentPopProps {
  open: boolean;
  onClose: () => void;
}
const AddContentPop: React.FC<AddContentPopProps> = ({ open, onClose }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, settype] = useState<ContentType>(ContentType.YouTube);
  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    console.log(title,link)
    const res = await axios.post(`${BACKEND_URL}/content/add`, {
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
            <span className="bg-gradient-to-l via-gray-400 border-2 border-amber-50  rounded-2xl p-4">
              <div className="flex justify-end ">
                <button onClick={onClose} className="cursor-pointer text-white">
                    <Crossicon />
                </button>
              </div>
              <Input ref={titleRef} placeholder={"Title"}/>
              <Input ref={linkRef} placeholder={"Link"}/>
              <div className="flex gap-4 p-3">
               
                <Button onClick={()=>{settype(ContentType.YouTube)}} content="YouTube" numbering={type===ContentType.YouTube?"first":"second"}/>
                <Button onClick={()=>{settype(ContentType.Twitter)}} content="Twitter" numbering={type===ContentType.Twitter?"first":"second"}/>
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
