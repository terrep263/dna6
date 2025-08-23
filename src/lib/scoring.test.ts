import { describe, it, expect } from 'vitest'
import { computeScores, computeTypeCode, type Thresholds } from './scoring'

const domains = ['A', 'B', 'C', 'A', 'B', 'C']

const thresholds: Thresholds = {
  A: { min: 0, max: 100 },
  B: { min: 0, max: 100 },
  C: { min: 0, max: 100 },
}

describe('computeScores', () => {
  it('handles all-1s -> near 0', () => {
    const answers = [1, 1, 1, 1, 1, 1]
    const scores = computeScores(answers, domains, { seed: 1 })
    expect(scores.A).toBeGreaterThanOrEqual(0)
    expect(scores.B).toBeGreaterThanOrEqual(0)
    expect(scores.C).toBeGreaterThanOrEqual(0)
    expect(scores.A).toBeLessThan(1)
    expect(scores.B).toBeLessThan(1)
    expect(scores.C).toBeLessThan(1)
  })

  it('handles all-5s -> near 100', () => {
    const answers = [5, 5, 5, 5, 5, 5]
    const scores = computeScores(answers, domains, { seed: 1 })
    expect(scores.A).toBeGreaterThan(99)
    expect(scores.B).toBeGreaterThan(99)
    expect(scores.C).toBeGreaterThan(99)
  })

  it('handles alternating 1/5 -> around 50', () => {
    const answers = [1, 5, 1, 5, 1, 5]
    const scores = computeScores(answers, domains, { seed: 1 })
    expect(scores.A).toBeGreaterThan(45)
    expect(scores.A).toBeLessThan(55)
    expect(scores.B).toBeGreaterThan(45)
    expect(scores.B).toBeLessThan(55)
    expect(scores.C).toBeGreaterThan(45)
    expect(scores.C).toBeLessThan(55)
  })

  it('is deterministic given the same seed', () => {
    const answers = [2, 3, 4, 5, 1, 2]
    const s1 = computeScores(answers, domains, { seed: 7 })
    const s2 = computeScores(answers, domains, { seed: 7 })
    expect(s1).toEqual(s2)
  })
})

describe('computeTypeCode', () => {
  it('maps thresholds into bands deterministically', () => {
    const answers = [1, 1, 1, 1, 1, 1]
    const scores = computeScores(answers, domains, { seed: 123 })
    const code = computeTypeCode(scores, thresholds)
    expect(code).toMatch(/^A[1-3]-B[1-3]-C[1-3]$/)
  })

  it('higher inputs lead to higher bands', () => {
    const low = computeScores([1, 1, 1, 1, 1, 1], domains, { seed: 1 })
    const mid = computeScores([3, 3, 3, 3, 3, 3], domains, { seed: 1 })
    const high = computeScores([5, 5, 5, 5, 5, 5], domains, { seed: 1 })
    const lowCode = computeTypeCode(low, thresholds)
    const midCode = computeTypeCode(mid, thresholds)
    const highCode = computeTypeCode(high, thresholds)
    expect(lowCode).not.toEqual(highCode)
    expect([lowCode, midCode, highCode].every(c => /^A[1-3]-B[1-3]-C[1-3]$/.test(c))).toBe(true)
  })
})


