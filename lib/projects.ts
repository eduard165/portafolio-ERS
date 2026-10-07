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
  featured?: boolean
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
    id: 'bolita-food',
    siteUrl: 'https://administrador-bolita-food.vercel.app/',
    title: 'Bolita Food',
    category: 'Aplicación web · Proyecto para cliente',
    summary:
      'Administrador de pedidos diseñado para la operación diaria de un negocio familiar de comida.',
    description:
      'Aplicación en desarrollo para Bolita Food, un negocio familiar de comida en Tlacotalpan, Veracruz. Permite registrar pedidos manualmente, seleccionar productos, distribuir piezas por sabor, agregar extras y calcular el total. Contempla entrega a domicilio o recolección, cálculo de cambio, revisión de disponibilidad y tiempo estimado de preparación. La etapa actual funciona como un prototipo de frontend con almacenamiento local en el navegador; el backend, la autenticación, la sincronización entre dispositivos y la integración con WhatsApp están pendientes.',
    contribution:
      'Reorganización de la base inicial generada con v0, adaptación visual a la marca e implementación del registro de pedidos, las validaciones de piezas y sabores, el cálculo de importes y la persistencia local.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Base UI',
      'Lucide',
      'localStorage',
    ],
    kind: 'software',
    visual: 'documentos',
    featured: true,
    status: 'En desarrollo',
    images: [
      {
        src: '/projects/bolita_food/01-bolita-food-pedidos.png',
        alt: 'Pantalla de gestion de pedidos',
      },
      {
        src: '/projects/bolita_food/02-bolita-food-menu.png',
        alt: 'Pantalla de gestion del menu y productos',
      },
      {
        src: '/projects/bolita_food/03-bolita-food-negocio.png',
        alt: 'Pantalla de gestion del negocio',
      },
      {
        src: '/projects/bolita_food/04-bolita-food-conversaciones.png', 
        alt: 'Pantalla de gestion de conversaciones', 
      },
    ],
    repositoryUrl: 'https://github.com/eduard165/administrador-bolita-food',
    en: {
      category: 'Web application · Client project',
      summary:
        'An order management application designed for the daily operations of a family food business.',
      description:
        'An application under development for Bolita Food, a family food business in Tlacotalpan, Veracruz. It supports manual order entry, product selection, allocating pieces by flavor, adding extras, and calculating totals. It includes delivery or pickup details, cash change calculations, availability checks, and estimated preparation times. The current stage is a frontend prototype with browser-based local storage. Backend services, authentication, cross-device synchronization, and WhatsApp integration are planned for future stages.',
      contribution:
        'Reorganization of the initial v0-generated codebase, adaptation to the brand’s visual identity, and implementation of order entry, piece and flavor validation, total calculations, and local persistence.',
    },
  },
  {
    id: 'ganaderia-don-pedro',
    siteUrl: 'https://ganaderia-don-pedro.vercel.app/',
    title: 'Ganadería Don Pedro',
    category: 'Sitio web · Proyecto para cliente',
    summary:
      'Sitio web con páginas independientes, catálogo interactivo de ejemplares y formulario de contacto para una ganadería con historia desde 1940.',
    description:
      'Sitio web en desarrollo para Ganadería Don Pedro, en Tlacotalpan, Veracruz. Organiza la presentación de la ganadería en páginas de inicio, historia, genética y ejemplares. Incluye un catálogo con filtros y detalles en ventanas modales, presentación de las razas Gyr y Sardo Negro, preguntas frecuentes, acceso a WhatsApp y un formulario con asuntos predefinidos y validación en cliente y servidor. Las consultas se envían mediante SMTP con Nodemailer; la configuración y la entrega a un buzón real en producción están pendientes. El catálogo utiliza registros de ejemplo e imágenes ilustrativas generadas, que deberán sustituirse por material validado con la ganadería. Actualmente se administra desde el código.',
    contribution:
      'Desarrollo de la estructura multipágina, componentes compartidos, catálogo interactivo, API de consulta, formulario validado e integración de correo mediante SMTP, con adaptación para escritorio y móvil.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'CSS',
      'Nodemailer',
      'SMTP',
    ],
    kind: 'website',
    visual: 'ganaderia',
    featured: true,
    status: 'En desarrollo',
    images: [
      {
        src: '/projects/ganaderia_don_pedro/01-don-pedro-inicio (3).png',
        alt: 'Pantalla de inicio del sitio Ganadería Don Pedro',
      },
      {
        src: '/projects/ganaderia_don_pedro/02-don-pedro-historia (2).png',
        alt: 'Pantalla de historia de la ganadería',
      },
      {
        src: '/projects/ganaderia_don_pedro/03-don-pedro-genetica (2).png',
        alt: 'Pantalla de genética de la ganadería',
      },
      {
        src: '/projects/ganaderia_don_pedro/04-don-pedro-catalogo-detalle (2).png',
        alt: 'Pantalla de catálogo con ventana modal de detalle de ejemplar', 
      },
       {
        src: '/projects/ganaderia_don_pedro/05-don-pedro-contacto (2).png',
        alt: 'Pantalla de contacto con formulario y WhatsApp', 
      },
    ],
    repositoryUrl: 'https://github.com/eduard165/ganaderia-don-pedro',
    en: {
      category: 'Website · Client project',
      summary:
        'A multipage website with an interactive cattle catalog and contact form for a ranch with a history dating back to 1940.',
      description:
        'A website under development for Ganadería Don Pedro in Tlacotalpan, Veracruz. It presents the ranch through dedicated home, history, genetics, and cattle catalog pages. Features include catalog filters, modal detail views, information about Gyr and Sardo Negro breeds, FAQs, WhatsApp access, and a contact form with predefined subjects and client-side and server-side validation. Inquiries are sent through SMTP using Nodemailer; production configuration and delivery to a real mailbox are pending. The catalog currently uses sample records and generated illustrative images that must be replaced with material approved by the ranch. Catalog data is currently maintained in the codebase.',
      contribution:
        'Development of the multipage structure, shared components, interactive catalog, catalog API, validated contact form, and SMTP email integration, with layouts adapted for desktop and mobile.',
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
  (project) => project.kind === 'website' || project.featured === true,
)
export const softwareProjects = projects.filter(
  (project) => project.kind === 'software' && !project.featured,
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
