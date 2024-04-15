import { useState } from 'react'
import useUser from '../hooks/useUser'
import { Link } from 'react-router-dom'

export function MyProfile() {
  const user = useUser().data
  const id = Number(user?.id)

  return (
    <div>
      <div>
        <h2>Profile</h2>
      </div>
      <div>
        <Link to="/profile/edit">
          <button>Edit Profile</button>
        </Link>
      </div>
      <div>
        <img src={user?.profile_pic_url} alt="user portrait" />
      </div>
      <div>
        <ul key={id}>
          <li>Name: {user?.name}</li>
          <li>Experience: {user?.experience}</li>
          <li>Coolness: {user?.coolness}</li>
          <li>Spaghetness: {user?.spaghetness}</li>
          <li>Favourite Duck: {user?.favourite_duck}</li>
        </ul>
      </div>
    </div>
  )
}
