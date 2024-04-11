import Nav from '../components/Nav.tsx'
import Home from './Home.tsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default App
