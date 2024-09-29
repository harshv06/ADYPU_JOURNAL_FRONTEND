import React, { useEffect, useState } from "react";
import Nav from "./navbar";
import "./Home.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
  // const MAIN_URL="https://api.adypjiet.in"
  const MAIN_URL = "http://172.24.96.1:3100";
  const Cover =
    "https://res.cloudinary.com/drv3etzyg/image/upload/v1725010011/adyp_cover_nh3hry.png";
  const BGIMG =
    "https://res.cloudinary.com/drv3etzyg/image/upload/v1725010012/bg_lakuks.jpg";
  const google =
    "https://res.cloudinary.com/drv3etzyg/image/upload/v1723540226/google_acukis.png";
  const academia =
    "https://res.cloudinary.com/drv3etzyg/image/upload/v1723540225/academia_rm0ke5.png";
  const rgate =
    "https://res.cloudinary.com/drv3etzyg/image/upload/v1723540225/rgate_uvnqo3.png";
  const crossref =
    "https://res.cloudinary.com/drv3etzyg/image/upload/v1723540225/crossref_n8k4ty.png";
  const worldcat =
    "https://res.cloudinary.com/drv3etzyg/image/upload/v1723540225/worldcat_r1wzyw.png";

  const [pdfs, setPdfs] = useState([]);
  const [error, setError] = useState("");
  const [author,setAuthor]=useState("")
  const [path,setPath]=useState("")
  const [fileName,setFileName]=useState("")

  //To fetch the most recent PDF from the backend
  const viewLatestPDF = async () => {
    try {
      const response = await fetch(`${MAIN_URL}/getLatestPDF`);

      if (response.status === 200) {
        const pdfBlob = await response.blob();
        const pdfUrl = URL.createObjectURL(pdfBlob);
        console.log(response);
        window.open(pdfUrl, "_blank"); // Open the PDF in a new tab
      } else {
        alert("No PDF found");
      }
    } catch (error) {
      console.error("Error fetching the latest PDF:", error);
    }
  };

  //useEffect for setting page title
  useEffect(() => {
    document.title = "ADYPJIET | Home";
    const fetchLatestPDF = async () => {
      try {
        const response = await fetch(`${MAIN_URL}/getLatestPDFMeta`);
        const json = await response.json();
        setAuthor((prev)=>json.authors)
        setPath((prev)=>json.filePath)
        setFileName((prev)=>json.fileName)
      } catch (error) {
        console.error("Error fetching the latest PDF:", error);
      }
    };
    fetchLatestPDF();
  }, []);

  const fetchAnyPDF = () => {
    fetch(`${MAIN_URL}/getAnyPDF?filePath=${encodeURIComponent(path)}`)
      .then((response) => {
        if (response.ok) {
          return response.blob(); // Get the PDF as a blob
        }
        throw new Error("PDF not found");
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        window.open(url, "_blank"); // Open the PDF in a new tab
      })
      .catch((error) => {
        console.error("Error fetching the PDF:", error);
      });
  };

  return (
    <>
      <Nav />
      <div className="bg">
        <img src={BGIMG} alt="" className="bg-image" />
      </div>
      <div className="container main-container">
        <div className="row">
          <div className="container-text col-md-3">
            {/* <p>Home / Archives / Vol. 11 No. 2 (2024): March-April</p> */}
            {/* <h3>Vol 1 No. 1</h3> */}
            <img src={Cover} className="cover-image" alt="ADYP Cover" />
            {/* <img src="https://drive.google.com/file/d/116ccnz8eCP_VDLKOEHSB-rKg_erynxOy/view?usp=drive_link" className='cover-image' alt="" /> */}
            {/* <p>Published : 09/03/2024</p> */}
            <hr />
            <h4 className="mb-5 mt-4" style={{ color: "green" }}>
              {" "}
              Research Articles
            </h4>

            <div className="container-2">
              <h5>{fileName?fileName:null}
              </h5>
              <p>{author?author+"(Author)":null}</p>
              <button className="view-pdf" onClick={fetchAnyPDF}>
                View PDF
              </button>
              <hr />
            </div>
          </div>

          <div className="container col-md-4">
            <br />
            <p className="about-journal">
              <h3>About Journal</h3>
              The Ajeenkya DY Patil Journal of Innovation in Engineering &
              Technology (ADYPJIET) is a scholarly, open-access, peer-reviewed
              journal that has been published quarterly from 2024. It aims to
              foster advancements in applied science and engineering management.{" "}
              <br />
              <br />
              ADYPJIET encompasses a diverse range of topics, including
              Industrial Engineering, Computer Science, Applied Mathematics,
              Operations Research, Production and Manufacturing Engineering,
              Statistics, Economics, Mechanical Engineering, Civil Engineering,
              Electrical Engineering, Architectural Engineering, Computer
              Engineering, Information Technology Engineering, Aerospace
              Engineering, Industrial Management, Genetic Engineering, Material
              Engineering, Chemical Engineering, and other related fields.
              <br />
              <br />
              ADYPJIET publishes papers in the following categories:
              <ul>
                <li> Research Articles</li>
                <li>Review Articles</li>
                <li> Case Reports</li>
                <li>Short Communications</li>
              </ul>
            </p>
          </div>

          <div className=" quick-links col-md-3">
            <h4 className="side-heading">Quick Links</h4>
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

            {/* <h4 className="side-heading">Latest Publication</h4>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul>
              {pdfs.map((pdf, index) => (
                <li key={index}>
                  <button style={{margin:5,padding:3}} onClick={() => fetchAnyPDF(pdf.path)}>
                    Publication {index + 1}
                  </button>
                </li>
              ))}
            </ul>
            <hr /> */}

            <h4 className="side-heading"> Journal Information</h4>
            <div className="info">
              <span>TITLE: </span>Ajeenkya DY Patil Journal of Innovation in
              Engineering & Technology <br />
              <span>ABBREVIATION :</span> ADYPJIET <br />
              <span>E-ISSN :</span> <br />
              <span>FREQUENCY :</span> <br />
              <span>CROSS REF/DOI : </span> <br />
              <span>EDITOR-IN-CHIEF : </span>Dr. F. B. Sayyad
              <p style={{ marginLeft: "135px" }}>Dr. Saniya Ansari</p>
              <span>EMAIL : </span>editor_adypjiet@dypic.in
              <br />
            </div>

            <hr />
            <p>
              <span style={{ fontWeight: "bold" }}>
                Article Processing Charges: ₹500
              </span>
              <br />
              <span style={{ fontWeight: "bold" }}>
                Review Process Duration:
              </span>{" "}
              4 to 6 weeks
              <br />
              <span style={{ fontWeight: "bold" }}>
                Publication Timeframe:
              </span>{" "}
              1 to 6 months
            </p>
            <h4 className="submission-box" style={{ textAlign: "center" }}>
              Manuscript submission is open for Volume 1 Issue 1 (Sep 2024).
            </h4>
            {/* <h4>Indexing</h4> */}
            {/* <ul className="indexing_icons">
              <li>
                <a href="https://support.google.com/webmasters/answer/7645831?hl=en">
                  <img src={google} alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.crossref.org/documentation/principles-practices/journals/">
                  <img src={crossref} alt="" />
                </a>
              </li>
              <li>
                <a href="https://search.worldcat.org/title/The-art-of-indexing/oclc/29258238">
                  <img src={worldcat} alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.researchgate.net/">
                  <img src={rgate} alt="" />
                </a>
              </li>

              <li>
                <a href="https://www.academia.edu/45684909/OPEN_ACCESS_JOURNALS_AND_INDEXING">
                  <img src={academia} alt="" />
                </a>
              </li>
            </ul> */}
          </div>
          <div className="index-by">
            <h2>Indexed By</h2>
            <marquee behavior="" direction="">
              <a href="https://www.academia.edu/45684909/OPEN_ACCESS_JOURNALS_AND_INDEXING">
                <img src={academia} alt="" />
              </a>

              <a href="https://support.google.com/webmasters/answer/7645831?hl=en">
                <img src={google} alt="" />
              </a>

              <a href="https://www.crossref.org/documentation/principles-practices/journals/">
                <img src={crossref} alt="" />
              </a>

              <a href="https://www.researchgate.net/">
                <img src={rgate} alt="" />
              </a>

              <a href="https://search.worldcat.org/title/The-art-of-indexing/oclc/29258238">
                <img src={worldcat} alt="" />
              </a>
            </marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
