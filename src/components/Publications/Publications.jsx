import React from 'react';
import { useEffect, useState } from "react";
import Navbar from '../navbar';
import Footer from '../Footer'



function Publications(props) {
    
  const [pdfs, setPdfs] = useState([]);
  const [error, setError] = useState("");

    // To fetch latest three PDF
    useEffect(() => {
        const fetchLatestPDFs = async () => {
            try {
                const response = await fetch(`${MAIN_URL}/getLatest3PDF`); // Adjust the URL if needed
                if (!response.ok) {
                    throw new Error("Failed to fetch PDFs");
                }
                const data = await response.json();
                setPdfs(data);
            } catch (err) {
                setError(err.message);
            }
        };
    
        fetchLatestPDFs();
    }, []);
    return (
        <>
            <Navbar />
            <div className='container'>
                <h1>Latest Publications</h1>
                <div>
                    <h3>Vol.1</h3>

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