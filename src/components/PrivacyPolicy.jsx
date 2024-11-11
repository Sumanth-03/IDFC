import React ,{useEffect} from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    return (
        <div className="container mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-md max-w-2xl text-justify">
            <h1 className="text-3xl font-bold mb-4 text-secondary">Privacy Policy</h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">Introduction</h2>
                <p className="text-gray-600">
                At Cheggout Services Private Limited ("Cheggout," "we," "our," or "us") located at Gateway Building, MG Road, Mangalore, Karnataka, India, 575003, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data when you use our services or visit our website. By using our website or services, you agree to this Privacy Policy and acknowledge our Terms and Conditions and the Bank’s Disclaimer.  If you do not agree to the terms of the policy, please do not use or access Cheggout services.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">1. Information We Collect</h2>
                <p className="text-gray-600">
                We may collect the following types of information:
                    <ul className="list-disc ml-6 text-gray-600">
                            <li>
                            <h3 className="text-lg font-medium mt-4">Personal Information</h3>
                            <p className="mt-2">
                                When you create an account, make a purchase, or contact us, we may collect personal information such as your email address, phone number, and billing information.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-medium mt-4">Cookies and Tracking Technologies</h3>
                            <p className="mt-2">
                                We do not use cookies or tracking technologies by default. We will explicitly request your permission beforehand if any such technology is used.
                            </p>
                        </li>
                    </ul>
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">2. How We Use Your Information</h2>
                <p className="text-gray-600">
                 We use the information collected for the following purposes:
                    <ul className="list-disc ml-6 text-gray-600">
                    <li>
                            <h3 className="text-lg font-medium mt-4">To Process Transactions:</h3>
                            <p className="mt-2">
                            We use billing and payment information to process your transactions securely.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-medium mt-4">To Communicate with You:</h3>
                            <p className="mt-2">
                            We may send you updates, support messages, and transaction information.
                            </p>
                        </li>
                    </ul>
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">3. Information Sharing</h2>
                <p className="text-gray-600">
                    We do not sell, trade, or rent your personal information to third parties. Additionally, we are not engaging any service providers for data processing.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">4. Contact Us</h2>
                <p className="text-gray-600">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
                <ul className="list-disc ml-6 text-gray-600">
                    <li className='flex  space-x-2 items-center mt-4'>
                            <h3 className="text-lg font-medium ">Email:</h3>
                            <p className="">
                            support@cheggout.com
                            </p>
                        </li>
                        <li className='flex items-start space-x-2 mt-4'>
                            <h3 className="text-lg font-medium ">Company:</h3>
                            <p className="">
                            Cheggout Services Private Limited
                            </p>
                        </li>
                    </ul>
                </p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;

