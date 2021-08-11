import React, {useRef} from 'react'
import {Helmet} from "react-helmet";
import ScriptTag from 'react-script-tag';
import {Link, useHistory } from 'react-router-dom'
import { Link as Scroll } from 'react-scroll';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
  
      
    },
  }));

const  PasswordReset = () => {
const ref = useRef(null)
const handleSubmit = () => {
 
 }

const handleChange = (e) => {
    // let name = e.target.name;
    // let value = e.target.value;
    // setLogin({ ...login, [name]: value })
  }

const classes = useStyles();
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
      {/* <!-- .navbar --> */}
    </div>
  </header>
  {/* <!-- #header --> */}   

  {/* <!-- ======= Pricing Section ======= --> */}
    <section  class="pricing section-bg mt-5">
      <div class="container mt-5" data-aos="fade-in">
        <div class="row">
          <div class="col-lg-9 mx-auto col-md  mt-md-0 mb-5" data-aos="fade-in" data-aos-delay="200">
            <div class="box featured">
              <h3>Password Reset</h3>
              <form onSubmit={handleSubmit}>
                <div class="form-group mb-2">
                 <label for="exampleInputEmail1" >Username or Email*</label>
                 <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username or Email" name='username'  onChange={handleChange}/>
                </div>
                <div class="form-group mb-4">
                 <label for="exampleInputEmail1" >New Password*</label>
                 <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" name='password'  onChange={handleChange}/>
                </div>
                </form>
                <div class="btn-wrap">
             <button type="submit" class="border-0 form-control btn btn-primary mt-3" id="exampleInputEmail1" aria-describedby="emailHelp">Reset</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Pricing Section --> */}


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

export default PasswordReset;
