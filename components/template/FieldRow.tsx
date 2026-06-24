import { TemplateField } from '@/lib/types'

export function FieldRow({ 
  field, 
  onUpdate, 
  onRemove 
}: { 
  field: TemplateField
  onUpdate: (field: TemplateField) => void
  onRemove: () => void
}) {
  return (
    <div className="p-3 rounded-lg border flex items-center gap-3" style={{ borderColor: 'var(--border)' }}>
      <div className="flex-1">
        <p className="font-medium text-sm">{field.label}</p>
        <p className="text-xs" style={{ color: 'var(--text-2)' }}>{field.description}</p>
      </div>
      <button onClick={onRemove} className="text-sm" style={{ color: 'var(--danger)' }}>Remove</button>
    </div>
  )
}
