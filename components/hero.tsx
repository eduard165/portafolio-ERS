'use client'

import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from './language-provider'

const heroTexts = {
  es: {
    role: 'Desarrollador full stack',
    statement: 'Soluciones digitales',
    statementEnd: 'con propósito.',
    description:
      'Formación en Tecnologías Computacionales. Experiencia en aplicaciones web, APIs y proyectos para negocios.',
    projects: 'Explorar proyectos',
    about: 'Conóceme',
    signature: [
      'Diseño con intención',
      'Desarrollo funcional',
      'Proyectos reales',
    ],
  },
  en: {
    role: 'Full Stack Developer',
    statement: 'Digital solutions',
    statementEnd: 'with purpose.',
    description:
      'A background in Computer Technologies, with experience in web applications, APIs, and projects for businesses.',
    projects: 'Explore projects',
    about: 'About me',
    signature: [
      'Intentional design',
      'Functional development',
      'Real projects',
    ],
  },
}

export function Hero() {
  const { language } = useLanguage()
  const text = heroTexts[language]

  return (
    <section
      id="inicio"
      className="hero"
      aria-labelledby="hero-title"
    >
      <div className="hero-orbits" aria-hidden="true" />
      <span className="hero-monogram" aria-hidden="true">
        ER
      </span>

      <div className="hero-copy">
        <p className="eyebrow">{text.role}</p>

        <h1 id="hero-title">
          <br />
          Eduardo Rodríguez.
        </h1>

        <p className="hero-statement">
          {text.statement}{' '}
          <br className="hero-desktop-break" />
          {text.statementEnd}
        </p>

        <p className="hero-description">
          {text.description}
        </p>

        <div className="actions">
          <a
            className="button button-primary"
            href="#proyectos"
          >
            {text.projects}
            <ArrowUpRight aria-hidden="true" />
          </a>

          <a className="text-link" href="#sobre-mi">
            {text.about}
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="hero-signature">
        {text.signature.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </section>
  )
}