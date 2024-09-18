import React, { useEffect } from 'react';
import './SuccessPopup.css';

const Success = ({ onClose }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            onClose();
        }, 2000);
        return () => clearTimeout(timeout);
    }, [onClose]);

    return (
        <div className="Success-container3">
            <div className="success"></div>
            <div className="successcontent">Password Changed Successfully</div>
        </div>
    );
};

export default Success;