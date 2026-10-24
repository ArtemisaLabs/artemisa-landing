import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import FaqAccordion from './FaqAccordion';

const faqs = [
  {
    question: '¿Cumple con los requisitos del Gobierno de Nuevo León?',
    answer:
      'Sí, completamente. Artemis genera de forma automatizada las Hojas Oficiales de Asistencia con el formato exacto exigido por las autoridades del Gobierno de Nuevo León y los lineamientos de Protección Civil (NOM-009-SSA3).',
  },
  {
    question: '¿Qué tan segura es la información de mis alumnos?',
    answer:
      'La seguridad es nuestra máxima prioridad. Todos los datos médicos, personales y fotografías están protegidos con encriptación de grado bancario (SSL/TLS y AES-256) y servidores seguros en la nube.',
  },
  {
    question: '¿Cuánto tiempo toma la configuración del sistema?',
    answer:
      'La configuración inicial toma menos de 15 minutos. Nuestro equipo te ayuda a importar las listas de alumnos y personalizar la plataforma para que empieces a operarla el mismo día.',
  },
  {
    question: '¿Las misses que no son muy tecnológicas pueden usarlo fácilmente?',
    answer:
      'Sí. Diseñamos la interfaz para que sea intuitiva y muy visual. Cualquier persona que sepa usar WhatsApp o tabletas puede pasar lista y enviar reportes en solo 2 clics.',
  },
  {
    question: '¿Tiene contactos de emergencia y alertas?',
    answer:
      'Sí. Cada ficha de alumno cuenta con botones de marcación rápida para tutores y servicios de emergencia, así como registro de pólizas de seguro e historial de alergias.',
  },
];

export default function FaqSection() {
  return (
    <Box
      component="section"
      sx={{
        width: '95%',
        mx: 'auto',
        boxSizing: 'border-box',
        p: { xs: 2, md: 4 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'stretch', md: 'flex-start' },
        gap: { xs: 3, md: 6 },
        overflowX: 'clip',
      }}
    >
      <Box sx={{ width: { xs: '100%', md: '40%' }, pt: { md: 2 } }}>
        <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Preguntas frecuentes
        </Typography>
        <Typography variant="h4" sx={{ mt: 1, color: '#1D3354', fontWeight: 700, fontSize: { xs: '1.5rem', md: '2.125rem' } }}>
          Resolvemos tus dudas
        </Typography>
      </Box>
      <Stack spacing={1.25} sx={{ width: { xs: '100%', md: '60%' } }}>
        {faqs.map((faq) => (
          <FaqAccordion key={faq.question} {...faq} />
        ))}
      </Stack>
    </Box>
  );
}
