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

export default function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  const open = useCallback((project: Project, trigger: HTMLElement) => {
    triggerRef.current = trigger
    setSelected(project)
  }, [])

  const close = useCallback(() => {
    setSelected(null)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  const next = useCallback(() => {
    setSelected((current) => current ? projects[(projects.findIndex((item) => item.id === current.id) + 1) % projects.length] : null)
  }, [])

  return (
    <>
      <Header />
      <main><Hero /><ProjectsSection onOpen={open} /><AboutSection /><BackendSection onOpen={open} /><ContactSection /></main>
      <footer><span>Eduardo Rodríguez</span><span>Desarrollador web · Xalapa, México</span><nav aria-label="Navegación del pie"><a href="#proyectos">Proyectos</a><a href="#sobre-mi">Sobre mí</a><a href="#contacto">Contacto</a></nav></footer>
      {selected && <ProjectModal project={selected} onClose={close} onNext={next} />}
    </>
  )
}
