import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Speaking',
}

export default function SpeakingPage() {
  return (
    <>
      <h1 className="text-[2rem] sm:text-[2.2rem] font-semibold mb-12 tracking-[-0.03em] leading-[1.16]">Speaking</h1>
      <div className="mt-20 text-center border border-border-light rounded-2xl py-12 px-6 bg-white">
        <p className="text-[1.05rem] text-subtle">No talks scheduled yet.</p>
        <p className="text-[0.93rem] text-faint mt-1.5">Check back later.</p>
      </div>
    </>
  )
}
