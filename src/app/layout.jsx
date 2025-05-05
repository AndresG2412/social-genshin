import "./globals.css";
import Navbar from "./components/client/Navbar";

export const metadata = {
  title: "Social Genshin",
  description: "Red social no oficial de Genshin Impact",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
