'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Code2, FolderGit2 } from 'lucide-react'

type Repository = {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  fork: boolean
  pushed_at: string | null
}

const USERNAME = 'eduard165'

function formatDate(value: string) {
  return new Intl.DateTimeFormat('es-MX', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'America/Mexico_City',
  }).format(new Date(value))
}

export function GithubSection() {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    async function loadRepositories() {
      try {
        const allRepositories: Repository[] = []
        let page = 1

        while (true) {
          const response = await fetch(
            `https://api.github.com/users/${USERNAME}/repos` +
              `?per_page=100&page=${page}&sort=pushed&direction=desc`,
            {
              signal: controller.signal,
              headers: {
                Accept: 'application/vnd.github+json',
              },
            }
          )

          if (!response.ok) {
            throw new Error('No se pudieron consultar los repositorios')
          }

          const batch: Repository[] = await response.json()

          allRepositories.push(...batch)

          if (batch.length < 100) break
          page += 1
        }

        if (!controller.signal.aborted) {
          setRepositories(
            allRepositories.filter((repository) => !repository.fork)
          )
        }
      } catch {
        if (!controller.signal.aborted) setError(true)
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    loadRepositories()

    return () => controller.abort()
  }, [])

  const languageCounts = repositories.reduce<Record<string, number>>(
    (counts, repository) => {
      if (repository.language) {
        counts[repository.language] =
          (counts[repository.language] ?? 0) + 1
      }

      return counts
    },
    {}
  )

  const languages = Object.entries(languageCounts).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  )

  const classifiedRepositories = languages.reduce(
    (total, [, count]) => total + count,
    0
  )

  const recentRepositories = repositories
    .filter((repository) => repository.pushed_at !== null)
    .sort(
      (a, b) =>
        new Date(b.pushed_at!).getTime() -
        new Date(a.pushed_at!).getTime()
    )

  const latestUpdate = recentRepositories[0]?.pushed_at

  return (
    <section
      id="github"
      className="section github-section"
      aria-labelledby="github-title"
      aria-busy={loading}
    >
      <div className="github-heading">
        <div>
          <p className="eyebrow">Código y práctica</p>
          <h2 id="github-title">Actividad en GitHub.</h2>
          <p>
            Repositorios, lenguajes y actualizaciones de proyectos públicos.
          </p>
        </div>
      </div>

      {loading ? (
        <p className="github-notice" role="status">
          Consultando repositorios…
        </p>
      ) : error ? (
        <p className="github-notice" role="status">
          No se pudo cargar la actividad. Puedes consultar los proyectos
          directamente en GitHub.
        </p>
      ) : repositories.length === 0 ? (
        <p className="github-notice">
          No hay repositorios públicos propios disponibles.
        </p>
      ) : (
        <>
          <div className="github-metrics">
            <div>
              <FolderGit2 aria-hidden="true" />
              <span>Repositorios públicos</span>
              <strong>{repositories.length}</strong>
              <small>Sin incluir forks</small>
            </div>

            <div>
              <Code2 aria-hidden="true" />
              <span>Lenguajes principales</span>
              <strong>{languages.length}</strong>
              <small>Detectados en los repositorios</small>
            </div>

            <div>
              <ArrowUpRight aria-hidden="true" />
              <span>Último push</span>
              <strong className="github-date">
                {latestUpdate ? formatDate(latestUpdate) : 'Sin datos'}
              </strong>
              <small>Última subida de cambios registrada</small>
            </div>
          </div>

          <div className="github-details">
            <div className="github-languages">
              <h3>Lenguajes en los proyectos</h3>
              <p className="github-description">
                Distribución por lenguaje principal de cada repositorio.
              </p>

              {languages.length > 0 ? (
                <ul className="github-language-list">
                  {languages.map(([language, count]) => (
                    <li key={language}>
                      <div className="github-language-label">
                        <span>{language}</span>
                        <span>
                          {count} {count === 1 ? 'repositorio' : 'repositorios'}
                        </span>
                      </div>

                      <div className="github-language-track" aria-hidden="true">
                        <span
                          style={{
                            width: `${(count / classifiedRepositories) * 100}%`,
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="github-description">
                  GitHub todavía no identifica lenguajes principales.
                </p>
              )}
            </div>

            <div className="github-recent">
              <h3>Actualizaciones recientes</h3>

              <ul className="github-repository-list">
                {recentRepositories.slice(0, 3).map((repository) => (
                  <li key={repository.id}>
                    <a
                      href={repository.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="github-repository-heading">
                        <strong>{repository.name}</strong>
                        <ArrowUpRight aria-hidden="true" />
                      </div>

                      {repository.description && (
                        <p>{repository.description}</p>
                      )}

                      <small>
                        {repository.language ?? 'Sin lenguaje identificado'}
                        {' · '}
                        <time dateTime={repository.pushed_at!}>
                          {formatDate(repository.pushed_at!)}
                        </time>
                      </small>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </section>
  )
}