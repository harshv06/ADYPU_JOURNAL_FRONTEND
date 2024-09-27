import React from 'react'
import Navbar from './navbar'
import Footer from './Footer'


const Decisions = () => {
  return (
    <>
        <Navbar/>
        <div className='container'>
            <h1>Decisions</h1>
            <p>Manuscripts failing to meet the required quality or Publication ethics will be rejected during the initial screening phase. Selected manuscripts undergo a review process, with possible decisions being either acceptance as is or a request for revisions. Authors should submit their revisions within one month. Manuscripts with significant results are prioritized for review and publication. Manuscripts are screened for plagiarism at all stages of processing, and any instaces of detected plagiarism will result in immediate rejection.</p>
        </div>
        <Footer/>
    </>
  )
}

export default Decisions