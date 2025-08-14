import type { Metadata } from "next";
import "./globals.css";
import ProfileSide from "@/components/ProfileSide";

export const metadata: Metadata = {
  title: "ایاره | طراحی سایت",
  description: "طراحی سایت اختصاصی با امیرعلی ایاره",
  keywords:["امیرعلی ایاره", "ایاره", "amirali ayare", "ayare", "طراحی سایت", "طراحی سایت اختصاصی"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel="preconnect" href="//fdn.fontcdn.ir" />
        <link rel="preconnect" href="//v1.fontapi.ir" />
        <link href="https://v1.fontapi.ir/css/VazirFD" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/iranyekan" rel="stylesheet" />
        <meta name="theme-color" content="#eab308" />
      </head>
      <body className="grid grid-cols-1 md:grid-cols-2 w-screen h-screen items-center justify-center bg-zinc-950 p-5">
        <ProfileSide />
        {children}
      </body>
    </html>
  );
}
