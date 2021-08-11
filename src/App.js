import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/landing-page/home';
import Register from './components/landing-page/register';
import Login from './components/landing-page/login';
import EmailVerification from './components/landing-page/email_verification';
import PasswordReset from './components/landing-page/reset_password';
import AdDetails from './components/ad-details';
import VerifyCode from './components/landing-page/verify_code';
import AOS from "aos";


AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

const App = () => {
  return (
    <>
     <Router>
       <Switch>
         <Route exact path="/">
           <Home/>
         </Route>
         <Route exact path="/register">
           <Register/>
         </Route> 
         <Route exact path="/login">
           <Login/>
         </Route> 
         <Route exact path="/email-verification">
           <EmailVerification/>
         </Route> 
         <Route exact path="/password-reset">
           <PasswordReset/>
         </Route>
         <Route exact path="/ad-details">
           <AdDetails/>
         </Route> 
         <Route exact path="/verify/:code">
           <VerifyCode/>
         </Route>  
       </Switch>
     </Router>
    </>
  )
}

export default App;