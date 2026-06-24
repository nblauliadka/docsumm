export function ActionBar({ 
  onShare, 
  onExport, 
  onNew 
}: { 
  onShare: () => void
  onExport: () => void
  onNew: () => void
}) {
  return (
    <div className="flex gap-2">
      <button onClick={onShare} className="px-4 py-2 rounded-lg border" style={{ borderColor: 'var(--border)' }}>
        Share
      </button>
      <button onClick={onExport} className="px-4 py-2 rounded-lg border" style={{ borderColor: 'var(--border)' }}>
        Export PDF
      </button>
      <button onClick={onNew} className="px-4 py-2 rounded-lg text-white" style={{ backgroundColor: 'var(--accent)' }}>
        New Document
      </button>
    </div>
  )
}
