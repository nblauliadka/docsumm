export function ContactCTA() {
  return (
    <div className="p-6 rounded-lg border" style={{ 
      borderColor: 'var(--border)',
      backgroundColor: 'var(--bg-2)'
    }}>
      <h3 className="font-semibold mb-2">Mau custom model summary sendiri?</h3>
      <p className="text-sm mb-4" style={{ color: 'var(--text-2)' }}>
        Hubungi kami untuk membuat template khusus sesuai kebutuhan bisnis Anda.
      </p>
      <button className="px-4 py-2 rounded-lg text-white" style={{ backgroundColor: 'var(--accent)' }}>
        Contact Us
      </button>
    </div>
  )
}
