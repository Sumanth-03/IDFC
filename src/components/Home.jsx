import React,{useState, useRef, useEffect} from "react";
import Logo from '../assets/Logo.svg'
import Logomixed from '../assets/logomixed.svg'
import Banner from '../assets/Banner.svg'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Box } from '@mui/material';
import zee5 from '../assets/zee5.svg'
import audible from '../assets/audible.svg'
import lenscart from '../assets/lenscart.svg'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Button from '@mui/material/Button';
import Lock from '../assets/Lock.svg'

import { Dialog, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert } from '@mui/material';
import { current } from "@reduxjs/toolkit";
import { makeApiCallGet, makeApiCall, makeApiCallWithAuth, makeApiGetCallWithAuth, makeSwinkApiCallWithAuth } from '../Services/Api' 


function Home (){
    const [open, setOpen] = useState(true);
    const [terms, setTerms] = useState(false);
    const [OtpDailog, setOtpDailog] = useState(false);
    const [wrongOtp, setwrongOtp] = useState(false);
    const [infoDailog, setinfoDailog] = useState(false)
    const navigate = useNavigate()
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    const [otpValues, setOtpValues] = useState(["", "", "", "",""]);
    const [timeLeft, setTimeLeft]  = useState(10)
    const [resend, setResend]  = useState(false)
    const time = useRef(null);

    const queryParams = new URLSearchParams(window.location.search);
    const hdnRefNumber = queryParams.get('hdnRefNumber');
    const transactionId = queryParams.get('transactionId');
    const amount = queryParams.get('amount');

    useEffect(() => {
        if(transactionId){
          navigate('/offers');
        }
      },[]); 
      
    const offers = [
        {
            icon:zee5,
            offerTitle:'ZEE5',
            offer:'3 month subscription',
            value:'1000',
        },
        {
            icon:lenscart,
            offerTitle:'LENSKART',
            offer:'2 month subscription',
            value:'1600',
        },
        {
            icon:audible,
            offerTitle:'AUDIBLE',
            offer:'Free 2 months subscription ',
            value:'398',
        }
    ]

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseInfo = () => {
        setinfoDailog(false);
    };
    const handleClickOpenInfo = () => {
        if(sessionStorage.getItem('otp')){
        setinfoDailog(true);
        }else{
            setOpen(true);  
        }
    };

    const validationSchema = Yup.object({
        mobileNumber: Yup.string()
          .test(
            'is-numeric',
            "Mobile number must contain only digits",
            (value) => /^[0-9]*$/.test(value || '')
          )
          .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
          .required("Mobile number is required")
      });
    const setDailog2 = (err,touched)=>{
        if(!err.mobileNumber && touched.mobileNumber){
            setOtpDailog(true)
        }
    }  

    const handleChange = (e, index) => {
        const value = e.target.value.slice(-1);
        
        setwrongOtp(false)

        const newOtpValues = [...otpValues];
        newOtpValues[index] = value;
        setOtpValues(newOtpValues);
    
        if (value && index < inputRefs.length - 1) {
          inputRefs[index + 1].current.focus();
        }
      };
    
      const handleClick = (index) => {
        const newOtpValues = [...otpValues];
        newOtpValues[index] = "";
        setOtpValues(newOtpValues);
      };
    
      const handleSubmit = () => {
        const otpCode = otpValues.join('')
        if(otpCode.length === 5){
            console.log(otpCode)
            if(otpCode == '12345'){
                setOpen(false)
                setOtpDailog(false)
                clearInterval(time.current);  
                setTimeLeft(10);
                sessionStorage.setItem('otp', true)
                window.location.reload();
            }else{
                setwrongOtp(true)
                setResend(true)
                if (!time.current) {
                    time.current = setInterval(() => {
                        setTimeLeft((prev) => prev - 1);
                    }, 1000);
                }
            }    
        }
      };

    const resendOtp = ()=>{
        if (!time.current) {
            time.current = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        }
    }



    useEffect(()=>{
        if(sessionStorage.getItem('otp')){
            setOpen(false);
            }
    if (timeLeft === 0) {
        clearInterval(time.current);
        time.current = null;  
        setResend(true)     
        setTimeLeft(10); 
                    
    }
    },[timeLeft])

    const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && !event.target.value && index > 0) {
        inputRefs[index - 1].current.focus();
    }
    };

    useEffect(() => {
    if(OtpDailog){
    inputRefs[0].current.focus();
    }
    }, [OtpDailog]);

    const handlePayment = ()=>{
        let indata ={
            test: "1"
           }
         
        
           makeApiCall('validationCheckDemo', indata)
            .then((response) => {
              console.log(response?.data?.data?.data)
              if(response?.data?.data?.data?.url){
                let paymenturl = response.data.data.data.url;
                //setIsloading(false);
                window.location.href = paymenturl;
                }
              /*else if(response?.data?.data?.data?.errorstring === "Failed"){
                 setIsloading(false);
                 if(!modal){
                  setModal('failed')
                  setErrmessage('Something Went Wrong')
                  setIsloading(false);
                  }
              
              }
              else if(response?.data?.status === 200){
                sessionStorage.setItem('coupon',JSON.stringify(response.data.data))
                setIsloading(false);
                navigate('/offer')
              }
              else{
                setIsloading(false);
                if(!modal){
                  setModal('failed')
                  setErrmessage(response.data?.message)
                  //setIsloading(false);
                  }
              }*/
               
            })
            .catch((e) => {console.log("err", e);setIsloading(false);})
    }

    const poster = (
    <section>
            <img src={Banner} alt="banner" className="mx-auto w-52 py-10"></img>
            <h1 className="text-2xl py-5">What You’ll Need to do!</h1>
            <span className="text-xl relative py-2 -ml-5">1. Ensure your card is activated  
            <Box
                    onClick={handleClickOpenInfo}
                    sx={{ position:'absolute', right:'-30px',top:'35%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white',borderRadius: '50%', 
                        width: 20, height: 20, boxShadow: 1,
                    }}
                    >
                    <QuestionMarkIcon sx={{ color: '#951B24',fontSize:'20px' }} />
                </Box>
            </span><br/>
            <span className="text-xl relative py-2 -ml-5">2. Enable your online transactions
                <Box
                    onClick={handleClickOpenInfo}
                    sx={{ position:'absolute', right:'-30px',top:'35%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white',borderRadius: '50%', 
                        width: 20, height: 20, boxShadow: 1,
                    }}
                    >
                    <QuestionMarkIcon sx={{ color: '#951B24',fontSize:'20px' }} />
                </Box>
            </span>
        </section>
      )
    return(
        <>
        <main className="w-full h-auto md:p-2">
            <section className="w-full md:p-5 py-10 bg-secondary text-primary md:rounded-2xl relative text-center md:text-left ">
                <h1 className="text-2xl font-semibold">
                    The ₹ 1 Store
                </h1>
                <p className="md:max-w-96 text-xl pt-5">
                    Welcome to the store where your favourite<br/> merchant offers are all just for ₹ 1!
                </p>
                <img src={Logo} alt="logo" className="hidden md:block h-24 absolute right-10 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></img>
                <section className="block md:hidden text-center w-full pb-10 md:pb-0 bg-secondary text-white rounded-2xl">
                {poster}
                </section>
            </section>
            <div className="flex flex-col md:flex-row my-5 -translate-y-10 md:translate-y-0  md:static  bg-primary rounded-3xl">
            <section className="text-centerw-full  md:w-1/2 p-5 border-2 md:ml-2 md:mr-4 border-secondary rounded-2xl">
                <h1 className="text-2xl font-bold text-center py-4 pb-12">
                    Total benefits worth ₹2,998 
                </h1>
                <div className="text-left">
                    {offers.map((offer)=>{
                        return(
                            <div className="flex justify-between mb-4 items-center">
                            <div className="flex gap-2 flex-wrap">
                                <img src={offer.icon} className="w-12 h-12"></img>
                                <div className="flex flex-col  justify-center">
                                    <span className="max-w-20">{offer.offerTitle}</span>
                                    <p className="w-full hidden md:block">{offer.offer}</p>
                                </div>
                                <p className="w-full md:hidden">{offer.offer}</p>
                            </div>
                            <div className="flex gap-2">
                                <div className="rounded-full px-4 p-1 bg-turiary text-center flex items-center min-w-32">worth  ₹ {offer.value}</div>
                                <CheckCircleOutlineIcon color="success" sx={{width:'40px',height:'40px'}}/>
                            </div>
                            </div>
                        )
                    })}
                    <p className="text-sm text-gray-400">
                        Unlock exclusive benefits with your IDFC card! As an IDFC FIRST bank cardholder, simply activate your card 
                        for online payments and make a payment of just ₹1 to gain access to great offers from premium brands. Enjoy
                        these exclusive perks and elevate your experience today!
                    </p>
                    <div className="text-center pt-3">
                    <Button onClick={handleClickOpenInfo} variant="contained" sx={{backgroundColor:'#951B24', textTransform:'initial'}}>
                        <img src={Lock} alt ='lock' className="pr-2"></img>
                        Unlock all for Only ₹1 !
                    </Button>
                    </div>
                </div>
            </section>
            <section  className="hidden md:block text-center w-full md:w-1/2 p-5 bg-secondary text-white rounded-2xl"> 
                {poster}
            </section>
            </div>
            
        </main>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            PaperProps={{
                style: {
                    borderRadius: '1rem',
                    padding:'10px',
                    background: 'radial-gradient(circle at top,  #EED7D8, #FFFFFF, #FFFFFF)'
                },
            }}
        >
        <header className="flex justify-between items-center">
            <div className=" text-secondary flex w-48 py-2 ">
                <img src={Logomixed} alt="logo" className="hidden md:block w-auto h-full p-1 mr-2"></img>
                <img src={Logomixed} alt="logo" className="md:hidden w-auto h-full p-1 mr-2"></img>
                {/* <span className="hidden md:block font-bold">IDFC FIRST <br/> Bank</span> */}
            </div>

            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={() => ({
                    position: 'absolute',
                    right:10,
                    top:10,
                    color: '#000',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                })}
            >
                <CloseIcon />
            </IconButton>
        </header>
            
        {!OtpDailog ?
        <section className="flex flex-col items-center p-2 gap-2 relative text-gray-700">
            
                <h1 className="font-bold text-lg ">Enter Registered Mobile Number</h1>
                <div>
                <Formik
                initialValues={{ mobileNumber: '' }}
                validationSchema={validationSchema}
                validateOnChange={true}
                validateOnBlur={true}
                >
                {({ errors, touched }) => (
                    <Form>
                    <label htmlFor="mobileNumber" className="text-sm pb-1">Mobile Number</label><br/>
                    <Field name="mobileNumber" type="text" className={`w-[100%] border-2 p-2 rounded-lg ${errors.mobileNumber && touched.mobileNumber ? 'border-red-500' : 'border-gray-500'}`}/><br/>
                    <ErrorMessage name="mobileNumber" component="div" style={{ color: 'red' }} />
                    <div className="flex py-3">
                    <input type="checkbox" value={terms} onChange={()=>setTerms((pre)=>!pre)}/>
                    <p className="ml-2 text-xs">By continuing, you agree to our <button className="text-blue-700" onClick={()=>navigate('/terms')}>Terms of Use</button> and <button className="text-blue-700" onClick={()=>{navigate('/privacypolicy')}}>Privacy Policy</button>.</p>
                    </div>
                    <div className="text-center pt-3">
                    <Button disabled={!terms} onClick={()=>setDailog2(errors,touched)} variant="contained" sx={{backgroundColor:'#951B24', textTransform:'initial', width:'80%', borderRadius:'10px'}}>
                        Continue
                    </Button>
                    </div>
                    </Form>
                )}
                </Formik>
                </div>
        </section>
        :
        <section className="flex flex-col items-center p-2 gap-2 relative text-gray-700">
            <h1 className="font-bold text-lg ">Please Enter The 5 Digit Code sent to registered mobile number</h1>
            <div className="w-full text-left">
                <label htmlFor="otp" className="text-xs">OTP</label>
                <div className="flex gap-2">
                {inputRefs.map((ref, index) => (
                    <input
                        key={index}
                        type="number"
                        ref={ref}
                        maxLength="1"
                        className="w-8 h-8 border text-center border-gray-500"
                        value={otpValues[index]}
                        onChange={(e) => handleChange(e, index)}
                        onClick={() => handleClick(index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                    />
                ))}
                </div>
                {wrongOtp && <div className="text-red-400 text-xs pt-2">Incorrect OTP</div>}
            </div>
            <div className="text-center pt-3 w-full">
                <Button disabled={!terms} onClick={handleSubmit} variant="contained" sx={{backgroundColor:'#951B24', textTransform:'initial', width:'100%', borderRadius:'10px'}}>
                    Continue
                </Button>
                {resend &&
                <Button disabled={time.current} onClick={resendOtp} sx={{textTransform:'capitalize', width:'100%',paddingX:'0'}}>
                <div  className={`text-gray-500 text-sm mt-2 rounded-lg p-2 w-full ${time.current ? '':'text-secondary'}`}>Resend OTP <span className={`pl-3 text-sm ${time.current ? '':'hidden'}`}>{timeLeft}</span></div>
                </Button>
                }
                
            </div>
        </section>}
        </Dialog>
        <Dialog
            open={infoDailog}
            onClose={handleCloseInfo}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            PaperProps={{
                style: {
                    borderRadius: '1rem',
                    padding:'10px',
                    background: 'radial-gradient(circle at top,  #EED7D8, #FFFFFF, #FFFFFF)'
                },
            }}
        >
        <header className="flex justify-between items-center">
            <div className="h-10"/>
            <IconButton
                aria-label="close"
                onClick={handleCloseInfo}
                sx={() => ({
                    position: 'absolute',
                    right:10,
                    top:10,
                    color: '#000',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                })}
            >
                <CloseIcon />
            </IconButton>
        </header>
        <section className="flex flex-col items-center p-2 gap-2 relative text-gray-700"  
            >
            <h1 className='text-3xl font-semibold' style={{color:'#411518'}}>Just Checking In!</h1>
            <p className='text-lg font-semibold py-3'style={{color:'#411518'}}>Have you activated your card and enabled online transactions?</p>
            <section className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-2 border-0 md:border-r-2  border-r-gray-300 flex flex-col gap-4 text-sm mb-4">
                    <h1 className="text-secondary text-lg font-semibold">Here’s how!</h1>
                    <p>
                        1. Activate Card: Download IDFC FIRST Mobile App {'>'} Go to Credit Cards {'>'} Generate PIN
                    </p>
                    <p>
                        2. Enable Online Transactions: Go to IDFC Mobile Banking App {'>'} Click Card Controls {'>'} Enable Online Transactions
                    </p>
                </div>
                <div className="md:w-1/2 p-2 flex flex-col gap-4 items-center">
                    <h1 className='text-2xl font-semibold'style={{color:'#149E10',}}>Yes, I’m ready!</h1>
                    <p className="text-xs">Click below to unlock exclusive discount just for you at ₹ 1.</p>
                    <Button variant="contained" onClick={handlePayment} sx={{backgroundColor:'#149E10', textTransform:'initial',width:'80%'}}>Unlock My Offer</Button>
                </div>
            </section>
        </section>
        </Dialog>
        </>
        
    )
}
export default Home