export function StatGrid({ stats }: { stats: { label: string; value: string | number }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, i) => (
        <div key={i} className="p-4 rounded-lg border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-2)' }}>
          <p className="text-sm mb-1" style={{ color: 'var(--text-2)' }}>{stat.label}</p>
          <p className="text-2xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  )
}
