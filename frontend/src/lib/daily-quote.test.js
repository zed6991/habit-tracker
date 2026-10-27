import { describe, expect, it } from 'vitest'
import { QUOTES, quoteOfDay } from './daily-quote.js'

describe('quoteOfDay', () => {
  it('returns the same quote all day', () => {
    expect(quoteOfDay('2026-10-27')).toBe(quoteOfDay('2026-10-27'))
  })

  it('changes from one day to the next, across month and year ends', () => {
    for (const [a, b] of [['2026-10-27', '2026-10-28'], ['2026-10-31', '2026-11-01'], ['2026-12-31', '2027-01-01']]) {
      expect(quoteOfDay(a)).not.toBe(quoteOfDay(b))
    }
  })

  it('walks through every quote before repeating', () => {
    const start = Date.UTC(2026, 0, 1)
    const seen = new Set()
    for (let i = 0; i < QUOTES.length; i++) {
      seen.add(quoteOfDay(new Date(start + i * 86400000).toISOString().slice(0, 10)))
    }
    expect(seen.size).toBe(QUOTES.length)
  })

  it('falls back to the first quote on a malformed date', () => {
    expect(quoteOfDay('nope')).toBe(QUOTES[0])
    expect(quoteOfDay(undefined)).toBe(QUOTES[0])
  })

  it('has a text and an author on every entry', () => {
    for (const { q, a } of QUOTES) {
      expect(q.trim()).not.toBe('')
      expect(a.trim()).not.toBe('')
    }
  })
})
