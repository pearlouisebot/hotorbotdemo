import { Person } from '../data/people'

interface Props {
  person: Person
  onStart: () => void
  onBack: () => void
}

export default function MatchCard({ person, onStart, onBack }: Props) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#0a0a0a', zIndex: 20,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24, padding: 32 }}>
      <button onClick={onBack}
        style={{ position: 'absolute', top: 16, left: 16, background: 'none', border: 'none',
          color: '#666', fontSize: 15, cursor: 'pointer' }}>
        Back
      </button>
      <div style={{ width: 100, height: 100, borderRadius: '50%', overflow: 'hidden', border: '2px solid #FF4444' }}>
        <img src={person.posterUrl} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{person.name}</p>
        <p style={{ color: '#888', fontSize: 14 }}>{person.age} &middot; {person.distance} mi</p>
      </div>
      <div style={{ background: '#1a1a1a', borderRadius: 12, padding: '16px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: 16, fontWeight: 600, color: '#FF4444', marginBottom: 4 }}>You both picked each other</p>
        <p style={{ color: '#888', fontSize: 13 }}>Start a 3-minute video date</p>
      </div>
      <button onClick={onStart}
        style={{ width: '100%', background: '#FF4444', border: 'none', borderRadius: 12, padding: '16px',
          fontSize: 17, fontWeight: 700, color: 'white', cursor: 'pointer' }}>
        Start 3-minute video date
      </button>
    </div>
  )
}
