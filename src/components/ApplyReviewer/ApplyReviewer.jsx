import React from 'react';
import Navbar from '../navbar';
import Footer from '../Footer';
import './ApplyReviewer.css';

function ApplyReviewer() {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <h1 className='apply-reviewer-heading'>Apply as a Reviewer</h1>
                <p className='paragraph1'>  Join the Ajeenkya DY Patil Journal of Innovation in Engineering & Technology (ADYPJIET) as a Reviewer

We are pleased to invite esteemed academicians to apply for the role of reviewer with the ADYPJIET. Serving as a reviewer is both a prestigious honor and a significant personal achievement.

                    <ul>
                        <li>Possession of a Master’s or PhD degree from a recognized institution.</li>
                        <li>
                        At least two publications in reputable academic journals.</li>
                    </ul>
                    If you meet these qualifications and are interested in contributing to our journal, please submit your application by completing the online form linked below:</p>

                <div >
                    <h5>Title <span style={{ color: 'red' }}>*</span></h5>
                    <select id="mySelect">
                        <option value="1">Mr.</option>
                        <option value="2">Mrs.</option>
                        <option value="3">Miss.</option>
                        <option value="4">Dr.</option>
                        <option value="5">Prof.</option>
                    </select>
                    <br /><br />
                    <h5>Full Name<span style={{ color: 'red' }}>*</span></h5>
                    <input type="text" name="fullname" id="fullname" placeholder='Full Name' />
                    <br /><br />
                    <h5>Qualification<span style={{ color: 'red' }}>*</span></h5>
                    <input type="text" name="qualification" id="qualification" placeholder='Qualification' />
                    <br /><br />
                    <h5>Designation<span style={{ color: 'red' }}>*</span></h5>
                    <select id="mySelect">
                        <option value="1">H.O.D</option>
                        <option value="2">Professor</option>
                        <option value="3">Assistant Professor</option>
                        <option value="4">Lecturer</option>
                        <option value="5">Dean</option>
                    </select>
                    <br /><br />

                    <h5>Affiliation(University/Collage/Company)<span style={{ color: 'red' }}>*</span></h5>
                    <input type="text" name="Affiliation" id="Affiliation" placeholder='Affiliation' />
                    <br /><br />
                    <h5>Postal Address<span style={{ color: 'red' }}>*</span></h5>
                    {/* <input type="text" name="qualification" id="qualification" placeholder='Qualification' /> */}
                    <textarea name="address" id="address" cols="50" rows="10" placeholder='address' className='p-1 m-2' ></textarea>
                    <br /><br />
                    <h5>Country<span style={{ color: 'red' }}>*</span></h5>
                    <select id="mySelect">
                        <option value="" disabled selected>Select a country</option>
                        <option value="us">United States</option>
                        <option value="ca">Canada</option>
                        <option value="gb">United Kingdom</option>
                        <option value="au">Australia</option>
                        <option value="de">Germany</option>
                        <option value="fr">France</option>
                        <option value="it">Italy</option>
                        <option value="es">Spain</option>
                        <option value="jp">Japan</option>
                        <option value="cn">China</option>
                        <option value="in">India</option>
                        <option value="br">Brazil</option>
                        <option value="za">South Africa</option>
                        <option value="mx">Mexico</option>
                        <option value="ar">Argentina</option>
                        <option value="cl">Chile</option>
                        <option value="co">Colombia</option>
                        <option value="pe">Peru</option>
                        <option value="ru">Russia</option>
                        <option value="kr">South Korea</option>
                        <option value="ng">Nigeria</option>
                        <option value="eg">Egypt</option>
                        <option value="sa">Saudi Arabia</option>
                        <option value="ae">United Arab Emirates</option>
                        <option value="tr">Turkey</option>
                        <option value="nz">New Zealand</option>
                        <option value="sg">Singapore</option>
                        <option value="my">Malaysia</option>
                        <option value="th">Thailand</option>
                        <option value="ph">Philippines</option>
                        <option value="vn">Vietnam</option>
                        <option value="pk">Pakistan</option>
                        <option value="bd">Bangladesh</option>
                        <option value="pk">Pakistan</option>
                        <option value="id">Indonesia</option>
                        <option value="il">Israel</option>
                        <option value="zw">Zimbabwe</option>
                        <option value="ke">Kenya</option>
                        <option value="gh">Ghana</option>
                        <option value="ug">Uganda</option>
                        <option value="tn">Tunisia</option>
                        <option value="dz">Algeria</option>
                        <option value="ma">Morocco</option>
                        <option value="pt">Portugal</option>
                        <option value="nl">Netherlands</option>
                        <option value="be">Belgium</option>
                        <option value="se">Sweden</option>
                        <option value="no">Norway</option>
                        <option value="fi">Finland</option>
                        <option value="dk">Denmark</option>
                        <option value="pl">Poland</option>
                        <option value="cz">Czech Republic</option>
                        <option value="hu">Hungary</option>
                        <option value="sk">Slovakia</option>
                        <option value="ro">Romania</option>
                        <option value="bg">Bulgaria</option>
                        <option value="hr">Croatia</option>
                        <option value="si">Slovenia</option>
                        <option value="lt">Lithuania</option>
                        <option value="lv">Latvia</option>
                        <option value="ee">Estonia</option>
                        <option value="by">Belarus</option>
                        <option value="ua">Ukraine</option>
                        <option value="md">Moldova</option>
                        <option value="ge">Georgia</option>
                        <option value="am">Armenia</option>
                        <option value="az">Azerbaijan</option>
                        <option value="kz">Kazakhstan</option>
                        <option value="uz">Uzbekistan</option>
                        <option value="kg">Kyrgyzstan</option>
                        <option value="tm">Turkmenistan</option>
                        <option value="np">Nepal</option>
                        <option value="lk">Sri Lanka</option>
                        <option value="mm">Myanmar</option>
                    </select>
                    <br /><br />
                    <h5>Mobile Numnber<span style={{ color: 'red' }}>*</span></h5>
                    <input type="text" name="Mobile number" id="Mobile number" placeholder='Mobile number' />
                    <br /><br />
                    <h5>Email<span style={{ color: 'red' }}>*</span></h5>
                    <input type="email" name="Email" id="Email" placeholder='Email' />
                    <br /><br />
                    <h5>Research Area<span style={{ color: 'red' }}>*</span></h5>
                    <input type="text" name="Research Area" id="Research Area" placeholder='Research Area' />
                    
                    <br /><br />
                    <h5>Keywords<span style={{ color: 'red' }}>*</span> (Seperated by comma)</h5>
                    <input type="text" name="" id="" placeholder='Keywords' />
                    
                    <br /><br />
                    <h5>Additional Information<span style={{ color: 'red' }}>*</span></h5>
                    {/* <input type="text" name="qualification" id="qualification" placeholder='Qualification' /> */}
                    <textarea name="additional" id="additional" cols="50" rows="10" placeholder='' className='p-1 m-2' ></textarea>
                    <br /><br />

                    <h5>Resume<span style={{ color: 'red' }}>*</span></h5>
                    <input type="file" name="" id="" placeholder='Keywords' />
                    <br /><br />
                    
                    <p> <input type="checkbox" name="" id="" />By applying to our reviewer you agree to receive newsletter from us. The aim of our newsletter service is to keep our authors and reviewers updated about new issue releases or new call for papers.</p>
<br />
                    <input type="submit" value="Submit" />
                    <p>
If you are facing any problem during submission of application, you can simply send it to adypjournal@gmail.com along with your CV. Subject of your email should be “Reviewer Application”.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ApplyReviewer;