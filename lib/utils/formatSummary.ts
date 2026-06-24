import { SummaryOutput } from '@/lib/types'

// Format summary JSON for display
export function formatSummary(summary: SummaryOutput): string {
  if (summary.mode === 'card') {
    return `Overview: ${summary.overview}

Critical Points:
${summary.critical_points.map((p, i) => `${i + 1}. ${p}`).join('\n')}

Action Items:
${summary.action_items.map((a, i) => `${i + 1}. ${a}`).join('\n')}

Key Dates:
${summary.key_dates.map((d) => `- ${d.label}: ${d.value}`).join('\n')}

Document Type: ${summary.metadata.document_type}
Location: ${summary.metadata.location}
Tags: ${summary.metadata.tags.join(', ')}`
  } else {
    return summary.rows.map((r) => `${r.label}: ${r.value}`).join('\n')
  }
}
