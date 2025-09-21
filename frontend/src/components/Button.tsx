import type { ReactElement } from "react";

interface buttonprops{
    numbering:"first" | "second";
    content:string;
    icon?:ReactElement;
    onClick?:()=>void;
    fullWidth?:boolean;
    loading?:boolean
}
const typeofnumbering={
    "first":"bg-purple-900 text-white",
    "second":"bg-purple-200 text-purple-600"
}
const bothstyle="px-4 py-2 rounded-md font-leight flex items-center border-2 border-amber-50 hover:bg-purple-200 hover:text-black "
const Button = (props: buttonprops) => {
  return (
   <button className={typeofnumbering[props.numbering]+" "+bothstyle+" "+`${props.fullWidth?"w-full flex justify-center items-center":""} ${props.loading && "opacity-45"}`} onClick={props.onClick}>
    <div className="pr-2">
    {props.icon}
    </div>
    {props.content}
   </button>
  )
}

export default Button

