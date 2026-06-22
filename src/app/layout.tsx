import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../index.css";

export const metadata: Metadata = {
  title: "emPLE Pension Trust",
  description: "emPLE Pension Trust products and services.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
