import { Box, Typography, Stack, Button } from '@mui/material';
import MexicoFlag from './MexicoFlag';

function Benefits() {
    return (
        <Box sx={{ flexDirection: 'row', gap: 4, display: 'flex', alignItems: 'space-between', p: 2, width: '98%' }}>
            <Stack sx={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Button variant='outlined' color='brand'>
                    <span style={{ marginRight: '10px' }}><MexicoFlag size={20} /></span> Dise&#241;ado para Estancias Infantiles y Preescolares de M&eacute;xico
                </Button>
            </Stack>
            <Stack sx={{ width: '50%' }}>
                <Typography variant="body1">
                    Descubre cómo Artemisa puede ayudarte a mejorar tu productividad y eficiencia.
                </Typography>
            </Stack>
        </Box>
    );
}

export default Benefits;