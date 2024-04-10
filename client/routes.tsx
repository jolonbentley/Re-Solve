import { createRoutesFromElements, Route } from 'react-router-dom'
import Home from './pages/home.tsx'
import Challenge from './pages/challenge.tsx'
import Solution from './pages/solution.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<Home />}>
    <Route path="/challenge" element={<Challenge />} />
    <Route path="/solution" element={<Solution />} />
  </Route>,
)

export default routes
