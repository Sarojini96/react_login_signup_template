import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Login extends Component {
    render() {
        return ( <
            form >
            <
            h2 > LOGIN < /h2>

            <
            div className = "form-group" >
            <
            label > Email Address < /label>  <
            input type = "email"
            className = "form-control"
            placeholder = "yourname@email.com" / >
            <
            /div>

            <
            div className = "form-group" >
            <
            label > Password < /label> <
            input type = "password"
            className = "form-control"
            placeholder = "********" / >
            <
            /div>

            <
            Link to = "/siteCreateDetail"
            className = "btn btn-primary btn-block"
            style = {
                {
                    borderWidth: 1,
                    borderRadius: 20,
                    padding: 10,

                }
            } > LOGIN < /Link>  <
            p className = "forgot-password text-center" >
            Forgot password ? <
            Link to = "/forgotPassword"
            className = "btn-link" > Click here < /Link>  < /
            p > <
            Link to = "/sign-up"
            className = "btn btn-outline-primary btn-block"
            style = {
                {
                    borderWidth: 1,
                    borderRadius: 20,
                    padding: 10,
                    backgroundColor: '#fff',
                    color: '#167bff'



                }



            } > Don 't have an account? Sign Up < /Link>











            <



            /



            form >











        );



    }



}