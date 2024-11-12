import React, {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import Logo from '../assets/Logo.svg'
import Logomixed from '../assets/logomixed.svg'
import mail from '../assets/mail.svg'
import message from '../assets/message.svg'

import mailMobile from '../assets/mail_1.svg'
import messageMobile from '../assets/message_1.svg'

import { Dialog, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

import zee5 from '../assets/zee5.svg'
import audible from '../assets/audible.svg'
import lenscart from '../assets/lenscart.svg'
import gana from '../assets/gana.svg'
import hotstar from '../assets/hotstar.svg'

import Tooltip from '@mui/material/Tooltip';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Snackbar, Alert } from '@mui/material';
import { useNavigate } from "react-router-dom";

import emailjs from 'emailjs-com';

// export const sendRedeemCodeEmail = (email, redeemCode) => {
//     const serviceID = 'service_2ua4a3a'; 
//     const templateID = 'template_97jd3ny'; 
//     const userID = 'FhBMyAEf7LN1uwIOr';

//     const templateParams = {
//         user_email: email, 
//         redeem_code: redeemCode,
//     };

//     emailjs.send(serviceID, templateID, templateParams, userID)
//         .then((response) => {
//             console.log('Email sent successfully!', response.status, response.text);
//             alert('Redeem code sent to your email!');
//         })
//         .catch((error) => {
//             console.error('Failed to send email:', error);
//             alert('Failed to send redeem code email.');
//         });
// };

// export const handleSendRedeemCode = (email) => {
//     const userEmail = email;
//     const redeemCode = 'CHEGGIDFCZEP08128JOY'; 
//     //sendRedeemCodeEmail(userEmail, redeemCode);
// };

const offers = [
    {
        icon:lenscart,
        offerTitle:'LENSKART',
        offer: "Free 1 Year Gold Membership worth Rs 500.",
        value:'500',
        code:'CHEGGIDFCZEP08128JOY',
        offerLink: 'https://www.lenskart.com/lenskart-gold-membership.html?utm_source=oct24idfc&utm_medium=affiliate&utm_campaign=oct24idfc',
        desclaimer:'Hurry! This offer expires in 45 days!',
        discription:'Premium eyewear solutions with stylish frames and lenses',
       

    },
    {
        icon:audible,
        offerTitle:'AUDIBLE',
        offer:'Free 2 months subscription',
        value:'398',
        code:'CHEGGIDFCZEP08128JOY',
        offerLink:'https://www.audible.in/cheggout',
        desclaimer:'Valid till 11th November 2024',
        discription:'Leading producer and provider of audio storytelling'
    },
    {
        icon:zee5,
        offerTitle:'ZEE5',
        offer:"15% Off on annual subscription",
        value:'179/ ₹ 150',
        code:'CHEGGIDFCZEP08128JOY',
        offerLink:'https://as.zee5.com/myaccount/subscription',
        desclaimer:'Valid till 30th November 2024',
        discription:'A leading digital entertainment platform with a wide variety of TV shows, movies, and web series'
    },
    {
        icon:gana,
        offerTitle:'Gaana',
        offer:"Free 45 days Gaana Plus memebership at ₹ 1",
        value:'149',
        code:'CHEGGIDFCZEP08128JOY',
        offerLink:' https://gaana.onelink.me/35m8/scratchcard',
        desclaimer:'Valid till 15th October 2025',
        discription:'Ad-free music and downloads with Gaana Plus, featuring a vast song and podcast library.'
    },
    
    {
        icon:hotstar,
        offerTitle:'Hotstar',
        offer:"Get 25% Off on 3 Month Super Plan MRP - Rs. 299 ",
        value:'75',
        code:'CHEGGIDFCZEP08128JOY',
        offerLink:'https://web.hotstar.com/in/onboarding/login?promo=HS_M3M50',
        desclaimer:'Valid till 31th March 2025',
        discription:'Stream TV shows, movies, and live sports on Hotstar, your entertainment hub.'
    },
]


export function CopyButton({ textToCopy }) {
    const [openSnackbar, setOpenSnackbar] = useState(false);
  
    const handleCopy = () => {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setOpenSnackbar(true);
      });
    };
  
    const handleCloseSnackbar = () => {
      setOpenSnackbar(false);
    };
  
    return (
      <>
        <Tooltip title="Copy to clipboard">
          <IconButton onClick={handleCopy} aria-label="copy" sx={{padding:0}}>
            <ContentCopyIcon sx={{color:'#951B24', width:'20px', padding:0}}/>
          </IconButton>
        </Tooltip>
  
        <Snackbar
          open={openSnackbar}
          autoHideDuration={2000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
            Copied to clipboard!
          </Alert>
        </Snackbar>
      </>
    );
  }

