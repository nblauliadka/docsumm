export function ProgressCard({ 
  filename, 
  progress, 
  step 
}: { 
  filename: string
  progress: number
  step: string
}) {
  return (
    <div className="p-4 rounded-lg border" style={{ borderColor: 'var(--border)' }}>
      <p className="font-medium mb-2">{filename}</p>
      <div className="h-2 rounded-full mb-2" style={{ backgroundColor: 'var(--bg-3)' }}>
        <div className="h-full rounded-full transition-all" style={{ backgroundColor: 'var(--accent)', width: `${progress}%` }} />
      </div>
      <p className="text-sm" style={{ color: 'var(--text-2)' }}>{step}</p>
    </div>
  )
}
