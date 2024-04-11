import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useUser from "../../hooks/useUser";
import { useAuth0 } from "@auth0/auth0-react";


export default function LoginRedirect() {
  const navigate = useNavigate()
  const auth0 = useAuth0()
  const user = useUser()

  useEffect(() => {
    const res = async () => {
      if (user.data) {
        navigate('/')
      } else {
        if (Boolean(user.isSuccess) && auth0.user?.sub) {
          const token = await auth0.getAccessTokenSilently();
          user.add.mutate({ token: token , name: auth0.user?.name })
          navigate('/')
        }
      }
    }
    res()
  }, [navigate, user, auth0.user])

  return (
    <div>
      redirect after logging in
    </div>
  )
}