'use client'

import { useEffect, useRef } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import {
  getLocalizedProject,
  type Project,
} from '@/lib/projects'
import { ProjectGallery } from './project-gallery'
import { TimeFastModalContent } from './time-fast-modal-content'
import { useLanguage } from './language-provider'

const modalTexts = {
  es: {
    close: 'Cerrar detalles del proyecto',
    project: 'Proyecto',
    overview: 'El proyecto',
    contribution: 'Mi participación',
    technologies: 'Tecnologías',
    status: 'En desarrollo',
    demo: 'Acceso de demostración',
    username: 'Usuario',
    password: 'Contraseña',
    demoDescription:
      'Utiliza estas credenciales para probar la aplicación. Las notas se guardan únicamente en el navegador donde se utiliza.',
    tryApp: 'Probar aplicación',
    site: 'Ver sitio',
    code: 'Ver código',
    next: 'Siguiente proyecto',
  },
  en: {
    close: 'Close project details',
    project: 'Project',
    overview: 'Overview',
    contribution: 'My role',
    technologies: 'Technologies',
    status: 'In development',
    demo: 'Demo access',
    username: 'Username',
    password: 'Password',
    demoDescription:
      'Use these credentials to try the application. Notes are stored only in the browser where the application is used.',
    tryApp: 'Try application',
    site: 'Visit website',
    code: 'View code',
    next: 'Next project',
  },
}

type Props = {
  project: Project
  onClose: () => void
  onNext: () => void
}

export function ProjectModal({ project, onClose, onNext }: Props) {
  const { language } = useLanguage()
  const text = modalTexts[language]
  const localizedProject = getLocalizedProject(project, language)

  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const previousOverflow = document.body.style.overflow

    dialog.showModal()
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
    }
  }, [])

  useEffect(() => {
    dialogRef.current?.scrollTo({ top: 0 })
  }, [project.id])

  return (
    <dialog
      ref={dialogRef}
      className={`project-modal${
        project.id === 'time-fast' ? ' project-modal--time-fast' : ''
      }`}
      aria-labelledby="project-modal-title"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose()
      }}
    >
      <div className="project-modal-content">
        <button
          ref={closeRef}
          className="close-button"
          type="button"
          onClick={onClose}
          aria-label={text.close}
        >
          <X aria-hidden="true" />
        </button>

        {project.id === 'time-fast' ? (
          <TimeFastModalContent
            project={localizedProject}
            onNext={onNext}
          />
        ) : (
          <>
            <div className="modal-heading">
              <p className="eyebrow">
                {text.project} · {localizedProject.category}
              </p>

              <h2 id="project-modal-title">
                {localizedProject.title}
              </h2>
            </div>

            <div className="modal-grid">
              <div className="modal-gallery">
                <ProjectGallery project={localizedProject} />
              </div>

              <div className="modal-copy">
                <h3>{text.overview}</h3>
                <p>{localizedProject.description}</p>

                <h3>{text.contribution}</h3>
                <p>{localizedProject.contribution}</p>

                {localizedProject.technologies.length > 0 && (
                  <>
                    <h3>{text.technologies}</h3>

                    <div className="tech-tags">
                      {localizedProject.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </>
                )}

                {project.status && (
                  <span className="status modal-status">
                    {text.status}
                  </span>
                )}

                {project.id === 'notes-app' && (
                  <section
                    className="project-demo-access"
                    aria-labelledby="notes-demo-title"
                  >
                    <h3 id="notes-demo-title">{text.demo}</h3>

                    <dl className="project-demo-credentials">
                      <div>
                        <dt>{text.username}</dt>
                        <dd>
                          <code>admin</code>
                        </dd>
                      </div>

                      <div>
                        <dt>{text.password}</dt>
                        <dd>
                          <code>admin123</code>
                        </dd>
                      </div>
                    </dl>

                    <p>{text.demoDescription}</p>
                  </section>
                )}

                <div className="modal-actions">
                  {project.siteUrl && (
                    <a
                      className="button button-primary"
                      href={project.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.id === 'notes-app'
                        ? text.tryApp
                        : text.site}
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  )}

                  {project.repositoryUrl && (
                    <a
                      className="text-link"
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {text.code}
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  )}

                  <button
                    className="text-link next-button"
                    type="button"
                    onClick={onNext}
                  >
                    {text.next}
                    <ArrowUpRight aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </dialog>
  )
}