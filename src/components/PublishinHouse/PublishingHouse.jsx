import React from 'react';
import Navbar from '../navbar';

function PublishingHouse() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-justify align-self-center">
            <h1 style={{fontWeight:'400'}}>All Correspondence to,</h1>
            <h1 className="font-weight-bold ">Publisher</h1>
            {/* <h1 style={{fontSize:'30px'}}>Dr. Farook Sayyad</h1> */}
            <h1 className="text-justify mb-4" style={{fontWeight:800, color:'purple'}}>
              {/* <span style={{color:'purple', fontWeight:'bold',fontSize:'22px'}}>Ajeenkya DY Patil School of Engineering</span><br /> */}
              Ajeenkya DY Patil School of Engineering, 
            </h1>
            <h4>DY Patil Knowledge City Road, Via Lohegaon, Airport Rd,
              Charholi Budruk, Pune, Maharashtra 412105, India</h4>

            {/* Publisher name with style applied */}
            {/* <h4 style={{ color: 'purple', fontWeight: 'bold',fontSize:'20px' }}>
              Publisher: Ajeenkya DY Patil School of Engineering
            </h4> */}

            <div>
              <h4>Email: 
                <a href="mailto:editor_adypjiet@dypic.in">editor_adypjiet@dypic.in</a>
              </h4>
              <h4>Phone: 020-35037922 Ex. 6606</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PublishingHouse;
