import Footer from "@/components/Footer/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";
import "../../public/fonts/font.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className="font-Poppins">
        <LanguageProvider>
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
