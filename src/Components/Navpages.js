import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Projects from "../Pages/Projects";
import History from "../Pages/History";
// import Construction from "../Pages/Construction";
import Restoration from "../Pages/Restoration";
// import Design from "../Pages/Design";

const Navpages = () => {
  return (
    <React.Fragment>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/history" element={<History />} />
          {/* <Route path="/construction" element={<Construction />} /> */}
          <Route path="/restoration" element={<Restoration />} />
          {/* <Route path="/design" element={<Design />} /> */}
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default Navpages;
