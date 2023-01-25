import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Selection from "./Selection";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Selection />}></Route> */}
        <Route path="/" element={<Selection />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
