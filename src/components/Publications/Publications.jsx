import React from 'react';
import { useEffect, useState } from "react";
import Navbar from '../navbar';
import Footer from '../Footer'

//To fetch latest three PDF
// useEffect(() => {
//     const fetchLatestPDFs = async () => {
//         try {
//             const response = await fetch(`${MAIN_URL}/getLatest3PDF`); // Adjust the URL if needed
//             if (!response.ok) {
//                 throw new Error("Failed to fetch PDFs");
//             }
//             const data = await response.json();
//             setPdfs(data);
//         } catch (err) {
//             setError(err.message);
//         }
//     };

//     fetchLatestPDFs();
// }, []);


function Publications(props) {
    return (
        <>
            <Navbar />
            <div className='container'>
                <h1>Latest Publications</h1>
                <div>
                    <h3>Vol.1</h3>
                    
                        {/* <ul>
                            {pdfs.map((pdf, index) => (
                                <li key={index}>
                                    <button style={{ margin: 5, padding: 3 }} onClick={() => fetchAnyPDF(pdf.path)}>
                                        Publication {index + 1}
                                    </button>
                                </li>
                            ))}
                        </ul> */}
                
                </div>
                <hr />

            </div>
            <Footer />
        </>
    );
}

export default Publications;