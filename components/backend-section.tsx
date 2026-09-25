import { ArrowUpRight } from 'lucide-react'
import { softwareProjects, type Project } from '@/lib/projects'
import { ProjectVisual } from './project-visual'

export function BackendSection({ onOpen }: { onOpen: (project: Project, trigger: HTMLElement) => void }) {
  return (
    <section id="aplicaciones" className="section backend-section" aria-labelledby="backend-title">
      <div className="section-heading"><div><p className="eyebrow">Aplicaciones y backend</p><h2 id="backend-title">También construyo sistemas.</h2></div><p>APIs y aplicaciones que resuelven necesidades concretas.</p></div>
      <div className="software-list">
        {softwareProjects.map((project) => (
          <article className="software-row" key={project.id}>
            <div className="software-info"><p className="eyebrow">{project.category}</p><h3>{project.title}</h3><p>{project.summary}</p><div className="compact-tags">{project.technologies.slice(0, 3).map((technology) => <span key={technology}>{technology}</span>)}</div><button type="button" className="text-link" onClick={(event) => onOpen(project, event.currentTarget)}>Explorar proyecto <ArrowUpRight aria-hidden="true" /></button></div>
            <button className="software-visual-button" type="button" onClick={(event) => onOpen(project, event.currentTarget)} aria-label={`Ver detalles de ${project.title}`}><ProjectVisual project={project} /></button>
          </article>
        ))}
      </div>
    </section>
  )
}
