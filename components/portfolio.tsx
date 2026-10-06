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

export default function Portfolio() {
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
        <span>Desarrollador · México</span>

        <nav aria-label="Navegación del pie">
          <a href="#proyectos">Proyectos</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#contacto">Contacto</a>
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