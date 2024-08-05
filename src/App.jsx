import { useState } from "react";
import "./App.css";
import Upload from "./components/upload";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutinstitute from "./components/pages/Aboutinstitute";
import Admin from "./components/pages/Admin";

import Home from "./components/Home";
import Contact from "./components/contact/Contact";
import Editorial from "./components/Editorial";
import Review from "./components/Review/Review";
import AuthorGuide from "./components/Author_Guid/AuthorGuide";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/aboutinstitute" element={<Aboutinstitute />} />
          <Route path="/editorial" element={<Editorial />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/review" element={<Review />} />
          <Route path="/author_guide" element={<AuthorGuide />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
