import React from 'react';
import '../CreateNewPassword/CreateNewPassword.scss';
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { InputAdornment,} from "@mui/material";

function CreateNewPassword() {
    return (
        <>
            <section className="login-section main-body-wrapper">

                <div className="row m-0">
                    <div className="col-sm-12 col-md-6 img-left-block">
                        <div className="login-aside-img">
                            <img className='w-100' src={require('../../assets/img/login/hand-bg.png')} alt="handshake" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 form-right-block">
                       <div className="login-filed-form-block">
                        <form className='login-form-block change-password-block'>
                            <div className="form-caption">
                                <h2>Create a new password</h2>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                <div className="input-form-field-wrapper">
                                    <label htmlFor="inputField">New Password <span className='mendetory-star'>*</span></label>
                                    <TextField
                                        className="out-label-input-text"
                                        placeholder="admin@123"
                                        margin="normal"
                                        variant="outlined"
                                        id="inputField"
                                        fullWidth
                                        InputProps={{
                                            endAdornment: (
                                              <InputAdornment position="end">
                                                <Button className='eye-btn' variant="text">
                                                    {/* <img className='mx-2' src={require('../../assets/img/login/close-eye.png')} alt="close-eye" /> */}
                                                    <img className='mx-2' src={require('../../assets/img/login/eye-Icons.png')} alt="eyeIcons" />
                                                    </Button>
                                              </InputAdornment>
                                            ),
                                          }}
                                    />
                                    </div>
                                </div>
                                <div className="col-12">
                                <div className="input-form-field-wrapper">
                                    <label htmlFor="inputField">Confirm Password <span className='mendetory-star'>*</span></label>
                                    <TextField
                                        className="out-label-input-text"
                                        placeholder="admin@123"
                                        margin="normal"
                                        variant="outlined"
                                        id="inputField"
                                        fullWidth
                                        InputProps={{
                                            endAdornment: (
                                              <InputAdornment position="end">
                                                <Button className='eye-btn' variant="text">
                                                    {/* <img className='mx-2' src={require('../../assets/img/login/close-eye.png')} alt="close-eye" /> */}
                                                    <img className='mx-2' src={require('../../assets/img/login/eye-Icons.png')} alt="eyeIcons" />
                                                    </Button>
                                              </InputAdornment>
                                            ),
                                          }}
                                    />
                                    </div>
                                </div>
                                <div className="col-12 mt-3">
                                <Button className="custome-btn" variant="text">Change Password</Button>
                                </div>
                               
                            </div>
                            
                        </form>
                       </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CreateNewPassword;
