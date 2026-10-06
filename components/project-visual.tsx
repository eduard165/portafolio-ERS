'use client'

import {
  getLocalizedProject,
  type Project,
} from '@/lib/projects'
import { useLanguage } from './language-provider'

const visualTexts = {
  es: {
    label: 'Vista conceptual de',
    website: 'SITIO WEB',
    software: 'APLICACIÓN / API',
    websiteDescription: 'Una historia para explorar',
    softwareDescription: 'Soluciones que funcionan',
    caption: 'Vista conceptual · capturas reales próximamente',
  },
  en: {
    label: 'Conceptual preview of',
    website: 'WEBSITE',
    software: 'APPLICATION / API',
    websiteDescription: 'A story to explore',
    softwareDescription: 'Solutions that work',
    caption: 'Conceptual preview · actual screenshots coming soon',
  },
}

export function ProjectVisual({ project }: { project: Project }) {
  const { language } = useLanguage()
  const text = visualTexts[language]
  const localizedProject = getLocalizedProject(project, language)
  const firstImage = localizedProject.images?.[0]

  if (firstImage) {
    return (
      <img
        className="project-visual-image"
        src={firstImage.src}
        alt={firstImage.alt}
      />
    )
  }

  return (
    <div
      className={`project-visual project-visual--${project.visual}`}
      aria-label={`${text.label} ${localizedProject.title}`}
      role="img"
    >
      <div className="visual-topline">
        <span>
          {project.kind === 'website'
            ? text.website
            : text.software}
        </span>
        <span aria-hidden="true">↗</span>
      </div>

      <div className="visual-body">
        <span className="visual-mark" aria-hidden="true">
          {project.kind === 'software' ? '{ }' : '✳'}
        </span>

        <strong>{localizedProject.title}</strong>

        <small>
          {project.kind === 'website'
            ? text.websiteDescription
            : text.softwareDescription}
        </small>
      </div>

      <span className="visual-caption">{text.caption}</span>
    </div>
  )
}