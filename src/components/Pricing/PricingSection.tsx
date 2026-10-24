import React from 'react';
import { Box, Typography } from '@mui/material';
import PlanCard, { PlanCardProps } from './PlanCard';
import { SproutIcon, BuildingIcon, NetworkIcon } from './icons';

const plans: PlanCardProps[] = [
  {
    name: 'Básica',
    tagline: 'Ideal para estancias pequeñas',
    price: '$1,490',
    features: ['Hojas oficiales NL', 'Monitor en estancia ahora', 'Diario digital (básico)'],
    buttonLabel: 'Comenzar ahora',
    icon: <SproutIcon size={24} color="#81B29A" />,
  },
  {
    name: 'Pro Artemis / Sucursal',
    tagline: 'La opción más completa',
    price: '$2,490',
    features: ['Todo lo de Básica', 'Ficha médica y seguro', 'Paquetes y horas extra', 'Menús nutricionales'],
    buttonLabel: 'Solicitar Demo',
    icon: <BuildingIcon size={24} color="#E07A5F" />,
    featured: true,
  },
  {
    name: 'Red Multisucursal',
    tagline: 'Para grandes redes y cadenas',
    price: '$4,990',
    features: ['Todo lo de Pro Artemis', 'Métricas consolidadas', 'Soporte prioritario', 'Capacitación incluida'],
    buttonLabel: 'Solicitar Demo',
    icon: <NetworkIcon size={24} color="#3D405B" />,
  },
];

export default function PricingSection() {
  return (
    <Box
      component="section"
      sx={{ width: '95%', mx: 'auto', boxSizing: 'border-box', p: { xs: 2, md: 4 }, overflowX: 'clip' }}
    >
      <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        Planes y precios
      </Typography>
      <Typography variant="h4" sx={{ mt: 1, color: '#1D3354', fontWeight: 700, fontSize: { xs: '1.5rem', md: '2.125rem' } }}>
        Elige el plan que se adapta a tu estancia
      </Typography>

      <Box
        sx={{
          mt: { xs: 5, md: 6 },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: { xs: 4, md: 3 },
          alignItems: 'stretch',
        }}
      >
        {plans.map((plan) => (
          <PlanCard key={plan.name} {...plan} />
        ))}
      </Box>
    </Box>
  );
}
