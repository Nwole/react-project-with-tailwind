import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import cyber2 from "../assets/cyber2.jpg";
const Support = () => {
  return (
    <div className="w-full  mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img className="w-full h-full object-cover mix-blend-overlay" src={cyber2} alt="/" />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">Support</h2>
          <h3 className="text-5xl font-bold text-center py-6">Finding the rigth team</h3>
          <p className="py-4 text-3xl text-slate-300">
            Lorem ipsum dolar site amet conscetetur adipiscing elit. In
            repudiantdae veritatis ratione error tenetur, voluptates architecto
            possimus ad!. Omins minima ea quidem quisquam unde beatae, minus
            illo et cum vel
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-7">
              <LocalPhoneIcon className="w-16 p- bg-indigo-600 text-white rounded-xl mt-[-5rem]"/>
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolar site amet conscetetur adipiscing elit. In
                repudiantdae veritatis ratione error tenetur, voluptates
                architecto possimus ad!. Omins minima ea quidem quisquam unde
                beatae, minus illo et cum vel
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <KeyboardArrowRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-7">
              <SupportAgentIcon className="w-16 p- bg-indigo-600 text-white rounded-xl mt-[-5rem]"/>
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolar site amet conscetetur adipiscing elit. In
                repudiantdae veritatis ratione error tenetur, voluptates
                architecto possimus ad!. Omins minima ea quidem quisquam unde
                beatae, minus illo et cum vel
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <KeyboardArrowRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div><div className="bg-white rounded-xl shadow-2xl">
            <div className="p-7">
              <PlayCircleIcon className="w-16 p- bg-indigo-600 text-white rounded-xl mt-[-5rem]"/>
              <h3 className="font-bold text-2xl my-6">Media Inquries</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolar site amet conscetetur adipiscing elit. In
                repudiantdae veritatis ratione error tenetur, voluptates
                architecto possimus ad!. Omins minima ea quidem quisquam unde
                beatae, minus illo et cum vel
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <KeyboardArrowRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
