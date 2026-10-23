import React from 'react';
import { Box, Typography, Avatar, AvatarGroup } from '@mui/material';

// Datos de ejemplo para las imágenes de los avatares. 
// Reemplaza estas URLs con las rutas reales a tus imágenes en tu proyecto.
// Es buena práctica tenerlas en formato .jpg o .png y de un tamaño pequeño.
const USERS_AVATARS = [
  { alt: 'Directora Lucía Martínez', src: '/path-to-lucia-avatar.jpg' },
  { alt: 'Miss Brenda Solís', src: '/path-to-brenda-avatar.jpg' },
  { alt: 'Directora Carmen Reyes', src: '/path-to-carmen-avatar.jpg' },
  { alt: 'Miss Sandra López', src: '/path-to-sandra-avatar.jpg' },
];

function SocialProofGroup() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 2, // Espacio entre el grupo de avatares y el texto
        p: 1, // Padding interno opcional
      }}
    >
      {/* Grupo de Avatares Superpuestos */}
      {/* max={4} limita cuántos avatares se muestran antes de que aparezca el '+N' */}
      <AvatarGroup 
        max={4} 
        sx={{
          '& .MuiAvatar-root': { 
            width: 38, // Tamaño de cada avatar, similar a la imagen
            height: 38, 
            border: '2px solid',
            borderColor: 'background.paper', // Borde blanco o color de fondo para el efecto de recorte
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)', // Sombra sutil para dar relieve
          }
        }}
      >
        {USERS_AVATARS.map((user, index) => (
          <Avatar 
            key={index} 
            alt={user.alt} 
            src={user.src} 
            sx={{
              // Este pequeño ajuste vertical puede ayudar a recrear el efecto de recorte irregular de la imagen original si los avatares no son perfectos
              // mt: index % 2 === 0 ? 0.25 : -0.25, 
            }}
          />
        ))}
      </AvatarGroup>

      {/* Texto de Prueba Social */}
      <Box sx={{ maxWidth: '300px' /* Limita el ancho para forzar el salto de línea como en la imagen */ }}>
        <Typography 
          variant="body1" // Tamaño de fuente estándar, puedes cambiar a 'body2' si lo prefieres más pequeño
          sx={{ 
            color: 'text.secondary', // Un gris oscuro/azulado
            lineHeight: 1.4, // Interlineado cómodo
          }}
        >
          M&aacute;s de{' '}
          <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' /* Resalta el número */ }}>
            120 directoras y misses
          </Box>{' '}
          ya gestionan con Artemis.
        </Typography>
      </Box>
    </Box>
  );
}

export default SocialProofGroup;