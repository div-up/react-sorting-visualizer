import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import VisualizerPage from "./pages/VisualizerPage";
import Footer from "./components/Footer";
import "./App.css";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/visualizer" element={<VisualizerPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;