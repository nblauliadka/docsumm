export function LoadingSpinner({ size = 'md', label }: { size?: 'sm' | 'md' | 'lg'; label?: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="animate-spin rounded-full border-2 border-current border-t-transparent" 
           style={{ 
             width: size === 'sm' ? '16px' : size === 'lg' ? '32px' : '24px',
             height: size === 'sm' ? '16px' : size === 'lg' ? '32px' : '24px'
           }} 
      />
      {label && <p className="text-sm" style={{ color: 'var(--text-2)' }}>{label}</p>}
    </div>
  )
}
