import type { Project } from '@/lib/projects'

export function ProjectVisual({ project }: { project: Project }) {
  const firstImage = project.images?.[0]
  if (firstImage) {
    return <img className="project-visual-image" src={firstImage.src} alt={firstImage.alt} />
  }

  return (
    <div className={`project-visual project-visual--${project.visual}`} aria-label={`Vista conceptual de ${project.title}`} role="img">
      <div className="visual-topline"><span>{project.kind === 'website' ? 'SITIO WEB' : 'APLICACIÓN / API'}</span><span>↗</span></div>
      <div className="visual-body">
        <span className="visual-mark">{project.kind === 'software' ? '{ }' : '✳'}</span>
        <strong>{project.title}</strong>
        <small>{project.kind === 'website' ? 'Una historia para explorar' : 'Soluciones que funcionan'}</small>
      </div>
      <span className="visual-caption">Vista conceptual · capturas reales próximamente</span>
    </div>
  )
}
