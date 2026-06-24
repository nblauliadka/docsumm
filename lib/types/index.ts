// DocSumm — TypeScript Types

export type DocumentStatus = 'processing' | 'done' | 'error'
export type OutputMode = 'card' | 'table'
export type Plan = 'free' | 'pro'

export interface Profile {
  id: string
  full_name: string
  email: string
  avatar_url?: string
  plan: Plan
  created_at: string
}

export interface TemplateField {
  key: string
  label: string
  description: string
  required: boolean
}

export interface Template {
  id: string
  user_id: string
  name: string
  description?: string
  fields: TemplateField[]
  output_mode: OutputMode
  is_default: boolean
  created_at: string
}

export interface SummaryCardOutput {
  mode: 'card'
  overview: string
  critical_points: string[]
  action_items: string[]
  key_dates: { label: string; value: string }[]
  metadata: {
    document_type: string
    parties: string[]
    location: string
    tags: string[]
  }
}

export interface SummaryTableOutput {
  mode: 'table'
  template_id: string
  rows: { key: string; label: string; value: string }[]
}

export type SummaryOutput = SummaryCardOutput | SummaryTableOutput

export interface Document {
  id: string
  user_id: string
  title: string
  file_url: string
  file_type: 'pdf' | 'image'
  page_count?: number
  status: DocumentStatus
  raw_text?: string
  summary_json?: SummaryOutput
  template_id?: string
  output_mode: OutputMode
  created_at: string
  updated_at: string
}
