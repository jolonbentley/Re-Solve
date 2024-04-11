import { useAuth0 } from "@auth0/auth0-react";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import { registerNewUser } from "../../apis/userAPI";
import useUser from "../../hooks/useUser";

export default function UserSignIn() {
  const { isAuthenticated, error, isLoading, getAccessTokenSilently, user } = useAuth0();
  const useUserResponse = useUser();
  const userData = useUserResponse

  const registerUser = async () => {
    const token = await getAccessTokenSilently();
    registerNewUser({ token , name: user?.name})
  }

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
        <button className="btn bg-pink-300" onClick={registerUser}>Sign me up()</button>
      </div>)
}