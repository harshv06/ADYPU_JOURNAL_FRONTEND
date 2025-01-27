import React, { useEffect } from 'react'
import Navbar from '../navbar'
import Footer from '../Footer'
import './Contact.css'

const Contact = () => {
    useEffect(()=>{
        document.title="Contact"
    },[])
    return (
        <>
            <Navbar />
            <div className='row'>
                <div className='container col-md-4'>
                    <h3 style={{color:'purple', fontWeight:'bold'}}>Ajeenkya DY Patil School of Engineering</h3>
                    <p>For queries please feel free to contact at</p>
                    <h4>Ajeenkya DY Patil University DY Patil Road Via Lohgaon, Airport Rd, <br /> Charholi Budruk, <br /> Pune, 412105 Maharashtra, <br /> India</h4>

                    <h4>Email : editor_adypjiet@dypic.in</h4>
                    <h4>Phone: 020-35037922 Ex. 6606</h4>
                </div>

                <div className="container col-md-6">
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15123.805429562377!2d73.90888476137697!3d18.621257512347587!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c72dcca82637%3A0x95182b8e7a6a0910!2sAjeenkya%20DY%20Patil%20School%20of%20Engineering%2C%20(SPPU)!5e0!3m2!1sen!2sin!4v1722425486107!5m2!1sen!2sin" width={600} height={300} ></iframe>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Contact