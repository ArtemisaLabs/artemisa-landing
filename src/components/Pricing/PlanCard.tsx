import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { CheckSmallIcon } from './icons';

export interface PlanCardProps {
  name: string;
  tagline: string;
  price: string;
  features: string[];
  buttonLabel: string;
  icon: React.ReactNode;
  featured?: boolean;
}

export default function PlanCard({ name, tagline, price, features, buttonLabel, icon, featured = false }: PlanCardProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minWidth: 0,
        boxSizing: 'border-box',
        p: { xs: 2.5, md: 3 },
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        border: featured ? '2px solid #E07A5F' : '1px solid rgba(61,64,91,0.12)',
        boxShadow: featured ? '0 12px 32px rgba(224,122,95,0.18)' : '0 4px 20px rgba(0,0,0,0.03)',
      }}
    >
      {featured && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#E07A5F',
            color: '#FFFFFF',
            px: 2,
            py: 0.25,
            borderRadius: '999px',
            fontSize: '0.75rem',
            fontWeight: 700,
            whiteSpace: 'nowrap',
          }}
        >
          Más Popular
        </Box>
      )}

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Box
          sx={{
            width: 44,
            height: 44,
            flexShrink: 0,
            borderRadius: '12px',
            backgroundColor: featured ? '#F9E0D8' : '#F4F1DE',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </Box>
        <Box sx={{ minWidth: 0 }}>
          <Typography sx={{ fontWeight: 700, color: '#3D405B', fontSize: '1rem' }}>{name}</Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>{tagline}</Typography>
        </Box>
      </Box>

      <Typography sx={{ mt: 3, color: '#1D3354', fontWeight: 800, fontSize: { xs: '1.75rem', md: '2rem' }, lineHeight: 1.2 }}>
        {price}{' '}
        <Typography component="span" sx={{ fontSize: '0.85rem', fontWeight: 500, color: '#3D405B' }}>
          MXN / mes
        </Typography>
      </Typography>

      <Stack component="ul" spacing={1.25} sx={{ listStyle: 'none', p: 0, m: 0, mt: 3, flexGrow: 1 }}>
        {features.map((feature) => (
          <Box component="li" key={feature} sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
            <CheckSmallIcon size={16} color="#81B29A" />
            <Typography sx={{ color: '#3D405B', fontSize: '0.875rem' }}>{feature}</Typography>
          </Box>
        ))}
      </Stack>

      {/* <Button
        fullWidth
        variant={featured ? 'contained' : 'outlined'}
        sx={{
          mt: 4,
          py: 1.25,
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: '10px',
          boxShadow: 'none',
          ...(featured
            ? { backgroundColor: '#E07A5F', color: '#FFFFFF', '&:hover': { backgroundColor: '#C95D50', boxShadow: 'none' } }
            : { color: '#3D405B', borderColor: 'rgba(61,64,91,0.3)', '&:hover': { borderColor: '#3D405B', backgroundColor: 'rgba(61,64,91,0.04)' } }),
        }}
      >
        {buttonLabel}
      </Button> */}
    </Box>
  );
}
