import { useAuth0 } from '@auth0/auth0-react'

export default function LogOut() {
  const { logout, user } = useAuth0()

  return (
    <div className="flex flex-row-reverse content-center items-center">
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
        className="btn bg-accent text-accent-content drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
      >
        Log Out
      </button>
      <span className="mr-2">Hello, {user?.given_name}</span>
    </div>
  )
}
