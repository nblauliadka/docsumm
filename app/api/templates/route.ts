import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // TODO: Implement template listing in Sprint 2
  return NextResponse.json({ 
    message: 'Templates API (GET) — Sprint 1 Placeholder',
    templates: []
  })
}

export async function POST(request: NextRequest) {
  // TODO: Implement template creation in Sprint 2
  return NextResponse.json({ 
    message: 'Templates API (POST) — Sprint 1 Placeholder',
    status: 'not_implemented' 
  }, { status: 501 })
}
