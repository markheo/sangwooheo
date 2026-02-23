import type { Metadata } from 'next'
import { cvSections } from '@/data/cv'

export const metadata: Metadata = {
  title: 'CV',
}

export default function CvPage() {
  return (
    <>
      <h1 className="text-[1.75rem] font-semibold mb-10 tracking-[-0.03em]">CV</h1>

      {cvSections.map((section) => (
        <section key={section.label} className="mb-10">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-subtle mb-4 pb-3 border-b border-border">
            {section.label}
          </p>

          <ul className="list-disc pl-5 space-y-3">
            {section.items.map((item, i) => (
              <li key={i} className="text-[0.95rem] text-ink">
                {item.title},{' '}
                <span>
                  {item.org}
                  {item.orgNote && (
                    <em className="text-faint not-italic"> {item.orgNote}</em>
                  )}
                </span>
                , {item.period}

                {item.bullets && item.bullets.length > 0 && (
                  <ul className="list-none pl-0 mt-2 space-y-1">
                    {item.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-[0.84rem] text-muted pl-3 border-l border-border-light"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  )
}
