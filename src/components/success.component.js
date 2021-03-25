import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Success extends Component {
    render() {
        return ( < form >
            <
            h2 > Welcome to Szells! < /h2>

            <
            div className = "form-group" >
            <
            label > You 've successfully created your Szells account< /label> < /div >

            <
            Link to = "/siteCreateDetail"
            className = "btn btn-primary btn-block "
            style = {
                {
                    borderWidth: 1,
                    borderRadius: 20,
                    padding: 10,

                }
            } > Continue < /Link > 

            <
            /form >


        );
    }
}