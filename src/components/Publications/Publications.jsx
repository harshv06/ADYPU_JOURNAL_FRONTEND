import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../navbar";
import Footer from "../Footer";

function Publications(props) {
  const [pdfs, setPdfs] = useState([]);
  const [error, setError] = useState("");
  const MAIN_URL = "http://172.24.96.1:3100";
    // const MAIN_URL="https://api.adypjiet.in"

  // To fetch latest three PDF
  useEffect(() => {
    const fetchLatestPDFs = async () => {
      try {
        const response = await fetch(`${MAIN_URL}/v1/getAllPaper`); // Adjust the URL if needed
        if (!response.ok) {
          throw new Error("Failed to fetch PDFs");
        }
        const data = await response.json();
        console.log(data);
        setPdfs(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchLatestPDFs();
  }, []);

  const fetchAnyPDF = (path) => {
    console.log(path);
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
            <Navbar />
            <div className='container'>
                <h1>Latest Publications</h1>
                <div>
                    <h3 style={{color:'purple'}}>Vol.1 Issue, September 2024</h3>

                    <h4 className="side-heading">Latest Publication</h4>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <ul>
                        {pdfs.map((pdf, index) => (
                            <li key={index}>
                                <button style={{ margin: 5, padding: 3 }} onClick={() => fetchAnyPDF(pdf.path)}>
                                    Publication {index + 1}
                                </button>
                                <hr />
                            </li>
                            
                        ))}
                    </ul>
                    <hr />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Publications;
