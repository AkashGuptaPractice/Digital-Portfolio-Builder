import React, { useEffect, useState } from "react";
import axios from "axios";

function PortfolioList() {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/portfolios/")
      .then(response => {
        setPortfolios(response.data);
      })
      .catch(error => {
        console.error("Error fetching portfolios:", error);
      });
  }, []);

  return (
    <div>
      <h1>Digital Portfolios</h1>
      <ul>
        {portfolios.map(portfolio => (
          <li key={portfolio.id}>
            <h3>{portfolio.title}</h3>
            <p>{portfolio.description}</p>
            <a href={portfolio.github_link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PortfolioList;
