import { createRoutesFromElements, Route } from 'react-router-dom'
import Home from './pages/home.tsx'
export default createRoutesFromElements(<Route index element={<Home />} />)
