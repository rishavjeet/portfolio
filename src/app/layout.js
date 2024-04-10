import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rishav Dev Portfolio",
  description: "A portfolio site of a MERN stack developer, Rishav Dutta, who had 1.5 years experience in Web development field",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
