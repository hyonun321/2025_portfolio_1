// src/app/layout.tsx
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import "../../public/fonts/font.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-Poppins">
        <Navbar />
        <main className="min-h-screen pt-16">
          {" "}
          {/* navbar의 높이만큼 상단 여백 */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
