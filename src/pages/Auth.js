import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true); // Toggle between SignIn and SignUp
  const [isChecked, setIsChecked] = useState(false); // State to track checkbox

  useEffect(() => {
    // Hide Navbar when this component is mounted
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      navbar.style.display = "none";
    }

    // Restore Navbar visibility when the component is unmounted
    return () => {
      if (navbar) {
        navbar.style.display = "";
      }
    };
  }, []);

  const handleGoogleSignIn = () => {
    window.open("https://accounts.google.com/o/oauth2/v2/auth", "_self"); // Placeholder for Google OAuth URL
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <img src="/logo.jpg" alt="Logo" className="auth-logo" />
        <p className="auth-tagline">Join Our Community of athletes and experts!</p>
        {isSignIn ? (
          <>
            <h1 className="auth-tagline">Welcome Back! Login to Continue</h1>
            <form className="auth-form">
              <input
                type="text"
                placeholder="Username or Email"
                required
                className="auth-input"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="auth-input"
              />
              <p className="auth-forgot-password">
                Forgot password? <Link to="/reset">Reset here</Link>
              </p>
              <button type="submit" className="auth-submit">
                Log In
              </button>
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="auth-google"
              >
                <img className="auth-google-img" src="google.png" alt="google" />
                Login with Google
              </button>
              <p className="auth-toggle">
                Don't have an account?{" "}
                <span onClick={() => setIsSignIn(false)}>Sign Up</span>
              </p>
            </form>
          </>
        ) : (
          <>
            <h1 className="auth-tagline">Create an Account</h1>
            <form className="auth-form">
              <input
                type="text"
                placeholder="Username"
                required
                className="auth-input"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="auth-input"
              />
              <input
                type="text"
                placeholder="Role (Admin/Player)"
                required
                className="auth-input"
              />
              <input
                type="text"
                placeholder="Sports Category"
                required
                className="auth-input"
              />
              <input
                type="file"
                className="auth-input"
                placeholder="Upload Profile Image"
              />
              <input
                type="date"
                placeholder="Date Joined"
                required
                className="auth-input"
              />
              <div className="auth-checkbox">
                <input
                  type="checkbox"
                  id="terms"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  required
                />
                <label htmlFor="terms">
                 <p className="agree">By signing up, you agree to our</p> {" "}
                  <Link to="/terms" className="terms">Terms of Service</Link> <p className="agree">and</p>{" "}
                  <Link to="/privacy" className="privacy">Privacy Policy</Link>.
                </label>
              </div>
              <button
                type="submit"
                className="auth-submit"
                disabled={!isChecked} // Disable submit if checkbox is not checked
              >
                Sign Up
              </button>
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="auth-google"
              >
                <img className="auth-google-img" src="google.png" alt="google" />
                Sign in with Google
              </button>
              <p className="auth-toggle">
                Already have an account?{" "}
                <span onClick={() => setIsSignIn(true)}>Log In</span>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth; 


