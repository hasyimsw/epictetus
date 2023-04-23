import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg-gradient-to-b from-[#374151] to-[#111827] min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" Component={() => <Home />} />
      </Routes>
    </div>
  );
}

export default App;
