import { ArrowUpRight } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contacto" className="section contact-section" aria-labelledby="contact-title">
      <div><p className="eyebrow">Hablemos</p><h2 id="contact-title">¿Trabajamos juntos?</h2></div>
      <p>Cuéntame tu idea o conversemos sobre una oportunidad.</p>
      <a className="button button-primary" href="mailto:Eduardo.r.s.y@outlook.com">Enviar correo <ArrowUpRight aria-hidden="true" /></a>
    </section>
  )
}
