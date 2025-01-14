// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <nav>{/* 네비게이션 바 */}</nav>
        {children}
        <footer>{/* 푸터 */}</footer>
      </body>
    </html>
  );
}
