# DocSumm — Build Planner

## Phase 1 — MVP (Target: 2–3 weeks solo)

### Sprint 1 — Foundation (Days 1–3)
- [ ] Init Next.js 14 project (TypeScript + Tailwind + App Router)
- [ ] Install & configure shadcn/ui
- [ ] Setup Supabase project
  - [ ] Create all tables (profiles, documents, templates, contact_requests)
  - [ ] Enable RLS on all tables
  - [ ] Create storage bucket (documents)
  - [ ] Setup auth (email/password + magic link)
- [ ] Setup OpenRouter account + get API key
- [ ] Setup Vercel project + connect GitHub repo
- [ ] Configure .env.local variables:
  - NEXT_PUBLIC_SUPABASE_URL
  - NEXT_PUBLIC_SUPABASE_ANON_KEY
  - SUPABASE_SERVICE_ROLE_KEY
  - OPENROUTER_API_KEY
- [ ] Create global CSS with design tokens (DESIGN.md)
- [ ] Build base components: Logo, ThemeToggle, LoadingSpinner

---

### Sprint 2 — Auth + Shell (Days 4–5)
- [ ] Auth pages: Login, Register
- [ ] Supabase auth integration (client + server)
- [ ] Middleware: protect /app/* routes
- [ ] Profile auto-create on register (trigger or API route)
- [ ] AppShell: Sidebar + TopNav + MobileNav
- [ ] Route: /app/dashboard (empty state first)

---

### Sprint 3 — Upload + OCR + Summarize (Days 6–9)
CORE FEATURE — highest priority

- [ ] Upload page UI: Dropzone + UploadOptions + ProgressCard
- [ ] File upload to Supabase Storage
- [ ] API route: POST /api/summarize
  - [ ] Receive file from storage
  - [ ] if image: call Gemini Vision via OpenRouter (OCR)
  - [ ] if PDF: extract text via pdf-parse
  - [ ] Build default summary prompt
  - [ ] Call summarize model via OpenRouter
  - [ ] Parse JSON response
  - [ ] Save to documents table (summary_json)
- [ ] Handle errors + status updates (processing → done/error)
- [ ] Redirect to /app/result/[id] after done

---

### Sprint 4 — Result Page (Days 10–12)
- [ ] Result page: fetch document by ID
- [ ] ResultHeader component
- [ ] MetaChips + TagList
- [ ] ActionBar (Share, Export, New)
- [ ] SummaryCard blocks (Overview, Critical, Actions, Dates)
- [ ] SummaryTable component (for table output mode)
- [ ] Export to PDF (window.print() or html2pdf)
- [ ] Share link (copy URL to clipboard)

---

### Sprint 5 — Dashboard (Days 13–14)
- [ ] StatGrid (total docs, this month, avg pages)
- [ ] DocTable (list all user documents)
- [ ] Status badges
- [ ] Click row → go to result
- [ ] Empty state (first-time user)
- [ ] Delete document

---

### Sprint 6 — Custom Template / Build Your Own Summary Model (Days 15–18)
Bang Imam's key feature request.

- [ ] Templates list page (/app/templates)
- [ ] TemplateBuilder component
  - [ ] Name input
  - [ ] Add/remove/reorder fields (FieldRow)
  - [ ] Output mode toggle (card / table)
  - [ ] Live preview (TemplatePreview)
  - [ ] Save to templates table
- [ ] TemplatePicker on Upload page
- [ ] API route: build prompt from custom template fields
- [ ] Render SummaryTable when output_mode = 'table'
- [ ] ContactCTA section on result page
- [ ] ContactModal (form → contact_requests table)

---

### Sprint 7 — Landing Page + Polish (Days 19–21)
- [ ] Landing page (marketing)
  - [ ] Hero section
  - [ ] Stats
  - [ ] How it works (3 steps)
  - [ ] Feature highlights
  - [ ] CTA sections
- [ ] SEO meta tags + OG image
- [ ] Favicon + logo finalized
- [ ] Mobile QA (test on real device)
- [ ] Dark mode QA
- [ ] Error boundaries
- [ ] Toast notifications (upload success, copy link, etc)
- [ ] Loading states everywhere

---

### Sprint 8 — Deploy + Launch (Day 22)
- [ ] Final Vercel deploy
- [ ] Set environment variables in Vercel
- [ ] Supabase production config
- [ ] Custom domain (if ready)
- [ ] Smoke test all flows end-to-end on mobile + desktop
- [ ] Share to bang Imam for review

---

## Phase 2 — Post-MVP (After client feedback)
- [ ] Maritime domain mode (domain-specific prompt templates)
- [ ] Batch upload (multiple documents at once)
- [ ] Team/workspace support (multiple users)
- [ ] API access (for enterprise integration)
- [ ] Webhook notifications
- [ ] Usage analytics dashboard
- [ ] Billing integration (Stripe or Midtrans for IDR)
- [ ] White-label mode (for maritime company)

---

## Environment Variables Needed

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# OpenRouter
OPENROUTER_API_KEY=

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Contact (optional)
CONTACT_EMAIL=hello@docsumm.io
```

---

## AI Model Config (OpenRouter)

```typescript
// OCR (image → text)
model: "google/gemini-2.0-flash-exp"
task: vision — extract all text from document image

// Summarize (text → structured JSON)
model: "google/gemini-flash-1.5"  // fast + cheap
  OR
model: "mistralai/mistral-small"   // alternative

// Response format: always JSON
// Max tokens: 2000 for summary
// Temperature: 0.2 (consistent, factual output)
```

---

## Prompt Strategy

### Default Summary Prompt
```
You are a professional document analyst.
Extract and summarize the following document.

Return a valid JSON object with this exact structure:
{
  "mode": "card",
  "overview": "2-3 sentence summary of the document",
  "critical_points": ["point 1", "point 2"],
  "action_items": ["action 1", "action 2"],
  "key_dates": [{"label": "date label", "value": "date value"}],
  "metadata": {
    "document_type": "type of document",
    "parties": ["party 1", "party 2"],
    "location": "location if mentioned",
    "tags": ["tag1", "tag2", "tag3"]
  }
}

Document text:
{DOCUMENT_TEXT}
```

### Custom Template Prompt
```
You are a professional document analyst.
Extract the following specific information from the document.

Return a valid JSON object with this exact structure:
{
  "mode": "table",
  "template_id": "{TEMPLATE_ID}",
  "rows": [
    {FIELDS_AS_ROWS}
  ]
}

Fields to extract:
{FIELDS_LIST}

Document text:
{DOCUMENT_TEXT}
```

---

## Risk & Mitigation

| Risk | Mitigation |
|------|-----------|
| OCR quality bad on low-res photos | Add image quality warning + suggestion to retake |
| AI returns invalid JSON | Wrap in try/catch, retry once, fallback to raw text |
| Large PDF (100+ pages) timeout | Chunk text, summarize in parts, merge |
| OpenRouter rate limit | Add retry with backoff |
| Supabase storage size | Set 50MB limit on client side before upload |
