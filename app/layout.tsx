import ThemeRegistry from '../src/components/ThemeRegistry/ThemeRegistry';
import NavigationBar from '../src/components/Navbar/navbar';

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
          <NavigationBar />  
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}