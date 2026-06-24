import { create } from 'zustand'

interface AppState {
  theme: 'light' | 'dark'
  sidebarOpen: boolean
  toggleTheme: () => void
  setSidebarOpen: (open: boolean) => void
}

// Global Zustand store
export const useAppStore = create<AppState>((set) => ({
  theme: 'light',
  sidebarOpen: true,
  
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light'
      // Update data-theme attribute on html element
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', newTheme)
        localStorage.setItem('theme', newTheme)
      }
      return { theme: newTheme }
    }),
  
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
}))
