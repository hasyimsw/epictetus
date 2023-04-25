import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UIDesign from "./pages/UIDesign";
import NotFound from "./pages/NotFound";
import FrontEnd from "./pages/FrontEnd";
import BackEnd from "./pages/BackEnd";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-b from-[#374151] to-[#111827] min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/uidesign" Component={UIDesign} />
        <Route path="/frontend" Component={FrontEnd} />
        <Route path="/backend" Component={BackEnd} />
        <Route path="*" Component={NotFound} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
