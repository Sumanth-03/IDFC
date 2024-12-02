import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Logo from '../assets/Logo.svg'
import logodark from '../assets/logodark.svg'
import logowhite from '../assets/logowhite.svg'
import user_logo from '../assets/user_logo.svg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from "react-router-dom";
import { ArrowBack } from '@mui/icons-material';

function Header (handleLogin){
    const {open, setOpen, setlogInFlow} = handleLogin
    const [logged, setLogged] = useState(false);
    const [showBackButton, setShowBackButton] = useState(false);
    const navigate = useNavigate()
    const location = useLocation();
    const handleLogout = () => {
        console.log(logged , sessionStorage.getItem('otp'))
        if(logged || sessionStorage.getItem('otp')){
            setLogged(false)
            sessionStorage.clear();
            navigate('/', { replace: true });
        }else{
            navigate('/');
            setlogInFlow(true)
            setOpen(true)
        }
        
    };

    useEffect(() => {
        const pathsToShowButton = ['/offerDetails', '/terms', '/privacypolicy', '/disclaimer'];
        setShowBackButton(pathsToShowButton.includes(location.pathname));
    }, [location.pathname]);

    const goBack = () => {
        navigate(-1, { replace: true });
    };
    return(
        <header className="fixed top-0 z-50 w-full h-20 flex flex-row justify-between  max-w-[1200px] bg-[#80232A] md:bg-white background-gradient-md">
           {showBackButton && (
                <button
                    onClick={goBack}
                    className="absolute -bottom-12 left-1 bg-white text-black rounded-full p-1 m-1 z-[1000]"
                >
                    <ArrowBack style={{ fontSize: '2rem' }} />
                </button>
            )}
            <div className=" text-secondary flex w-48 p-3">
                <img src={logodark} alt="logo" className="hidden md:block w-auto h-full p-1 mr-2"></img>
                <img src={logowhite} alt="logo" className="md:hidden w-auto h-full p-1 mr-2"></img>
                {/* <span className="hidden md:block font-bold">IDFC FIRST <br/> Bank</span>  */}
            </div>
            <button className="flex items-center gap-2 pr-2" onClick={handleLogout}>
                <img src={user_logo} alt="user" className="w-10 "></img>
                <span className="text-primary md:text-gray-500 pr-2">{(logged || sessionStorage.getItem('otp'))?'Logout':'Login'}</span> 
                <span className="hidden md:block"><KeyboardArrowDownIcon style={{ fontSize: '2rem', color: 'gray' }} /></span>
                
            </button>
        </header>
    )
}
export default Header