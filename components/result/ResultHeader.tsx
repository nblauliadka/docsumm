export function ResultHeader({ 
  filename, 
  pageCount, 
  processedIn, 
  date 
}: { 
  filename: string
  pageCount?: number
  processedIn?: number
  date: string
}) {
  return (
    <div className="p-4 rounded-lg border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-2)' }}>
      <h2 className="font-semibold mb-2">{filename}</h2>
      <div className="flex gap-4 text-sm" style={{ color: 'var(--text-2)' }}>
        {pageCount && <span>{pageCount} pages</span>}
        {processedIn && <span>Processed in {processedIn}s</span>}
        <span>{date}</span>
      </div>
    </div>
  )
}
