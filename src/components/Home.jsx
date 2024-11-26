import React,{useState, useRef, useEffect} from "react";
import Logo from '../assets/Logo.svg'
import Logomixed from '../assets/logomixed.svg'
import Banner from '../assets/Banner.png'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Box } from '@mui/material';
import zee5 from '../assets/zee5.svg'
import audible from '../assets/audible.svg'
import gana from '../assets/gana.svg'
import hotstar from '../assets/hotstar.svg'
import lenscart from '../assets/lenscart.svg'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Button from '@mui/material/Button';
import Lock from '../assets/Lock.svg'
import LockG from '../assets/LockG.svg'
//import Gift from '../assets/gift_red.svg'
import Gift from '../assets/gift_green.svg'
import blast from '../assets/blast.svg'
import { Dialog, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert } from '@mui/material';
import { current } from "@reduxjs/toolkit";
import { makeApiCallGet, makeApiCall, makeApiCallWithAuth, makeApiGetCallWithAuth, makeSwinkApiCallWithAuth } from '../Services/Api' 

import audibleBanner from '../assets/audibleBanner.png'
import gaanaBanner from '../assets/gaanaBanner.png'
import hotstarBanner from '../assets/hotstarBanner.png'
import lenskartBanner from '../assets/lenskartBanner.png'
import zee5Banner from '../assets/zee5Banner.png'

import { RedeemAccordion } from "./Offers";

