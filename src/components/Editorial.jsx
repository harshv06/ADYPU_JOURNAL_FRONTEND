import React from "react";
// import {StyleSheet} from 'react'
import Navbar from "./navbar";
import "./Editorial.css"
import Footer from "./Footer";

const Editorial = () => {

  const img1="https://res.cloudinary.com/drv3etzyg/image/upload/v1725009703/principal_waxtha.png"
  const img2="https://res.cloudinary.com/drv3etzyg/image/upload/v1725009702/saniya_kx1ewa.png"
  const img3="https://res.cloudinary.com/drv3etzyg/image/upload/v1725009703/shobha-rupanar_xykf2a.png"
  const img4="https://res.cloudinary.com/drv3etzyg/image/upload/v1725009702/pankaj-agarkar_aotp0f.png"
  const img5="https://res.cloudinary.com/drv3etzyg/image/upload/v1725009702/rohit-garad_tkvkvm.png"
  const img6="https://res.cloudinary.com/drv3etzyg/image/upload/v1725009845/rahul-bachute_syvvmf.png"
  const img7="https://res.cloudinary.com/drv3etzyg/image/upload/v1725009702/bhagrayshree_dpnidg.png"
  const img8="https://res.cloudinary.com/drv3etzyg/image/upload/v1725009701/karodpati_r40i0j.jpg"
  const img9="https://res.cloudinary.com/drv3etzyg/image/upload/v1725009702/khairnar_wnbesi.png"
  return (
    <>
      <Navbar />
      <div
        className="container"
        style={{
          // margin: 20,
          // marginLeft:100
        }}
      >
        <h4>Chief Editors :</h4>
        <div className="row main-editor">
          <div className="col-md-6">
            <img
              className="editor-image"
              src={img1}
              alt=""
            />
            <h5>Dr. F B Sayyad, Professor, <br /> Mechanical Engineering, Ph.D. (Mechanical
              Engineering)</h5>
          </div>
          <div className="col-md-6">
            <img src={img2} alt=""
              className="editor-image"
            />
            <h5>Dr. Saniya Ansari, <br /> Associate Professor, E & TC Engineering, Ph.D.
              (ECE)</h5>
          </div>
          <hr />
        </div>

        <h4>Managing Editor</h4>
        <div className=" row managing-editor">

          <div className="">
            <img src={img3} alt=""
              className="editor-image"
            />
            <h5>Dr. Shobha Rupanar, <br /> Assistant Professor, Engineering Chemistery, shobha.rupanar@dypic.in
            </h5>
          </div>
        </div>
        {/* <ol>
          <li>
            Dr. F B Sayyad, Professor, Mechanical Engineering, Ph.D. (Mechanical
            Engineering)
          </li>
          <li>

            Dr. Saniya Ansari, Associate Professor, E & TC Engineering, Ph.D.
            (ECE)
          </li>
        </ol> */}
        <hr />
        <h4>Associate Editors :</h4>

        <div className="container row associate-editor">
          {/* <div className="col-md-3">
            <img
              className="editor-image"
              src={img3}
              alt=""
            />
            <h5>Dr. Sanjay Koli, Professor, E & TC Engineering, ADYPSOE Pune</h5>
          </div> */}
          <div className="col-md-2">
            <img src={img4} alt=""
              className="editor-image"
            />
            <h5>Dr. Pankaj Agarkar, Associate Professor, Computer Engineering, hod_comp@dypic.in
            </h5>
          </div>
          <div className="col-md-2">
            <img
              className="editor-image"
              src={img5}
              alt=""
            />
            <h5>Prof. Rohit Garad, Assistant Professor, Mechanical Engineering, hod_mech@dypic.in
            </h5>
          </div>
          <div className="col-md-2">
            <img
              src={img6} alt=""
              className="editor-image"
            />
            <h5>Dr. Rahul Bachute, Associate Professor, Automobile Engineering, hodautosoet@dypic.in
            </h5>
          </div>
          <div className="col-md-2">
            <img src={img7} alt=""
              className="editor-image"
            />
            <h5>Prof. Bhagyashree Dhakulkar, Assistant Professor, AIDS, hod_aids@dypic.in
            </h5>
          </div>
          {/* <div className="col-md-3">
            <img
              className="editor-image"
              src="src\Images\sanjay-khonde.jpg"
              alt=""
            />
            <h5>Dr. Sanjay Khonde, Professor, Mechanical Engineering, ADYPSOE, Pune
            </h5>
          </div> */}
          <div className="col-md-2">
            <img src={img8} alt=""
              className="editor-image"
            />
            <h5>Prof. Lt. Col. Sanjay Karodpati, Professor, Civil Engineering, hod_civil@dypic.in
            </h5>
          </div>
          <div className="col-md-2">
            <img src={img9} alt=""
              className="editor-image"
            />
            <h5>Dr. S M Khairnar, Professor, Engineering Mathematics,hodfe@dypic.in
            </h5>
          </div>
        </div>
        {/* <ol>
          <li>Dr. Sanjay Koli, Professor, E & TC Engineering, ADYPSOE Pune</li>
          <li>
            Dr. Pankaj Agarkar, Associate Professor, Computer Engineering,
            ADYPSOE, Pune
          </li>
          <li>
            Dr. Shreepad Sarange, Associate Professor, Mechanical Engineering,
            ADYPSOE, Pune
          </li>
          <li>
            Dr. Rahul Bachute, Associate Professor, Mechanical Engineering,
            ADYPSOE, Pune
          </li>
          <li>
            Prof. Bhagyashree Dhakulkar, Assistant Professor, AIDS, ADYPSOE Pune
          </li>
          <li>
            Dr. Sanjay Khomde, Professor, Mechanical Engineering, ADYPSOE, Pune
          </li>
          <li>
            Dr. Nagesh Shelke, Professor, Civil Engineering, ADYPSOE, Pune
          </li>
          <li>
            Dr. S M Khairnar, Professor, Engineering Mathematics, ADYPSOE, Pune
          </li>
        </ol> */}
        <hr />
        <h4>Advisory Board :</h4>
        <div className="container row">

          <div className="col-md-6">
            <ul>

              <li>
                Dr. Nagesh Shelke, Professor, Civil Engineering, ADYPSOE, Pune
              </li>
              <li>Dr. Smita Daterao, Assistant Professor, Civil, ADYPSOE Pune</li>
              <li>
                Dr. Pallavi Kharat, Assistant Professor, Civil, ADYPSOE Pune
              </li>
              <li>Dr.
                Tushar Phadtare, Associate Professor, Computer Engineering, ADYPSOE,
                Pune</li>
              <li>
                Dr. Shobha Rupanar, Assistant Professor, Applied Science, ADYPSOE
                Pune
              </li>
              <li>
                Dr. Kailas Tehare, Assistant Professor, Applied Science, ADYPSOE
                Pune
              </li>
              <li>
                Dr. Niranjan Shegaonkar, Associate Professor, Mechanical
                Engineering, ADYPSOE, Pune
              </li>
              <li>
                Dr. Deepti, Assistant Professor, Computer Engineering, ADYPSOE Pune
              </li>
              <li>
                Dr. Shreepad Sarange, Associate Professor, Mechanical Engineering,
                ADYPSOE, Pune
              </li>
              <li>
                Dr. Dilip More, Associate Professor, Mechanical Engineering,
                ADYPSOE, Pune
              </li>
              <li>
                Dr. Sanjay khonde, Professor, Mechanical Engineering, ADYPSOE, Pune
              </li>
              <li>Dr Lalat Indu Giri, Assistant professor, NIT Goa</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>

              <li>
                Dr S A Khan, Professor in Mechanical Engineering, Islamic university
                Malaysia
              </li>
              <li>
                Dr Israr Mohammad, Professor in Mechanical Engineering, Maryam
                Abacha American university of Nigeria
              </li>
              <li>
                Dr. Vidhya Patil, Professor in Civil Engineering, AISSMSCOE, Pune
              </li>
              <li>
                Dr Sanjay Kulkarni, Professor in Civil Engineering, Symbiosis
                college, Pune
              </li>
              <li>
                Dr. Dhananjay Upasani, Professor in E & TC Engineering, Samarth
                group Institutions, COE, Belhe, Pune
              </li>
              <li>
                Dr. Mrunal Bachute, Professor, E & TC, Symbiosis University, Lavale
                Pune
              </li>
              <li>Dr. Vishal Puranik, Assistant Professor, E & TC, MITAOE, Pune</li>
              <li>
                Dr. Sharmeela Chennaipan, Professor, Electrical Engineering, Chennai
              </li>
              <li>
                Dr. Ankush Kadu, Assistant Professor, Electrical Engineering,
                ADYPSOE, Pune
              </li>
              <li>Dr. Sanjay Koli, Professor, E & TC Engineering, ADYPSOE Pune</li>
              <li>
                Dr. Kanchan Vaidhya, Assistant Professor, E & TC Engineering,
                ADYPSOE, Pune
              </li>
              <li>
                Dr. Nilesh Mali, Assistant Professor, Computer Engineering,
                ADYPSOE, Pune
              </li>
            </ul>
          </div>
        </div>





        <hr />
        <h4>Topics Covered</h4>
        <ul>
          <div className="row">
            <div className="col-md-4">
              <li>Image Processing1</li>
              <li>AI & ML</li>
              <li>Computer Vision</li>
              <li>Applied Science</li>
              <li>VLSI & Embedded System</li>
              <li>Signal Processing</li>
              <li>Internet of Things</li>
              <li>Robotics and Automation</li>
            </div>
            <div className="col-md-4">
              <li>Data Analytics</li>
              <li>Smart Computing</li>
              <li>Internet of Things (IoT)</li>
              <li>Recent Engineering & Technology</li>
              <li>Information Technology</li>
              <li>Computer Vision</li>
              <li>CAD/CAM/CIM</li>
              <li>Data Base Management System</li>
            </div>
            <div className="col-md-4">

              <li>Civil Engineering and Applications</li>
              <li>Mechanical Engineering and Applications</li>
              <li>Human-Computer Interaction (HCI)</li>
              <li>Structural Engineering</li>
              <li>Image Analysis and Processing</li>
              <li>Mobile Computing and Applications</li>
              <li>Multimedia Communications</li>
              <li>Network Modelling and Simulation</li>
            </div>
          </div>


        </ul>
        <hr />
        <h4>Author Guidelines</h4>
        <ul>
          <li>
            ADYPJIET journal provides rapid publication of original articles,
            review aritcles, case studies and short communications.{" "}
          </li>
          <li>
            Submit the manuscript as a email attachment to the editorial office
            at email id <span style={{fontWeight:'bold'}}>adypjournal@gmail.com</span>. A manuscript number will be sent to
            the corresponding author as a acknowledgement.{" "}
          </li>
          <li>
            All the manuscripts are peer reviewed by a minimum three members
            from editorial board or reviewer boards.{" "}
          </li>
          <li>
            All the manuscripts should be preferably in ADYPJIET journal Paper
            template.
          </li>
        </ul>
      </div>
      <Footer />
    </>


  );
};

export default Editorial;
