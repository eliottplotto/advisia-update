import type { Metadata } from "next";
import { SanityLive } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: "Admin | Advisia",
  description: "Admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased font-medium lg:text-lg xl:text-xl min-h-screen">
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