function Offers (){
    const [open, setOpen] = useState()
    const [openalert, setOpenalert] = useState()
    const [openEmailDailog, setOpenEmailDailog] = useState()
    const [offer, setOffer] = useState()
    const [email, setEmail] = useState('')
    const [alertType, setalertType] = useState('')
    const navigate = useNavigate()

    const handleClick = (offer)=>{
        navigate('/offerDetails',{state:offer})
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
        setOpenEmailDailog((pre)=>!pre)
    }


    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    return(
    <>
        <section className="flex flex-col justify-center gap-3 lg:block w-full p-5 py-10 bg-secondary text-primary md:rounded-2xl relative text-center md:text-left pb-32 md:pb-10">
        <h1 className="text-3xl md:text-5xl font-semibold md:max-w-[80%] lg:max-w-[60%]" style={{lineHeight:'1.2'}}>
        Congrats! You’ve redeemed the ₹ 1 Rupee deal.
        </h1>
        <p className="md:max-w-[80%] lg:max-w-[60%] text-xl pt-5">
        You can use your coupon code now or save it for later by choosing to send it to your email or mobile number.
        </p>
        <div className="lg:absolute right-5 top-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 text-center">
        <img src={Logo} alt="logo" className="hidden lg:block h-32 absolute right-10 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></img>
        <div className="flex md:flex-row lg:flex-col p-2 gap-2 max-w-[600px] text-center justify-center">
        <Button onClick={handleClickEmailDailog} sx={{backgroundColor:{xs:'#951B24'},'@media (min-width: 768px)':{backgroundColor:'#ffffff'}, color:'#951B24', borderRadius:'10px', paddingX:'20px', paddingY:'10px',border:'1px solid white'}}>
            <img src={mail} className="hidden md:block"></img><img src={mailMobile} className="md:hidden"></img>
            <span  className="hidden md:block"> Email My Code</span>
        </Button>
        <Button onClick={()=>handlesetOpenalert('SMS')} sx={{backgroundColor:{xs:'#951B24',},'@media (min-width: 768px)':{backgroundColor:'#ffffff'}, color:'#951B24', borderRadius:'10px', paddingX:'20px', paddingY:'10px',paddingBottom:'5px',border:'1px solid white'}}>
            <img src={message} className="hidden md:block"></img><img src={messageMobile} className="md:hidden"></img>
            <span className="hidden md:block">SMS My Code</span>
        </Button>
        </div>
        </div>
        </section>
        <section className="flex flex-col sm:flex-row flex-wrap gap-2 justify-center items-center bg-white rounded-t-3xl md:rounded-t-none -translate-y-24 md:translate-y-0">
            {offers.map((offer)=>{
                return(
                    <div className="flex flex-col gap-3 md:m-2 shadow-md md:shadow-xl p-5 md:rounded-xl my-5 md:my-10 md:mx-2 w-[95%] rounded-md md:w-auto">
                    <div className="flex md:flex-col gap-3">
                    <img src={offer.icon} alt="icon" className="w-16"></img>
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-400 text-sm">{offer.offerTitle}</p>
                        <p className="text-lg font-semibold">{offer.offer}</p>
                        <p className="md:hidden  text-gray-400">Valid till 31st december 2024</p>
                    </div>
                    </div>    
                    <p className="text-sm md:hidden">Copy this code and use it during your purchase</p>
                    <div className="flex justify-between gap-2 border-dashed border-2 p-2 border-secondary rounded-lg">
                        <p className="text-secondary">{offer.code}</p>
                        <CopyButton textToCopy={offer.code}></CopyButton>
                    </div>
                    <div className="hidden md:block text-center pt-3">
                    <Button variant="contained" onClick={()=>handleClick(offer)} sx={{backgroundColor:'#951B24', textTransform:'initial' , width:'100%',borderRadius:'0.65rem'}}>
                        View Details & Redeem
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
            <div className="flex flex-col items-center pb-5">
                <img src={offer?.icon}className="w-20 py-5"></img>
                <p className="font-semibold text-2xl">{offer?.offerTitle}</p>
                <p className="text-2xl font-semibold text-gray-600 text-center">{offer?.offer} worth ₹ {offer?.value}</p>
                <p className="text-lg text-gray-500">{offer?.desclaimer}</p>
            </div>
        </Dialog>
        <Dialog
            open={open}
            onClose={handleClickDailog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            PaperProps={{
                style: {
                    position:'absolute',
                    bottom:0,
                    borderRadius: '1rem',
                    padding:'10px',
                    //background: 'radial-gradient(circle at top,  #EED7D8, #FFFFFF, #FFFFFF)',
                    overflow:'visible',
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
                <h1 className="text-xl font-semibold">About <span className="capitalize"> {offer?.offerTitle ? offer.offerTitle.toLowerCase() : ''}</span></h1>
                <p className="font-medium mb-3">{offer?.discription}</p>
                <p className="font-light text-gray-600">Copy this code and use it during your purchase</p>
                <div className="flex gap-2 border-dashed border-2 p-2 border-secondary rounded-lg my-2 mb-4 justify-between" style={{color:'#9c1d26',borderColor:'#9c1d26'}}>
                        <p className="text-secondary font-semibold">{offer?.code}</p>
                        <CopyButton textToCopy={offer?.code}></CopyButton>
                </div>
                <h1 className="text-lg font-medium">Terms & conditions</h1>
                <p className="font-light text-gray-900 text-base">Eligible Customer at the time of signing up for&nbsp;  
                    <span style={{ textTransform: 'capitalize' }}>
                        {offer?.offerTitle?.toLowerCase()}
                    </span>&nbsp;
                </p>
                <div className="text-center pt-3 my-3 text-lg font-semibold">
                    <Button variant="contained"  sx={{borderRadius:'10px',backgroundColor:'#951B24', textTransform:'initial', width:'90%', fontSize:'1.2rem'}} onClick={()=>{window.open(offer.offerLink)}}>
                    Visit&nbsp;
                    <span style={{ textTransform: 'capitalize' }}>
                    {offer?.offerTitle ? offer.offerTitle.toLowerCase() : ''}
                    </span>&nbsp;
                    to claim
                    </Button>
                </div>
                <div className="relative">
                <IconButton
                aria-label="close"
                onClick={handleClickDailog}
                sx={() => ({
                    position: 'absolute',
                    right:'10px',
                    top:'-96vh',
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
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="px-2 py-1 w-full border !border-gray-300 rounded-lg mt-2 min-w-60 md:min-w-96" autoFocus></input>
                <button onClick={()=>handlesetOpenalert('Mail')} className="bg-secondary py-1 rounded-2xl text-white mt-6 w-full">Email My Code</button>
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

