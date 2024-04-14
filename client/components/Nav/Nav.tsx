import { Link } from 'react-router-dom'
import UserSignIn from '../SignIn/UserSignIn'
import Title from './Title'

export default function Nav() {
  return (
    <div className="">
      <div className="grid grid-cols-3 p-4 bg-secondary text-secondary-content mb-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <Link to="/">
          <img src="images/logo.png" className="w-24" alt="logo" />
        </Link>
        <Title />
        <UserSignIn />
      </div>
    </div>
  )
}
