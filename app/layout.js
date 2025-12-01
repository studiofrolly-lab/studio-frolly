import "./globals.css";

export const metadata = {
  title: "Studio Frolly",
  description: "Portfolio by Hyejin Kang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
