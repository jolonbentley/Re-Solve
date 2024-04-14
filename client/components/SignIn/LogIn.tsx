import { useAuth0 } from '@auth0/auth0-react'

export default function LogIn() {
  const { loginWithRedirect } = useAuth0()
  const handleSignIn = () => {
    loginWithRedirect({
      authorizationParams: {
        redirectUri: `${window.location.origin}/register`,
      },
    })
  }

  return (
    <div className="flex flex-row content-center items-center">
      <button onClick={handleSignIn} className="btn bg-accent text-accent-content drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        Log In
      </button>
    </div>
  )
}
