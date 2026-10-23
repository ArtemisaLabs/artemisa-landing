'use client';

import { Container, Typography, Button, Box, Paper } from '@mui/material';
import Benefits from '../src/components/Benefits/benefits';

export default function HomePage() {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems:'center', justifyItems:'center' }}>
      <Benefits />
    </Box>
  );
}