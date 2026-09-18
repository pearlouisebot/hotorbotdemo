import { useNavigate, useLocation } from 'react-router-dom'

const TABS = [
  { label: 'Compare', path: '/compare', icon: (active: boolean) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke={active ? '#FF4444' : '#666'} strokeWidth="1.5">
      <rect x="1" y="3" width="8" height="14" rx="1"/>
      <rect x="11" y="3" width="8" height="14" rx="1"/>
    </svg>
  )},
  { label: 'Matches', path: '/matches', icon: (active: boolean) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke={active ? '#FF4444' : '#666'} strokeWidth="1.5">
      <path d="M10 17s-7-4.5-7-9a4 4 0 018 0 4 4 0 018 0c0 4.5-7 9-7 9z"/>
    </svg>
  )},
  { label: 'You', path: '/you', icon: (active: boolean) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke={active ? '#FF4444' : '#666'} strokeWidth="1.5">
      <circle cx="10" cy="7" r="3.5"/>
      <path d="M2 18c0-4 3.6-7 8-7s8 3 8 7"/>
    </svg>
  )},
]

export default function TabBar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  return (
    <div style={{ background: '#0a0a0a', borderTop: '1px solid #1a1a1a' }}
      className="flex-shrink-0 flex">
      {TABS.map(tab => {
        const active = pathname === tab.path || (pathname === '/' && tab.path === '/compare')
        return (
          <button key={tab.path} onClick={() => navigate(tab.path)}
            className="flex-1 flex flex-col items-center gap-1 py-3"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            {tab.icon(active)}
            <span style={{ fontSize: 10, color: active ? '#FF4444' : '#666', letterSpacing: '0.05em' }}>
              {tab.label.toUpperCase()}
            </span>
          </button>
        )
      })}
    </div>
  )
}
