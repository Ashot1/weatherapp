import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
	const tag = new URL(req.url).searchParams.get('tag')

	if (tag) revalidateTag(tag)

	return NextResponse.json({ revalidateTag: true })
}
