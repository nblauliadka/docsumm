import { Document } from '@/lib/types'

export function DocTable({ 
  documents, 
  onRowClick 
}: { 
  documents: Document[]
  onRowClick: (id: string) => void
}) {
  return (
    <div className="rounded-lg border overflow-hidden" style={{ borderColor: 'var(--border)' }}>
      <table className="w-full">
        <thead>
          <tr style={{ backgroundColor: 'var(--bg-2)' }}>
            <th className="p-3 text-left text-sm font-medium">Name</th>
            <th className="p-3 text-left text-sm font-medium hidden md:table-cell">Date</th>
            <th className="p-3 text-left text-sm font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {documents.length === 0 ? (
            <tr>
              <td colSpan={3} className="p-6 text-center" style={{ color: 'var(--text-2)' }}>
                No documents yet
              </td>
            </tr>
          ) : (
            documents.map((doc) => (
              <tr 
                key={doc.id}
                onClick={() => onRowClick(doc.id)}
                className="border-t cursor-pointer hover:bg-[var(--bg-2)] transition-colors"
                style={{ borderColor: 'var(--border)' }}
              >
                <td className="p-3">{doc.title}</td>
                <td className="p-3 hidden md:table-cell">{new Date(doc.created_at).toLocaleDateString()}</td>
                <td className="p-3">
                  <span className="px-2 py-1 rounded-full text-xs" style={{ 
                    backgroundColor: doc.status === 'done' ? 'var(--accent-bg)' : doc.status === 'error' ? 'var(--danger-bg)' : 'var(--warn-bg)',
                    color: doc.status === 'done' ? 'var(--accent)' : doc.status === 'error' ? 'var(--danger)' : 'var(--warn)'
                  }}>
                    {doc.status}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
