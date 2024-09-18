import React, { useEffect } from "react";
import Navbar from "../navbar";
import Footer from "../Footer";

const AuthorGuide = () => {
  useEffect(()=>{
    document.title="ADYPJIET | Author Guidelines"
  },[])
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Author Guidelines</h1>
        <p>
          As part of the submission process, authors must ensure that their submission complies with all of the following requirements. Submissions that do not meet these guidelines may be returned to the authors for revision
          The submission must meet the following criteria:

        </p>
        <ol>
          <li>

            The manuscript has not been published elsewhere and is not under consideration by any other journal.

          </li>
          <li>
            The file format must be OpenOffice, Microsoft Word, or RTF. Include URLs for references where available.

          </li>
          <li>
            The text should be single-spaced, in a 12-point Times New Roman font for both the main text and headings. Avoid underlining except for URLs. All illustrations, figures, and tables should be placed within the text at their relevant locations rather than at the end.

          </li>
          <li>
            The text must conform to the stylistic and bibliographic requirements specified in the Author Guidelines.

          </li>
          <li>The manuscript must follow the Journal <a
            href="././paper-template.pdf"
            // className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Paper Template
          </a></li>
        </ol>
        <hr />
        <div className="container">
          <h1>Peer Review  </h1>
          <p>
            The journal aims to speed up the decision process without compromising
            on quality.
            The journal has a double-blind peer review, and the peer reviewers may
            be editorial board members or external reviewers.
            The selection of peer reviewers depends on their availability and the
            manuscript's subject.
            Before starting the review process, the journal editor uses PLAGIARISM
            software.
            The review time in IJIE for each round is about 4 to 6 weeks; the
            publication time is usually about 1 to 6 months, and at least two
            reviewers will review each article.
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
            The following illustrates the results of reviewing:
            <ul>
              <li>
                The manuscript will be accepted if all peer reviewers recommend
                the manuscript be accepted.{" "}
              </li>

              <li>
                The manuscript will be rejected if more than half of the peer
                reviewers recommend the manuscript be rejected.
              </li>
              <li>
                In all other cases, the reviewers' comments will be returned to
                the submitting author to revise the manuscript.
              </li>
              <li>
                It is worth mentioning that if an article needs significant
                revision, it is rejected, and we suggest the authors resubmit
                it after revision.
              </li>
            </ul>
          </p>
          <hr />
          <li>
            <a
              href="././Copyright-Form.pdf"
              // className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            // style={'color=black,'}
            >
              Copyright Forms
            </a>
          </li>
          <li>
            <a
              href="././paper-template.pdf"
              // className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Paper Template
            </a>
          </li>
          <br />
          <p>The journal is available in online formats, with the online version accessible for free. We are committed to ensuring a swift publication process for our valued authors.
            <br /><br />
            Article Processing Charges: ₹500  <br />
            Review Process Duration: 15 to 20 days <br />
            Publication Timeframe: 1 to 6 months</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AuthorGuide;
