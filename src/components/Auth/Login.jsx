import React from 'react'
import './LoginStyle.css'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  Link,
} from "react-router-dom";
import Nav from '../navbar'
import Footer from '../Footer';



const Login = () => {

  return (

    <>
    <Nav/>
          <div className="d-flex flex-column  align-items-center container all-container">
            <div className='container d-flex flex-column  main-container'>
              <h3 className='ms-3'>Login</h3>
              <div className="container d-flex flex-column form-container">
                <form action="">
                  <input type="text" name="uname" id="uname" placeholder='Username' required />
                  <input type="password" name="pass" id="pass" placeholder='Password' required />
                  <p className='privacy-policy'>By continuing, I agree to the <a href="">Terms of Use</a> & <a href="">Privacy Policy</a></p>
                  <input type="submit" value="LOGIN" className='btn-auth'/>
                  <p className='privacy-policy'>
                    New to Myntra?
                    <Link to='/register'> Create an account</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
    <Footer/>
    </>
  )
}

export default Login