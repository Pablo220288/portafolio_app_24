// Import styles
import "./globals.css";

//Import fonts
import { Outfit } from "next/font/google";

// Import components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

//Add Toast Message
import { Toaster } from "@/components/ui/toaster";

//Import themes
import { ThemeProvider } from "@/components/ThemesProvider";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Background from "@/components/Background";

const OutfitFont = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Pablo Hernandez",
  description: "Un apasionado de la programación y el aprendizaje continuo",
};

export default async function RootLayout({ children }) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang="es" suppressHydrationWarning>
        <head>
          <meta
            name="google-site-verification"
            content="j8thmjzyet7lWD7wHYDJvAXubWEvIXtR_PZ11R4Rwg0"
          />
          <link rel="icon" href="/favicon.png" />
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
            rel="stylesheet"
          ></link>
        </head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="black"
            //enableSystem
            //disableTransitionOnChange
          >
            <Background />
            <Header />
            {children}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
