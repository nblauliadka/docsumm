# DocSumm — Cline Starter Prompt

Paste this as your first message to Cline to initialize the project.

---

## PROMPT

You are building **DocSumm** — a general-purpose AI document summarizer SaaS web app.

**Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn/ui + Supabase + OpenRouter API. Deploy target: Vercel.

**What DocSumm does:**
User uploads any document (PDF, photo, scan) → OCR extracts text → AI produces a structured summary → user sees organized output in cards or table format. Users can also build custom summary templates that define what fields to extract.

---

### TASK: Sprint 1 — Project Foundation

Initialize the project with the following setup:

1. **Create Next.js 14 app** with TypeScript, Tailwind, App Router, src/ directory off.

2. **Install dependencies:**
```bash
npx shadcn@latest init
npm install @supabase/supabase-js @supabase/ssr
npm install zustand react-hook-form @hookform/resolvers zod
npm install lucide-react
npm install pdf-parse
npm install @types/pdf-parse
```

3. **Create folder structure** exactly as defined:
```
app/
  (marketing)/page.tsx
  (marketing)/layout.tsx
  (app)/layout.tsx
  (app)/dashboard/page.tsx
  (app)/upload/page.tsx
  (app)/result/[id]/page.tsx
  (app)/templates/page.tsx
  (app)/settings/page.tsx
  auth/login/page.tsx
  auth/register/page.tsx
  auth/callback/route.ts
  api/summarize/route.ts
  api/documents/route.ts
  api/templates/route.ts
components/
  ui/           (shadcn components go here)
  layout/
    Sidebar.tsx
    TopNav.tsx
    MobileNav.tsx
    AppShell.tsx
  upload/
    Dropzone.tsx
    ProgressCard.tsx
    UploadOptions.tsx
  result/
    SummaryCard.tsx
    SummaryTable.tsx
    MetaChips.tsx
    TagList.tsx
    ActionBar.tsx
    ResultHeader.tsx
  template/
    TemplateBuilder.tsx
    FieldRow.tsx
    TemplatePreview.tsx
    TemplatePicker.tsx
  dashboard/
    StatGrid.tsx
    DocTable.tsx
  shared/
    ThemeToggle.tsx
    Logo.tsx
    EmptyState.tsx
    LoadingSpinner.tsx
    ContactCTA.tsx
    ContactModal.tsx
lib/
  supabase/
    client.ts
    server.ts
  openrouter/
    client.ts
    ocr.ts
    summarize.ts
  utils/
    fileToBase64.ts
    buildPrompt.ts
    formatSummary.ts
  types/
    index.ts
hooks/
  useUpload.ts
  useDocuments.ts
  useTemplates.ts
store/
  useAppStore.ts
middleware.ts
```

4. **Create lib/types/index.ts** with all TypeScript types:
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

5. **Create global CSS** (app/globals.css) with full design token system:
- CSS variables for light + dark mode (see DESIGN.md)
- Font imports: Space Grotesk + Inter from Google Fonts
- Base resets
- Dark mode via [data-theme="dark"] selector

6. **Create middleware.ts** for auth route protection:
- Protect all /app/* routes
- Redirect unauthenticated to /auth/login
- Redirect authenticated away from /auth/* to /app/dashboard

7. **Create lib/supabase/client.ts and server.ts** using @supabase/ssr.

8. **Create placeholder pages** (just return a div with the page name) for all routes so the app compiles without errors.

9. **Create .env.local.example:**
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
OPENROUTER_API_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Design guidelines:**
- Default theme: light (white background like Claude.ai)
- Accent color: #1B7A47 (green) light / #2ECC71 dark
- Font: Space Grotesk for headings, Inter for body
- Border radius: 10px default, 16px large
- No shadows — use borders for separation
- Mobile-first, responsive to desktop
- Min tap targets 44px

**After completing Sprint 1, confirm:**
- [ ] `npm run dev` starts without errors
- [ ] All routes exist (even if placeholder)
- [ ] Types file is complete
- [ ] Supabase clients created
- [ ] Middleware protecting /app/* routes
- [ ] Global CSS has all design tokens

Do not start Sprint 2 until Sprint 1 is confirmed working.
