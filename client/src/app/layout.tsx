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
        <main className="min-h-screen pt-16">
          {" "}
          {/* navbar의 높이만큼 상단 여백 */}
          {children}
        </main>
        <Footer />
        {/* <div className=" h-full w-full inset-0 bg-gradient-to-b from-transparent to-slate-900 z-30" /> */}
      </body>
    </html>
  );
}
