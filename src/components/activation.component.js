import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
    console.log("Captcha value:", value);
}
export default class Activation extends Component {
    render() {
        return ( <
            form >

            <
            div className = "form-group" >
            <
            label > Enter the Activation Code sent to your email address < /label> <
            input type = "email"
            className = "form-control"
            placeholder = "Email Address" / >
            <
            /div> 

            <
            div className = "form-group" >
            <
            input type = "number"
            className = "form-control"
            placeholder = "OTP" / >
            <
            /div>   <
            ReCAPTCHA sitekey = "Your client site key"
            onChange = { onChange }
            / > <
            div className = "form-group" >
            <
            Link to = "/success"
            className = "btn btn-primary btn-block "
            style = {
                {
                    borderWidth: 1,
                    borderRadius: 20,
                    padding: 10,
                    margin: 10
                }
            } > Confirm < / Link > < /
            div > < /
            form >

        );
    }
}