export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {/* TODO: Add AppShell with Sidebar, TopNav, MobileNav in Sprint 2 */}
      {children}
    </div>
  )
}
