export function MetaChips({ items }: { items: { icon?: string; label: string }[] }) {
  return (
    <div className="flex gap-2 overflow-x-auto">
      {items.map((item, i) => (
        <div 
          key={i}
          className="px-3 py-1 rounded-full text-sm whitespace-nowrap"
          style={{ backgroundColor: 'var(--bg-2)', color: 'var(--text-2)' }}
        >
          {item.icon} {item.label}
        </div>
      ))}
    </div>
  )
}
