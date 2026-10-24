'use client';

import { Container, Typography, Button, Box, Paper, Stack } from '@mui/material';
import Benefits from '../src/components/Benefits/benefits';
import Scope from '../src/components/Scope/Scope';
import Modules from '../src/components/Modules/modules';

export default function HomePage() {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems:'center', justifyItems:'center' }}>
      <Benefits />
      <Stack
        direction="column"
        spacing={2}
        sx={{ backgroundColor: '#f4f3eb', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Scope />
        <Modules />
      </Stack>
    </Box>
  );
}