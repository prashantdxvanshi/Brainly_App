import Logo from "../icons/Logo"
import Twittericon from "../icons/Twittericon"
import Youtubeicon from "../icons/Youtubeicon"
import Sidebaritem from "./Sidebaritem"


const Sidebar = () => {
  return (
    <div>
      <div className="fixed left-0 top-0 w-72 border-b-neutral-400 shadow-2xl h-screen bg-gradient-to-br via-cyan-950 pl-8 ">
        <div className="flex items-center text-2xl pt-4"><div className="pr-2 text-2xl "><Logo/></div>Second Brain</div>
       <div className="pt-4 ">
         <Sidebaritem text="Twitter" icon={<Twittericon/>}/>
         <Sidebaritem text="YouTube" icon={<Youtubeicon/>}/>
       </div>

      </div>
    </div>
  )
}

export default Sidebar
