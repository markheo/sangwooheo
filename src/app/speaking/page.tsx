import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Speaking',
}

export default function SpeakingPage() {
  return (
    <>
      <h1 className="text-[1.75rem] font-semibold mb-10 tracking-[-0.03em]">Speaking</h1>
      <div className="mt-16 text-center">
        <p className="text-[0.95rem] text-subtle">No talks scheduled yet.</p>
        <p className="text-[0.84rem] text-faint mt-1">Check back later.</p>
      </div>
    </>
  )
}
