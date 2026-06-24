import { Logo } from '@/components/shared/Logo'

export function Sidebar({ activeRoute }: { activeRoute?: string }) {
  return (
    <aside className="w-48 border-r p-4 hidden md:flex flex-col" style={{ borderColor: 'var(--border)' }}>
      <Logo />
      <nav className="mt-8 flex-1">
        <div className="text-sm" style={{ color: 'var(--text-2)' }}>
          Sidebar — Sprint 1 Placeholder
        </div>
      </nav>
    </aside>
  )
}
