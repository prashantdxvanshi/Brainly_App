import { useState } from "react";
import AddContentPop from "../components/AddContentPop";
import Button from "../components/Button";
import Card from "../components/Card";
import Plusicon from "../icons/Plusicon";
import Shareicon from "../icons/Shareicon";
import Sidebar from "../components/Sidebar";
import UseContent from "../hooks/UseContent";
import axios from "axios";
import { toast } from "react-toastify";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function Dashboard() {
  const [modelOpen, setModelOpen] = useState(false);
  const contents = UseContent();
  console.log("there are contents", contents);

  return (
    
    <div className="flex flex-col md:flex-row min-h-screen bg-indigo-200">
      {/* Sidebar */}
      <div className="w-full md:w-72">
        <Sidebar />
      </div>

      {/* Main content */}
       <div
      className="relative flex-1 p-4 md:p-6 min-h-screen flex  bg-cover bg-center "
      style={{
        backgroundImage:
          "url('https://markdivine.com/wp-content/uploads/2023/04/Gut-Brain-Axis-1568x1109.jpg')",
      }}
    >
      <div className="">
        {/* Modal */}
        <AddContentPop open={modelOpen} onClose={() => setModelOpen(false)} />

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mb-4">
          <Button
            onClick={() => setModelOpen(true)}
            numbering="first"
            content="Add Content"
            icon={<Plusicon />}
         
          />
          <Button
            onClick={async () => {
              try {
                const res = await axios.post(
                  `${BACKEND_URL}/content/share`,
                  { share: true },
                  { headers: { token: sessionStorage.getItem("token") } }
                );
                const shareurl = `${BACKEND_URL}/share/${res.data.hash}`;
                toast.success(`This is your share URL: ${shareurl}`);
              } catch (err: any) {
                toast.error(err.response?.data?.message || "Failed to share");
              }
            }}
            numbering="second"
            content="Share Brain"
            icon={<Shareicon />}
           
          />
        </div>

        {/* Content cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {contents.map(({ title, link, type }, idx) => (
            <Card key={idx} title={title} link={link} type={type} />
          ))}
        </div>
      </div>
    </div>
    </div>

  );
}

export default Dashboard;
