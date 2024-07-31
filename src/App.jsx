import { useState } from "react";
import "./App.css";
// import Nav from './components/navbar'
import Upload from "./components/upload";
// import Footer from './components/footer'
// import Login from './components/Auth/Login'
// import Register from './components/Auth/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Admin from './components/admin'
import Aboutinstitute from "./components/pages/Aboutinstitute";
import Admin from "./components/pages/Admin";

import Home from "./components/Home";
import Contact from "./components/contact/Contact";
import Editorial from "./components/Editorial";
import Home from './components/Home'
import Contact from './components/contact/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/login' element={<Login/>}/> */}
          {/* <Route path='/register' element={<Register/>}/> */}
          <Route path="/upload" element={<Upload />} />
          {/* <Route path='/admin' element={<Admin/>}/>  */}
          <Route path="/aboutinstitute" element={<Aboutinstitute />} />
          <Route path="/editorial" element={<Editorial />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home/>}/>
            {/* <Route path='/login' element={<Login/>}/> */}
           {/* <Route path='/register' element={<Register/>}/> */}
           <Route path='/upload' element={<Upload/>}/>
           {/* <Route path='/admin' element={<Admin/>}/>  */}
           <Route path='/aboutinstitute' element={<Aboutinstitute/>}/>
           <Route path='/admin' element={<Admin/>}/>
           <Route path='/contact' element={<Contact/>}/>
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
