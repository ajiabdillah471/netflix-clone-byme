import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HalamanUtama from "./components/pages/FirstPages/HalamanUtama";
import Login from "./components/pages/PageLogin/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HalamanUtama />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
