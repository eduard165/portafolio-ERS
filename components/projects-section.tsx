import type { Project } from '@/lib/projects'
import { websiteProjects } from '@/lib/projects'
import { ProjectCard } from './project-card'

export function ProjectsSection({ onOpen }: { onOpen: (project: Project, trigger: HTMLElement) => void }) {
  return (
    <section id="proyectos" className="section projects-section" aria-labelledby="projects-title">
      <div className="section-heading"><div><p className="eyebrow">Proyectos destacados</p><h2 id="projects-title">Proyectos que generan valor en el mundo real.</h2></div><p>Trabajo con marcas, emprendimientos y negocios para crear sitios y sistemas que comunican, funcionan y ayudan a crecer.</p></div>
      <div className="projects-list">{websiteProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpen={onOpen} />)}</div>
    </section>
  )
}
