import { MongoClient } from 'mongodb'
import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

const uri = process.env.MONGO_URL
let client
let clientPromise

if (!uri) {
  throw new Error('Please add your Mongo URI to .env')
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri)
  clientPromise = client.connect()
}

async function getDatabase() {
  const client = await clientPromise
  return client.db('salih_maral_website')
}

// GET handler
export async function GET(request) {
  const { pathname } = new URL(request.url)

  try {
    if (pathname === '/api/health') {
      return NextResponse.json({ status: 'ok', timestamp: new Date().toISOString() })
    }

    if (pathname === '/api/contacts') {
      const db = await getDatabase()
      const contacts = await db.collection('contacts').find({}).sort({ createdAt: -1 }).limit(100).toArray()
      return NextResponse.json({ success: true, data: contacts })
    }

    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  } catch (error) {
    console.error('GET Error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// POST handler
export async function POST(request) {
  const { pathname } = new URL(request.url)

  try {
    if (pathname === '/api/contact') {
      const body = await request.json()
      const { name, email, phone, message, language } = body

      if (!name || !email || !phone || !message) {
        return NextResponse.json(
          { error: 'All fields are required' },
          { status: 400 }
        )
      }

      const db = await getDatabase()
      const contact = {
        id: uuidv4(),
        name,
        email,
        phone,
        message,
        language: language || 'de',
        createdAt: new Date().toISOString(),
        status: 'new'
      }

      await db.collection('contacts').insertOne(contact)

      return NextResponse.json({ success: true, data: contact })
    }

    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  } catch (error) {
    console.error('POST Error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// PUT handler
export async function PUT(request) {
  const { pathname } = new URL(request.url)

  try {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  } catch (error) {
    console.error('PUT Error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// DELETE handler
export async function DELETE(request) {
  const { pathname } = new URL(request.url)

  try {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  } catch (error) {
    console.error('DELETE Error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}