import React, {useRef, useState} from 'react'
import {Helmet} from "react-helmet";
import { Link as Scroll } from 'react-scroll';
import {Link, useHistory } from 'react-router-dom'
import ScriptTag from 'react-script-tag';
import Recaptcha from 'react-recaptcha';
import axios from 'axios';
import {Baseurl} from '../base_url.js';



  
const Login = () => {
let history = useHistory();


const handleClick = () => {
   history.push('/register')
 }


const verifyCallback = (response)=>{
  if (response){
    setVerified(true);
    setRecaptchaError(false);
  }
}

const [login, setLogin] = useState({email:'', password:''});
const [isLoading, setisLoading] = useState(false);
const [recaptchaError, setRecaptchaError] = useState(false);
const [verified, setVerified] = useState(false);
const [emailError, setEmailError] = useState(false);
const [passwordError, setPasswordError] = useState(false);




const handleChange = (e) => {
  let name = e.target.name;
  let value = e.target.value;
  //VALIDATION//
  if(name == 'email'){
    setEmailError(false); 
    }

    if(name == 'password'){
      setPasswordError(false); 
      }
    
setLogin({ ...login, [name]: value })
}

const handleSubmit = (e) => {
  e.preventDefault();
  if(login.email && login.password){
  setisLoading(true)
  axios.post(`${Baseurl}login`, login
  ).then(res => {
    // console.log(res.data.access_token);
    if(res.data.access_token){
     console.log(res.data.access_token)
     console.log('login success');
    }
     
  }).catch(error => {
    let errorRes = error.response.data
    // console.log(error.response.data)
     if(errorRes.error == 'Unauthorized'){
      console.log('incorrect login details');
     }
    });

  }else{
    if(!login.email){
      setEmailError(true);
     }

     if(!login.password){
      setPasswordError(true);
     }

     if(!verified){
      setRecaptchaError(true);
     }
  }
 
   
   
 }

return (
<>
<ScriptTag isHydrating={false} type="text/javascript" src="main.js" />
<Helmet>
     <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
     <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
</Helmet> 
{/* <!-- ======= Header ======= --> */}
<header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex justify-content-between">
      <div class="logo">
        <h1><Link to='/'>lockali</Link></h1>
      </div>
      <nav id="navbar" class="navbar">
        <ul>
          <li onClick={handleClick} style={{cursor: 'pointer'}}><a class="nav-link scrollto">Signup</a></li>
          <li class="dropdown"><a href="#"><span>Learn</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">How to buy Bitcoins</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">Fees</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="#footer">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      {/* <!-- .navbar --> */}
    </div>
  </header>
  {/* <!-- #header --> */} 
 
      <section class="pricing section-bg mt-5">
      <div class="container mt-5" data-aos="fade-in">
        <div class="row">
          <div class="col-lg-7 col-md  mt-md-0 mb-5" data-aos="fade-in" data-aos-delay="200">
            <div class="box featured">
              <h3>User Account Login</h3>
              <form onSubmit={handleSubmit}>
                <div class="form-group mb-3">
                 <label for="exampleInputEmail1" className={emailError ? 'text-danger' : null}>{emailError ? 'Email required' : 'Email*'}</label>
                 <input type="email" class="form-control py-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" name='email' value={login.email} onChange={handleChange}/>
                </div>
                <div class="form-group mb-4">
                 <label for="exampleInputEmail1" className={passwordError ? 'text-danger' : null}>{passwordError ? 'Password required' : 'Password*'}</label>
                 <input type="password" class="form-control py-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" name='password' value={login.password} onChange={handleChange}/>
                </div>
                 <Recaptcha
                  sitekey="6Lc5fhEbAAAAAD06l1n0KhCc8fWPz5q145ZT4OHG"
                  // sitekey='6LdpchEbAAAAAL4e2Gis8FwkVq5CN2CPTdF13Qdx'
                  render="explicit"
                  verifyCallback={verifyCallback}/>
                  <small style={{fontSize:'12px', fontFamily: "Montserrat, sans-serif", fontWeight:'600'}} className={recaptchaError ? 'text-danger': null} >Please verify you are a human*</small><br/>
                  <small style={{fontSize:'12px', fontFamily: "Montserrat, sans-serif"}} className='mt-2 text-left'>
                  <Link to='/password-reset'>Forgot your password?</Link>
                   </small>
                   <p style={{fontSize:'12px', fontFamily: "Montserrat, sans-serif"}} className='text-left'>
                   New to Lockali?<Link to='/register'> Sign up now!</Link>
                   </p> 
                  <div class="btn-wrap">
                   {isLoading ? <button type="submit" class="border-0 form-control btn btn-primary mt-3" id="exampleInputEmail1" aria-describedby="emailHelp"><i class="fas fa-spinner fa-spin"></i></button>
                   :<button type="submit" class="border-0 form-control btn btn-primary mt-3" id="exampleInputEmail1" aria-describedby="emailHelp">Login</button>}
                   </div>
               </form>
             
            </div>
          </div>
          <div class="col-lg-5 background  d-none d-lg-block" data-aos="fade-in">
           <img src="/assets/login.svg" class="img-fluid" alt=""/>
          </div>
        </div>

      </div>
    </section>
           
       
        
    <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-4 col-md-6 footer-info">
            <h3>Lockali</h3>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
              A108 Adam Street <br/>
              New York, NY 535022<br/>
              United States <br/>
              <strong>Phone:</strong> +1 5589 55488 55<br/>
              <strong>Email:</strong> info@example.com<br/>
            </p>

            <div class="social-links">
              <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
              <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
              <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
              <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
              <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong>Lockali</strong>. All Rights Reserved
      </div>
    </div>
  </footer>

  <a class="back-to-top d-flex align-items-center justify-content-center"><Scroll to='about'><i class="bi bi-arrow-up-short"></i></Scroll></a>
  
</>
    )
}

export default Login
