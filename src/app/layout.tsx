import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Notification from "@/components/Notification";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import AuthProvider from "@/components/AuthProvider";
import QueryProvider from "@/components/QueryProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const metadata: Metadata = {
  title: "Bisht Resturant",
  description: " Bisht resturan is a best food dilvery resturant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <QueryProvider>
          <div>
            <Notification />
            <Navbar />
            {children}
              <Footer />
              <ToastContainer position="bottom-right" theme="dark" autoClose={3000}/>
            </div>
            </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
