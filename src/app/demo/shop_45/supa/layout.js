import { Geist, Geist_Mono } from "next/font/google"; 
// import "./globals.css";
import NavbarShop_45 from '@/components/midterm/NavbarShopSupa_45.jsx';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "midterm p2_45",
  description: "1141 Midterm P2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarShop_45 />
        {children}
      </body>
    </html>
  );
}
