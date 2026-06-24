export function EmptyState({ 
  title, 
  description, 
  action 
}: { 
  title: string
  description: string
  action?: React.ReactNode 
}) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-4" style={{ color: 'var(--text-2)' }}>{description}</p>
      {action}
    </div>
  )
}
