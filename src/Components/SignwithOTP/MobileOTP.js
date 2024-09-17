import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { InputAdornment, Dialog, Box } from "@mui/material";
import '../SignwithOTP/mobileotp.scss';
import "../../Components/Dialog/successdialog.scss";
import "../../Components/Dialog/successdialog.css";

function MobileOTP() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSendCode = () => {
        handleOpen();
    };

    return (
        <>
            <section className="mobile-section main-body-wrapper">
                <div className="row m-0">
                    <div className="col-sm-12 col-md-6 img-left-block">
                        <div className="mobile-aside-img">
                            <img className='w-100' src={require('../../assets/img/login/hand-bg.png')} alt="handshake" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 form-right-block" style={{ backgroundColor: 'white', borderRadius: '64px 0 0 64px' }}>
                        <div className="mobile-filed-form-block">
                            <form className='mobile-form-block'>
                                <div className="form-caption">
                                    <h2>Sign In With OTP</h2>
                                    <p>Please Sign In To Continue</p>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="input-form-field-wrapper">
                                            <label htmlFor="inputField">Mobile No <span className='mendetory-star'>*</span></label>
                                            <TextField
                                                className="out-label-input-text"
                                                placeholder="Enter your mobile"
                                                margin="normal"
                                                variant="outlined"
                                                id="inputField"
                                                fullWidth
                                                type="tel" 
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            +91
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <Button className="custome-btn" variant="text" onClick={handleSendCode}>
                                            Send Code
                                        </Button>
                                    </div>
                                    <div class="headline">
                                        <p className='option-text'> or Log-in With </p>
                                    </div>
                                    <div className="col-12">
                                        <div className="social-btn-group">
                                            <Button className="custome-btn" variant="text"> <img className='mx-2' src={require('../../assets/img/login/Facebook.png')} alt="Facebook" /> Facebook</Button>
                                            <Button className="custome-btn" variant="text"> <img className='mx-2' src={require('../../assets/img/login/google.png')} alt="google" /> Google</Button>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="not-text">
                                            Don’t have account ?
                                        </div>
                                    </div>
                                    <div className="col-12 create-btn-block">
                                        <Button className="custome-btn" variant="text">Create a new account</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <Dialog onClose={handleClose} open={open}>
                    <Box className="success-dialog-body">
                        <img className='w-100' src={require('../../assets/img/login/Success.png')} alt="handshake" />
                        <Box className="alert-text">Code Submitted Successfully</Box>
                    </Box>
                </Dialog>
            </section>
        </>
    );
}

export default MobileOTP;
