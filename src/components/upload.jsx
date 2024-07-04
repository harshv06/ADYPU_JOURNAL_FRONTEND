import React from 'react'
import { useState } from 'react';
import Nav from './navbar'
import axios from "axios"
import './upload.css'


function upload() {

  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [file3, setFile3] = useState("");
  const [file4, setFile4] = useState("");
  const [file5, setFile5] = useState("");
  const [file6, setFile6] = useState("");
  const [file7, setFile7] = useState("");
  const [file8, setFile8] = useState("");

  const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file1);
        formData.append("file", file2);
        formData.append("file", file3);
        formData.append("file", file4);
        formData.append("file", file5);
        formData.append("file", file6);
        formData.append("file", file7);
        formData.append("file", file8);
        // console.log(formData);
        // console.log(file);
        try {
          await axios.post("https://adypu.onrender.com/v1/uploadPDF", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          alert("PDF uploaded successfully.");
        } catch (error) {
          console.error(error);
          alert("Error uploading PDF.");
        }
      };
    

  return (


    <>
      <Nav />
      <div className='container'>
        <form action="" onSubmit={handleSubmit} encType="multipart/form-data">
          <div className='container row'>
            <div className='col-sm-4'>Corresponding Author</div>
            <div className='col-sm-2'>
              <input type="text" placeholder='First Name' />
            </div>
            <div className='col-sm-2'>
              <input type="text" placeholder='Middle Name' />
            </div>
            <div className='col-sm-2'>
              <input type="text" placeholder='Last Name' />
            </div>
          </div>

          <div className='container row'>
            <div className='col-sm-4'>Mobile Number</div>
            <div className='col-sm-4'>
              <input type="text" placeholder='Mobile Number' />
            </div>
          </div>

          <div className='container row'>
            <div className='col-sm-4'>Email</div>
            <div className='col-sm-4'>
              <input type="email" placeholder='Email' />
            </div>
          </div>
{/* 
          <div className='container row'>
            <div className='col-sm-4'><b>1. INITIAL FILE</b> (Compile Single Word File) Initial file will have following documents. A covering letter then acknowledgements, declaration of interest, funding details, reference number and date of approval from Institutional Ethics Committee, in that order.</div>
            <div className='col-sm-4'>
              <input type="file" onChange={(e) => setFile1(e.target.files[0])}/>
              <p>please upload less than 5mb file</p>
            </div>
          </div> */}
          {/* <br />
          <div className='container row'>
            <div className='col-sm-4'><b>2. TITLE PAGE (WORD FILE)</b></div>
            <div className='col-sm-4'>
              <input type="file" onChange={(e) => setFile2(e.target.files[0])}/>
              <p>please upload less than 5mb file</p>
            </div>
          </div>
          <br /> */}

          <div className='container row'>
            <div className='col-sm-4'><b>3. MAIN FILE (WORD FILE)</b> (including abstract and key words, introduction, material and methods, results/observation, discussion, conclusions, references and tables at last each on separate page)</div>
            <div className='col-sm-4'>
              <input type="file" onChange={(e) => setFile3(e.target.files[0])}/>
              <p>please upload less than 5mb file</p>
            </div>
          </div>


          {/* <div className='container row'>
            <div className='col-sm-4'><b>4. FIGURES AND FIGURE LEGENDS</b></div>

            <div className='container row'>
              <div className='col-sm-4'>Image 1 :</div>
              <div className='col-sm-4'>
                <input type="file" onChange={(e) => setFile4(e.target.files[0])}/>
                <p>please upload less than 5mb file</p>
              </div>
            </div>
            <div className='container row'>
              <div className='col-sm-4'>Image 2 :</div>
              <div className='col-sm-4'>
                <input type="file" onChange={(e) => setFile5(e.target.files[0])}/>
                <p>please upload less than 5mb file</p>
              </div>
            </div>
            <div className='container row'>
              <div className='col-sm-4'>Image 3 :</div>
              <div className='col-sm-4'>
                <input type="file" onChange={(e) => setFile6(e.target.files[0])}/>
                <p>please upload less than 5mb file</p>
              </div>
            </div>
            <div className='container row'>
              <div className='col-sm-4'>Image 4 :</div>
              <div className='col-sm-4'>
                <input type="file" onChange={(e) => setFile7(e.target.files[0])}/>
                <p>please upload less than 5mb file</p>
              </div>
            </div>
          </div>



          <div className='container row'>
            <div className='col-sm-4'><b>5. CONTRIBUTORS’ FORM (SCANEED SIGNED COPY)</b> Download Template</div>
            <div className='col-sm-4'>
              <input type="file" onChange={(e) => setFile8(e.target.files[0])}/>
              <p>please upload less than 5mb file</p>
            </div>
          </div>
          <br />
          <div className='container row'>
            <div className='col-sm-4'><b>Re-write the letters in captcha</b> Download Template</div>
            <div className='col-sm-4'>
              C X P B
              <input type="text" />

            </div>
          </div> */}

          <input type="submit" value="Upload" className='upload-pdf'/>
        </form>
      </div>
    </>
  )
}

export default upload


// import React, { useState } from "react";
// import axios from "axios";

// function App() {
//   // const [formData, setFormData] = useState({
//   //   firstName: "",
//   //   lastName: "",
//   //   file: null,
//   // });

//   const [file, setFile] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, file: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("file", file);
//     console.log(formData);
//     console.log(file);
//     try {
//       await axios.post("http://192.168.0.105:3100/v1/uploadPDF", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       alert("PDF uploaded successfully.");
//     } catch (error) {
//       console.error(error);
//       alert("Error uploading PDF.");
//     }
//   };

//   return (
//     <div>
//       <h1>Upload Form</h1>
//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         <div>
//           <label htmlFor="firstName">First Name:</label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             // value={formData.firstName}
//             // onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="lastName">Last Name:</label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             // onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="file">Upload File:</label>
//           <input
//             type="file"
//             id="file"
//             name="file"
//             // accept="application/pdf"
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;