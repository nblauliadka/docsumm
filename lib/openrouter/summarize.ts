import { callOpenRouter } from './client'
import { SummaryOutput } from '@/lib/types'

// Summarize text using AI
export async function summarizeText(prompt: string): Promise<SummaryOutput> {
  const result = await callOpenRouter(
    'google/gemini-flash-1.5',
    [
      {
        role: 'user',
        content: prompt,
      },
    ],
    {
      temperature: 0.3,
      max_tokens: 4000,
    }
  )

  const content = result.choices[0].message.content
  
  // Parse JSON response
  try {
    return JSON.parse(content) as SummaryOutput
  } catch (error) {
    throw new Error('Failed to parse AI response as JSON')
  }
}
