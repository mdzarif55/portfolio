import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function downloadCVAsPDF(elementId: string = "cv-document", fileName: string = "Md_Muhtasim_Zarif_Resume.pdf") {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      // Fallback: download static file if element not found
      const link = document.createElement("a");
      link.href = "/Resume_Md_Muhtasim_Zarif.pdf";
      link.download = fileName;
      link.click();
      return;
    }

    // High resolution capture with white background
    const canvas = await html2canvas(element, {
      scale: 2.5,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
      windowWidth: 1024,
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.98);

    // Standard A4 dimensions in mm: 210 x 297
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: true,
    });

    const pageWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * pageWidth) / canvas.width;

    // Center or scale to fit perfectly on 1 page
    const finalHeight = Math.min(imgHeight, pageHeight);

    pdf.addImage(imgData, "JPEG", 0, 0, pageWidth, finalHeight);
    pdf.save(fileName);
  } catch (error) {
    console.error("Auto PDF download error, using fallback:", error);
    // Instant fallback to public PDF
    const link = document.createElement("a");
    link.href = "/Resume_Md_Muhtasim_Zarif.pdf";
    link.download = fileName;
    link.click();
  }
}
