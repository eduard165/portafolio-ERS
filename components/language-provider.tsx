'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type Language = 'es' | 'en'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<
  LanguageContextValue | undefined
>(undefined)

const STORAGE_KEY = 'portfolio-language'

export function LanguageProvider({
  children,
}: {
  children: ReactNode
}) {
  const [language, updateLanguage] = useState<Language>('es')

  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem(STORAGE_KEY)

      if (savedLanguage === 'es' || savedLanguage === 'en') {
        updateLanguage(savedLanguage)
      }
    } catch {
      // La página funciona aunque el navegador bloquee el almacenamiento.
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  function setLanguage(nextLanguage: Language) {
    updateLanguage(nextLanguage)

    try {
      localStorage.setItem(STORAGE_KEY, nextLanguage)
    } catch {
      // El cambio de idioma funciona sin guardar la preferencia.
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error(
      'useLanguage debe utilizarse dentro de LanguageProvider',
    )
  }

  return context
}