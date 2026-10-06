'use client'

import { ArrowUpRight } from 'lucide-react'
import {
  getLocalizedProject,
  type Project,
} from '@/lib/projects'
import { ProjectGallery } from './project-gallery'
import { useLanguage } from './language-provider'

const cardTexts = {
  es: {
    view: 'Ver proyecto',
    repository: 'Repositorio',
    site: 'Visitar sitio',
    status: 'En desarrollo',
  },
  en: {
    view: 'View project',
    repository: 'Repository',
    site: 'Visit website',
    status: 'In development',
  },
}

type Props = {
  project: Project
  index: number
  onOpen: (project: Project, trigger: HTMLElement) => void
}

export function ProjectCard({ project, index, onOpen }: Props) {
  const { language } = useLanguage()
  const text = cardTexts[language]
  const localizedProject = getLocalizedProject(project, language)

  return (
    <article className="project-row">
      <div className="project-image-frame">
        <ProjectGallery
          project={localizedProject}
          onOpen={(trigger) => onOpen(project, trigger)}
        />

        <span className="image-index">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="project-info">
        <p className="eyebrow">{localizedProject.category}</p>
        <h3>{localizedProject.title}</h3>
        <p>{localizedProject.summary}</p>

        {project.status && (
          <span className="status">{text.status}</span>
        )}

        <button
          type="button"
          className="text-link project-link"
          onClick={(event) => onOpen(project, event.currentTarget)}
        >
          {text.view}
          <ArrowUpRight aria-hidden="true" />
        </button>

        <div className="project-external-links">
          {project.repositoryUrl && (
            <a
              className="text-link"
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {text.repository}
              <ArrowUpRight aria-hidden="true" />
            </a>
          )}

          {project.siteUrl && (
            <a
              className="text-link"
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {text.site}
              <ArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}