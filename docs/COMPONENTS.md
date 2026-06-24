# DocSumm — Reusable Components

## Naming Convention
- PascalCase for component files
- All components in /components/{category}/
- shadcn/ui base components in /components/ui/ (don't modify)

---

## Layout Components

### `<Logo />`
Props: size ('sm' | 'md' | 'lg'), showText (boolean)
Usage: Sidebar, TopNav, Auth pages

### `<Sidebar />`
- Desktop only (hidden < 580px)
- Props: activeRoute (string)
- Items: Dashboard, Upload, Documents, Settings
- Logout button at bottom

### `<TopNav />`
- Mobile: logo + hamburger + theme toggle
- Desktop: logo + theme toggle
- Sticky, height 52px

### `<MobileNav />`
- Bottom tab bar (mobile only)
- 4 items: Dashboard, Upload, Docs, Settings
- Active state with accent color

### `<AppShell />`
- Wraps all authenticated pages
- Composes Sidebar + TopNav + MobileNav
- Handles layout switching based on screen size

### `<ThemeToggle />`
- Icon button: sun/moon
- Toggles data-theme on <html>
- Persists to localStorage

---

## Upload Components

### `<Dropzone />`
Props:
- onFileSelect: (file: File) => void
- accept: string[] (default: pdf, jpg, png, tiff)
- maxSize: number (default: 50MB)
State: idle | dragging | selected
Shows: icon, label, browse button, file type hint

### `<UploadOptions />`
Props: onSelect: (type: 'camera' | 'scanner') => void
Two cards: Camera, Scanner
Mobile-first layout (grid 2 cols)

### `<ProgressCard />`
Props:
- filename: string
- progress: number (0–100)
- step: string (current step label)
Shows animated progress bar + step text

---

## Result Components

### `<SummaryCard />`
Props:
- label: string
- icon: string
- variant: 'default' | 'danger' | 'success' | 'warning'
- children: ReactNode
Renders one semantic block with colored left border + eyebrow label

### `<SummaryTable />`
Props:
- rows: { key: string, label: string, value: string }[]
Full-width table, mobile-responsive (stacks to key-value)

### `<MetaChips />`
Props: items: { icon: string, label: string }[]
Renders horizontal scrollable chip list

### `<TagList />`
Props: tags: string[]
Renders pill tags, wrapping

### `<ActionBar />`
Props:
- onShare: () => void
- onExport: () => void
- onNew: () => void
Three outline buttons: Share, Export PDF, New document

### `<ResultHeader />`
Props:
- filename: string
- pageCount: number
- processedIn: number (seconds)
- date: string
Card with file icon + metadata

---

## Template Components (Build Your Own Summary Model)

### `<TemplateBuilder />`
Main component for creating/editing a custom summary template.
State: list of FieldRow, output mode (card/table), template name
Actions: add field, remove field, reorder (drag), save

### `<FieldRow />`
Props:
- field: { key, label, description, required }
- onUpdate: (field) => void
- onRemove: () => void
One row in the template builder — label input, description input, required toggle

### `<TemplatePreview />`
Props: fields: TemplateField[], mode: 'card' | 'table'
Live preview of what the output will look like with dummy data

### `<TemplatePicker />`
Props: templates: Template[], onSelect: (id) => void
Shown on Upload page — let user pick a template before processing

---

## Dashboard Components

### `<StatGrid />`
Props: stats: { label: string, value: string | number }[]
Renders 3-col responsive stat cards

### `<DocTable />`
Props:
- documents: Document[]
- onRowClick: (id: string) => void
Responsive table (3-col desktop, 2-col mobile)
Columns: Name, Date (hidden mobile), Status badge

### `<EmptyState />`
Props: title: string, description: string, action?: ReactNode
Centered empty state with icon

---

## Shared / Utility Components

### `<LoadingSpinner />`
Props: size ('sm' | 'md' | 'lg'), label?: string

### `<StatusBadge />`
Props: status: 'processing' | 'done' | 'error'
Maps to yellow/green/red badge

### `<ContactCTA />`
Used at bottom of result page (bang Imam's request)
Card with: "Mau custom model summary sendiri?"
CTA button → opens contact modal or mailto

### `<ContactModal />`
Form: name, email, company, message
Submits to contact_requests table
Shows success state after submit

---

## TypeScript Types (lib/types/index.ts)

```typescript
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
```
