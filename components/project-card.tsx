import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/projects'
import { ProjectGallery } from './project-gallery'

type Props = { project: Project; index: number; onOpen: (project: Project, trigger: HTMLElement) => void }

export function ProjectCard({ project, index, onOpen }: Props) {
  return (
    <article className="project-row">
      <div className="project-image-frame">
        <ProjectGallery project={project} onOpen={(trigger) => onOpen(project, trigger)} />
        <span className="image-index">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="project-info">
        <p className="eyebrow">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        {project.status && <span className="status">{project.status}</span>}
        <button type="button" className="text-link project-link" onClick={(event) => onOpen(project, event.currentTarget)}>Ver proyecto <ArrowUpRight aria-hidden="true" /></button>
        <div className="project-external-links">
          {project.repositoryUrl && <a className="text-link" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">Repositorio <ArrowUpRight aria-hidden="true" /></a>}
          {project.siteUrl && <a className="text-link" href={project.siteUrl} target="_blank" rel="noopener noreferrer">Visitar sitio <ArrowUpRight aria-hidden="true" /></a>}
        </div>
      </div>
    </article>
  )
}
