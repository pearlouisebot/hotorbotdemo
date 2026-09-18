interface Props {
  onClose: () => void
}

export default function PaywallSheet({ onClose }: Props) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 100,
      display: 'flex', alignItems: 'flex-end' }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()}
        style={{ width: '100%', background: '#111', borderRadius: '16px 16px 0 0', padding: 32,
          display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ width: 40, height: 4, background: '#333', borderRadius: 2, margin: '0 auto' }} />
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>See who picked you</p>
          <p style={{ color: '#888', fontSize: 14 }}>7 people have already picked you. Find out who.</p>
        </div>
        <div style={{ background: '#1a1a1a', borderRadius: 12, padding: 20, textAlign: 'center' }}>
          <p style={{ fontSize: 28, fontWeight: 800, color: '#FF4444' }}>$9.99</p>
          <p style={{ color: '#666', fontSize: 13 }}>per month</p>
        </div>
        <button style={{ background: '#FF4444', border: 'none', borderRadius: 12, padding: '16px',
          fontSize: 17, fontWeight: 700, color: 'white', cursor: 'pointer' }}>
          Unlock
        </button>
        <button onClick={onClose}
          style={{ background: 'none', border: 'none', color: '#666', fontSize: 15, cursor: 'pointer', padding: '8px' }}>
          Not now
        </button>
      </div>
    </div>
  )
}
