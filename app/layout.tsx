import ThemeRegistry from '../src/components/ThemeRegistry/ThemeRegistry';

export const metadata = {
  title: 'Mi App con Next.js y Material UI',
  description: 'Frontend independiente con Next.js App Router y MUI',
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