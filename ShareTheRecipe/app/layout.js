import MainHeader from "@/components/mainHeader/mainHeader";
import "./globals.css";

export const metadata = {
  title: "Food Blog app",
  description: "Food blog application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
