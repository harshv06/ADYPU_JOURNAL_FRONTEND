import React, { useEffect, useState } from "react";
import Nav from "./navbar";
import Footer from "./Footer";
import "./upload.css";

function Upload() {
  // const MAIN_URL = "https://api.adypjiet.in";
  const MAIN_URL = "http://172.24.96.1:3100";
  const [Author, setAuthors] = useState("");
  const [Number, setNumber] = useState("");
  const [Email, setEmail] = useState("");

  useEffect(() => {
    document.title = "ADYPJIET | Publish";
  }, []);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault(); // Prevents the page from refreshing on form submission

    if (!selectedFile) {
      setUploadStatus("Please select a file to upload");
      // setSelectedFile(null);
      alert("Please select a file to upload");
      return;
    }

    // Validate user data before uploading
    if (!Author || !Number || !Email) {
      setUploadStatus("Please fill in all user details");
      alert("Please fill in all user details");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", selectedFile);
    formData.append("authors", Author); // Append Author to formData
    formData.append("number", Number); // Append Number to formData
    formData.append("email", Email); // Append Email to formData

    try {
      const response = await fetch(`${MAIN_URL}/v1/uploadPaper`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadStatus("File uploaded successfully");
        setSelectedFile(null);
        document.querySelector('input[type="file"]').value = "";
        alert("File uploaded successfully");
      } else {
        setUploadStatus("Failed to upload file");
        setSelectedFile(null);
        alert("Failed to upload file");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("An error occurred while uploading the file");
      setSelectedFile(null);
      alert("An error occurred while uploading the file");
    }
  };

  return (
    <>
      <Nav />
      <div className="container">
        <form onSubmit={handleUpload} encType="multipart/form-data">
          <div className="container row">
            <div className="col-sm-4">Corresponding Authors</div>
            <div className="col-sm-3">
              <input
                type="text"
                value={Author}
                onChange={(e) => setAuthors(e.target.value)}
                placeholder="Names of Authors"
                required
              />
            </div>
            {/* <div className="col-sm-2">
              <input type="text" placeholder="Middle Name" />
            </div>
            <div className="col-sm-2">
              <input type="text" placeholder="Last Name" />
            </div> */}
          </div>

          <div className="container row">
            <div className="col-sm-4">Mobile Number</div>
            <div className="col-sm-3">
              <input
                type="number"
                minLength={10}
                maxLength={10}
                value={Number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Mobile Number"
                required
              />
            </div>
          </div>

          <div className="container row">
            <div className="col-sm-4">Email</div>
            <div className="col-sm-3">
              <input
                type="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
          </div>

          <div className="container row">
            <div className="col-sm-4">
              <b>MAIN FILE (PDF FILE)</b> (including abstract and key words,
              introduction, material and methods, results/observation,
              discussion, conclusions, references and tables at last each on
              separate page)
            </div>
            <div className="col-sm-4">
              <input type="file" onChange={handleFileChange} />
              <p>Please upload a file less than 5MB</p>
            </div>
          </div>
          <div className="col-sm-1">
            <input type="submit" value="Upload" className="upload-pdf" />
          </div>
        </form>
      </div>
      <div></div>
      <Footer />
    </>
  );
}

export default Upload;
