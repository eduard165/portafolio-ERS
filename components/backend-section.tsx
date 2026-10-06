'use client'

import { ArrowUpRight } from 'lucide-react'
import {
  softwareProjects,
  getLocalizedProject,
  type Project,
} from '@/lib/projects'
import { ProjectVisual } from './project-visual'
import { TimeFastShowcase } from './time-fast-showcase'
import { useLanguage } from './language-provider'

const backendTexts = {
  es: {
    eyebrow: 'Aplicaciones y backend',
    title: 'También construyo sistemas.',
    description:
      'APIs y aplicaciones que resuelven necesidades concretas.',
    explore: 'Explorar proyecto',
    details: 'Ver detalles de',
  },
  en: {
    eyebrow: 'Applications and backend',
    title: 'I build systems too.',
    description:
      'APIs and applications that address specific needs.',
    explore: 'Explore project',
    details: 'View details for',
  },
}

type Props = {
  onOpen: (project: Project, trigger: HTMLElement) => void
}

export function BackendSection({ onOpen }: Props) {
  const { language } = useLanguage()
  const text = backendTexts[language]

  return (
    <section
      id="aplicaciones"
      className="section backend-section"
      aria-labelledby="backend-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">{text.eyebrow}</p>
          <h2 id="backend-title">{text.title}</h2>
        </div>

        <p>{text.description}</p>
      </div>

      <div className="software-list">
        {softwareProjects.map((project) => {
          const localizedProject = getLocalizedProject(
            project,
            language,
          )
          const isTimeFast = project.id === 'time-fast'

          return (
            <article
              className={`software-row${
                isTimeFast ? ' software-row--time-fast' : ''
              }`}
              key={project.id}
            >
              {isTimeFast && (
                <button
                  className="software-visual-button time-fast-visual-button"
                  type="button"
                  onClick={(event) =>
                    onOpen(project, event.currentTarget)
                  }
                  aria-label={`${text.details} ${localizedProject.title}`}
                >
                  <TimeFastShowcase />
                </button>
              )}

              <div className="software-info">
                <p className="eyebrow">
                  {localizedProject.category}
                </p>

                <h3>{localizedProject.title}</h3>
                <p>{localizedProject.summary}</p>

                <div className="compact-tags">
                  {localizedProject.technologies
                    .slice(0, isTimeFast ? 5 : 3)
                    .map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                </div>

                <button
                  type="button"
                  className="text-link"
                  onClick={(event) =>
                    onOpen(project, event.currentTarget)
                  }
                >
                  {text.explore}
                  <ArrowUpRight aria-hidden="true" />
                </button>
              </div>

              {!isTimeFast && (
                <button
                  className="software-visual-button"
                  type="button"
                  onClick={(event) =>
                    onOpen(project, event.currentTarget)
                  }
                  aria-label={`${text.details} ${localizedProject.title}`}
                >
                  <ProjectVisual project={localizedProject} />
                </button>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}