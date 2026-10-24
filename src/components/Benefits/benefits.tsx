import { Box, Typography, Stack, Button } from '@mui/material';
import MexicoFlag from './MexicoFlag';
import DashboardPreview from './DashboardPreview';
import SocialProofGroup from './Avatar';

function Benefits() {
    return (
        <Box
            sx={{
                flexDirection: { xs: 'column', lg: 'row' },
                gap: { xs: 4, lg: 6 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: { xs: 2, md: 4 },
                width: { xs: '100%', lg: '95%' },
                mx: 'auto',
                overflowX: 'clip'
            }}
            className="max"
        >
            {/* Columna Izquierda: Textos y CTAs */}
            <Stack sx={{ width: { xs: '100%', lg: '50%' }, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Button variant='outlined' color='brand' sx={{ borderRadius: '20px', textTransform: 'none' }}>
                    <span style={{ marginRight: '10px' }}><MexicoFlag size={20} /></span> Dise&#241;ado para Estancias Infantiles y Preescolares de M&eacute;xico
                </Button>
                <Typography variant="h4" sx={{ mt: 2, fontWeight: 800, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
                    Artemis: Tu estancia
                    infantil, <Typography variant="h4" component="span" color='primary' sx={{ fontWeight: 800, fontSize: 'inherit' }}>m&aacute;s ligera.</Typography>
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary', lineHeight: 1.6, fontSize: { xs: '0.95rem', md: '1rem' } }}>
                    Automatiza la burocracia de tu estancia en minutos. Genera autom&aacute;ticamente las hojas de asistencia oficiales para el gobierno del estado, monitorea la ocupaci&oacute;n en tiempo real y enamora a los padres con un diario digital completo.
                </Typography>
                <Stack sx={{ mt: 4, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, width: '100%' }}>
                    <Button variant='contained' color='primary' sx={{ width: { xs: '100%', sm: 'auto' }, py: 1.5, px: 3, textTransform: 'none', fontWeight: 600 }}>
                        Solicitar Demo gratuita de Artemis
                    </Button>
                    <Button variant='outlined' color='primary' sx={{ width: { xs: '100%', sm: 'auto' }, py: 1.5, px: 3, textTransform: 'none', fontWeight: 600 }}>
                        Ver Video interactivo (2 min)
                    </Button>
                </Stack>
                <br/>
                <SocialProofGroup />
            </Stack>

            {/* Columna Derecha: Contenedor Relativo que envuelve AMBAS capas */}
            <Box
                sx={{
                    width: { xs: '100%', lg: '50%' },
                    position: 'relative',
                    mt: { xs: 2, md: 10, lg: 4 }, // Da espacio para el desborde del dashboard flotante
                    isolation: 'isolate',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                {/* Capa 1 (Fondo): Fotografía de la maestra y la alumna */}
                <Box
                    component="img"
                    src="/benefit_img1.jpg"
                    alt="Maestra y alumna en estancia infantil"
                    sx={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '24px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                        display: 'block',
                        objectFit: 'cover',
                        mt: { xs: 0, sm: '150px', lg: '120px' }
                    }}
                />

                {/* Capa 2 (Superpuesta): Dashboard flotando encima de la imagen */}
                <Box
                    sx={{
                        position: { xs: 'relative', sm: 'absolute' },
                        // Desplaza el dashboard hacia arriba para que quede montado/encimado sobre la mitad superior de la foto
                        top: { sm: '-40px', md: '-50px' },
                        left: { sm: '50%' },
                        transform: { sm: 'translateX(-50%)' },
                        width: { xs: '100%', sm: '92%' },
                        maxWidth: '580px',
                        zIndex: 2,
                        mt: { xs: -6, sm: 0 } // Desplazamiento sutil en pantallas pequeñas/móviles
                    }}
                >
                    <DashboardPreview />
                </Box>
            </Box>
        </Box>
    );
}

export default Benefits;