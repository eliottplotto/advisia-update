import type { Metadata } from "next";

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
      <body className="antialiased lg:text-lg min-h-screen">{children}</body>
    </html>
  );
}
