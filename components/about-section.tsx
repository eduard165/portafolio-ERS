import { ArrowUpRight, Code2, Database, Boxes } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="sobre-mi" className="section about-section" aria-labelledby="about-title">
      <div><p className="eyebrow">Sobre mí</p><h2 id="about-title">Código claro. Ideas que toman forma.</h2></div>
      <div className="about-copy">
        <p>Soy Eduardo, desarrollador en Xalapa. Creo sitios web, aplicaciones y APIs para convertir necesidades reales en soluciones útiles.</p>
        <a className="text-link" href="/cv-eduardo-rodriguez.pdf" download>Descargar CV <ArrowUpRight aria-hidden="true" /></a>
      </div>
      <div className="skills-grid" aria-label="Tecnologías">
        <div><Code2 aria-hidden="true" /><h3>Frontend</h3><p>React · JavaScript · TypeScript</p></div>
        <div><Database aria-hidden="true" /><h3>Backend</h3><p>Java · Spring Boot · FastAPI</p></div>
        <div><Boxes aria-hidden="true" /><h3>Herramientas</h3><p>Git · Docker · Bases de datos</p></div>
      </div>
    </section>
  )
}
