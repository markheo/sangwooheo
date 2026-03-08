import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sangwoo Heo',
  description: 'Human-AI Alignment Strategist & AI Safety Policy Lead at NAVER Corporation.',
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
            Human-AI Alignment Strategist · AI Safety Policy Lead
          </p>
          <p className="text-[0.99rem] text-muted mb-7">
            NAVER Corporation, AI Safety Center &nbsp;·&nbsp; Seoul, Korea
          </p>

          <div className="text-[1.05rem] text-ink mb-12 space-y-5 leading-[1.84]">
            <p>
              I work on AI Safety Policy at NAVER Corporation&apos;s AI Safety Center,
              at the boundary where AI capabilities meet the norms, ethics, and governance
              structures of human society. Over the past two years, I have contributed to
              building the company&apos;s AI Safety Policy &amp; Governance Framework —
              covering risk assessment standards for model deployment, end-to-end safety
              red-teaming, and alignment with Korea&apos;s AI Basic Act.
            </p>
            <p>
              My interests span AI safety, alignment, and the broader question of how human
              values — philosophical, legal, and social — can be embedded into AI systems.
              I am drawn to the collision point between advancing AI and the institutions
              and norms that human societies rely on: who sets the rules, how they&apos;re
              enforced, and what gets lost when they lag behind. I enjoy the early stage of
              a problem, when the shape of it is still unclear and there is no existing
              playbook to follow.
            </p>
            <p>
              Before moving into tech, I spent three years as a staff writer at{' '}
              <em>Chosun Ilbo</em>, covering government social policy —
              including Korea&apos;s early COVID-19 response and national pension reform. I later completed
              a master&apos;s in data science at Seoul National University, where I published
              first-author research on hallucination detection in LLM-based systems —
              developing an automated pipeline that decomposes model outputs and evaluates
              each sentence for factual consistency. The combination —
              a journalist&apos;s instinct for framing, sensitivity to institutional context,
              and technical training — shapes how I approach new problems.
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
