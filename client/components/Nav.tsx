import { Link } from 'react-router-dom'
import UserSignIn from './SignIn/UserSignIn'

export default function Nav() {
  return (
    <div>
      <div>
        <Link to="/">
          <img src="images/logo.png" alt="logo" />
        </Link>
      </div>
      <div>
        <h1>Re:solve</h1>
      </div>
      <div>
        <UserSignIn />
      </div>
    </div>
  )
}
