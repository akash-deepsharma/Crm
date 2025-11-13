import { Geist, Geist_Mono } from "next/font/google";
// import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import "../styles/default-color.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Loader from "@/components/Common/Loader";
import { AuthProvider } from "@/utils/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="box-wrapper">
          <Loader/>
          <AuthProvider>
        <Header />
        <div id="main-wrapper" className="page-wrapper">
        {children}
        </div>
         <Footer />
         </AuthProvider>
        </div>
      </body>
    </html>
  );
}
