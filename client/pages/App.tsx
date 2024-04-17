import Nav from '../components/Nav/Nav.tsx'
import Home from './Home.tsx'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()
  return (
    <div className="bg-neutral text-neutral-content">
      <QueryClientProvider client={queryClient}>
        <Nav />
        <div className="body-div">
          <Outlet />
        </div>
        <Footer />
      </QueryClientProvider>
    </div>
  )
}

export default App
