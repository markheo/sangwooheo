import type { Metadata } from 'next'
import { cvSections } from '@/data/cv'

export const metadata: Metadata = {
  title: 'CV',
}

export default function CvPage() {
  return (
    <>
      <h1 className="text-[2rem] sm:text-[2.2rem] font-semibold mb-12 tracking-[-0.03em] leading-[1.16]">CV</h1>

      {cvSections.map((section, index) => (
        <section key={section.label} className={index === cvSections.length - 1 ? '' : 'mb-12'}>
          <p className="text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-subtle mb-5 pb-3 border-b border-border">
            {section.label}
          </p>

          <ul className="list-none space-y-7">
            {section.items.map((item, i) => (
              <li key={i} className="text-[1.04rem] text-ink leading-[1.65]">
                <span className="font-semibold">{item.title}</span>
                {' · '}
                <span className="text-muted">
                  {item.org}
                  {item.orgNote && (
                    <em className="not-italic text-subtle"> {item.orgNote}</em>
                  )}
                </span>
                <span className="text-subtle"> · {item.period}</span>

                {item.bullets && item.bullets.length > 0 && (
                  <ul className="list-none mt-2.5 space-y-1.5">
                    {item.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-[0.96rem] text-muted pl-4 border-l-2 border-border leading-[1.65]"
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
