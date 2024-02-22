import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Details from "./Details";
import Update from "./Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/edit/:id" element={<Update />} />
          {/* <Route path="/Details" element={<Details />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
