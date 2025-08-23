export type Scores = Record<string, number>;
export type ThresholdBand = { label: string; min: number; max: number };
export type Thresholds = Record<string, { min: number; max: number; bands?: ThresholdBand[] }>;

// Deterministic pseudo-random generator to make tests stable when needed
function seededRandom(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    // xorshift32
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return ((state >>> 0) % 100000) / 100000;
  };
}

export function computeScores(answers: number[], domains: string[], opts?: { thresholds?: Thresholds; seed?: number }): Scores {
  if (!Array.isArray(answers) || !Array.isArray(domains) || answers.length !== domains.length) {
    throw new Error('answers and domains must be same-length arrays');
  }
  const rng = seededRandom(opts?.seed ?? 42);
  const totals: Record<string, { sum: number; count: number }> = {};
  for (let i = 0; i < answers.length; i++) {
    const domain = domains[i];
    const value = Number(answers[i]);
    if (!Number.isFinite(value)) continue;
    if (!totals[domain]) totals[domain] = { sum: 0, count: 0 };
    totals[domain].sum += value;
    totals[domain].count += 1;
  }
  const scores: Scores = {};
  for (const [domain, { sum, count }] of Object.entries(totals)) {
    const avg = count > 0 ? sum / count : 0;
    // Normalize to 0..100 scale from a 1..5 Likert by default
    const normalized = Math.max(0, Math.min(100, ((avg - 1) / 4) * 100));
    // Add tiny deterministic noise so strictly equal inputs still map deterministically across bands
    const jitter = rng() * 0.0001;
    scores[domain] = Number((normalized + jitter).toFixed(4));
  }
  return scores;
}

export function computeTypeCode(scores: Scores, thresholds: Thresholds): string {
  // Map each domain to a band label using thresholds.bands, then derive a code like A2-B1-C3
  const parts: string[] = [];
  const domainNames = Object.keys(scores).sort();
  for (const domain of domainNames) {
    const value = scores[domain];
    const t = thresholds[domain];
    if (!t) {
      parts.push(`${domain}:NA`);
      continue;
    }
    const bands = t.bands || [
      { label: '1', min: t.min, max: t.min + (t.max - t.min) / 3 },
      { label: '2', min: t.min + (t.max - t.min) / 3, max: t.min + (2 * (t.max - t.min)) / 3 },
      { label: '3', min: t.min + (2 * (t.max - t.min)) / 3, max: t.max + 0.0001 },
    ];
    const band = bands.find(b => value >= b.min && value < b.max) || bands[bands.length - 1];
    parts.push(`${domain}${band.label}`);
  }
  return parts.join('-');
}
