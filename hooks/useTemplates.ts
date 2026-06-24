import { useState, useEffect } from 'react'
import { Template } from '@/lib/types'

// Hook for fetching and managing templates
export function useTemplates() {
  const [templates, setTemplates] = useState<Template[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchTemplates()
  }, [])

  const fetchTemplates = async () => {
    // TODO: Implement real API call in Sprint 2
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/templates')
      const data = await response.json()
      setTemplates(data.templates || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch templates')
    } finally {
      setLoading(false)
    }
  }

  return { templates, loading, error, refetch: fetchTemplates }
}
