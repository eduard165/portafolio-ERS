'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
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
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    menu: 'Menú',
  },
  en: {
    home: 'Home',
    projects: 'Projects',
    about: 'About me',
    contact: 'Contact',
    navigation: 'Main navigation',
    brand: 'Eduardo Rodríguez, go to homepage',
    language: 'Select language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menu: 'Menu',
  },
}

export function Header() {
  const { language, setLanguage } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const text = headerTexts[language]

  useEffect(() => {
    if (!menuOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  return (
    <header className="site-header">
      <a
        className="brand"
        href="#inicio"
        aria-label={text.brand}
        onClick={() => setMenuOpen(false)}
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

      <button
        className="mobile-menu-button"
        type="button"
        aria-label={menuOpen ? text.closeMenu : text.openMenu}
        aria-expanded={menuOpen}
        aria-controls="header-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span>{text.menu}</span>
        {menuOpen ? (
          <X aria-hidden="true" />
        ) : (
          <Menu aria-hidden="true" />
        )}
      </button>

      <div
        id="header-menu"
        className={`header-controls${menuOpen ? ' is-open' : ''}`}
      >
        <nav aria-label={text.navigation}>
          <a href="#inicio" onClick={() => setMenuOpen(false)}>
            {text.home}
          </a>
          <a href="#proyectos" onClick={() => setMenuOpen(false)}>
            {text.projects}
          </a>
          <a href="#github" onClick={() => setMenuOpen(false)}>
            GitHub
          </a>
          <a href="#sobre-mi" onClick={() => setMenuOpen(false)}>
            {text.about}
          </a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>
            {text.contact}
          </a>
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
            onClick={() => {
              setLanguage('es')
              setMenuOpen(false)
            }}
          >
            ES
          </button>

          <button
            type="button"
            lang="en"
            aria-label="English"
            aria-pressed={language === 'en'}
            onClick={() => {
              setLanguage('en')
              setMenuOpen(false)
            }}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  )
}