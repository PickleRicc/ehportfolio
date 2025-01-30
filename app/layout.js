import "./globals.css";

export const metadata = {
  title: "Eric Harrison - Full Stack Developer & AI Engineer",
  description: "Portfolio of Eric Harrison, a Full Stack Developer and AI Engineer specializing in building cutting-edge applications at the intersection of Business, AI, and Web Development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
