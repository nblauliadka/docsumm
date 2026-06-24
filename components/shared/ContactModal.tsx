'use client'

export function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="w-full max-w-md p-6 rounded-xl" style={{ backgroundColor: 'var(--bg)' }}>
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <p className="text-sm mb-4" style={{ color: 'var(--text-2)' }}>
          Contact form — Sprint 1 Placeholder
        </p>
        <button 
          onClick={onClose}
          className="px-4 py-2 rounded-lg border"
          style={{ borderColor: 'var(--border)' }}
        >
          Close
        </button>
      </div>
    </div>
  )
}
