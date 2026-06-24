'use client'

import Link from 'next/link'
import { StatGrid } from '@/components/dashboard/StatGrid'
import { DocTable } from '@/components/dashboard/DocTable'
import { EmptyState } from '@/components/shared/EmptyState'
import { useDocuments } from '@/hooks/useDocuments'

export default function DashboardPage() {
  const { documents, loading } = useDocuments()

  const stats = [
    { label: 'Total Documents', value: documents.length },
    { label: 'This Month', value: 0 },
    { label: 'Avg Pages', value: 0 },
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-current border-t-transparent mx-auto mb-4" 
               style={{ color: 'var(--accent)' }} 
          />
          <p style={{ color: 'var(--text-2)' }}>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-display)' }}>
            Dashboard
          </h1>
          <p style={{ color: 'var(--text-2)' }}>
            Welcome back! Here's your document overview.
          </p>
        </div>
        
        <Link
          href="/app/upload"
          className="px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90 inline-flex items-center gap-2"
          style={{ backgroundColor: 'var(--accent)' }}
        >
          <span>📤</span>
          <span>Upload</span>
        </Link>
      </div>

      {/* Stats */}
      <div className="mb-8">
        <StatGrid stats={stats} />
      </div>

      {/* Recent Documents */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Recent Documents</h2>
        
        {documents.length === 0 ? (
          <EmptyState
            title="No documents yet"
            description="Upload your first document to get started with AI-powered summaries."
            action={
              <Link
                href="/app/upload"
                className="px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90 inline-flex items-center gap-2"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                <span>📤</span>
                <span>Upload Document</span>
              </Link>
            }
          />
        ) : (
          <DocTable 
            documents={documents}
            onRowClick={(id) => window.location.href = `/app/result/${id}`}
          />
        )}
      </div>

      {/* Quick Tips */}
      {documents.length === 0 && (
        <div className="mt-12 p-6 rounded-lg border" style={{ 
          borderColor: 'var(--border)',
          backgroundColor: 'var(--bg-2)'
        }}>
          <h3 className="font-semibold mb-3">💡 Quick Tips</h3>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--text-2)' }}>
            <li>• Upload PDFs, photos, or scanned documents</li>
            <li>• AI extracts text automatically via OCR</li>
            <li>• Get structured summaries in seconds</li>
            <li>• Create custom templates for specific document types</li>
          </ul>
        </div>
      )}
    </div>
  )
}
