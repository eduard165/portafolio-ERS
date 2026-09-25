'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Project } from '@/lib/projects'
import { ProjectVisual } from './project-visual'

type Props = {
  project: Project
  onOpen?: (trigger: HTMLButtonElement) => void
}

export function ProjectGallery({ project, onOpen }: Props) {
  const [index, setIndex] = useState(0)
  const images = project.images ?? []
  const hasGallery = images.length > 1

  useEffect(() => { setIndex(0) }, [project.id])

  const visual = images.length
    ? <img className="project-visual-image" src={images[index].src} alt={images[index].alt} />
    : <ProjectVisual project={project} />

  return (
    <div className="gallery-shell">
      {onOpen ? (
        <button className="gallery-main gallery-main-button" type="button" onClick={(event) => onOpen(event.currentTarget)} aria-label={`Abrir detalles de ${project.title}`}>
          {visual}
        </button>
      ) : <div className="gallery-main">{visual}</div>}
      {hasGallery && (
        <><span className="gallery-caption">{images[index].alt}</span><div className="gallery-controls" aria-label={`Galería de ${project.title}`}>
          <button type="button" onClick={() => setIndex((current) => (current - 1 + images.length) % images.length)} aria-label={`Imagen anterior de ${project.title}`}><ChevronLeft aria-hidden="true" /></button>
          <span aria-live="polite">{String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>
          <button type="button" onClick={() => setIndex((current) => (current + 1) % images.length)} aria-label={`Imagen siguiente de ${project.title}`}><ChevronRight aria-hidden="true" /></button>
        </div></>
      )}
    </div>
  )
}
