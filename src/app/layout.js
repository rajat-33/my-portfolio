import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rajat Agarwal - frontend and full-stack developer portfolio",
  description:
    "Rajat Agarwal - frontend and full-stack developer portfolio. I can create code logics to implement and built complex web applications. This contains home, about, education, skills, projects, experience, React, Next, Node, Javascript, C++, Cpp, GeeksForGeeks, Codechef, Tcs Codevita, web developer, full stack developer, mern developer, frontend developer, backend developer, Competitive Programmer, Competitive programming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
