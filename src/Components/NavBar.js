import React, {useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';


const NavBar = () => {
    const [nav, setNav] = useState(false)

    const handleClick = () => {
        setNav(!nav)
    }
  return (
    <div className="w-screen h-[80px] bg-zinc-200 fixed drop-shadow-lg">
      <div className="flex justify-between items-center w-full h-full px-2 ">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Brand.</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="p-8 ">Sign Up</button>
        </div>
        <div onClick={handleClick}  className="md:hidden mr-4">
            {!nav ? <MenuIcon/> : <CloseIcon/>}
        </div>
      </div>
      <ul className={!nav ? 'hidden' : " bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-indigo-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Support</li>
        <li className="border-b-2 border-zinc-300 w-full">Platform</li>
        <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
        <div className="flex flex-col my-4">
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Sign In</button>
            <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
