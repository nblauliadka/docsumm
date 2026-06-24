import { useState, useEffect } from 'react'
import { Document } from '@/lib/types'

// Hook for fetching and managing documents
export function useDocuments() {
  const [documents, setDocuments] = useState<Document[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchDocuments()
  }, [])

  const fetchDocuments = async () => {
    // TODO: Implement real API call in Sprint 2
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/documents')
      const data = await response.json()
      setDocuments(data.documents || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch documents')
    } finally {
      setLoading(false)
    }
  }

  return { documents, loading, error, refetch: fetchDocuments }
}
