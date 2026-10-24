'use client';

import { useState } from 'react';
import {
    Typography,
    Stack,
    Box,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';

export default function NavigationBar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const options = [
        { label: 'Funcionalidades', hyperlink: '/funcionalidades' },
        { label: 'Beneficios', hyperlink: '/beneficios' },
        { label: 'Precios', hyperlink: '/precios' },
        { label: 'FAQ', hyperlink: '/faq' }
    ];

    const drawerContent = (
        <Box
            sx={{ width: 280, p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            onClick={handleDrawerToggle}
        >
            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                    <IconButton onClick={handleDrawerToggle}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <List>
                    {options.map(option => (
                        <ListItem key={option.label} disablePadding sx={{ mb: 1 }}>
                            <ListItemButton
                                component={Link}
                                href={option.hyperlink}
                                sx={{ borderRadius: 2, '&:hover': { backgroundColor: 'action.hover' } }}
                            >
                                <ListItemText primary={option.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Stack spacing={2} sx={{ mb: 2 }}>
                <Button variant="outlined" color="primary" fullWidth>
                    Iniciar Sesion
                </Button>
                <Button variant="contained" color="primary" fullWidth>
                    Solicitar Demo
                </Button>
            </Stack>
        </Box>
    );

    return (
        <Box
            component="nav"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: { xs: 2, md: 4, lg: 6 },
                py: 2,
                borderBottom: '1px solid #eaeaea'
            }}
            className="max"
        >
            {/* LOGOTIPO */}
            {/* LOGOTIPO RESPONSIVO */}
            <Box component={Link} href="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Box
                    component="img"
                    src="/artemis-isotipo.svg"
                    alt="Isotipo"
                    sx={{
                        height: { xs: '35px', lg: '50px' }, // Más pequeño en móvil, más grande en lg
                        mr: 1
                    }}
                />
                <Box
                    component="img"
                    src="/artemis-logotipo.svg"
                    alt="Logotipo"
                    sx={{
                        height: { xs: '30px', lg: '42px' }, // Más pequeño en móvil, más grande en lg
                    }}
                />
            </Box>

            {/* MENÚ DE ESCRITORIO (Ahora oculto hasta que la pantalla sea 'lg' / 1200px) */}
            <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
                {options.map(option => (
                    <Typography
                        key={option.label}
                        component={Link}
                        href={option.hyperlink}
                        variant="body1"
                        sx={{
                            cursor: 'pointer',
                            textDecoration: 'none',
                            color: 'text.primary',
                            '&:hover': { color: 'primary.main' },
                            fontWeight: 'bold'
                        }}
                    >
                        {option.label}
                    </Typography>
                ))}
            </Stack>

            {/* BOTONES DE ESCRITORIO (Ocultos en pantallas menores a 'lg') */}
            <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button variant="outlined" color="primary">
                    Iniciar Sesion
                </Button>
                <Button variant="contained" color="primary">
                    Solicitar Demo
                </Button>
            </Stack>

            {/* BOTÓN HAMBURGUESA (Aparece en pantallas menores a 'lg') */}
            <IconButton
                color="inherit"
                aria-label="abrir menú"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { md: 'none' } }}
            >
                <MenuIcon />
            </IconButton>

            {/* DRAWER MÓVIL */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{ display: { md: 'none' } }}
            >
                {drawerContent}
            </Drawer>
        </Box>
    );
}