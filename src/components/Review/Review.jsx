import React from "react";
import Navbar from "../navbar";
import Footer from "../Footer";

const Review = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Review Policy </h1>
        <p>
          The journal aims to speed up the decision process without compromising
          on quality.
        </p>
        <p>
          The journal has a double-blind peer review, and the peer reviewers may
          be editorial board members or external reviewers.
        </p>
        <p>
          The selection of peer reviewers depends on their availability and the
          manuscript's subject.
        </p>
        <p>
          Before starting the review process, the journal editor uses PLAGIARISM
          software.
        </p>
        <p>
          The review time in IJIE for each round is about 4 to 6 weeks; the
          publication time is usually about 12 to 15 weeks, and at least two
          reviewers will review each article.
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
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Review;
