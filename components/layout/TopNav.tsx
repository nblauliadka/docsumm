import { Logo } from '@/components/shared/Logo'
import { ThemeToggle } from '@/components/shared/ThemeToggle'

export function TopNav() {
  return (
    <nav className="h-14 border-b px-4 flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
      <Logo />
      <ThemeToggle />
    </nav>
  )
}
