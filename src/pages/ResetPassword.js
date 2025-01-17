import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ResetPassword.css";

const ResetPassword = () => {
  const navigate = useNavigate();

  // State to store the passwords and error message
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Hide Navbar on the Reset Password page
    document.body.classList.add('no-navbar');

    // Cleanup function to remove the class when leaving the page
    return () => {
      document.body.classList.remove('no-navbar');
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match. Please try again.');
    } else {
      setError('');
      // Proceed with password reset logic
      // Redirect to auth.js after password reset
      navigate('/auth');
    }
  };

  return (
    <div className="reset-password-page">
      <div className="reset-password-container">
        <div className="reset-password-box">
          <h1 className="reset-password-title">Reset Your Password</h1>
          <form onSubmit={handleSubmit} className="reset-password-form">
            <div className="reset-password-input-group">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                placeholder="Enter your new password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="reset-password-input"
              />
            </div>
            <div className="reset-password-input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="reset-password-input"
              />
            </div>
            
            {error && <p className="reset-password-error">{error}</p>}
            
            <button type="submit" className="reset-password-submit">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
