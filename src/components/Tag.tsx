import type { TagType } from '@/data/writing'

interface TagProps {
  type: TagType
  label: string
}

const colorMap: Record<TagType, string> = {
  research: 'bg-amber-50 text-amber-700',
  policy:   'bg-blue-50 text-blue-700',
  report:   'bg-emerald-50 text-emerald-700',
}

export default function Tag({ type, label }: TagProps) {
  return (
    <span
      className={`inline-block font-sans text-[0.72rem] font-semibold uppercase tracking-[0.05em] px-[0.55em] py-[0.15em] rounded-[3px] align-middle ml-[0.4rem] ${colorMap[type]}`}
    >
      {label}
    </span>
  )
}
