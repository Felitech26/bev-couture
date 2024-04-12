import { Lato, Cormorant_Garamond} from "next/font/google";
import './globals.css'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CartProvider from '@/components/CartProvider'
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "./Providers";


const lato = Lato ({
  subsets: ["latin"], 
  weight: ['100', '300', '400','700', '900'],
  display: 'swap',
  variable: '--font-lato'
});
const cormorantGaramond = Cormorant_Garamond ({ 
  subsets: ["latin"],
   weight: ['300', '400','500', '600','700'],
   display: 'swap',
   variable: '--font-cormomorantGaramond'
});
  
export const metadata = {
  title: "Bev Couture",
  description: "Best African Designs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${cormorantGaramond.variable}`}>
      <AuthProvider>
      <CartProvider>
         <Header />
         {children}
         <Toaster />
         <Footer />
      </CartProvider>
      </AuthProvider>
     
      </body>
    </html>
  );
}
