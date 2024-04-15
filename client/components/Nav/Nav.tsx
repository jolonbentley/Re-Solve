import { Link } from 'react-router-dom'
import UserArea from './UserArea'
import Title from './Title'

export default function Nav() {
  return (
    <div className="">
      <div className="mb-2 grid grid-cols-3 bg-secondary p-4 text-secondary-content drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <Link to="/">
          <img src="images/logo.png" className="w-24" alt="logo" />
        </Link>
        <Title />
        <UserArea />
      </div>
    </div>
  )
}
