import { Sidebar } from './Sidebar'
import { TopNav } from './TopNav'
import { MobileNav } from './MobileNav'

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <TopNav />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
      <MobileNav />
    </div>
  )
}
