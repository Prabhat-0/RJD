import Footer from "@/components/Footer";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Geist, Geist_Mono, Fraunces, Gelasio } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces-next",
  subsets: ["latin"],
});
const gelasio=Gelasio({
  variable:"--font-gelasio",
  subsets:["latin"]
})

export const metadata = {
  title: "RJD | RJD Hearing Services",
  description: "RJD Hearing services provides affordable hearing devices with custom adjustement per client requirement",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} scroll-smooth ${geistMono.variable} ${fraunces.variable} ${gelasio.variable} h-full antialiased`}
    >
      <body className="min-h-full w-full bg-background  m-0 p-0 box-border ">
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}