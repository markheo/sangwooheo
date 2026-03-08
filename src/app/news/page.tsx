import type { Metadata } from 'next'
import { newsItems } from '@/data/news'

export const metadata: Metadata = {
  title: 'News',
}

export default function NewsPage() {
  return (
    <>
      <h1 className="text-[2rem] sm:text-[2.2rem] font-semibold mb-12 tracking-[-0.03em] leading-[1.16]">News</h1>

      <ul className="list-none p-0">
        {newsItems.map((item) => (
          <li
            key={item.id}
            className="group flex flex-col gap-1 -mx-3 px-3 py-4 rounded-xl hover:bg-gray-50/80 transition-colors duration-150 border-b border-border-light last:border-b-0 sm:flex-row sm:gap-7 text-[1rem]"
          >
            <span className="flex-shrink-0 text-[0.86rem] text-subtle tabular-nums sm:w-[84px] sm:pt-[0.15rem]">
              {item.date}
            </span>
            <span className="text-ink break-words leading-[1.65]">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink font-medium underline underline-offset-[3px] hover:text-muted transition-colors"
              >
                {item.title}
              </a>
              {' '}&nbsp;·&nbsp;{' '}
              <em className="font-sans not-italic text-[0.92rem] text-subtle">{item.outlet}</em>
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}
