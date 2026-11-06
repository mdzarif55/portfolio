import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function downloadCVAsPDF(
  elementId: string = "cv-document",
  fileName: string = "Resume_Md_Muhtasim_Zarif.pdf"
) {
  try {
    let element = document.getElementById(elementId);
    if (!element) {
      element =
        document.getElementById("cv-document") ||
        document.querySelector(".cv-outer-box");
    }

    if (!element) {
      const link = document.createElement("a");
      link.href = "/Resume_Md_Muhtasim_Zarif.pdf";
      link.download = fileName;
      link.click();
      return;
    }

    // Save previous styles to prevent any border or shadow lines from leaking into canvas
    const prevBorder = element.style.border;
    const prevShadow = element.style.boxShadow;
    const prevOutline = element.style.outline;
    const prevRadius = element.style.borderRadius;

    element.style.border = "none";
    element.style.boxShadow = "none";
    element.style.outline = "none";
    element.style.borderRadius = "0px";

    // Capture bounding rect and clickable links BEFORE rendering
    const containerRect = element.getBoundingClientRect();
    const anchorElements = Array.from(element.querySelectorAll("a[href]"));

    const linksData = anchorElements
      .map((a) => {
        const anchor = a as HTMLAnchorElement;
        const rect = anchor.getBoundingClientRect();
        const href = anchor.href;
        if (!href) return null;

        return {
          href,
          relLeft: rect.left - containerRect.left,
          relTop: rect.top - containerRect.top,
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

    // High resolution capture (scale 2.5 for crisp text, strictly no borders)
    const canvas = await html2canvas(element, {
      scale: 2.5,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
    });

    // Restore original styles
    element.style.border = prevBorder;
    element.style.boxShadow = prevShadow;
    element.style.outline = prevOutline;
    element.style.borderRadius = prevRadius;

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

    // Clean standard print margin (8mm margins on all sides)
    const marginX = 8;
    const marginY = 8;
    const printWidth = pageWidth - marginX * 2; // 194mm
    const printHeight = pageHeight - marginY * 2; // 281mm

    // Render image centered within A4 margins (guaranteeing zero line at top or bottom edge)
    pdf.addImage(imgData, "JPEG", marginX, marginY, printWidth, printHeight);

    // Add clickable hyperlink annotations with exact margin offsets
    const scaleX = printWidth / containerRect.width;
    const scaleY = printHeight / containerRect.height;

    for (const link of linksData) {
      const x = marginX + link.relLeft * scaleX;
      const y = marginY + link.relTop * scaleY;
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
