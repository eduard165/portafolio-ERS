type ProjectTranslation = {
  title?: string
  category: string
  summary: string
  description: string
  contribution: string
  technologies?: string[]
  imageAlts?: string[]
}

export type Project = {
  id: string
  title: string
  category: string
  summary: string
  description: string
  contribution: string
  technologies: string[]
  kind: 'website' | 'software'
  visual:
    | 'mezcal'
    | 'micheladas'
    | 'ganaderia'
    | 'logistica'
    | 'seguridad'
    | 'documentos'
  images?: { src: string; alt: string }[]
  status?: 'En desarrollo'
  siteUrl?: string
  repositoryUrl?: string
  en?: ProjectTranslation
}

export const projects: Project[] = [
  {
    id: 'campo-negro',
    title: 'Campo Negro',
    category: 'Sitio web · Campo Negro',
    summary:
      'Una presencia digital para contar el origen y el proceso de una marca de mezcal.',
    description:
      'Sitio para presentar la marca, su historia y sus productos. El contenido y las capturas finales se incorporarán cuando el proyecto esté listo.',
    contribution:
      'Desarrollo de la interfaz y adaptación para distintos tamaños de pantalla.',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    kind: 'website',
    visual: 'mezcal',
    status: 'En desarrollo',
    images: [
      {
        src: '/projects/campo_negro/01-campo-negro-inicio.png',
        alt: 'Inicio del sitio Campo Negro',
      },
      {
        src: '/projects/campo_negro/02-campo-negro-esencia.png',
        alt: 'Sección Nuestra esencia',
      },
      {
        src: '/projects/campo_negro/03-campo-negro-historia.png',
        alt: 'Sección Nuestra historia',
      },
      {
        src: '/projects/campo_negro/04-campo-negro-mezcal.png',
        alt: 'Sección Nuestros productos',
      },
      {
        src: '/projects/campo_negro/05-campo-negro-proceso.png',
        alt: 'Sección Proceso del mezcal',
      },
      {
        src: '/projects/campo_negro/06-campo-negro-contacto-footer.png',
        alt: 'Sección Contacto',
      },
    ],
    repositoryUrl:
      'https://github.com/eduard165/campo-negro-web.git',
    siteUrl: 'https://campo-negro-web.vercel.app/',
    en: {
      category: 'Website · Campo Negro',
      summary:
        'A digital presence that tells the story of a mezcal brand’s origins and production process.',
      description:
        'A website presenting the brand, its history, and its products. Final content and screenshots will be added when the project is ready.',
      contribution:
        'Interface development and adaptation to different screen sizes.',
      imageAlts: [
        'Campo Negro homepage',
        'Our essence section',
        'Our history section',
        'Our products section',
        'Mezcal production process section',
        'Contact section',
      ],
    },
  },
  {
    id: 'time-fast',
    title: 'Time-Fast',
    category: 'Sistema de logística · Proyecto académico',
    summary:
      'Sistema de gestión y seguimiento de envíos con una API REST que conecta aplicaciones de escritorio, móvil y web.',
    description:
      'Proyecto integrador de la Universidad Veracruzana (2024–2025). La API permite gestionar colaboradores, unidades, clientes, envíos y paquetes. Una aplicación de escritorio, una app móvil y un tracker web consumen sus servicios.',
    contribution:
      'Desarrollo de la API REST y de la lógica de gestión de envíos.',
    technologies: [
      'Java',
      'MyBatis',
      'MySQL',
      'JavaFX',
      'Kotlin',
      'HTML',
      'CSS',
      'JavaScript',
      'Gson',
      'Procedimientos Almacenados',
    ],
    kind: 'software',
    visual: 'logistica',
    repositoryUrl: 'https://github.com/eduard165/time-fast',
    en: {
      category: 'Logistics system · Academic project',
      summary:
        'A shipment management and tracking system with a REST API connecting desktop, mobile, and web applications.',
      description:
        'An integrated academic project at Universidad Veracruzana (2024–2025). The API manages staff, vehicles, customers, shipments, and packages. Its services are consumed by a desktop application, a mobile app, and a web tracker.',
      contribution:
        'Development of the REST API and shipment management logic.',
      technologies: [
        'Java',
        'MyBatis',
        'MySQL',
        'JavaFX',
        'Kotlin',
        'HTML',
        'CSS',
        'JavaScript',
        'Gson',
        'Stored Procedures',
      ],
    },
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
    repositoryUrl:
      'https://github.com/eduard165/ArchivoInterno-SDI',
    en: {
      category: 'Web application · Document management',
      summary:
        'Registration, organization, and retrieval of audit documents with institutional access and SharePoint integration.',
      description:
        'A web application developed in 2024 for the Secretaría de Desarrollo Institucional at Universidad Veracruzana. It supports registering audit documents, uploading files to SharePoint, organizing them by folder, audit, year, and month, and viewing and updating information. Authentication uses institutional Microsoft accounts through MSAL.',
      contribution:
        'End-to-end development of the application, institutional authentication, and Microsoft Graph API integration to manage files and records in SharePoint.',
    },
  },
  {
    id: 'api-fastapi-MongoDB-practice',
    title: 'FastAPI · MongoDB',
    category: 'Backend · API REST',
    summary:
      'API para gestionar películas con autenticación JWT y almacenamiento en MongoDB.',
    description:
      'API REST desarrollada con FastAPI y MongoDB para registrar, consultar, actualizar y eliminar películas. Integra autenticación mediante JWT, validación de datos y bitácoras. Incluye soporte para pruebas unitarias con pytest y ejecución en contenedores Docker.',
    contribution:
      'Diseño e implementación de la API y de sus funciones de gestión de películas.',
    technologies: [
      'Python',
      'FastAPI',
      'MongoDB',
      'JWT',
      'Docker',
      'pytest',
    ],
    kind: 'software',
    visual: 'documentos',
    repositoryUrl:
      'https://github.com/eduard165/movies-api-fastapi',
    en: {
      category: 'Backend · REST API',
      summary:
        'A movie management API with JWT authentication and MongoDB storage.',
      description:
        'A REST API built with FastAPI and MongoDB to create, retrieve, update, and delete movies. It includes JWT authentication, data validation, and logging, with support for unit testing using pytest and deployment in Docker containers.',
      contribution:
        'Design and implementation of the API and its movie management features.',
    },
  },
  {
    id: 'fastapi-postgres-practice',
    title: 'FastAPI · PostgreSQL',
    category: 'Backend · Proyecto de práctica',
    summary:
      'API de práctica para gestionar usuarios con FastAPI, PostgreSQL y SQLAlchemy.',
    description:
      'Laboratorio personal de desarrollo backend con Python. Organiza una API de usuarios en rutas, servicios, modelos y esquemas, con operaciones CRUD, conexión a PostgreSQL mediante SQLAlchemy y validación de datos con Pydantic.',
    contribution:
      'Implementación de endpoints, modelos de datos, esquemas de validación y lógica de gestión de usuarios.',
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
    repositoryUrl:
      'https://github.com/eduard165/fastapi-postgres-practice',
    en: {
      category: 'Backend · Practice project',
      summary:
        'A practice API for user management with FastAPI, PostgreSQL, and SQLAlchemy.',
      description:
        'A personal Python backend development lab. The user API is organized into routes, services, models, and schemas, with CRUD operations, PostgreSQL connectivity through SQLAlchemy, and data validation using Pydantic.',
      contribution:
        'Implementation of endpoints, data models, validation schemas, and user management logic.',
    },
  },
  {
    id: 'notes-app',
    title: 'Note Taking App',
    category: 'Aplicación web · Organización de notas',
    summary:
      'Aplicación para crear, editar y organizar notas por categorías, con almacenamiento local.',
    description:
      'Aplicación desarrollada con React para crear, editar y eliminar notas con título, contenido y categorías opcionales. Permite archivar y recuperar notas, filtrarlas por categoría y confirmar su eliminación. Los datos se guardan en localStorage y permanecen disponibles en el mismo navegador después de recargar la página.',
    contribution:
      'Desarrollo de la interfaz, los componentes de gestión de notas y la persistencia local.',
    technologies: [
      'React',
      'JavaScript',
      'React Bootstrap',
      'Bootstrap',
      'React Router',
      'localStorage',
    ],
    kind: 'software',
    visual: 'documentos',
    repositoryUrl: 'https://github.com/eduard165/notes-app',
    siteUrl: 'https://notes-app-red-sigma.vercel.app/login',
    en: {
      category: 'Web application · Note organization',
      summary:
        'An application for creating, editing, and organizing notes by category, with local storage.',
      description:
        'A React application for creating, editing, and deleting notes with a title, content, and optional categories. Users can archive and restore notes, filter them by category, and confirm deletion. Data is saved in localStorage and remains available in the same browser after refreshing the page.',
      contribution:
        'Development of the interface, note management components, and local persistence.',
    },
  },
]

export const websiteProjects = projects.filter(
  (project) => project.kind === 'website',
)

export const softwareProjects = projects.filter(
  (project) => project.kind === 'software',
)

/* Devuelve los datos del proyecto en el idioma seleccionado. */
export function getLocalizedProject(
  project: Project,
  language: 'es' | 'en',
): Project {
  if (language === 'es' || !project.en) {
    return project
  }

  const translation = project.en

  return {
    ...project,
    title: translation.title ?? project.title,
    category: translation.category,
    summary: translation.summary,
    description: translation.description,
    contribution: translation.contribution,
    technologies: translation.technologies ?? project.technologies,
    images: project.images?.map((image, index) => ({
      ...image,
      alt: translation.imageAlts?.[index] ?? image.alt,
    })),
  }
}