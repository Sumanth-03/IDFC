import React, {useEffect} from "react";

function Disclaimer() {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    return (
        <div className="max-w-3xl mx-auto p-6 text-justify mt-3">
            <h1 className="text-2xl font-bold mb-4 text-secondary">Disclaimer</h1>
            
            <p className="mt-2">
                1 Rs Store is a third-party platform that displays offers extended by Merchants for IDFC FIRST Bank's Customers. IDFC FIRST Bank is not responsible for selling/rendering any of the listed Products/Services on the platform. IDFC Bank does not act as an express or implied agent of the listed Merchants/owners on the platform. The platform is owned and managed by Cheggout for IDFC FIRST Bank's Customers.
            </p>
            
            <p className="mt-4">
                IDFC FIRST Bank neither guarantees nor makes any representation with respect to the offers made by the Merchants. IDFC FIRST Bank is not responsible for the sale/quality/features of the Products/Services listed on the platform.
            </p>
            
            <p className="mt-4">
                If the Customer proceeds on this platform, any purchase of Products/Services can be made through IDFC FIRST Bank's eligible credit cards only. The Products/Services offered by Merchants may also be available at other stores/online platforms. The Customer's discretion is advised in this regard.
            </p>
            
            <p className="mt-4">
                For any issues or clarifications related to the 1Re Store product and services, IDFC FIRST Bank customers may contact the dedicated customer support phone number <span className="font-semibold">+919886589260</span> or e-mail at <a href="mailto:support@cheggout.com" className="text-blue-600 underline">support@cheggout.com</a>.
            </p>
        </div>
    );
}

export default Disclaimer;
