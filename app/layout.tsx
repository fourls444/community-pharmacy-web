import { Kanit } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
});

export const metadata = {
  title: "วิทยาลัยเภสัชกรรมชุมชน",
  description: "The Community Pharmacy College of Thailand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={kanit.variable}>
      <body className="antialiased">
        <Header />
        <main style={{ minHeight: '60vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}