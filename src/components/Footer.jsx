import React from "react";
import cheggout from '../assets/cheggout.svg'
import { useNavigate } from "react-router-dom";
function Footer (){
    const navigate = useNavigate()
    return(
        <footer className="flex flex-col items-center md:flex-row gap-2 text-primary bg-black p-2 justify-between w-screen md:px-10 h-auto">
            <div className="flex ">
                <span>Powered by:</span>
                <span className="relative">
                    <img src={cheggout} alt="c" className="translate-y-2"></img>
                </span>
                
            </div>
            <div className=" order-3 md:order-2 border-0 border-t-[1px] pt-3 md:pt-0 md:border-none px-10 md:px-2 text-center">
               ©2024 Cheggout. All rights reserved | <button className="text-blue-700" onClick={()=>navigate('/terms')}>Terms of Service</button> | <button className="text-blue-700" onClick={()=>{navigate('/privacypolicy')}}>Privacy Policy</button>
            </div>
            <div className="flex flex-row">
                <span className="pr-2">Contact us:</span>
                <div className="flex flex-col items-center justify-center">
                    <span>support@cheggout.com</span>
                    <span>+91 0809890988</span>
                </div>
            </div>
        </footer>
    )
}
export default Footer