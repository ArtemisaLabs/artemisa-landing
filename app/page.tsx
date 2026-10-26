'use client';

import { Container, Typography, Button, Box, Paper, Stack } from '@mui/material';
import NavigationBar from '../src/components/Navbar/navbar';
import { useState } from 'react';
import SolicitarDemoModal from '../src/components/DemoForm/demoForm';
import Benefits from '../src/components/Benefits/benefits';
import Scope from '../src/components/Scope/Scope';
import Modules from '../src/components/Modules/modules';
import Users from '../src/components/Users/users';
import PricingSection from '../src/components/Pricing/PricingSection';
import FaqSection from '../src/components/Faq/FaqSection';
import BannerCTA from '../src/components/Footer/BannerCTA';
import Footer from '../src/components/Footer/Footer';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
      <NavigationBar handleOpenModal={handleOpenModal} />
      <a id="beneficios"></a>
      <Benefits handleOpenModal={handleOpenModal} />
      <Stack
        direction="column"
        spacing={2}
        sx={{ backgroundColor: '#f4f3eb', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Scope />
        <a id="funcionalidades"></a>
        <Modules />
      </Stack>
      <a id="usuarios"></a>
      <Users />
      <a id="precios"></a>
      <Stack
        direction="column"
        spacing={2}
        sx={{ backgroundColor: '#f4f3eb', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <PricingSection />
        <a id="faq"></a>
        <FaqSection />
        <BannerCTA handleOpenModal={handleOpenModal} />
        <Footer />
      </Stack>
      <SolicitarDemoModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </Box>
  );
}