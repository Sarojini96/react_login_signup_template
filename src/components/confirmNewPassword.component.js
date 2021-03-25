import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class newPassword extends Component {
    render() {
        return ( <
            form >
            <
            h2 > New Password < /h2>

            <
            div className = "form-group" >
            <
            label > Enter your new password < /label> <
            input type = "password"
            className = "form-control"
            placeholder = "New Password" / >
            <
            /div> 

            <
            div className = "form-group" >
            <
            input type = "password"
            className = "form-control"
            placeholder = "Confirm New Password" / >
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
            } > Save Password < /Link> </
            form >


        );
    }
}