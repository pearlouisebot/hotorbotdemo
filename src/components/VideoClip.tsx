import { useRef, useEffect } from 'react'
import { Person } from '../data/people'

interface Props {
  person: Person
  side: 'A' | 'B'
  isUnmuted: boolean
  onTap: () => void
  heightPct?: number
}

export default function VideoClip({ person, side, isUnmuted, onTap, heightPct = 40 }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = !isUnmuted
    if (isUnmuted) v.play().catch(() => {})
  }, [isUnmuted])

  return (
    <div onClick={onTap} style={{ height: `${heightPct}vh`, position: 'relative', overflow: 'hidden', cursor: 'pointer', flexShrink: 0 }}>
      <video ref={videoRef} src={person.clipUrl} poster={person.posterUrl}
        autoPlay muted loop playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />

      {/* top overlay */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '8px 10px',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontWeight: 700, fontSize: 15 }}>{person.name}</span>
          <span style={{ color: '#aaa', fontSize: 13 }}>{person.age}</span>
          {person.verified && (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="#FF4444">
              <path d="M7 1l1.5 2.5L11 4l-2 2 .5 3L7 7.5 4.5 9 5 6 3 4l2.5-.5L7 1z"/>
            </svg>
          )}
          <span style={{ color: '#888', fontSize: 12, marginLeft: 'auto' }}>{person.distance} mi</span>
        </div>
        {person.isSynthetic && (
          <span style={{ fontSize: 9, background: '#333', color: '#aaa', padding: '2px 6px', borderRadius: 4, letterSpacing: '0.05em' }}>
            AI DEMO PROFILE
          </span>
        )}
      </div>

      {/* side label */}
      <div style={{ position: 'absolute', top: 8, right: 10, background: 'rgba(0,0,0,0.5)',
        borderRadius: 4, width: 22, height: 22, display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontWeight: 700, fontSize: 13 }}>
        {side}
      </div>

      {/* unmuted indicator */}
      {isUnmuted && (
        <div style={{ position: 'absolute', bottom: 40, right: 10 }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
            <path d="M11 3v14l-5-4H2V7h4l5-4zm3 3a5 5 0 010 8M15.5 4.5a8 8 0 010 11"/>
          </svg>
        </div>
      )}

      {/* caption */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'rgba(0,0,0,0.65)', padding: '6px 10px' }}>
        <p style={{ fontSize: 11, lineHeight: 1.4, color: '#eee', margin: 0,
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as React.CSSProperties}>
          {person.caption}
        </p>
      </div>
    </div>
  )
}