function Home (handleLogin){
    const {open, setOpen} = handleLogin
    const [paymentFlow, setpaymentFlow] = useState(false)
    const [terms, setTerms] = useState(false);
    const [phone, setPhone] = useState(null);
    const [OtpDailog, setOtpDailog] = useState(false);
    const [wrongOtp, setwrongOtp] = useState(false);
    const [infoDailog, setinfoDailog] = useState(false)
    const navigate = useNavigate()
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    const [otpValues, setOtpValues] = useState(["", "", "", "","", ""]);
    const [timeLeft, setTimeLeft]  = useState(10)
    const [resend, setResend]  = useState(false)
    const time = useRef(null);
    const [loader, setLoader]  = useState(false)
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const queryParams = new URLSearchParams(window.location.search);
    const hdnRefNumber = queryParams.get('hdnRefNumber');
    const transactionId = queryParams.get('transactionId');
    const amount = queryParams.get('amount');

    useEffect(() => {
        if(hdnRefNumber){
            setLoader(true)
        makeApiCall('checkPaymentStatuss',{"order_id": hdnRefNumber, "phone": sessionStorage.getItem('phone')})
        .then((response) => {
            console.log("rsd",response.data)
            setLoader(false)
            if(response.data.status === 200)
            {   //console.log(response.data)
                //sessionStorage.setItem('coupon',JSON.stringify(response.data.data))
                let offers = [
                    // {
                    //     icon:lenscart,
                    //     offerTitle:'LENSKART',
                    //     offer: "1 Year Free on Lenskart Gold Membership",
                    //     value:'500',
                    //     code: response.data.data[4].coupon,
                    //     offerLink: response.data.data[4].redeemurl,
                    //     banner:lenskartBanner,
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
                        offer:'2 Months Free on Audible Subscription',
                        value:'398',
                        code: response.data.data[2].coupon,
                        offerLink: response.data.data[2].redeemurl,
                        banner:audibleBanner,
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
                        'Enter voucher code in the box labelled ÎEnter your code hereÌ and click ÎRedeem nowÌ',
                        'Login with your Amazon account and choose credit/debit card or UPI (Super-fast signup with UPI!) for membership sign-up. Rupees Two(Rs. 2) will be charged and your membership starts.',
                        'Subscription auto-renews at INR 199/month after the free period. Cancel anytime'
                        ]
                    },
                    {
                        icon:zee5,
                        offerTitle:'ZEE5',
                        offer:"15% off on Zee5 Annual Subscription",
                        value:'195',
                        code: response.data.data[3].coupon,
                        offerLink: response.data.data[3].redeemurl,
                        banner:zee5Banner,
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
                            'Apart from these Terms & Conditions, the Customer will also be bound by the Terms of Use (https://www.zee5.com/termsofuse) or any such specific terms and conditions as provided by ZEE5 on their platform for using their services',
                            'To the extent permitted by law, ZEE5 or its representatives, employees, directors, officers or agents, shall not be liable for any loss suffered or sustained, to person or property including, but not limited to, consequential (including economic) loss by reason of any act or omission, deliberate or negligent on the part of ZEE5 or its representatives, employees, directors, officers or agents',
                           ' ZEE5 reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, this Offer with or without prior notice due to reasons outside its control or otherwise (including, without limitation, in the case of anticipated, suspected or actual fraud)',
                            'ZEE5 reserves the right to modify, add or delete any of the Terms and Conditions at any point of time at its sole discretion without serving any prior intimation to the Customers',
                            'The invalidity or unenforceability of any part of the Terms and Conditions shall not prejudice or affect the remaining parts of the Terms and Conditions to the extent that it is severable',
                            'ZEE5 shall not be responsible and/or liable in any manner whatsoever in case of any failed transaction as part of this offer NOR liable for any failure relating to technical, hardware, software, server, website, or other issues of any kind to the extent that these may prevent the Customer from participating in this offer',
                            'By availing this offer, it is deemed that the Customer has agreed to all the terms & conditions mentioned herein',
                       ],
                       redeemSteps : [
                       ' Visit ZEE5 website or click https://as.zee5.com/myaccount/subscription',
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
                    //     offer:"45 days free on Gaana Plus Membership",
                    //     value:'149',
                    //     code: response.data.data[1].coupon,
                    //     offerLink: response.data.data[1].redeemurl,
                    //     banner:gaanaBanner,
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
                        offerTitle:'Disney+ Hotstar',
                        offer:"25% off on 3-month Disney+ Hotstar Super plan",
                        value:'75',
                        code: response.data.data[0].coupon,
                        offerLink: response.data.data[0].redeemurl,
                        banner:hotstarBanner,
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
                navigate('/offers', {state: {coupondeet: JSON.stringify(offers)}});
            }
            
        })
        }
      },[]); 
      
    const offers =[
        // {
        //     icon:lenscart,
        //     offerTitle:'LENSKART',
        //     offer: "1 Year Free on Lenskart Gold Membership",
        //     value:'500',
        //     banner:lenskartBanner,
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
            offer:'2 Months Free on Audible Subscription',
            value:'398',
            banner:audibleBanner,
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
            'Enter voucher code in the box labelled ÎEnter your code hereÌ and click ÎRedeem nowÌ',
            'Login with your Amazon account and choose credit/debit card or UPI (Super-fast signup with UPI!) for membership sign-up. Rupees Two(Rs. 2) will be charged and your membership starts.',
            'Subscription auto-renews at INR 199/month after the free period. Cancel anytime'
            ]
        },
        {
            icon:zee5,
            offerTitle:'ZEE5',
            offer:"15% off on Zee5 Annual Subscription",
            value:'195',
            banner:zee5Banner,
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
                'Apart from these Terms & Conditions, the Customer will also be bound by the Terms of Use (https://www.zee5.com/termsofuse) or any such specific terms and conditions as provided by ZEE5 on their platform for using their services',
                'To the extent permitted by law, ZEE5 or its representatives, employees, directors, officers or agents, shall not be liable for any loss suffered or sustained, to person or property including, but not limited to, consequential (including economic) loss by reason of any act or omission, deliberate or negligent on the part of ZEE5 or its representatives, employees, directors, officers or agents',
               ' ZEE5 reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, this Offer with or without prior notice due to reasons outside its control or otherwise (including, without limitation, in the case of anticipated, suspected or actual fraud)',
                'ZEE5 reserves the right to modify, add or delete any of the Terms and Conditions at any point of time at its sole discretion without serving any prior intimation to the Customers',
                'The invalidity or unenforceability of any part of the Terms and Conditions shall not prejudice or affect the remaining parts of the Terms and Conditions to the extent that it is severable',
                'ZEE5 shall not be responsible and/or liable in any manner whatsoever in case of any failed transaction as part of this offer NOR liable for any failure relating to technical, hardware, software, server, website, or other issues of any kind to the extent that these may prevent the Customer from participating in this offer',
                'By availing this offer, it is deemed that the Customer has agreed to all the terms & conditions mentioned herein',
           ],
           redeemSteps : [
           ' Visit ZEE5 website or click https://as.zee5.com/myaccount/subscription',
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
        //     offer:"45 days free on Gaana Plus Membership",
        //     value:'149',
        //     banner:gaanaBanner,
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
            offerTitle:'Disney+ Hotstar',
            offer:"25% off on 3-month Disney+ Hotstar Super plan",
            value:'75',
            banner:hotstarBanner,
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

    const handleClose = () => {
        setpaymentFlow(false)
        setTerms(false)
        setOpen(false);
    };

    const handleCloseInfo = () => {
        setinfoDailog(false);
    };
    const handleClickOpenInfo = () => {
        setinfoDailog(true);
    };
    const handleUnlock = () => {
        if(sessionStorage.getItem('otp')){
            handlePayment()
        }else{
            setinfoDailog(false);
            setpaymentFlow(true)
            setOpen(true);  
        }
    }

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
      };

    const validationSchema = Yup.object({
        mobileNumber: Yup.string()
          .test(
            'is-numeric',
            "Mobile number must contain only digits",
            (value) => /^[0-9]*$/.test(value || '')
          )
          .matches(/^[0-9]{10}$/, "Mobile Number is incomplete.")
          .required("Mobile number is required")
      });

    const setDailog2 = (err,touched,values)=>{
        if(!err.mobileNumber && touched.mobileNumber){
            let indata ={
                phone: values.mobileNumber
               }
               sessionStorage.setItem('phone', values.mobileNumber)
            makeApiCall('initiateLogin',indata)
            .then((response) => {
                console.log(response?.data)
                if(response?.data?.status === 200){
                    setOtpDailog(true)
                }
                else if(response?.data?.status === 401){
                    //setShowError(response?.data?.message)
                    setOpenSnackbar(true)
                    //setTimeout(() => window.location.reload(), 3000);
                }
            });

            
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
        if(otpCode.length === 6){
            console.log(otpCode)
            let indata ={
            phone: sessionStorage.getItem('phone'),
            otp: otpCode
            }
            makeApiCall('checkOTP',indata)
            .then((response) => {
                console.log(response?.data)
                if(response?.data?.status === 200){
                    setOpen(false)
                    setOtpDailog(false)
                    clearInterval(time.current);  
                    setTimeLeft(10);
                    sessionStorage.setItem('otp', true)
                    window.location.reload();
                }
                else if(response?.data?.status === 201){
                    setOpen(false)
                    setOtpDailog(false)
                    clearInterval(time.current);  
                    setTimeLeft(10);
                    sessionStorage.setItem('otp', true)
                    //sessionStorage.setItem('coupon',JSON.stringify(response.data.data))
                    //navigate('/offers', {state: {coupondeet: response.data.data}});
                    let offers = [
                        // {
                        //     icon:lenscart,
                        //     offerTitle:'LENSKART',
                        //     offer: "Free 1 Year Gold Membership",
                        //     value:'500',
                        //     code: response.data.data[4].coupon,
                        //     offerLink: response.data.data[4].redeemurl,
                        //     banner:lenskartBanner,
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
                            code: response.data.data[2].coupon,
                            offerLink: response.data.data[2].redeemurl,
                            banner:audibleBanner,
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
                            'Enter voucher code in the box labelled ÎEnter your code hereÌ and click ÎRedeem nowÌ',
                            'Login with your Amazon account and choose credit/debit card or UPI (Super-fast signup with UPI!) for membership sign-up. Rupees Two(Rs. 2) will be charged and your membership starts.',
                            'Subscription auto-renews at INR 199/month after the free period. Cancel anytime'
                            ]
                        },
                        {
                            icon:zee5,
                            offerTitle:'ZEE5',
                            offer:"15% Off on annual subscription",
                            value:'195',
                            code: response.data.data[3].coupon,
                            offerLink: response.data.data[3].redeemurl,
                            banner:zee5Banner,
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
                                'Apart from these Terms & Conditions, the Customer will also be bound by the Terms of Use (https://www.zee5.com/termsofuse) or any such specific terms and conditions as provided by ZEE5 on their platform for using their services',
                                'To the extent permitted by law, ZEE5 or its representatives, employees, directors, officers or agents, shall not be liable for any loss suffered or sustained, to person or property including, but not limited to, consequential (including economic) loss by reason of any act or omission, deliberate or negligent on the part of ZEE5 or its representatives, employees, directors, officers or agents',
                               ' ZEE5 reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, this Offer with or without prior notice due to reasons outside its control or otherwise (including, without limitation, in the case of anticipated, suspected or actual fraud)',
                                'ZEE5 reserves the right to modify, add or delete any of the Terms and Conditions at any point of time at its sole discretion without serving any prior intimation to the Customers',
                                'The invalidity or unenforceability of any part of the Terms and Conditions shall not prejudice or affect the remaining parts of the Terms and Conditions to the extent that it is severable',
                                'ZEE5 shall not be responsible and/or liable in any manner whatsoever in case of any failed transaction as part of this offer NOR liable for any failure relating to technical, hardware, software, server, website, or other issues of any kind to the extent that these may prevent the Customer from participating in this offer',
                                'By availing this offer, it is deemed that the Customer has agreed to all the terms & conditions mentioned herein',
                           ],
                           redeemSteps : [
                           ' Visit ZEE5 website or click https://as.zee5.com/myaccount/subscription',
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
                        //     code: response.data.data[1].coupon,
                        //     offerLink: response.data.data[1].redeemurl,
                        //     banner:gaanaBanner,
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
                            code: response.data.data[0].coupon,
                            offerLink: response.data.data[0].redeemurl,
                            banner:hotstarBanner,
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
                    if(paymentFlow){
                    //handlePayment()
                    navigate('/offers', {state: {coupondeet: JSON.stringify(offers)}});
                    }
                }
                else{
                    setwrongOtp(true)
                    setResend(true)
                    if (!time.current) {
                        time.current = setInterval(() => {
                            setTimeLeft((prev) => prev - 1);
                        }, 1000);
                    }
                }  
            })
             
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
        setTerms(false)
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
         
        
           makeApiCall('validationCard', indata)
            .then((response) => {
              //console.log("resp", response?.data.data.url)
              if(response?.data?.data?.url){
                let paymenturl = response.data.data.url;
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
            <img src={Banner} alt="banner" className="mx-auto w-full py-10"></img>
            <div className="p-3 py-5 mx-5 rounded-2xl flex flex-col items-start md:items-center gap-2" style={{backgroundColor:'#80232A'}}>
            <h1 className="text-2xl pb-5 font-semibold">What You’ll Need to do!</h1>
                <div className="flex items-center gap-2">
                <span className="w-8 h-8 border-[1px] md:border-none border-white rounded-full aspect-square flex items-center justify-center">
                    1
                </span>
                <span className="text-xl pb-1  md:text-center text-left w-fit">Ensure your credit card is activated</span>
                <Box
                    onClick={handleClickOpenInfo}
                    sx={{
                        position: 'relative',
                        right: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        width: 20,
                        height: 20,
                        boxShadow: 1,
                    }}
                >
                    <QuestionMarkIcon sx={{ color: '#951B24', fontSize: '20px' }} />
                </Box>
            </div> 
            <div className="flex items-center gap-2">
                <span className="w-8 h-8 border-[1px] md:border-none border-white rounded-full aspect-square flex items-center justify-center">
                    2
                </span>
                <span className="text-xl pb-1 text-left w-fit"> Enable your online transactions</span>
                <Box
                    onClick={handleClickOpenInfo}
                    sx={{
                        position: 'relative',
                        right: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        width: 20,
                        height: 20,
                        boxShadow: 1,
                    }}
                >
                    <QuestionMarkIcon sx={{ color: '#951B24', fontSize: '20px' }} />
                </Box>
            </div> 
            </div>
        </section>
      )
    return(
        <>
        <main className={`w-full h-auto md:p-2 ${loader?'blur-sm animate-pulse':''}`}>
            <section className="w-full md:p-5 py-10 bg-secondary text-primary md:rounded-2xl relative text-center md:text-left pb-0 mb-0">
                <h1 className="text-2xl font-semibold">
                    ₹1 Store
                </h1>
                <p className="md:max-w-96 text-xl pt-5 mb-5">
                Shop exclusive bundle Offers at just ₹1!<br/> <em className="text-sm">Limited Period Offer!</em>
                </p>
                <img src={Logo} alt="logo" className="hidden md:block h-24 absolute right-10 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></img>
                <section className="block md:hidden text-center w-full pb-10 md:pb-0 bg-white text-white rounded-3xl">
                {poster}
                </section>
            </section>
            <div className="flex flex-col md:flex-row my-5 -translate-y-10 md:translate-y-0  md:static  bg-primary md:rounded-3xl p-2 md:p-0">
            <section className="text-centerw-full  md:w-1/2 p-5  md:border-2 md:ml-2 md:mr-4 md:rounded-2xl">
                <h1 className="flex flex-wrap text-2xl font-bold text-center py-4 pb-12">
                    Offers worth ₹1317, now at ₹1!
                    {/* Total benefits worth <span className="underline md:no-underline pl-2">₹2,998</span> <img src={blast} alt="emoji" className="pl-2 md:hidden"></img> */}
                </h1>
                <div className="text-left">
                    {offers.map((offer)=>{
                        return(
                            <div className="md:border-0 border-2 mb-4 rounded-xl shadow-md p-4">
                            <div className="flex  justify-between mb-4 items-center md:border-b-0 border-b-[1px] pb-2">
                            <div className="flex gap-2 flex-wrap">
                                <img src={offer.icon} className="w-12 h-12"></img>
                                <div className="flex flex-col  justify-center">
                                    <span className="min-w-fit text-gray-500 font-semibold">{offer.offerTitle}</span>
                                    <p className="w-full hidden md:block">{offer.offer}</p>
                                </div>
                            </div>
                            <div className="flex gap-2 min-w-fit">
                                <div className="rounded-full px-4 p-1 bg-turiary text-center flex items-center min-w-fit gap-[6px]">worth <span className="flex  min-w-fit">₹ {offer.value} </span><img src={Gift} alt="gift" className="pl-2 md:hidden"></img></div>
                                <CheckCircleOutlineIcon color="success" sx={{width:'40px',height:'40px', display:{xs:'none',md:'block'},}}/>
                            </div>
                            </div>
                            <p className="w-full md:hidden">{offer.offer}</p>
                            <RedeemAccordion redeemSteps={offer?.redeemSteps} terms={offer?.terms}></RedeemAccordion>
                            </div>
                        )
                    })}
                    <p className="text-sm text-gray-400">
                        Unlock exclusive benefits with your IDFC FIRST Bank Credit Card
                        {/* Unlock exclusive benefits with your IDFC card! As an IDFC FIRST bank cardholder, simply activate your card 
                        for online payments and make a payment of just ₹1 to gain access to great offers from premium brands. Enjoy
                        these exclusive perks and elevate your experience today! */}
                    </p>
                    <div className="text-center pt-3 font-semibold">
                    <Button onClick={handleClickOpenInfo} variant="contained" sx={{borderRadius:'10px',backgroundColor:'#951B24', textTransform:'initial',width:{xs:'100%',md:'auto'}}}>
                        <img src={Lock} alt ='lock' className="pr-2 hidden md:block"></img>
                        <img src={LockG} alt ='lock' className="w-8 pr-2 md:hidden" ></img>
                        Buy Deal for ₹1
                    </Button>
                    </div>
                </div>
            </section>
            <section  className="hidden md:block text-center w-full md:w-1/2 p-5 bg-white text-white rounded-2xl h-fit"> 
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
        {(!OtpDailog && !loader) ?
        <section className="flex flex-col items-center p-2 gap-2 relative" style={{color:'#1f4172'}}>
            
                <h1 className="font-bold text-lg text-left w-full ">Enter Your Registered Mobile Number</h1>
                <div>
                <Formik
                initialValues={{ mobileNumber: '' }}
                validationSchema={validationSchema}
                validateOnChange={true}
                validateOnBlur={true}
                >
                {({ errors, touched, values }) => (
                    <Form>
                    <label htmlFor="mobileNumber" className="text-sm pb-1">Mobile Number</label><br/>
                    <Field name="mobileNumber"  placeholder='e.g. 00-000-00000' type="text" className={`w-[100%] border-2 p-2 rounded-lg ${errors.mobileNumber && touched.mobileNumber ? 'border-red-500' : 'border-gray-500'}`}/><br/>
                    <ErrorMessage name="mobileNumber" component="div" style={{ color: 'red' }} />
                    <div className="flex py-3">
                    <input type="checkbox" value={terms} onChange={()=>setTerms((pre)=>!pre)}/>
                    <p className="ml-2 text-xs">I have read and accept<button className="text-blue-700" onClick={()=>navigate('/terms')}>Terms of Use </button> and <button className="text-blue-700" onClick={()=>{navigate('/privacypolicy')}}>Privacy Policy</button>.</p>
                    </div>
                    <div className="text-center pt-3">
                    <Button disabled={!terms || errors.mobileNumber || !values?.mobileNumber==10 || !touched.mobileNumber } onClick={()=>setDailog2(errors,touched,values)} variant="contained" sx={{backgroundColor:'#951B24', textTransform:'initial', width:'80%', borderRadius:'10px'}}>
                        Submit
                    </Button>
                    </div>
                    </Form>
                )}
                </Formik>
                </div>
        </section>
        :
        <section className="flex flex-col items-center p-2 gap-2 relative text-gray-700">
            <h1 className="font-bold text-lg ">Please Enter The 6 Digit Code sent to registered mobile number</h1>
            <div className="w-full text-left">
                <label htmlFor="otp" className="text-xs">OTP</label>
                <div className="flex gap-2 justify-evenly md:justify-normal pt-3">
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
                <Button disabled={otpValues.toString().length!==11} onClick={handleSubmit} variant="contained" sx={{ backgroundColor:'#951B24', textTransform:'initial', width:'100%', borderRadius:'10px'}}>
                    Continue
                </Button>
                {resend &&
                <Button disabled={time.current} onClick={resendOtp} sx={{borderRadius:'10px', textTransform:'capitalize', width:'100%',paddingX:'0'}}>
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
                    <h1 className="text-secondary text-xl font-semibold border-0 md:border-none pb-2 md:pb-2 border-b-2">Here’s how!</h1>
                    <p className="flex md:block items-center gap-2 border-0  md:border-none pb-2 md:pb-2 border-b-2">
                        <span className="p-1 px-2 md:p-0 border-[3px] rounded-full md:border-none">1</span> <span>&nbsp;Activate Card: <span onClick={()=>{window.open('https://my.idfcfirstbank.com/digital-banking-app')}} className="text-blue-700">Download IDFC FIRST Mobile App </span>  {'>'} Go to Credit Cards {'>'} Generate PIN</span>
                    </p>
                    <p className="flex md:block items-center gap-2 border-0  md:border-none pb-2 md:pb-2 border-b-2">
                    <span className="p-1 px-2 md:p-0 border-[3px] rounded-full md:border-none">2</span> <span>&nbsp;Enable Online Transactions: Go to IDFC Mobile Banking App {'>'} Click Card Controls {'>'} Enable Online Transactions</span>
                    </p>
                </div>
                <div className="md:w-1/2 p-2 flex flex-col gap-4 items-center">
                    <h1 className='text-2xl font-semibold'style={{color:'#951B24',}}>Yes, I’m ready!</h1>
                    <p className="text-center md:text-left text-lg md:text-sm">Click below to unlock exclusive discount just for you at ₹ 1.</p>
                    <Button variant="contained" onClick={handleUnlock} sx={{borderRadius:'10px',backgroundColor:'#951B24', textTransform:'initial',width:'80%'}}>
                        <img src={Lock} alt ='lock' className="pr-2 hidden md:block"></img>
                        <img src={LockG} alt ='lock' className="w-8 pr-2 md:hidden" ></img>
                        Unlock My Offer
                    </Button>
                </div>
            </section>
        </section>
        </Dialog>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={2000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
            User Not Found!
          </Alert>
        </Snackbar>
        </>
        
    )
}
export default Home