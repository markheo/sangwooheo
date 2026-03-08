import type { Metadata } from 'next'
import Tag from '@/components/Tag'
import { writings } from '@/data/writing'

export const metadata: Metadata = {
  title: 'Research',
}

function renderAuthors(authors: string) {
  const target = 'Sangwoo Heo'
  const idx = authors.indexOf(target)
  if (idx === -1) return <span>{authors}</span>
  return (
    <span>
      {authors.slice(0, idx)}
      <strong className="font-semibold text-ink">{target}</strong>
      {authors.slice(idx + target.length)}
    </span>
  )
}

function groupByYear(items: typeof writings) {
  return items.reduce<Record<number, typeof writings>>((acc, item) => {
    if (!acc[item.year]) acc[item.year] = []
    acc[item.year].push(item)
    return acc
  }, {})
}

export default function ResearchPage() {
  const grouped = groupByYear(writings)
  const years = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <>
      <h1 className="text-[2rem] sm:text-[2.2rem] font-semibold mb-12 tracking-[-0.03em] leading-[1.16]">Research</h1>

      {years.map((year) => (
        <div key={year}>
          <p className="text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-subtle mb-5 mt-12 pb-3 border-b border-border first:mt-0">
            {year}
          </p>

          {grouped[year].map((item) => (
            <div
              key={item.id}
              className="-mx-3 px-3 py-5 rounded-xl hover:bg-gray-50/80 transition-colors duration-150 border-b border-border-light last:border-b-0"
            >
              <p className="text-[1.08rem] leading-[1.55] mb-1">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink font-medium underline underline-offset-[3px] hover:text-muted transition-colors"
                  >
                    {item.title}
                  </a>
                ) : (
                  <span className="text-ink">{item.title}</span>
                )}
                <Tag type={item.tag} label={item.tagLabel} />
              </p>
              <p className="font-sans text-[0.92rem] text-subtle mb-1">
                {renderAuthors(item.authors)} &nbsp;·&nbsp; <em>{item.venue}</em>
              </p>
              <p className="text-[1rem] text-muted mb-2.5 leading-[1.7]">{item.description}</p>
              <div className="font-sans text-[0.9rem] flex gap-4">
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
