import { DEFAULT_RATING } from './elo'
import { PEOPLE } from '../data/people'

export interface Vote {
  pairIndex: number
  winnerId: string
  loserId: string
  margin: 'clearly' | 'barely'
  attributes?: string[]
  winnerRating?: number
  timestamp: number
}

export interface AppState {
  ratings: Record<string, number>
  votes: Vote[]
  pairIndex: number
  matches: string[]
}

const KEY = 'hotorbot_state'

function defaultState(): AppState {
  const ratings: Record<string, number> = {}
  for (const p of PEOPLE) {
    ratings[p.id] = DEFAULT_RATING
  }
  // Pre-seed 2 demo matches
  return {
    ratings,
    votes: [],
    pairIndex: 0,
    matches: ['p3', 'p7'],
  }
}

export function getState(): AppState {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return JSON.parse(raw) as AppState
  } catch {}
  return defaultState()
}

export function setState(s: AppState): void {
  localStorage.setItem(KEY, JSON.stringify(s))
}

export function resetState(): void {
  localStorage.removeItem(KEY)
}
