import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sangwoo Heo',
  description: 'AI Strategy & Governance at Viva Republica (Toss). Working where AI capability meets risk, regulation, and business value.',
}

export default function AboutPage() {
  return (
    <>
      <section className="flex flex-col gap-6 items-start mb-16 sm:flex-row sm:gap-12 sm:mb-20">
        <div className="flex-shrink-0">
          <Image
            src="/avatar.jpg"
            alt="Sangwoo Heo"
            width={130}
            height={130}
            className="w-[108px] h-[108px] sm:w-[136px] sm:h-[136px] rounded-[7%] object-cover object-[center_5%] ring-1 ring-border"
            priority
          />
        </div>

        <div className="max-w-[68ch]">
          <h1 className="text-[2.2rem] sm:text-[2.5rem] font-semibold mb-1 tracking-[-0.035em] leading-[1.12] text-ink">
            Sangwoo Heo{' '}
            <span className="text-[1.2rem] sm:text-[1.3rem] font-normal text-subtle">허상우</span>
          </h1>
          <p className="text-[1rem] text-muted mb-1 font-medium">
            AI Strategy & Governance
          </p>
          <p className="text-[0.99rem] text-muted mb-7">
            Viva Republica (Toss) &nbsp;·&nbsp; Seoul, Korea
          </p>

          <div className="text-[1.05rem] text-ink mb-12 space-y-5 leading-[1.84]">
            <p>
              I work on AI strategy and governance at Viva Republica (Toss), on the
              shared platform the rest of the company builds on — how much AI
              capability to grow in-house versus source from providers, how to make
              guardrails and serving reliable enough that every team can trust them,
              and how to spend finite compute so it fuels growth instead of quietly
              draining away.
            </p>
            <p>
              In practice, that means staying close to where AI systems can fail, and
              to how the technology, regulation, and market keep moving.
            </p>
            <p>
              Before Toss, two years at NAVER’s AI Safety Center, where I built its
              safety policy and governance framework and Korea’s first compliance
              system for the AI Basic Act. I came to AI through data science, and
              before that, journalism.
            </p>
            <p>
              What pulls me in is the early stage of a problem, before there’s a
              playbook.
            </p>
          </div>

          <div className="font-sans text-[0.95rem] text-muted flex flex-wrap gap-y-1">
            <a
              href="mailto:sangwoo.heo1@gmail.com"
              className="text-muted hover:text-ink transition-colors"
            >
              Email
            </a>
            <span className="mx-2 text-faint">·</span>
            <a
              href="https://www.linkedin.com/in/sangwoo-heo-277897214/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-ink transition-colors"
            >
              LinkedIn
            </a>
            <span className="mx-2 text-faint">·</span>
            <Link href="/cv" className="text-muted hover:text-ink transition-colors">
              CV
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
