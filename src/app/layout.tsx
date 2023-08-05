import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apollo SPCA 2020 Community Photo Album",
  description:
    "Join us in celebrating the love and companionship of our animal friends with the Apollo SPCA 2020 Community Photo Album. This collection features heartwarming photos of pets and their families from our community, showcasing the special bond between humans and animals. From playful puppies to cuddly kittens, these photos capture the joy and happiness that our pets bring into our lives. Browse through the album and share in the love for our animal companions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/lonelil/fonts@latest/fonts/sf-pro/use.min.css"
        />
      </head>
      <body className={"dark antialiased"}>{children}</body>
    </html>
  );
}
