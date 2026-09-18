import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import TabBar from './components/TabBar'
import Compare from './screens/Compare'
import Matches from './screens/Matches'
import Week from './screens/Week'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/compare" replace />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/you" element={<Week />} />
          </Routes>
        </div>
        <TabBar />
      </div>
    </BrowserRouter>
  )
}
