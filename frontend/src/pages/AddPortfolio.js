import React, { useState } from "react";
import axios from "axios";

function AddPortfolio() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [githubLink, setGithubLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/portfolios/", {
      title,
      description,
      github_link: githubLink
    })
    .then(() => {
      alert("Portfolio added successfully!");
    })
    .catch(error => {
      console.error("Error adding portfolio:", error);
    });
  };

  return (
    <div>
      <h1>Add a New Portfolio</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label>GitHub Link:</label>
        <input type="url" value={githubLink} onChange={(e) => setGithubLink(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddPortfolio;


