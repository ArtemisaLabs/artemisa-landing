import ThemeRegistry from '../src/components/ThemeRegistry/ThemeRegistry';
import NavigationBar from '../src/components/Navbar/navbar';
import './globals.css';

export const metadata = {
  title: 'Artemisa',
  description: 'Landing page de Artemisa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}