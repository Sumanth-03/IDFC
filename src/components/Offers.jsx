import React, {useEffect, useState, useRef} from "react";
import * as yup from 'yup';
import Button from '@mui/material/Button';
import Logo from '../assets/Logo.svg'
import Logomixed from '../assets/logomixed.svg'
import mail from '../assets/mail.svg'
import message from '../assets/message.svg'

import CircularProgress from '@mui/material/CircularProgress';
import mailMobile from '../assets/mail_1.svg'
import messageMobile from '../assets/message_1.svg'

import { Dialog, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

import zee5 from '../assets/zee5.svg'
import audible from '../assets/audible.svg'
import lenscart from '../assets/lenscart.svg'
import gana from '../assets/gana.svg'
import hotstar from '../assets/hotstar.svg'

import { Snackbar, Alert } from '@mui/material';
import { useLocation, useNavigate } from "react-router-dom";

import { sendMail } from "../utils/sendMail";
import { RedeemAccordion } from "../utils/RedeemAccordion";
import { CopyButton } from "../utils/copyButton";

import { makeApiCallGet, makeApiCall, makeApiCallWithAuth, makeApiGetCallWithAuth, makeSwinkApiCallWithAuth } from '../Services/Api' 

export const offerIds = {
    'Disney+ Hotstar': 1,
    'ZEE5':4,
    'AUDIBLE':3
}

function Offers (){
    const location = useLocation();
    let {coupondeet} = location.state || []
    const [open, setOpen] = useState()
    const [openalert, setOpenalert] = useState()
    const [openEmailDailog, setOpenEmailDailog] = useState()
    const [offer, setOffer] = useState()
    const [email, setEmail] = useState('')
    const [alertType, setalertType] = useState('')
    const [error, setError] = useState("");
    const [loader, setLoader]  = useState(false)
    
    const [coupondeets, setCoupondeets] = useState(() => {
        try {
          if (coupondeet) {
            return JSON.parse(coupondeet);
          } else {
            const storedCoupondeet = sessionStorage.getItem('coupondeet');
            console.log(typeof(JSON.parse(storedCoupondeet)), storedCoupondeet)
            console.log(JSON.parse(storedCoupondeet))
            return storedCoupondeet ? JSON.parse(storedCoupondeet) : [];
          }
        } catch (e) {
          console.error("Error parsing coupondeet:", e);
          return [];
        }
      })
    const navigate = useNavigate()
    // to avoid calling api on change of page
    const [couponcodes, setCouponcodes] = useState(() => {
        const storedCodes = sessionStorage.getItem('couponcodes');
        return storedCodes ? JSON.parse(storedCodes) : {}; 
    });

    const getCode = (offerTitle)=>{
        makeApiCallWithAuth('viewCoupon',{'offerId':offerIds[offerTitle]})
        .then((response)=>{
            let coupon = sessionStorage.getItem('couponcodes');
            coupon = coupon ? JSON.parse(coupon) : {};
            const updatedCoupon = {
                ...coupon,
                [offerTitle]: response?.data?.data?.couponcode || response?.data?.data?.coupon,
            };
            sessionStorage.setItem('couponcodes', JSON.stringify(updatedCoupon));
            setCouponcodes((preObj)=>{
                return {...preObj, [offerTitle]:(response?.data?.data?.couponcode || response?.data?.data?.coupon)}
            })
        })
        .catch((err)=>{
            console.error(err)
        })
    }
    
    const handleClick = (offer)=>{
        navigate('/offerDetails',{state:{offer,couponcodes}})
    }
    const handleClickDailog = (offer)=>{
        if(offer){
            setOffer(offer)
        }
        setOpen((pre)=>!pre)
    }

    const handleClosealert = ()=>{
        setOpenalert(false)
    }
    const handlesetOpenalert = (type)=>{
        setOpenEmailDailog(false)
        setOpenalert(true)
        setalertType(type)
    }

    const handleClickEmailDailog = ()=>{
        setEmail('')
        setOpenEmailDailog((pre)=>!pre)
    }

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    const emailSchema = yup.string()
    .email("Please enter a valid email address")
    .required("Email is required");

    const handleChangeEmail = async (e,Blur=false) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        if(Blur){
            try {
                await emailSchema.validate(newEmail);
                setError(""); 
            } catch (validationError) {
                setError(validationError.message); 
            }
        }
    };

    // useEffect(() => {
    //     const handleBackButton = (event) => {
    //         window.history.pushState(null,null, window.location.href);
    //         window.history.forward()
    //     };
    //     window.addEventListener('popstate', handleBackButton);
    //     window.history.pushState(null,null, window.location.href);
    //     return () => {
    //       window.removeEventListener('popstate', handleBackButton);
    //     };
    // }, [navigate]);

    useEffect(() => {
    if (coupondeet) {
        sessionStorage.setItem('coupondeet', JSON.stringify(coupondeets));
    }
    }, [location]);
    console.log(coupondeets)
    return(
    <>
        <section className="flex flex-col justify-center gap-3 lg:block w-full p-5 py-10 bg-secondary text-primary md:rounded-2xl relative text-center md:text-left pb-32 md:pb-10">
        <h1 className="text-3xl md:text-5xl font-semibold md:max-w-[80%] lg:max-w-[60%]" style={{lineHeight:'1.2'}}>
        Congrats! You’ve redeemed the ₹ 1 deal.
        </h1>
        <p className="md:max-w-[80%] lg:max-w-[60%] text-xl pt-5">
        You can use your coupon code now or save it for later by choosing to send it to your email id.
        </p>
        <div className="lg:absolute right-5 top-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 text-center">
        <img src={Logo} alt="logo" className="hidden lg:block h-32 absolute right-10 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></img>
        <div className="flex md:flex-row lg:flex-col p-2 gap-2 max-w-[600px] text-center justify-center">
        <Button onClick={handleClickEmailDailog} sx={{backgroundColor:'#951B24', color:'#ffffff', borderRadius:'10px', paddingX:'20px', paddingY:'10px',textTransform:'capitalize',border:'1px solid white'}}>
            <img src={mail} className="hidden "></img><img src={mailMobile} className="pr-2"></img>
            <span  className="block"> Email My Codes</span>
        </Button>
        {/* <Button onClick={()=>handlesetOpenalert('SMS')} sx={{backgroundColor:{xs:'#951B24',},'@media (min-width: 768px)':{backgroundColor:'#ffffff'}, color:'#951B24', borderRadius:'10px', paddingX:'20px', paddingY:'10px',paddingBottom:'5px',border:'1px solid white'}}>
            <img src={message} className="hidden md:block"></img><img src={messageMobile} className="md:hidden"></img>
            <span className="hidden md:block">SMS My Code</span>
        </Button> */}
        </div>
        </div>
        </section>
        <section className="flex flex-col sm:flex-row flex-wrap gap-2 justify-center items-center bg-white rounded-t-3xl md:rounded-t-none -translate-y-24 md:translate-y-0">
            {coupondeets && coupondeets.map((offer)=>{
                return(
                    <div className="flex flex-col gap-3 md:m-2 shadow-md md:shadow-xl p-5 md:rounded-xl my-5 md:my-10 md:mx-2 w-[95%] rounded-md md:w-[20rem]">
                    <div className="flex md:flex-col gap-3">
                    <img src={offer.icon} alt="icon" className="w-16"></img>
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-600 text-lg">{offer?.offerTitle}</p>
                        <p className="text-lg font-semibold">{offer?.offer}</p>
                        <p className="md:hidden  text-gray-400">{offer?.desclaimer}</p>
                    </div>
                    </div> 
                    {offer?.offerTitle != 'Disney+ Hotstar' && 
                    <><p className="text-sm md:hidden">Copy this code and use it during your purchase</p>
                    <div className={`flex  gap-2  border-2  m-auto w-full ${couponcodes[offer?.offerTitle] ? "p-2 justify-between border-dashed w-full" : 'bg-secondary  text-white justify-center' }  rounded-lg border-secondary`}>
                        <p className={`text-secondary ${couponcodes[offer?.offerTitle] ? '' : 'hidden'}`}>{couponcodes?.[offer?.offerTitle]}</p>
                        <span className={`${couponcodes[offer?.offerTitle] ?  '' : 'inline-block w-full'}`}>
                            <span className={`  ${couponcodes[offer?.offerTitle] ? '' : 'hidden'}`}><CopyButton className='' textToCopy={couponcodes?.[offer?.offerTitle]}></CopyButton></span>
                            <span className={`inline-block w-full text-center p-1 ${couponcodes[offer?.offerTitle] ?  'hidden' : ''} `}onClick={()=>getCode(offer?.offerTitle)}>Get Code</span>
                        </span>
                    </div></>
                     }
                    <div className="hidden md:block text-center pt-3">
                    <Button variant="contained" onClick={()=>handleClick(offer)} sx={{backgroundColor:'#951B24', textTransform:'initial' , width:'100%',borderRadius:'0.65rem'}}>
                        Offer Details & Redeem
                    </Button>
                    </div>
                    <div className="md:hidden text-center w-full pt-3">
                    <Button variant="contained" onClick={()=>handleClickDailog(offer)} sx={{backgroundColor:'#951B24', textTransform:'initial', width:'100%',borderRadius:'0.65rem'}}>
                        Offer Details & Redeem
                    </Button>
                    </div>
                </div>
                )
            })}
        </section>
        <Dialog
            open={open}
            onClose={handleClickDailog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            inert
            PaperProps={{
                style: {
                    position:'absolute',
                    //top:0,
                    bottom:375,
                    borderRadius: '1rem',
                    padding:'10px',
                    background: 'radial-gradient(circle at top,  #EAD0D2, #f9f0f0, #FFFFFF)',
                    overflow:'visible'
                },
            }}
            
        >
            <div className="flex flex-col items-center pb-5">
                <img src={offer?.icon}className="w-20 py-3"></img>
                <p className="font-semibold text-2xl mb-3">{offer?.offerTitle}</p>
                <p className="text-xl font-medium text-gray-600 text-center">{offer?.offer} worth ₹ {offer?.value}</p>
                <p className="text-lg text-gray-500">{offer?.desclaimer}</p>
            </div>
        </Dialog>
        <Dialog
            open={open}
            onClose={handleClickDailog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            //ref={element2Ref}
            PaperProps={{
                style: {
                    maxHeight:'100vh',
                    overflowY:'auto',
                    position:'absolute',
                    bottom:0,
                    borderRadius: '1rem',
                    padding:'10px',
                    //background: 'radial-gradient(circle at top,  #EED7D8, #FFFFFF, #FFFFFF)',
                    
                    margin:0,
                    width:'100%'
                },
            }}
            slotProps={{
                backdrop: {
                    style: {
                        backdropFilter: 'none', 
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                    },
                },
            }}
        >  
            <div className="flex flex-col mt-3">
                <h1 className="text-xl font-semibold">About <span className="capitalize"> {offer?.offerTitle ? offer?.offerTitle.toLowerCase() : ''}</span></h1>
                <p className="font-medium mb-3">{offer?.discription}</p>
                {offer?.offerTitle != 'Disney+ Hotstar' &&
                <>
                <p className="font-light text-gray-600">Copy this code and use it during your purchase</p>
                <div className={`flex  gap-2  border-2  m-auto  my-2 ${couponcodes[offer?.offerTitle] ? " p-2 justify-between border-dashed w-full" : 'w-[90%] bg-secondary  text-white justify-center' }  rounded-lg border-secondary`}>
                        <p className={`text-secondary ${couponcodes[offer?.offerTitle] ? '' : 'hidden'}`}>{couponcodes?.[offer?.offerTitle]}</p>
                        <span className={`${couponcodes[offer?.offerTitle] ?  '' : 'inline-block w-full'}`}>
                            <span className={`  ${couponcodes[offer?.offerTitle] ? '' : 'hidden'}`}><CopyButton className='' textToCopy={couponcodes?.[offer?.offerTitle]}></CopyButton></span>
                            <span className={`inline-block w-full text-center p-1 ${couponcodes[offer?.offerTitle] ?  'hidden' : ''} `}onClick={()=>getCode(offer?.offerTitle)}>Get Code</span>
                        </span>
                </div>
                </>    
                }
                <RedeemAccordion redeemSteps={offer?.redeemSteps} terms={offer?.terms}></RedeemAccordion>
                <div className="text-center pt-3 my-3 text-lg font-semibold sticky bottom-0">
                    <Button variant="contained"  sx={{borderRadius:'10px',backgroundColor:'#951B24', textTransform:'initial', width:'90%', fontSize:'1.2rem'}} onClick={()=>{window.open(offer.offerLink)}}>
                    Visit&nbsp;
                    <span style={{ textTransform: 'capitalize' }}>
                    {offer?.offerTitle ? offer.offerTitle.toLowerCase() : ''}
                    </span>&nbsp;to claim
                    </Button>
                </div>
                <div className="relative">
                <IconButton
                aria-label="close"
                onClick={handleClickDailog}
                sx={() => ({
                    position: 'fixed',
                    right:'10px',
                    top:'10px',
                    color: '#000',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                })}
                >
                    <CloseIcon />
                </IconButton>
                </div>
            </div>
        </Dialog>

        <Dialog
            open={openEmailDailog}
            onClose={handleClickEmailDailog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            PaperProps={{
                style: {
                    position:'absolute',
                    bottom:'20rem',
                    borderRadius: '1rem',
                    padding:'10px',
                    background: 'radial-gradient(circle at top,  #EAD0D2, #f9f0f0, #FFFFFF)',
                    overflow:'visible'
                },
            }}
        >
            <div className=" text-secondary flex w-48 py-2 ">
                <img src={Logomixed} alt="logo" className="hidden md:block w-auto h-full p-1 mr-2"></img>
                <img src={Logomixed} alt="logo" className="md:hidden w-auto h-full p-1 mr-2"></img>
                {/* <span className="hidden md:block font-bold">IDFC FIRST <br/> Bank</span> */}
            </div>
            <IconButton
                aria-label="close"
                onClick={handleClickEmailDailog}
                sx={() => ({
                    position: 'absolute',
                    right:10,
                    color: '#000',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                })}
            >
                <CloseIcon />
            </IconButton>
            <div className="flex flex-col  pb-5 min-h-30 ">
                <p className="font-semibold text-lg text-left">Enter your email :</p>
                <input
                type="email"
                value={email}
                onChange={(e)=>handleChangeEmail(e)}
                onBlur={(e)=>handleChangeEmail(e,true)}
                className={`px-2 py-1 w-full border ${
                    error ? "!border-red-500" : "!border-gray-300"
                } rounded-lg mt-2 min-w-60 md:min-w-96`}
                autoFocus
            />
            {error && (
                <span className="text-red-500 text-sm mt-1">{error}</span>
            )}
                <button disabled={error} onClick={()=>sendMail(email,handlesetOpenalert,setOpenEmailDailog,setLoader)} className="bg-secondary py-1 rounded-2xl text-white mt-6 w-full">{loader ? <CircularProgress color="#fff" size={20}/> : 'Email My Code'}</button>
            </div>
        </Dialog>

        <Snackbar open={openalert} autoHideDuration={2000} onClose={handleClosealert}  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert
            onClose={handleClosealert}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
        >
            {`${alertType} sent successfully` }
        </Alert>
        </Snackbar>
        
    </>
    
    )
}
export default Offers

