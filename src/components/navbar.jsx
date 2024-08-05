import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Img from "../../src/Images/logo.png";

function Navbar() {
  return (
    <>
      <div className="container justify-content-center p-4" id="nav-tab">
        <div className="row">
          <div className="col-4 col-sm-2">
            <img src={Img} alt="" className="logo" />
          </div>
          <div className="col-8 col-sm-10 align-self-center justify-content-start">
            <h2 className="heading ">
              Ajeenkya DY Patil Journal of Innovation in Engineering &
              Technology
            </h2>
            <p className="subHeading">
              Ajeenkya DY Patil Official Research Journal
            </p>
          </div>
        </div>
        {/* <button><Link to='/login'>Login</Link> </button> */}
        {/* <button><Link to='/register'>Register</Link></button> */}
      </div>
      <div className="nav-container nav-line">
        <nav class="navbar navbar-expand-lg ">
          <div class="container ">
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse  " id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li class="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li class="nav-item ">
                  <Link to="/aboutinstitute" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/editorial" className="nav-link">
                    Editorial Board
                  </Link>
                </li>
                {/* <li class="nav-item dropdown">

                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Archives
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li> */}
                {/* <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Guidlines For Author</a>
                                </li> */}
                {/* <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Guidlines For Author</a>
                                </li> */}

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Guidlines For Author
                  </a>
                  <ul class="dropdown-menu">
                    {/* <li>
                      <a class="dropdown-item" href="#">
                        Publication Ethics
                      </a>
                    </li> */}
                    <li>
                      <Link to="/author_guide" className="nav-link">
                        Author Guidelines
                      </Link>
                    </li>
                    <li>
                      <Link to="/review" className="nav-link">
                        Review Policy
                      </Link>
                    </li>
                    <li>
                      <a
                        href="././Copyright-Form.pdf"
                        className="view-pdf dropdown-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Copyright Forms
                      </a>
                    </li>
                    <li>
                      <a
                        href="././paper-template.pdf"
                        className="view-pdf dropdown-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Paper Template
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Submission
                  </a>
                  <ul class="dropdown-menu">
                    <Link to="/upload" className="dropdown-item">
                      Upload
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Tracking
                    </Link>
                  </ul>
                </li>

                {/* <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Submission</a>
                                </li> */}

                <li class="nav-item">
                  {/* <a class="nav-link active" aria-current="page" href="">Home</a> */}
                  <Link to="/contact" className="nav-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <form class="d-flex" role="search">
                {" "}
              </form>
            </div>
          </div>
        </nav>
      </div>
      <marquee behavior="" direction="" loop="">
        Ajeenkya DY Patil School of Engineering, Official Research Journal Page, Ajeenkya DY Patil Journal in Engineering Tecchnologies (ADYPJIET)
      </marquee>
    </>
  );
}

export default Navbar;
