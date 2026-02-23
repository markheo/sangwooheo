import type { Metadata } from 'next'
import Tag from '@/components/Tag'
import { writings } from '@/data/writing'

export const metadata: Metadata = {
  title: 'Writing',
}

function groupByYear(items: typeof writings) {
  return items.reduce<Record<number, typeof writings>>((acc, item) => {
    if (!acc[item.year]) acc[item.year] = []
    acc[item.year].push(item)
    return acc
  }, {})
}

export default function WritingPage() {
  const grouped = groupByYear(writings)
  const years = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <>
      <h1 className="text-[1.75rem] font-semibold mb-10 tracking-[-0.03em]">Writing</h1>

      {years.map((year) => (
        <div key={year}>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-subtle mb-4 mt-8 first:mt-0">
            {year}
          </p>

          {grouped[year].map((item) => (
            <div
              key={item.id}
              className="-mx-3 px-3 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-150 border-b border-border-light last:border-b-0"
            >
              <p className="text-[0.97rem] mb-[0.2rem]">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline underline-offset-[3px] hover:text-muted transition-colors"
                >
                  {item.title}
                </a>
                <Tag type={item.tag} label={item.tagLabel} />
              </p>
              <p className="font-sans text-[0.83rem] text-subtle mb-[0.35rem]">
                {item.authors} &nbsp;·&nbsp; <em>{item.venue}</em>
              </p>
              <p className="text-[0.9rem] text-muted mb-2">{item.description}</p>
              <div className="font-sans text-[0.82rem] flex gap-3">
                {item.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-ink transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  )
}
