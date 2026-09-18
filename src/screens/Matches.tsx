import { useState } from 'react'
import { PEOPLE } from '../data/people'
import { getState } from '../lib/storage'
import MatchCard from '../components/MatchCard'
import VideoDate from '../components/VideoDate'
import { Person } from '../data/people'

export default function Matches() {
  const state = getState()
  const matches = PEOPLE.filter(p => state.matches.includes(p.id))
  const [selectedMatch, setSelectedMatch] = useState<Person | null>(null)
  const [inVideoDate, setInVideoDate] = useState(false)

  if (inVideoDate && selectedMatch) {
    return (
      <div style={{ flex: 1, position: 'relative' }}>
        <VideoDate person={selectedMatch} onEnd={() => { setInVideoDate(false); setSelectedMatch(null) }} />
      </div>
    )
  }

  if (selectedMatch) {
    return (
      <div style={{ flex: 1, position: 'relative' }}>
        <MatchCard person={selectedMatch} onStart={() => setInVideoDate(true)} onBack={() => setSelectedMatch(null)} />
      </div>
    )
  }

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
      <p style={{ fontWeight: 700, fontSize: 20, marginBottom: 20 }}>Matches</p>
      {matches.length === 0 && (
        <p style={{ color: '#555', textAlign: 'center', marginTop: 60 }}>Keep comparing to find matches.</p>
      )}
      {matches.map(person => (
        <button key={person.id} onClick={() => setSelectedMatch(person)}
          style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0',
            borderBottom: '1px solid #1a1a1a', background: 'none', border: 'none',
            color: 'white', cursor: 'pointer', textAlign: 'left' }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '1px solid #333' }}>
            <img src={person.posterUrl} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <p style={{ fontWeight: 600, fontSize: 16, marginBottom: 2 }}>{person.name}</p>
            <p style={{ color: '#888', fontSize: 13 }}>{person.age} &middot; {person.distance} mi</p>
          </div>
          <div style={{ marginLeft: 'auto', color: '#FF4444', fontSize: 12, fontWeight: 600 }}>
            VIDEO DATE
          </div>
        </button>
      ))}
    </div>
  )
}
