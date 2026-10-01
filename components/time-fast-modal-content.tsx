import {
  ArrowUpRight,
  Server,
  Monitor,
  Smartphone,
  Globe,
} from 'lucide-react'
import type { Project } from '@/lib/projects'

type Props = {
  project: Project
  onNext: () => void
}

const components = [
  {
    title: 'API REST',
    icon: Server,
    description:
      'Servicios para gestionar colaboradores, clientes, unidades, envíos y paquetes. Asignación de conductores y actualización de estados.',
    technologies: 'Java · MyBatis · MySQL · Gson',
    repository: 'https://github.com/eduard165/time-fast',
  },
  {
    title: 'Aplicación de escritorio',
    icon: Monitor,
    description:
      'Administración interna, registro de envíos, asignación de conductores y consulta de clientes, vehículos y paquetes.',
    technologies: 'Java · JavaFX',
    repository: 'https://github.com/eduard165/fast-time-escritorio',
  },
  {
    title: 'Aplicación móvil',
    icon: Smartphone,
    description:
      'Consulta de envíos asignados, detalles de entrega, actualización de estados y registro de observaciones para conductores.',
    technologies: 'Kotlin · Android',
    repository: 'https://github.com/eduard165/ClienteMovil',
  },
  {
    title: 'Tracker web',
    icon: Globe,
    description:
      'Consulta por número de guía, estado del envío, paquetes asociados e historial de cambios mediante una interfaz responsiva.',
    technologies: 'HTML · CSS · JavaScript',
    repository: 'https://github.com/eduard165/web-time-fast',
  },
]

export function TimeFastModalContent({ project, onNext }: Props) {
  return (
    <div className="tf-modal">
      <header className="tf-modal-heading">
        <p className="eyebrow">Proyecto académico · 2024–2025</p>

        <h2 id="project-modal-title">{project.title}</h2>

        <p className="tf-modal-subtitle">
          Sistema de gestión y seguimiento de paquetería
        </p>

        <span className="tf-modal-divider" aria-hidden="true" />

        <p className="tf-modal-intro">
          Aplicaciones de escritorio, móvil y web conectadas mediante una API
          REST para administrar envíos y consultar su seguimiento.
        </p>
      </header>

      <div className="tf-modal-layout">
        <section className="tf-modal-gallery" aria-labelledby="tf-gallery-title">
          <h3 id="tf-gallery-title" className="tf-gallery-label">
            Mockups del proyecto
          </h3>

          <div className="tf-preview-grid">
            <figure className="tf-preview-desktop">
              <div className="tf-desktop-frame">
                <img
                  src="/projects/time-fast/escritorio.png"
                  alt="Mockup del inicio de sesión de Time-Fast Desktop"
                />
              </div>
              <figcaption>Aplicación de escritorio</figcaption>
            </figure>

            <figure className="tf-preview-mobile">
              <div className="tf-phone-frame">
                <img
                  src="/projects/time-fast/movil.png"
                  alt="Mockup del inicio de sesión de Time-Fast Mobile"
                />
              </div>
              <figcaption>Aplicación móvil</figcaption>
            </figure>

            <figure className="tf-preview-web">
              <div className="tf-web-frame">
                <img
                  src="/projects/time-fast/tracker.png"
                  alt="Mockup del tracker web para consultar envíos"
                />
              </div>
              <figcaption>Portal de seguimiento</figcaption>
            </figure>
          </div>
        </section>

        <section
          className="tf-components"
          aria-label="Componentes y repositorios de Time-Fast"
        >
          {components.map((component) => {
            const Icon = component.icon

            return (
              <article className="tf-component" key={component.title}>
                <Icon className="tf-component-icon" aria-hidden="true" />

                <h3>{component.title}</h3>

                <p className="tf-component-description">
                  {component.description}
                </p>

                <div className="tf-component-technologies">
                  <span>Tecnologías</span>
                  <p>{component.technologies}</p>
                </div>

                <a
                  className="tf-repository-link"
                  href={component.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver repositorio de ${component.title}`}
                >
                  Ver repositorio
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </article>
            )
          })}
        </section>
      </div>

      <footer className="tf-modal-footer">
        <p>
          Proyecto integrador · Tecnologías Computacionales · Universidad
          Veracruzana
        </p>

        <button
          className="tf-next-project"
          type="button"
          onClick={onNext}
        >
          Siguiente proyecto
          <ArrowUpRight aria-hidden="true" />
        </button>
      </footer>
    </div>
  )
}