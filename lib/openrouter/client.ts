// OpenRouter API client
export const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions'

export async function callOpenRouter(
  model: string,
  messages: Array<{ role: string; content: string | any[] }>,
  options?: {
    temperature?: number
    max_tokens?: number
  }
) {
  const response = await fetch(OPENROUTER_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: options?.temperature ?? 0.3,
      max_tokens: options?.max_tokens ?? 4000,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`OpenRouter API error: ${error}`)
  }

  return response.json()
}
