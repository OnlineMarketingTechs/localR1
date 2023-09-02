import Notification from "@/components/Notification";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sachin Restro",
  description: "Best Food In the Town!",
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
          {/* <QueryProvider> */}
            <div>
              <Notification />
              <Navbar />
              {children}
              <Footer />
              {/* <ToastContainer position="bottom-right" theme="dark" autoClose={3000}/> */}
            </div>
          {/* </QueryProvider> */}
        </AuthProvider>
      </body>
    </html>
  );
}
