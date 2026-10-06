'use client'

import { useState, type FormEvent } from 'react'
import {
  ArrowUpRight,
  Code2,
  Mail,
  MessageCircle,
  BriefcaseBusiness,
} from 'lucide-react'

export function ContactSection() {
  const [notice, setNotice] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const subject = String(data.get('subject') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    if (!name || !email || !message) {
      setNotice('Completa tu nombre, correo y mensaje.')
      return
    }

    const body = [
      `Nombre: ${name}`,
      `Correo de contacto: ${email}`,
      '',
      message,
    ].join('\n')

    window.location.href =
      `mailto:Eduardo.r.s.y@outlook.com` +
      `?subject=${encodeURIComponent(subject || 'Contacto desde el portafolio')}` +
      `&body=${encodeURIComponent(body)}`

    setNotice(
      'Se solicitó abrir tu aplicación de correo. Completa el envío desde ahí. Si no se abre, utiliza el enlace de correo directo.'
    )
  }

  return (
    <section
      id="contacto"
      className="section contact-section contact-section--form"
      aria-labelledby="contact-title"
    >
      <div className="contact-heading">
        <p className="eyebrow">Contacto</p>
        <h2 id="contact-title">Hablemos de lo que sigue.</h2>
        <p>
          ¿Tienes un proyecto en mente o una oportunidad profesional?
          Comparte los detalles y conversemos.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-channels">
          <h3>Contacto directo</h3>
          <p>
            Un espacio para conversar sobre proyectos, propuestas de
            colaboración y oportunidades profesionales.
          </p>
          <a
  className="contact-channel"
  href="https://wa.me/522881178151"
  target="_blank"
  rel="noopener noreferrer"
>
  <MessageCircle aria-hidden="true" />

  <span>
    <small>WhatsApp</small>
    <strong>+52 288 117 8151</strong>
  </span>

  <ArrowUpRight aria-hidden="true" />
</a>

<a
  className="contact-channel"
  href="https://www.linkedin.com/in/eduardo-rodriguez-99497832b/"
  target="_blank"
  rel="noopener noreferrer"
>
  <BriefcaseBusiness aria-hidden="true" />

  <span>
    <small>LinkedIn</small>
    <strong>Eduardo Rodríguez</strong>
  </span>

  <ArrowUpRight aria-hidden="true" />
</a>
          <a
            className="contact-channel"
            href="mailto:Eduardo.r.s.y@outlook.com"
          >
            <Mail aria-hidden="true" />

            <span>
              <small>Correo electrónico</small>
              <strong>Eduardo.r.s.y@outlook.com</strong>
            </span>

            <ArrowUpRight aria-hidden="true" />
          </a>

          <a
            className="contact-channel"
            href="https://github.com/eduard165"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code2 aria-hidden="true" />

            <span>
              <small>GitHub</small>
              <strong>eduard165</strong>
            </span>

            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Comparte tu propuesta</h3>

          <div className="contact-form-row">
            <div className="contact-field">
              <label htmlFor="contact-name">Nombre *</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Tu nombre"
                maxLength={100}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">Correo electrónico *</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="nombre@correo.com"
                maxLength={254}
                required
              />
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="contact-subject">Asunto</label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="Proyecto, colaboración u oportunidad laboral"
              maxLength={150}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message">Mensaje *</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Cuéntame qué necesitas o comparte los detalles de la oportunidad."
              rows={6}
              maxLength={2000}
              required
            />
          </div>

          <div className="contact-form-footer">
            <p>Los campos con * son obligatorios.</p>

            <button className="button button-primary" type="submit">
              Preparar correo
              <ArrowUpRight aria-hidden="true" />
            </button>
          </div>

          <p className="contact-form-notice" role="status">
            {notice}
          </p>
        </form>
      </div>
    </section>
  )
}