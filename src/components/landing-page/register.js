import React, {useState, useRef, useEffect} from 'react'
import {Helmet} from "react-helmet";
import { Link as Scroll } from 'react-scroll';
import {Link, useHistory } from 'react-router-dom'
import ScriptTag from 'react-script-tag';
import Recaptcha from 'react-recaptcha';
import axios from 'axios';
import {Baseurl} from '../base_url.js';
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: false,
  didOpen: (toast) => {
  toast.addEventListener('mouseenter', Swal.stopTimer)
  toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})



const Register = () => {
let history = useHistory();
const [verified, setVerified] = useState(false);
const [recaptchaError, setRecaptchaError] = useState(false);
const [isLoading, setisLoading] = useState(false);
const [usernameError, SetUsernameError] = useState(false);
const [emailError, SetEmailError] = useState(false);
const [passwordError, setPasswordError] = useState(false);
const [passwordLessThan, setpasswordLessThan] = useState(false);
const [passwordNan, setPasswordNan] = useState(false);
const [passwordMismatch, setPasswordMismatch] = useState(false);
const verifyCallback = (response)=>{
  if (response){
    setVerified(true);
    setRecaptchaError(false);
  }
}
const [signup, setSignup] = useState({username:'', email:'', password:'',  repeatPassword: ''});

const handleChange = (e) => {
  let name = e.target.name;
  let value = e.target.value;

  //VALIDATION STARTS
  if(name == 'username'){
  SetUsernameError(false); 
  }

  if(name == 'email'){
  SetEmailError(false);
  }

  if(name == 'password'){
  setPasswordError(false);
  }

  if(name == 'password' && value.length >= 8){
    setpasswordLessThan(false); 
  }

  if(name == 'password' && isNaN(value)){
    setPasswordNan(false); 
  }

  if(name == 'repeatPassword' && value == signup.password){
    setPasswordMismatch(false); 
  }
  //VALIDATION ENDS

  setSignup({ ...signup, [name]: value })
}

const handleSubmit = (e) => {
 e.preventDefault();
 signup.username = signup.username.replace(/[^a-zA-Z0-9]/g, '');
  // VALIDATION STARTS//
 if(signup.username && signup.email && signup.password.length >= 8 && isNaN(signup.password) && signup.repeatPassword == signup.password){
 setisLoading(true)
 axios.post(`${Baseurl}register`, signup
  ).then(res => {
    if(res.data){
     setisLoading(false)
     const userInfo = res.data;
     axios.post(`${Baseurl}email-verification`,{id:userInfo.id}
     ).then(res => {
      if(res.data){
      localStorage.setItem('UserInfo', JSON.stringify(userInfo))
      history.push('/email-verification')
      }
    })
    
    }
  }).catch(error => {
      let errRes = error.response.data.errors
      if(errRes.email){
        setisLoading(false)
        Toast.fire({
          icon: 'error',
          text: 'Email already taken'
          })
      } 
      if(errRes.username){
        setisLoading(false)
        Toast.fire({
          icon: 'error',
          text: 'Username already taken'
          })
      }
      if(errRes.email && errRes.username){
        setisLoading(false)
        Toast.fire({
          icon: 'error',
          text: 'Email and Username already taken'
          })
      }

    });
  }else{
    if(!signup.username){
      SetUsernameError(true);
     } 
     if(!signup.email){
      SetEmailError(true)
     }
     if(!signup.password){
      setPasswordError(true)
     } 
     if(signup.password.length < 8){
      setpasswordLessThan(true);
     }else{
      setpasswordLessThan(false); 
     }

     if(isNaN(signup.password)){
      setPasswordNan(false);
     }else{
      setPasswordNan(true);
     }

     if(signup.repeatPassword == signup.password){
      setPasswordMismatch(false);
     }else{
      setPasswordMismatch(true)
     }

     if(!verified){
      setRecaptchaError(true);
     }else{
      setRecaptchaError(false);
     }
     // VALIDATION STARTS//
 }  
}

const handleClick = () => {
   history.push('/login')
 }

return (
<>
<ScriptTag src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"/>
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
          <li onClick={handleClick} style={{cursor: 'pointer'}}><a class="nav-link scrollto ">Login</a></li>
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
              <h3>Register a New Account</h3>
              <form onSubmit={handleSubmit}>
                <div class="form-group mb-3">
                 <label for="exampleInputEmail1" className={usernameError ? 'text-danger' : null}>{usernameError ? 'Username is required' : 'Username*'}</label>
                 <input type="text" class="form-control py-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" name='username' value={signup.username} onChange={handleChange}/>
                </div>
                <div class="form-group mb-3">
                 <label for="exampleInputEmail1" className={emailError ? 'text-danger' : null}>{emailError ? 'Email is required' : 'Email*'}</label>
                 <input type="email" class="form-control py-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" name='email' value={signup.email} onChange={handleChange}/>
                </div>
                <div class="form-group mb-3">
                 <label for="exampleInputEmail1" className={passwordError || passwordLessThan || passwordNan ? 'text-danger' : null}>{passwordError ? 'Password is required' : passwordLessThan ?  "Password must contain at least 8 characters"  : passwordNan ? "Password can't be entirely numeric" : 'Password*'}</label>
                 <input type="password" class="form-control py-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" name='password' value={signup.password} onChange={handleChange}/>
                </div>
                <small class='text-left' style={{fontSize:'12px', fontFamily: "Montserrat, sans-serif"}}>
                <span>*Your password must contain at least 8 characters</span><br/>
                <span>*Your password can't be entirely numeric</span></small>
                <div class="form-group mb-3 mt-3">
                 <label for="exampleInputEmail1" className={passwordMismatch ? 'text-danger' : null}> {passwordMismatch ? 'Password does not Match' : 'Password again*'}</label>
                 <input type="password" class="form-control mb-3 py-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password again" name='repeatPassword' value={signup.repeatPassword} onChange={handleChange}/>
                </div>
                 <Recaptcha
                  sitekey="6Lc5fhEbAAAAAD06l1n0KhCc8fWPz5q145ZT4OHG"
                  // sitekey='6LdpchEbAAAAAL4e2Gis8FwkVq5CN2CPTdF13Qdx'
                  render="explicit"
                  verifyCallback={verifyCallback}/>
                  <p style={{fontSize:'12px', fontFamily: "Montserrat, sans-serif", fontWeight:'600'}} className={recaptchaError ? 'text-danger': null} >Please verify you are a human*</p>
                  <small style={{fontSize:'12px', fontFamily: "Montserrat, sans-serif"}} className='text-left'>
                   Already have an account?<Link to='/login'> Log In.</Link>
                  </small> <br/>
                  <small style={{fontSize:'12px', fontFamily: "Montserrat, sans-serif"}}>
                   New to Lockali?<Link to='/register'> Sign up now!</Link>
                  </small>
                  <div class="btn-wrap">
                  {isLoading ?  <button type="submit" class="border-0 form-control btn btn-primary mt-3" id="exampleInputEmail1" aria-describedby="emailHelp"><i class="fas fa-spinner fa-spin"></i></button>
                  :<button type="submit" class="border-0 form-control btn btn-primary mt-3" id="exampleInputEmail1" aria-describedby="emailHelp">Register</button>}
                  </div>
                </form>    
            </div>
          </div>
          <div class="col-lg-5 background d-none d-lg-block position-fixed-right" data-aos="fade-in">
           <img src="/assets/signup.svg" class="img-fluid" alt=""/>
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

export default Register
