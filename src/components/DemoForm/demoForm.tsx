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

const INITIAL_FORM: FormData = {
  nombreEstancia: '',
  nombreContacto: '',
  email: '',
  telefono: '',
  municipio: '',
  capacidadAlumnos: '',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const CAPACIDAD_OPTIONS = [
  '1 a 20 niños',
  '21 a 50 niños',
  '51 a 100 niños',
  'Más de 100 niños',
];

export default function SolicitarDemoModal({ open, onClose }: SolicitarDemoModalProps) {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const formatPhone = (raw: string) => {
    const d = raw.replace(/\D/g, '').slice(0, 10);
    if (d.length <= 2) return d;
    if (d.length <= 6) return `${d.slice(0, 2)} ${d.slice(2)}`;
    return `${d.slice(0, 2)} ${d.slice(2, 6)} ${d.slice(6)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const value = name === 'telefono' ? formatPhone(e.target.value) : e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const errors: Partial<Record<keyof FormData, string>> = {};
    (Object.keys(formData) as (keyof FormData)[]).forEach((key) => {
      if (!formData[key].trim()) errors[key] = 'Este campo es obligatorio';
    });
    if (!errors.email && !EMAIL_REGEX.test(formData.email.trim())) {
      errors.email = 'Ingresa un correo electrónico válido';
    }
    if (!errors.telefono && formData.telefono.replace(/\D/g, '').length !== 10) {
      errors.telefono = 'El teléfono debe tener 10 dígitos';
    }
    return errors;
  };

  const fieldProps = (name: keyof FormData) => ({
    error: Boolean(fieldErrors[name]),
    helperText: fieldErrors[name],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setError('Por favor completa correctamente todos los campos obligatorios.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/send-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          telefono: formData.telefono.replace(/\D/g, ''),
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar la solicitud');
      }

      setSubmitted(true);
      setFieldErrors({});
      setFormData(INITIAL_FORM);
    } catch {
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
      setFormData(INITIAL_FORM);
      setFieldErrors({});
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
                {...fieldProps("nombreEstancia")}
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
                {...fieldProps("nombreContacto")}
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
                {...fieldProps("email")}
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
                {...fieldProps("telefono")}
                  label="Teléfono / WhatsApp"
                  placeholder="81 1234 5678"
                  inputMode="tel"
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
                {...fieldProps("municipio")}
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
                {...fieldProps("capacidadAlumnos")}
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