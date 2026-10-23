'use client';

import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Configura los colores y tipografía de tu aplicación
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Color principal
    },
    secondary: {
      main: '#9c27b0', // Color secundario
    },
  },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline normaliza los estilos CSS entre distintos navegadores */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}