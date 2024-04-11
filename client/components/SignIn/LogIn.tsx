import { useAuth0 } from "@auth0/auth0-react";

export default function LogIn() {
  const { loginWithRedirect } = useAuth0();
  const handleSignIn = () => {
    loginWithRedirect( {authorizationParams: {redirectUri: `${window.location.origin}/register`}} )
  }

  return (
    <div className="flex flex-row content-center items-center">
      <button onClick={handleSignIn} className="btn">
        Log In
      </button>
      <span className="ml-2">Click here to sign in!</span>
    </div>
  )
}
