import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Md. Muhtasim Zarif — MERN Stack & Cross-Platform Developer",
  description:
    "Portfolio of Md. Muhtasim Zarif — MERN Stack & Cross-Platform Developer proficient in React.js, Next.js, React Native, Node.js, and competitive programming.",
  keywords: [
    "Muhtasim Zarif",
    "Md. Muhtasim Zarif",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "React Native",
    "Full-Stack Developer",
    "Dhaka Bangladesh",
    "Portfolio",
  ],
  authors: [{ name: "Md. Muhtasim Zarif" }],
  creator: "Md. Muhtasim Zarif",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/mdzarif55",
    title: "Md. Muhtasim Zarif — MERN Stack & Cross-Platform Developer",
    description:
      "Passionate MERN Stack & Cross-Platform Developer skilled in building clean, responsive web and mobile applications.",
    siteName: "Md. Muhtasim Zarif Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${firaCode.variable}`}>
      <body className="min-h-screen bg-neutral-50 dark:bg-[#07090e] text-neutral-900 dark:text-neutral-100 antialiased selection:bg-blue-500 selection:text-white transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
