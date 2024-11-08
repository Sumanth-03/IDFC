import React,{useEffect} from 'react';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    return (
        <div className="container mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-md max-w-2xl">
            <h1 className="text-3xl font-bold mb-4 text-secondary">IDFC Bank Terms of Service</h1>
            
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">1. Acceptance of Terms</h2>
                <p className="text-gray-600">
                    By using the services provided by IDFC Bank, you agree to comply with and be bound by these terms and conditions. 
                    Please read these terms carefully and contact us if you have any questions.
                </p>
            </section>
            
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">2. Account Registration</h2>
                <p className="text-gray-600">
                    You must provide accurate and complete information when registering for an account with IDFC Bank. You are 
                    responsible for maintaining the confidentiality of your account and password and for restricting access to 
                    your device.
                </p>
            </section>
            
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">3. Privacy Policy</h2>
                <p className="text-gray-600">
                    IDFC Bank is committed to protecting your privacy. Our Privacy Policy describes how we collect, use, and 
                    disclose your information when you use our services.
                </p>
            </section>
            
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">4. Limitation of Liability</h2>
                <p className="text-gray-600">
                    IDFC Bank will not be liable for any damages or losses resulting from your use of our services, including 
                    but not limited to financial losses, loss of data, or reputational harm.
                </p>
            </section>
            
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">5. Changes to Terms</h2>
                <p className="text-gray-600">
                    We reserve the right to change or update these Terms of Service at any time. Continued use of our services 
                    following any changes indicates your acceptance of the new terms.
                </p>
            </section>
            
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">6. Contact Us</h2>
                <p className="text-gray-600">
                    If you have any questions regarding these terms, please contact us at <a href="mailto:support@idfc.com" className="text-blue-700">support@idfc.com</a>.
                </p>
            </section>
            
            <footer className="text-gray-500 text-sm mt-4">
                &copy; {new Date().getFullYear()} IDFC Bank. All rights reserved.
            </footer>
        </div>
    );
};

export default TermsOfService;
