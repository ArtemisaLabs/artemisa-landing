'use client';

import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// 1. Ampliamos los tipos de TypeScript para la paleta y para los Botones
declare module '@mui/material/styles' {
  interface Palette {
    brand: Palette['primary'];
  }
  interface PaletteOptions {
    brand?: PaletteOptions['primary'];
  }
}

// Permitir el uso de color="brand" en componentes como Button, IconButton, etc.
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    brand: true;
  }
}

const theme = createTheme({
  palette: {
    mode: 'light',

    brand: {
      main: '#1D3354',      // Azul marino del logotipo
      light: '#364D71',
      dark: '#0F1D30',
      contrastText: '#FFFFFF',
    },

    primary: {
      main: '#E07A5F',       // Terracota: botones y acciones
      light: '#E9957F',
      dark: '#C9654C',
      contrastText: '#FFFFFF',
    },

    secondary: {
      main: '#81B29A',       // Verde salvia: indicadores positivos
      light: '#A7C9B5',
      dark: '#5D9278',
      contrastText: '#FFFFFF',
    },

    background: {
      default: '#F4F1DE',    // Crema cálido
      paper: '#FFFCF5',      // Tarjetas y superficies
    },

    text: {
      primary: '#3D405B',    // Slate oscuro
      secondary: '#686A7D',
    },

    success: {
      main: '#81B29A',
      contrastText: '#FFFFFF',
    },

    warning: {
      main: '#F2CC89',       // Melocotón / miel
      contrastText: '#3D405B',
    },

    error: {
      main: '#C95D50',
      contrastText: '#FFFFFF',
    },

    divider: 'rgba(61, 64, 91, 0.12)',
  },

  typography: {
    fontFamily: [
      'Inter',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),

    h1: {
      fontWeight: 800,
      letterSpacing: '-0.04em',
      lineHeight: 1.1,
      color: '#3D405B',
    },

    h2: {
      fontWeight: 750,
      letterSpacing: '-0.035em',
      lineHeight: 1.2,
      color: '#3D405B',
    },

    h3: {
      fontWeight: 700,
      letterSpacing: '-0.025em',
      color: '#3D405B',
    },

    h4: {
      fontWeight: 700,
      color: '#3D405B',
    },

    h5: {
      fontWeight: 700,
      color: '#3D405B',
    },

    h6: {
      fontWeight: 700,
      color: '#3D405B',
    },

    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0',
    },

    body1: {
      lineHeight: 1.7,
    },

    body2: {
      lineHeight: 1.6,
    },
  },

  shape: {
    borderRadius: 16,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },

        body: {
          backgroundColor: '#F4F1DE',
          color: '#3D405B',
          margin: 0,
        },

        '*::selection': {
          backgroundColor: '#E07A5F',
          color: '#FFFFFF',
        },

        a: {
          color: '#3D405B',
          textDecoration: 'none',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 22px',
          boxShadow: 'none',
          transition: 'all 0.2s ease',

          '&:hover': {
            boxShadow: '0 6px 18px rgba(61, 64, 91, 0.12)',
            transform: 'translateY(-1px)',
          },

          // 🌟 Estilos para variant="contained" y color="primary"
          '&.MuiButton-containedPrimary': {
            '&:hover': {
              backgroundColor: '#C9654C',
            },
          },

          // 🌟 Estilos para variant="outlined" y color="primary"
          '&.MuiButton-outlinedPrimary': {
            borderWidth: '1.5px',
            '&:hover': {
              borderWidth: '1.5px',
              backgroundColor: 'rgba(224, 122, 95, 0.06)',
            },
          },
        },
      },

      // 🌟 Definimos las variantes personalizadas para el color "brand"
      variants: [
        {
          props: { variant: 'contained', color: 'brand' },
          style: {
            backgroundColor: '#1D3354',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#0F1D30',
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'brand' },
          style: {
            color: '#1D3354',
            borderColor: '#1D3354',
            borderWidth: '1.5px',
            '&:hover': {
              borderWidth: '1.5px',
              borderColor: '#0F1D30',
              backgroundColor: 'rgba(29, 51, 84, 0.06)',
            },
          },
        },
        {
          props: { variant: 'text', color: 'brand' },
          style: {
            color: '#1D3354',
            '&:hover': {
              backgroundColor: 'rgba(29, 51, 84, 0.06)',
            },
          },
        },
      ],
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: '1px solid rgba(61, 64, 91, 0.08)',
          backgroundImage: 'none',
          boxShadow: '0 4px 16px rgba(61, 64, 91, 0.05)',
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },

        rounded: {
          borderRadius: 16,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'medium',
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: '#FFFCF5',

          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(61, 64, 91, 0.18)',
          },

          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E07A5F',
          },

          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E07A5F',
            borderWidth: 2,
          },
        },
      },
    },

    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: '12px !important',
          border: '1px solid rgba(61, 64, 91, 0.10)',
          backgroundColor: '#FFFCF5',
          boxShadow: 'none',
          marginBottom: 8,

          '&::before': {
            display: 'none',
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontWeight: 600,
        },
      },
    },
  },
});

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}