import type { Metadata } from 'next'
import { newsItems } from '@/data/news'

export const metadata: Metadata = {
  title: 'News',
}

export default function NewsPage() {
  return (
    <>
      <h1 className="text-[1.75rem] font-semibold mb-10 tracking-[-0.03em]">News</h1>

      <ul className="list-none p-0">
        {newsItems.map((item) => (
          <li
            key={item.id}
            className="group flex flex-col gap-[0.15rem] -mx-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-150 border-b border-border-light last:border-b-0 sm:flex-row sm:gap-6 text-[0.93rem]"
          >
            <span className="flex-shrink-0 text-[0.8rem] text-subtle tabular-nums sm:w-[76px] sm:pt-[0.1rem]">
              {item.date}
            </span>
            <span className="text-ink break-words">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline underline-offset-[3px] hover:text-muted transition-colors"
              >
                {item.title}
              </a>
              {' '}&nbsp;·&nbsp;{' '}
              <em className="font-sans not-italic text-subtle">{item.outlet}</em>
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}
