import { Template } from '@/lib/types'

// Build AI prompt dynamically based on template or default mode
export function buildPrompt(
  rawText: string,
  template?: Template
): string {
  if (template) {
    // Custom template mode
    const fieldDescriptions = template.fields
      .map((f) => `- ${f.label} (${f.key}): ${f.description}${f.required ? ' [REQUIRED]' : ''}`)
      .join('\n')

    return `Extract the following information from this document and return as JSON:

${fieldDescriptions}

Document text:
${rawText}

Return JSON in this format:
{
  "mode": "table",
  "template_id": "${template.id}",
  "rows": [
    { "key": "field_key", "label": "Field Label", "value": "extracted value" }
  ]
}`
  } else {
    // Default card mode
    return `Analyze this document and extract structured information. Return JSON in this exact format:

{
  "mode": "card",
  "overview": "Brief summary in 2-3 sentences",
  "critical_points": ["List of critical points"],
  "action_items": ["List of action items"],
  "key_dates": [{ "label": "Date label", "value": "Date value" }],
  "metadata": {
    "document_type": "Type of document",
    "parties": ["List of parties involved"],
    "location": "Location mentioned",
    "tags": ["Relevant tags"]
  }
}

Document text:
${rawText}`
  }
}
