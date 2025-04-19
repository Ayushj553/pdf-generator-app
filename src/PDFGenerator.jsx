import { useEffect } from "react";
import { jsPDF } from "jspdf";

const PDFGenerator = ({ name, email, message }) => {
  useEffect(() => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.text("User Details", 20, 20);
    doc.setFont("helvetica", "normal");
    doc.text(`Name: ${name}`, 20, 40);
    doc.text(`Email: ${email}`, 20, 50);
    doc.text(`Message: ${message}`, 20, 60);

    doc.save("generated.pdf");
  }, [name, email, message]); // Runs once when props change

  return null; // No UI needed
};

export default PDFGenerator;
