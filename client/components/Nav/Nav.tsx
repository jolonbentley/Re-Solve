import { Link } from 'react-router-dom'
import UserSignIn from '../SignIn/UserSignIn'
import Title from './Title'

export default function Nav() {
  return (
    <div className="flex flex-row content-center items-center justify-between p-4">
      <Link to="/">
        <img src="images/logo.png" className="w-24" alt="logo" />
      </Link>
      <Title />
      <UserSignIn />
    </div>
  )
}
