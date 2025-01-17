import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook
import "./Privacy.css";

const PrivacyPolicy = () => {
  const navigate = useNavigate(); // Initialize navigate function to redirect

  // Hide Navbar using useEffect
  useEffect(() => {
    // Assuming you have a way to hide the Navbar, for example, by manipulating its state
    document.body.classList.add("hide-navbar");
    return () => document.body.classList.remove("hide-navbar"); // Clean up on unmount
  }, []);

  const handleOkClick = () => {
    navigate("/auth"); // Redirect to the SignIn page after clicking OK
  };

  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p className="intro">
        We are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.
      </p>
      <h2>1. Information Collection</h2>
      <p>
        We collect personal information such as email addresses, usernames, and other relevant details when you interact with our platform. This data helps us provide a better user experience and improve our services.
      </p>
      <h2>2. Data Usage</h2>
      <p>
        Your data will be used to enhance your experience on our platform, such as personalizing content, sending updates, and improving security. We do not sell or share your data with third parties without your consent.
      </p>
      <h2>3. Data Security</h2>
      <p>
        We take the security of your personal data seriously. We implement various security measures to protect your information from unauthorized access or misuse. However, no data transmission over the internet can be guaranteed to be 100% secure.
      </p>
      <h2>4. User Rights</h2>
      <p>
        You have the right to access, modify, and delete your personal data. If you wish to exercise these rights, please contact us through our support page. We are committed to honoring your privacy preferences.
      </p>
      <h2>5. Changes to This Policy</h2>
      <p>
        We may update this privacy policy from time to time. When changes are made, we will notify you by posting the updated policy on this page. Your continued use of the platform after such changes will constitute your acknowledgment and acceptance of the updated policy.
      </p>

      <button className="ok-button" onClick={handleOkClick}>
        OK
      </button>
    </div>
  );
};

export default PrivacyPolicy;

