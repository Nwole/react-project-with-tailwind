import React from "react";

import cyber from "../assets/cyber.jpg";
import CloudIcon from '@mui/icons-material/Cloud';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StorageIcon from '@mui/icons-material/Storage';
import ArticleIcon from '@mui/icons-material/Article';
const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start px-2 py-8">
          <p className="2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">Tis is out tech brand</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>
        <div>
          <img className="w-full" src={cyber} alt="/" />
        </div>
        <div className="flex flex-col py-8 md:min-w-[760px] botton=[5%] mx-1 md:left-1/2 transform md:tranlate-x-1/2border border-slate-300 rounded-xl text shadow-xl">
          <p>Data Services</p>
          <div className="flex justify-between p-4">
            <p className="flex px-4 py-3 text-slate-500"><CloudIcon/>Icon. App Security</p>
            <p className="flex px-4 py-2 text-slate-500"><DashboardIcon/>Icon. Dashboard</p>
            <p className="flex px-4 py-2 text-slate-500"><StorageIcon/>Icon. Cloud Data</p>
            <p className="flex px-4 py-2 text-slate-500"><ArticleIcon/>Icon. Api</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
