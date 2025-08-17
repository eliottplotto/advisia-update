import type { Metadata } from "next";
import { SanityLive } from "@/sanity/lib/live";
import { Toaster } from "sonner";

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
      <body className="antialiased 2xl:text-lg min-h-screen">
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            classNames: {
              toast: "rounded-xs border-none",
            },
          }}
        />
        <SanityLive />
      </body>
    </html>
  );
}
