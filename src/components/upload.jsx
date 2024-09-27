import React, { useEffect, useState } from 'react';
import Nav from './navbar';
import Footer from './Footer';
import './upload.css';

function Upload() {
  useEffect(()=>{
    document.title="ADYPJIET | Publish"
  },[])
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault(); // Prevents the page from refreshing on form submission
    
    if (!selectedFile) {
      setUploadStatus('Please select a file to upload');
      alert('Please select a file to upload');
      return;
    }
    
    
    const formData = new FormData();
    formData.append('pdf', selectedFile);

    try {
      const response = await fetch('http://82.112.237.241:3100/api/uploadPdf', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setUploadStatus('File uploaded successfully');
        alert('File uploaded successfully');
      } else {
        setUploadStatus('Failed to upload file');
        alert('Failed to upload file');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus('An error occurred while uploading the file');
      alert('An error occurred while uploading the file');
    }
  };

  return (
    <>
      <Nav />
      <div className='container'>
        <form onSubmit={handleUpload} encType="multipart/form-data">
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

          <div className='container row'>
            <div className='col-sm-4'>
              <b>MAIN FILE (WORD FILE)</b> (including abstract and key words, introduction, material and methods, results/observation, discussion, conclusions, references and tables at last each on separate page)
            </div>
            <div className='col-sm-4'>
              <input type="file" onChange={handleFileChange} />
              <p>Please upload a file less than 5MB</p>
            </div>
          </div>

          <input type="submit" value="Upload" className='upload-pdf' />
        </form>
      </div>
      <div>
        
      </div>
      <Footer />
    </>
  );
}

export default Upload;
