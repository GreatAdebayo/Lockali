import React, {useRef} from 'react'
import { Link as Scroll } from 'react-scroll';
import { Link, useHistory} from 'react-router-dom'
import ScriptTag from 'react-script-tag';




const Home = () => {
const handleSubmit = () => {
 
 }

const handleChange = (e) => {
    // let name = e.target.name;
    // let value = e.target.value;
    // setLogin({ ...login, [name]: value })
  }

let history = useHistory();

const signUp = () => {
history.push('/register')
}

const login = () => {
  history.push('/login')
  }

return (
 <>
 <ScriptTag isHydrating={false} type="text/javascript" src="main.js" />
 <ScriptTag isHydrating={false} type="text/javascript" src="purecounter.js" />
 
{/* <!-- ======= Header ======= --> */}
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex justify-content-between">
      <div class="logo">
        <h1><Link to="/">lockali</Link></h1>
      </div>
      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#buy-btc">Buy Bitcoins</a></li>
          <li><a class="nav-link scrollto" href="#sell-btc">Sell Bitcoins</a></li>
          <li onClick={signUp} style={{cursor: 'pointer'}}><a class="nav-link scrollto">Signup</a></li>
          <li onClick={login} style={{cursor: 'pointer'}}><a class="nav-link scrollto">Login</a></li>
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

  {/* <!--  Hero Section --> */}
  <section id="hero" class="clearfix">
    <div class="container" data-aos="fade-up">
      <div class="hero-img" data-aos="zoom-out" data-aos-delay="200">
        <img src="assets/hero-img2.svg" alt="" class="img-fluid"/>
      </div>
      <div class="hero-info" data-aos="zoom-in" data-aos-delay="100">
        <h2>Buy and Sell<br/><span>Bitcoin</span><br/>Near you or around the country!</h2>
        <div>
          <a href="#buy-btc" class="btn-get-started scrollto">Quick Buy</a>
          <a href="#sell-btc" class="btn-services scrollto">Quick Sell</a>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End Hero Section --> */}

  <main id="main">
  {/* <!-- ======= About Section ======= --> */}
    <section id="about">
      <div class="container" data-aos="fade-up">
        {/* <header class="section-header">
          <h3><div class="spinner-grow text-primary" role="status">
          </div> BTC Live Rate: 000.89886</h3>
          </header> */}
      <section  class="pricing section-bg">
      <div class="container" data-aos="fade-in">
        <div class="row">
          <div class="col-lg-9 mx-auto   mt-md-0 mb-5" data-aos="fade-in" data-aos-delay="200">
            <div class="box featured">
              <h3>Quick Search</h3>
              <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Amount (NGN)"/>
               <div class="relative mt-2">
               <select class="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
               <option>Buy</option>
               <option>Sell</option>
               </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                 </div>
                  </div>
             <div class="btn-wrap">
             <button type="submit" class="border-0 form-control btn btn-primary mt-3" id="exampleInputEmail1" aria-describedby="emailHelp">Search</button>
              </div> 
            </div>
          </div>
        </div>

      </div>
    </section>

    <div class="row about-container">
     <div class="col-lg-6 mx-auto content order-lg-1 order-2">
    <div class="icon-box" data-aos="fade-in" data-aos-delay="100">
   <div class="icon"><i class="bi bi-card-checklist"></i></div>
   <h4 class="title"><a href="">Buy Bitcoins</a></h4>
   <p class="description">Buy bitcoins online in Nigeria with Bank transfer, connect with hundreds of vendors.</p>
 </div>




<div class="icon-box" data-aos="fade-up" data-aos-delay="200">
   <div class="icon"><i class="bi bi-brightness-high"></i></div>
   <h4 class="title"><a href="">Sell Bitcoins</a></h4>
   <p class="description">Sell your bitcoins online in Nigeria, review payment with Bank transfer, connect with hundreds of vendors.</p>
 </div>




   <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
   <div class="icon"><i class="bi bi-calendar4-week"></i></div>
   <h4 class="title"><a href="">Be a Vendor</a></h4>
   <p class="description">Create a trade post and start buying or selling Bitcoins as a vendor</p>
    </div>
        </div>
    {/* <div class="col-lg-6 background order-lg-2" data-aos="zoom-in">
        <img src="assets/hero-img3.svg" class="img-fluid" alt=""/>
    </div>  */}
  </div>
        
        </div>

    </section>
    {/* <!-- End About Section -->  */}
    

    {/* <!-- ======= Buy BTC Section ======= --> */}
    <section id="buy-btc" class="buy-btc-bg">
      <div class="container" data-aos="fade-up">
        <header class="buy-btc-header pt-3">
          <h3>Buy Bitcoin?</h3>
        </header>
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="100">
            <div class="box">
            <Link to='/ad-details'><div class="icon"><button class="btn btn-sm px-2" style={{backgroundColor:'#ff689b', color:'#fff', fontFamily:'"Montserrat", sans-serif'}}> <strong>Buy</strong></button></div></Link>
            <Link to='/account'><h4 class="title"><a href="">Great</a></h4></Link>
              <p class="description"><strong>Rate:</strong> 100$ <br/><span><strong>Payment Method:</strong> Bank Transfer</span><br/><span><strong>Number of Trade:</strong> 20</span><br/><span><strong>Limit: </strong>100-200 USD</span></p>
            </div>
          </div>
          <div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="200">
            <div class="box">
            <div class="icon"><button class="btn btn-sm px-2" style={{backgroundColor:'#ff689b', color:'#fff', fontFamily:'"Montserrat", sans-serif'}}> <strong>Buy</strong></button></div>   <h4 class="title"><a href="">Dolor Sitema</a></h4>
            <p class="description"><strong>Rate:</strong> 100$ <br/><span><strong>Payment Method:</strong> Bank Transfer</span><br/><span><strong>Number of Trade:</strong> 20</span><br/><span><strong>Limit: </strong>100-200 USD</span></p>
           </div>
          </div>

        <div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="100">
          <div class="box">
          <div class="icon"><button class="btn btn-sm px-2" style={{backgroundColor:'#ff689b', color:'#fff', fontFamily:'"Montserrat", sans-serif'}}> <strong>Buy</strong></button></div>    <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
          <p class="description"><strong>Rate:</strong> 100$ <br/><span><strong>Payment Method:</strong> Bank Transfer</span><br/><span><strong>Number of Trade:</strong> 20</span><br/><span><strong>Limit: </strong>100-200 USD</span></p>
            </div>
          </div>
          <div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="200">
          <div class="box">
          <div class="icon"><button class="btn btn-sm px-2" style={{backgroundColor:'#ff689b', color:'#fff', fontFamily:'"Montserrat", sans-serif'}}> <strong>Buy</strong></button></div>    <h4 class="title"><a href="">Magni Dolores</a></h4>
          <p class="description"><strong>Rate:</strong> 100$ <br/><span><strong>Payment Method:</strong> Bank Transfer</span><br/><span><strong>Number of Trade:</strong> 20</span><br/><span><strong>Limit: </strong>100-200 USD</span></p>
             </div>
          </div>

          <div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="100">
            <div class="box">
            <div class="icon"><button class="btn btn-sm px-2" style={{backgroundColor:'#ff689b', color:'#fff', fontFamily:'"Montserrat", sans-serif'}}> <strong>Buy</strong></button></div>   <h4 class="title"><a href="">Nemo Enim</a></h4>
            <p class="description"><strong>Rate:</strong> 100$ <br/><span><strong>Payment Method:</strong> Bank Transfer</span><br/><span><strong>Number of Trade:</strong> 20</span><br/><span><strong>Limit: </strong>100-200 USD</span></p>
          </div>
          </div>
          <div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="200">
            <div class="box">
            <div class="icon"><button class="btn btn-sm px-2" style={{backgroundColor:'#ff689b', color:'#fff', fontFamily:'"Montserrat", sans-serif'}}> <strong>Buy</strong></button></div>             <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
            <p class="description"><strong>Rate:</strong> 100$ <br/><span><strong>Payment Method:</strong> Bank Transfer</span><br/><span><strong>Number of Trade:</strong> 20</span><br/><span><strong>Limit: </strong>100-200 USD</span></p>
         </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- End Buy BTC Section --> */}

    {/* <!-- ======= Sell BTC Section ======= --> */}
    <section id="sell-btc" class="sell-btc-bg">
      <div class="container" data-aos="fade-up">
        <header class="section-header pt-3">
          <h3>Sell Bitcoin?</h3>
        </header>
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="100">
            <div class="box">
            <div class="icon"><button class="btn btn-sm px-2" style={{backgroundColor:'#4680ff', color:'#fff', fontFamily:'"Montserrat", sans-serif'}}> <strong>Sell</strong></button></div>  <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="200">
            <div class="box">
            <div class="icon"><button class="btn btn-sm px-2" style={{backgroundColor:'#4680ff', color:'#fff', fontFamily:'"Montserrat", sans-serif'}}> <strong>Sell</strong></button></div>  <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <h4 class="title"><a href="">Dolor Sitema</a></h4>
              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>

        <div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="100">
          <div class="box">
          <div class="icon"><button class="btn btn-sm px-2" style={{backgroundColor:'#4680ff', color:'#fff', fontFamily:'"Montserrat", sans-serif'}}> <strong>Sell</strong></button></div>  <h4 class="title"><a href="">Lorem Ipsum</a></h4>
            <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
              <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="200">
          <div class="box">
          <div class="icon"><button class="btn btn-sm px-2" style={{backgroundColor:'#4680ff', color:'#fff', fontFamily:'"Montserrat", sans-serif'}}> <strong>Sell</strong></button></div>  <h4 class="title"><a href="">Lorem Ipsum</a></h4>
             <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="100">
            <div class="box">
            <div class="icon"><button class="btn btn-sm px-2" style={{backgroundColor:'#4680ff', color:'#fff', fontFamily:'"Montserrat", sans-serif'}}> <strong>Sell</strong></button></div>  <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
             </div>
          </div>
          <div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="200">
            <div class="box">
            <div class="icon"><button class="btn btn-sm px-2" style={{backgroundColor:'#4680ff', color:'#fff', fontFamily:'"Montserrat", sans-serif'}}> <strong>Sell</strong></button></div>  <h4 class="title"><a href="">Lorem Ipsum</a></h4>
            <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- End Sell BTC Section --> */}

    {/* <!-- ======= Why Us Section ======= --> */}
    <section id="why-us">
      <div class="container" data-aos="fade-up">
        <div class="row row-eq-height justify-content-center"></div>
        <div class="row counters" data-aos="fade-up" data-aos-delay="100">

          <div class="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
            <p>Vendors</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="421" data-purecounter-duration="1" class="purecounter"></span>
            <p>Users</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="1364" data-purecounter-duration="1" class="purecounter"></span>
            <p>Completed Trades</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="1" class="purecounter"></span>
            <p>Hard Workers</p>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Why Us Section --> */}

    <section id="about">
      <div class="container" data-aos="fade-up">
      <div class="row about-extra">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
            <img src="assets/hero-img3.svg" class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-right">
            <h4>Trade bitcoins person-to-person in a fast, easy, and most secure way.</h4>
            <p>
              Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque fugit earum est quam officiis numquam. Ducimus corporis autem at blanditiis beatae incidunt sunt.
            </p>
            <button type="submit" class="border-0 form-control btn btn-primary mt-3 mx-auto" id="exampleInputEmail1" aria-describedby="emailHelp">Learn More</button>
          </div>
      </div>
      </div>
    </section>
  </main>
  {/* <!-- End #main --> */}

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

  <a class="back-to-top d-flex align-items-center justify-content-center"><Scroll to='hero'><i class="bi bi-arrow-up-short"></i></Scroll></a>
  
</>
    )
}

export default Home
