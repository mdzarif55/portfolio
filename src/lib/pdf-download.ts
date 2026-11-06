import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function downloadCVAsPDF(
  elementId: string = "cv-document",
  fileName: string = "Resume_Md_Muhtasim_Zarif.pdf"
) {
  try {
    let element = document.getElementById(elementId);
    if (!element) {
      // Fallback search by class or default id
      element = document.getElementById("cv-document") || document.querySelector(".cv-outer-box");
    }

    if (!element) {
      const link = document.createElement("a");
      link.href = "/Resume_Md_Muhtasim_Zarif.pdf";
      link.download = fileName;
      link.click();
      return;
    }

    // Capture bounding rect and all clickable links BEFORE html2canvas modifies anything
    const containerRect = element.getBoundingClientRect();
    const anchorElements = Array.from(element.querySelectorAll("a[href]"));

    const linksData = anchorElements
      .map((a) => {
        const anchor = a as HTMLAnchorElement;
        const rect = anchor.getBoundingClientRect();
        const href = anchor.href;
        if (!href) return null;

        // Ensure relative coordinates inside the element
        const relLeft = rect.left - containerRect.left;
        const relTop = rect.top - containerRect.top;

        return {
          href,
          relLeft,
          relTop,
          relWidth: rect.width,
          relHeight: rect.height,
        };
      })
      .filter(Boolean) as {
        href: string;
        relLeft: number;
        relTop: number;
        relWidth: number;
        relHeight: number;
      }[];

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

    // Add active clickable hyperlink annotations corresponding to all links in the document
    const scaleX = pageWidth / containerRect.width;
    const scaleY = pageHeight / containerRect.height;

    for (const link of linksData) {
      const x = link.relLeft * scaleX;
      const y = link.relTop * scaleY;
      // Provide comfortable clickable hotspot area
      const w = Math.max(link.relWidth * scaleX, 5);
      const h = Math.max(link.relHeight * scaleY, 4);

      pdf.link(x, y, w, h, { url: link.href });
    }

    pdf.save(fileName);
  } catch (error) {
    console.error("Auto PDF download error, using fallback:", error);
    const link = document.createElement("a");
    link.href = "/Resume_Md_Muhtasim_Zarif.pdf";
    link.download = fileName;
    link.click();
  }
}
