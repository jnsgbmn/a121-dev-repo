import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Navpage from "./Navpages";

const mainpage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Navpage />
      <Footer />
    </React.Fragment>
  );
};

export default mainpage;
