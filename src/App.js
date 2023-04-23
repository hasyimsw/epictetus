import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/FeaturedPost";
import UIDesign from "./pages/UIDesign";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="bg-gradient-to-b from-[#374151] to-[#111827] min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/uidesign" Component={UIDesign} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
