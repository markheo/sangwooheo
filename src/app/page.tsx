import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Tag from '@/components/Tag'
import { writings } from '@/data/writing'

export const metadata: Metadata = {
  title: 'Sangwoo Heo',
  description: 'Alignment Strategist & AI Safety Policy Lead at NAVER Corporation.',
}

export default function AboutPage() {
  const featured = writings.slice(0, 1)

  return (
    <>
      {/* Hero */}
      <section className="flex flex-col gap-5 items-start mb-14 sm:flex-row sm:gap-10">
        <div className="flex-shrink-0">
          <Image
            src="/avatar.jpg"
            alt="Sangwoo Heo"
            width={130}
            height={130}
            className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] rounded-[5%] object-cover object-[center_5%] ring-1 ring-border"
            priority
          />
        </div>

        <div>
          <h1 className="text-[2rem] font-semibold mb-[0.35rem] tracking-[-0.03em] text-ink">
            Sangwoo Heo{' '}
            <span className="text-[1.1rem] font-normal text-subtle">허상우</span>
          </h1>
          <p className="text-[0.9rem] text-muted mb-[0.2rem] font-medium">
            Alignment Strategist · AI Safety Policy Lead
          </p>
          <p className="text-[0.9rem] text-muted mb-5">
            NAVER Corporation, AI Safety Center &nbsp;·&nbsp; Seoul, Korea
          </p>

          {/* Bio */}
          <div className="text-[0.97rem] text-ink mb-10 space-y-[0.9rem]">
            <p>
              I work on AI Safety Policy at NAVER Corporation&apos;s AI Safety Center,
              focusing on the intersection of AI capabilities and the norms, ethics,
              and governance structures of human society. Over the past two years,
              I have contributed to building the company&apos;s AI Safety Policy &amp; Governance
              Framework — covering risk assessment standards for model deployment,
              end-to-end safety red-teaming, and alignment with Korea&apos;s AI Basic Act.
            </p>
            <p>
              I am particularly interested in questions that don&apos;t yet have an answer —
              how AI systems should be designed to align with human values, and what
              new institutional structures that requires. I enjoy the early stage of
              a problem, when the shape of it is still unclear and there is no
              existing playbook to follow. Figuring out what needs to be built,
              and then building it, is what I find most rewarding.
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

          {/* Contact */}
          <div className="font-sans text-[0.84rem] text-muted flex flex-wrap gap-y-1">
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

      {/* Writing preview */}
      <section className="mb-10">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-subtle mb-4 pb-3 border-b border-border">
          Writing
        </p>

        {featured.map((item) => (
          <div
            key={item.id}
            className="group mb-1 -mx-3 px-3 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-150 border-b border-border-light last:border-b-0"
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

        <p className="font-sans text-[0.85rem] mt-3">
          <Link href="/writing" className="text-ink underline underline-offset-[3px] hover:text-muted transition-colors">
            All writing →
          </Link>
        </p>
      </section>
    </>
  )
}
