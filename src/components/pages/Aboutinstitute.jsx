import React from "react";
import Navbar from "../navbar";
import Footer from "../Footer";
import "./Aboutinstitute.css";


function Aboutinstitute() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1 style={{color:'brown'}}>About The Institute</h1>
        {/* <h1>Ajeenkya DY Patil School Of Engineering, Pune</h1> */}

        <div className=" row">
          <div className=" col-md-6" style={{ textAlign: "justify" }}>
            <p>
              Ajeenkya DY Patil University (ADYPU) is India’s premier
              destination for higher education. Established under the
              Maharashtra Government Act of 2015, the university aims to shape
              an innovation-oriented Indian society. It is nestled in Pune,
              often called the ‘Oxford of the East’ for its educational
              eminence, within a vast 100-acre campus.
            </p>
            <p>
              The university’s benchmarked curriculum offers an impressive range
              of 28 courses and 76 specializations, with solid connections to 17
              international partner universities, providing students with
              opportunities for academic brilliance and a competitive edge in
              the global arena. These include undergraduate, postgraduate, and
              doctorate programs in the most relevant industry-focused areas,
              offering undergraduate and postgraduate programs in Architecture,
              Business, Engineering, Technology, Design, Film and Media, Law,
              and Liberal Arts.
            </p>
            <p>
              ADYPU is ranked among the top 50 Universities in the Times Higher
              Education impact ranking. It is now an ISO-Certified University
              with ISO-9001-2015 and 21001-2018 and has also achieved notable
              success in obtaining the ISO 14001:2015 and ISO 50001:2018
              certificates for Environment and Energy Management, further
              enhancing its credentials.
            </p>
            
          </div>

          <div className="col-md-6">
            <img
              src="https://cdn-eu.aglty.io/sunstoneuniversity/Attachments/NewItems/adypu-16x9_20230306095534_0.jpg"
              alt=""
            />
          </div>
        </div>

        <div className=" row">
          <div className=" col-md-6" style={{ textAlign: "justify" }}>
           
            <img
              src="https://images.shiksha.com/mediadata/images/1553492033phpDv56ib.jpeg"
              alt=""
            />
            
          </div>

          <div className="col-md-6" style={{ textAlign: "justify" }}>
            <p>
              Our students champion the synthesis of theory and practice while
              emphasizing creativity and hands-on application. Our courses
              empower graduates to think critically, act strategically, and
              tackle real-world challenges with innovative solutions. Whether
              managing projects, teams, or businesses, our students emerge as
              dynamic, work-ready professionals. Underpinned by the distinctive
              ‘ADYPU Student Experience,’ our undergraduate and postgraduate
              programs excel in unique domains. This exceptional journey is
              guided by a dedicated faculty and reinforced by top-notch
              facilities and world-class infrastructure.
            </p>
            <p>
              Innovation is not just a buzzword for us—it’s woven into the
              fabric of our institution. We continuously enhance our
              capabilities to adapt easily to change, employing innovative
              strategies in both our internal operations and external offerings.
              We are a purpose-driven institution committed to nurturing
              knowledge domains and inquiries. Our ambition remains to shape
              individuals into the visionaries, thinkers, and trailblazers of
              the future, which makes the institution a catalyst for
              transformation.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Aboutinstitute;
