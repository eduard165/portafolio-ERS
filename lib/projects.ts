export type Project = {
  id: string
  title: string
  category: string
  summary: string
  description: string
  contribution: string
  technologies: string[]
  kind: 'website' | 'software'
  visual: 'mezcal' | 'micheladas' | 'ganaderia' | 'logistica' | 'seguridad' | 'documentos'
  images?: { src: string; alt: string }[]
  status?: 'En desarrollo'
  siteUrl?: string
  repositoryUrl?: string
}

export const projects: Project[] = [
  {
    id: 'campo-negro',
    title: 'Campo Negro',
    category: 'Sitio web · Mezcal artesanal',
    summary: 'Una presencia digital para contar el origen y el proceso de una marca de mezcal.',
    description: 'Sitio para presentar la marca, su historia y sus productos. El contenido y las capturas finales se incorporarán cuando el proyecto esté listo.',
    contribution: 'Desarrollo de la interfaz y adaptación para distintos tamaños de pantalla.',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    kind: 'website',
    visual: 'mezcal',
    status: 'En desarrollo',
    images: [
    { src: '/projects/campo_negro/01-campo-negro-inicio.png', alt: 'Inicio del sitio Campo Negro' },
    { src: '/projects/campo_negro/02-campo-negro-esencia.png', alt: 'Sección Nuestra esencia' },
    { src: '/projects/campo_negro/03-campo-negro-historia.png', alt: 'Sección Nuestra historia' },
    { src: '/projects/campo_negro/04-campo-negro-mezcal.png', alt: 'Sección Nuestros productos' },
    { src: '/projects/campo_negro/05-campo-negro-proceso.png', alt: 'Sección Proceso del mezcal' },
    { src: '/projects/campo_negro/06-campo-negro-contacto-footer.png', alt: 'Sección Contacto' }
    ],
    repositoryUrl: 'https://github.com/eduard165/campo-negro-web.git',
    siteUrl: 'https://campo-negro-web.vercel.app/',
  },
  /* {
    id: 'el-compa',
    title: 'El Compa',
    category: 'Sitio web · Alimentos y bebidas',
    summary: 'Propuesta de sitio para mostrar menú, productos y personalidad del negocio.',
    description: 'Proyecto de sitio web para un negocio de micheladas. Las imágenes y funciones definitivas se agregarán conforme avance el desarrollo.',
    contribution: 'Propuesta y desarrollo web; detalles del alcance pendientes de confirmar.',
    technologies: [],
    kind: 'website',
    visual: 'micheladas',
    status: 'En desarrollo',
  },
  {
    id: 'ganaderia-don-pedro',
    title: 'Ganadería Don Pedro',
    category: 'Sitio web · Sector agropecuario',
    summary: 'Un espacio para presentar la ganadería, su trabajo y su catálogo.',
    description: 'Proyecto web para comunicar la historia de la ganadería y mostrar su catálogo. Participa en subastas; no las organiza.',
    contribution: 'Estructura del sitio y desarrollo de la experiencia web.',
    technologies: [],
    kind: 'website',
    visual: 'ganaderia',
    status: 'En desarrollo',
  } */
  {
    id: 'time-fast',
    title: 'Time-Fast',
    category: 'Sistema de logística · Proyecto académico',
    summary: 'Sistema de gestión y seguimiento de envíos con una API REST que conecta aplicaciones de escritorio, móvil y web.',
    description: 'Proyecto integrador de la Universidad Veracruzana (2024–2025), desarrollado en equipo. La API permite gestionar colaboradores, unidades, clientes, envíos y paquetes. Una aplicación de escritorio, una app móvil y un tracker web consumen sus servicios.',
    contribution: 'Desarrollo de la API REST y de la lógica de gestión de envíos.',
    technologies: ['Java', 'MyBatis', 'MySQL', 'JavaFX', 'Kotlin', 'HTML', 'CSS', 'JavaScript', 'Gson', 'Procedimientos Almacenados'],
    kind: 'software',
    visual: 'logistica',
    repositoryUrl: 'https://github.com/tu-usuario/tu-repositorio-real',
  },
  
 {
  id: 'records-management',
  title: 'Archivo Interno · SDI',
  category: 'Aplicación web · Gestión documental',
  summary:
    'Registro, organización y consulta de documentos de auditoría con acceso institucional e integración con SharePoint.',
  description:
    'Aplicación web desarrollada en 2024 para la Secretaría de Desarrollo Institucional de la Universidad Veracruzana. Permite registrar documentos de auditoría, cargar archivos en SharePoint, organizarlos por carpeta, auditoría, año y mes, y consultar y actualizar la información. Integra autenticación con cuentas institucionales de Microsoft mediante MSAL.',
  contribution:
    'Desarrollo integral de la aplicación, la autenticación institucional y la integración con Microsoft Graph API para gestionar archivos y registros en SharePoint.',
  technologies: [
    'Next.js',
    'React',
    'JavaScript',
    'SharePoint',
    'Microsoft Graph API',
    'MSAL',
    'Tailwind CSS',
    'Flowbite',
  ],
  kind: 'software',
  visual: 'documentos',
  repositoryUrl: 'https://github.com/eduard165/ArchivoInterno-SDI',
},
  {
  id: 'movies-api-fastapi',
  title: 'Movies API',
  category: 'Backend · API REST',
  summary: 'API para gestionar películas con autenticación JWT y almacenamiento en MongoDB.',
  description: 'API REST desarrollada con FastAPI y MongoDB para registrar, consultar, actualizar y eliminar películas. Integra autenticación mediante JWT, validación de datos y bitácoras. Incluye soporte para pruebas unitarias con pytest y ejecución en contenedores Docker.',
  contribution: 'Diseño e implementación de la API y de sus funciones de gestión de películas.',
  technologies: ['Python', 'FastAPI', 'MongoDB', 'JWT', 'Docker', 'pytest'],
  kind: 'software',
  visual: 'documentos',
  repositoryUrl: 'https://github.com/eduard165/movies-api-fastapi',
},
{
  id: 'fastapi-postgres-practice',
  title: 'FastAPI · PostgreSQL',
  category: 'Backend · Proyecto de práctica',
  summary: 'API de práctica para gestionar usuarios con FastAPI, PostgreSQL y SQLAlchemy.',
  description: 'Laboratorio personal de desarrollo backend con Python. Organiza una API de usuarios en rutas, servicios, modelos y esquemas, con operaciones CRUD, conexión a PostgreSQL mediante SQLAlchemy y validación de datos con Pydantic.',
  contribution: 'Implementación de endpoints, modelos de datos, esquemas de validación y lógica de gestión de usuarios.',
  technologies: [
    'Python',
    'FastAPI',
    'PostgreSQL',
    'SQLAlchemy',
    'Pydantic',
    'Uvicorn',
  ],
  kind: 'software',
  visual: 'documentos',
  repositoryUrl: 'https://github.com/eduard165/fastapi-postgres-practice',
},
]

export const websiteProjects = projects.filter((project) => project.kind === 'website')
export const softwareProjects = projects.filter((project) => project.kind === 'software')
