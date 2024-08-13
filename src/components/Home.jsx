import React from "react";
import Nav from "./navbar";
import "./Home.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
  const Img ="https://res.cloudinary.com/drv3etzyg/image/upload/v1723531257/adyp_cover_o3dgc4.png"
  const google ="https://res.cloudinary.com/drv3etzyg/image/upload/v1723540226/google_acukis.png"
  const academia ="https://res.cloudinary.com/drv3etzyg/image/upload/v1723540225/academia_rm0ke5.png"
  const rgate ="https://res.cloudinary.com/drv3etzyg/image/upload/v1723540225/rgate_uvnqo3.png"
  const crossref ="https://res.cloudinary.com/drv3etzyg/image/upload/v1723540225/crossref_n8k4ty.png"
  const worldcat ="https://res.cloudinary.com/drv3etzyg/image/upload/v1723540225/worldcat_r1wzyw.png"

  const fetchPdf = async () => {
    try {
      // Replace with your backend endpoint to fetch the PDF
      const response = await fetch('http://192.168.0.105:3100/fetchHomePagePdf');

      if (response.ok) {
        const pdfBlob = await response.blob();
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl, '_blank'); // Open PDF in a new tab
      } else {
        alert('Failed to fetch PDF');
      }
    } catch (error) {
      console.error('Error fetching PDF:', error);
      alert('An error occurred while fetching the PDF');
    }
  };

  return (
    <>
      <Nav />
      <div className="container main-container">
        <div className="row">
          <div className="container-text col-md-3">
            <p>Home / Archives / Vol. 11 No. 2 (2024): March-April</p>
            <h3>Vol 11 No. 2</h3>
            <img src={Img} className="cover-image" alt="ADYP Cover" />
            {/* <img src="https://drive.google.com/file/d/116ccnz8eCP_VDLKOEHSB-rKg_erynxOy/view?usp=drive_link" className='cover-image' alt="" /> */}
            <p>Published : 09/03/2024</p>
            <hr />
            <h4 className="mb-5 mt-4"> Research Articles</h4>

            <div className="container-2">
              <h5>The Biological Camera from Kidney of Human Beings</h5>
              <p>Jitendra Sunte (Author)</p>
              <a onClick={fetchPdf}>
                View PDF
              </a>
              <hr />
            </div>
          </div>

          <div className="container col-md-4">
            <br />
            <h3>About Journal</h3>
            <p className="about-journal">
              Ajeenkya DY Patil Journal in Engineering Technology (ADYPJIET) is
              a scholarly, open-access, peer-reviewed journal that publishes
              papers quarterly since 2021 dealing with methods and applications
              in applied science and engineering management. <br />
              <br />
              The journal covers research and developments in the field of
              applied sciences and technologies as they relate to Industrial
              Engineering, Computer Science, Applied Mathematics, Operation
              Research, Production and Manufacturing Engineering, Statistics,
              Economics, Mechanical engineering, Civil engineering, Electrical
              engineering. <br />
              <br />
              Architectural engineering, Computer engineering, Information
              technology engineering, Aerospace engineering, Industrial
              management, Genetic engineering, Material engineering, Chemical
              engineering, and other related Applied Sciences and Engineering
              fields. However, the main focus of this journal is on Industrial
              Engineering.
            </p>
          </div>

          <div className=" quick-links col-md-3">
            <h4>Quick Links</h4>
            <hr />
            <ul className="quick_link_ul">
              <li>
                <Link to="/editorial" className="nav-link quick-nav-link">
                  Editorial Board
                </Link>
              </li>
              <li>
                <Link to="/review" className="nav-link quick-nav-link">
                  Review Policy 
                </Link>
              </li>
              {/* <li>Abstracting & Indexing</li> */}
              <li>
                <Link to="/upload" className="nav-link quick-nav-link">
                  Upload
                </Link>
              </li>
              {/* <li>Track</li> */}
              {/* <li>Review Process</li> */}
              <li>
                <Link to="/contact" className="nav-link  quick-nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
            <hr />
            <h4>Latest Publication</h4>
            <ol>
              <li>Publications 1</li>
              <li>Publications 2</li>
              <li>Publications 3</li>
            </ol>
            <hr />
            <h4>Indexing</h4>
            <ul className="indexing_icons">
              <li>
                <a href="https://support.google.com/webmasters/answer/7645831?hl=en">
                  <img src={google} alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.crossref.org/documentation/principles-practices/journals/">
                  <img src={crossref} alt="" />
                </a>
                {/* <p>Cross Ref</p> */}
              </li>
              <li>
                <a href="https://search.worldcat.org/title/The-art-of-indexing/oclc/29258238">
                  <img src={worldcat} alt="" />
                </a>
                {/* <p>WorldCat</p> */}
              </li>
              <li>
                <a href="https://www.researchgate.net/">
                  <img src={rgate} alt="" />
                </a>
                {/* <p>Research Gate</p> */}
              </li>

              <li>
                <a href="https://www.academia.edu/45684909/OPEN_ACCESS_JOURNALS_AND_INDEXING">
                  <img src={academia} alt="" />
                </a>
                {/* <p>Academia</p> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
