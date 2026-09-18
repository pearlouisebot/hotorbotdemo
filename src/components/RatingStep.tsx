interface Props {
  winnerName: string
  onDone: (rating: number) => void
}

export default function RatingStep({ winnerName, onDone }: Props) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.92)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 24, padding: 24, zIndex: 50 }}>
      <p style={{ fontSize: 18, fontWeight: 700, textAlign: 'center' }}>
        How excited are you about {winnerName}?
      </p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
        {[1,2,3,4,5,6,7,8,9,10].map(n => (
          <button key={n} onClick={() => onDone(n)}
            style={{ width: 48, height: 48, borderRadius: 8, border: '1px solid #444',
              background: 'transparent', color: 'white', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
            {n}
          </button>
        ))}
      </div>
      <p style={{ fontSize: 12, color: '#666' }}>1 = not really &nbsp;&nbsp; 10 = absolutely</p>
    </div>
  )
}
