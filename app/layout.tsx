import "./globals.css";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import { IBM_Plex_Sans_Thai } from "next/font/google";

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans-thai",
});

export const metadata = {
  title: "วิทยาลัยเภสัชกรรมสมุนไพร",
  description: "College of Herbal Pharmacy of Thailand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={ibmPlexSansThai.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}