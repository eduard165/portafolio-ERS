# Portafolio de Eduardo Rodríguez

Primera versión reconstruida a partir del ZIP generado por v0. Es una landing page en Next.js con una ventana de proyecto reutilizable.

## Iniciar

```bash
pnpm install
pnpm dev
```

Abre http://localhost:3000. Para verificar producción: `pnpm build`.

## Estructura

- `app/page.tsx`: entrada de la página.
- `app/globals.css`: estilos y puntos de adaptación móvil.
- `components/portfolio.tsx`: composición y estado del proyecto abierto.
- `components/header.tsx`, `hero.tsx`, `about-section.tsx`, `contact-section.tsx`: secciones de la página.
- `components/projects-section.tsx`, `project-card.tsx`, `backend-section.tsx`: listas y tarjetas.
- `components/project-modal.tsx`: una sola ventana para todos los proyectos.
- `components/project-visual.tsx`: vistas conceptuales temporales y futuras capturas.
- `lib/projects.ts`: contenido de cada proyecto.
- `public/cv-eduardo-rodriguez.pdf`: CV descargable.

## Añadir un proyecto

Agrega un objeto a `projects` en `lib/projects.ts`. Usa `kind: 'website'` para mostrarlo en los sitios destacados o `kind: 'software'` para mostrarlo en aplicaciones y backend. El mismo objeto alimenta la tarjeta y la ventana. El campo `visual` elige la vista conceptual mientras no haya fotografías. Para agregar capturas, guarda los archivos en `public/projects/nombre/` y establece `images: [{ src: '/projects/nombre/portada.webp', alt: 'Descripción de la captura' }]`. Si hay más imágenes, se muestran dentro de la ventana. Añade `siteUrl` o `repositoryUrl` solo si el enlace es real.

## Pendientes de contenido

Las vistas conceptuales indican que no son capturas de proyectos publicados. Revisar textos, participación exacta, tecnologías, estados y capturas reales antes de publicar. El correo de contacto y el CV provienen del CV proporcionado; confirma si deseas mostrarlos públicamente. El sitio no incluye un backend propio ni un formulario.
