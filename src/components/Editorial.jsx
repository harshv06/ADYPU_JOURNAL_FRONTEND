import React from "react";
// import {StyleSheet} from 'react'
import Navbar from "./navbar";
import "./Editorial.css"
import Footer from "./Footer";

const Editorial = () => {
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
        <h4>Chief Editor :</h4>
        <div className="container row main-editor">
          <div className="col-md-6">
            <img
              className="editor-image"
              src="src\Images\principal.jpg"
              alt=""
            />
            <h4>Dr. F B Sayyad, Professor, Mechanical Engineering, Ph.D. (Mechanical
              Engineering)</h4>
          </div>
          <div className="col-md-6">
            <img src="src\Images\sa.jpg" alt="" 
              className="editor-image"
              />
            <h4>Dr. Saniya Ansari, Associate Professor, E & TC Engineering, Ph.D.
              (ECE)</h4>
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
        <ol>
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
        </ol>
        <hr />
        <h4>Reviewer Board :</h4>
        <ol>
          <li>Dr. Smita Daterao, Assistant Professor, Civil, ADYPSOE Pune</li>
          <li>
            Dr. Pallavi Kharat, Assistant Professor, Civil, ADYPSOE Pune
          </li>
          <li>Dr.
            Tushar Phadtare, Associate Professor, Computer Engineering, ADYPSOE,
            Pune</li>
          <li>
            Dr. Shobha Rupnar, Assistant Professor, Applied Science, ADYPSOE
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
            Dr. Dilip More, Associate Professor, Mechanical Engineering,
            ADYPSOE, Pune
          </li>
          <li>
            Dr. Sanjay Khonde, Professor, E & TC Engineering, ADYPSOE, Pune
          </li>
          <li>Dr Lalat Indu Giri, Assistant professor, NIT Goa</li>
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
          <li>
            Dr. Kanchan Vaidhya, Assistant Professor, E & TC Engineering,
            ADYPSOE, Pune
          </li>
          <li>
            Dr. Nilesh Thorat, Assistant Professor, Computer Engineering,
            ADYPSOE, Pune
          </li>
        </ol>
        <hr />
        <h4>Topics Covered</h4>
        <ul>
          <li>Image Processing1</li>
          <li>AI & ML</li>
          <li>Computer Vision</li>
          <li>Applied Science</li>
          <li>VLSI & Embedded System</li>
          <li>Signal Processing</li>
          <li>Internet of Things</li>
          <li>Robotics and Automation</li>
          <li>Data Analytics</li>
          <li>Smart Computing</li>
          <li>Internet of Things (IoT)</li>
          <li>Recent Engineering & Technology</li>
          <li>Information Technology</li>
          <li>Computer Vision</li>
          <li>CAD/CAM/CIM</li>
          <li>Data Base Management System</li>
          <li>Civil Engineering and Applications</li>
          <li>Mechanical Engineering and Applications</li>
          <li>Human-Computer Interaction (HCI)</li>
          <li>Structural Engineering</li>
          <li>Image Analysis and Processing</li>
          <li>Mobile Computing and Applications</li>
          <li>Multimedia Communications</li>
          <li>Network Modelling and Simulation</li>
        </ul>
        <hr />
        <h4>Author Guidelines</h4>
        <ul>
          <li>
            ADYPJIET journal provides rapid publication of original articles,
            reviews and short communications.{" "}
          </li>
          <li>
            Submit the manuscript as a email attachment to the editorial office
            at email id adypjiet@gmail.com A manuscript number will be sent to
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
