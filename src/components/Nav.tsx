'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/',        label: 'About'   },
  { href: '/research', label: 'Research' },
  { href: '/news',    label: 'News'    },
  { href: '/cv',      label: 'CV'      },
]

export default function Nav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav className="sticky top-0 z-50 bg-white/92 backdrop-blur-md border-b border-border/90">
      <div className="h-[60px] px-5 sm:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="text-[1.02rem] font-semibold tracking-[-0.015em] text-ink no-underline hover:text-ink"
        >
          Sangwoo Heo
        </Link>

        <div className="hidden sm:flex gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-sans text-[0.95rem] tracking-[0.005em] no-underline transition-colors ${
                pathname === href
                  ? 'text-ink border-b-2 border-ink pb-[2px]'
                  : 'text-muted hover:text-ink'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <button
          className="sm:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-muted hover:text-ink transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M3 3l12 12M15 3L3 15" />
            </svg>
          ) : (
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M2 5h14M2 9h14M2 13h14" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-white border-b border-border">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block px-5 font-sans text-[0.98rem] tracking-[0.005em] no-underline min-h-[48px] flex items-center transition-colors ${
                pathname === href
                  ? 'text-ink font-semibold'
                  : 'text-muted hover:text-ink'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
