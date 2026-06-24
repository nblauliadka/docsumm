import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // TODO: Implement document listing in Sprint 2
  return NextResponse.json({ 
    message: 'Documents API (GET) — Sprint 1 Placeholder',
    documents: []
  })
}

export async function POST(request: NextRequest) {
  // TODO: Implement document creation in Sprint 2
  return NextResponse.json({ 
    message: 'Documents API (POST) — Sprint 1 Placeholder',
    status: 'not_implemented' 
  }, { status: 501 })
}
