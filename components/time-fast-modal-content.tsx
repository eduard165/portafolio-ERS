'use client'

import {
  ArrowUpRight,
  Server,
  Monitor,
  Smartphone,
  Globe,
} from 'lucide-react'
import type { Project } from '@/lib/projects'
import { useLanguage } from './language-provider'

type Props = {
  project: Project
  onNext: () => void
}

const components = [
  {
    id: 'api',
    icon: Server,
    technologies: 'Java · MyBatis · MySQL · Gson',
    repository: 'https://github.com/eduard165/time-fast',
    es: {
      title: 'API REST',
      description:
        'Servicios para gestionar colaboradores, clientes, unidades, envíos y paquetes. Asignación de conductores y actualización de estados.',
    },
    en: {
      title: 'REST API',
      description:
        'Services for managing staff, customers, vehicles, shipments, and packages, including driver assignment and shipment status updates.',
    },
  },
  {
    id: 'desktop',
    icon: Monitor,
    technologies: 'Java · JavaFX',
    repository: 'https://github.com/eduard165/fast-time-escritorio',
    es: {
      title: 'Aplicación de escritorio',
      description:
        'Administración interna, registro de envíos, asignación de conductores y consulta de clientes, vehículos y paquetes.',
    },
    en: {
      title: 'Desktop application',
      description:
        'Internal administration, shipment registration, driver assignment, and access to customer, vehicle, and package information.',
    },
  },
  {
    id: 'mobile',
    icon: Smartphone,
    technologies: 'Kotlin · Android',
    repository: 'https://github.com/eduard165/ClienteMovil',
    es: {
      title: 'Aplicación móvil',
      description:
        'Consulta de envíos asignados, detalles de entrega, actualización de estados y registro de observaciones para conductores.',
    },
    en: {
      title: 'Mobile application',
      description:
        'An application for drivers to view assigned shipments and delivery details, update shipment statuses, and record observations.',
    },
  },
  {
    id: 'web',
    icon: Globe,
    technologies: 'HTML · CSS · JavaScript',
    repository: 'https://github.com/eduard165/web-time-fast',
    es: {
      title: 'Tracker web',
      description:
        'Consulta por número de guía, estado del envío, paquetes asociados e historial de cambios mediante una interfaz responsiva.',
    },
    en: {
      title: 'Web tracker',
      description:
        'A responsive interface for searching by tracking number and viewing shipment status, associated packages, and status history.',
    },
  },
]

const timeFastTexts = {
  es: {
    eyebrow: 'Proyecto académico · 2024–2025',
    subtitle: 'Sistema de gestión y seguimiento de paquetería',
    intro:
      'Aplicaciones de escritorio, móvil y web conectadas mediante una API REST para administrar envíos y consultar su seguimiento.',
    gallery: 'Mockups del proyecto',
    desktopAlt: 'Mockup del inicio de sesión de Time-Fast Desktop',
    mobileAlt: 'Mockup del inicio de sesión de Time-Fast Mobile',
    webAlt: 'Mockup del tracker web para consultar envíos',
    desktopCaption: 'Aplicación de escritorio',
    mobileCaption: 'Aplicación móvil',
    webCaption: 'Portal de seguimiento',
    componentsLabel: 'Componentes y repositorios de Time-Fast',
    technologies: 'Tecnologías',
    repository: 'Ver repositorio',
    repositoryLabel: 'Ver repositorio de',
    footer:
      'Proyecto integrador · Tecnologías Computacionales · Universidad Veracruzana',
    next: 'Siguiente proyecto',
  },
  en: {
    eyebrow: 'Academic project · 2024–2025',
    subtitle: 'Shipment management and tracking system',
    intro:
      'Desktop, mobile, and web applications connected through a REST API to manage and track shipments.',
    gallery: 'Project mockups',
    desktopAlt: 'Mockup of the Time-Fast Desktop login screen',
    mobileAlt: 'Mockup of the Time-Fast Mobile login screen',
    webAlt: 'Mockup of the web tracker for looking up shipments',
    desktopCaption: 'Desktop application',
    mobileCaption: 'Mobile application',
    webCaption: 'Tracking portal',
    componentsLabel: 'Time-Fast components and repositories',
    technologies: 'Technologies',
    repository: 'View repository',
    repositoryLabel: 'View repository for',
    footer:
      'Integrated academic project · Computer Technologies · Universidad Veracruzana',
    next: 'Next project',
  },
}

export function TimeFastModalContent({ project, onNext }: Props) {
  const { language } = useLanguage()
  const text = timeFastTexts[language]

  return (
    <div className="tf-modal">
      <header className="tf-modal-heading">
        <p className="eyebrow">{text.eyebrow}</p>

        <h2 id="project-modal-title">{project.title}</h2>

        <p className="tf-modal-subtitle">{text.subtitle}</p>

        <span className="tf-modal-divider" aria-hidden="true" />

        <p className="tf-modal-intro">{text.intro}</p>
      </header>

      <div className="tf-modal-layout">
        <section
          className="tf-modal-gallery"
          aria-labelledby="tf-gallery-title"
        >
          <h3 id="tf-gallery-title" className="tf-gallery-label">
            {text.gallery}
          </h3>

          <div className="tf-preview-grid">
            <figure className="tf-preview-desktop">
              <div className="tf-desktop-frame">
                <img
                  src="/projects/time-fast/escritorio.png"
                  alt={text.desktopAlt}
                />
              </div>
              <figcaption>{text.desktopCaption}</figcaption>
            </figure>

            <figure className="tf-preview-mobile">
              <div className="tf-phone-frame">
                <img
                  src="/projects/time-fast/movil.png"
                  alt={text.mobileAlt}
                />
              </div>
              <figcaption>{text.mobileCaption}</figcaption>
            </figure>

            <figure className="tf-preview-web">
              <div className="tf-web-frame">
                <img
                  src="/projects/time-fast/tracker.png"
                  alt={text.webAlt}
                />
              </div>
              <figcaption>{text.webCaption}</figcaption>
            </figure>
          </div>
        </section>

        <section
          className="tf-components"
          aria-label={text.componentsLabel}
        >
          {components.map((component) => {
            const Icon = component.icon
            const content = component[language]

            return (
              <article className="tf-component" key={component.id}>
                <Icon
                  className="tf-component-icon"
                  aria-hidden="true"
                />

                <h3>{content.title}</h3>

                <p className="tf-component-description">
                  {content.description}
                </p>

                <div className="tf-component-technologies">
                  <span>{text.technologies}</span>
                  <p>{component.technologies}</p>
                </div>

                <a
                  className="tf-repository-link"
                  href={component.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${text.repositoryLabel} ${content.title}`}
                >
                  {text.repository}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </article>
            )
          })}
        </section>
      </div>

      <footer className="tf-modal-footer">
        <p>{text.footer}</p>

        <button
          className="tf-next-project"
          type="button"
          onClick={onNext}
        >
          {text.next}
          <ArrowUpRight aria-hidden="true" />
        </button>
      </footer>
    </div>
  )
}