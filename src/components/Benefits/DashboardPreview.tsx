import { Box, Paper, Typography, LinearProgress } from '@mui/material';
import Grid from '@mui/material/Grid'; // Importación para v6 / Grid2
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const PALETTE = {
  bg: '#F4F1DE',
  primary: '#E07A5F',
  slate: '#3D405B',
  sage: '#81B29A',
  honey: '#F2CC89',
  border: '#E5E0D0',
};

export default function DashboardPreview() {
  return (
    <Box sx={{ position: 'relative', margin: '0 auto', width: '100%', maxWidth: 650 }}>
      {/* Resplandor cálido de fondo */}
      <Box
        sx={{
          position: 'absolute',
          right: -28,
          top: -32,
          width: 176,
          height: 176,
          borderRadius: '50%',
          backgroundColor: 'rgba(224, 122, 95, 0.2)',
          filter: 'blur(48px)',
          zIndex: 0,
        }}
      />

      {/* Tarjeta Contenedora Principal */}
      <Paper
        elevation={0}
        sx={{
          position: 'relative',
          borderRadius: '28px',
          border: `1px solid ${PALETTE.border}`,
          backgroundColor: PALETTE.bg,
          padding: 1.5,
          boxShadow: '0 25px 70px rgba(61, 64, 91, 0.12)',
          zIndex: 1,
        }}
      >
        {/* Header / Barra Superior */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: '20px 20px 0 0',
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            px: 2,
            py: 1.5,
            mb: 1.5,
            backdropFilter: 'blur(4px)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                display: 'grid',
                placeItems: 'center',
                width: 28,
                height: 28,
                borderRadius: '8px',
                backgroundColor: 'rgba(224, 122, 95, 0.15)',
                color: PALETTE.primary,
              }}
            >
              <ShieldOutlinedIcon sx={{ fontSize: 18 }} />
            </Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: PALETTE.slate }}>
              Artemis
            </Typography>
          </Box>

          {/* Botones estilo macOS */}
          <Box sx={{ display: 'flex', gap: 0.75 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'rgba(224, 122, 95, 0.6)' }} />
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: PALETTE.honey }} />
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: PALETTE.sage }} />
          </Box>
        </Box>

        {/* Grid de Contenido usando Grid2 (sin 'item' ni 'container') */}
        <Grid container spacing={1.5}>
          
          {/* Módulo Principal: "En Estancia Ahora" */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Paper
              elevation={0}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                minHeight: 220,
                borderRadius: '16px',
                backgroundColor: PALETTE.slate,
                p: 2.5,
                color: '#FFFFFF',
              }}
            >
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    color: 'rgba(244, 241, 222, 0.7)',
                    display: 'block',
                  }}
                >
                  En estancia ahora
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    mt: 1.5,
                    fontWeight: 800,
                    letterSpacing: -2,
                    lineHeight: 1,
                    color: '#FFFFFF',
                  }}
                >
                  38
                  <Typography
                    component="span"
                    variant="h6"
                    sx={{ color: PALETTE.honey, ml: 0.5, fontWeight: 400 }}
                  >
                    / 42
                  </Typography>
                </Typography>

                {/* Barra de Progreso */}
                <Box sx={{ mt: 2.5 }}>
                  <LinearProgress
                    variant="determinate"
                    value={90}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: PALETTE.primary,
                        borderRadius: 4,
                      },
                    }}
                  />
                </Box>
                <Typography variant="caption" sx={{ mt: 1, display: 'block', color: 'rgba(244, 241, 222, 0.8)' }}>
                  90% de ocupación · Todas las sucursales
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 3 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: PALETTE.sage,
                  }}
                />
                <Typography variant="caption" sx={{ color: 'rgba(244, 241, 222, 0.9)', fontSize: 11 }}>
                  Actualizado hace 2 min
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Módulos Secundarios */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              
              {/* Tarjeta de Asistencia */}
              <Paper
                elevation={0}
                sx={{
                  borderRadius: '16px',
                  border: `1px solid ${PALETTE.border}`,
                  backgroundColor: '#FFFFFF',
                  p: 2,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justify: 'space-between' }}>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: PALETTE.slate, fontSize: 11 }}>
                    Asistencia de marzo
                  </Typography>
                  <FileDownloadOutlinedIcon sx={{ fontSize: 18, color: PALETTE.primary, cursor: 'pointer' }} />
                </Box>

                {/* Gráfica de Barras */}
                <Box sx={{ mt: 2, display: 'flex', alignItems: 'flex-end', gap: 0.75, height: 70 }}>
                  {[
                    { h: '40%', opacity: 0.3 },
                    { h: '60%', opacity: 0.5 },
                    { h: '50%', opacity: 0.7 },
                    { h: '85%', color: PALETTE.primary },
                    { h: '70%', color: PALETTE.sage },
                    { h: '100%', color: PALETTE.slate },
                    { h: '80%', color: PALETTE.sage },
                  ].map((bar, index) => (
                    <Box
                      key={index}
                      sx={{
                        height: bar.h,
                        flex: 1,
                        borderRadius: '4px 4px 0 0',
                        backgroundColor: bar.color || PALETTE.sage,
                        opacity: bar.opacity || 1,
                      }}
                    />
                  ))}
                </Box>
                <Typography variant="caption" sx={{ mt: 1.5, display: 'block', color: PALETTE.slate, fontSize: 10 }}>
                  Reporte oficial NL listo ·{' '}
                  <Box component="span" sx={{ color: PALETTE.sage, fontWeight: 700 }}>
                    98.4%
                  </Box>
                </Typography>
              </Paper>

              {/* Tarjeta de Diario Digital */}
              <Paper
                elevation={0}
                sx={{
                  borderRadius: '16px',
                  backgroundColor: 'rgba(242, 204, 137, 0.25)',
                  border: '1px solid rgba(242, 204, 137, 0.5)',
                  p: 2,
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 700, color: PALETTE.slate, fontSize: 10 }}>
                  Diario digital · Hoy
                </Typography>
                <Box sx={{ mt: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    sx={{
                      height: 32,
                      width: 40,
                      borderRadius: '8px',
                      backgroundColor: 'rgba(224, 122, 95, 0.25)',
                      border: '1px solid rgba(224, 122, 95, 0.4)',
                    }}
                  />
                  <Box
                    sx={{
                      height: 32,
                      width: 40,
                      borderRadius: '8px',
                      backgroundColor: 'rgba(129, 178, 154, 0.25)',
                      border: '1px solid rgba(129, 178, 154, 0.4)',
                    }}
                  />
                  <Box
                    sx={{
                      height: 32,
                      width: 40,
                      borderRadius: '8px',
                      backgroundColor: 'rgba(61, 64, 91, 0.2)',
                      border: '1px solid rgba(61, 64, 91, 0.3)',
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{ ml: 'auto', fontWeight: 700, color: PALETTE.primary, fontSize: 10 }}
                  >
                    +12 fotos
                  </Typography>
                </Box>
              </Paper>

            </Box>
          </Grid>

        </Grid>
      </Paper>
    </Box>
  );
}