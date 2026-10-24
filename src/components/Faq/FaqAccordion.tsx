import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

interface FaqAccordionProps {
  question: string;
  answer: string;
}

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3D405B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function FaqAccordion({ question, answer }: FaqAccordionProps) {
  return (
    <Accordion
      disableGutters
      elevation={0}
      sx={{
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(61,64,91,0.12)',
        borderRadius: '8px !important',
        '&:before': { display: 'none' },
      }}
    >
      <AccordionSummary expandIcon={<ChevronIcon />} sx={{ px: 2 }}>
        <Typography sx={{ color: '#3D405B', fontSize: { xs: '0.875rem', md: '0.9rem' }, fontWeight: 500 }}>{question}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 2, pt: 0, pb: 2 }}>
        <Typography sx={{ color: 'text.secondary', fontSize: '0.875rem', lineHeight: 1.6 }}>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
