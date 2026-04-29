import { createClient } from '@sanity/client'

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID as string | undefined
const dataset = (import.meta.env.PUBLIC_SANITY_DATASET as string | undefined) ?? 'production'

const client = projectId
  ? createClient({
      projectId,
      dataset,
      useCdn: true,
      apiVersion: '2024-09-01',
    })
  : null

/**
 * Typed GROQ fetch — returns [] (or null) when Sanity credentials are not configured,
 * so the build doesn't crash during CI without env vars.
 */
export async function sanityFetch<T>(
  query: string,
  params?: Record<string, unknown>,
): Promise<T> {
  if (!client) {
    // No credentials: return safe empty value for arrays, null for single docs
    return (query.includes('[0]') ? null : []) as unknown as T
  }
  return client.fetch<T>(query, params ?? {})
}
