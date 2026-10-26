import React from 'react';
import { Box, Typography } from '@mui/material';
import RoleCard from './cards';

export default function RolesSection() {
    const rolesData = [
        {
            title: 'Directoras',
            isHighlighted: true,
            features: [
                'Ahorro de tiempo',
                'Métricas multisucursal',
                'Finanzas bajo control',
            ],
        },
        {
            title: 'Maestras',
            isHighlighted: false,
            features: [
                'Pase de lista rápido',
                'Diario digital fácil desde tablets',
                'Herramientas didácticas',
            ],
        },
        {
            title: 'Padres de Familia',
            isHighlighted: false,
            features: [
                'Tranquilidad total',
                'Fotos en vivo',
                'Pagos transparentes',
            ],
        },
    ];

    return (
        <Box
            sx={{
                width: '90%',
                mx: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                py: { xs: 4, md: 6 }
            }}
            className="max"
        >
            {/* Encabezados */}
            <Typography
                variant="body2"
                sx={{
                    color: 'text.secondary',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                }}
            >
                PENSADO PARA CADA ROL
            </Typography>

            <Typography
                variant="h4"
                sx={{
                    mt: 1,
                    mb: 4,
                    fontWeight: 600,
                    color: '#3D405B',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                }}
            >
                Una experiencia única para todo tu equipo
            </Typography>

            {/* Grid responsivo de tarjetas */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 3,
                    width: '100%',
                }}
            >
                {rolesData.map((role, index) => (
                    <RoleCard
                        key={index}
                        title={role.title}
                        features={role.features}
                        isHighlighted={role.isHighlighted}
                    />
                ))}
            </Box>
        </Box>
    );
}