# DocSumm — Architecture

## Overview
DocSumm is a general-purpose AI document summarizer SaaS.
Upload any document (PDF, image, scan) → OCR → AI structured summary → exportable output.
Built to be adapted into domain-specific verticals (maritime, legal, medical, etc).

## Tech Stack

### Frontend
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui (base components)
- Zustand (client state)
- React Hook Form + Zod (forms & validation)

### Backend
- Next.js API Routes (serverless)
- Supabase (Auth + PostgreSQL + Storage + Row Level Security)
- OpenRouter API (AI model routing)
  - Vision/OCR: google/gemini-2.0-flash-exp
  - Summarizing: google/gemini-flash-1.5 or mistral/mistral-small

### Infrastructure
- Vercel (deploy + edge functions)
- Supabase (managed DB + file storage)
- OpenRouter (unified AI gateway)

## Folder Structure

```
docsumm/
├── app/
│   ├── (marketing)/          # Public pages (no auth)
│   │   ├── page.tsx          # Landing
│   │   └── layout.tsx
│   ├── (app)/                # Auth-protected pages
│   │   ├── layout.tsx        # App shell with sidebar
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── upload/
│   │   │   └── page.tsx
│   │   ├── result/
│   │   │   └── [id]/page.tsx
│   │   ├── templates/        # Custom Summary Templates
│   │   │   ├── page.tsx      # List templates
│   │   │   └── [id]/page.tsx # Edit template
│   │   └── settings/
│   │       └── page.tsx
│   ├── auth/
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   └── callback/route.ts
│   └── api/
│       ├── summarize/route.ts     # Core: OCR + summarize
│       ├── documents/route.ts     # CRUD documents
│       └── templates/route.ts    # CRUD templates
│
├── components/
│   ├── ui/                   # shadcn base (button, card, input, etc)
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   ├── TopNav.tsx
│   │   └── MobileNav.tsx
│   ├── upload/
│   │   ├── Dropzone.tsx
│   │   ├── ProgressCard.tsx
│   │   └── UploadOptions.tsx
│   ├── result/
│   │   ├── SummaryCard.tsx       # Generic card block
│   │   ├── SummaryTable.tsx      # Table output mode
│   │   ├── MetaChips.tsx
│   │   ├── TagList.tsx
│   │   └── ActionBar.tsx         # Share, export, new
│   ├── template/
│   │   ├── TemplateBuilder.tsx   # Build Your Own Summary Model
│   │   ├── FieldRow.tsx          # One custom field
│   │   └── TemplatePreview.tsx
│   ├── dashboard/
│   │   ├── StatGrid.tsx
│   │   └── DocTable.tsx
│   └── shared/
│       ├── ThemeToggle.tsx
│       ├── Logo.tsx
│       ├── EmptyState.tsx
│       └── LoadingSpinner.tsx
│
├── lib/
│   ├── supabase/
│   │   ├── client.ts         # Browser client
│   │   ├── server.ts         # Server client
│   │   └── middleware.ts
│   ├── openrouter/
│   │   ├── client.ts
│   │   ├── ocr.ts            # Image → text
│   │   └── summarize.ts      # Text → structured summary
│   ├── utils/
│   │   ├── fileToBase64.ts
│   │   ├── buildPrompt.ts    # Dynamic prompt builder
│   │   └── formatSummary.ts
│   └── types/
│       └── index.ts          # All shared TypeScript types
│
├── hooks/
│   ├── useUpload.ts
│   ├── useDocuments.ts
│   └── useTemplates.ts
│
├── store/
│   └── useAppStore.ts        # Zustand global state
│
├── styles/
│   └── globals.css
│
├── public/
│   └── logo.svg
│
├── middleware.ts             # Auth guard
├── .env.local
└── next.config.ts
```

## Core Data Flow

```
User uploads file
  → Dropzone (client)
  → /api/summarize (server)
    → if image: OCR via Gemini Vision (OpenRouter)
    → if PDF: extract text via pdf-parse
    → build prompt (default or custom template)
    → summarize via AI (OpenRouter)
    → parse structured JSON response
    → save to Supabase (documents table)
  → redirect to /result/[id]
  → render SummaryCard or SummaryTable
```

## Auth Flow
- Supabase Auth (email/password + magic link)
- Middleware protects all /app/* routes
- RLS on all DB tables (user can only see own data)
