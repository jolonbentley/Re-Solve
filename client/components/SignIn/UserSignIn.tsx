import { useAuth0 } from "@auth0/auth0-react";
import LogIn from "./LogIn";
import LogOut from "./LogOut";

export default function UserSignIn() {
  const { isAuthenticated, isLoading, error } = useAuth0();
  // Check Auth0 error/isloading
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

  return (
    <div>
      {isAuthenticated ? <LogOut></LogOut> : <LogIn></LogIn>}
    </div>)
}