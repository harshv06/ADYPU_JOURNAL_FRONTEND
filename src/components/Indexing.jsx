import React from 'react'
import Navbar from './navbar'
import Footer from './Footer'

const Indexing = () => {
  return (
    <>
        <Navbar/>
        <div className='container'>
            <h1>Indexing</h1>
            <ul>
                <li>Google Scholar</li>
                <li>Academia.edu</li>
                <li>Directory of Open Access Journals(DOAJ)</li>
                <li>Cubi Abstract</li>
                <li>EBSCO indexing</li>
                <li>Sherpa Romeo</li>
                <li>ANSTO Library</li>
                <li>NCBI</li>
                <li>Genomics</li>
                <li>Cite Factor</li>
                <li>NCBI-NLM Catalog</li>
                <li>Index Copernicus</li>
                <li>Scholarly Database</li>
                <li>OPJI.net</li>
                <li>J-Gate</li>
                <li>Journal Index</li>
            </ul>
        </div>
        <Footer/>
    </>
  )
}

export default Indexing