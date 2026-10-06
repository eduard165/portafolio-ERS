'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Project } from '@/lib/projects'
import { ProjectVisual } from './project-visual'
import { useLanguage } from './language-provider'

const galleryTexts = {
  es: {
    open: 'Abrir detalles de',
    gallery: 'Galería de',
    previous: 'Imagen anterior de',
    next: 'Imagen siguiente de',
  },
  en: {
    open: 'Open details for',
    gallery: 'Gallery for',
    previous: 'Previous image for',
    next: 'Next image for',
  },
}

type Props = {
  project: Project
  onOpen?: (trigger: HTMLButtonElement) => void
}

export function ProjectGallery({ project, onOpen }: Props) {
  const { language } = useLanguage()
  const text = galleryTexts[language]

  const [index, setIndex] = useState(0)
  const images = project.images ?? []
  const hasGallery = images.length > 1

  const activeIndex = index < images.length ? index : 0
  const currentImage = images[activeIndex]

  useEffect(() => {
    setIndex(0)
  }, [project.id])

  const visual = currentImage ? (
    <img
      className="project-visual-image"
      src={currentImage.src}
      alt={currentImage.alt}
    />
  ) : (
    <ProjectVisual project={project} />
  )

  return (
    <div className="gallery-shell">
      {onOpen ? (
        <button
          className="gallery-main gallery-main-button"
          type="button"
          onClick={(event) => onOpen(event.currentTarget)}
          aria-label={`${text.open} ${project.title}`}
        >
          {visual}
        </button>
      ) : (
        <div className="gallery-main">{visual}</div>
      )}

      {hasGallery && currentImage && (
        <>
          <span className="gallery-caption">
            {currentImage.alt}
          </span>

          <div
            className="gallery-controls"
            role="group"
            aria-label={`${text.gallery} ${project.title}`}
          >
            <button
              type="button"
              onClick={() =>
                setIndex(
                  (activeIndex - 1 + images.length) % images.length,
                )
              }
              aria-label={`${text.previous} ${project.title}`}
            >
              <ChevronLeft aria-hidden="true" />
            </button>

            <span aria-live="polite" aria-atomic="true">
              {String(activeIndex + 1).padStart(2, '0')}
              {' / '}
              {String(images.length).padStart(2, '0')}
            </span>

            <button
              type="button"
              onClick={() =>
                setIndex((activeIndex + 1) % images.length)
              }
              aria-label={`${text.next} ${project.title}`}
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </>
      )}
    </div>
  )
}