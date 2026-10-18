import { Routes, Route } from 'react-router'
import Event from './pages/event'
import Home from './pages/home'
import Home2 from './pages/home2'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home2" element={<Home2 />} />
      <Route path="/event/:id" element={<Event />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default App


