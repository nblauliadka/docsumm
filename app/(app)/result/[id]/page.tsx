export default function ResultPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Result</h1>
        <p style={{ color: 'var(--text-3)' }}>Document ID: {params.id}</p>
        <p style={{ color: 'var(--text-3)' }}>Result Page — Sprint 1 Placeholder</p>
      </div>
    </div>
  )
}
