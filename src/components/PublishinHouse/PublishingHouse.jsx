import React from 'react';
import Navbar from '../navbar';


function PublishingHouse() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="mb-4">All Correspondence to: Publisher</h1>
            
            <h4 className="text-justify mb-4">
              Ajeenkya D Y Patil School of Engineering<br />
              Ajeenkya DY Patil University, DY Patil Knowledge City Road, Via Lohegaon, Airport Rd,
              Charholi Budruk, Pune, Maharashtra 412105, India
            </h4>

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
