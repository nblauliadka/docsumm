import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // TODO: Implement OCR + Summarize in Sprint 2
  return NextResponse.json({ 
    message: 'Summarize API — Sprint 1 Placeholder',
    status: 'not_implemented' 
  }, { status: 501 })
}
