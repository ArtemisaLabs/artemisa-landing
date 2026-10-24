import {
    Box,
    Typography
} from '@mui/material';

export default function Card({ title, description, icon }: any) {
    return (
        <Box 
            sx={{
                width: '100%', // Se adapta al contenedor del grid flexible
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'flex-start', 
                justifyContent: 'flex-start', 
                padding: '24px', 
                backgroundColor: '#ffffff', // Fondo crema cálido acorde a tu paleta
                border: '1px solid #E5E0D0', 
                borderRadius: '24px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                height: '100%',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                    transform: 'translateY(-4px)'
                },
            }}
        >
            <Box sx={{ mb: 2 }}>{icon}</Box>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#3D405B', mb: 1, fontSize: '1.1rem' }}>
                {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.5 }}>
                {description}
            </Typography>
        </Box>
    );
}