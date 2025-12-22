import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // 1. Import the font
import "./globals.css"; // 2. Ensure your CSS is imported

// 3. Configure the font
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // This matches your Tailwind config
});

export const metadata: Metadata = {
  title: "Class Funds",
  description: "Class Funds Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 4. Add the variable to the body class */}
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}