import React, {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import Logo from '../assets/Logo.svg'
import mail from '../assets/mail.svg'
import message from '../assets/message.svg'

import { Dialog, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

import zee5 from '../assets/zee5.svg'
import audible from '../assets/audible.svg'
import lenscart from '../assets/lenscart.svg'

import Tooltip from '@mui/material/Tooltip';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Snackbar, Alert } from '@mui/material';
import { useNavigate } from "react-router-dom";

const offers = [
    {
        icon:zee5,
        offerTitle:'ZEE5',
        offer:'3 month subscription',
        value:'1000',
        code:'CHEGGIDFCZEP08128JOY',
        offerLink:'https://www.zee5.com'
    },
    {
        icon:lenscart,
        offerTitle:'LENSKART',
        offer:'2 month subscription',
        value:'1600',
        code:'CHEGGIDFCZEP08128JOY',
        offerLink:'https://www.lenskart.com'
    },
    {
        icon:audible,
        offerTitle:'AUDIBLE',
        offer:'Free 2 months subscription ',
        value:'398',
        code:'CHEGGIDFCZEP08128JOY',
        offerLink:'https://www.audible.in'
    }
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
    const [offer, setOffer] = useState()
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

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    return(
    <>
        <section className="flex flex-col justify-center gap-3 lg:block w-full p-5 py-10 bg-secondary text-primary rounded-2xl relative text-center md:text-left pb-32 md:pb-10">
        <h1 className="text-3xl md:text-5xl font-semibold md:max-w-[80%] lg:max-w-[60%]" style={{lineHeight:'1.2'}}>
        Congrats! You’ve redeemed the ₹ 1 Rupee deal.
        </h1>
        <p className="md:max-w-[80%] lg:max-w-[60%] text-xl pt-5">
        You can use your coupon code now or save it for later by choosing to send it to your email or mobile number.
        </p>
        <div className="lg:absolute right-5 top-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 text-center">
        <img src={Logo} alt="logo" className="hidden lg:block h-32 absolute right-10 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></img>
        <div className="flex md:flex-row lg:flex-col p-2 gap-2 max-w-[600px] text-center justify-center">
        <Button sx={{backgroundColor:'#ffffff', color:'#951B24', borderRadius:'10px', paddingX:'20px', paddingY:'10px'}}>
            <img src={mail}></img>
            <span className="hidden md:block">Email My Code</span>
        </Button>
        <Button sx={{backgroundColor:'#ffffff', color:'#951B24', borderRadius:'10px', paddingX:'20px', paddingY:'10px',paddingBottom:'5px'}}>
            <img src={message}></img>
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
                    <div className="flex gap-2 border-dashed border-2 p-2 border-secondary rounded-lg">
                        <p>{offer.code}</p>
                        <CopyButton textToCopy={offer.code}></CopyButton>
                    </div>
                    <div className="hidden md:block text-center pt-3">
                    <Button variant="contained" onClick={()=>handleClick(offer)} sx={{backgroundColor:'#951B24', textTransform:'initial' , width:'100%',borderRadius:'0.65rem'}}>
                        View Details & Redeem
                    </Button>
                    </div>
                    <div className="md:hidden text-center w-full pt-3">
                    <Button variant="contained" onClick={()=>handleClickDailog(offer)} sx={{backgroundColor:'#951B24', textTransform:'initial', width:'100%'}}>
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
            <IconButton
                aria-label="close"
                onClick={handleClickDailog}
                sx={() => ({
                    position: 'absolute',
                    right:10,
                    top:'-28vh',
                    color: '#000',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                })}
            >
                <CloseIcon />
            </IconButton>
            <div className="flex flex-col items-center pb-5">
                <img src={offer?.icon}className="w-20 py-5"></img>
                <p className="font-semibold text-2xl">{offer?.offerTitle}</p>
                <p className="text-2xl font-semibold text-gray-600 text-center">{offer?.offer} worth ₹ {offer?.value}</p>
                <p className="text-lg text-gray-500">Valid till 27th december 2024</p>
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
                <p className="font-semibold mb-3">Leading producer and provider of audio storytelling</p>
                <p className="font-light text-gray-700">Copy this code and use it during your purchase</p>
                <div className="flex gap-2 border-dashed border-2 p-2 border-secondary rounded-lg my-2 mb-4 justify-between" style={{color:'#9c1d26',borderColor:'#9c1d26'}}>
                        <p className="text-secondary font-semibold">{offer?.code}</p>
                        <CopyButton textToCopy={offer?.code}></CopyButton>
                </div>
                <h1 className="text-xl font-medium">Terms & conditions</h1>
                <p className=" text-gray-800">Eligible Customer at the time of signing up for&nbsp;  
                    <span style={{ textTransform: 'capitalize' }}>
                        {offer?.offerTitle?.toLowerCase()}
                    </span>&nbsp;
                </p>
                <div className="text-center pt-3 my-3 text-lg font-semibold">
                    <Button variant="contained"  sx={{backgroundColor:'#951B24', textTransform:'initial', width:'90%', fontSize:'1.2rem'}} onClick={()=>{window.open(offer.offerLink)}}>
                    Visit&nbsp;
                    <span style={{ textTransform: 'capitalize' }}>
                    {offer?.offerTitle ? offer.offerTitle.toLowerCase() : ''}
                    </span>&nbsp;
                    to claim
                    </Button>
                </div>
            </div>
        </Dialog>
    </>
    
    )
}
export default Offers
