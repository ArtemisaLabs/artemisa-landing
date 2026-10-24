import React from 'react';
import { Box, Typography } from '@mui/material';
import { UserIcon, CheckIcon } from './icons';

interface RoleCardProps {
    title: string;
    features: string[];
    isHighlighted?: boolean;
}

export default function RoleCard({ title, features, isHighlighted = false }: RoleCardProps) {
    return (
        <Box
            sx={{
                flex: 1,
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                border: isHighlighted ? 'none' : '1px solid #E5E0D0',
                boxShadow: isHighlighted
                    ? '0 10px 30px rgba(224, 122, 95, 0.2)'
                    : '0 4px 20px rgba(0, 0, 0, 0.02)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: isHighlighted
                        ? '0 14px 36px rgba(224, 122, 95, 0.28)'
                        : '0 8px 24px rgba(0, 0, 0, 0.06)',
                },
            }}
        >
            {/* Cabecera de la tarjeta */}
            <Box
                sx={{
                    backgroundColor: isHighlighted ? '#E07A5F' : '#FFFFFF',
                    color: isHighlighted ? '#FFFFFF' : '#3D405B',
                    p: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    borderBottom: isHighlighted ? 'none' : '1px solid #F4F1DE',
                }}
            >
                <UserIcon color={isHighlighted ? '#FFFFFF' : '#3D405B'} size={22} />
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 700,
                        fontSize: '1.1rem',
                    }}
                >
                    {title}
                </Typography>
            </Box>

            {/* Lista de características */}
            <Box
                sx={{
                    p: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    backgroundColor: '#FFFFFF',
                    flexGrow: 1,
                }}
            >
                {features.map((feature, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <CheckIcon color={isHighlighted ? '#E07A5F' : '#3D405B'} size={16} />
                        </Box>
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#3D405B',
                                fontWeight: 500,
                                fontSize: '0.95rem',
                            }}
                        >
                            {feature}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}