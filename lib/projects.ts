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
    status: 'Finalizado',
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
  {
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
  },
  {
    id: 'time-fast',
    title: 'Time-Fast',
    category: 'Backend · Gestión de envíos',
    summary: 'API REST para administrar envíos, clientes, conductores y paquetes.',
    description: 'API para gestionar envíos, empleados, clientes, conductores y paquetes; incluye asignación de conductores, estados de envío y búsquedas.',
    contribution: 'Desarrollo de la API REST y de la lógica de gestión de envíos.',
    technologies: ['Java', 'Spring Boot', 'JPA / Hibernate', 'MySQL', 'MyBatis'],
    kind: 'software',
    visual: 'logistica',
  },
  {
    id: 'auth-system',
    title: 'Auth System FastAPI',
    category: 'Backend · Autenticación',
    summary: 'Registro, acceso y protección de rutas mediante JWT.',
    description: 'Sistema de autenticación con registro e inicio de sesión seguro, contraseñas cifradas y endpoints protegidos.',
    contribution: 'Desarrollo de la API, autenticación y pruebas.',
    technologies: ['FastAPI', 'MongoDB', 'JWT', 'Docker', 'Pytest'],
    kind: 'software',
    visual: 'seguridad',
  },
  {
    id: 'records-management',
    title: 'Internal Records Management System',
    category: 'Aplicación web · Documentos',
    summary: 'Organización de documentos de auditoría en SharePoint.',
    description: 'Sistema para organizar, buscar y acceder a documentos de auditoría mediante SharePoint y flujos de automatización.',
    contribution: 'Participación en el desarrollo de la aplicación y sus integraciones.',
    technologies: ['React', 'SharePoint', 'Microsoft Graph API', 'Azure Functions'],
    kind: 'software',
    visual: 'documentos',
  },
]

export const websiteProjects = projects.filter((project) => project.kind === 'website')
export const softwareProjects = projects.filter((project) => project.kind === 'software')
