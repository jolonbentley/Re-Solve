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
      <div className="hello-container flex justify-center rounded-2xl bg-primary bg-opacity-80 p-0 text-primary-content">
        <div className="landing-text">
          <span className="text-5xl font-bold">Welcome to Re-Solve</span>
        </div>
        <div className="landing-text">
          <span className="text-3xl font-normal">
            Sign up today to get started with challenges
          </span>
        </div>
      </div>
      <div className="btn-signup-div">
        <button
          onClick={handleSignIn}
          className="btn glass btn-lg w-64 bg-accent text-accent-content drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] duration-300 hover:bg-white"
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}
