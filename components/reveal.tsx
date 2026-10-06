'use client'

import { useEffect, useRef, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
}

export function Reveal({
  children,
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )

    if (
      reducedMotion.matches ||
      !('IntersectionObserver' in window)
    ) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          element.dataset.revealState = 'visible'
          observer.disconnect()
        }
      },
      { threshold: 0 },
    )

    element.dataset.revealState = 'pending'
    observer.observe(element)

    const showImmediately = () => {
      if (reducedMotion.matches) {
        element.dataset.revealState = 'visible'
        observer.disconnect()
      }
    }

    reducedMotion.addEventListener('change', showImmediately)

    return () => {
      observer.disconnect()
      reducedMotion.removeEventListener('change', showImmediately)
      delete element.dataset.revealState
    }
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </div>
  )
}