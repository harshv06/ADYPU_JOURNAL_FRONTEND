import React from "react";
import Navbar from "../navbar";
import Footer from "../Footer";

const AuthorGuide = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Author Guidelines</h1>
        <p>
          Submission Preparation Checklist As part of the submission process,
          authors are required to check off their submission's compliance with
          all of the following items, and submissions may be returned to authors
          that do not adhere to these guidelines :
        </p>
        <ul>
          <li>
            The submission has not been previously published in another journal
            nor currently is submitted in another journal.
          </li>
          <li>
            The submission file is in OpenOffice, Microsoft Word, or RTF
            document file format. Where available, URLs for the references have
            been provided.
          </li>
          <li>
            The text is single-spaced; uses a 12-point font; employs italics,
            rather than underlining (except with URL addresses); and all
            illustrations, figures, and tables are placed within the text at the
            appropriate points, rather than at the end.
          </li>
          <li>
            The text adheres to the stylistic and bibliographic requirements
            outlined in the Author Guidelines.
          </li>
        </ul>
        <hr />
        <div className="container">
          <h1>Review Policy </h1>
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
            publication time is usually about 12 to 15 weeks, and at least two
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
        </div>
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
      </div>
      <Footer />
    </>
  );
};

export default AuthorGuide;
