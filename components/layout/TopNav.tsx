import { Logo } from '@/components/shared/Logo'
import { ThemeToggle } from '@/components/shared/ThemeToggle'

export function TopNav() {
  return (
    <nav 
      className="h-14 border-b px-4 flex items-center justify-between sticky top-0 z-40" 
      style={{ 
        borderColor: 'var(--border)',
        backgroundColor: 'var(--bg)'
      }}
    >
      <Logo />
      <ThemeToggle />
    </nav>
  )
}
