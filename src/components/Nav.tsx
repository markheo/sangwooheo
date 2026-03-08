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
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="h-[52px] px-4 sm:px-8 flex items-center justify-between">
        {/* 사이트명 */}
        <Link
          href="/"
          className="text-[0.92rem] font-semibold tracking-[-0.01em] text-ink no-underline hover:text-ink"
        >
          Sangwoo Heo
        </Link>

        {/* 데스크톱 링크 */}
        <div className="hidden sm:flex gap-[1.75rem]">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-sans text-[0.88rem] tracking-[0.01em] no-underline transition-colors ${
                pathname === href
                  ? 'text-ink border-b-2 border-ink pb-[1px]'
                  : 'text-muted hover:text-ink'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* 햄버거 버튼 (모바일) */}
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

      {/* 모바일 드롭다운 메뉴 */}
      {isOpen && (
        <div className="sm:hidden bg-white border-b border-border">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block px-4 font-sans text-[0.88rem] tracking-[0.01em] no-underline min-h-[44px] flex items-center transition-colors ${
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
