import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { DocumentIcon, CheckIcon } from './ScopeIcons';
import ClockIcon from './ScopeWatch';


export default function Scope() {
    const scopeBoxes = [
        {
            title: 'Sin Artemis',
            value: '30h',
            description: 'al mes llenando hojas de asistencia a mano y redactando diarios impresos.',
            backgroundColor: '#FCE8D5',
            titleColor: '#A15238',
            valueColor: '#D96143',
            textColor: '#3D405B',
            badgeBgColor: '#F3D2BC',
            icon: <DocumentIcon size={18} />,
        },
        {
            title: 'Con Artemis',
            value: '1 clic',
            description: 'para generar el reporte oficial listo para imprimir, firmar y entregar al Gobierno de NL.',
            backgroundColor: '#E1EFE6',
            titleColor: '#255845',
            valueColor: '#4C7C69',
            textColor: '#3D405B',
            badgeBgColor: '#81B29A',
            icon: <CheckIcon size={16} />,
        },
    ];

    function ScopeBox({
        title,
        value,
        description,
        backgroundColor,
        titleColor,
        valueColor,
        textColor,
        badgeBgColor,
        icon,
    }: {
        title: string;
        value: string;
        description: string;
        backgroundColor: string;
        titleColor: string;
        valueColor: string;
        textColor: string;
        badgeBgColor: string;
        icon: React.ReactNode;
    }) {
        return (
            <Box
                sx={{
                    p: { xs: 2, md: 3 },
                    backgroundColor,
                    borderRadius: '24px',
                    width: { xs: '100%', sm: '50%' },
                    boxSizing: 'border-box',
                    minWidth: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                }}
            >
                <Box>
                    {/* Cabecera con Icono Circular y Título */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                        <Box
                            sx={{
                                width: 32,
                                height: 32,
                                flexShrink: 0,
                                borderRadius: '50%',
                                backgroundColor: badgeBgColor,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {icon}
                        </Box>

                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: 700,
                                color: titleColor,
                                fontSize: '1rem',
                            }}
                        >
                            {title}
                        </Typography>
                    </Box>

                    {/* Métrica principal */}
                    <Typography
                        variant="h3"
                        sx={{
                            mt: 2.5,
                            fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                            fontWeight: 600,
                            color: valueColor,
                            letterSpacing: '-0.02em',
                        }}
                    >
                        {value}
                    </Typography>
                </Box>

                {/* Descripción */}
                <Typography
                    variant="body2"
                    sx={{
                        mt: 2,
                        color: textColor,
                        fontSize: '0.925rem',
                        lineHeight: 1.5,
                    }}
                >
                    {description}
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ p: { xs: 2, md: 4 }, width: { xs: '100%', lg: '95%' }, mx: 'auto', boxSizing: 'border-box', overflowX: 'clip' }}>
            <Box
                sx={{
                    mb: 4,
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    alignItems: { xs: 'stretch', lg: 'center' },
                    gap: { xs: 3, md: 4 },
                }}
            >
                <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: { xs: '100%', lg: '50%' } }}>
                    <Typography variant="body1">
                        EL GRAN RETO
                    </Typography>
                    <Typography variant="h4" sx={{ color: 'text.secondary', fontSize: { xs: '1.5rem', md: '2.125rem' }, wordBreak: 'break-word' }}>
                        Pasas 30+ horas al mes llenando hojas de asistencia del gobierno a mano.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6, fontSize: { xs: '0.95rem', md: '1rem' } }}>
                        La burocracia te quita tiempo de lo m&aacute;s importante: tus niños, tus maestras y tu comunidad.
                    </Typography>
                </Stack>
                <Stack sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'stretch', gap: 2, width: { xs: '100%', lg: '50%' } }}>
                    {scopeBoxes.map((box, index) => (
                        <ScopeBox key={index} {...box} />
                    ))}
                </Stack>
            </Box>
            <Stack
                direction="column"
                spacing={0}
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    textAlign: { xs: 'center', sm: 'left' },
                    p: { xs: 2, md: 3 },
                    gap: { xs: 1, sm: 2 },
                    backgroundColor: '#E1EFE6',
                    borderRadius: '10px',
                }}
            >
                <Stack sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <ClockIcon size={50} color="#4C7C69" />
                </Stack>
                <Stack>
                    <Typography variant="body1" sx={{ color: '#4C7C69' }}>
                     Con <strong>Artemis ahorras m&aacute;s de 25 horas al mes</strong>
                    </Typography>
                    <Typography variant="body1" sx={{}}>
                        en papeleo administrativo por sucursal.
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    );
}