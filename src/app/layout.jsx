import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});


export const metadata = {
  title: "Pizza Landing Page",
  description: "Pizza Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased  `}
      >
        <Header/>
        <main> {children}</main>
       
       <Footer/>
      </body>
    </html>
  );
}
