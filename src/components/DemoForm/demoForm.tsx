'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
  TextField,
  Button,
  MenuItem,
  InputAdornment,
  Alert,
  Fade,
  CircularProgress,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SchoolIcon from '@mui/icons-material/SchoolOutlined';
import PersonIcon from '@mui/icons-material/PersonOutlined';
import PhoneIcon from '@mui/icons-material/PhoneOutlined';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOnOutlined';
import GroupsIcon from '@mui/icons-material/GroupsOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined';

interface SolicitarDemoModalProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  nombreEstancia: string;
  nombreContacto: string;
  email: string;
  telefono: string;
  municipio: string;
  capacidadAlumnos: string;
}

const CAPACIDAD_OPTIONS = [
  '1 a 20 niños',
  '21 a 50 niños',
  '51 a 100 niños',
  'Más de 100 niños',
];

export default function SolicitarDemoModal({ open, onClose }: SolicitarDemoModalProps) {
  const [formData, setFormData] = useState<FormData>({
    nombreEstancia: '',
    nombreContacto: '',
    email: '',
    telefono: '',
    municipio: '',
    capacidadAlumnos: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/solicitar-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar la solicitud');
      }

      setSubmitted(true);
    } catch (err) {
      setError('Ocurrió un error al enviar tu solicitud. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetAndClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setError(null);
      setFormData({
        nombreEstancia: '',
        nombreContacto: '',
        email: '',
        telefono: '',
        municipio: '',
        capacidadAlumnos: '',
      });
    }, 300);
  };

  return (
    <Dialog
      open={open}
      onClose={handleResetAndClose}
      maxWidth="sm"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: '20px',
            backgroundColor: 'background.paper',
            p: { xs: 2, sm: 3 },
            boxShadow: '0 20px 40px rgba(61, 64, 91, 0.15)',
          },
        },
      }}
    >
      <IconButton
        aria-label="cerrar"
        onClick={handleResetAndClose}
        sx={{
          position: 'absolute',
          right: 16,
          top: 16,
          color: 'text.secondary',
          '&:hover': {
            backgroundColor: 'rgba(61, 64, 91, 0.08)',
          },
        }}
      >
        <CloseIcon />
      </IconButton>

      {submitted ? (
        <Fade in={submitted}>
          <Box
            sx={{
              textAlign: 'center',
              py: 4,
              px: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <CheckCircleOutlineIcon
              sx={{ fontSize: 72, color: 'secondary.main', mb: 2 }}
            />
            {/* Cambiado component a 'div' para evitar conflictos de h2 */}
            <Typography variant="h4" component="div" sx={{ fontWeight: 800, mb: 1.5 }}>
              ¡Solicitud recibida!
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 420 }}>
              Gracias por tu interés en <strong>Artemis</strong>. Un especialista se pondrá en contacto contigo muy pronto para agendar la demostración personalizada.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleResetAndClose}
              sx={{ minWidth: 180 }}
            >
              Entendido
            </Button>
          </Box>
        </Fade>
      ) : (
        <>
          <DialogTitle sx={{ p: 0, mb: 2 }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 1 }}>
              {/* <Box
                sx={{
                  backgroundColor: 'rgba(224, 122, 95, 0.12)',
                  color: 'primary.main',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                }}
              >
                🇲🇽 Exclusivo para Nuevo León
              </Box> */}
            </Box>
            {/* Cambiado component a 'div' para evitar que DialogTitle anide un h2 dentro de otro h2 */}
            <Typography variant="h3" component="div" sx={{ fontSize: { xs: '1.5rem', sm: '1.875rem' } }}>
              Solicita tu Demo
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              Descubre cómo digitalizar la asistencia oficial y liberarte del papeleo administrativo.
            </Typography>
          </DialogTitle>

          <DialogContent sx={{ p: 0, pt: 1 }}>
            {error && (
              <Alert severity="error" sx={{ mb: 2, borderRadius: '12px' }}>
                {error}
              </Alert>
            )}

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}
            >
              <TextField
                required
                fullWidth
                id="nombreEstancia"
                name="nombreEstancia"
                label="Nombre de la Estancia / Guardería"
                placeholder="Ej. Estancia Infantil del Ángel"
                value={formData.nombreEstancia}
                onChange={handleChange}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SchoolIcon color="action" />
                      </InputAdornment>
                    ),
                  },
                }}
              />

              <TextField
                required
                fullWidth
                id="nombreContacto"
                name="nombreContacto"
                label="Nombre de la Directora o Encargada"
                placeholder="Ej. María Eugenia Gómez"
                value={formData.nombreContacto}
                onChange={handleChange}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color="action" />
                      </InputAdornment>
                    ),
                  },
                }}
              />

              <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                <TextField
                  required
                  fullWidth
                  type="email"
                  id="email"
                  name="email"
                  label="Correo Electrónico"
                  placeholder="directora@estancia.com"
                  value={formData.email}
                  onChange={handleChange}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon color="action" />
                        </InputAdornment>
                      ),
                    },
                  }}
                />

                <TextField
                  required
                  fullWidth
                  type="tel"
                  id="telefono"
                  name="telefono"
                  label="Teléfono / WhatsApp"
                  placeholder="81 1234 5678"
                  value={formData.telefono}
                  onChange={handleChange}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon color="action" />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Box>

              <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                <TextField
                  required
                  fullWidth
                  id="municipio"
                  name="municipio"
                  label="Municipio"
                  placeholder="Ej. Monterrey, Guadalupe, San Pedro..."
                  value={formData.municipio}
                  onChange={handleChange}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon color="action" />
                        </InputAdornment>
                      ),
                    },
                  }}
                />

                <TextField
                  select
                  required
                  fullWidth
                  id="capacidadAlumnos"
                  name="capacidadAlumnos"
                  label="Capacidad de niños"
                  value={formData.capacidadAlumnos}
                  onChange={handleChange}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <GroupsIcon color="action" />
                        </InputAdornment>
                      ),
                    },
                  }}
                >
                  {CAPACIDAD_OPTIONS.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={loading}
                sx={{
                  mt: 1,
                  py: 1.6,
                  fontSize: '1rem',
                  fontWeight: 700,
                  boxShadow: '0 4px 14px rgba(224, 122, 95, 0.35)',
                }}
              >
                {loading ? (
                  <CircularProgress size={24} sx={{ color: '#FFFFFF' }} />
                ) : (
                  'Agendar Mi Demo'
                )}
              </Button>
            </Box>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
}