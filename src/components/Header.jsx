import React from "react";
import Logo from '../assets/Logo.svg'
import user_logo from '../assets/user_logo.svg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Header (){
    return(
        <header className="fixed top-0 z-50 w-full h-auto bg-primary flex flex-row justify-between  max-w-[1200px]" style={{ background: 'radial-gradient(circle at top,  #EED7D8, #FFFFFF)'}}>
            <div className=" text-secondary flex w-48 p-3 ">
                <img src={Logo} alt="logo" className="w-auto h-full  border-2 border-secondary  p-1 mr-2"></img>
                <span className="font-bold">IDFC FIRST <br/> Bank</span>
            </div>
            <div className="flex items-center gap-2">
                <img src={user_logo} alt="user" className="w-10 "></img>
                <span className="text-gray-500">Logout</span> 
                <KeyboardArrowDownIcon style={{ fontSize: '2rem', color: 'gray' }} />
            </div>
        </header>
    )
}
export default Header