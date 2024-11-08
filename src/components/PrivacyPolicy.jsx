import React ,{useEffect} from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    return (
        <div className="container mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-md max-w-2xl">
            <h1 className="text-3xl font-bold mb-4 text-secondary">IDFC Bank Privacy Policy</h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">1. Introduction</h2>
                <p className="text-gray-600">
                    At IDFC Bank, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your
                    personal information. By using our services, you agree to the collection and use of information in accordance with
                    this policy.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">2. Information We Collect</h2>
                <p className="text-gray-600">
                    We collect personal information when you use our services, including but not limited to:
                    <ul className="list-disc ml-6 text-gray-600">
                        <li>Contact Information: Name, email, phone number</li>
                        <li>Account Information: Account number, transaction history</li>
                        <li>Usage Data: IP address, browser type, device information</li>
                    </ul>
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">3. How We Use Your Information</h2>
                <p className="text-gray-600">
                    The information we collect is used for the following purposes:
                    <ul className="list-disc ml-6 text-gray-600">
                        <li>To provide, maintain, and improve our services</li>
                        <li>To communicate with you regarding your account or services</li>
                        <li>To send promotional materials, if you have opted in</li>
                        <li>To comply with legal obligations</li>
                    </ul>
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">4. Data Sharing and Disclosure</h2>
                <p className="text-gray-600">
                    We do not share your personal information with third parties except in the following cases:
                    <ul className="list-disc ml-6 text-gray-600">
                        <li>With your consent or as required by law</li>
                        <li>To service providers who help us deliver our services</li>
                        <li>For legal compliance, such as to protect our rights or prevent fraud</li>
                    </ul>
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">5. Security</h2>
                <p className="text-gray-600">
                    We take the security of your personal information seriously and implement reasonable measures to protect it from
                    unauthorized access, alteration, or destruction.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">6. Your Rights</h2>
                <p className="text-gray-600">
                    You have the right to:
                    <ul className="list-disc ml-6 text-gray-600">
                        <li>Access the personal data we hold about you</li>
                        <li>Request corrections to your data if it is inaccurate or incomplete</li>
                        <li>Request deletion of your data, subject to legal obligations</li>
                        <li>Opt-out of promotional communications</li>
                    </ul>
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">7. Changes to this Privacy Policy</h2>
                <p className="text-gray-600">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new
                    policy on our website, with an updated "Effective Date."
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">8. Contact Us</h2>
                <p className="text-gray-600">
                    If you have any questions or concerns about this Privacy Policy or our practices, please contact us at <a href="mailto:support@idfc.com" className="text-blue-700">support@idfc.com</a>.
                </p>
            </section>

            <footer className="text-gray-500 text-sm mt-4">
                &copy; {new Date().getFullYear()} IDFC Bank. All rights reserved.
            </footer>
        </div>
    );
};

export default PrivacyPolicy;

