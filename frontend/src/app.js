import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PortfolioList from "./pages/PortfolioList";
import AddPortfolio from "./pages/AddPortfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioList />} />
        <Route path="/add" element={<AddPortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
