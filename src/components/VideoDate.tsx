import { useState, useEffect, useRef } from 'react'
import { Person } from '../data/people'

const ICEBREAKERS = [
  'What would you do with a surprise free day in this city?',
  'What is the best meal you have had in the past month?',
  'What is something you changed your mind about recently?',
  'What is the last thing you got genuinely excited about?',
  'What would you do differently if you moved here again?',
]

interface Props {
  person: Person
  onEnd: (meetInPerson: boolean | null) => void
}

export default function VideoDate({ person, onEnd }: Props) {
  const [secondsLeft, setSecondsLeft] = useState(180)
  const [muted, setMuted] = useState(false)
  const [ended, setEnded] = useState(false)
  const [meetChoice, setMeetChoice] = useState<boolean | null>(null)
  const icebreaker = useRef(ICEBREAKERS[Math.floor(Math.random() * ICEBREAKERS.length)])

  useEffect(() => {
    if (ended) return
    if (secondsLeft <= 0) { setEnded(true); return }
    const t = setTimeout(() => setSecondsLeft(s => s - 1), 1000)
    return () => clearTimeout(t)
  }, [secondsLeft, ended])

  const mins = Math.floor(secondsLeft / 60)
  const secs = secondsLeft % 60
  const timeStr = `${mins}:${secs.toString().padStart(2, '0')}`

  if (meetChoice !== null) {
    return (
      <div style={{ position: 'absolute', inset: 0, background: '#0a0a0a', zIndex: 30,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, padding: 32 }}>
        {meetChoice ? (
          <>
            <p style={{ fontSize: 22, fontWeight: 700, textAlign: 'center' }}>She said yes too.</p>
            <p style={{ color: '#888', textAlign: 'center' }}>Swap numbers?</p>
            <div style={{ background: '#1a1a1a', borderRadius: 12, padding: 20, textAlign: 'center', width: '100%' }}>
              <p style={{ color: '#FF4444', fontWeight: 700, fontSize: 16 }}>{person.name}</p>
              <p style={{ color: '#666', fontSize: 13 }}>Number hidden in demo</p>
            </div>
          </>
        ) : (
          <p style={{ fontSize: 18, color: '#888', textAlign: 'center' }}>No worries. Keep comparing.</p>
        )}
        <button onClick={() => onEnd(meetChoice)}
          style={{ background: '#FF4444', border: 'none', borderRadius: 12, padding: '14px 40px',
            fontSize: 16, fontWeight: 700, color: 'white', cursor: 'pointer', marginTop: 16 }}>
          Back to matches
        </button>
      </div>
    )
  }

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 30, background: '#000' }}>
      <video src={person.clipUrl} autoPlay loop playsInline muted={muted}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

      {/* icebreaker */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '16px 16px 40px',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.75), transparent)' }}>
        <p style={{ fontSize: 15, fontWeight: 600, textAlign: 'center', lineHeight: 1.4 }}>
          {icebreaker.current}
        </p>
      </div>

      {/* timer */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        background: 'rgba(0,0,0,0.5)', borderRadius: 12, padding: '8px 20px' }}>
        <p style={{ fontSize: 32, fontWeight: 800, fontVariantNumeric: 'tabular-nums' }}>{timeStr}</p>
      </div>

      {/* controls */}
      {!ended ? (
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px 32px 48px',
          background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={() => setMuted(m => !m)}
            style={{ background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%',
              width: 52, height: 52, color: 'white', fontSize: 13, cursor: 'pointer', fontWeight: 600 }}>
            {muted ? 'UNMUTE' : 'MUTE'}
          </button>
          <button onClick={() => setEnded(true)}
            style={{ background: '#FF4444', border: 'none', borderRadius: '50%',
              width: 52, height: 52, color: 'white', fontSize: 12, cursor: 'pointer', fontWeight: 700 }}>
            END
          </button>
        </div>
      ) : (
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 24px 48px',
          background: 'rgba(0,0,0,0.85)', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
          <p style={{ fontSize: 20, fontWeight: 700 }}>Meet in person?</p>
          <div style={{ display: 'flex', gap: 16, width: '100%' }}>
            <button onClick={() => setMeetChoice(true)}
              style={{ flex: 1, padding: 16, background: '#FF4444', border: 'none', borderRadius: 10,
                fontSize: 16, fontWeight: 700, color: 'white', cursor: 'pointer' }}>Yes</button>
            <button onClick={() => setMeetChoice(false)}
              style={{ flex: 1, padding: 16, background: '#222', border: '1px solid #444', borderRadius: 10,
                fontSize: 16, fontWeight: 700, color: 'white', cursor: 'pointer' }}>No</button>
          </div>
        </div>
      )}
    </div>
  )
}
