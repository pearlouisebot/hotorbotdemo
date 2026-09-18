import { useState } from 'react'

const CHIPS = ['her voice', 'her smile', 'funnier', 'more my type', 'felt real', 'skip']

interface Props {
  onDone: (attrs: string[]) => void
}

export default function AttributeChips({ onDone }: Props) {
  const [selected, setSelected] = useState<string[]>([])

  const toggle = (c: string) => {
    if (c === 'skip') { onDone([]); return }
    setSelected(s => s.includes(c) ? s.filter(x => x !== c) : [...s, c])
  }

  return (
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.92)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 20, padding: 24, zIndex: 50 }}>
      <p style={{ fontSize: 18, fontWeight: 700, textAlign: 'center' }}>What stood out?</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
        {CHIPS.map(c => (
          <button key={c} onClick={() => toggle(c)}
            style={{ padding: '10px 16px', borderRadius: 24, fontSize: 14, cursor: 'pointer',
              border: `1px solid ${selected.includes(c) ? '#FF4444' : '#444'}`,
              background: selected.includes(c) ? 'rgba(255,68,68,0.15)' : 'transparent',
              color: selected.includes(c) ? '#FF4444' : '#ccc' }}>
            {c}
          </button>
        ))}
      </div>
      <button onClick={() => onDone(selected)}
        style={{ marginTop: 8, padding: '12px 40px', background: '#FF4444',
          border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 15, cursor: 'pointer', color: 'white' }}>
        Done
      </button>
    </div>
  )
}
