import { ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-orbits" aria-hidden="true" />
      <span className="hero-monogram" aria-hidden="true">ER</span>

      <div className="hero-copy">
        <p className="eyebrow">Desarrollador web / Xalapa, Veracruz</p>
        <h1 id="hero-title">Hola, soy<br />Eduardo Rodríguez.</h1>
        <p className="hero-statement">Creo sitios web que muestran<br className="hero-desktop-break" /> la identidad de cada proyecto.</p>
        <p className="hero-description">Formación en Tecnologías Computacionales. Experiencia en aplicaciones web, APIs y proyectos para negocios.</p>
        <div className="actions">
          <a className="button button-primary" href="#proyectos">Explorar proyectos <ArrowUpRight aria-hidden="true" /></a>
          <a className="text-link" href="#sobre-mi">Conóceme <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>

      <div className="hero-signature" aria-label="Diseño con intención, desarrollo funcional, proyectos reales">
        <span>Diseño con intención</span>
        <span>Desarrollo funcional</span>
        <span>Proyectos reales</span>
      </div>
    </section>
  )
}
