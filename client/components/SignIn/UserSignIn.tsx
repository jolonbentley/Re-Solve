import { useAuth0 } from "@auth0/auth0-react";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import { Link } from "react-router-dom";

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
    <div className="content-center">
      <Link to="/challenges/">
        <button className="btn">Challenges</button>
      </Link>
      {isAuthenticated ? <LogOut></LogOut> : <LogIn></LogIn>}
    </div>)
}