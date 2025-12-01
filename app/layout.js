import "./globals.css";

export const metadata = {
  title: "Studio Frolly",
  description: "Portfolio by Hyejin Kang",
};

export default function RootLayout(props) {
  return (
    <html lang="ko">
      <body className="bg-black text-white antialiased">
        {props.children}
      </body>
    </html>
  );
}
