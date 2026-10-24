import {
    Box,
    Typography
} from '@mui/material';
import Card from './card';
import {
    OfficialSheetsIcon,
    MonitorClockIcon,
    MedicalRecordIcon,
    PackagesIcon,
    DigitalJournalIcon,
    ComplianceIcon
} from './icons';

export default function Modules() {

    const modulesData = [
        {
            title: 'Hojas Oficiales NL',
            description: 'Exportación automatizada al formato exigido por el gobierno.',
            icon: <OfficialSheetsIcon size={44} />,
        },
        {
            title: 'Monitor "En Estancia Ahora"',
            description: 'Control en vivo y a distancia de cuántos alumnos están en la guardería.',
            icon: <MonitorClockIcon size={44} />,
        },
        {
            title: 'Ficha Médica y Seguro',
            description: 'Registro de alergias, dietas especiales, síntomas y póliza de emergencias por sucursal.',
            icon: <MedicalRecordIcon size={44} />,
        },
        {
            title: 'Paquetes y Horas Extra',
            description: 'Facturación automática por turnos (4h, 6h, completo) con regla de redondeo a hora completa.',
            icon: <PackagesIcon size={44} />,
        },
        {
            title: 'Diario Digital y Menús Nutricionales',
            description: 'Bitácora diaria con fotos, planeaciones temáticas mensuales y menús con sustitución de platillos.',
            icon: <DigitalJournalIcon size={44} />,
        },
        {
            title: 'Cumplimiento y Firma Digital',
            description: 'Ratios legalmente seguros (NOM-009-SSA3), carpetas de Protección Civil y firma de documentos.',
            icon: <ComplianceIcon size={44} />,
        },
    ];

    return (
        <Box
            sx={{
                width: '90%',
                mx: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                py: 4
            }}
        >
            {/* Encabezados de la sección */}
            <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                TODO LO QUE NECESITAS EN UN SOLO LUGAR
            </Typography>
            <Typography variant="h4" sx={{ mt: 1, color: '#1D3354', fontWeight: 700, fontSize: { xs: '1.5rem', md: '2.125rem' } }}>
                M&oacute;dulos clave de Artemis
            </Typography>

            {/* Contenedor de las tarjetas con flexWrap para 3 arriba y 3 abajo */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 3, // Espacio uniforme entre tarjetas (horizontal y vertical)
                    width: '100%',
                    justifyContent: 'center'
                }}
            >
                {modulesData.map((module, index) => (
                    <Box
                        key={index}
                        sx={{
                            // En dispositivos móviles (xs) ocupa el 100%, en pantallas medianas/grandes (md) ocupa un tercio exacto menos el gap
                            width: { xs: '100%', sm: 'calc(50% - 16px)', lg: 'calc(33.333% - 16px)' },
                            display: 'flex'
                        }}
                    >
                        <Card
                            title={module.title}
                            description={module.description}
                            icon={module.icon}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}