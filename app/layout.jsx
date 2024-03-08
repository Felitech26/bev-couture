import { Lato, Cormorant_Garamond} from "next/font/google";
import './globals.css'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CartProvider from '@/components/CartProvider'
import { Toaster } from "@/components/ui/toaster";

const lato = Lato ({ subsets: ["latin"], weight:
['100', '300', '400','700', '900'],
variable: '--font-lato'
});
const cormorantGaramond = Cormorant_Garamond ({ subsets: ["latin"], weight:
['300', '400','500', '600','700'],
variable: '--font-cormorantGaramond'
});

export const metadata = {
  title: "Bev Couture",
  description: "Best African Designs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${cormorantGaramond.variable}`}>
      <CartProvider>
         <Header />
         {children}
         <Toaster />
         <Footer />
    </CartProvider>
      </body>
    </html>
  );
}
