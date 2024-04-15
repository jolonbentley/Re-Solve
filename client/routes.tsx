import { createRoutesFromElements, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Challenge from './pages/Challenge.tsx'
import Solution from './pages/Solution.tsx'
import App from './pages/App.tsx'
import LoginRedirect from './components/SignIn/LogInRedirect.tsx'
import Challenges from './pages/Challenges.tsx'
import Submit from './pages/Submit.tsx'
import Profile from './pages/Profile.tsx'
import EditProfile from './components/EditProfile.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/register" element={<LoginRedirect />} />
    <Route path="/challenges/" element={<Challenges />} />
    <Route path="/challenge/:id" element={<Challenge />} />
    <Route path="/solution/" element={<Solution />} />
    <Route path="/solution/:id" element={<Solution />} />
    <Route path="/submit" element={<Submit />} />
    <Route path="/profile/:id" element={<Profile />} />
    <Route path="profile/edit" element={<EditProfile />} />
  </Route>,
)

export default routes
