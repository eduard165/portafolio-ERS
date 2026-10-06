'use client'

import { useCallback, useRef, useState } from 'react'
import { projects, type Project } from '@/lib/projects'
import { Header } from './header'
import { Hero } from './hero'
import { ProjectsSection } from './projects-section'
import { AboutSection } from './about-section'
import { BackendSection } from './backend-section'
import { ContactSection } from './contact-section'
import { ProjectModal } from './project-modal'
import { GithubSection } from './github-section'
import { Reveal } from './reveal'
import { useLanguage } from './language-provider'

const footerTexts = {
  es: {
    role: 'Desarrollador · México',
    navigation: 'Navegación del pie',
    projects: 'Proyectos',
    about: 'Sobre mí',
    contact: 'Contacto',
  },
  en: {
    role: 'Developer · Mexico',
    navigation: 'Footer navigation',
    projects: 'Projects',
    about: 'About me',
    contact: 'Contact',
  },
}

export default function Portfolio() {
  const { language } = useLanguage()
  const text = footerTexts[language]

  const [selected, setSelected] = useState<Project | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  const open = useCallback(
    (project: Project, trigger: HTMLElement) => {
      triggerRef.current = trigger
      setSelected(project)
    },
    [],
  )

  const close = useCallback(() => {
    setSelected(null)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  const next = useCallback(() => {
    setSelected((current) => {
      if (!current || projects.length === 0) return null

      const currentIndex = projects.findIndex(
        (project) => project.id === current.id,
      )

      return projects[(currentIndex + 1) % projects.length]
    })
  }, [])

  return (
    <>
      <Header />

      <main>
        <Reveal>
          <Hero />
        </Reveal>

        <Reveal>
          <ProjectsSection onOpen={open} />
        </Reveal>

        <Reveal>
          <AboutSection />
        </Reveal>

        <Reveal>
          <GithubSection />
        </Reveal>

        <Reveal>
          <BackendSection onOpen={open} />
        </Reveal>

        <Reveal>
          <ContactSection />
        </Reveal>
      </main>

      <footer>
        <span>ERS©</span>
        <span>{text.role}</span>

        <nav aria-label={text.navigation}>
          <a href="#proyectos">{text.projects}</a>
          <a href="#sobre-mi">{text.about}</a>
          <a href="#contacto">{text.contact}</a>
        </nav>
      </footer>

      {selected && (
        <ProjectModal
          project={selected}
          onClose={close}
          onNext={next}
        />
      )}
    </>
  )
}