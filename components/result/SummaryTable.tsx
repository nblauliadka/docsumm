export function SummaryTable({ rows }: { rows: { key: string; label: string; value: string }[] }) {
  return (
    <div className="rounded-lg border overflow-hidden" style={{ borderColor: 'var(--border)' }}>
      <table className="w-full">
        <tbody>
          {rows.map((row) => (
            <tr key={row.key} className="border-b last:border-b-0" style={{ borderColor: 'var(--border)' }}>
              <td className="p-3 font-medium" style={{ backgroundColor: 'var(--bg-2)' }}>{row.label}</td>
              <td className="p-3">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
