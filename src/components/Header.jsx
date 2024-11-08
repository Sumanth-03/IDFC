import React from "react";
import Logo from '../assets/Logo.svg'
import logodark from '../assets/logodark.svg'
import logowhite from '../assets/logowhite.svg'
import user_logo from '../assets/user_logo.svg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from "react-router-dom";
function Header (){
    const navigate = useNavigate()
    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/');
        window.location.reload();
    };
    return(
        <header className="fixed top-0 z-50 w-full h-20 flex flex-row justify-between  max-w-[1200px] bg-secondary md:bg-white background-gradient-md">
            <div className=" text-secondary flex w-48 p-3  ">
                <img src={logodark} alt="logo" className="hidden md:block w-auto h-full p-1 mr-2"></img>
                <img src={logowhite} alt="logo" className="md:hidden w-auto h-full p-1 mr-2"></img>
                {/* <span className="hidden md:block font-bold">IDFC FIRST <br/> Bank</span>  */}
            </div>
            <button className="flex items-center gap-2 pr-2" onClick={handleLogout}>
                <img src={user_logo} alt="user" className="w-10 "></img>
                <span className="text-primary md:text-gray-500">Logout</span> 
                <span className="hidden md:block"><KeyboardArrowDownIcon style={{ fontSize: '2rem', color: 'gray' }} /></span>
                
            </button>
        </header>
    )
}
export default Header