import { NextResponse } from 'next/server'

export async function GET(req: Request) {
	const city = new URL(req.url).searchParams.get('city')
	if (!city) return NextResponse.json({ error: 'Отсутствует название города', ok: false })

	const apiKey = process.env.WEATHER_API_KEY

	const result = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=yes&alerts=no`)
		.then(response => response.json())
		.catch(e => ({ error: e.message }))

	if (result.error) return NextResponse.json({ error: result.error, ok: false })

	return NextResponse.json({ data: result, ok: true })
}