import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "SMA Avicenna Jagakarsa",
  description: "Website Profil Resmi SMA Avicenna Jagakarsa",
  icons: {
    icon: "/logosekolah.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}