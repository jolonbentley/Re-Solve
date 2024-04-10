import { useAuth0 } from "@auth0/auth0-react";
import LogIn from "./LogIn";
import LogOut from "./LogOut";

export default function UserSignIn() {
  const { isAuthenticated, user, error, isLoading } = useAuth0();
  console.log('user: ', user)
  console.log('authed?: ', isAuthenticated)
  if (error) {
    return (
      <span>Error: {String(error)}</span>
    )
  }

  if (isLoading) {
    return (
      <span>Loading...</span>
    )
  }

  return isAuthenticated ? <LogOut></LogOut> : <LogIn></LogIn>
}