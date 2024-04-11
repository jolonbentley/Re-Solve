import { useAuth0 } from "@auth0/auth0-react";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import { useUser } from "../../hooks/useUser";


export default function UserSignIn() {
  const { isAuthenticated, error, isLoading, getAccessTokenSilently, user } = useAuth0();

  const userObject = useUser();
  

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

  console.log(userObject)
  return (
    <div>
      {isAuthenticated ? <LogOut></LogOut> : <LogIn></LogIn>}
        <button className="btn bg-pink-300">Get User()</button>
      </div>)
}