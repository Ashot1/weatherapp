import { NextResponse } from 'next/server'
import { Result } from 'postcss'

export async function GET(req: Request) {
	const city = new URL(req.url).searchParams.get('city')
	if(!city) return NextResponse.json({ error: 'Отсутствует название города', ok: false})

	const apiKey = process.env.WEATHER_API_KEY

	const result = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=yes&alerts=no`)
		.then(response => response.json())
		.catch(e => e.message)

	if(result.error) return NextResponse.json({error: result.error.message, ok: false})

	return NextResponse.json({data: result, ok: true})
}