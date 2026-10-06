'use client'

import type { Project } from '@/lib/projects'
import { websiteProjects } from '@/lib/projects'
import { ProjectCard } from './project-card'
import { useLanguage } from './language-provider'

const projectsTexts = {
  es: {
    eyebrow: 'Proyectos destacados',
    title: 'Proyectos que generan valor en el mundo real',
    description:
      'Trabajo con marcas, emprendimientos y negocios para crear sitios y sistemas que comunican, funcionan y ayudan a crecer.',
  },
  en: {
    eyebrow: 'Featured projects',
    title: 'Projects that deliver real-world value',
    description:
      'I work with brands, entrepreneurs, and businesses to build websites and systems that communicate clearly, work effectively, and support growth.',
  },
}

type Props = {
  onOpen: (project: Project, trigger: HTMLElement) => void
}

export function ProjectsSection({ onOpen }: Props) {
  const { language } = useLanguage()
  const text = projectsTexts[language]

  return (
    <section
      id="proyectos"
      className="section projects-section"
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">{text.eyebrow}</p>
          <h2 id="projects-title">{text.title}</h2>
        </div>

        <p>{text.description}</p>
      </div>

      <div className="projects-list">
        {websiteProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onOpen={onOpen}
          />
        ))}
      </div>
    </section>
  )
}