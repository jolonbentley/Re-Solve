import { useAuth0 } from '@auth0/auth0-react'

export default function LandingPage() {
  const { loginWithRedirect } = useAuth0()
  const handleSignIn = () => {
    loginWithRedirect({
      authorizationParams: {
        redirectUri: `${window.location.origin}/register`,
      },
    })
  }

  return (
    <div className="homepage-container">
      <button onClick={handleSignIn} className="btn-signup">
        Sign Up
      </button>
    </div>
  )
}
