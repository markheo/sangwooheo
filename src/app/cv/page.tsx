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
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-subtle mb-5 pb-3 border-b border-border">
            {section.label}
          </p>

          <ul className="list-none space-y-6">
            {section.items.map((item, i) => (
              <li key={i} className="text-[1rem] text-ink">
                <span className="font-medium">{item.title}</span>
                {' · '}
                <span className="text-muted">
                  {item.org}
                  {item.orgNote && (
                    <em className="not-italic text-subtle"> {item.orgNote}</em>
                  )}
                </span>
                <span className="text-subtle"> · {item.period}</span>

                {item.bullets && item.bullets.length > 0 && (
                  <ul className="list-none mt-2 space-y-1">
                    {item.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-[0.9rem] text-muted pl-4 border-l-2 border-border"
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
