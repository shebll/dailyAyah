import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"], // Add subsets as per your language requirements
  variable: "--font-instrument-serif",
  weight: ["400"], // Include the weights you need
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.className} italic antialiased container mx-auto max-w-screen-xl overflow-x-hidden `}
      >
        <div className="z-[1]">
          <span className="light h-[60vh] w-[130px]" />
          <span className="light h-[60vh] w-[130px]" />
          <span className="light h-[60vh] w-[130px]" />
          <span className="light h-[60vh] w-[130px]" />
          <span className="light h-[60vh] w-[130px]" />
          <span className="light h-[60vh] w-[130px]" />
          <span className="light h-[60vh] w-[130px]" />
          <span className="light h-[60vh] w-[130px]" />
          {/*  */}
          <span className="light h-[30vh] w-[60px]" />
          <span className="light h-[30vh] w-[60px]" />
          <span className="light h-[30vh] w-[60px]" />
          <span className="light h-[30vh] w-[60px]" />
          <span className="light h-[30vh] w-[60px]" />
          <span className="light h-[30vh] w-[60px]" />
          <span className="light h-[30vh] w-[60px]" />
        </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
