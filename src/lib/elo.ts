export const K = 32
export const DEFAULT_RATING = 1500

export function expectedScore(ratingA: number, ratingB: number): number {
  return 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400))
}

export function updateElo(
  ratingWinner: number,
  ratingLoser: number,
  winWeight: number
): [number, number] {
  const expected = expectedScore(ratingWinner, ratingLoser)
  const newWinner = ratingWinner + K * (winWeight - expected)
  const newLoser = ratingLoser + K * (0 - (1 - expected))
  return [newWinner, newLoser]
}
