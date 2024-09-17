import React from "react";
import "../SendOtp/sendotp.scss";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, InputAdornment, Link } from "@mui/material";

function SendOTP() {
  return (
    <>
      <section className="login-section main-body-wrapper">
        <div className="row m-0">
          <div className="col-sm-12 col-md-6 img-left-block">
            <div className="login-aside-img">
              <img
                className="w-100"
                src={require("../../assets/img/login/hand-bg.png")}
                alt="handshake"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 form-right-block">
            <div className="login-filed-form-block">
              <form className="login-form-block">
                <div className="form-caption">
                  <h2>Check your email</h2>
                  <p>We've sent the code to your email address</p>
                </div>
                <div className="emial-bg-block text-center">
                  <img
                    src={require("../../assets/img/login/email-envelop-bg.png")}
                    alt="email-envelop"
                  />
                </div>
                <div className="row">
                  <div className="col-12 otp-code-block">
                    <div className="input-form-field-wrapper otp-code-input">
                      <TextField
                        className="out-label-input-text"
                        placeholder="-"
                        margin="normal"
                        variant="outlined"
                        id="inputField"
                      />
                    </div>
                    <div className="input-form-field-wrapper otp-code-input">
                      <TextField
                        className="out-label-input-text"
                        placeholder="-"
                        margin="normal"
                        variant="outlined"
                        id="inputField"
                      />
                    </div>
                    <div className="input-form-field-wrapper otp-code-input">
                      <TextField
                        className="out-label-input-text"
                        placeholder="-"
                        margin="normal"
                        variant="outlined"
                        id="inputField"
                      />
                    </div>
                    <div className="input-form-field-wrapper otp-code-input">
                      <TextField
                        className="out-label-input-text"
                        placeholder="-"
                        margin="normal"
                        variant="outlined"
                        id="inputField"
                      />
                    </div>
                        
                  </div>
                  <div className="col-12 otp-condition-text">
                    <Typography className="validate-text mb-3" gutterBottom>Invalid Code. Please enter valid code</Typography>
                    <Box className="code-expires-text">
                        Code expires in : <span className="code-expires-time">00:56</span>
                    </Box>
                    <Box className="code-expires-text">
                        Didn’t receive code?  <Link className="resend-code-link" href="#">Resend Code</Link>
                    </Box>
                  </div>
                  <div className="col-12 mt-3">
                    <Button className="custome-btn" variant="text">
                    Submit
                    </Button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SendOTP;
