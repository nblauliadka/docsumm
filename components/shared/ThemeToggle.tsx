'use client'

import { useAppStore } from '@/store/useAppStore'

export function ThemeToggle() {
  const { theme, toggleTheme } = useAppStore()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-[var(--bg-2)] transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
