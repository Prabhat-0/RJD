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
   metadataBase: new URL("http://localhost:3000"),
  title:{
    template:"%s | RJD Hearing Services",
    default:"RJD Hearing Services"
  },
  description: "RJD Hearing services provides affordable hearing devices with custom adjustement per client requirement",
  openGraph: {
    images: [
      {
        url: '/logo.png', 
        width: 1200,
        height: 630,
      },
    {title: 'RJD',
    description: 'The all hearing solutions at one place',
    type: 'article',
    publishedTime: '2027-01-01T00:00:00.000Z',
    authors: ['Seb', 'Josh'],}]
  },
  twitter: {
    card: 'Twitter_Card',
    title: 'twitter',
    description: 'The twitter card',
    siteId: '1467726470533754880',
    creator: '@rjd',
    creatorId: '1467726470533754880',
    images: [{url:'/logo.png',width:1200,height:630}], // Must be an absolute URL
  },
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