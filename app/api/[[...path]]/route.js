import { NextResponse } from 'next/server'

// Safe catch-all for undefined API routes
export async function GET() {
  return NextResponse.json({ error: 'Endpoint not found' }, { status: 404 })
}

export async function POST() {
  return NextResponse.json({ error: 'Endpoint not found' }, { status: 404 })
}

export async function PUT() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}

export async function DELETE() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}