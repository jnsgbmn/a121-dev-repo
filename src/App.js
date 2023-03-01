import React from "react";
import Mainpage from "./Components/Mainpage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Mainpage />
      </BrowserRouter>
    </div>
  );
}

export default App;
