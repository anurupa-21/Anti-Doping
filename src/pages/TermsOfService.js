import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Terms.css"; // Make sure to import the correct CSS file

const TermsOfService = () => {
  const navigate = useNavigate(); // Initialize navigate function to redirect

  useEffect(() => {
    // Hide the Navbar on this page
    document.body.classList.add('no-navbar');

    // Cleanup to remove navbar hiding when leaving the page
    return () => {
      document.body.classList.remove('no-navbar');
    };
  }, []);

  const handleOkClick = () => {
    navigate("/auth"); // Redirect to the SignIn page after clicking OK
  };

  return (
    <div className="terms-container">
      <h1>Terms of Service</h1>
      <p className="intro">
        Welcome to our Terms of Service page. Please read these terms carefully.
      </p>
      <h2>1. Acceptance of Terms</h2>
      <p>
        By using our platform, you agree to the following terms and conditions. These terms apply to all users of the site and services provided. You must comply with the rules, guidelines, and legal obligations when using our services.
      </p>
      <h2>2. User Responsibilities</h2>
      <p>
        As a user, you are responsible for your actions while interacting with the platform. This includes ensuring the accuracy of the information you provide and adhering to the rules established by the platform. Any unauthorized activity or misuse of the platform may lead to account suspension or termination.
      </p>
      <h2>3. Privacy and Data Collection</h2>
      <p>
        We value your privacy and handle your personal data with the utmost care. By using our platform, you agree to our data collection practices, as outlined in our Privacy Policy. We will collect and use your personal information in accordance with the applicable laws and regulations.
      </p>
      <h2>4. Terms Modifications</h2>
      <p>
        The terms and conditions may be updated periodically. When changes are made, we will notify users, and the updated terms will be effective immediately upon posting. It is your responsibility to regularly review these terms to stay informed about any changes.
      </p>
      <h2>5. Termination of Services</h2>
      <p>
        We reserve the right to suspend or terminate your access to the platform at any time, without notice, if we believe you have violated any of these terms or engaged in illegal activities. In such cases, you will lose access to all content and services associated with your account.
      </p>
      <h2>6. Limitation of Liability</h2>
      <p>
        We are not responsible for any damages, losses, or liabilities that may result from using our platform. By agreeing to these terms, you acknowledge that the platform is provided "as is," and we do not guarantee the accuracy, availability, or security of the services.
      </p>
      <h2>7. Governing Law</h2>
      <p>
        These terms are governed by the laws of the jurisdiction in which we operate. Any disputes arising out of or in connection with these terms shall be resolved in the courts of that jurisdiction.
      </p>
      <p className="final-terms">
        Please ensure that you have fully understood the above terms and agree to comply with them. If you have any questions or concerns, feel free to reach out to us.
      </p>

      <button className="ok-button" onClick={handleOkClick}>
        OK
      </button>
    </div>
  );
};

export default TermsOfService;




