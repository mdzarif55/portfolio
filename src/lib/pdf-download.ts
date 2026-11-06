import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function downloadCVAsPDF(
  elementId: string = "cv-document",
  fileName: string = "Resume_Md_Muhtasim_Zarif.pdf"
) {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      const link = document.createElement("a");
      link.href = "/Resume_Md_Muhtasim_Zarif.pdf";
      link.download = fileName;
      link.click();
      return;
    }

    // High resolution capture (scale 2.5 for crisp vector-like text)
    const canvas = await html2canvas(element, {
      scale: 2.5,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
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

    // Fill the A4 page smoothly from top to bottom without empty space at the bottom
    pdf.addImage(imgData, "JPEG", 0, 0, pageWidth, pageHeight);
    pdf.save(fileName);
  } catch (error) {
    console.error("Auto PDF download error, using fallback:", error);
    const link = document.createElement("a");
    link.href = "/Resume_Md_Muhtasim_Zarif.pdf";
    link.download = fileName;
    link.click();
  }
}
