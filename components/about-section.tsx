import {
  ArrowUpRight,
  Code2,
  Server,
  Database,
  Smartphone,
  Monitor,
  Wrench,
} from 'lucide-react'

export function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="section about-section"
      aria-labelledby="about-title"
    >
      <div>
        <p className="eyebrow">Sobre mí</p>
        <h2 id="about-title">
          Curiosidad para aprender Criterio para resolver
        </h2>
      </div>

      <div className="about-copy">
        <p>
          Soy Eduardo Rodríguez. Me interesa entender cómo funcionan las cosas,
          encontrar soluciones y seguir aprendiendo. Mi camino en la tecnología
          comenzó con el soporte técnico y se ha ampliado hacia el desarrollo
          de software, donde encuentro una forma de combinar lógica,
          creatividad y atención al detalle.
        </p>

        <div
          className="about-education"
          aria-labelledby="about-education-title"
        >
          <h3 id="about-education-title">Formación</h3>

          <ul className="about-education-list">
            <li>
              <h4>Licenciatura en Tecnologías Computacionales</h4>
              <p>Universidad Veracruzana</p>
            </li>

            <li>
              <h4>
                Técnico en Soporte y Mantenimiento de Equipo de Cómputo
              </h4>
              <p>C.B.T.I.S No.35</p>
            </li>
          </ul>
        </div>

        <a
          className="text-link"
          href="/cv-eduardo-rodriguez.pdf"
          download
        >
          Descargar CV <ArrowUpRight aria-hidden="true" />
        </a>
      </div>

      <div className="skills-grid" aria-label="Tecnologías y herramientas">
        <div>
          <Code2 aria-hidden="true" />
          <h3>Frontend</h3>
          <p>
            HTML · CSS · JavaScript · TypeScript · React · Next.js · Tailwind CSS
          </p>
        </div>

        <div>
          <Server aria-hidden="true" />
          <h3>Backend</h3>
          <p>Java · Python · Spring Boot · FastAPI · MyBatis · APIs REST</p>
        </div>

        <div>
          <Database aria-hidden="true" />
          <h3>Bases de datos</h3>
          <p>MySQL · PostgreSQL · SQL Server · MongoDB</p>
        </div>

        <div>
          <Smartphone aria-hidden="true" />
          <h3>Móvil</h3>
          <p>Kotlin · Android</p>
        </div>

        <div>
          <Monitor aria-hidden="true" />
          <h3>Escritorio</h3>
          <p>Java · JavaFX</p>
        </div>

        <div>
          <Wrench aria-hidden="true" />
          <h3>Herramientas</h3>
          <p>Git · GitHub · Docker · Azure · Vercel</p>
        </div>
      </div>
    </section>
  )
  
}