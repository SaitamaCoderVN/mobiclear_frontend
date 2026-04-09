import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MobiClear | AI-Powered Car Wash Booking",
  description:
    "MobiClear automates your car wash scheduling through AI. Seamlessly book via your favorite chat apps without lifting a finger.",
  keywords: ["car wash", "AI booking", "automation", "MobiClear", "Vietnam"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth h-full antialiased">
      <head>
        <link rel="icon" href="/logo_mobiclear.png" type="image/png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-surface">
        {children}
      </body>
    </html>
  );
}
