import { useAuth0 } from '@auth0/auth0-react'
import useUser from '../../hooks/useUser'
import { Link } from 'react-router-dom'

export default function LogOut() {
  const { logout, user } = useAuth0()
  const userData = useUser().data
  const profileAddress = `/profile/${userData?.id}`
  return (
    <div className="flex flex-col content-center items-center gap-1">
      <Link to={profileAddress}>
        <img src={user?.picture} className='rounded-lg w-20'></img>
      </Link>
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
        className="btn-sm bg-primary rounded-md text-primary-content drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
      >
        Log Out
      </button>
    </div>
  )
}
