export function UploadOptions({ onSelect }: { onSelect: (type: 'camera' | 'scanner') => void }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <button 
        onClick={() => onSelect('camera')}
        className="p-6 rounded-lg border hover:border-current transition-colors"
        style={{ borderColor: 'var(--border)' }}
      >
        📷 Camera
      </button>
      <button 
        onClick={() => onSelect('scanner')}
        className="p-6 rounded-lg border hover:border-current transition-colors"
        style={{ borderColor: 'var(--border)' }}
      >
        📄 Scanner
      </button>
    </div>
  )
}
