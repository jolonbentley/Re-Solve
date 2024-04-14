import Nav from '../components/Nav/Nav.tsx'
import Home from './Home.tsx'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer.tsx'


function App() {
  return (
    <div className="bg-neutral text-neutral-content">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
