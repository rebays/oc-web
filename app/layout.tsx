import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const evermore = localFont({
  src: "../evermore/Evermore.ttf",
  variable: "--font-evermore",
});

export const metadata: Metadata = {
  title: {
    default: "OrgClinic — Institutional Diagnostics & Strategic Advisory",
    template: "%s — OrgClinic",
  },
  description:
    "OrgClinic is a specialised advisory firm delivering institutional diagnostics, strategic planning, and capacity building across Solomon Islands and the Pacific.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${evermore.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
