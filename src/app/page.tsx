import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sangwoo Heo',
  description: 'Human-AI Alignment Strategist & AI Governance at Viva Republica (Toss).',
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
            Human-AI Alignment Strategist · AI Governance
          </p>
          <p className="text-[0.99rem] text-muted mb-7">
            Viva Republica (Toss) &nbsp;·&nbsp; Seoul, Korea
          </p>

          <div className="text-[1.05rem] text-ink mb-12 space-y-5 leading-[1.84]">
            <p>
              I work on AI governance at Viva Republica (Toss), at the boundary where AI
              capabilities meet the norms, ethics, and institutions human societies rely
              on — who sets the rules, how they’re enforced, and what gets lost when
              they lag behind. Before this, two years at NAVER’s AI Safety Center
              building its safety policy and governance framework: risk assessment for
              model deployment, safety red-teaming, and alignment with Korea’s AI
              Basic Act.
            </p>
            <p>
              Concretely, I own the end-to-end AI safety &amp; risk management
              picture: driving safeguards from research into production across
              engineering and policy, and building regulation-grounded evaluation
              and risk controls — red-teaming, jailbreak and tampering tests, and a
              living risk taxonomy.
            </p>
            <p>
              What draws me is embedding human values — philosophical, legal, social —
              into AI systems, and the early stage of a problem, when its shape is still
              unclear and there is no playbook to follow.
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
