import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

import prismadb from '@/libs/prismadb'

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const body = req.json()

    const { name } = body as { name?: string }
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 })
    }
    if (!name) {
      return new NextResponse('Name is required', { status: 400 })
    }

    const store = await prismadb.store.create({ data: { name, userId } })

    return NextResponse.json(store)
  } catch (error) {
    console.log('[STORES_POST]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}