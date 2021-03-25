import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class forgotPassword extends Component {
    render() {
        return ( <
            form >
            <
            h2 > Forgot Password ? < /h2>

            <
            div className = "form-group" >
            <
            label > Enter your email address to receive recovery information < /label> <
            input type = "email"
            className = "form-control"
            placeholder = "yourname@email.com" / >
            <
            /div> <
            Link to = "/newPassword"
            className = "btn btn-primary btn-block "
            style = {
                {
                    borderWidth: 1,
                    borderRadius: 20,
                    padding: 10,
                }
            } > Submit < /Link> < /
            form >


        );
    }
}