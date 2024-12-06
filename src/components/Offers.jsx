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

    //----dummy
    const [ couponcods, setCouponcods ] = useState({}) 
    const getCode = (offerTitle,code)=>{
        setTimeout(() => {
            setCouponcods((preObj)=>{
                return {...preObj, [offerTitle]:code}
            })
        }, 500);
    }
    //----
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

    let offers = [
        //{
        //     icon:lenscart,
        //     offerTitle:'LENSKART',
        //     offer: "Free 1 Year Gold Membership",
        //     value:'500',
        //     code: coupondeets[4].coupon,
        //     offerLink: coupondeets[4].redeemurl,
        //     desclaimer:'Hurry! This offer expires in 45 days!',
        //     discription:'Premium eyewear solutions with stylish frames and lenses',
        //     terms : [
        //          'Membership is valid for 365 days from the date of purchase.',
        //          'Enhance the joy of Membership by extending it to your cherished friends and family by sharing your membership benefits',
        //         ' Buy 1 Get 1 Free is valid on Vincent Chase, Lenskart Air, John Jacobs, Hooper & New Balance (for Eyeglasses & Sunglasses).',
        //          'Buy One Get One can be availed on Eyeglasses+Sunglasses / Eyeglasses+Eyeglasses / Sunglasses+Sunglasses.',
        //          'Membership benefits can be availed 2 times a month.',
        //         ' Membership benefits are applicable across App, Website , 1500+ Stores & Home Try-On services.',
        //         ' Membership cannot be returned or refunded.',
        //          'Both products need to be added in cart to avail Buy One Get One',
        //          'Convenience fee of 49 will be applied at checkout.',
        //          'Membership can be redeemed through online transactions only.',
        //          'Lenskart.com reserves the right to change/modify terms and conditions of the coupon.',
        //     ],
        //     redeemSteps : [
        //        ' Visit- https://www.lenskart.com/lenskart-gold-membership.html?utm_source=oct24idfc&utm_medium=affiliate&utm_campaign=oct24idfc',
        //         'Add gold membership to your cart.',
        //         'Apply promo code at checkout page under tab  Have a voucher'
        //     ]
        // },
        {
            icon:audible,
            offerTitle:'AUDIBLE',
            offer:'Free 2 months subscription',
            value:'398',
            code: coupondeets[2]?.coupon,
            offerLink: coupondeets[2]?.redeemurl,
            desclaimer:'Valid till 11th November 2024',
            discription:'Leading producer and provider of audio storytelling',
            terms : [
               ' This is a promotional offer ("Offer") provided and funded by Audible Singapore Private Limited ("Audible").',
               ' These Offer terms and conditions ("Offer Terms") are in addition to the Audible.in Conditions of Use (available here) and Privacy Policy (available here), to which you agree by using Audible.in and/ or by availing the Offer. In the event of any conflict between the Audible.in Conditions of Use and these Offer Terms, these Offer Terms will prevail in respect of this Offer only.',
                'This Offer will be available from 1st October 2024 Ò 31st August 2025(both days included) (collectively "Offer Period"). Notwithstanding anything contained herein, Audible shall have the right to revoke the Offer at any time without any prior written notice and without any liability, in this regard.',
                'Each user who fulfills the criteria mentioned in Sections 5 and 6 below (each such user an "Eligible Customer") will be eligible to receive a trial Audible membership of 2 months at no cost ("Benefit"). Post the 2 months period, the Eligible Customers will move to paid Audible membership and charged at the rate of the then prevailing subscription price.',
                'You may only avail this Offer if you: (a) are located in India; and (b) are 18 years or above. It is clarified that this Offer is not valid for existing members of Audible.',
               ' During the Offer Period, all the users who either (a) copy the voucher codes displayed to them and redeem them on https://audible.in/cheggout or (b) click on the redemption link made available to them and subsequently undertake the sign-up process appearing on the landing page of such link, will be eligible to receive the Benefit.',
                'It is clarified that at the time of sign-up by the Eligible Customer, an amount of INR 2 will be deducted using the selected payment instrument by the customer, as a validation of such payment instrument. Such deduction of INR 2 shall be non-refundable.',
                'An Eligible Customer will be eligible to receive the Benefit under this Offer only once.',
                'There are no cash or other alternatives available in whole or in part, in relation to the Benefit under this Offer.',
                 'All applicable taxes and levies in relation to the Offer, including without limitation sales tax, service tax, goods and services tax etc., shall be payable by you/ the Eligible Customer.',
                 'Audible reserves the absolute right to withdraw and/or alter any of the terms and conditions of the Offer at any time without prior notice and reserves the right to remove / withdraw this Offer at any time without any prior notice.',
                 'This Offer cannot be combined with any other offer.',
                 'Any queries in relation to the Offer and / or the Benefit should be addressed to the Audible Support team.',
                 'You are not bound in any manner to participate in or avail the Offer. This Offer is being made purely on a "best effort" basis and participating in or availing the Offer is voluntary.',
                 'By participating in this Offer, you will be deemed to have accepted these Offer Terms.',
                 'Audible reserves the right to disqualify any Eligible Customer from this Offer if any fraudulent activity is identified as being carried out for the purpose of availing the Offer or if any of the conditions of these Offer Terms are not met.',
                 'Nothing contained in these Offer Terms amounts to a commitment by Audible to conduct further, similar or other offers.',
                 'All decisions of Audible related to the Offer are final and binding. Failure by Audible to enforce any of these Offer Terms, in any instance, will not be deemed to be a waiver of the Offer Terms.',
                 'Nothing contained herein shall prejudice or affect the terms and conditions of any other Offer and/ or Offer Terms.',
                 'These Offer Terms are governed by the laws of India. '
            ],
           redeemSteps : [
            'Copy the voucher code displayed',
            'Visit https://www.audible.in/cheggout or click the redirection link',
            'Enter voucher code in the box labelled "Enter your code here" and click "Redeem now"',
            'Login with your Amazon account and choose credit/debit card or UPI (Super-fast signup with UPI!) for membership sign-up. Rupees Two(Rs. 2) will be charged and your membership starts.',
            'Subscription auto-renews at INR 199/month after the free period. Cancel anytime'
            ]
        },
        {
            icon:zee5,
            offerTitle:'ZEE5',
            offer:"15% Off on annual subscription",
            value:'179/ ₹ 150',
            code: coupondeets[3]?.coupon,
            offerLink: coupondeets[3]?.redeemurl,
            desclaimer:'Valid till 30th November 2024',
            discription:'A leading digital entertainment platform with a wide variety of TV shows, movies, and web series',
            terms : [
                'These Terms and Conditions shall constitute an agreement between ZEE5 and each Customer. By accepting and availing the Offer, the Customer accepts these Terms & Conditions as binding upon him/her.',
                'This offer is non-negotiable and non-binding',
                'This offer is valid in India only',
                'The code is redeemable on ZEE5 Website only',
                'The code can be utilized for one-time transaction only',
                'The code can be used only against ZEE5 Premium HD Annual Plan',
                'This offer is valid for a limited period only',
                'The benefits under this Offer are non-transferable. No exchange or redemption for an equivalent cash amount or in any other form shall be allowed',
                'Apart from these Terms & Conditions, the Customer will also be bound by the Terms of Use (https://www.zee5.com /termsofuse) or any such specific terms and conditions as provided by ZEE5 on their platform for using their services',
                'To the extent permitted by law, ZEE5 or its representatives, employees, directors, officers or agents, shall not be liable for any loss suffered or sustained, to person or property including, but not limited to, consequential (including economic) loss by reason of any act or omission, deliberate or negligent on the part of ZEE5 or its representatives, employees, directors, officers or agents',
               ' ZEE5 reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, this Offer with or without prior notice due to reasons outside its control or otherwise (including, without limitation, in the case of anticipated, suspected or actual fraud)',
                'ZEE5 reserves the right to modify, add or delete any of the Terms and Conditions at any point of time at its sole discretion without serving any prior intimation to the Customers',
                'The invalidity or unenforceability of any part of the Terms and Conditions shall not prejudice or affect the remaining parts of the Terms and Conditions to the extent that it is severable',
                'ZEE5 shall not be responsible and/or liable in any manner whatsoever in case of any failed transaction as part of this offer NOR liable for any failure relating to technical, hardware, software, server, website, or other issues of any kind to the extent that these may prevent the Customer from participating in this offer',
                'By availing this offer, it is deemed that the Customer has agreed to all the terms & conditions mentioned herein',
           ],
           redeemSteps : [
           ' Visit ZEE5 website or click https://as.zee5.com/myaccount /subscription',
            'Login using your mobile number or email id',
            "Click 'Buy Plan'",
           " Enter the code in the section that says, 'Apply Code' and click 'Apply'",
            'Offer will get applied on the respective plan basis the entered code',
            "Click on 'Buy Plan' after the code is applied to complete the transaction",
            'Complete the payment of the discounted amount using the payment option of your choice',
            'Pack will be instantly activated post successful payment transaction',
           ]
        },
        // {
        //     icon:gana,
        //     offerTitle:'Gaana',
        //     offer:"Free 45 days Gaana Plus memebership at ₹ 1",
        //     value:'149',
        //     code: coupondeets[1].coupon,
        //     offerLink: coupondeets[1].redeemurl,
        //     desclaimer:'Valid till 15th October 2025',
        //     discription:'Ad-free music and downloads with Gaana Plus, featuring a vast song and podcast library.',
        //     terms : [
        //          'The offer is valid in the territory of India. ',
        //          'This offer is not transferable. ',
        //          'Offer valid till 15th Oct 2025. ',
        //          'Input of Coupon Code gives the user 45 days subscription of Gaana Plus.' ,
        //          'This coupon code will only work once per user.'
        //    ],
        //    redeemSteps : [
        //    ' Sign in on the Gaana App ',
        //     'Navigate to ì https://gaana.onelink.me/35m8/scratchcard î your browser ',
        //    ' Enter the Unique Coupon Code ',
        //    ' Make a transaction of Rs 1 to activate the subscription ',
        //    ' Enjoy your 45 days Gaana Plus Subscription. ',
        //     'In case you are not logged in on web/wap/app, you would need to login first and then enter - https://gaana.onelink.me/35m8/scratchcard'
        //    ]
        // },
        
        {
            icon:hotstar,
            offerTitle:'Hotstar',
            offer:"Get 25% Off on 3 Month Super Plan MRP - Rs. 299 ",
            value:'75',
            code: coupondeets[0]?.coupon,
            offerLink: coupondeets[0]?.redeemurl,
            desclaimer:'Valid till 31th March 2025',
            discription:'Stream TV shows, movies, and live sports on Hotstar, your entertainment hub.',
            terms : [
                 'Offer is applicable for first time subscribers only',
                 'In case of any dispute, the decision made by SIPL would be final and binding',
                ' SIPL reserves the right to modify or amend the terms and conditions without any prior notice and such modifications shall be binding on the user',
                 'Please refer to our https://www.hotstar.com/tnc/in for more information regarding the Disney+ Hotstar Service in general'
           ],
           redeemSteps : [
           ]
        },
    ]
    console.log("ggg", offers)
    
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
                        <p className="text-gray-600 text-lg">{offer.offerTitle}</p>
                        <p className="text-lg font-semibold">{offer.offer}</p>
                        <p className="md:hidden  text-gray-400">{offer?.desclaimer}</p>
                    </div>
                    </div> 
                    {offer.code && 
                    <><p className="text-sm md:hidden">Copy this code and use it during your purchase</p>
                    <div className={`flex  gap-2  border-2  m-auto w-full ${couponcods[offer.offerTitle] ? "p-2 justify-between border-dashed w-full" : 'bg-secondary  text-white justify-center' }  rounded-lg border-secondary`}>
                        <p className={`text-secondary ${couponcods[offer.offerTitle] ? '' : 'hidden'}`}>{offer.code}</p>
                        <span className={`${couponcods[offer.offerTitle] ?  '' : 'inline-block w-full'}`}>
                            <span className={`  ${couponcods[offer.offerTitle] ? '' : 'hidden'}`}><CopyButton className='' textToCopy={offer.code}></CopyButton></span>
                            <span className={`inline-block w-full text-center p-1 ${couponcods[offer.offerTitle] ?  'hidden' : ''} `}onClick={()=>getCode(offer.offerTitle,offer.code)}>Get Code</span>
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
                <h1 className="text-xl font-semibold">About <span className="capitalize"> {offer?.offerTitle ? offer.offerTitle.toLowerCase() : ''}</span></h1>
                <p className="font-medium mb-3">{offer?.discription}</p>
                {offer?.code &&
                <>
                <p className="font-light text-gray-600">Copy this code and use it during your purchase</p>
                <div className={`flex  gap-2  border-2  m-auto  my-2 ${couponcods[offer.offerTitle] ? " p-2 justify-between border-dashed w-full" : 'w-[90%] bg-secondary  text-white justify-center' }  rounded-lg border-secondary`}>
                        <p className={`text-secondary ${couponcods[offer.offerTitle] ? '' : 'hidden'}`}>{offer.code}</p>
                        <span className={`${couponcods[offer.offerTitle] ?  '' : 'inline-block w-full'}`}>
                            <span className={`  ${couponcods[offer.offerTitle] ? '' : 'hidden'}`}><CopyButton className='' textToCopy={offer.code}></CopyButton></span>
                            <span className={`inline-block w-full text-center p-1 ${couponcods[offer.offerTitle] ?  'hidden' : ''} `}onClick={()=>getCode(offer.offerTitle,offer.code)}>Get Code</span>
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

