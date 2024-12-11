import { makeApiCallGet, makeApiCall, makeApiCallWithAuth, makeApiGetCallWithAuth, makeSwinkApiCallWithAuth } from '../Services/Api'
 

export const sendMail = (mailid,handlesetOpenalert,setOpenEmailDailog,setLoader)=>{
    setLoader(true)
    makeApiCallWithAuth('mailme',{"mailid": `${mailid}`, "phone": sessionStorage.getItem('phone'),})
    .then((res)=>{
        if(res?.data?.status === 200){
        setLoader(false)
            console.log('sucess',res)
            setOpenEmailDailog(false)
            handlesetOpenalert('Mail')
        }
    })
    .catch((err)=>{
        setLoader(false)
        setOpenEmailDailog(false)
        console.log(err)
    })
}