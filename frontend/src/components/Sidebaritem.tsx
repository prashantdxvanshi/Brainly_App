import type { ReactElement } from "react";

interface sidebaritemprops{
    text:string;
    icon:ReactElement
}

const Sidebaritem = ({text,icon}: sidebaritemprops) => {
  return (
    <div>
      <div className="flex items-center py-2">
        <div className="pr-2">{icon}</div>
        <div >{text}</div>
      </div>
    </div>
  )
}

export default Sidebaritem
