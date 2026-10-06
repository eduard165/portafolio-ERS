'use client'

import { useState, type FormEvent } from 'react'
import {
  ArrowUpRight,
  Code2,
  Mail,
  MessageCircle,
  BriefcaseBusiness,
} from 'lucide-react'
import { useLanguage } from './language-provider'

const contactTexts = {
  es: {
    eyebrow: 'Contacto',
    title: 'Hablemos de lo que sigue.',
    description:
      '¿Tienes un proyecto en mente o una oportunidad profesional? Comparte los detalles y conversemos.',
    direct: 'Contacto directo',
    directDescription:
      'Un espacio para conversar sobre proyectos, propuestas de colaboración y oportunidades profesionales.',
    email: 'Correo electrónico',
    formTitle: 'Comparte tu propuesta',
    nameLabel: 'Nombre *',
    namePlaceholder: 'Tu nombre',
    emailLabel: 'Correo electrónico *',
    emailPlaceholder: 'nombre@correo.com',
    subjectLabel: 'Asunto',
    subjectPlaceholder:
      'Proyecto, colaboración u oportunidad laboral',
    messageLabel: 'Mensaje *',
    messagePlaceholder:
      'Cuéntame qué necesitas o comparte los detalles de la oportunidad.',
    required: 'Los campos con * son obligatorios.',
    submit: 'Preparar correo',
    incomplete: 'Completa tu nombre, correo y mensaje.',
    prepared:
      'Se solicitó abrir tu aplicación de correo. Completa el envío desde ahí. Si no se abre, utiliza el enlace de correo directo.',
    defaultSubject: 'Contacto desde el portafolio',
    bodyName: 'Nombre',
    bodyEmail: 'Correo de contacto',
  },
  en: {
    eyebrow: 'Contact',
    title: 'Let’s talk about what’s next.',
    description:
      'Have a project in mind or a professional opportunity? Share the details and let’s talk.',
    direct: 'Get in touch',
    directDescription:
      'A space to discuss projects, collaboration proposals, and professional opportunities.',
    email: 'Email',
    formTitle: 'Share your proposal',
    nameLabel: 'Name *',
    namePlaceholder: 'Your name',
    emailLabel: 'Email *',
    emailPlaceholder: 'name@example.com',
    subjectLabel: 'Subject',
    subjectPlaceholder:
      'Project, collaboration, or job opportunity',
    messageLabel: 'Message *',
    messagePlaceholder:
      'Tell me what you need or share the details of the opportunity.',
    required: 'Fields marked with * are required.',
    submit: 'Prepare email',
    incomplete: 'Please enter your name, email, and message.',
    prepared:
      'Your email application was requested to open. Complete sending your message there. If it does not open, use the direct email link.',
    defaultSubject: 'Contact from the portfolio',
    bodyName: 'Name',
    bodyEmail: 'Contact email',
  },
}

type Notice = 'incomplete' | 'prepared' | null

export function ContactSection() {
  const { language } = useLanguage()
  const text = contactTexts[language]
  const [notice, setNotice] = useState<Notice>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const subject = String(data.get('subject') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    if (!name || !email || !message) {
      setNotice('incomplete')
      return
    }

    const body = [
      `${text.bodyName}: ${name}`,
      `${text.bodyEmail}: ${email}`,
      '',
      message,
    ].join('\n')

    window.location.href =
      'mailto:Eduardo.r.s.y@outlook.com' +
      `?subject=${encodeURIComponent(subject || text.defaultSubject)}` +
      `&body=${encodeURIComponent(body)}`

    setNotice('prepared')
  }

  return (
    <section
      id="contacto"
      className="section contact-section contact-section--form"
      aria-labelledby="contact-title"
    >
      <div className="contact-heading">
        <p className="eyebrow">{text.eyebrow}</p>
        <h2 id="contact-title">{text.title}</h2>
        <p>{text.description}</p>
      </div>

      <div className="contact-layout">
        <div className="contact-channels">
          <h3>{text.direct}</h3>
          <p>{text.directDescription}</p>

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
              <small>{text.email}</small>
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
          <h3>{text.formTitle}</h3>

          <div className="contact-form-row">
            <div className="contact-field">
              <label htmlFor="contact-name">{text.nameLabel}</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder={text.namePlaceholder}
                maxLength={100}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">{text.emailLabel}</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder={text.emailPlaceholder}
                maxLength={254}
                required
              />
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="contact-subject">{text.subjectLabel}</label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder={text.subjectPlaceholder}
              maxLength={150}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message">{text.messageLabel}</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder={text.messagePlaceholder}
              rows={6}
              maxLength={2000}
              required
            />
          </div>

          <div className="contact-form-footer">
            <p>{text.required}</p>

            <button className="button button-primary" type="submit">
              {text.submit}
              <ArrowUpRight aria-hidden="true" />
            </button>
          </div>

          <p className="contact-form-notice" role="status">
            {notice ? text[notice] : ''}
          </p>
        </form>
      </div>
    </section>
  )
}