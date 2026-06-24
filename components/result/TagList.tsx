export function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span 
          key={i}
          className="px-2 py-1 rounded-full text-xs"
          style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--accent)' }}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
