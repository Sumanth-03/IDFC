import axios from "axios"

const apiBaseUrl = "https://onerupee-store-api-stage.azurewebsites.net/api"; //"http://localhost:9000/api"; //"https://onerupee-store-api-stage.azurewebsites.net/api";
      //"https://onerupee-store-api-prod.azurewebsites.net/api";

const apiSwinkUrl = "https://sandbox.swinkpay-fintech.com/api/v2/plugin/pay"

const makeApiCall = async (url, data) => {
    let bodyData = {
        url: apiBaseUrl + "/" + url,
        method: "POST",
        data: data,
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }
    return axios(bodyData)
}

const makeApiCallGet = async () => {

    let bodyData = {
        url: 'https://restapi-stage.cheggout.com/api/v1.1/GetToKenForPWA?ChegCustomerId=1707395706858617&bankName=BOB',
        method: "GET",
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }
    return axios(bodyData)
}

const makeApiCallPost = async () => {
    let gendata ={
        bName: "PNB",
       virtualId: "test2"
    }

    let bodyData = {
        url: 'https://restapi-stage.cheggout.com/api/v1.0/GenerateSessionInfo',
        method: "POST",
        data: gendata,
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }
    return axios(bodyData)
}

const makeApiGetCallWithAuth = async (url) => {
    const token = sessionStorage.getItem('token');

    let bodyData = {
        url: apiBaseUrl + "/" + url,
        method: "GET",
        headers: {
            'accept': 'application/json',
            'Authorization': token,
        },
    }
    return axios(bodyData)
}

const makeApiCallWithAuth = async (url, data) => {
    const token = sessionStorage.getItem('token');

    console.log("datxa",data)

    let bodyData = {
        url: apiBaseUrl + "/" + url,
        method: "POST",
        data: data,
        headers: {
            'accept': 'application/json',
            'Authorization': token,
        },
    }
    return axios(bodyData)
}

const makeSwinkApiCallWithAuth = async (data) => {
    //const token = sessionStorage.getItem('token');

    console.log("datxa",data)

    let bodyData = {
        url: apiSwinkUrl,
        method: "POST",
        data: data,
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'channel': '14',
            'auth_token': 'FREFA45D$B2#18842765#992',
        },
    }
    return axios(bodyData)
}



export { makeApiCall, makeApiCallGet, makeApiGetCallWithAuth, makeApiCallWithAuth, makeSwinkApiCallWithAuth, makeApiCallPost}
