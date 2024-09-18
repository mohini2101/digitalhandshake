import React, { useState } from 'react';
import './Frame.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Frame = ({ onClose, onSuccess }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validatePasswords()) {
            onSuccess();
        }
    };

    const validatePasswords = () => {
        let isValid = true;
        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long');
            isValid = false;
        } else {
            setPasswordError('');
        }
        if (confirmPassword !== password) {
            setConfirmPasswordError('Passwords do not match');
            isValid = false;
        } else {
            setConfirmPasswordError('');
        }
        return isValid;
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    return (
        <div className="Frame-container">
            <button className="close-button" onClick={onClose}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <h1>Create a new password</h1>
                    <div>
                        <div className="form-group">
                            <label htmlFor="new-password">New Password:</label>
                            <div className="password-container">
                                <input
                                    className="framepassword"
                                    type={passwordVisible ? "text" : "password"}
                                    id="new-password"
                                    name="new-password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    autoComplete="new-password"
                                    required
                                />
                                <span className="password-toggle" onClick={togglePasswordVisibility}>
                                    <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                                </span>
                            </div>
                            {passwordError && <div className="error-message">{passwordError}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password:</label>
                            <div className="password-container">
                                <input
                                    className="framepassword"
                                    type={confirmPasswordVisible ? "text" : "password"}
                                    id="confirm-password"
                                    name="confirm-password"
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    autoComplete="new-password"
                                    required
                                />
                                <span className="password-toggle" onClick={toggleConfirmPasswordVisibility}>
                                    <FontAwesomeIcon icon={confirmPasswordVisible ? faEyeSlash : faEye} />
                                </span>
                            </div>
                            {confirmPasswordError && <div className="error-message">{confirmPasswordError}</div>}
                        </div>
                        <div className="form-group">
                            <input type="submit" className="submit" value="Change Password" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Frame;