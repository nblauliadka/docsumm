import { callOpenRouter } from './client'

// Extract text from image using Gemini Vision
export async function extractTextFromImage(base64Image: string): Promise<string> {
  const result = await callOpenRouter(
    'google/gemini-2.0-flash-exp',
    [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'Extract all text from this image. Return only the extracted text, no additional commentary.',
          },
          {
            type: 'image_url',
            image_url: {
              url: `data:image/jpeg;base64,${base64Image}`,
            },
          },
        ],
      },
    ]
  )

  return result.choices[0].message.content
}
