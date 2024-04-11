import { useAuth0 } from "@auth0/auth0-react";
import LogIn from "./LogIn";
import LogOut from "./LogOut";

export default function UserSignIn() {
  const { isAuthenticated, error, isLoading, getAccessTokenSilently } = useAuth0();

  const getAccessToken = async () => {
    const accessToken = await getAccessTokenSilently();
    return accessToken
  }

  const accessToken = getAccessToken();
  console.log(accessToken);

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