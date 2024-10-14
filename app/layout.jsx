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

const OutfitFont = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Pablo Hernandez",
  description: "Portafolio 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
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
      </head>
      <body className={OutfitFont.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          //enableSystem
          //disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
