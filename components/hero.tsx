import { ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-orbits" aria-hidden="true" />
      <span className="hero-monogram" aria-hidden="true">ER</span>

      <div className="hero-copy">
        <p className="eyebrow">Desarrollador Full Stack</p>

        <h1 id="hero-title">Eduardo Rodríguez.</h1>

        <p className="hero-statement">
          Ideas y necesidades reales,
          <br className="hero-desktop-break" /> convertidas en soluciones digitales.
        </p>

        <p className="hero-description">
          Formación en Tecnologías Computacionales. Desarrollo de aplicaciones,
          sitios web y APIs con atención a su funcionamiento y a la experiencia
          de quienes los usan.
        </p>

        <div className="actions">
          <a className="button button-primary" href="#proyectos">
            Explorar proyectos <ArrowUpRight aria-hidden="true" />
          </a>
          <a className="text-link" href="#sobre-mi">
            Conóceme <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <div
        className="hero-signature"
        aria-label="Soluciones con propósito, desarrollo funcional, proyectos reales"
      >
        <span>Soluciones con propósito</span>
        <span>Desarrollo funcional</span>
        <span>Proyectos reales</span>
      </div>
    </section>
  )
}