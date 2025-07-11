import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { CartProvider } from "@/components/CartContext";
import { AuthProvider } from "@/components/AuthContext";


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

<AuthProvider> 
   <CartProvider>
          <Header/>
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer/>
        </CartProvider>
</AuthProvider>

       
      </body>
    </html>
  );
}
