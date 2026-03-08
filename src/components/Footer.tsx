export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="font-sans text-[0.86rem] text-subtle py-9 border-t border-border">
      <div className="w-full mx-auto max-w-[var(--page-max-width)] px-5 sm:px-8 flex items-center justify-between">
        <p className="text-faint">© {year} Sangwoo Heo</p>
        <p className="text-faint">Seoul, Korea</p>
      </div>
    </footer>
  )
}
