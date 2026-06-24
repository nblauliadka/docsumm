import { TemplateField, OutputMode } from '@/lib/types'

export function TemplatePreview({ 
  fields, 
  mode 
}: { 
  fields: TemplateField[]
  mode: OutputMode
}) {
  return (
    <div className="p-4 rounded-lg border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-2)' }}>
      <h3 className="font-semibold mb-3">Preview</h3>
      <p className="text-sm" style={{ color: 'var(--text-2)' }}>
        Template Preview — Sprint 1 Placeholder
      </p>
    </div>
  )
}
