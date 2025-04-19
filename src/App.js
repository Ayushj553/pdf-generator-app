import React, { useState } from "react";
import PDFGenerator from "./PDFGenerator"; // Ensure this file exists
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [generate, setGenerate] = useState(false); // State to trigger PDF generation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGeneratePDF = (e) => {
    e.preventDefault();
    setGenerate(true); // Trigger PDF generation
  };

  return (
    <div className="container">
      <h1>PDF Generator</h1>
      <form onSubmit={handleGeneratePDF}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Generate PDF</button>
      </form>

      {/* Render PDFGenerator only when the button is clicked */}
      {generate && (
        <PDFGenerator
          name={formData.name}
          email={formData.email}
          message={formData.message}
        />
      )}
    </div>
  );
}

export default App;
