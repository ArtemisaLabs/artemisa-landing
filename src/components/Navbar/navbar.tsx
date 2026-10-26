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
  ListItemText,
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';

interface Props {
  children: React.ReactElement;
}

// Componente helper para ocultar al bajar y mostrar al subir
function HideOnScroll({ children }: Props) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function NavigationBar({ handleOpenModal }: { handleOpenModal: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const options = [
    { label: 'Beneficios', hyperlink: '/#beneficios' },
    { label: 'Funcionalidades', hyperlink: '/#funcionalidades' },
    { label: 'Precios', hyperlink: '/#precios' },
    { label: 'FAQ', hyperlink: '/#faq' }
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
          {options.map((option) => (
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
        {/* <Button variant="outlined" color="primary" fullWidth>
          Iniciar Sesion
        </Button> */}
        <Button variant="contained" color="primary" fullWidth onClick={handleOpenModal}>
          Solicitar Demo
        </Button>
      </Stack>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          color="inherit"
          elevation={0}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(8px)',
            borderBottom: '1px solid #eaeaea'
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              px: { xs: 2, md: 4, lg: 6 },
              py: 1,
              width: '100%'
            }}
          >
            {/* LOGOTIPO RESPONSIVO */}
            <Box component={Link} href="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <Box
                component="img"
                src="/artemis-isotipo.svg"
                alt="Isotipo"
                sx={{
                  height: { xs: '35px', lg: '50px' },
                  mr: 1
                }}
              />
              <Box
                component="img"
                src="/artemis-logotipo.svg"
                alt="Logotipo"
                sx={{
                  height: { xs: '30px', lg: '42px' }
                }}
              />
            </Box>

            {/* MENÚ DE ESCRITORIO */}
            <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
              {options.map((option) => (
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

            {/* BOTONES DE ESCRITORIO */}
            <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button variant="contained" color="primary" onClick={handleOpenModal}>
                Solicitar Demo
              </Button>
            </Stack>

            {/* BOTÓN HAMBURGUESA */}
            <IconButton
              color="inherit"
              aria-label="abrir menú"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Spacer para evitar que el contenido del sitio quede oculto debajo de la Navbar fija */}
      <Toolbar sx={{ mb: { xs: 2, md: 4 } }} />

      {/* DRAWER MÓVIL */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { md: 'none' } }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}