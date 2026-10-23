'use client';

import { Container, Typography, Button, Box, Paper } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function HomePage() {
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={4} sx={{ p: 4, textAlign: 'center', borderRadius: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom color="primary" fontWeight="bold">
           Next.js + Material UI
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Proyecto frontend listo para conectar con tu backend independiente.
        </Typography>
        <Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<RocketLaunchIcon />}
            onClick={() => alert('¡Material UI funcionando correctamente!')}
          >
            Iniciar
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}