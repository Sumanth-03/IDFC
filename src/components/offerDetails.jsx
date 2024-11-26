import React ,{useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import mail from '../assets/mail.svg'
import { CopyButton } from "./Offers";
import audible from '../assets/audible.svg'
import Button from '@mui/material/Button';

import Logomixed from '../assets/logomixed.svg'
import { Snackbar, Alert } from '@mui/material';
import { RedeemAccordion } from "./Offers";

import { Dialog, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

//import { sendRedeemCodeEmail, handleSendRedeemCode } from "./Offers";

function OfferDetails (){
    const [openEmailDailog, setOpenEmailDailog] = useState()
    const [email, setEmail] = useState('')
    const [alertType, setalertType] = useState('')
    const [openalert, setOpenalert] = useState()

    //----dummy
    const [ couponcods, setCouponcods ] = useState({}) 
    const getCode = (offerTitle,code)=>{
        setTimeout(() => {
            setCouponcods((preObj)=>{
                return {...preObj, [offerTitle]:code}
            })
        }, 500);
    }

    const handleClosealert = ()=>{
        setOpenalert(false)
    }
    const handlesetOpenalert = (type)=>{
        setOpenEmailDailog(false)
        setOpenalert(true)
        setalertType(type)
    }
    const location = useLocation()
    const offer = location.state
    // const offer = {
    //     icon:audible,
    //     offerTitle:'AUDIBLE',
    //     offer:'Free 2 months subscription ',
    //     value:'398',
    //     code:'CHEGGIDFCZEP08128JOY'
    // }
    const handleClickEmailDailog = ()=>{
        setOpenEmailDailog((pre)=>!pre)
    }
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    console.log(offer)
    return(
        <main className="flex flex-col md:flex-row ">
            <section className="flex flex-col gap-3 md:w-1/2 p-2 m-2 border rounded-lg ">
                <div className="flex justify-between pt-7">
                    <div>
                        <img src={offer.icon} alt='icon' className="w-10"></img>
                        <p>{offer.offerTitle}</p>
                    </div>
                    <Button onClick={handleClickEmailDailog} sx={{backgroundColor:'#f5e8e9', color:'#951B24', borderRadius:'10px', paddingX:'20px',paddingY:'0px',height:'40px',border:'1px solid #951B24' }}>
                        <img src={mail}></img>
                        <span className="hidden md:block">Email</span>
                    </Button>
                </div>
                <p className="text-2xl font-semibold">{offer.offer} worth ₹ {offer.value}</p>
                
                {offer?.code &&
                    <>
                    <p className="text-xs">Copy this code and use it during your purchase at {offer.offerTitle}</p>
                    <div className={`flex  gap-2  border-2  w-full ${couponcods[offer.offerTitle] ? "p-2 justify-between border-dashed w-full" : 'bg-secondary  text-white justify-center' }  rounded-lg border-secondary`}>
                        <p className={`text-secondary ${couponcods[offer.offerTitle] ? '' : 'hidden'}`}>{offer.code}</p>
                        <span className={`${couponcods[offer.offerTitle] ?  '' : 'inline-block w-full'}`}>
                            <span className={`  ${couponcods[offer.offerTitle] ? '' : 'hidden'}`}><CopyButton className='' textToCopy={offer.code}></CopyButton></span>
                            <span className={`inline-block w-full text-center p-1 ${couponcods[offer.offerTitle] ?  'hidden' : ''} `}onClick={()=>getCode(offer.offerTitle,offer.code)}>Get Code</span>
                        </span>
                    </div>
                    </>
                     }
                <div className="text-center pt-3 w-[100%]">
                    <Button variant="contained"  onClick={()=>{window.open(offer.offerLink)}} sx={{backgroundColor:'#2dac13', textTransform:'initial', width:'100%'}}>
                        Redeem Now
                    </Button>
                </div>

                <div className="my-10 ">
                   <RedeemAccordion redeemSteps={offer?.redeemSteps} terms={offer?.terms}></RedeemAccordion>
                </div>
            </section>
            <section className='md:w-1/2 h-[calc(100vh-64px)] flex' style={{background: 'linear-gradient(to bottom, #0a2943, #010e19)'}}>
                    <img src={offer?.banner} alt="banner" className="w-full"></img>
            </section>
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
        </main>
    )
}
export default OfferDetails