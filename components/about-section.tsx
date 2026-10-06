'use client'

import {
  ArrowUpRight,
  Code2,
  Server,
  Database,
  Smartphone,
  Monitor,
  Wrench,
} from 'lucide-react'
import { useLanguage } from './language-provider'

const aboutTexts = {
  es: {
    eyebrow: 'Sobre mí',
    title: 'Curiosidad para aprender. Criterio para resolver.',
    description:
      'Soy Eduardo Rodríguez. Me interesa entender cómo funcionan las cosas, encontrar soluciones y seguir aprendiendo. Mi camino en la tecnología comenzó con el soporte técnico y se ha ampliado hacia el desarrollo de software, donde encuentro una forma de combinar lógica, creatividad y atención al detalle.',
    education: 'Formación',
    degree: 'Licenciatura en Tecnologías Computacionales',
    technicalDegree:
      'Técnico en Soporte y Mantenimiento de Equipo de Cómputo',
    courses: 'Formación complementaria',
    course: 'Iniciación al desarrollo con IA',
    courseDetails: '4 horas · 2 de octubre de 2026',
    certificate: 'Ver certificado',
    certificateLabel:
      'Ver certificado de asistencia al curso de iniciación al desarrollo con IA',
    cv: 'Descargar CV',
    cvUrl: '/cv-eduardo-rodriguez.pdf',
    skillsLabel: 'Tecnologías y herramientas',
    databases: 'Bases de datos',
    mobile: 'Móvil',
    desktop: 'Escritorio',
    tools: 'Herramientas',
    restApis: 'APIs REST',
  },
  en: {
    eyebrow: 'About me',
    title: 'Curiosity to learn. Judgment to solve problems.',
    description:
      'I’m Eduardo Rodríguez. I enjoy understanding how things work, finding solutions, and continuing to learn. My journey in technology began in technical support and has grown into software development, where I combine logic, creativity, and attention to detail.',
    education: 'Education',
    degree: 'Bachelor’s Degree in Computer Technologies',
    technicalDegree:
      'Technical Diploma in Computer Support and Maintenance',
    courses: 'Additional training',
    course: 'Introduction to AI-Assisted Development',
    courseDetails: '4 hours · October 2, 2026',
    certificate: 'View certificate',
    certificateLabel:
      'View the attendance certificate for the Introduction to AI-Assisted Development course',
    cv: 'Download résumé',
    cvUrl: '/cv-eduardo-rodriguez-en.pdf',
    skillsLabel: 'Technologies and tools',
    databases: 'Databases',
    mobile: 'Mobile',
    desktop: 'Desktop',
    tools: 'Tools',
    restApis: 'REST APIs',
  },
}

export function AboutSection() {
  const { language } = useLanguage()
  const text = aboutTexts[language]

  return (
    <section
      id="sobre-mi"
      className="section about-section"
      aria-labelledby="about-title"
    >
      <div>
        <p className="eyebrow">{text.eyebrow}</p>
        <h2 id="about-title">{text.title}</h2>
      </div>

      <div className="about-copy">
        <p>{text.description}</p>

        <div
          className="about-education"
          aria-labelledby="about-education-title"
        >
          <h3 id="about-education-title">{text.education}</h3>

          <ul className="about-education-list">
            <li>
              <h4>{text.degree}</h4>
              <p>Universidad Veracruzana</p>
            </li>

            <li>
              <h4>{text.technicalDegree}</h4>
              <p>C.B.T.I.S. No. 35</p>
            </li>
          </ul>
        </div>

        <div
          className="about-courses"
          aria-labelledby="about-courses-title"
        >
          <h3 id="about-courses-title">{text.courses}</h3>

          <ul className="about-education-list">
            <li>
              <h4>{text.course}</h4>
              <p>Mouredev · BIG school</p>

              <p className="about-course-meta">
                {text.courseDetails}
              </p>

              <a
                className="text-link"
                href="/iniciacion-desarrollo-ia.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={text.certificateLabel}
              >
                {text.certificate}
                <ArrowUpRight aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <a
          className="text-link"
          href={text.cvUrl}
          download
        >
          {text.cv}
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>

      <div
        className="skills-grid"
        aria-label={text.skillsLabel}
      >
        <div>
          <Code2 aria-hidden="true" />
          <h3>Frontend</h3>
          <p>
            HTML · CSS · JavaScript · TypeScript · React · Next.js ·
            Tailwind CSS
          </p>
        </div>

        <div>
          <Server aria-hidden="true" />
          <h3>Backend</h3>
          <p>
            Java · Python · Spring Boot · FastAPI · MyBatis ·{' '}
            {text.restApis}
          </p>
        </div>

        <div>
          <Database aria-hidden="true" />
          <h3>{text.databases}</h3>
          <p>MySQL · PostgreSQL · SQL Server · MongoDB</p>
        </div>

        <div>
          <Smartphone aria-hidden="true" />
          <h3>{text.mobile}</h3>
          <p>Kotlin · Android</p>
        </div>

        <div>
          <Monitor aria-hidden="true" />
          <h3>{text.desktop}</h3>
          <p>Java · JavaFX</p>
        </div>

        <div>
          <Wrench aria-hidden="true" />
          <h3>{text.tools}</h3>
          <p>Git · GitHub · Docker · Azure · Vercel</p>
        </div>
      </div>
    </section>
  )
}