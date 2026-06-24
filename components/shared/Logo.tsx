export function Logo({ size = 'md', showText = true }: { size?: 'sm' | 'md' | 'lg'; showText?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="font-bold" style={{ fontFamily: 'var(--font-display)' }}>
        {showText && 'DocSumm'}
      </div>
    </div>
  )
}
