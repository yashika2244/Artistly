import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ArtistsList from "../pages/ArtistsList";
import ArtDetails from "../pages/ArtDetails";
import Dashboard from "../pages/Dashboard";
import ArtistOnboarding from "../pages/ArtistOnboarding";
function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artists" element={<ArtistsList />} />
      <Route path="/artists/:id" element={<ArtDetails />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/onboarding" element={<ArtistOnboarding />} />
    </Routes>
  );
}

export default Routers;
