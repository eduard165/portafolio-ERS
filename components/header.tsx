import Image from 'next/image'

export function Header() {
  return (
    <header className="site-header">
      <a
        className="brand"
        href="#inicio"
        aria-label="Eduardo Rodríguez, ir al inicio"
      >
        <Image
          src="/logo-er.png"
          alt="Logo de Eduardo Rodríguez"
          width={1584}
          height={993}
          className="brand-logo"
          priority
        />
      </a>

      <nav aria-label="Navegación principal">
        <a href="#inicio">Inicio</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#github">GitHub</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  )
}