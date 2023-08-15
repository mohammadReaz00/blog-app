import NavMenu from "../../components/NavMenu";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="w-3/6 m-auto">
          <NavMenu />
          {children}
        </div>
      </body>
    </html>
  );
}
