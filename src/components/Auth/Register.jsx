import React from 'react'
import './RegisterStyle.css'
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import { useState } from 'react';
import Nav from '../navbar'
import Footer from '../Footer';



const Login = () => {

  const [data, setData] = useState({
    email: "",
    password: "",
    cPassword: "",
  });


  const handlePress = async (event) => {

    // event.preventDefault();
    // // navigation.navigate('HomeScreen')
    // if(!email || !password ||cPassword){  
    //   console.log("Please Fill All Fields")
    //   return
    // }
    // setLoading(true);

    console.log(data);
    await fetch("https://edutechserver.onrender.com/auth/sendOTP", {
      method: "POST",
      mode:'cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data);
          // setLoading(false);
        } else if (data.message) {
          console.log(data);
          // // setLoading(false);
          // Alert.alert("Success", "Email Sent To User", [
          //   {
          //     text: "Ok",
          //     onPress: () =>
          //       navigation.navigate("OTPScreen", { userData: data.data }),
          //   },
          // ]);
        }
      });
  };
  return (
    <>


    <Nav/>
      <div className="d-flex flex-column align-items-center container all-container">
        {/* <img src="https://imgs.search.brave.com/GR7amdoHkN3c7eA_ZcFyJah37IbzQR2tp_RuXu9BBJY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9waW5rLW9yYW5n/ZS1ncmFkaWVudC1i/YWNrZ3JvdW5kXzE3/MDU3OS0zOTEuanBn/P3NpemU9NjI2JmV4/dD1qcGc" alt="" /> */}
        <div className='container d-flex flex-column  main-container'>
          <h3 className='ms-3'>Register</h3>
          <div className="container d-flex flex-column form-container">
            {/* <form action=""> */}
              <input type="email" name="email" id="email " placeholder='Email' onChange={(text) => setData({ ...data, email: text.target.value })} />
              {/* <input type="text" name="uname" id="uname" placeholder='Username' required /> */}
              <input type="password" name="pass" id="pass" placeholder='Password' required onChange={(text) => setData({ ...data, password: text.target.value })} />
              <input type="password" name="cpass" id="cpass" placeholder='Confirm Password' required onChange={(text) => setData({ ...data, cPassword: text.target.value })} />

              {/* <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
              <label class="form-check-label" for="flexRadioDefault1">
                Student
              </label>
              <br />
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
              <label class="form-check-label" for="flexRadioDefault2">
                Teacher
              </label>
              <br />
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
              <label class="form-check-label" for="flexRadioDefault2">
                Admin
              </label> */}
              {/* <div className='check_btn'>

                <input type="radio" class="btn-check" name="options-basekj" id="check_student" autocomplete="off" />
                <label class="btn btn-outline-danger" for="check_student">Student</label>

                <input type="radio" class="btn-check" name="options-base" id="check_teacher" autocomplete="off" />
                <label class="btn btn-outline-danger" for="check_teacher">Teacher</label>

                <input type="radio" class="btn-check" name="options-base" id="check_admin" autocomplete="off" />
                <label class="btn btn-outline-danger" for="check_admin">Admin</label>
              </div> */}


              <p className='privacy-policy'>By continuing, I agree to the <a href="">Terms of Use</a> & <a href="">Privacy Policy</a></p>
              {/* <input type="submit" value="Register" onClick={() => handlePress()} /> */}
              <button onClick={() => handlePress()} className='btn-auth'>REGISTER</button>
              <p className='privacy-policy'>
                Already an User?
                {/* <Link to='/login'> Login here</Link> */}

              </p>
            {/* </form> */}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Login