'use client'

export function Dropzone({ 
  onFileSelect, 
  accept = ['pdf', 'jpg', 'png', 'tiff'],
  maxSize = 50 * 1024 * 1024 
}: { 
  onFileSelect: (file: File) => void
  accept?: string[]
  maxSize?: number
}) {
  return (
    <div className="border-2 border-dashed rounded-lg p-12 text-center" style={{ borderColor: 'var(--border)' }}>
      <p style={{ color: 'var(--text-2)' }}>Dropzone — Sprint 1 Placeholder</p>
    </div>
  )
}
