import { Template } from '@/lib/types'

export function TemplatePicker({ 
  templates, 
  onSelect 
}: { 
  templates: Template[]
  onSelect: (id: string) => void
}) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold mb-2">Select Template</h3>
      {templates.length === 0 ? (
        <p className="text-sm" style={{ color: 'var(--text-2)' }}>No templates available</p>
      ) : (
        templates.map((template) => (
          <button 
            key={template.id}
            onClick={() => onSelect(template.id)}
            className="w-full p-3 rounded-lg border text-left hover:border-current transition-colors"
            style={{ borderColor: 'var(--border)' }}
          >
            <p className="font-medium text-sm">{template.name}</p>
            {template.description && (
              <p className="text-xs mt-1" style={{ color: 'var(--text-2)' }}>{template.description}</p>
            )}
          </button>
        ))
      )}
    </div>
  )
}
