import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "./components/logo";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import siteCreateDetail from './components/siteCreateDetail';
import forgotPassword from './components/forgotPassword.component'
import newPassword from './components/confirmNewPassword.component'
import Activation from './components/activation.component'
import Success from './components/success.component'
import Pricing from './components/tierSelection.component'

function App() {
    return ( < Router >
        <
        div >
        <
        Logo / > < /
        div > <
        div className = "App" >
        <
        nav className = "navbar navbar-expand-lg navbar-light fixed-top" >
        <
        div className = "container" >
        <
        Link className = "navbar-brand"
        to = { "/sign-in" } > < /Link> <
        div className = "collapse navbar-collapse"
        id = "navbarTogglerDemo02" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 1440 320" > <
        path fill = "#FFF"
        d = "…" > < /path> < /
        svg > <
        ul className = "navbar-nav ml-auto" >
        <
        li className = "nav-item" >
        <
        Link className = "nav-link"
        to = { "/sign-in" } > Login < /Link> < /
        li > <
        li className = "nav-item" >
        <
        Link className = "nav-link"
        to = { "/sign-up" } > Sign up < /Link> < /
        li >

        <
        /ul> < /
        div > <
        /div> < /
        nav >

        <
        div className = "auth-wrapper" >
        <
        div className = "auth-inner" >
        <
        Switch >
        <
        Route exact path = '/'
        component = { Login }
        /> <
        Route path = "/sign-in"
        component = { Login }
        /> <
        Route path = "/sign-up"
        component = { SignUp }
        /> <
        Route path = "/siteCreateDetail"
        component = { siteCreateDetail }
        />  <
        Route path = "/forgotPassword"
        component = { forgotPassword }
        /> <
        Route path = "/newPassword"
        component = { newPassword }
        />  <
        Route path = "/activation"
        component = { Activation }
        />   <
        Route path = "/success"
        component = { Success }
        />  <
        Route path = "/Pricing"
        component = { Pricing }
        />  < /
        Switch > <
        /div> < /
        div > <
        /div></Router >
    );
}

export default App;