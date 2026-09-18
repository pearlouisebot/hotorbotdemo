import { useState, useRef, useCallback } from 'react'
import { PEOPLE } from '../data/people'
import { generatePairs } from '../lib/pairs'
import { getState, setState, AppState } from '../lib/storage'
import { updateElo } from '../lib/elo'
import VideoClip from '../components/VideoClip'
import AttributeChips from '../components/AttributeChips'
import RatingStep from '../components/RatingStep'
import PaywallSheet from '../components/PaywallSheet'

export default function Compare() {
  const [pairs] = useState(() => generatePairs(PEOPLE))
  const [appState, setAppState] = useState<AppState>(getState)
  const [unmutedSide, setUnmutedSide] = useState<'A' | 'B' | null>(null)
  const [fading, setFading] = useState(false)
  const [showPaywall, setShowPaywall] = useState(false)
  const [postVotePhase, setPostVotePhase] = useState<'rating' | 'chips' | null>(null)
  const pendingWinnerId = useRef<string | null>(null)
  const pendingVoteRef = useRef<AppState | null>(null)

  const pairIndex = appState.pairIndex
  const totalPairs = pairs.length
  const pair = pairs[pairIndex % pairs.length]
  const [personA, personB] = pair

  const commitVote = useCallback(() => {
    if (pendingVoteRef.current) {
      setState(pendingVoteRef.current)
      setAppState(pendingVoteRef.current)
    }
    pendingVoteRef.current = null
    pendingWinnerId.current = null
    setPostVotePhase(null)

    // animate to next pair
    setFading(true)
    setTimeout(() => setFading(false), 150)
  }, [])

  const vote = (side: 'A' | 'B', margin: 'clearly' | 'barely') => {
    const winner = side === 'A' ? personA : personB
    const loser = side === 'A' ? personB : personA
    const weight = margin === 'clearly' ? 1.0 : 0.6
    const [newWRating, newLRating] = updateElo(appState.ratings[winner.id] ?? 1500, appState.ratings[loser.id] ?? 1500, weight)

    const newVote = {
      pairIndex,
      winnerId: winner.id,
      loserId: loser.id,
      margin,
      timestamp: Date.now(),
    }

    const newState: AppState = {
      ...appState,
      ratings: { ...appState.ratings, [winner.id]: newWRating, [loser.id]: newLRating },
      votes: [...appState.votes, newVote],
      pairIndex: pairIndex + 1,
    }

    pendingWinnerId.current = winner.id
    pendingVoteRef.current = newState

    const isEvery10 = (pairIndex + 1) % 10 === 0
    const isEvery5 = (pairIndex + 1) % 5 === 0 && !isEvery10

    if (isEvery10) {
      setPostVotePhase('rating')
    } else if (isEvery5) {
      setPostVotePhase('chips')
    } else {
      commitVote()
    }
  }

  const handleRatingDone = (rating: number) => {
    if (pendingVoteRef.current) {
      const votes = [...pendingVoteRef.current.votes]
      votes[votes.length - 1] = { ...votes[votes.length - 1], winnerRating: rating }
      pendingVoteRef.current = { ...pendingVoteRef.current, votes }
    }
    const isEvery5 = ((pairIndex + 1) % 5 === 0)
    if (isEvery5) {
      setPostVotePhase('chips')
    } else {
      commitVote()
    }
  }

  const handleChipsDone = (attrs: string[]) => {
    if (pendingVoteRef.current) {
      const votes = [...pendingVoteRef.current.votes]
      votes[votes.length - 1] = { ...votes[votes.length - 1], attributes: attrs }
      pendingVoteRef.current = { ...pendingVoteRef.current, votes }
    }
    commitVote()
  }

  const winnerPerson = pendingWinnerId.current
    ? PEOPLE.find(p => p.id === pendingWinnerId.current)
    : null

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
      {/* header */}
      <div style={{ padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
        <span style={{ fontWeight: 700, fontSize: 15 }}>Who would you rather meet?</span>
        <span style={{ color: '#888', fontSize: 13 }}>{Math.min(pairIndex + 1, totalPairs)} / {totalPairs}</span>
      </div>

      {/* clips */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', opacity: fading ? 0 : 1, transition: 'opacity 150ms ease', overflow: 'hidden' }}>
        <VideoClip person={personA} side="A" isUnmuted={unmutedSide === 'A'} onTap={() => setUnmutedSide(s => s === 'A' ? null : 'A')} heightPct={38} />

        <div style={{ padding: '6px 16px', flexShrink: 0, background: '#111', textAlign: 'center' }}>
          <span style={{ fontSize: 12, color: '#888', fontStyle: 'italic' }}>"{pair[0].prompt}"</span>
        </div>

        <VideoClip person={personB} side="B" isUnmuted={unmutedSide === 'B'} onTap={() => setUnmutedSide(s => s === 'B' ? null : 'B')} heightPct={38} />
      </div>

      {/* vote buttons */}
      <div style={{ flexShrink: 0, padding: '8px 12px 4px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <button onClick={() => vote('A', 'clearly')}
          style={{ padding: '12px 0', background: '#FF4444', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 14, color: 'white', cursor: 'pointer' }}>
          A, clearly
        </button>
        <button onClick={() => vote('B', 'clearly')}
          style={{ padding: '12px 0', background: '#FF4444', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 14, color: 'white', cursor: 'pointer' }}>
          B, clearly
        </button>
        <button onClick={() => vote('A', 'barely')}
          style={{ padding: '12px 0', background: 'transparent', border: '1px solid #FF4444', borderRadius: 8, fontWeight: 600, fontSize: 14, color: '#FF4444', cursor: 'pointer' }}>
          A, barely
        </button>
        <button onClick={() => vote('B', 'barely')}
          style={{ padding: '12px 0', background: 'transparent', border: '1px solid #FF4444', borderRadius: 8, fontWeight: 600, fontSize: 14, color: '#FF4444', cursor: 'pointer' }}>
          B, barely
        </button>
      </div>

      {/* footer */}
      <div style={{ flexShrink: 0, padding: '6px 16px 8px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ color: '#555', fontSize: 13 }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="#555" style={{ verticalAlign: 'middle', marginRight: 4 }}>
            <rect x="2" y="6" width="10" height="7" rx="1"/><path d="M4 6V4a3 3 0 016 0v2"/>
          </svg>
          7 people picked you
        </span>
        <button onClick={() => setShowPaywall(true)}
          style={{ marginLeft: 4, background: 'none', border: 'none', color: '#FF4444', fontSize: 13, cursor: 'pointer', padding: 0, fontWeight: 600 }}>
          See who
        </button>
      </div>

      {/* post-vote overlays */}
      {postVotePhase === 'rating' && winnerPerson && (
        <RatingStep winnerName={winnerPerson.name} onDone={handleRatingDone} />
      )}
      {postVotePhase === 'chips' && (
        <AttributeChips onDone={handleChipsDone} />
      )}
      {showPaywall && <PaywallSheet onClose={() => setShowPaywall(false)} />}
    </div>
  )
}
