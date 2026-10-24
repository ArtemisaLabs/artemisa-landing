import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';

const links = [
  { label: 'soyartemis.com', href: 'https://soyartemis.com' },
  { label: 'Política de Privacidad', href: '#' },
  { label: 'Términos y Condiciones', href: '#' },
];

function SocialIcon({ label, href, children }: { label: string; href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ color: '#1D3354', display: 'flex', '&:hover': { color: '#E07A5F' } }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {children}
      </svg>
    </Link>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '95%',
        mx: 'auto',
        boxSizing: 'border-box',
        px: { xs: 2, md: 4 },
        py: { xs: 4, md: 5 },
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        alignItems: { xs: 'flex-start', lg: 'center' },
        justifyContent: 'space-between',
        gap: { xs: 3, lg: 4 },
      }}
    >
      <Box>
        <Box component="img" src="/artemis-imagotipo.svg" alt="Artemis" sx={{ height: 36, width: 'auto', display: 'block' }} />
        <Typography sx={{ mt: 0.5, color: 'text.secondary', fontSize: '0.75rem' }}>
          El arte de educar &bull; El coraz&oacute;n de cada Miss
        </Typography>
      </Box>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 3 }}
        sx={{ flexWrap: 'wrap', rowGap: 1 }}
      >
        {links.map((link) => (
          <Link key={link.label} href={link.href} underline="hover" sx={{ color: '#3D405B', fontSize: '0.8rem' }}>
            {link.label}
          </Link>
        ))}
      </Stack>

      <Stack spacing={0.75}>
        <Link href="mailto:hola@soyartemis.com" underline="hover" sx={{ color: '#3D405B', fontSize: '0.8rem' }}>
          hola@soyartemis.com
        </Link>
        <Link href="tel:+525512345678" underline="hover" sx={{ color: '#3D405B', fontSize: '0.8rem' }}>
          +52 55 1234 5678
        </Link>
      </Stack>

      <Stack direction="row" spacing={2}>
        <SocialIcon label="Facebook" href="https://facebook.com">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </SocialIcon>
        <SocialIcon label="Instagram" href="https://instagram.com">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </SocialIcon>
        <SocialIcon label="LinkedIn" href="https://linkedin.com">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </SocialIcon>
      </Stack>
    </Box>
  );
}
