import type { Metadata } from "next";
import "../styles/tailwind.css";
import "../styles/app.scss";

export const metadata: Metadata = {
  title: "Pass Man",
  description: "Generated by mdmahikaishar",
  authors: [{ name: "mdmahikaihar", url: "mahikaishar@gmail.com" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={"scroll-y"}>{children}</body>
    </html>
  );
}
