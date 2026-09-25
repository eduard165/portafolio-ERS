'use client'

import { useEffect, useRef } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import type { Project } from '@/lib/projects'
import { ProjectGallery } from './project-gallery'

type Props = { project: Project; onClose: () => void; onNext: () => void }

export function ProjectModal({ project, onClose, onNext }: Props) {
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

  useEffect(() => { dialogRef.current?.scrollTo({ top: 0 }) }, [project.id])

  return (
    <dialog ref={dialogRef} className="project-modal" aria-labelledby="project-modal-title" onCancel={(event) => { event.preventDefault(); onClose() }} onClick={(event) => { if (event.target === dialogRef.current) onClose() }}>
      <div className="project-modal-content">
        <button ref={closeRef} className="close-button" type="button" onClick={onClose} aria-label="Cerrar detalles del proyecto"><X aria-hidden="true" /></button>
        <div className="modal-heading"><p className="eyebrow">Proyecto · {project.category}</p><h2 id="project-modal-title">{project.title}</h2></div>
        <div className="modal-grid">
          <div className="modal-gallery"><ProjectGallery project={project} /></div>
          <div className="modal-copy">
            <h3>El proyecto</h3><p>{project.description}</p>
            <h3>Mi participación</h3><p>{project.contribution}</p>
            {project.technologies.length > 0 && <><h3>Tecnologías</h3><div className="tech-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></>}
            {project.status && <span className="status modal-status">{project.status}</span>}
            <div className="modal-actions">
              {project.siteUrl && <a className="button button-primary" href={project.siteUrl} target="_blank" rel="noopener noreferrer">Ver sitio <ArrowUpRight aria-hidden="true" /></a>}
              {project.repositoryUrl && <a className="text-link" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">Ver código <ArrowUpRight aria-hidden="true" /></a>}
              <button className="text-link next-button" type="button" onClick={onNext}>Siguiente proyecto <ArrowUpRight aria-hidden="true" /></button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  )
}
