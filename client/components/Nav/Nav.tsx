import { Link } from 'react-router-dom'
import UserArea from './UserArea'
import Title from './Title'

export default function Nav() {
  return (
    <div className="">
      <div className="mb-2 grid grid-cols-3 bg-secondary px-4 pt-1 pb-1 text-secondary-content drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <div className="my-auto">
          <Link to="/">
            <img src="/images/logo.png" className=" max-w-28" alt="logo" />
          </Link>
        </div>
        <Title />
        <UserArea />
      </div>
    </div>
  )
}
