import "./globals.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

export const metadata = {
  title: "Social Genshin",
  description: "Red social no oficial de Genshin Impact",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <html lang="es">
        <body>
          <div className="fixed bg-purple-950 w-full h-44 top-0 [mask-image:linear-gradient(black_0%,transparent)]"></div>
            <Navbar />
            {children}
          <div className="fixed bg-purple-950 w-full h-44 bottom-0 [mask-image:linear-gradient(transparent,black_110%)]"></div>
        </body>
      </html>
      {/* <Footer /> */}
    </div>
  );
}
