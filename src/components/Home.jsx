import React from 'react'
import Nav from './navbar'
import './Home.css'
import Footer from './Footer'
import Img from '../../src/Images/adyp_cover.png'

function Home() {
  return (
    <>
    <Nav/> 
    <div className='container main-container'>
      <div className='d-flex justify-content-around flex-wrap'>
        <div className=''>
          <p>Home / Archives / Vol. 11 No. 2 (2024): March-April</p>
          <h3>Vol 11 No. 2</h3>
          <img src={Img} className='cover-image' alt="" />
          {/* <img src="https://drive.google.com/file/d/116ccnz8eCP_VDLKOEHSB-rKg_erynxOy/view?usp=drive_link" className='cover-image' alt="" /> */}
          <p>Published : 09/03/2024</p>
          <hr />
          <h4 className='mb-5 mt-4'> Researche Articles</h4>

          <div className='container'>
            <h5>The Biological Camera from Kidney of Human Beings</h5>
            <p>Jitendra Sunte (Author)</p>
            <button className='view-pdf'>View PDF</button>
            <hr />
          </div>

        </div>

        <div className=' quick-links'>
          <h4>Quick Links</h4>
          <hr />
          <ul>
            <li>Editorial team</li>
            <li>Peer Review</li>
            <li>Publiscation Ethics</li>
            <li>Guidlines And Authors</li>
            <li>Aim & Scope/Focus</li>
            <li>Contact us</li>
            <li>Abstracting & Indexing</li>
          </ul>
          <hr />
          <h4>Latest Publication</h4>
          <ol>
            <li>Publication 1</li>
            <li>Publication 2</li>
            <li>Publication 3</li>
          </ol>
        </div>
      </div>
    </div>
    <Footer/> 
    </>
  )
}

export default Home