import Shareicon from "../icons/Shareicon";
interface cardprops{
    title:string;
    link:string;
    type:"twitter" | "youtube"
}
const Card = ({title,link,type}: cardprops) => {
  return (
    <div>
      <div className="bg-white rounded-md border border-gray-200 max-w-72 p-8 min-h-48 min-w-72">
        <div className="flex justify-between">
          <div className="flex items-center text-md">
            <div className=" text-gray-500 pr-2">
              <Shareicon />
            </div>
            {title}
          </div>
          <div className="flex items-center ">
            <div className="pr-2 text-gray-500">
                <a href={link} target="_blank">
              <Shareicon /></a>
            </div>
            <div className=" text-gray-500">
              <Shareicon />
            </div>
          </div>
        </div>
        {type==="youtube" && <iframe  className="w-full pt-2"  src={link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
       
       {type==="twitter" && <blockquote className="twitter-tweet">
          <a href={link.replace("x.com","twitter.com")}></a>
        </blockquote>}
        
      </div>
    </div>
  );
};

export default Card;
