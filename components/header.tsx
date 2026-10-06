'use client'

import Image from 'next/image'
import { useLanguage } from './language-provider'

const headerTexts = {
  es: {
    home: 'Inicio',
    projects: 'Proyectos',
    about: 'Sobre mí',
    contact: 'Contacto',
    navigation: 'Navegación principal',
    brand: 'Eduardo Rodríguez, ir al inicio',
    language: 'Seleccionar idioma',
  },
  en: {
    home: 'Home',
    projects: 'Projects',
    about: 'About me',
    contact: 'Contact',
    navigation: 'Main navigation',
    brand: 'Eduardo Rodríguez, go to homepage',
    language: 'Select language',
  },
}

export function Header() {
  const { language, setLanguage } = useLanguage()
  const text = headerTexts[language]

  return (
    <header className="site-header">
      <a
        className="brand"
        href="#inicio"
        aria-label={text.brand}
      >
        <Image
          src="/logo-er.png"
          alt="Eduardo Rodríguez"
          width={1584}
          height={993}
          className="brand-logo"
          priority
        />
      </a>

      <div className="header-controls">
        <nav aria-label={text.navigation}>
          <a href="#inicio">{text.home}</a>
          <a href="#proyectos">{text.projects}</a>
          <a href="#github">GitHub</a>
          <a href="#sobre-mi">{text.about}</a>
          <a href="#contacto">{text.contact}</a>
        </nav>

        <div
          className="language-switch"
          role="group"
          aria-label={text.language}
        >
          <button
            type="button"
            lang="es"
            aria-label="Español"
            aria-pressed={language === 'es'}
            onClick={() => setLanguage('es')}
          >
            ES
          </button>

          <button
            type="button"
            lang="en"
            aria-label="English"
            aria-pressed={language === 'en'}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  )
}