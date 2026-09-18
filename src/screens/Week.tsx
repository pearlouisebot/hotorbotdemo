import { useState } from 'react'
import { getState, resetState } from '../lib/storage'
import { YOU } from '../data/people'
import PaywallSheet from '../components/PaywallSheet'

const DEMO = {
  pickRate: 68,
  percentile: 20,
  ageRange: '31-36',
  clearly: 45,
  barely: 23,
  passed: 32,
  clip1Rate: 72,
  clip2Rate: 64,
}

export default function Week() {
  const state = getState()
  const [showPaywall, setShowPaywall] = useState(false)

  const votes = state.votes
  const totalVotes = votes.length
  const wins = votes.filter(v => v.winnerId === 'you').length
  const pickRate = totalVotes > 0 ? Math.round((wins / totalVotes) * 100) : DEMO.pickRate
  const clearly = totalVotes > 0
    ? Math.round((votes.filter(v => v.winnerId === 'you' && v.margin === 'clearly').length / Math.max(totalVotes, 1)) * 100)
    : DEMO.clearly
  const barely = totalVotes > 0
    ? Math.round((votes.filter(v => v.winnerId === 'you' && v.margin === 'barely').length / Math.max(totalVotes, 1)) * 100)
    : DEMO.barely
  const passed = Math.max(0, 100 - clearly - barely)

  const handleReset = () => {
    resetState()
    window.location.reload()
  }

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '16px 16px 32px' }}>
      <p style={{ fontWeight: 700, fontSize: 20, marginBottom: 20 }}>Your Week</p>

      {/* big stat */}
      <div style={{ marginBottom: 24 }}>
        <p style={{ fontSize: 48, fontWeight: 800, lineHeight: 1, color: '#FF4444' }}>
          {pickRate}%
        </p>
        <p style={{ fontSize: 16, color: '#ccc', marginTop: 4 }}>of the time you were picked</p>
        <p style={{ fontSize: 13, color: '#666', marginTop: 6 }}>
          Top {DEMO.percentile}% in Austin, {DEMO.ageRange}
        </p>
      </div>

      {/* stacked bar */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', height: 12, borderRadius: 6, overflow: 'hidden', gap: 1, marginBottom: 10 }}>
          <div style={{ width: `${clearly}%`, background: '#FF4444' }} />
          <div style={{ width: `${barely}%`, background: '#882222' }} />
          <div style={{ width: `${passed}%`, background: '#222' }} />
        </div>
        <div style={{ display: 'flex', gap: 16, fontSize: 12, color: '#888' }}>
          <span><span style={{ color: '#FF4444' }}>■</span> Clearly {clearly}%</span>
          <span><span style={{ color: '#882222' }}>■</span> Barely {barely}%</span>
          <span><span style={{ color: '#444' }}>■</span> Passed {passed}%</span>
        </div>
      </div>

      {/* insight */}
      <div style={{ border: '1px solid #333', borderRadius: 12, padding: 16, marginBottom: 24 }}>
        <p style={{ fontSize: 13, color: '#aaa', marginBottom: 6, fontWeight: 600, letterSpacing: '0.05em' }}>
          INSIGHT
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.5 }}>
          When you win, it is usually clearly. Strong reactions beat lukewarm ones.
        </p>
      </div>

      {/* your clips */}
      <div style={{ marginBottom: 24 }}>
        <p style={{ fontWeight: 700, fontSize: 16, marginBottom: 14 }}>Your clips</p>
        <div style={{ display: 'flex', gap: 12 }}>
          {[
            { rate: DEMO.clip1Rate, label: 'Clip 1', weak: false },
            { rate: DEMO.clip2Rate, label: 'Clip 2', weak: true },
          ].map((clip, i) => (
            <div key={i} style={{ flex: 1, background: '#111', borderRadius: 12, overflow: 'hidden' }}>
              <div style={{ height: 100, background: '#1a1a1a', position: 'relative' }}>
                <img src={YOU.posterUrl} alt="you" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
              </div>
              <div style={{ padding: '10px 12px' }}>
                <p style={{ fontWeight: 700, fontSize: 16, color: '#FF4444' }}>{clip.rate}%</p>
                <p style={{ color: '#888', fontSize: 12 }}>pick rate</p>
                {clip.weak && (
                  <p style={{ color: '#666', fontSize: 11, marginTop: 6 }}>Try re-recording this one</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* locked */}
      <button onClick={() => setShowPaywall(true)}
        style={{ width: '100%', background: '#111', border: '1px solid #333', borderRadius: 12,
          padding: '16px', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', color: 'white' }}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="#555">
          <rect x="3" y="8" width="12" height="9" rx="1.5"/><path d="M5 8V6a4 4 0 018 0v2"/>
        </svg>
        <div style={{ textAlign: 'left' }}>
          <p style={{ fontWeight: 600, fontSize: 14 }}>12 people picked you clearly</p>
          <p style={{ color: '#FF4444', fontSize: 13, fontWeight: 600 }}>See who</p>
        </div>
      </button>

      {/* reset */}
      <button onClick={handleReset}
        style={{ width: '100%', marginTop: 32, background: 'none', border: '1px solid #333', borderRadius: 8,
          padding: '12px', color: '#555', fontSize: 14, cursor: 'pointer' }}>
        Reset demo
      </button>

      {showPaywall && <PaywallSheet onClose={() => setShowPaywall(false)} />}
    </div>
  )
}
