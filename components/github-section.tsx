'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Code2, FolderGit2 } from 'lucide-react'
import { useLanguage } from './language-provider'

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

const githubTexts = {
  es: {
    eyebrow: 'Código y práctica',
    title: 'Actividad en GitHub.',
    description:
      'Repositorios, lenguajes y actualizaciones de proyectos públicos.',
    loading: 'Consultando repositorios…',
    error:
      'No se pudo cargar la actividad. Puedes consultar los proyectos directamente en GitHub.',
    empty: 'No hay repositorios públicos propios disponibles.',
    repositories: 'Repositorios públicos',
    forks: 'Sin incluir forks',
    languages: 'Lenguajes principales',
    detected: 'Detectados en los repositorios',
    lastPush: 'Último push',
    noData: 'Sin datos',
    lastPushDescription: 'Última subida de cambios registrada',
    projectLanguages: 'Lenguajes en los proyectos',
    distribution:
      'Distribución por lenguaje principal de cada repositorio.',
    repository: 'repositorio',
    repositoriesPlural: 'repositorios',
    noLanguages:
      'GitHub todavía no identifica lenguajes principales.',
    recent: 'Actualizaciones recientes',
    unknownLanguage: 'Sin lenguaje identificado',
  },
  en: {
    eyebrow: 'Code and practice',
    title: 'GitHub activity.',
    description:
      'Repositories, languages, and updates from public projects.',
    loading: 'Loading repositories…',
    error:
      'Activity could not be loaded. You can view the projects directly on GitHub.',
    empty: 'No public non-fork repositories are available.',
    repositories: 'Public repositories',
    forks: 'Excluding forks',
    languages: 'Primary languages',
    detected: 'Detected across repositories',
    lastPush: 'Latest push',
    noData: 'No data',
    lastPushDescription: 'Most recent recorded code push',
    projectLanguages: 'Project languages',
    distribution:
      'Distribution by the primary language of each repository.',
    repository: 'repository',
    repositoriesPlural: 'repositories',
    noLanguages:
      'GitHub has not identified any primary languages yet.',
    recent: 'Recent updates',
    unknownLanguage: 'No language identified',
  },
}

function formatDate(value: string, language: 'es' | 'en') {
  return new Intl.DateTimeFormat(
    language === 'es' ? 'es-MX' : 'en-US',
    {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      timeZone: 'America/Mexico_City',
    },
  ).format(new Date(value))
}

export function GithubSection() {
  const { language } = useLanguage()
  const text = githubTexts[language]

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
            },
          )

          if (!response.ok) {
            throw new Error('Failed to load repositories')
          }

          const batch: Repository[] = await response.json()
          allRepositories.push(...batch)

          if (batch.length < 100) break
          page += 1
        }

        if (!controller.signal.aborted) {
          setRepositories(
            allRepositories.filter((repository) => !repository.fork),
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
    {},
  )

  const languages = Object.entries(languageCounts).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]),
  )

  const classifiedRepositories = languages.reduce(
    (total, [, count]) => total + count,
    0,
  )

  const recentRepositories = repositories
    .filter((repository) => repository.pushed_at !== null)
    .sort(
      (a, b) =>
        new Date(b.pushed_at!).getTime() -
        new Date(a.pushed_at!).getTime(),
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
          <p className="eyebrow">{text.eyebrow}</p>
          <h2 id="github-title">{text.title}</h2>
          <p>{text.description}</p>
        </div>
      </div>

      {loading ? (
        <p className="github-notice" role="status">
          {text.loading}
        </p>
      ) : error ? (
        <p className="github-notice" role="status">
          {text.error}
        </p>
      ) : repositories.length === 0 ? (
        <p className="github-notice">{text.empty}</p>
      ) : (
        <>
          <div className="github-metrics">
            <div>
              <FolderGit2 aria-hidden="true" />
              <span>{text.repositories}</span>
              <strong>{repositories.length}</strong>
              <small>{text.forks}</small>
            </div>

            <div>
              <Code2 aria-hidden="true" />
              <span>{text.languages}</span>
              <strong>{languages.length}</strong>
              <small>{text.detected}</small>
            </div>

            <div>
              <ArrowUpRight aria-hidden="true" />
              <span>{text.lastPush}</span>
              <strong className="github-date">
                {latestUpdate
                  ? formatDate(latestUpdate, language)
                  : text.noData}
              </strong>
              <small>{text.lastPushDescription}</small>
            </div>
          </div>

          <div className="github-details">
            <div className="github-languages">
              <h3>{text.projectLanguages}</h3>
              <p className="github-description">
                {text.distribution}
              </p>

              {languages.length > 0 ? (
                <ul className="github-language-list">
                  {languages.map(([programmingLanguage, count]) => (
                    <li key={programmingLanguage}>
                      <div className="github-language-label">
                        <span>{programmingLanguage}</span>
                        <span>
                          {count}{' '}
                          {count === 1
                            ? text.repository
                            : text.repositoriesPlural}
                        </span>
                      </div>

                      <div
                        className="github-language-track"
                        aria-hidden="true"
                      >
                        <span
                          style={{
                            width: `${
                              (count / classifiedRepositories) * 100
                            }%`,
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="github-description">
                  {text.noLanguages}
                </p>
              )}
            </div>

            <div className="github-recent">
              <h3>{text.recent}</h3>

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
                        {repository.language ?? text.unknownLanguage}
                        {' · '}
                        <time dateTime={repository.pushed_at!}>
                          {formatDate(repository.pushed_at!, language)}
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