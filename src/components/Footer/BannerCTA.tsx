import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function HeartDoodle() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20s-7-4.4-7-9.5A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7 2.5C19 15.6 12 20 12 20z" />
    </svg>
  );
}

export default function BannerCTA({handleOpenModal}: {handleOpenModal: () => void}) {
  return (
    <Box sx={{ width: '95%',  mx: 'auto', boxSizing: 'border-box', px: { xs: 2, md: 4 }, py: 2 }} className="max">
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#E07A5F',
          borderRadius: { xs: '16px', md: '20px' },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: { xs: 3, md: 4 },
          px: { xs: 0, md: 5 },
          pb: { xs: 4, md: 0 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: 2,
            flexShrink: 0,
            alignSelf: { xs: 'stretch', md: 'flex-end' },
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src="/benefit_img1.jpg"
            alt="Niña sonriendo en una estancia infantil"
            sx={{
              width: { xs: '100%', md: 220 },
              height: { xs: 180, md: 140 },
              objectFit: 'cover',
              objectPosition: 'center 25%',
              borderRadius: { xs: 0, md: '0 70px 0 0' },
              display: 'block',
            }}
          />
          <Box sx={{ display: { xs: 'none', lg: 'block' }, pb: 2 }}>
            <HeartDoodle />
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', flexGrow: 1, px: { xs: 3, md: 0 }, py: { md: 4 } }}>
          <Typography
            sx={{
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: { xs: '1.375rem', md: '1.75rem' },
              lineHeight: 1.3,
            }}
          >
            Transforma la gestión de tu estancia hoy con Artemis.
          </Typography>
          <Typography sx={{ mt: 1, color: 'rgba(255,255,255,0.9)', fontSize: { xs: '0.875rem', md: '0.95rem' } }}>
            Más tiempo para enseñar. Más tiempo para lo que importa.
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            flexShrink: 0,
            width: { xs: 'calc(100% - 48px)', sm: 'auto' },
            py: 1.25,
            px: 3,
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: '10px',
            backgroundColor: '#FFFFFF',
            color: '#3D405B',
            boxShadow: 'none',
            '&:hover': { backgroundColor: '#F4F1DE', boxShadow: 'none' },
          }}
          onClick={handleOpenModal}
        >
          Solicitar Demo &rarr;
        </Button>
      </Box>
    </Box>
  );
}
