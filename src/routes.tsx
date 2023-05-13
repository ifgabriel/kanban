import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from '@pages'

export const MappedRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
)