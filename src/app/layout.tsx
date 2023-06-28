import "./globals.css";
import Navbar from "../../components/Navbar";
import { Inter } from "next/font/google";
import Footer from "../../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flexibble",
  description: "Showcase and discover remarkable developer projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
