import React from 'react';
import '../login/login.scss';
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { InputAdornment,} from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
 

function Login() {
    const login=()=>{
        localStorage.setItem('login', true);
        navigate('/SuccessDialog');
    }
    const navigate = useNavigate();
    useEffect(() => {

        let login = localStorage.getItem('login');
        if (login) {
            navigate('/SuccessDialog');
        }

    });
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
                        <form className='login-form-block'>
                            <div className="form-caption">
                                <h2>Welcome!</h2>
                                <p>Please Sign In To Continue</p>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                <div className="input-form-field-wrapper">
                                    <label htmlFor="inputField">Email <span className='mendetory-star'>*</span></label>
                                    <TextField
                                        className="out-label-input-text"
                                        placeholder="Enter your Email"
                                        margin="normal"
                                        variant="outlined"
                                        id="inputField"
                                        fullWidth
                                    />
                                    </div>
                                </div>
                                <div className="col-12">
                                <div className="input-form-field-wrapper">
                                    <label htmlFor="inputField">Password <span className='mendetory-star'>*</span></label>
                                    <TextField
                                        className="out-label-input-text"
                                        placeholder="Enter Valid Password"
                                        margin="normal"
                                        variant="outlined"
                                        id="inputField"
                                        fullWidth
                                        InputProps={{
                                            endAdornment: (
                                              <InputAdornment position="end">
                                                <Button className='eye-btn' variant="text">
                                                    <img className='mx-2' src={require('../../assets/img/login/close-eye.png')} alt="close-eye" />
                                                    {/* <img className='mx-2' src={require('../../assets/img/login/eye-Icons.png')} alt="eyeIcons" /> */}
                                                    </Button>
                                              </InputAdornment>
                                            ),
                                          }}
                                    />
                                    <Typography className='forgot-passowrd-text' variant="subtitle1">Forgot your password?</Typography>
                                    </div>
                                </div>
                                <div className="col-12 mt-3">
                                <Button className="custome-btn" variant="text" onClick={login}>Login</Button>
                                </div>
                                <div class="headline"><p className='option-text'> or Log-in With </p></div>
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
            </section>
        </>
    )
}

export default Login;
